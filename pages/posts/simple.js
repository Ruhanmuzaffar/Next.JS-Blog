import React from "react";

const simple = () => {

    async function submitForm(){

        
    }
  return (
    <form
      action="https://blogged-for-you.herokuapp.com/api/login"
      method="POST"
    >
      <label>username</label>
      <input type="text" name="username" />
      <label htmlFor="password">password</label>
      <input type="password" name="password" id="password" />
      <input type="button" value="Submit" onClick={sumbitForm} />
    </form>
  );
};

export default simple;
