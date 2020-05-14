import React, { useState, useEffect, useRef } from "react";
import { Searchbar } from "../../components/Searchbar";
// import {  } from "../Typography";
import GalleryContainer from "./GalleryContainer";
import styled from "styled-components";

const IconGallery = (props) => {
  const [state, setState] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef && inputRef.current) {
      return inputRef.current.focus();
    }
  }, []);
  return (
    <StyledIconGallery>
      <div className="header">
        <h3>All Icons:</h3>
        <Searchbar
          onChange={(e) => setState(e.target.value)}
          // value={state}
          innerRef={inputRef}
          maxLength={50}
          placeholder="Search Icons"
        />
      </div>
      <GalleryContainer input={state} />
    </StyledIconGallery>
  );
};
export default IconGallery;

const StyledIconGallery = styled.div`
  .header {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-right: 50px;
  }
`;
