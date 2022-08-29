import {
  TextField, Button
} from "@mui/material";
import React from "react";
import Link from "next/link"


function Login() {

  return (
    <div>
      <div>
        <TextField size="small" id="outlined-basic" label="Email" variant="outlined" />
      </div>
      <div>
        <TextField size="small" id="outlined-basic" label="Password" variant="outlined" />
      </div>
      <Link href="/thewall">
        <Button variant="outlined">
          Login
        </Button>
      </Link>
    </div>
  )
}

export default Login