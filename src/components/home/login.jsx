import { TextField, Button, FormControl } from "@mui/material";
import { React, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { request } from "../../lib/requests";
import WallContext from "../../context/wallcontext";
import { ToastContainer, toast } from 'react-toastify';
import styles from "../../styles/Home.module.css";

import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { setUser, setToken } = useContext(WallContext);
  const router = useRouter();

  const checkCredentials = async () => {
    const endpoint = `${process.env.BASE_URL}accounts/login/`;
    try {
      const { data } = await request(endpoint, { email, password }, 'post');
      setUser({ username: data.username, email: data.email });
      setToken(data.token);
      router.push('/thewall');
    } catch (error) {
      return toast.error('Incorrect password or email');
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
      />
      <FormControl className={styles.loginform}>
        <TextField className={styles.item} size="small" id="outlined-email" label="Email" variant="outlined"
          onChange={({ target }) => setEmail(target.value)} />
        <TextField className={styles.item} size="small" id="outlined-pass" label="Password" type="password" variant="outlined"
          onChange={({ target }) => setPassword(target.value)} />
        <Button color="secondary" className={styles.item} variant="outlined" onClick={checkCredentials}>
          Login
        </Button>
        <Link href="/thewall">
          <Button color="secondary" variant="outlined">
            Continue as guest
          </Button>
        </Link>
      </FormControl>
    </>
  )
}

export default Login