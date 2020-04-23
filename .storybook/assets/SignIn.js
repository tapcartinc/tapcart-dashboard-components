import React, { useState } from "react";
import { Input, Button } from "../../lib";

const SignIn = (props) => {
  const [state, setState] = useState({
    input: "",
  });

  const setInput = (e) => {
    e.persist();

    setState(() => ({
      input: e.target.value,
    }));
  };
  return (
    <div className="">
      <Input value={state.input || ""} onChange={setInput} />
      <Button>Login</Button>
    </div>
  );
};
export default SignIn;
