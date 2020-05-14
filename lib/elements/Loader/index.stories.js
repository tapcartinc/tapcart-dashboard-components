import React from "react";
import { Loader } from "./index";
import { storiesOf } from "@storybook/react";
import { swatches } from "../../utils/_swatches";
import { withKnobs, select, number, boolean } from "@storybook/addon-knobs";
import { Button } from "../../components/Button";
import styled from "styled-components";

const StyledLoaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 600px;
  justify-content: space-around;
  flex-direction: column;
  ${(props) =>
    props.fill &&
    `height: 300px;
    width: 300px;
    background: ${swatches.blue};
  border-radius: 3px;`}
`;

storiesOf("Design Guidelines/Loader", module)
  .add("Basic", () => {
    const label = "Loading colors";
    const options = [
      { fg: swatches.blue, bg: "white" },
      { fg: swatches.green, bg: "white" },
      { fg: swatches.grayBlue, bg: "white" },
    ];
    const defaultValue = { fg: swatches.blue, bg: "white" };
    const loaderColor = select(label, options, defaultValue);
    return <Loader loaderColors={loaderColor} size={number("size", 25)} />;
  })
  .addDecorator(withKnobs)
  .add("inside of button", () => {
    return (
      <StyledLoaderContainer>
        <Button isLoading={boolean("isLoading", true)} color="blue">
          Button w loader
        </Button>
        <Button isLoading={boolean("isLoading", true)} color="green" plainText>
          plainText button
        </Button>
        <Button isLoading={boolean("isLoading", true)} color="red" invert>
          Button w loader
        </Button>
      </StyledLoaderContainer>
    );
  })
  .add("with background color on parent div", () => {
    return (
      <StyledLoaderContainer fill>
        <Loader
          loaderColors={{ fg: "white", bg: swatches.blue }}
          parentBgColor={swatches.blue}
        />
      </StyledLoaderContainer>
    );
  })
  .addDecorator(withKnobs);
