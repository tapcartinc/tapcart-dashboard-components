import React, { useEffect, useRef, useState } from "react";
import { ImageUploader } from "../../lib/components/ImageUploader";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  component: ImageUploader,
  title: "Components/ImageUploader",
  decorators: [withKnobs]
};

export const imageUploader = () => {
  const [state, setState] = useState({
    image: null
  });

  const handleImageUpload = files => {
    const selectedImage =
      "https://66.media.tumblr.com/tumblr_macbbpcagJ1rwpp3eo1_400.png";
    setState({ image: selectedImage });
  };

  return (
    <ImageUploader value={state.image} handleImageUpload={handleImageUpload} />
  );
};
