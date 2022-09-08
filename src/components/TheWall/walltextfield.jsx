import { Button, FormControl, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import WallContext from "../../context/wallcontext";
import { setHeaders, request } from "../../lib/requests";


function WallTextField() {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const { token } = useContext(WallContext)

  const publishContent = async () => {
    const endpoint = 'http://127.0.0.1:8000/postwall/';
    setHeaders(token)
    let objectRequest;
    title ? objectRequest = { title, content } : objectRequest = { content }
    const data = await request(endpoint, objectRequest , 'post');
    console.log('publicar')
    if (data.status == 401) {
      return toast.error(data.error.message);
    }
  }


  return (
    <FormControl>
      <TextField label="Name your thoughts..." 
        onChange={({ target }) => setTitle(target.value)}
      />
      <TextField 
        multiline label="Share your thoughts..."
        onChange={({ target }) => setContent(target.value)}
      />
      <Button onClick={ publishContent }>Publish!</Button>
    </FormControl>
  )
}

export default WallTextField
