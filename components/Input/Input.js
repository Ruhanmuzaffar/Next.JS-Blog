import React from "react";
import inputSyles from "./Input.module.css";
import Head from "next/head";

const Input = ({ name, id, value, placeholder, type, icon }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <div className={inputSyles.inputField}>
        <span className="material-icons">{icon}</span>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
        />
        <br />
      </div>
    </>
  );
};

export default Input;
