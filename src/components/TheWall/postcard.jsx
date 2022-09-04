import React from "react";

function Postcard({title, content, owner}) {
  return (
    <div>
      <h4>by {owner}</h4>
      <h4>{ title? title : ''}</h4>
      <p>{content}</p>
    </div>
  )
}

export default Postcard
