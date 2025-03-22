import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from '../homepage/Homepage';
import SignupForm from '../auth/SignupForm';
import LoginForm from '../auth/LoginForm';
import PropertiesPage from '../properties/PropertiesPage';
import AddPropertyForm from '../properties/AddPropertyForm';

/** Routes for ShareBnB.
 *
 * Props:
 * - properties:
 *    [{ id, name, address, backyard, pool, description, price, user_id }, ...]
 * - addProperty: fn to call in parent
 * - search: fn to call in parent
 *
 * - State: none
 *
 * App -> RoutesList -> { Homepage, PropertiesPage, AddPropertyForm }
*/

function RoutesList({ login, signup, currentUser }) {
  return (
    <div className="container pt-5">
      <Routes>
        {!currentUser &&
          <>
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
          </>
        }

        <Route path="/" element={<Homepage login={login} />} />

        {currentUser &&
          <>
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/add-property" element={<AddPropertyForm />} />
          </>
        }
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </div>
  );
}

export default RoutesList;