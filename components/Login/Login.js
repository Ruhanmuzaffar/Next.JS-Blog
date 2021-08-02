import React from "react";

import Input from "../Input/Input";
import inputStyles from "./Login.module.css";

import { useState } from "react";
import axios from "axios";

import { useRouter } from "next/dist/client/router";
import Cookies from "universal-cookie";
let cookies = new Cookies();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function submitForm(e) {
    e.preventDefault();
    console.log("-----------");
    // const res = await fetch("https://blogged-for-you.herokuapp.com/api/login", {
    //   method: "POST",
    //   body: JSON.stringify({ email: "ru@gmail.com", password: "Mangoes" }),

    //   mode: "no-cors",
    // })
    //   .then((t) => t.json())
    //   .catch((err) => console.log("err>>>>>", err));

    const data = axios
      .post("https://blogged-for-you.herokuapp.com/api/login", {
        email,
        password,
      })
      .then(function (response) {
        return response.data.accessToken;
      })

      .catch(function (error) {
        console.log(error);
      });

    const token = await data;
    console.log("access token", token);

    if (token) {
      console.log("u r logged in ");

      cookies.set("jwtToken", token, { path: "/" });

      // cookies.set('userId')
      router.push("/posts");

      // save token in cookie
      //rendiret to welcome page
    } else {
      // return to login page with message
      router.push("/login");
    }
  }
  return (
    <>
      <div className={inputStyles["form-wrapper"]}>
        <div className={inputStyles["formContainer"]}>
          <h2>Log in</h2>

          <form>
            <br />

            <label>Email </label>
            <br />

            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              icon="email"
              setEmail={setEmail}
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
              setPassword={setPassword}
            />

            <br />
            <p>
              <a href="/users/register">Register?</a>
            </p>
            {/* <Input type="submit" value="Log In" /> */}
            <input type="button" value="Submit" onClick={submitForm} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
