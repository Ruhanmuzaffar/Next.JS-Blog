import React from "react";
import Head from "next/dist/next-server/lib/head";
import Input from "../Input/Input";
import registerStyles from "./Register.module.css";

const Register = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      {/* navigation component here */}

      {/* <% if(typeof(user) != 'undefined'){ %> <%- include('partials/loggedInView')
    %> <% } else { %> <%- include('partials/notLoggedInView') %> <% } %> */}

      <div className={registerStyles["form-wrapper"]}>
        <div className={registerStyles["formContainer"]}>
          <h2>Register</h2>
          {/* <%- include ("./partials/messages") %> */}
          <form action="/users/register" method="POST">
            <br />

            <label>Name </label>
            <br />
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              icon="face"
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
            />

            <p>
              Have an account?
              <a href="/users/login">login</a>
            </p>
            <Input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
