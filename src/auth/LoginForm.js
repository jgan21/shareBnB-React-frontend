import React, { useState } from "react";
import Alert from "../common/Alert";
import { useNavigate } from "react-router-dom";

/** Login form.
 *
 * Shows form and manages update to state on changes.
 *
 * On submission:
 * - calls login function prop
 *
 * Routes -> LoginForm -> Alert
 * Route : /login
 */

function LoginForm({ login, setShowLogin }) {
  console.log("LoginForm received login function:", login);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  /** Handle form submit:
   *
   * Calls login func prop, if unsuccessful, sets errors.
   */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      setShowLogin(false);
      navigate("/");
    } catch (err) {
      setFormErrors(err);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value }));
  }

  return (
    <div className="LoginForm">
      <h3 className="mb-3">Log In</h3>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />
            </div>

            {formErrors.length
              ? <Alert type="danger" messages={formErrors} />
              : null
            }

            <div className="d-grid">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;