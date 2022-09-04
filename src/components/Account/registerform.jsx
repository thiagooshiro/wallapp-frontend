import { TextField, Button, FormControl } from "@mui/material";
import { React, useState, useContext } from "react";
import { useRouter } from "next/router";
import { request, setHeaders } from "../../lib/requests"
import WallContext from "../../context/wallcontext";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function RegisterForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const { token } = useContext(WallContext);
  const router = useRouter();


  const registerNewUser = async () => {
    const endpoint = 'http://127.0.0.1:8000/accounts/user/';
    setHeaders(token)
    const data = await request(endpoint, { email, username, password }, 'post')
    console.log(data)
    if (data.status == 400) {
      return toast.error('Invalid data')
    }
    toast.success('user sucessfully registered')
    setTimeout(() => {router.push('/')}, 4000);
  }

  return (
    <>
      <ToastContainer
        data-testid="common_login__element-invalid-email"
        position="top-center"
      />
      <FormControl>
        <div>
          <TextField size="small" id="outlined-email" label="Email" variant="outlined"
            onChange={({ target }) => setEmail(target.value)} />
        </div>
        <div>
          <TextField size="small" id="outlined-username" label="Username" variant="outlined"
            onChange={({ target }) => setUsername(target.value)} />
        </div>
        <div>
          <TextField size="small" id="outlined-pass" label="Password" type="password" variant="outlined"
            onChange={({ target }) => setPassword(target.value)} />
        </div>
        <Button variant="outlined" onClick={registerNewUser}>
          Register!
        </Button>
      </FormControl>
    </>
  )
}

export default RegisterForm