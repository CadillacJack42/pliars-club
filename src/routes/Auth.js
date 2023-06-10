import { useState } from "react";
import { signin } from "../utils/fetch-utils";
import "../css/Auth.css";
import { useAdmin } from "../hooks/useAdmin";

export const Auth = () => {
  const { setAdmin } = useAdmin();
  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");

  const handleSignInEmailChange = (e) => {
    setEmailSignIn(e.target.value);
  };
  const handleSignInPasswordChange = (e) => {
    setPasswordSignIn(e.target.value);
  };
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const user = await signin(emailSignIn, passwordSignIn).then((user) =>
      setAdmin(user)
    );
    console.log("USER AT LOGIN", user);
    if (user) {
      location.replace("/admin");
    }
  };
  return (
    <div className="auth-form-container">
      <p className="auth-form-title">Sign In</p>
      <form className="auth-form" onSubmit={handleSignInSubmit}>
        <label className="auth-form-input-label">
          Email
          <input
            className="auth-form-input"
            value={emailSignIn}
            onChange={handleSignInEmailChange}
          ></input>
        </label>
        <label className="auth-form-input-label">
          Password
          <input
            className="auth-form-input"
            value={passwordSignIn}
            onChange={handleSignInPasswordChange}
            type={"password"}
          ></input>
        </label>
        <button className="auth-form-submit-button">Submit</button>
      </form>
    </div>
  );
};
