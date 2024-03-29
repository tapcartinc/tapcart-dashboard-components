import React, { useRef, useEffect } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import { Icon } from "../../elements/Icon";
import { colorPicker, sofiaPro } from "../../utils/_dashVariables";
import { Body } from "../../elements/Typography";
import { useDropzone } from "react-dropzone";

const ImageUploader = props => {
  const {
    className,
    placeholder,
    value,
    label,
    handleImageUpload,
    name,
    handleRef,
    ...dropzoneProps
  } = props;

  const childRef = useRef(null);

  useEffect(() => {
    handleRef && handleRef(childRef);
  }, []);

  return (
    <StyledImageInputWrapper {...props}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledImageInput hasValue={value} {...props}>
        <Dropzone
          ref={childRef}
          onDrop={files => handleImageUpload(files, name)}
          {...dropzoneProps}
        >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <StyledImageInputHolder {...getRootProps()} {...props}>
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
  padding-right: 5px;
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
  ${props => props.borderRadius && `border-radius: ${props.borderRadius}`};
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

const StyledImageInput = styled.div`
  width: 320px;
  min-height: 170px;
  height: auto;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${colorPicker.grayBlue};
  ${props => props.hasValue && `border: 1px solid ${colorPicker.lightGray}`};
  transition: all 0.2s ease;
  ${props => props.borderRadius && `border-radius: ${props.borderRadius}`};
  ${props => props.width && `width: ${props.width}`};
  ${props => props.height && `height: ${props.height}`};
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 2px ${colorPicker.blue};
  }
`;
const StyledImage = styled.img`
  background: ${colorPicker.offWhite};
  cursor: pointer;
  width: 100%;
  height: 100%;
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
  min-height: 170px;

  p {
    padding: 5px;
  }

  &:focus {
    outline: none;
  }
`;
