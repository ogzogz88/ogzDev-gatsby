import React, { useEffect, useState } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children, atMainPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  const [scrollNav, setScrollNav] = useState(false);
  const handleScrollNav = () => {
    window.scrollY > 80 ? setScrollNav(true) : setScrollNav(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScrollNav);
  }, [])
  return (
    <>
      <Navbar scrollNav={scrollNav} atMainPage={atMainPage} toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
