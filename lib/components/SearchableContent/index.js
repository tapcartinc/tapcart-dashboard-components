import React from "react";
import styled from "styled-components";
import { boxShadow } from "../../utils/_variables";
import { colorPicker } from "../../utils/_dashVariables";

const StyledSearchableContentWrapper = styled.div`
  width: 420px;
  overflow: scroll;
  max-height: 220px;
  box-shadow: ${boxShadow.medium};
  border: 1px solid ${colorPicker.grayBlue};
  position: absolute;
  z-index: 100;
  margin-top: 10px;
  background: #ffffff;
  border-radius: 3px;
`;

const SearchableContent = (props) => {
  return (
    <StyledSearchableContentWrapper props={props}>
      {props.children}
    </StyledSearchableContentWrapper>
  );
};

export { SearchableContent };
