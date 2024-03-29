import { NavLink, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import React, { useState, useEffect } from "react"
function Navbar() {
  
  const getFriendRanking = () => {
    let role = sessionStorage.getItem("role")
    switch(role) {
      case "best_friend":  
        return "Best Friend"
      case "friend":
        return "Friend"
      case "acquaintance":
        return "Acquaintance"
      case "new_user":
        return "New User"
      default:
        return ""
    }
  }

  let [logOut, setLogOut] = useState(false)
  let [currentFriend, setCurrentFriend] = useState(getFriendRanking())
  const navigate = useNavigate();

  useEffect(() => {
    if(sessionStorage.length > 0) {
      setLogOut(true)
    }
  }, [])

  let onclick = (event) => {
    event.preventDefault()
    sessionStorage.clear()
    navigate("/")
    window.location.reload()
  }

  //DESC: Standard nav bar
  //THOUGHTS: Considering trying my hand at the exclamation icon again, but at
  // cont. pretty much the end. I think I can do it now that I've had a taste of 
  // cont. javascript animation methods, but we'll see.
  return (
    <>
      <nav className="nav" >
        <div className="iconContainer">
          <NavLink to="/" id="logo" className={({ active, pending, transitioning }) => [
            pending ? "pending" : "",
            active ? "active" : "",
            transitioning ? "transitioning" : "",
          ].join(" ")}><FontAwesomeIcon icon={faLock} size="2xl" style={{ color: "whitesmoke", }} /></NavLink>
        </div>
        <div className="linksContainer">
          { currentFriend ? <p className="ranking">Current: <strong className="rankingText">{currentFriend}</strong></p> : ""}
          <NavLink to="/" className="link">Home</NavLink>
          { logOut ?  <p className="link logOut" onClick={(event) => onclick(event)}>Log Out</p> : <NavLink to="/register" className="link">Register</NavLink>}
          <NavLink to="/firstSecret" className="link">First Secret</NavLink>
          <NavLink to="/secondSecret" className="link">Second Secret</NavLink>
          <NavLink to="/thirdSecret" className="link">Third Secret</NavLink>
        </div>
      </nav>
    </>
  )
}


export default Navbar