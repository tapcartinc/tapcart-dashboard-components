import React from "react";
import { swatches } from "../../lib/utils/_swatches";
import styled from "styled-components";
import { P3, P2 } from "../../lib/elements/Typography";

const IconGallery = (props) => {
  return (
    <StyledGallery>
      <div className="header">
        <P2>All Swatches:</P2>
      </div>
      <StyledSwatchList>
        {Object.entries(swatches).map((swatch) => {
          return (
            <StyledSwatchListItem key={swatch[0]}>
              <StyledSwatch color={swatch[1]} />
              <P3>{swatch[0]}</P3>
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
