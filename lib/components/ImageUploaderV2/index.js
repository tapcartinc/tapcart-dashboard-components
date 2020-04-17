import React, { useRef, useEffect } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "../../elements/Icon";
import PropTypes, { node } from "prop-types";
import {
  StyledImageInputWrapper,
  StyledLabel,
  StyledImageInputHolder,
  StyledImageInput,
  StyledImage,
  StyledImagePlaceholder
} from "./styles";

const ImageUploaderV2 = props => {
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
    <StyledImageInputWrapper className={className} {...props}>
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

export { ImageUploaderV2 };

ImageUploaderV2.propTypes = {
  /**
   * Allows you to pass a css classname to component for styling
   * Classname adjusts the style of the wrapper containing the entire component
   */
  className: PropTypes.string,
  /**
   * Placeholder text inside of the empty image box
   */
  placeholdeR: PropTypes.string,
  /**
   * This value should be the string that contains the url value for the image will be null if the value has not been set.
   */
  value: PropTypes.any.isRequired,
  /**
   * Useful if the ImageUploader component has is labeled consistently with the field labels throughout the merchant dashboard
   */
  label: PropTypes.string,
  /**
   * Function that gets called when user selects an image file
   */
  handleImageUpload: PropTypes.func,
  /**
   * Often used when the function that sets the value in the parent component sets the value for other fields as well
   * Lets the function know to correlate the (event target) name of the field with the correct value
   */
  name: PropTypes.string,
  /** Function that sets the inner ref for the react dropzone component
   * Reference the component's docs for more details
   */
  handleRef: PropTypes.func
};
