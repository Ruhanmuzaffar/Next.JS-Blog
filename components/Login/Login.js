import React from "react";
import Input from "../Input/Input";
import inputStyles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <div className={inputStyles["form-wrapper"]}>
        <div className={inputStyles["formContainer"]}>
          <h2>Log in</h2>

          <form
            action="https://blogged-for-you.herokuapp.com/api/login"
            method="POST"
          >
            <br />

            <label>Email </label>
            <br />

            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              icon="email"
            />

            <br />

            <br />
            <label>Password:</label>
            <br />

            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              icon="lock"
            />

            <br />
            <p>
              <a href="/users/register">Register?</a>
            </p>
            <Input type="submit" value="Log In" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
