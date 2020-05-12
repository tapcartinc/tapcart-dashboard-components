import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { ImageUploader } from "./index";

storiesOf("Examples|Components/ImageUploader", module).add("Basic", (props) => {
  const [state, setState] = useState({
    image: null,
    childRef: null,
  });

  const handleImageUpload = (files) => {
    const selectedImage =
      "https://66.media.tumblr.com/tumblr_macbbpcagJ1rwpp3eo1_400.png";
    setState({ image: selectedImage });
  };

  const handleRef = (ref) => {
    setState({
      childRef: ref,
    });
  };

  return (
    <>
      <ImageUploader
        handleRef={handleRef}
        value={state.image}
        handleImageUpload={handleImageUpload}
      />
    </>
  );
});
