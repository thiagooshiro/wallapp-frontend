import { Button } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import WallContext from "../../context/wallcontext";
import styles from "../../styles/Home.module.css"

function Header() {
  const { user } = useContext(WallContext)

  return (
    <div className={styles.header}>
      <h1>{user.username ? `Welcome ${user.username}` : "Welcome Visitor"}</h1>
      {!user.username ?
        <div className={styles.container}>
          <Link href="/">
            <Button variant="outlined">
              Login
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="outlined">
              Register
            </Button>
          </Link>
        </div> : null}
    </div>
  )
}

export default Header
