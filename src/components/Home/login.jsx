import { TextField, Button, FormControl } from "@mui/material";
import { React, useState, useContext } from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import { request } from "../../lib/requests"
import WallContext from "../../context/wallcontext";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null);
  const { setUser, setToken } = useContext(WallContext);
  const router = useRouter();


  const checkCredentials = async () => {
    const endpoint = 'http://127.0.0.1:8000/accounts/login/';
    const data = await request(endpoint, { email, password }, 'post');
    if (data.status == 401) {
      return toast.error('Incorrect password or email');
    }
    setUser({ username: data.username, email: data.email });
    setToken(data.token);
    router.push('/thewall');
  }

  return (
    <>
      <ToastContainer
        position="top-center"
      />
      <FormControl>
        <div>
          <TextField size="small" id="outlined-email" label="Email" variant="outlined"
            onChange={({ target }) => setEmail(target.value)} />
        </div>
        <div>
          <TextField size="small" id="outlined-pass" label="Password" type="password" variant="outlined"
            onChange={({ target }) => setPassword(target.value)} />
        </div>
        <Button variant="outlined" onClick={checkCredentials}>
          Login
        </Button>
        <div>
          <Link href="/thewall">
            <Button variant="outilined">
              Continue as guest
            </Button>
          </Link>
        </div>
      </FormControl>
    </>
  )
}

export default Login