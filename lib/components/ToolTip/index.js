import React from "react";
import styled from "styled-components";
import { colorPicker, sofiaPro } from "../../utils/_dashVariables";
import { boxShadow } from "../../utils/_variables";
import PropTypes, { node } from "prop-types";

const ToolTip = props => {
  return (
    <ToolTipWrapper style={{ position: "relative" }}>
      <ToolTipIcon
        width="14px"
        height="14px"
        viewBox="0 0 14 14"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g
          id="Style-Guide"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            transform="translate(-540.000000, -1650.000000)"
            fill={props.color ? props.color : colorPicker.green100}
            fillRule="nonzero"
            id="Shape"
          >
            <path d="M547,1650 C543.140083,1650 540,1653.14008 540,1657 C540,1660.85992 543.140083,1664 547,1664 C550.859917,1664 554,1660.85992 554,1657 C554,1653.14008 550.859917,1650 547,1650 Z M546.708333,1661.08333 C546.225333,1661.08333 545.833333,1660.69133 545.833333,1660.20833 C545.833333,1659.72533 546.225333,1659.33333 546.708333,1659.33333 C547.191333,1659.33333 547.583333,1659.72533 547.583333,1660.20833 C547.583333,1660.69133 547.191333,1661.08333 546.708333,1661.08333 Z M549.223083,1655.90742 C549.042833,1656.19617 548.700417,1656.5205 548.19525,1656.881 C547.378,1657.48533 547.400167,1657.6195 547.400167,1658.16667 L545.966917,1658.16667 C545.966917,1657.73908 545.957583,1657.41067 546.188583,1657.01108 C546.336167,1656.755 546.606833,1656.48258 547,1656.19442 C547.471917,1655.85725 547.930417,1655.53233 547.930417,1654.9665 C547.930417,1654.43625 547.476583,1654.24725 546.946333,1654.24725 C546.405583,1654.24725 545.789,1654.424 545.096583,1654.7775 L544.506833,1653.59333 C545.765083,1652.88808 547.75075,1652.569 548.836333,1653.45275 C549.633167,1654.102 549.637833,1655.24358 549.223083,1655.90742 Z"></path>
          </g>
        </g>
      </ToolTipIcon>
      <div className="tooltip">{props.children}</div>
    </ToolTipWrapper>
  );
};

export { ToolTip };

const ToolTipWrapper = styled.div`
  height: 14px;
  width: 14px;
  position: relative;
  cursor: pointer;
  margin: 8px;

  ${sofiaPro.medium};

  svg {
    transition: 0.3s ease;
  }
  &:hover .tooltip {
    display: block;
  }

  .tooltip {
    padding: 10px;
    position: absolute;
    width: auto;
    white-space: nowrap;
    box-shadow: ${boxShadow.small};
    border-radius: 3px;
    background-color: #fff;
    top: -45px;
    left: 50%;
    transform: translate(-50%);
    transform-style: preserve-3d;
    z-index: 200;
    display: none;
    font-size: 13px;
    padding: 8px 15px;
    line-height: 1.46;

    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 10px;
      height: 10px;
      transform-origin: 50% 50%;
      transform: rotate(45deg) translateX(-50%);
      background-color: #fff;
      left: 50%;
      bottom: -6px;
      z-index: 400;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 10px;
      height: 10px;
      transform-origin: 50% 50%;
      transform: rotate(45deg) translateX(-50%) translateZ(-1px);
      background-color: #fff;
      left: 50%;
      bottom: -4px;
      z-index: -1;
      box-shadow: ${boxShadow.small};
      border: 1px solid green;
    }
  }
`;

const ToolTipIcon = styled.svg``;

ToolTip.propTypes = {
  color: PropTypes.string,
  /**
   * message inside of the tooltip pop up
   */
  position: PropTypes.node.isRequired
};
ToolTip.defaultProps = {};
