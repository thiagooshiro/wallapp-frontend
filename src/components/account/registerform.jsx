import { TextField, Button, FormControl } from "@mui/material";
import { React, useState, useContext } from "react";
import { useRouter } from "next/router";
import { request, setHeaders } from "../../lib/requests";
import WallContext from "../../context/wallcontext";
import { ToastContainer, toast } from 'react-toastify';
import styles from "../../styles/Home.module.css";

import "react-toastify/dist/ReactToastify.css";


function RegisterForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const { token } = useContext(WallContext);
  const router = useRouter();

  const registerNewUser = async () => {
    const FOUR_SECONDS = 4000;
    const endpoint = `${process.env.BASE_URL}accounts/user/`;
    setHeaders(token);
    try {
      await request(endpoint, { email, username, password }, 'post');
      toast.success('user sucessfully registered');
      setTimeout(() => { router.push('/') }, FOUR_SECONDS);
    } catch (error) {
      return toast.error(error.message);
    }
  }

  return (
    <>
      <ToastContainer
        data-testid="common_login__element-invalid-register"
        position="top-center"
      />
      <FormControl className={styles.loginform}>
        <TextField className={styles.item} size="small" id="outlined-email" label="Email" variant="outlined"
          onChange={({ target }) => setEmail(target.value)} />

        <TextField className={styles.item} size="small" id="outlined-username" label="Username" variant="outlined"
          onChange={({ target }) => setUsername(target.value)} />
        <TextField className={styles.item} size="small" id="outlined-pass" label="Password" type="password" variant="outlined"
          onChange={({ target }) => setPassword(target.value)} />
        <Button color="secondary" variant="outlined" onClick={registerNewUser}>
          Register!
        </Button>
      </FormControl>
    </>
  )
}

export default RegisterForm