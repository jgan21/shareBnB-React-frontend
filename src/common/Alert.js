import React from "react";

/** Alert
 *
 * { LoginForm, SignupForm } -> Alert
*/

function Alert({ type = "danger", messages = []}) {
  console.debug("Alert", "type=", type, "messages=", messages);

  return (
    <div className={`alert alert-${type}`} role="alert">
      {messages.map((error, index) => (
        <p className="mb-0 small" key={index}>
          {error}
        </p>
      ))}
    </div>
  );
}

export default Alert;