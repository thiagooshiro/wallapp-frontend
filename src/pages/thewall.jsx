import React, { useContext, useState, useEffect } from "react";
import { FormControl, TextField, Button } from "@mui/material";
import Header from "../components/thewall/header";
import Postcard from "../components/thewall/postcard";
import WallContext from "../context/wallcontext";
import { setHeaders, request } from "../lib/requests";
import { ToastContainer, toast } from "react-toastify";
import styles from "../styles/Home.module.css";

import "react-toastify/dist/ReactToastify.css";


function TheWall() {
  const { user, token } = useContext(WallContext);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [toggle, setToggle] = useState(false);
  const [posts, setPosts] = useState(null);

  const publishContent = async () => {
    const endpoint = `${process.env.BASE_URL}postwall/`;
    setHeaders(token);
    try {
      let objectRequest;
      title ? objectRequest = { title, content } : objectRequest = { content }
      await request(endpoint, objectRequest, 'post');
      setContent('');
      setTitle('');
      toggle == true ? setToggle(false) : setToggle(true);
    } catch (error) {
      return toast.error('Cannot post with no content');
    }
  }

  useEffect(() => {
    populatePosts();
  }, [toggle]);

  const populatePosts = async () => {
    const endpoint = `${process.env.BASE_URL}postwall/feed/`
    try {
      const { data } = await request(endpoint, {}, 'get')
      return setPosts(data)

    } catch (error) {
      toast.error('Something went wrong')
    }
  }


  return (
    <div>
      <Header />
      <ToastContainer position="top-center" />
      <div className={styles.main}>
        <h1 className={styles.title}>The Noise...</h1>
        {user &&
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
          </FormControl>}
        <div>
          {posts ? posts.map(({ title, content, owner }, index) => (
            <Postcard key={index} title={title} owner={owner} content={content} />
          )) : <h4>Loading...</h4>}
        </div>
      </div>
    </div>
  )
}


export default TheWall