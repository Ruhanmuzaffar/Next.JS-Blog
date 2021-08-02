import React from "react";
import Head from "next/dist/next-server/lib/head";
import Input from "../Input/Input";
import registerStyles from "./Register.module.css";
import axios from "axios";
import { useState } from "react";
import Cookies from "universal-cookie";
let cookies = new Cookies();
import { useRouter } from "next/router";

const Register = () => {
  // state

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // router
  const router = useRouter();

  // handle register
  const handleRegister = async (event) => {
    event.preventDefault();

    console.log("submit", name, password2, password, email);

    await axios
      .post("https://blogged-for-you.herokuapp.com/api/register", {
        name,
        email,
        password,
        password2,
      })
      .catch((err) => console.log("Some error occured", err));
    router.push("/login");

    // axios.post
  };
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <div className={registerStyles["form-wrapper"]}>
        <div className={registerStyles["formContainer"]}>
          <h2>Register</h2>
          {/* <%- include ("./partials/messages") %> */}
          <form>
            <br />

            <label>Name </label>
            <br />
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              icon="face"
              setName={setName}
            />

            <br />
            <label>Email </label>
            <br />

            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
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
              placeholder="Password"
              icon="lock"
              setPassword={setPassword}
            />

            <br />

            <label>Confirm Password:</label>
            <br />

            <Input
              type="password"
              id="password2"
              name="password2"
              placeholder="Confirm Password"
              icon="lock"
              setPassword2={setPassword2}
            />

            <p>
              Have an account?
              <a href="/users/login">login</a>
            </p>
            <input type="button" value="Register" onClick={handleRegister} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
