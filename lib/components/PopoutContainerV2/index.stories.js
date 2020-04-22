import React, { useState } from "react";
import PopoutContainerV2 from "./index";
import { colorPicker } from "../../utils/_dashVariables";
import { ContainerBox } from "../../layout/ContainerBox";
import { storiesOf } from "@storybook/react";
import PopoutItem from "./PopoutItem";
import PopoutOptions from "./PopoutOptions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { PopoutOptionV2 } from "./PopoutOptionV2";
import { Toggle } from "../Toggle";

storiesOf("Examples|Components/PopoutContainerV2", module)
  .add("Basic", () => {
    const [colorState, setColorState] = useState(colorPicker.blue);

    return (
      <PopoutContainerV2 direction="right">
        <PopoutItem>
          <ContainerBox
            customHeight={200}
            customWidth={300}
            customWidthMd={100}
            bg={colorState}
          />
        </PopoutItem>
        <PopoutOptions>
          <PopoutOptionV2
            id={1}
            onClick={() => console.log("edit")}
            icon="edit"
            label="edit"
          ></PopoutOptionV2>
          <PopoutOptionV2
            id={2}
            onClick={() => console.log("edit")}
            icon="edit"
            label="edit"
          ></PopoutOptionV2>
        </PopoutOptions>
      </PopoutContainerV2>
    );
  })
  .add("Left direction", () => {
    return (
      <div style={{ marginLeft: 200 }}>
        <PopoutContainerV2 direction="left">
          <PopoutItem>
            <ContainerBox
              customHeight={200}
              customWidth={300}
              customWidthMd={100}
              bg={colorPicker.blue}
            />
          </PopoutItem>
          <PopoutOptions>
            <PopoutOptionV2
              id={1}
              onClick={() => console.log("edit")}
              icon="edit"
              label="edit"
            ></PopoutOptionV2>
            <PopoutOptionV2
              id={2}
              onClick={() => console.log("edit")}
              icon="edit"
              label="edit"
            ></PopoutOptionV2>
          </PopoutOptions>
        </PopoutContainerV2>
      </div>
    );
  })
  .add("With functional components inside items", () => {
    const [toggle, setToggle] = React.useState(false);

    return (
      <PopoutContainerV2 direction="right">
        <PopoutItem>
          <ContainerBox
            customHeight={200}
            customWidth={300}
            customWidthMd={100}
            bg={colorPicker.blue}
          />
        </PopoutItem>
        <PopoutOptions>
          <PopoutOptionV2
            onClick={() => console.log("edit title")}
            icon="edit"
            label="edit title"
          ></PopoutOptionV2>
          <PopoutOptionV2 icon="text-icon" label="title">
            <Toggle
              type="basic"
              id="toggle"
              toggleState={toggle}
              onChange={() => setToggle(!toggle)}
            />
          </PopoutOptionV2>
          <PopoutOptionV2
            onClick={() => console.log("upload banner")}
            icon="images"
            label="upload banner"
          ></PopoutOptionV2>
          <PopoutOptionV2
            onClick={() => console.log("remove banner")}
            icon="images"
            label="remove banner"
          ></PopoutOptionV2>
          <PopoutOptionV2
            onClick={() => console.log("delete")}
            icon="trash"
            label="delete"
          ></PopoutOptionV2>
        </PopoutOptions>
      </PopoutContainerV2>
    );
  });
