import './App.css';
import ShareBnB from './api';
import useLocalStorage from './hooks/useLocalStorage';
import { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import {jwtDecode as decode} from "jwt-decode";

import RoutesList from './RoutesList';
import Navbar from './Navbar';

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
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)
  const [currentUser, setCurrentUser] = useState({
    data: null,
    infoLoaded: false
  });

  /** getPropertiesOnMount: Executes search without a search term. */

  useEffect(function getPropertiesOnMount() {
    console.log('useEffect getPropertiesOnMount');
    search();
  }, []);

  /** Get user data if token exists. */
  useEffect(
    function loadUserInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);

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


  /** addProperty: Makes a request to API to add a new property. Recieves
   * form data and file upload from form.
   */

  async function addProperty(formData, file){
    const resp = await ShareBnB.addProperty(formData, file);
    setProperties(p => ([...p, resp.property]))
  }

  /** search: Makes a request to API for properties that matches search term.*/

  async function search(term){
    console.log("App search term=", term)
    const { properties } = await ShareBnB.getProperties(term);
    console.log("search properties", properties)
    setProperties(properties);
    setIsLoading(false);
  }

  if (isLoading === true) return <p>Loading...</p>;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar search={search} />
        <RoutesList
            properties={properties}
            addProperty={addProperty}
            search={search}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
