import React from "react";
import styled from "styled-components";

export const MoonIcon = props => {
  return (
    <StyledSVG
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Style-Guide"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          transform="translate(-223.000000, -2072.000000)"
          id="Toggle-Android"
          stroke="#FFFFFF"
          strokeWidth="1.6"
        >
          <g transform="translate(184.000000, 2066.000000)">
            <g id="moon-stars" transform="translate(40.000000, 7.000000)">
              <path
                d="M13.6,12 C9.2,12 5.6,8.4 5.6,4 C5.6,3.28 5.68,2.56 5.92,1.92 C2.48,2.8 0,5.92 0,9.6 C0,14 3.6,17.6 8,17.6 C11.68,17.6 14.8,15.12 15.68,11.68 C15.04,11.92 14.32,12 13.6,12 Z"
                id="Path"
              ></path>
              <path d="M11.2,0 L11.2,3.2" id="Path"></path>
              <path d="M9.6,1.6 L12.8,1.6" id="Path"></path>
              <path d="M16,4.8 L16,8" id="Path"></path>
              <path d="M14.4,6.4 L17.6,6.4" id="Path"></path>
            </g>
          </g>
        </g>
      </g>
    </StyledSVG>
  );
};

const StyledSVG = styled.svg`
  position: absolute;
  z-index: 1;
  right: 6px;
  margin-top: 6px;
`;
