import React from "react";
import styles from "../../styles/Home.module.css"


function Postcard({title, content, owner }) {
  return (
    <div className={styles.card}>
      <div className={styles.ownercontainer}>
        <h4>by {owner}</h4>
      </div>
      <h4>{ title? title : ''}</h4>
      <p>{content}</p>
    </div>
  )
}

export default Postcard
