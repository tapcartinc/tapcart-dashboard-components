import React from "react";
import { Header } from "../Typography";
import { swatches } from "./index";
import styled from "styled-components";

const IconGallery = (props) => {
  return (
    <StyledGallery>
      <div className="header">
        <Header>All Swatches:</Header>
      </div>
      <StyledSwatchList>
        {Object.entries(swatches).map((swatch) => {
          return (
            <StyledSwatchListItem>
              <StyledSwatch color={swatch[1]} />
              <span>{swatch[0]}</span>
            </StyledSwatchListItem>
          );
        })}
      </StyledSwatchList>
    </StyledGallery>
  );
};
export default IconGallery;

const StyledGallery = styled.div`
  .header {
    display: flex;
    align-items: center;
  }
`;

const StyledSwatchList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  justify-content: space-between;
  padding: 1em;
  margin: 1em auto;
  list-style: none;

  &:after {
    content: "";
    flex: auto;
  }
`;

const StyledSwatchListItem = styled.li`
  width: 150px;
  height: 120px;
  align-items: center;

  span {
    font-weight: 200;
    font-size: 13px;
  }
`;

const StyledSwatch = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 3px;
  background: ${(props) => props.color};
`;
