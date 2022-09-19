import React, { useContext, useState, useEffect } from "react"
import { FormControl, TextField, Button } from "@mui/material"
import Header from "../components/TheWall/header"
import Postcard from "../components/TheWall/postcard"
import WallContext from "../context/wallcontext"
import { setHeaders, request } from "../lib/requests"
import { ToastContainer, toast } from "react-toastify";
import styles from "../styles/Home.module.css"

import "react-toastify/dist/ReactToastify.css";


function TheWall() {
  const { user } = useContext(WallContext)
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [toggle, setToggle] = useState(false);
  const [posts, setPosts] = useState(null)
  const { token } = useContext(WallContext)


  const publishContent = async () => {
    const endpoint = 'http://127.0.0.1:8000/postwall/';
    setHeaders(token)
    let objectRequest;
    title ? objectRequest = { title, content } : objectRequest = { content }
    const data = await request(endpoint, objectRequest, 'post');
    console.log(data)
    if (data.status == 401 || data.status == 400) {
      return toast.error(data.error.message);
    }
    setContent('')
    setTitle('')
    toggle == true ? setToggle(false) : setToggle(true);
  }

  useEffect(() => {
    populatePosts()
  }, [toggle])

  const populatePosts = async () => {
    const endpoint = 'http://127.0.0.1:8000/postwall/feed/'
    const posts = await request(endpoint, {}, 'get')
    console.log(posts)

    if (!posts | posts.status === 0) return null

    return setPosts(posts)
  }


  return (
    <div>
      <Header />
      <ToastContainer position="top-center" />
      <div className={styles.main}>
        <h1 className={styles.title}>The Noise...</h1>
        {user ?
          <FormControl>
            <TextField label="Name your thoughts..."
              onChange={({ target }) => setTitle(target.value)}
              value={title}
            />
            <TextField
              multiline label="Share your thoughts..."
              onChange={({ target }) => setContent(target.value)}
              value={content}
            />
            <Button onClick={publishContent}>Publish!</Button>
          </FormControl> : null}
        <div>
          {posts ? posts.map(({ title, content, owner }, index) => (
            <Postcard  key={index} title={title} owner={owner} content={content} />
          )) : <h4>An error has ocurred...</h4>}
        </div>
      </div>
    </div>
  )
}


export default TheWall