import React from "react";
import Link from "next/link";

function SignUp() {
  return (
    <div>
      <h4>{"Don't have and account? "}
      <Link href='/account'>
        Sign Up
      </Link>
      </h4>
    </div>
  )
}

export default SignUp
