import React, { useEffect, useRef, useState } from "react";
import { Fields } from "../../lib/components/Fields";
import { Field } from "../../lib/components/Field";
import { Body } from "../../lib/elements/Typography";
import { ImageUploader } from "../../lib/components/ImageUploader";
import { colorPicker, sofiaPro } from "../../lib/utils/_dashVariables";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import styled from "styled-components";

export default {
  title: "Layout/Listings",
  decorators: [withKnobs]
};

export const listing = () => {
  const [state, setState] = useState({
    childRef: null
  });
  const inputRef = useRef();

  const handleImageUpload = files => {
    const selectedImage =
      "https://66.media.tumblr.com/tumblr_macbbpcagJ1rwpp3eo1_400.png";
    setState({ image: selectedImage });
  };

  const handleRef = ref => {
    setState({
      childRef: ref
    });
  };

  const handleClick = () => {
    state.childRef.current.open();
  };

  const label = "App icon";
  const description = (
    <div>
      Displays on the app stores as well as on <br />
      your customers phone. <br />
      <br />
      Suggested size: 1024 x 1024 pixels.
    </div>
  );
  const errors = null;

  return (
    <Fields sectionHeader="Branding">
      <div style={{ display: "flex" }}>
        <StyledListingSectionLeft>
          <StyledListingField>
            <StyledLabel>{label}</StyledLabel>
            <StyledDescription errors={errors}>{description}</StyledDescription>
            {errors && errors.length > 0 && (
              <StyledErrors errors={errors}>
                {errors.map(error => {
                  return <span key={error}>{error}</span>;
                })}
              </StyledErrors>
            )}

            <ImageUploader
              handleRef={handleRef}
              value={state.image}
              handleImageUpload={handleImageUpload}
              height="185px"
              width="185px"
              placeholder="Upload your app icon"
              borderRadius="35px"
              style={{ margin: "20px auto" }}
            />
          </StyledListingField>

          <StyledListingField
            style={{ borderTop: `1px solid ${colorPicker.gray25}` }}
          >
            <StyledLabel>{label}</StyledLabel>
            <StyledDescription errors={errors}>{description}</StyledDescription>
            {errors && errors.length > 0 && (
              <StyledErrors errors={errors}>
                {errors.map(error => {
                  return <span key={error}>{error}</span>;
                })}
              </StyledErrors>
            )}

            <ImageUploader
              handleRef={handleRef}
              value={state.image}
              handleImageUpload={handleImageUpload}
              height="185px"
              width="185px"
              placeholder="Upload your app icon"
              borderRadius="35px"
              style={{ margin: "20px auto" }}
            />
          </StyledListingField>
        </StyledListingSectionLeft>

        <StyledListingSectionRight>
          <StyledListingField>
            <StyledLabel>{label}</StyledLabel>
            <StyledDescription errors={errors}>{description}</StyledDescription>
            {errors && errors.length > 0 && (
              <StyledErrors errors={errors}>
                {errors.map(error => {
                  return <span key={error}>{error}</span>;
                })}
              </StyledErrors>
            )}

            <ImageUploader
              handleRef={handleRef}
              value={state.image}
              handleImageUpload={handleImageUpload}
              height="185px"
              width="185px"
              placeholder="Upload your app icon"
              borderRadius="35px"
              style={{ margin: "20px auto" }}
            />
          </StyledListingField>
        </StyledListingSectionRight>
      </div>
    </Fields>
  );
};

const StyledListingSectionRight = styled.div`
  height: 100%;
  width: 50%;
`;
const StyledListingSectionLeft = styled.div`
  height: 100%;
  width: 50%;
  border-right: 1px solid ${colorPicker.gray25};
`;

const StyledListingField = styled.div`
  padding: 19px 24px;
  width: 100%;
  text-align: left:
  display: flex;
  flex-direction: column;
  margin: 0 auto;

`;

const StyledLabel = styled(Body)`
  line-height: 20px;
  margin-top: 0px;
  margin-bottom: 3px;
`;

const StyledDescription = styled.div`
  color: ${colorPicker.gray};
  font-size: 13px;
  line-height: 18px;
  ${sofiaPro.regular}
  ${props => props.errors && props.errors.length > 0 && `display: none`};
`;
