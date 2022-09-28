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
  const [password, setPassword] = useState('');
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

  const validateEmail = () => {
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = () => {
    const MIN_PASSWORD = 8;
    return password.length >= MIN_PASSWORD;
  };


  return (
    <>
      <ToastContainer
        position="top-center"
      />
      <FormControl className={styles.loginform}>
        <TextField className={styles.item} 
          size="small"
          id="outlined-email"
          label="Email"
          variant="outlined"
          onChange={({ target }) => setEmail(target.value)}
          helperText={ email && !validateEmail() && "Invalid email format" }
          error={ email && !validateEmail() }
        />
        <TextField
          className={styles.item}
          size="small"
          id="outlined-pass"
          label="Password"
          type="password"
          variant="outlined"
          onChange={({ target }) => setPassword(target.value)}
          helperText={ password && !validatePassword() && "Password must have at least 8 characters" }
          error={ password && !validatePassword() }
        />
        <Button
          color="secondary"
          className={styles.item}
          variant="outlined"
          onClick={checkCredentials}
          disabled={ !validateEmail() || !validatePassword() }
        >
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