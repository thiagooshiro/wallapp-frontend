import React from "react";
import RegisterForm from "../components/account/registerform";
import styles from "../styles/Home.module.css"


function Account() {
  return (
    <div className={styles.main}>
      <RegisterForm/>
    </div>
  )
}

export default Account
