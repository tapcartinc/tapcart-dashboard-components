import React from "react";
import styled from "styled-components";

import { colors, space } from "../utils/_variables";

const Box = styled.div`
  background-color: ${colors.blue} ${space};
`;

const TestBox = props => {
  return (
    <Box
      width={[
        1, // 100% below the smallest breakpoint (all viewports)
        1 / 2, // 50% from the next breakpoint and up
        1 / 4 // 25% from the next breakpoint and up
      ]}
    >
      TestBox
    </Box>
  );
};

export { TestBox };
