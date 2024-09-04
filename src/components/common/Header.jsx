import React, { useState, useEffect } from "react";
import LogoImg from "../assets/images/UNI_LOGO-removebg-preview.png";
import { LinkData } from "../assets/data/dummydata";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownButton,
  DropdownItem,
} from "react-bootstrap";
import axios from "axios";
import profile from "../assets/images/profile.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = () => {
  window.addEventListener("DOMContentLoaded", () => {
    var user2 = localStorage.getItem("user");
    var user = "";
    if (user2) {
      user = JSON.parse(user2);
      document.querySelector(".user").innerHTML =
        "<img src='./images/student.png' />";

      const logedin = localStorage.getItem("user");
    }
  });
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
    window.location.href = "/";
  };
  {
    /*const [profile, setProfile] = useState({});
useEffect(() => {
  fetch('https://unih0me.com/api/auth/login')
    .then(response => response.json())
    .then(data => {
      setProfile(data.data);
    })
    .catch(error => {
      console.error(error);
    });
}, []);*/
  }

  return (
    <>
      <header className="bg-white py-2 text-black sticky z-50 shadow-md top-0 left-0 w-full">
        <div className="container flex justify-between items-center">
          <div className="logo flex items-center ">
            <Link to="/">
              <img src={LogoImg} alt="logo" width={70} height={70} />
            </Link>
            '<span className="text-xl font-bold text-orange-500">UNIHOME</span>
            {/* <div className="category flex items-center text-sm gap-3">
              <HiViewGrid size={20} />
              <span>category</span>
              </div> */}
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className="flex items-center gap-6 ml-5">
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-sm  text-orange-500" : "text-[15px]"
                    }
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flex items-center gap-4">
            {!localStorage.getItem("user") ? (
              <div className="user d-flex gap-3 justify-center align-items-center">
                <Link to="/login">
                  <button className="login">Login</button>
                </Link>

                <Dropdown>
                  <Dropdown.Toggle
                    variant=" primary"
                    id="dropdown-basic"
                    className="register ml-3"
                  >
                    Register
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/register/teacher">
                      As a Teacher
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/register/student">
                      As a Student
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <img
                  src={profile}
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                ></img>

                <NavDropdown
                  id="nav-dropdown"
                  title="Profile "
                  menuVariant="light"
                >
                  <NavDropdown.Item as={Link} to="/dashboard">
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/instructor">
                    Instructors
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/session">
                    Sessions
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/settings">
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}> Logout</NavDropdown.Item>
                </NavDropdown>
              </div>
            )}
            <button className="open-menu" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
