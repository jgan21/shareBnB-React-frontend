import React, { useContext} from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navbar.css"

/** Navigation bar for ShareBnb.
 *
 * App -> Navbar
*/

function Navbar({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/properties">
          Properties
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <Link className="nav-link" to="/" onClick={logout}>
            Log out {currentUser.firstName}
          </Link>
        </li>
      </ul>
    );
  }

  function loggedOutNav(){
    return (
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/login">
          Login
          </NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/signup">
          Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }

    return (
      <nav className="Navbar navbar navbar-expand-md">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          ShareBnB
          </Link>
          {currentUser ? loggedInNav() : loggedOutNav() }
        </div>
      </nav>
    );
  }

export default Navbar;