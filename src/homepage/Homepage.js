import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaSwimmer, FaTree } from "react-icons/fa";
import LoginForm from "../auth/LoginForm";
import UserContext from "../auth/UserContext";
import "./Homepage.css";

/** Homepage.
 *
 * Shows welcome message and login/signup buttons.
 *
 * Routes -> Homepage
 *
 */

function Homepage({ login }) {
  const { currentUser } = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="Homepage">
      <div className="container text-center main-container">
        <h1 className="fw-bold">ShareBnB</h1>
        <p className="lead">
          Rent a backyard or pool for your next gathering, relaxation,
          or a fun day out!
        </p>

        {currentUser
          ? (<h2>Welcome back, {currentUser.first_name}!</h2>)
          : (
            <div className="auth-buttons">
              <Link className="btn btn-primary fw-bold me-3" to="/signup">
                Sign Up
              </Link>
              <button
                className="btn btn-secondary fw-bold"
                onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </div>
          )
        }
      </div>

      <div className="row feature-container">
        <div className="col-md-5 feature-card">
          <FaTree className="icon tree-icon" />
          <h2 className="feature-title">Rent a Backyard</h2>
          <p className="feature-text">
            Find the perfect green space for BBQs, picnics, and parties.
          </p>
        </div>
        <div className="col-md-5 feature-card">
          <FaSwimmer className="icon pool-icon" />
          <h2 className="feature-title">Book a Pool</h2>
          <p className="feature-text">
            Enjoy a refreshing swim in a private pool, any time you want.
          </p>
        </div>
      </div>

      {showLogin && (
        <div className="login-modal">
          <div className="login-modal-content">
            <button className="close-btn" onClick={() => setShowLogin(false)}>
              ✖
            </button>
            <LoginForm login={login} setShowLogin={setShowLogin}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;


