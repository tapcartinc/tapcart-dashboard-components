import React, { useState, useEffect, useRef } from "react";
import { Searchbar } from "../../components/Searchbar";
import { sofiaPro } from "../../utils/_dashVariables";
import GalleryContainer from "./GalleryContainer";
import styled from "styled-components";
import { P2 } from "../Typography";

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
        <P2>All Icons:</P2>
        <Searchbar
          onChange={(e) => setState(e.target.value)}
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
  p {
    margin-right: 50px;
  }
`;
