import './App.css';
import ShareBnB from './api/api';
import useLocalStorage from './hooks/useLocalStorage';
import UserContext from './auth/UserContext';
import RoutesList from './routes-nav/RoutesList';
import Navbar from './routes-nav/Navbar';
import { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import {jwtDecode as decode} from "jwt-decode";

export const TOKEN_STORAGE_ID = "sharebnb-token"
/** App for ShareBnB.
 *
 * Props:
 * - none
 *
 * State:
 * - isLoading
 * - properties
 *
 * App -> { Navbar, RoutesList }
*/

function App() {
  // const [properties, setProperties] = useState([]);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)
  const [currentUser, setCurrentUser] = useState({
    data: null,
    infoLoaded: false
  });

  /** Get user data if token exists. */
  useEffect(
    function loadUserInfo() {
      // console.debug("App useEffect loadUserInfo", "token=", token);

      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = decode(token)
            ShareBnB.token = token;
            let currentUser = await ShareBnB.getCurrentUser(username);

            setCurrentUser({
              infoLoaded: true,
              data: currentUser
            });
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
            setCurrentUser({
              infoLoaded: true,
              data: null
            });
          }
        } else {
          setCurrentUser({
            infoLoaded: true,
            data: null
          });
        }
      }
      getCurrentUser();
    },
    [token]
  );

  /** Handles site-wide logout. */
  function logout() {
    setCurrentUser({
      infoLoaded: true,
      data: null
    });
    setToken(null);
  }

  /** Handles site-wide login. */
  async function login(loginData) {
    let token = await ShareBnB.login(loginData);
    setToken(token)
  }

  /** Handles site-wite signup.
   *
   * Automatically logs them in (set token) upon signup.
   *
   * await this function to see if any error happens.
   */

  async function signup(signupData) {
    let token = await ShareBnB.signup(signupData);
    setToken(token);
  }

  if (!currentUser.infoLoaded) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          currentUser: currentUser.data,
          setCurrentUser,
        }}
        >
        <div className="App">
            <Navbar logout={logout} />
            <RoutesList
              currentUser={currentUser.data}
              login={login}
              signup={signup}
            />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
