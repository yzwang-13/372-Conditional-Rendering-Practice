import React from "react";
import Input from "./Input";

function Form(props) {
  console.log(props);
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.registered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.registered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
