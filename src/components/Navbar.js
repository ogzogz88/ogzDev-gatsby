import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ scrollNav, atMainPage, toggleSidebar }) => {
  const style = scrollNav || !atMainPage ? { background: "white", boxShadow: "0 0 3px hsl(210, 31%, 80%)" } : { background: "transparent" };
  return (
    <nav className="navbar" style={style}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links" ></PageLinks>

      </div>
    </nav>

  )
}

export default Navbar
