import React from "react";
import inputSyles from "./Input.module.css";
import Head from "next/head";

const Input = ({
  name,
  id,
  value,
  placeholder,
  type,
  icon,
  setEmail,
  setPassword,
  setPassword2,
  setName,
}) => {
  function onChangeHandler(event) {
    if (setName) {
      setName(event.target.value);
    }
    if (setEmail) {
      setEmail(event.target.value);
    }

    if (setPassword) {
      setPassword(event.target.value);
    }
    if (setPassword2) {
      setPassword2(event.target.value);
    }
  }

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
          onChange={onChangeHandler}
        />
        <br />
      </div>
    </>
  );
};

export default Input;
