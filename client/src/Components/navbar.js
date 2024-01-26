import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faExclamation } from "@fortawesome/free-solid-svg-icons"
function Navbar () {
  return (
    <>
      <nav className="nav" >
        <div className="iconContainer">
          <NavLink to="/home" id="logo" className={({ active, pending, transitioning }) => [
            pending ? "pending" : "",
            active ? "active" : "",
            transitioning ? "transitioning": "",
          ].join(" ")}><FontAwesomeIcon icon={faLock} size="2xl" style={{color: "whitesmoke",}} /></NavLink>
        </div>
        <div className="linksContainer">
          <NavLink to="/home" className="link">Home</NavLink>
          <NavLink to="/register" className="link">Register</NavLink>
          <NavLink to="/firstSecret" className="link">First Secret</NavLink>
          <NavLink to="/secondSecret" className="link">Second Secret</NavLink>
          <NavLink to="/thirdSecret" className="link">Third Secret</NavLink>
        </div>
        <div className="iconContainer">
          <FontAwesomeIcon className="exclamIcon" icon={faExclamation} size="2xl" style={{color: "whitesmoke",}} />
        </div>
      </nav>
    </>
  )
}


export default Navbar