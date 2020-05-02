import React, { useState } from "react";
import { InputV2 } from "./index";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

storiesOf("Examples|Components/InputV2", module)
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
      <InputV2
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
      <InputV2
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
      <InputV2
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
