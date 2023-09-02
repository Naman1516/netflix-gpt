import React from "react";
import Header from "./Header";
import SignInUpForm from "./SignInUpForm";
import { SIGNINUP_BG } from "../utils/constants";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={SIGNINUP_BG} alt="login background" />
      </div>
      <SignInUpForm />
    </div>
  );
};

export default Login;
