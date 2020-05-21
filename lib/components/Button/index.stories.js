import React, { useState } from "react";
import { Button } from "./index";
import styled from "styled-components";
import { colorPicker } from "../../utils/_dashVariables";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { ThemeProvider } from "../../utils/ThemeProvider";
import { base } from "../../utils/_theme";

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  .second-btn {
    margin-left: 20px;
    height: 100px;
    width: 300px;
    display: flex;
    align-items: center;
    border-radius: 3px;
    justify-content: center;
    background: ${colorPicker.blue};
  }
`;

const StyledRollingBall = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: block;
  width: 30px;
  height: 30px;
  background: #ffb0de;
  border-radius: 50%;
  background: -webkit-radial-gradient(25px 25px, circle, #ffb0de, #ff66b6);
  background: -moz-radial-gradient(25px 25px, circle, #ffb0de, #ff66b6);
  background: radial-gradient(25px 25px, circle, #ffb0de, #ff66b6);

  ${(props) =>
    props.className === "rolling" &&
    `-webkit-animation: spin 1000ms linear infinite, moveLeftToRight 4s linear 1;
  -moz-animation: spin 1000ms linear infinite, moveLeftToRight 4s linear 1;
  -ms-animation: spin 1000ms linear infinite, moveLeftToRight 4s linear 1;
  animation: spin 1000ms linear infinite, moveLeftToRight 4s linear 1;`}

  -webkit-transition: all 1s ease;
  transition: all 1s ease;

  position: absolute;
  left: -50px;
  bottom: 20px;

  /* Spinning the sphere using key frames */
  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  /* Move sphere from left to right */
  @-moz-keyframes moveLeftToRight {
    0% {
      left: -100px;
    }
    100% {
      left: 100%;
    }
  }
  @-ms-keyframes moveLeftToRight {
    0% {
      left: -100px;
    }
    100% {
      left: 100%;
    }
  }
  @keyframes moveLeftToRight {
    0% {
      left: -100px;
    }
    100% {
      left: 100%;
    }
  }
  @-webkit-keyframes moveLeftToRight {
    0% {
      left: -100px;
    }
    100% {
      left: 100%;
    }
  }
`;

storiesOf("Examples|Components/Button", module)
  .add("Basic", () => {
    const [color, setColor] = useState("blue");

    const changeColor = () => {
      if (color === "blue") {
        return setColor("green");
      } else {
        return setColor("blue");
      }
    };

    return (
      <Button
        color={color}
        onClick={changeColor}
        onChange={() => setToggle(!toggle)}
      >
        Click here
      </Button>
    );
  })
  .add("with knobs", () => {
    const [state, setState] = useState({
      className: "static",
    });

    const label = "Button Colors";
    const options = ["blue", "green", "red", "gray", "white"];
    const defaultValue = "blue";
    const colorValue = select(label, options, defaultValue);

    const triggerBall = () => {
      setState((prevState) => ({
        ...prevState,
        className: "rolling",
      }));
      resetClass();
    };

    const resetClass = () => {
      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          className: "static",
        }));
      }, 5000);
    };

    return (
      <StyledButtons>
        <StyledRollingBall className={state.className} />
        <Button
          isLoading={boolean("isLoading", false)}
          isDisabled={boolean("isDisabled", false)}
          thin={boolean("thin", false)}
          plainText={boolean("plainText", false)}
          color={colorValue}
          onClick={triggerBall}
          invert={boolean("invert", false)}
        >
          {text("btnOneText", "Click me :D")}
        </Button>
        <div className="second-btn">
          <Button
            isLoading={boolean("isLoading", false)}
            isDisabled={boolean("isDisabled", false)}
            thin={boolean("thin", false)}
            plainText={boolean("plainText", false)}
            color="white"
            onClick={triggerBall}
            invert={boolean("invert", false)}
          >
            {text("btnTwoText", "No, click me!!")}
          </Button>
        </div>
      </StyledButtons>
    );
  })
  .addDecorator(withKnobs)
  .add("wrapped in ThemeProvider", () => {
    return (
      <StyledButtons>
        <ThemeProvider theme={base}>
          <Button onClick={action("button-click")} color="green">
            Marketing Button
          </Button>
        </ThemeProvider>
      </StyledButtons>
    );
  });
