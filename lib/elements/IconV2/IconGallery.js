import React, { useState, useEffect, useRef } from "react";
import { SearchBar } from "../../components/SearchBar";
import { Header } from "../Typography";
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
        <Header>All Icons:</Header>
        <SearchBar
          onChange={(e) => setState(e.target.value)}
          value={state}
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
  h1 {
    margin-right: 50px;
  }
`;
