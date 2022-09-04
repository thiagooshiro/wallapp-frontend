import React, { useContext } from "react";
import WallContext from "../../context/wallcontext";

function Header() {
  const { user } = useContext(WallContext)

  return (
    <div>
      <h1>{user.username? `Welcome ${user.username}`: "Welcome visitor"}</h1>
    </div>
  )
}

export default Header
