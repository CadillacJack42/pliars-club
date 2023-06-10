import { useState } from "react";
import { signup } from "../utils/fetch-utils";
export const CreateNewAdminForm = () => {
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");

  const handleSignUpUsernameChange = (e) => {
    setUsernameSignUp(e.target.value);
  };
  const handleSignUPEmailChange = (e) => {
    setEmailSignUp(e.target.value);
  };
  const handleSignUpPasswordChange = (e) => {
    setPasswordSignUp(e.target.value);
  };
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const user = await signup(emailSignUp, passwordSignUp);
    console.log("A NEW ADMIN WAS CREATED. THIS SHOULD BE ALERT");
  };
  return (
    <div className="auth-form-container">
      <p className="auth-form-title">Create New Admin</p>
      <form className="auth-form" onSubmit={handleSignUpSubmit}>
        <label className="auth-form-input-label">
          Email
          <input
            className="auth-form-input"
            value={emailSignUp}
            onChange={handleSignUPEmailChange}
            type={"email"}
          ></input>
        </label>
        <label className="auth-form-input-label">
          Password
          <input
            className="auth-form-input"
            value={passwordSignUp}
            onChange={handleSignUpPasswordChange}
            type={"password"}
          ></input>
        </label>

        <button className="auth-form-submit-button">Submit</button>
      </form>
    </div>
  );
};
