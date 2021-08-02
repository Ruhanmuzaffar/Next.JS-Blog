import React from "react";
import { useRouter } from "next/dist/client/router";

const simple = (props) => {
  const router = useRouter();

  console.log("query>>>", router.query.abc);
  console.log("post>>>.", router.query.data);
  return (
    <form>
      <label htmlFor="email">email </label>
      <input type="text" name="email" id="email" />
    </form>
  );
};

export default simple;
