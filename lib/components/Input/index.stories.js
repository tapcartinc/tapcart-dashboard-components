import React, { useState } from "react";
import { Input } from "./index";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { Icon } from "../../elements/Icon";
import { Button } from "../../components/Button";

import { withKnobs, text, boolean } from "@storybook/addon-knobs";

const StyledCustomLabel = styled.div`
  display: flex;
  align-items: center;
`;

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
      error: false,
    });

    const setPassword = (e) => {
      e.persist();
      setState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    const toggleInputError = () => {
      setState((prevState) => ({
        ...prevState,
        error: !prevState.error,
      }));
    };

    return (
      <>
        <Input
          errors={state.error && ["There's been an error"]}
          label={
            <StyledCustomLabel>
              Enter Name
              <Icon iconRight type="account" />
            </StyledCustomLabel>
          }
          onChange={setPassword}
          value={state.password || ""}
          placeholder="Enter password"
          name="password"
          type="password"
        />
        <br />
        <Button kind="primary--reversed" onClick={toggleInputError}>
          Toggle Error
        </Button>
      </>
    );
  });
