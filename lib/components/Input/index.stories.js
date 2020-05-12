import React, { useState } from "react";
import { Input } from "./index";
import { storiesOf } from "@storybook/react";

import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("Examples|Components/Input", module)
  .add("Basic", (props) => {
    const [state, setState] = React.useState({
      input: "",
    });

    const setInput = (e) => {
      e.persist();
      setState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    return (
      <Input
        label="Input label"
        onChange={setInput}
        value={state.input || ""}
        placeholder="Enter Input Text"
        name="input"
      />
    );
  })
  .add("password", (props) => {
    const [state, setState] = React.useState({
      password: "",
    });

    const setPassword = (e) => {
      e.persist();
      setState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    return (
      <Input
        label="Enter password"
        onChange={setPassword}
        value={state.password || ""}
        placeholder="Enter password"
        name="password"
        type="password"
      />
    );
  })
  .add("error", (props) => {
    const [state, setState] = React.useState({
      password: "",
    });

    const setPassword = (e) => {
      e.persist();
      setState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    return (
      <Input
        errors={["There's been an error"]}
        label="Enter password"
        onChange={setPassword}
        value={state.password || ""}
        placeholder="Enter password"
        name="password"
        type="password"
      />
    );
  });
