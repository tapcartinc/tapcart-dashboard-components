import React, { Component } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import { Icon } from "../../elements/Icon";
import { colorPicker, sofiaPro } from "../../utils/_dashVariables";
import { Body } from "../../elements/Typography";

const ImageUploader = props => {
  const onDropHandler = files => {
    return props.handleImageUpload(files);
  };

  const {
    className,
    placeholder,
    value,
    label,
    handleImageUpload,
    ...dropzoneProps
  } = props;
  return (
    <StyledImageInputWrapper {...props}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledImageInput>
        <Dropzone onDrop={onDropHandler} {...dropzoneProps}>
          {({ getRootProps, getInputProps, isDragActive }) => {
            console.log("getInputProps", getInputProps);
            return (
              <StyledImageInputHolder {...getRootProps()}>
                <input {...getInputProps()} />
                {value ? (
                  <StyledImage src={value} />
                ) : (
                  <StyledImagePlaceholder>
                    <Icon type="upload-cloud" />
                    <p>{placeholder ? placeholder : "Upload an image"}</p>
                  </StyledImagePlaceholder>
                )}
              </StyledImageInputHolder>
            );
          }}
        </Dropzone>
      </StyledImageInput>
    </StyledImageInputWrapper>
  );
};

export { ImageUploader };

const StyledImageInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 13px;
  padding-right: 15px;
  ${sofiaPro.regular}
`;

const StyledLabel = styled(Body)`
  margin-bottom: 7px;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${colorPicker.black};
`;

const StyledImageInputHolder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

const StyledImageInput = styled.div`
  width: 320px;
  height: 170px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${colorPicker.grayBlue};
`;
const StyledImage = styled.img`
  background: ${colorPicker.offWhite};
  cursor: pointer;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyledImagePlaceholder = styled.div`
  background: ${colorPicker.offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  line-height: 1.27;
  text-align: center;
  color: ${colorPicker.blue};
  cursor: pointer;
  height: 100%;
  width: 100%;

  p {
    padding: 5px;
  }

  &:focus {
    outline: none;
  }
`;
