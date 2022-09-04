import React from "react"
import Header from "../components/TheWall/header"
import Postcard from "../components/TheWall/postcard"

import { request } from "../lib/requests"

function TheWall({ posts }) {

  return (
    <div>
      <Header />
      <h1>The noise...</h1>
      <p>posttextField</p>
      <div>
        {posts.map(({title, content, owner}, index)=>(
          <Postcard key={index} title={title} owner={owner} content={content}/>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const endpoint = 'http://127.0.0.1:8000/postwall/feed/'
  const posts = await request(endpoint, {}, 'get')

  return {
    props: { posts }
  }
}

export default TheWall