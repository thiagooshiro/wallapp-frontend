import React from "react";
import Link from "next/link";

function SignUp() {
  return (
    <div>
      <h4>{"Don't have and account?"}</h4>
      <Link href='/account'>
        <a>Sign Up</a>
      </Link>
    </div>
  )
}

export default SignUp
