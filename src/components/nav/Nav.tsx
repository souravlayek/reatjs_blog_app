import React from 'react'
import "./css/Nav.css"
import {FaSearch} from 'react-icons/fa'
import { BiMenuAltRight } from "react-icons/bi";

interface Props {
  openSearch: () => void
  openSideMenu: () => void
}

const Nav = (props: Props) => {
  return (
    <div className="nav">
      <div onClick={props.openSearch} className="search-left">
          <FaSearch color="#444444" size="13px" />
        </div>
      <div className="logo">
        <img src="https://theminimaldaily.com/wp-content/uploads/2018/11/Logo-Minimal-Daily-9g.png" alt="image_logo"/>
      </div>
      <div className="navlinks">
        <div className="nav-link-item">
          design
        </div>
        <div className="nav-link-item">
          list
        </div>
        <div className="nav-link-item">
          living
        </div>
        <div className="nav-link-item">
          essentials
        </div>
        <div className="nav-link-item">
          tips
        </div>
        <div className="nav-link-item">
          about
        </div>
      </div>
      <div className="end-items">
        <div onClick={props.openSearch} className="search">
          <FaSearch color="#444444" size="13px" />
        </div>
        <div onClick={props.openSideMenu} className="side-menu-btn">
          <BiMenuAltRight color="#444444" size="20px" />
        </div>
      </div>
    </div>
  )
}

export default Nav
