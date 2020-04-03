import React from "react";
import styled from "styled-components";
import { getColors } from "../utils/_functions";
import { colors } from "../utils/_variables";
import PropTypes from "prop-types";
import { colorPicker } from "../utils/_dashVariables";

function Icon(props) {
  const { type } = props;

  switch (type) {
    case "copy":
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" {...props}>
          <path
            fill={props.fill ? props.fill : colorPicker.blue}
            d="M13 0H2C.9 0 0 .9 0 2v13c0 .552.448 1 1 1s1-.448 1-1V2h11c.552 0 1-.448 1-1s-.448-1-1-1zm4 4H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H6V6h11v14z"
          />
        </SVG>
      );
    case "trash":
      return (
        <SVG
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g
            id="Drops"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="1.1-Drop-hover-+-click-states"
              transform="translate(-683.000000, -719.000000)"
            >
              <g
                id="Editor---Drafts-Copy"
                transform="translate(667.000000, 579.000000)"
              >
                <g id="Block-editor">
                  <g id="Delete" transform="translate(16.000000, 139.000000)">
                    <g
                      id="Icon-trash"
                      transform="translate(0.000000, 1.000000)"
                    >
                      <rect
                        id="Rectangle"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      ></rect>
                      <g
                        id="trash-simple"
                        transform="translate(0.833333, 0.833333)"
                        stroke={props.fill ? props.fill : colorPicker.blue}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      >
                        <path
                          d="M15.8333333,6.66666667 L15.8333333,16.6666667 C15.8333333,17.5871412 15.0871412,18.3333333 14.1666667,18.3333333 L4.16666667,18.3333333 C3.24619208,18.3333333 2.5,17.5871412 2.5,16.6666667 L2.5,6.66666667"
                          id="Path"
                        ></path>
                        <path
                          d="M0,3.33333333 L18.3333333,3.33333333"
                          id="Path"
                        ></path>
                        <path
                          d="M9.16666667,9.16666667 L9.16666667,14.1666667"
                          id="Path"
                        ></path>
                        <path
                          d="M5.83333333,9.16666667 L5.83333333,14.1666667"
                          id="Path"
                        ></path>
                        <path
                          d="M12.5,9.16666667 L12.5,14.1666667"
                          id="Path"
                        ></path>
                        <polyline
                          id="Path"
                          points="5.83333333 3.33333333 5.83333333 0 12.5 0 12.5 3.33333333"
                        ></polyline>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "search":
      return (
        <SVG
          width="22px"
          height="22px"
          viewBox="0 0 22 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g
              id="Search-bar"
              transform="translate(1.000000, 1.000000)"
              stroke={props.fill ? props.fill : colorPicker.blue}
              strokeWidth="1.75"
            >
              <g id="zoom-2">
                <g>
                  <path d="M20,20 L13.656,13.656" id="Path"></path>
                  <circle id="Oval" cx="8" cy="8" r="8"></circle>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "full-arrow-right":
      return (
        <SVG
          width="22px"
          height="16px"
          viewBox="0 0 22 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-554.000000, -1023.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-full-arrow-right"
                  transform="translate(472.000000, 0.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="arrow-right"
                    transform="translate(2.000000, 5.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path d="M0,7 L20,7" id="Path" />
                    <polyline id="Path" points="13 0 20 7 13 14" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "account":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1379.000000, -1079.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-account"
                  transform="translate(1298.000000, 60.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="circle-09"
                    transform="translate(1.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M17.989,19.495 C17.854,17.107 16.492,16.349 14.5,15.685 C12.978,15.178 12.559,13.58 12.444,12.732"
                      id="Path"
                    />
                    <path
                      d="M9.555,12.731 C9.442,13.575 9.031,15.175 7.5,15.685 C5.508,16.349 4.144,17.105 4.009,19.493"
                      id="Path"
                    />
                    <path
                      d="M11,13 L11,13 C8.791,13 7,11.209 7,9 L7,8 C7,5.791 8.791,4 11,4 L11,4 C13.209,4 15,5.791 15,8 L15,9 C15,11.209 13.209,13 11,13 Z"
                      id="Path"
                    />
                    <circle id="Oval" cx="11" cy="11" r="11" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "search":
      return (
        <div style={{ position: props.searchBar ? "absolute" : "static" }}>
          <SVG
            xmlns="http://www.w3.org/2000/SVG"
            {...props}
            viewBox="0 0 55 57"
            {...props}
            height="24px"
            width="24px"
          >
            <title>search</title>
            <path
              d="M55.1,51.9,41.6,37.8A23,23,0,1,0,24,46a22.5,22.5,0,0,0,13.2-4.2L50.8,56A3.2,3.2,0,0,0,53,57a3,3,0,0,0,2.1-5.1ZM24,6A17,17,0,1,1,7,23,17,17,0,0,1,24,6Z"
              transform="translate(-1)"
              style={{ fill: props.fill ? props.fill : colors.blue }}
            />
          </SVG>
        </div>
      );
    case "add":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-966.000000, -1079.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-add" transform="translate(885.000000, 60.000000)">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="e-add"
                    fill={props.fill ? props.fill : colors.blue}
                    fillRule="nonzero"
                  >
                    <path
                      d="M22.9090909,10.9090909 L13.0909091,10.9090909 L13.0909091,1.09090909 C13.0909091,0.436363636 12.6545455,0 12,0 C11.3454545,0 10.9090909,0.436363636 10.9090909,1.09090909 L10.9090909,10.9090909 L1.09090909,10.9090909 C0.436363636,10.9090909 0,11.3454545 0,12 C0,12.6545455 0.436363636,13.0909091 1.09090909,13.0909091 L10.9090909,13.0909091 L10.9090909,22.9090909 C10.9090909,23.5636364 11.3454545,24 12,24 C12.6545455,24 13.0909091,23.5636364 13.0909091,22.9090909 L13.0909091,13.0909091 L22.9090909,13.0909091 C23.5636364,13.0909091 24,12.6545455 24,12 C24,11.3454545 23.5636364,10.9090909 22.9090909,10.9090909 Z"
                      id="Path"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "alert":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-317.000000, -1139.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-alert"
                  transform="translate(236.000000, 120.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g id="buzz" transform="translate(1.000000, 1.000000)">
                    <path
                      d="M8.012,16.115 C8.073,17.717 9.383,19 11,19 C12.617,19 13.924,17.717 13.986,16.115 L8.012,16.115 L8.012,16.115 Z"
                      id="Path"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                    />
                    <path
                      d="M22,19 C22,17.137 20.969,13.5 18,12 L18,7 C18,3.134 14.866,0 11,0 C7.134,0 4,3.134 4,7 L4,12 C1,13.531 0,17.137 0,19"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <ellipse
                      id="Oval"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      cx="11"
                      cy="19"
                      rx="11"
                      ry="3"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "analytics-stats":
      return (
        <SVG
          width="22px"
          height="22px"
          viewBox="0 0 22 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-259.000000, -1080.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-stats" transform="translate(177.000000, 60.000000)">
                  <rect
                    id="Rectangle-Copy-8"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  />
                  <g
                    id="a-chart"
                    transform="translate(2.000000, 2.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M14.6,16.5 C13.2,18.6 10.7,20 8,20 C3.6,20 0,16.4 0,12 C0,7.6 3.6,4 8,4"
                      id="Path"
                    />
                    <path
                      d="M17.9,18.8 C19.2,16.9 20,14.5 20,12 C20,5.4 14.6,0 8,0 L8,12 L17.9,18.8 Z"
                      id="Path"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "go-live":
      return (
        <SVG
          width="20px"
          height="13px"
          viewBox="0 0 20 13"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Editor---Drafts"
              transform="translate(-17.000000, -24.000000)"
            >
              <g id="Block-editor">
                <g id="Title" transform="translate(17.000000, 19.000000)">
                  <g id="Icon-live" transform="translate(0.000000, 1.000000)">
                    <rect
                      id="Rectangle"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    ></rect>
                    <g
                      id="radio"
                      transform="translate(0.000000, 4.166667)"
                      stroke={props.fill ? props.fill : colorPicker.blue}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    >
                      <path
                        d="M14.5833333,8.75 C16.25,7.08333333 16.25,4.5 14.5833333,2.83333333"
                        id="Path"
                      ></path>
                      <path
                        d="M17,11.1666667 C19.9166667,8.25 19.9166667,3.5 17,0.583333333"
                        id="Path"
                      ></path>
                      <path
                        d="M5.41666667,8.75 C3.75,7.08333333 3.75,4.5 5.41666667,2.83333333"
                        id="Path"
                      ></path>
                      <path
                        d="M3,11.1666667 C0.0833333333,8.25 0.0833333333,3.5 3,0.583333333"
                        id="Path"
                      ></path>
                      <circle
                        id="Oval"
                        cx="10"
                        cy="5.83333333"
                        r="1.66666667"
                      ></circle>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "apple-dev":
      return (
        <SVG
          width="20px"
          height="24px"
          viewBox="0 0 20 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1027.000000, -1140.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-apple"
                  transform="translate(944.000000, 120.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g id="apple" transform="translate(3.000000, 1.000000)">
                    <path
                      d="M18,17.423 C17.508,18.513 17.273,18.999 16.639,19.963 C15.756,21.308 14.51,22.983 12.966,22.997 C11.594,23.01 11.242,22.105 9.38,22.115 C7.519,22.125 7.13,23.013 5.758,23.0001414 C4.214,22.986 3.035,21.474 2.15,20.128 C-0.32,16.366 -0.578,11.952 0.946,9.606 C2.029,7.938 3.738,6.963 5.345,6.963 C6.981,6.963 8.009,7.86 9.362,7.86 C10.674,7.86 11.474,6.962 13.365,6.962 C14.795,6.962 16.309,7.74 17.389,9.085 C13.853,11.023 14.427,16.072 18,17.423 L18,17.423 Z"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.1,3.45 C12.75,2.616 13.243,1.439 13.064,0.236 C12.002,0.309 10.762,0.984 10.037,1.864 C9.379,2.663 8.836,3.847 9.047,4.999 C10.205,5.035 11.404,4.343 12.1,3.45 L12.1,3.45 Z"
                      id="Path"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "android-dev":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-966.000000, -1138.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-android"
                  transform="translate(885.000000, 119.000000)"
                >
                  <rect
                    id="Rectangle-Copy-3"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  />
                  <g id="android" transform="translate(0.000000, 1.000000)">
                    <path
                      d="M1,9 L1,16"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23,9 L23,16"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7,3 L4,0"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17,3 L20,0"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8,19 L8,22"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16,19 L16,22"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12,1 C8.134,1 5,4.134 5,8 L5,19 L19,19 L19,8 C19,4.134 15.866,1 12,1 Z"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      cx="9"
                      cy="6"
                      r="1"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      cx="15"
                      cy="6"
                      r="1"
                    />
                    <path
                      d="M5,9 L19,9"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "arrow-down":
      return (
        <SVG
          width="10px"
          height="6px"
          viewBox="0 0 10 6"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1327.000000, -1148.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-arrow-down"
                  transform="translate(1239.000000, 120.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="small-down"
                    transform="translate(8.000000, 10.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polyline
                      id="Path"
                      transform="translate(4.000000, 2.000000) scale(1, -1) translate(-4.000000, -2.000000) "
                      points="0 4 4 0 8 4"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "arrow-up":
      return (
        <SVG
          width="10px"
          height="6px"
          viewBox="0 0 10 6"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1268.000000, -1148.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-arrow-up"
                  transform="translate(1180.000000, 120.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="small-up"
                    transform="translate(8.000000, 10.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polyline id="Path" points="0 4 4 0 8 4" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "arrow-right":
      return (
        <SVG
          width="6px"
          height="10px"
          viewBox="0 0 6 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1388.000000, -1145.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-arrow-right"
                  transform="translate(1298.000000, 119.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="small-down"
                    transform="translate(10.000000, 8.000000)"
                    stroke={
                      props.active ? colorPicker.blue : colorPicker.gray50
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polyline
                      id="Path"
                      transform="translate(2.000000, 4.000000) scale(1, -1) rotate(90.000000) translate(-2.000000, -4.000000) "
                      points="-2 6 2 2 6 6"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "arrow-left":
      return (
        <SVG
          width="6px"
          height="10px"
          viewBox="0 0 6 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1388.000000, -1145.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-arrow-right"
                  transform="translate(1310.000000, 131.000000) scale(-1, 1) translate(-1310.000000, -131.000000) translate(1298.000000, 119.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="small-down"
                    transform="translate(10.000000, 8.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polyline
                      id="Path"
                      transform="translate(2.000000, 4.000000) scale(1, -1) rotate(90.000000) translate(-2.000000, -4.000000) "
                      points="-2 6 2 2 6 6"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "attach":
      return (
        <SVG
          width="22px"
          height="24px"
          viewBox="0 0 22 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-849.000000, -1080.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-attach"
                  transform="translate(767.000000, 61.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="attach"
                    transform="translate(2.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M20,10.4 L11.2,19.2 C8.7,21.7 4.5,21.7 2,19.2 L2,19.2 C-0.5,16.7 -0.5,12.5 2,10 L9.8,2.2 C11.6,0.4 14.4,0.4 16.2,2.2 L16.2,2.2 C18,4 18,6.8 16.2,8.6 L9,15.7 C8,16.7 6.4,16.7 5.5,15.7 L5.5,15.7 C4.5,14.7 4.5,13.1 5.5,12.2 L11.5,6.2"
                      id="Path"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "bag":
      return (
        <SVG
          width="22px"
          height="24px"
          viewBox="0 0 22 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-731.000000, -1079.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-bag" transform="translate(649.000000, 60.000000)">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="shopping-bag"
                    transform="translate(2.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polygon id="Path" points="20 22 0 22 2 6 18 6" />
                    <path
                      d="M6,9 L6,4 C6.0065896,1.79359627 7.79359627,0.00658960222 10,0 L10,0 C12.2064037,0.00658960222 13.9934104,1.79359627 14,4 L14,9"
                      id="Path"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "calendar":
      return (
        <SVG
          width="24px"
          height="23px"
          viewBox="0 0 24 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-140.000000, -1020.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-calendar"
                  transform="translate(59.000000, 1.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="calendar-event-2"
                    transform="translate(1.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polyline id="Path" points="8 14 10 16 15 11" />
                    <rect
                      id="Rectangle"
                      x="0"
                      y="2"
                      width="22"
                      height="19"
                      rx="2"
                    />
                    <path d="M5,0 L5,3" id="Path" />
                    <path d="M17,0 L17,3" id="Path" />
                    <path d="M0,7 L22,7" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "carousel":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-376.000000, -1019.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-carousel"
                  transform="translate(295.000000, 0.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g id="slider" transform="translate(1.000000, 1.000000)">
                    <rect
                      id="Rectangle"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      x="0"
                      y="0"
                      width="22"
                      height="14"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      cx="11"
                      cy="20"
                      r="2"
                    />
                    <circle
                      id="Oval"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      cx="3"
                      cy="20"
                      r="2"
                    />
                    <circle
                      id="Oval"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      cx="19"
                      cy="20"
                      r="2"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "cart":
      return (
        <SVG
          width="23px"
          height="23px"
          viewBox="0 0 23 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-789.000000, -1020.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-cart" transform="translate(708.000000, 0.000000)">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="shopping-cart"
                    transform="translate(1.000000, 2.000000)"
                  >
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      cx="5"
                      cy="20"
                      r="1"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      cx="19"
                      cy="20"
                      r="1"
                    />
                    <circle
                      id="Oval"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      cx="5"
                      cy="20"
                      r="1"
                    />
                    <circle
                      id="Oval"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      cx="19"
                      cy="20"
                      r="1"
                    />
                    <polyline
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="3.8 5 21 5 19 15 5 15 3 0 0 0"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "collection":
      return (
        <SVG
          width="22px"
          height="24px"
          viewBox="0 0 22 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-318.000000, -1019.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-collection"
                  transform="translate(236.000000, 0.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="single-copies"
                    transform="translate(2.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <rect id="Rectangle" x="0" y="8" width="12" height="14" />
                    <polyline id="Path" points="4 4 16 4 16 18" />
                    <polyline id="Path" points="8 0 20 0 20 14" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "close":
      return (
        <SVG
          width="24px"
          height="23px"
          viewBox="0 0 24 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-907.000000, -1081.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-close-(x)"
                  transform="translate(826.000000, 61.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="e-remove"
                    transform="translate(1.500000, 2.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path d="M21,0 L0,21" id="Path" />
                    <path d="M21,21 L0,0" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "small-close":
      return (
        <SVG
          width="10px"
          height="10px"
          viewBox="0 0 10 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1150.000000, -1145.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-close-small"
                  transform="translate(1062.000000, 119.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="i-remove"
                    transform="translate(8.000000, 8.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M8,0 L0,8" id="Path" />
                    <path d="M8,8 L0,0" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "checkmark":
      return (
        <SVG
          width="14px"
          height="10px"
          viewBox="0 0 14 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1207.000000, -1145.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-checkmark"
                  transform="translate(1121.000000, 119.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="d-check"
                    transform="translate(6.000000, 8.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <polyline id="Path" points="0 4 4 8 12 0" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "drag-and-drop":
      return (
        <SVG
          width="47px"
          height="38px"
          viewBox="0 0 47 38"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
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
              transform="translate(-86.000000, -1206.000000)"
              id="Icons"
              style={{ stroke: props.fill ? props.fill : colors.blue }}
              strokeWidth="1.75"
            >
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-drag-&amp;-drop"
                  transform="translate(26.500000, 207.500000) rotate(90.000000) translate(-26.500000, -207.500000) translate(7.000000, 181.000000)"
                >
                  <g id="2x-drag-up">
                    <path
                      d="M4,10 C1.33333333,15.3177083 0,19.6510417 0,23 C0,26.3489583 1.33333333,31.3489583 4,38"
                      id="Path"
                      strokeDasharray="3"
                    />
                    <circle id="Oval" cx="5" cy="40" r="4" />
                    <path
                      d="M6,10 C8.209139,10 10,8.209139 10,6 C10,3.790861 8.209139,2 6,2 C3.790861,2 2,3.790861 2,6 C2,8.209139 3.790861,10 6,10 Z"
                      id="Oval"
                      strokeDasharray="3"
                      transform="translate(6.000000, 6.000000) rotate(36.000000) translate(-6.000000, -6.000000) "
                    />
                  </g>
                  <g
                    id="active-38"
                    transform="translate(21.350933, 36.035819) rotate(-50.000000) translate(-21.350933, -36.035819) translate(9.850933, 23.535819)"
                  >
                    <path
                      d="M12.1968205,8.45666947 L12.1968305,3.70648947 C12.1968305,2.71021947 11.5160505,1.78682947 10.5327005,1.62690947 C9.27967049,1.42312947 8.19682049,2.38478947 8.19682049,3.59954262 L8.19682049,7.59954262 L8.19682049,16.5995426 L4.25291049,14.2331995 C3.60800049,13.8462495 2.79785049,13.8655295 2.17207049,14.2827195 L2.17207049,14.2827195 C1.15021049,14.9639595 1.00704049,16.4097695 1.87546049,17.2781795 L8.19682049,23.5995426 L20.1968205,23.5995426 L21.7665605,13.3961895 C22.0081505,11.8258695 20.9835505,10.3394995 19.4300205,10.0066095 L12.1968205,8.45666947 Z"
                      id="Path"
                      transform="translate(11.553572, 12.599546) rotate(-5.000000) translate(-11.553572, -12.599546) "
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "download-cloud":
      return (
        <SVG
          width="24px"
          height="17px"
          viewBox="0 0 24 17"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-730.000000, -1023.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-download-cloud"
                  transform="translate(649.000000, 1.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="cloud-download-95"
                    transform="translate(1.000000, 3.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path d="M11,6.998 L11,14.998" id="Path" />
                    <polyline id="Path" points="14 11.998 11 14.998 8 11.998" />
                    <path
                      d="M16,16 L18,16 C20.209,16 22,14.207 22,11.998 C22,9.801 20.218,7.985 17.975,8.001 C17.718,4.092 14.474,0.998 10.5,0.998 C6.481,0.998 3.21,4.162 3.018,8.134 C1.287,8.573 0,10.129 0,11.998 C0,14.207 1.791,16 4,16 L6,16"
                      id="Path"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "dot-dot-dot":
      return (
        <SVG
          width="6px"
          height="22px"
          viewBox="0 0 6 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1034.000000, -1081.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-option,-settings"
                  transform="translate(944.000000, 61.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="menu-dots"
                    transform="translate(12.000000, 12.000000) rotate(-91.000000) translate(-12.000000, -12.000000) translate(1.000000, 10.000000)"
                    fill={props.fill ? props.fill : colors.blue}
                    fillRule="nonzero"
                  >
                    <circle id="Oval" cx="11" cy="2" r="2" />
                    <circle id="Oval" cx="2" cy="2" r="2" />
                    <circle id="Oval" cx="20" cy="2" r="2" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "dismiss":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-907.000000, -1020.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-dismiss"
                  transform="translate(826.000000, 1.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="corner-bottom-right"
                    transform="translate(1.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <g id="Group-3" transform="translate(13.000000, 13.000000)">
                      <path d="M0,0 L9,9" id="Path" />
                      <polyline id="Path" points="9 1 9 9 1 9" />
                    </g>
                    <rect
                      id="Rectangle"
                      transform="translate(5.000000, 5.000000) rotate(90.000000) translate(-5.000000, -5.000000) "
                      x="5.39146505e-10"
                      y="1.21326593e-09"
                      width="10"
                      height="10"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "discount":
      return (
        <SVG
          width="23px"
          height="23px"
          viewBox="0 0 23 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-495.000000, -1019.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-discount"
                  transform="translate(413.000000, 0.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="tag-line"
                    transform="translate(2.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polygon id="Path" points="12 21 21 12 9 0 0 0 0 9" />
                    <circle id="Oval" cx="6" cy="6" r="2" />
                    <path d="M12,9 L15,12" id="Path" />
                    <path d="M9,12 L12,15" id="Path" />
                    <path d="M6,8 L6,21" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "edit":
      return (
        <SVG
          width="21px"
          height="21px"
          viewBox="0 0 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Editor---collections"
              transform="translate(-16.000000, -18.000000)"
            >
              <g id="Block-editor">
                <g id="Edit-title" transform="translate(17.000000, 18.000000)">
                  <g
                    id="Icon-edit-content"
                    transform="translate(0.000000, 1.000000)"
                  >
                    <rect
                      id="Rectangle"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    ></rect>
                    <g
                      id="pen"
                      stroke={props.fill ? props.fill : colorPicker.blue}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    >
                      <path
                        d="M11.5,3.83333333 L15.3333333,7.66666667"
                        id="Path"
                      ></path>
                      <polygon
                        id="Path"
                        points="4.79166667 18.2083333 0 19.1666667 0.958333333 14.375 15.3333333 0 19.1666667 3.83333333"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "edit-content":
      return (
        <SVG
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Editor---Blocks"
              transform="translate(-16.000000, -19.000000)"
            >
              <g id="Block-editor">
                <g
                  id="Edit-content"
                  transform="translate(16.000000, 19.000000)"
                >
                  <g id="Icon-edit-content">
                    <rect
                      id="Rectangle"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    ></rect>
                    <g
                      id="rotate-22"
                      transform="translate(1.666667, 1.666667)"
                      stroke={props.fill ? props.fill : colorPicker.blue}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    >
                      <path
                        d="M10,3.33333333 L5,3.33333333 C3.61929167,3.33333333 2.5,4.452625 2.5,5.83333333 L2.5,8.33333333"
                        id="Path"
                      ></path>
                      <polyline
                        id="Path"
                        points="6.66666667 6.66666667 10 3.33333333 6.66666667 0"
                      ></polyline>
                      <path
                        d="M13.75,5.83333333 L13.75,5.83333333 C15.3541667,5.83333333 16.6666667,7.14583333 16.6666667,8.75 L16.6666667,8.75 C16.6666667,10.3541667 15.3541667,11.6666667 13.75,11.6666667 L13.75,11.6666667 C12.1458333,11.6666667 10.8333333,10.3541667 10.8333333,8.75 L10.8333333,8.75 C10.8333333,7.14583333 12.1458333,5.83333333 13.75,5.83333333 Z"
                        id="Path"
                      ></path>
                      <path
                        d="M2.91666667,11.6666667 L2.91666667,11.6666667 C4.52083333,11.6666667 5.83333333,12.9791667 5.83333333,14.5833333 L5.83333333,14.5833333 C5.83333333,16.1875 4.52083333,17.5 2.91666667,17.5 L2.91666667,17.5 C1.3125,17.5 0,16.1875 0,14.5833333 L0,14.5833333 C0,12.9791667 1.3125,11.6666667 2.91666667,11.6666667 Z"
                        id="Path"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "google-play":
      return (
        <SVG
          width="23px"
          height="24px"
          viewBox="0 0 23 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1142.000000, -1079.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-google-play"
                  transform="translate(1062.000000, 60.000000)"
                >
                  <g
                    id="Icon"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeWidth="1.75"
                  >
                    <path
                      d="M2.5536416,22.3128149 L16.4555339,8.07323152"
                      id="Path-6"
                    />
                    <path
                      d="M2.5536416,1.60812735 L16.4555339,15.9563044"
                      id="Path-7"
                    />
                    <path
                      d="M13.5045557,4.3790302 L21.9314147,20.4538262 C22.4442639,21.4321203 22.0669462,22.6409309 21.0886521,23.1537801 C20.8021641,23.3039652 20.4835235,23.3824219 20.1600564,23.3824219 L3.30656838,23.3824219 C2.20199888,23.3824219 1.30656838,22.4869914 1.30656838,21.3824219 C1.30656838,21.0589624 1.3850214,20.740329 1.53519971,20.4538461 L9.96182882,4.37905007 C10.4746671,3.40075017 11.6834734,3.02341896 12.6617733,3.53625722 C13.0218236,3.72500052 13.3158084,4.01898205 13.5045557,4.3790302 Z"
                      id="Triangle"
                      strokeLinejoin="round"
                      transform="translate(11.733333, 12.191211) rotate(90.000000) translate(-11.733333, -12.191211) "
                    />
                  </g>
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "engage":
      return (
        <SVG
          width="24px"
          height="22px"
          viewBox="0 0 24 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-140.000000, -1081.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-engage" transform="translate(59.000000, 61.000000)">
                  <rect
                    id="Rectangle-Copy-6"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  />
                  <g
                    id="f-chat"
                    transform="translate(1.000000, 2.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polygon
                      id="Path"
                      points="22 0 0 0 0 15 7 15 11 20 15 15 22 15"
                    />
                    <path d="M6,5 L16,5" id="Path" />
                    <path d="M6,10 L12,10" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "support":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-553.000000, -1138.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-support"
                  transform="translate(472.000000, 119.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="customer-support"
                    transform="translate(1.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M9,16 L3,16 C1.3,16 0,17.3 0,19 L0,22 L12,22 L12,19 C12,17.3 10.7,16 9,16 Z"
                      id="Path"
                    />
                    <path
                      d="M6,13 L6,13 C4.3,13 3,11.7 3,10 L3,9 C3,7.3 4.3,6 6,6 L6,6 C7.7,6 9,7.3 9,9 L9,10 C9,11.7 7.7,13 6,13 Z"
                      id="Path"
                    />
                    <polygon id="Path" points="12 0 12 10 16 7 22 7 22 0" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "email":
      return (
        <SVG
          width="22px"
          height="22px"
          viewBox="0 0 22 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-672.000000, -1140.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-email"
                  transform="translate(590.000000, 120.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="send"
                    transform="translate(2.000000, 2.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polyline id="Path" points="20 0 5 12 5 19 8.6 14.7" />
                    <polygon id="Path" points="0 8 20 0 16 20" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "homepage":
      return (
        <SVG
          width="18px"
          height="24px"
          viewBox="0 0 18 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1323.000000, -1079.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-homepage"
                  transform="translate(1239.000000, 60.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="property-app"
                    transform="translate(4.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polygon id="Path" points="12 10 12 14 4 14 4 10 8 7" />
                    <path d="M8,12 L8,14" id="Path" />
                    <path
                      d="M14,22 L2,22 C0.8954305,22 0,21.1045695 0,20 L0,2 C0,0.8954305 0.8954305,0 2,0 L14,0 C15.1045695,0 16,0.8954305 16,2 L16,20 C16,21.1045695 15.1045695,22 14,22 Z"
                      id="Path"
                    />
                    <path d="M0,18 L16,18" id="Path" />
                    <path d="M0,4 L16,4" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "modal":
      return (
        <SVG
          width="18px"
          height="24px"
          viewBox="0 0 18 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-674.000000, -1019.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-modal" transform="translate(590.000000, 0.000000)">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="phone-button-copy"
                    transform="translate(4.000000, 1.000000)"
                  >
                    <path
                      d="M2,0 L14,0 C15.1045695,0 16,0.8954305 16,2 L16,20 C16,21.1045695 15.1045695,22 14,22 L2,22 C0.8954305,22 0,21.1045695 0,20 L0,2 C0,0.8954305 0.8954305,0 2,0 Z"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      cx="8"
                      cy="18"
                      r="1"
                    />
                    <rect
                      id="Rectangle"
                      fill={props.fill ? props.fill : colors.blue}
                      x="2"
                      y="2"
                      width="12"
                      height="14"
                      rx="1"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "menu-two":
      return (
        <SVG
          width="24px"
          height="16px"
          viewBox="0 0 24 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-789.000000, -1084.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-menu-2"
                  transform="translate(708.000000, 61.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="menu-34"
                    transform="translate(1.000000, 4.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path d="M0,8 L22,8" id="Path" />
                    <path d="M0,1 L22,1" id="Path" />
                    <path d="M0,15 L22,15" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "large-right-arrow":
      return (
        <SVG
          width="10px"
          height="24px"
          viewBox="0 0 10 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1150.000000, -1020.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-large-right-arrow"
                  transform="translate(1062.000000, 1.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="ctrl-right"
                    transform="translate(8.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polyline id="Path" points="0 0 8 11 0 22" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "large-left-arrow":
      return (
        <SVG
          width="10px"
          height="24px"
          viewBox="0 0 10 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1209.000000, -1020.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-large-left-arrow"
                  transform="translate(1133.000000, 13.000000) scale(-1, 1) translate(-1133.000000, -13.000000) translate(1121.000000, 1.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="ctrl-right"
                    transform="translate(8.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polyline id="Path" points="0 0 8 11 0 22" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "integrations":
      return (
        <SVG
          width="19px"
          height="24px"
          viewBox="0 0 19 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-320.000000, -1080.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-integrations"
                  transform="translate(236.000000, 61.000000)"
                >
                  <rect
                    id="Rectangle-Copy-9"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  />
                  <g
                    id="camera-flash"
                    transform="translate(4.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polygon
                      id="Path"
                      points="11.5789474 0 3.47368421 0 0 12.7368421 6.94736842 12.7368421 4.63157895 22 16.2105263 8.10526316 9.26315789 8.10526316"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "megaphone":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-199.000000, -1019.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-popup" transform="translate(118.000000, 0.000000)">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="notification-70"
                    transform="translate(0.000000, 1.000000)"
                  >
                    <path
                      d="M10.493,13.389 L12.855,19.252 C13.2660836,20.2759264 12.7702913,21.439338 11.747,21.852 L11.747,21.852 C10.7230736,22.2630836 9.55966202,21.7672913 9.147,20.744 L5.511,11.8"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.309,0.119 L3,5 C1.69762761,5.38755178 0.856827643,6.64875173 1,8 C0.856827643,9.35124827 1.69762761,10.6124482 3,11 L18.309,15.881"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <ellipse
                      id="Oval"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      cx="19"
                      cy="8"
                      rx="4"
                      ry="8"
                    />
                    <path
                      d="M20,8 C19.9971969,6.47924884 18.8533501,5.20285703 17.342,5.034 C17.1104226,6.00554249 16.9956109,7.00124896 17,8 C16.9956109,8.99875104 17.1104226,9.99445751 17.342,10.966 C18.8533501,10.797143 19.9971969,9.52075116 20,8 Z"
                      id="Path"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "product":
      return (
        <SVG
          width="20px"
          height="24px"
          viewBox="0 0 20 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-260.000000, -1019.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-product"
                  transform="translate(177.000000, 0.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="user"
                    transform="translate(3.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <rect id="Rectangle" x="0" y="0" width="18" height="22" />
                    <circle id="Oval" cx="9" cy="6.5" r="2.5" />
                    <path
                      d="M9,12 C6.23857625,12 4,14.2385763 4,17 L14,17 C14,14.2385763 11.7614237,12 9,12 L9,12 Z"
                      id="Path"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "toast":
      return (
        <SVG
          width="18px"
          height="24px"
          viewBox="0 0 18 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-615.000000, -1020.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-toast" transform="translate(531.000000, 1.000000)">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="phone-button"
                    transform="translate(4.000000, 1.000000)"
                  >
                    <path
                      d="M2,0 L14,0 C15.1045695,0 16,0.8954305 16,2 L16,20 C16,21.1045695 15.1045695,22 14,22 L2,22 C0.8954305,22 0,21.1045695 0,20 L0,2 C0,0.8954305 0.8954305,0 2,0 Z"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      cx="8"
                      cy="18"
                      r="1"
                    />
                    <rect
                      id="Rectangle"
                      fill={props.fill ? props.fill : colors.blue}
                      x="2"
                      y="2"
                      width="12"
                      height="3"
                      rx="1"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "settings":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-376.000000, -1080.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-settings"
                  transform="translate(295.000000, 61.000000)"
                >
                  <rect
                    id="Rectangle-Copy-10"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  />
                  <g
                    id="preferences-circle"
                    transform="translate(1.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path d="M13,3 L22,3" id="Path" />
                    <path d="M0,3 L3,3" id="Path" />
                    <path d="M21,11 L22,11" id="Path" />
                    <path d="M0,11 L11,11" id="Path" />
                    <path d="M13,19 L22,19" id="Path" />
                    <path d="M0,19 L3,19" id="Path" />
                    <circle id="Oval" cx="6" cy="3" r="3" />
                    <circle id="Oval" cx="14" cy="11" r="3" />
                    <circle id="Oval" cx="6" cy="19" r="3" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "show-six-products":
      return (
        <SVG
          width="24px"
          height="22px"
          viewBox="0 0 24 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-494.000000, -1080.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-show-6-products"
                  transform="translate(413.000000, 60.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="folder-search"
                    transform="translate(1.000000, 2.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path d="M17,15 L21,19" id="Path" />
                    <circle id="Oval" cx="14.5" cy="12.5" r="3.5" />
                    <path
                      d="M16,20 L2,20 C0.8954305,20 0,19.1045695 0,18 L0,0 L8,0 L11,4 L22,4 L22,14"
                      id="Path"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "images":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-553.000000, -1080.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-images"
                  transform="translate(472.000000, 60.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g id="img-stack" transform="translate(1.000000, 1.000000)">
                    <rect
                      id="Rectangle"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      x="0"
                      y="5"
                      width="22"
                      height="18"
                    />
                    <path
                      d="M5,1 L17,1"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polygon
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="5 19 14 11 18 19"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      cx="6"
                      cy="10"
                      r="2"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "webpage":
      return (
        <SVG
          width="24px"
          height="22px"
          viewBox="0 0 24 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-848.000000, -1021.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-webpage"
                  transform="translate(767.000000, 1.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="window-paragraph"
                    transform="translate(1.000000, 2.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <rect id="Rectangle" x="0" y="0" width="22" height="20" />
                    <path d="M0,4 L22,4" id="Path" />
                    <rect id="Rectangle" x="4" y="9" width="6" height="6" />
                    <path d="M14,9 L18,9" id="Path" />
                    <path d="M14,13 L16,13" id="Path" />
                    <path d="M5,0 L5,4" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "dismiss":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-907.000000, -1020.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-dismiss"
                  transform="translate(826.000000, 1.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="corner-bottom-right"
                    transform="translate(1.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <g id="Group-3" transform="translate(13.000000, 13.000000)">
                      <path d="M0,0 L9,9" id="Path" />
                      <polyline id="Path" points="9 1 9 9 1 9" />
                    </g>
                    <rect
                      id="Rectangle"
                      transform="translate(5.000000, 5.000000) rotate(90.000000) translate(-5.000000, -5.000000) "
                      x="5.39146505e-10"
                      y="1.21326593e-09"
                      width="10"
                      height="10"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "draft":
      return (
        <SVG
          width="22px"
          height="23px"
          viewBox="0 0 22 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-967.000000, -1020.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-draft" transform="translate(885.000000, 1.000000)">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="edit"
                    transform="translate(2.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path d="M0,21 L20,21" id="Path" />
                    <path d="M11,3 L15,7" id="Path" />
                    <polygon id="Path" points="6 16 1 17 2 12 14 0 18 4" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "apple-developer":
      return (
        <SVG
          width="26px"
          height="23px"
          viewBox="0 0 26 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
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
              transform="translate(-1083.000000, -1081.000000)"
              id="Icons"
              style={{
                stroke: props.fill ? props.fill : colors.blue
              }}
              strokeWidth="1.75"
            >
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-apple-developer"
                  transform="translate(1003.000000, 63.000000)"
                >
                  <path d="M0,20.9500023 L15.4305804,0" id="Path-2" />
                  <path d="M8.40502232,0 L23.9671875,20.9500023" id="Path-4" />
                  <path d="M0,15.9685291 L23.9671875,15.9685291" id="Path-5" />
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "warning":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1202.000000, -1079.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-warning"
                  transform="translate(1121.000000, 60.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g id="c-warning" transform="translate(1.000000, 1.000000)">
                    <circle
                      id="Oval"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      cx="11"
                      cy="11"
                      r="11"
                    />
                    <path
                      d="M11,6 L11,12"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      cx="11"
                      cy="16"
                      r="1"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "order":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1261.000000, -1079.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-order"
                  transform="translate(1180.000000, 60.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="box-3d-50"
                    transform="translate(1.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path d="M5.5,2.25 L17.5,8.25" id="Path" />
                    <polyline id="Path" points="22 6 12 11 0 5" />
                    <path d="M12,11 L12,22" id="Path" />
                    <polygon
                      id="Path"
                      points="22 6 22 16 12 22 0 16 0 5 10 0"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "homepage":
      return (
        <SVG
          width="18px"
          height="24px"
          viewBox="0 0 18 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1323.000000, -1079.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-homepage"
                  transform="translate(1239.000000, 60.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="property-app"
                    transform="translate(4.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polygon id="Path" points="12 10 12 14 4 14 4 10 8 7" />
                    <path d="M8,12 L8,14" id="Path" />
                    <path
                      d="M14,22 L2,22 C0.8954305,22 0,21.1045695 0,20 L0,2 C0,0.8954305 0.8954305,0 2,0 L14,0 C15.1045695,0 16,0.8954305 16,2 L16,20 C16,21.1045695 15.1045695,22 14,22 Z"
                      id="Path"
                    />
                    <path d="M0,18 L16,18" id="Path" />
                    <path d="M0,4 L16,4" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "new-group":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-81.000000, -1138.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-new-group"
                  transform="translate(0.000000, 119.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="add-notification"
                    fill={props.fill ? props.fill : colors.blue}
                    fillRule="nonzero"
                  >
                    <path
                      d="M17.7391304,0 C14.2813477,0 11.4782609,2.80308678 11.4782609,6.26086957 C11.4782609,9.71865235 14.2813477,12.5217391 17.7391304,12.5217391 C21.1969132,12.5217391 24,9.71865235 24,6.26086957 C24,4.60038372 23.3403746,3.00790704 22.1662338,1.83376624 C20.992093,0.659625435 19.3996163,0 17.7391304,0 Z M20.8695652,7.30434783 L18.7826087,7.30434783 L18.7826087,9.39130435 L16.6956522,9.39130435 L16.6956522,7.30434783 L14.6086957,7.30434783 L14.6086957,5.2173913 L16.6956522,5.2173913 L16.6956522,3.13043478 L18.7826087,3.13043478 L18.7826087,5.2173913 L20.8695652,5.2173913 L20.8695652,7.30434783 Z"
                      id="Shape"
                    />
                    <path
                      d="M18.7826087,24 L1.04347826,24 C0.467181131,24 0,23.5328189 0,22.9565217 L0,5.2173913 C0,4.64109417 0.467181131,4.17391304 1.04347826,4.17391304 L9.39130435,4.17391304 L9.39130435,6.26086957 L2.08695652,6.26086957 L2.08695652,21.9130435 L17.7391304,21.9130435 L17.7391304,14.6086957 L19.826087,14.6086957 L19.826087,22.9565217 C19.826087,23.5328189 19.3589058,24 18.7826087,24 Z"
                      id="Path"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "image-fit":
      return (
        <SVG
          width="20px"
          height="21px"
          viewBox="0 0 20 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Editor---Blocks"
              transform="translate(-16.000000, -163.000000)"
            >
              <g id="Block-editor">
                <g id="Images" transform="translate(16.000000, 163.000000)">
                  <g id="Icon-images">
                    <rect
                      id="Rectangle"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    ></rect>
                    <g id="img-stack" transform="translate(0.833333, 0.833333)">
                      <rect
                        id="Rectangle"
                        stroke={props.fill ? props.fill : colors.blue}
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        x="0"
                        y="4.16666667"
                        width="18.3333333"
                        height="15"
                      ></rect>
                      <path
                        d="M4.16666667,0.833333333 L14.1666667,0.833333333"
                        id="Path"
                        stroke={props.fill ? props.fill : colors.blue}
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <polygon
                        id="Path"
                        stroke={props.fill ? props.fill : colors.blue}
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="4.16666667 15.8333333 11.6666667 9.16666667 15 15.8333333"
                      ></polygon>
                      <circle
                        id="Oval"
                        fill={props.fill ? props.fill : colors.blue}
                        fillRule="nonzero"
                        cx="5"
                        cy="8.33333333"
                        r="1.66666667"
                      ></circle>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "text-icon":
      return (
        <SVG
          width="21px"
          height="21px"
          viewBox="0 0 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Editor---collections"
              transform="translate(-15.000000, -80.000000)"
            >
              <g id="Block-editor">
                <g id="Title" transform="translate(15.000000, 81.000000)">
                  <g id="Icon-text">
                    <rect
                      id="Rectangle"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    ></rect>
                    <g
                      id="caps-all"
                      transform="translate(1.000000, 0.000000)"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    >
                      <polyline
                        id="Path"
                        points="0 1.73913043 0 0 10.4347826 0 10.4347826 1.73913043"
                      ></polyline>
                      <path
                        d="M5.2173913,0 L5.2173913,13.0434783"
                        id="Path"
                      ></path>
                      <path
                        d="M2.60869565,13.0434783 L7.82608696,13.0434783"
                        id="Path"
                      ></path>
                      <polyline
                        id="Path"
                        points="8.69565217 7.82608696 8.69565217 6.08695652 19.1304348 6.08695652 19.1304348 7.82608696"
                      ></polyline>
                      <path
                        d="M13.9130435,6.08695652 L13.9130435,19.1304348"
                        id="Path"
                      ></path>
                      <path
                        d="M11.3043478,19.1304348 L16.5217391,19.1304348"
                        id="Path"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "search-folder":
      return (
        <SVG
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Editor---Blocks"
              transform="translate(-16.000000, -79.000000)"
            >
              <g id="Block-editor">
                <g
                  id="Show-6-products"
                  transform="translate(16.000000, 78.000000)"
                >
                  <g
                    id="Icon-show-6-products"
                    transform="translate(0.000000, 1.000000)"
                  >
                    <rect
                      id="Rectangle"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    ></rect>
                    <g
                      id="folder-search"
                      transform="translate(0.833333, 1.666667)"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    >
                      <path
                        d="M14.1666667,12.5 L17.5,15.8333333"
                        id="Path"
                      ></path>
                      <circle
                        id="Oval"
                        cx="12.0833333"
                        cy="10.4166667"
                        r="2.91666667"
                      ></circle>
                      <path
                        d="M13.3333333,16.6666667 L1.66666667,16.6666667 C0.746192084,16.6666667 0,15.9204746 0,15 L0,0 L6.66666667,0 L9.16666667,3.33333333 L18.3333333,3.33333333 L18.3333333,11.6666667"
                        id="Path"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "remove-image":
      return (
        <SVG
          width="29px"
          height="24px"
          viewBox="0 0 29 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-138.000000, -1142.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-remove-image"
                  transform="translate(57.000000, 121.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g id="img-stack" transform="translate(1.000000, 3.000000)">
                    <rect
                      id="Rectangle"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      x="0"
                      y="0"
                      width="22"
                      height="18"
                    />
                    <polygon
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="5 14 14 6 18 14"
                    />
                    <circle
                      id="Oval"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      fill="#FFFFFF"
                      cx="21.5"
                      cy="16.5"
                      r="5.5"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      cx="6"
                      cy="5"
                      r="2"
                    />
                    <path
                      d="M19,16.5 L24,16.5"
                      id="Line-2"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "preview-app":

      return (
        <SVG
          width="22px"
          height="24px"
          viewBox="0 0 22 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-377.000000, -1139.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-preview-app"
                  transform="translate(295.000000, 120.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="p-search"
                    transform="translate(2.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M8,22 L2,22 C0.8954305,22 0,21.1045695 0,20 L0,2 C0,0.8954305 0.8954305,0 2,0 L14,0 C15.1045695,0 16,0.8954305 16,2 L16,9"
                      id="Path"
                    />
                    <path d="M20,22 L17.121,19.121" id="Path" />
                    <circle id="Oval" cx="15" cy="17" r="3" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "new-version":
      return (
        <SVG
          width="21px"
          height="24px"
          viewBox="0 0 21 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-437.000000, -1138.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-new-version"
                  transform="translate(354.000000, 119.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="p-system-update"
                    transform="translate(3.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M10,22 L2,22 C0.8954305,22 0,21.1045695 0,20 L0,2 C0,0.8954305 0.8954305,0 2,0 L14,0 C15.1045695,0 16,0.8954305 16,2 L16,8"
                      id="Path"
                    />
                    <path d="M16,12 L16,21" id="Path" />
                    <polyline id="Path" points="19 18 16 21 13 18" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "static":
      return (
        <SVG
          width="26px"
          height="26px"
          viewBox="0 0 26 26"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-493.000000, -1137.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-static"
                  transform="translate(413.000000, 119.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="corner-bottom-right"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <rect
                      id="Rectangle"
                      transform="translate(12.000000, 12.000000) rotate(90.000000) translate(-12.000000, -12.000000) "
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "upgrade":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-613.000000, -1137.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-upgrade"
                  transform="translate(531.000000, 119.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g id="spaceship" transform="translate(1.000000, 0.000000)">
                    <path
                      d="M14.935,2.093 L20.882,8.04"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.603,3.387 C9.682,2.129 6.164,2.693 3.779,5.079 C3.29,5.568 2.886,6.109 2.55,6.679 L5.978,10.107"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.597,10.345 C20.887,13.277 20.322,16.82 17.921,19.221 C17.432,19.71 16.891,20.114 16.321,20.45 L12.879,17.008"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.143,18.514 L4.486,12.857 C4.486,12.857 9.318,0.836 22.871,0.129 C22.104,13.623 10.143,18.514 10.143,18.514 Z"
                      id="Path"
                      style={{
                        stroke: props.fill ? props.fill : colors.blue
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      transform="translate(13.999800, 9.000000) rotate(-45.000000) translate(-13.999800, -9.000000) "
                      cx="13.9998"
                      cy="9"
                      r="1.99998082"
                    />
                    <path
                      d="M1.113,17.844 C2.224,16.733 4.024,16.733 5.135,17.844 C6.246,18.955 6.246,20.755 5.135,21.866 C4.024,22.977 0,23 0,23 C0,23 0.002,18.954 1.113,17.844 Z"
                      id="Path"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "phone":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-730.000000, -1138.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-phone"
                  transform="translate(649.000000, 119.000000)"
                >
                  <rect
                    id="Rectangle-Copy-2"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  />
                  <g
                    id="phone-call"
                    transform="translate(1.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M16,14 L13,17 L5,9 L8,6 L3,1 L0,4 C0,13.941 8.059,22 18,22 L21,19 L16,14 Z"
                      id="Path"
                    />
                    <path d="M13,0 C17.971,0 22,4.029 22,9" id="Path" />
                    <path d="M13,4 C15.761,4 18,6.239 18,9" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "time":
      return (
        <SVG
          width="22px"
          height="22px"
          viewBox="0 0 22 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-790.000000, -1140.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-time" transform="translate(708.000000, 120.000000)">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="progress"
                    transform="translate(2.000000, 2.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M20,10 C20,15.523 15.523,20 10,20 C4.477,20 0,15.523 0,10 C0,4.477 4.477,0 10,0 C13.959,0 17.38,2.3 19.001,5.637"
                      id="Path"
                    />
                    <polyline
                      id="Path"
                      points="19.5 0.75 18.995 5.62 14.467 4.792"
                    />
                    <polyline id="Path" points="10 5 10 10 5 10" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "talkable-friends":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-848.000000, -1139.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-talkable-friends"
                  transform="translate(767.000000, 120.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="add-29"
                    transform="translate(1.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M11,12 L11,12 C8.239,12 6,9.761 6,7 L6,5 C6,2.239 8.239,0 11,0 L11,0 C13.761,0 16,2.239 16,5 L16,7 C16,9.761 13.761,12 11,12 Z"
                      id="Path"
                    />
                    <path
                      d="M11,16 L6,16 C2.686,16 0,18.686 0,22 C0,22 21.958,22 22,22 L22,22"
                      id="Path"
                    />
                    <path d="M19,12 L19,18" id="Path" />
                    <path d="M16,15 L22,15" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "rewards":
      return (
        <SVG
          width="16px"
          height="23px"
          viewBox="0 0 16 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-911.000000, -1140.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-rewards"
                  transform="translate(826.000000, 120.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="award"
                    transform="translate(5.000000, 2.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <polyline
                      id="Path"
                      points="12 11.899 12 21 7 18 2 21 2 11.898"
                    />
                    <circle id="Oval" cx="7" cy="7" r="7" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "small-add":
      return (
        <SVG
          width="12px"
          height="12px"
          viewBox="0 0 12 12"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1090.000000, -1144.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-small-add"
                  transform="translate(1003.000000, 119.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="i-add"
                    transform="translate(7.000000, 7.000000)"
                    style={{
                      stroke: props.fill ? props.fill : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  >
                    <path d="M5,0 L5,10" id="Path" />
                    <path d="M10,5 L0,5" id="Path" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "tip":
      return (
        <SVG
          width="14px"
          height="14px"
          viewBox="0 0 14 14"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
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
              transform="translate(-184.000000, -1220.000000)"
              fill={props.fill ? props.fill : colorPicker.lightGray}
              fillRule="nonzero"
              id="Shape"
            >
              <path d="M191,1220 C187.140083,1220 184,1223.14008 184,1227 C184,1230.85992 187.140083,1234 191,1234 C194.859917,1234 198,1230.85992 198,1227 C198,1223.14008 194.859917,1220 191,1220 Z M190.708333,1231.08333 C190.225333,1231.08333 189.833333,1230.69133 189.833333,1230.20833 C189.833333,1229.72533 190.225333,1229.33333 190.708333,1229.33333 C191.191333,1229.33333 191.583333,1229.72533 191.583333,1230.20833 C191.583333,1230.69133 191.191333,1231.08333 190.708333,1231.08333 Z M193.223083,1225.90742 C193.042833,1226.19617 192.700417,1226.5205 192.19525,1226.881 C191.378,1227.48533 191.400167,1227.6195 191.400167,1228.16667 L189.966917,1228.16667 C189.966917,1227.73908 189.957583,1227.41067 190.188583,1227.01108 C190.336167,1226.755 190.606833,1226.48258 191,1226.19442 C191.471917,1225.85725 191.930417,1225.53233 191.930417,1224.9665 C191.930417,1224.43625 191.476583,1224.24725 190.946333,1224.24725 C190.405583,1224.24725 189.789,1224.424 189.096583,1224.7775 L188.506833,1223.59333 C189.765083,1222.88808 191.75075,1222.569 192.836333,1223.45275 C193.633167,1224.102 193.637833,1225.24358 193.223083,1225.90742 Z" />
            </g>
          </g>
        </SVG>
      );
    case "android":
      return (
        <SVG
          width="18px"
          height="24px"
          viewBox="0 0 18 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
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
              transform="translate(-262.000000, -1676.000000)"
              fill={props.fill ? props.fill : colors.blue}
              // style={{ fill: props.fill ? props.fill: colors.blue }}
              fillRule="nonzero"
              id="Buttons"
            >
              <g transform="translate(81.000000, 1428.000000)">
                <g
                  id="Android-Apple-Toggle-Copy-2"
                  transform="translate(127.000000, 239.000000)"
                >
                  <g id="Toggle-on">
                    <g id="android" transform="translate(54.000000, 9.000000)">
                      <path
                        d="M12.281,2.98 L13.416,1.277 C13.569,1.048 13.507,0.737 13.277,0.584 C13.046,0.431 12.736,0.492 12.584,0.723 L11.398,2.502 C10.663,2.181 9.853,2 9,2 C8.147,2 7.337,2.181 6.602,2.502 L5.416,0.723 C5.263,0.493 4.953,0.431 4.723,0.584 C4.493,0.737 4.431,1.048 4.584,1.277 L5.719,2.98 C4.083,4.052 3,5.898 3,8 L15,8 C15,5.898 13.917,4.052 12.281,2.98 Z"
                        id="Path"
                      ></path>
                      <path
                        d="M3,19 C3,19.552 3.448,20 4,20 L5,20 L5,23 C5,23.552 5.448,24 6,24 C6.552,24 7,23.552 7,23 L7,20 L11,20 L11,23 C11,23.552 11.448,24 12,24 C12.552,24 13,23.552 13,23 L13,20 L14,20 C14.552,20 15,19.552 15,19 L15,9 L3,9 L3,19 Z"
                        id="Path"
                      ></path>
                      <path
                        d="M1,9 C0.448,9 0,9.448 0,10 L0,15 C0,15.552 0.448,16 1,16 C1.552,16 2,15.552 2,15 L2,10 C2,9.448 1.552,9 1,9 Z"
                        id="Path"
                      ></path>
                      <path
                        d="M17,9 C16.448,9 16,9.448 16,10 L16,15 C16,15.552 16.448,16 17,16 C17.552,16 18,15.552 18,15 L18,10 C18,9.448 17.552,9 17,9 Z"
                        id="Path"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "apple":
      return (
        <SVG
          width="21px"
          height="24px"
          viewBox="0 0 21 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          style={{ marginTop: "-1px", bottom: 1 }}
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            style={{ marginTop: "-1px" }}
          >
            <g
              transform="translate(-219.000000, -1675.000000)"
              fill={props.fill ? props.fill : colors.blue}
              fillRule="nonzero"
              id="Buttons"
            >
              <g transform="translate(81.000000, 1428.000000)">
                <g
                  id="Android-Apple-Toggle-Copy-2"
                  transform="translate(127.000000, 239.000000)"
                >
                  <g id="Toggle-on">
                    <g id="apple" transform="translate(10.000000, 8.000000)">
                      <path
                        d="M20.354,16.487 C19.016,15.981 18.121,14.766 18.02,13.317 C17.921,11.905 18.613,10.651 19.871,9.962 L20.917,9.389 L20.17,8.459 C18.915,6.896 17.119,5.962 15.366,5.962 C14.151,5.962 13.308,6.28 12.631,6.536 C12.153,6.717 11.776,6.859 11.362,6.859 C10.89,6.859 10.424,6.693 9.884,6.501 C9.176,6.249 8.374,5.963 7.344,5.963 C5.354,5.963 3.347,7.151 2.107,9.061 C0.256,11.91 0.764,16.795 3.315,20.677 C4.326,22.215 5.743,23.982 7.75,24 C7.763,24 7.776,24 7.789,24 C9.432,24 9.792,23.124 11.387,23.114 C13.129,23.196 13.349,24.007 14.976,23.996 C16.937,23.978 18.351,22.225 19.475,20.512 C20.139,19.505 20.396,18.978 20.913,17.834 L21.351,16.864 L20.354,16.487 Z"
                        id="Path"
                      ></path>
                      <path
                        d="M14.1,3.45 C14.75,2.616 15.243,1.439 15.064,0.236 C14.002,0.309 12.762,0.984 12.037,1.864 C11.379,2.663 10.836,3.847 11.047,4.999 C12.205,5.035 13.404,4.343 14.1,3.45 L14.1,3.45 Z"
                        id="Path"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "push":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-81.000000, -1019.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-push">
                  <rect
                    id="Rectangle"
                    x="0"
                    y="0.5"
                    width="24"
                    height="24"
                  ></rect>
                  <circle
                    id="Oval"
                    fill={props.fill ? props.fill : colors.blue}
                    fillRule="nonzero"
                    cx="19"
                    cy="5.5"
                    r="5"
                  ></circle>
                  <path
                    d="M9.91782847,5.5 L7,5.5 C3.6862915,5.5 1,8.1862915 1,11.5 L1,16.5 C1,19.8137085 3.6862915,22.5 7,22.5 L13,22.5 C16.3137085,22.5 19,19.8137085 19,16.5 L19,14.1359286"
                    id="Path-3"
                    stroke={props.fill ? props.fill : colors.blue}
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "android-two":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-966.000000, -1138.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-android"
                  transform="translate(885.000000, 119.000000)"
                >
                  <rect
                    id="Rectangle-Copy-3"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  ></rect>
                  <g id="android" transform="translate(0.000000, 1.000000)">
                    <path
                      d="M1,9 L1,16"
                      id="Path"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M23,9 L23,16"
                      id="Path"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7,3 L4,0"
                      id="Path"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M17,3 L20,0"
                      id="Path"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8,19 L8,22"
                      id="Path"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16,19 L16,22"
                      id="Path"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12,1 C8.134,1 5,4.134 5,8 L5,19 L19,19 L19,8 C19,4.134 15.866,1 12,1 Z"
                      id="Path"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      cx="9"
                      cy="6"
                      r="1"
                    ></circle>
                    <circle
                      id="Oval"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                      cx="15"
                      cy="6"
                      r="1"
                    ></circle>
                    <path
                      d="M5,9 L19,9"
                      id="Path"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "apple-two":
      return (
        <SVG
          width="20px"
          height="24px"
          viewBox="0 0 20 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-1027.000000, -1140.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-apple"
                  transform="translate(944.000000, 120.000000)"
                >
                  <rect
                    id="Rectangle"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  ></rect>
                  <g id="apple" transform="translate(3.000000, 1.000000)">
                    <path
                      d="M18,17.423 C17.508,18.513 17.273,18.999 16.639,19.963 C15.756,21.308 14.51,22.983 12.966,22.997 C11.594,23.01 11.242,22.105 9.38,22.115 C7.519,22.125 7.13,23.013 5.758,23.0001414 C4.214,22.986 3.035,21.474 2.15,20.128 C-0.32,16.366 -0.578,11.952 0.946,9.606 C2.029,7.938 3.738,6.963 5.345,6.963 C6.981,6.963 8.009,7.86 9.362,7.86 C10.674,7.86 11.474,6.962 13.365,6.962 C14.795,6.962 16.309,7.74 17.389,9.085 C13.853,11.023 14.427,16.072 18,17.423 L18,17.423 Z"
                      id="Path"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12.1,3.45 C12.75,2.616 13.243,1.439 13.064,0.236 C12.002,0.309 10.762,0.984 10.037,1.864 C9.379,2.663 8.836,3.847 9.047,4.999 C10.205,5.035 11.404,4.343 12.1,3.45 L12.1,3.45 Z"
                      id="Path"
                      fill={props.fill ? props.fill : colors.blue}
                      fillRule="nonzero"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "subtract":
      return (
        <SVG
          width="12px"
          height="2px"
          viewBox="0 0 12 2"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g
              id="subtract"
              transform="translate(1.000000, 0.000000)"
              stroke={props.fill ? props.fill : colors.blue}
              strokeWidth="1.75"
            >
              <path d="M10,1 L0,1" id="Path"></path>
            </g>
          </g>
        </SVG>
      );

    case "infographic":
      return (
        <SVG
          width="22px"
          height="22px"
          viewBox="0 0 22 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Resources"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="8.2_ebooksmore_web"
              transform="translate(-100.000000, -1558.000000)"
            >
              <g
                id="Icon-inforgraphic"
                transform="translate(99.000000, 1557.000000)"
              >
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <g
                  id="decision-process"
                  transform="translate(2.000000, 2.000000)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                >
                  <rect
                    id="Rectangle"
                    stroke={props.fill ? props.fill : colorPicker.blue}
                    x="0"
                    y="0"
                    width="8"
                    height="4"
                  ></rect>
                  <rect
                    id="Rectangle"
                    stroke={props.fill ? props.fill : colorPicker.blue}
                    x="0"
                    y="16"
                    width="8"
                    height="4"
                  ></rect>
                  <path
                    d="M4,7 L4,13"
                    id="Path"
                    stroke={props.fill ? props.fill : colorPicker.blue}
                  ></path>
                  <polyline
                    id="Path"
                    stroke={props.fill ? props.fill : colorPicker.blue}
                    points="11 2 15 2 15 4"
                  ></polyline>
                  <polyline
                    id="Path"
                    stroke={props.fill ? props.fill : colorPicker.blue}
                    points="11 18 15 18 15 16"
                  ></polyline>
                  <polygon
                    id="Path"
                    stroke={props.fill ? props.fill : colorPicker.blue}
                    points="10 10 15 7 20 10 15 13"
                  ></polygon>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "ebook":
      return (
        <SVG
          width="20px"
          height="24px"
          viewBox="0 0 20 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Resources"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="8.3_gated_web"
              transform="translate(-721.000000, -1001.000000)"
            >
              <g id="Demo-Form" transform="translate(678.000000, 295.000000)">
                <g id="Form" transform="translate(41.000000, 362.000000)">
                  <g id="ebook" transform="translate(0.000000, 343.000000)">
                    <g
                      id="Icon-ebook"
                      transform="translate(0.000000, 1.000000)"
                    >
                      <rect
                        id="Rectangle"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <g
                        id="book-bookmark"
                        transform="translate(3.000000, 1.000000)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      >
                        <polyline
                          id="Path"
                          stroke={props.fill ? props.fill : colorPicker.blue}
                          points="10 0 10 8 7 6 4 8 4 0"
                        ></polyline>
                        <path
                          d="M2,0 C0.895,0 0,0.895 0,2 L0,20 C0,18.895 0.895,18 2,18 L16,18 C17.105,18 18,17.105 18,16 L18,2 C18,0.895 17.105,0 16,0 L2,0 Z"
                          id="Path"
                          stroke={props.fill ? props.fill : colors.blue}
                        ></path>
                        <path
                          d="M16,22 C17.105,22 18,21.105 18,20 L18,18 L18,16 C18,17.105 17.105,18 16,18 L2,18 C0.895,18 0,18.895 0,20 C0,21.105 0.895,22 2,22 L16,22 Z"
                          id="Path"
                          stroke={props.fill ? props.fill : colors.blue}
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "guide":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Resources"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="8.2_ebooksmore_web"
              transform="translate(-525.000000, -1557.000000)"
            >
              <g id="Icon-Guide" transform="translate(525.000000, 1557.000000)">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <g
                  id="treasure-map-40"
                  transform="translate(1.000000, 1.000000)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                >
                  <path
                    d="M2,4 C0.9,4 0,3.1 0,2 L0,15 C0,16.7 1.3,18 3,18 L20,18 C21.1,18 22,18.9 22,20 L22,7 C22,5.3 20.7,4 19,4 L2,4 Z"
                    id="Path"
                    stroke={props.fill ? props.fill : colors.blue}
                  ></path>
                  <path
                    d="M5,4 L5,0 L2,0 C0.9,0 0,0.9 0,2"
                    id="Path"
                    stroke={props.fill ? props.fill : colors.blue}
                  ></path>
                  <path
                    d="M17,18 L17,22 L20,22 C21.1,22 22,21.1 22,20"
                    id="Path"
                    stroke={props.fill ? props.fill : colors.blue}
                  ></path>
                  <path
                    d="M14,9 L18,13"
                    id="Path"
                    stroke={props.fill ? props.fill : colors.blue}
                  ></path>
                  <path
                    d="M18,9 L14,13"
                    id="Path"
                    stroke={props.fill ? props.fill : colors.blue}
                  ></path>
                  <path
                    d="M4,11 L5,11"
                    id="Path"
                    stroke={props.fill ? props.fill : colors.blue}
                  ></path>
                  <path
                    d="M9,11 L10,11"
                    id="Path"
                    stroke={props.fill ? props.fill : colors.blue}
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "webinar":
      return (
        <SVG
          width="24px"
          height="22px"
          viewBox="0 0 24 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Resources"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="8.2_ebooksmore_web"
              transform="translate(-949.000000, -1558.000000)"
            >
              <g
                id="Icon-Webinar"
                transform="translate(949.000000, 1557.000000)"
              >
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <g
                  id="window-paragraph"
                  transform="translate(1.000000, 2.000000)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                >
                  <rect
                    id="Rectangle"
                    stroke={props.fill ? props.fill : colors.blue}
                    x="0"
                    y="0"
                    width="22"
                    height="20"
                  ></rect>
                  <path
                    d="M0,4 L22,4"
                    id="Path"
                    stroke={props.fill ? props.fill : colors.blue}
                  ></path>
                  <rect
                    id="Rectangle"
                    stroke={props.fill ? props.fill : colorPicker.blue}
                    x="4"
                    y="9"
                    width="6"
                    height="6"
                  ></rect>
                  <path
                    d="M14,9 L18,9"
                    id="Path"
                    stroke={props.fill ? props.fill : colors.blue}
                  ></path>
                  <path
                    d="M14,13 L16,13"
                    id="Path"
                    stroke={props.fill ? props.fill : colors.blue}
                  ></path>
                  <path
                    d="M5,0 L5,4"
                    id="Path"
                    stroke={props.fill ? props.fill : colors.blue}
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "download":
      return (
        <SVG
          width="24px"
          height="17px"
          viewBox="0 0 24 17"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Resources"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="8.3_gated_web"
              transform="translate(-1253.000000, -1005.000000)"
            >
              <g id="Demo-Form" transform="translate(678.000000, 295.000000)">
                <g id="Form" transform="translate(41.000000, 362.000000)">
                  <g
                    id="Button-Glyph---Large"
                    transform="translate(374.000000, 333.000000)"
                  >
                    <g
                      id="Icon-download-cloud"
                      transform="translate(160.000000, 12.000000)"
                    >
                      <rect
                        id="Rectangle"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <g
                        id="cloud-download-95"
                        transform="translate(1.000000, 3.000000)"
                        stroke={props.fill ? props.fill : colorPicker.blue}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      >
                        <path d="M11,6.998 L11,14.998" id="Path"></path>
                        <polyline
                          id="Path"
                          points="14 11.998 11 14.998 8 11.998"
                        ></polyline>
                        <path
                          d="M16,16 L18,16 C20.209,16 22,14.207 22,11.998 C22,9.801 20.218,7.985 17.975,8.001 C17.718,4.092 14.474,0.998 10.5,0.998 C6.481,0.998 3.21,4.162 3.018,8.134 C1.287,8.573 0,10.129 0,11.998 C0,14.207 1.791,16 4,16 L6,16"
                          id="Path"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "clock":
      return (
        <SVG
          width="18px"
          height="18px"
          viewBox="0 0 18 18"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Engage-/-View-all-calendar"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="3.0-View-all-WIP"
              transform="translate(-503.000000, -1098.000000)"
              stroke={props.fill ? props.fill : colors.blue}
            >
              <g id="Calendar" transform="translate(188.000000, 602.000000)">
                <g
                  id="Clock-1-Copy"
                  transform="translate(316.000000, 497.000000)"
                >
                  <circle
                    id="Oval-4"
                    strokeWidth="1"
                    cx="8"
                    cy="8"
                    r="8"
                  ></circle>
                  <path
                    d="M7.05180827,4.00311313 C6.82503911,4.03065052 6.65839487,4.21530159 6.66698414,4.4307078 L6.66698414,8.5772814 C6.67041897,8.72144118 6.7546009,8.85426008 6.88688364,8.92714855 L9.96547668,10.585778 C10.0668372,10.655428 10.1939655,10.6813441 10.3159437,10.6586665 C10.4379176,10.6343717 10.5444325,10.5631004 10.6062814,10.4610573 C10.6698456,10.3590143 10.6835893,10.2359108 10.645793,10.1241482 C10.6062814,10.0123856 10.5186647,9.92167935 10.4052757,9.87308565 L7.54658215,8.33105786 L7.54658215,4.4307078 C7.5517366,4.30922563 7.50019655,4.19098608 7.40399052,4.10837804 C7.3095041,4.02577 7.18065619,3.98851719 7.05180827,4.00309239 L7.05180827,4.00311313 Z"
                    id="Path"
                    strokeWidth="1"
                    stroke={props.fill ? props.fill : colors.blue}
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "blocks":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Toggle-design-(blocks)"
              transform="translate(-61.000000, -20.000000)"
            >
              <g id="Blocks">
                <g transform="translate(61.000000, 20.000000)">
                  <g id="Icon-blocks">
                    <rect
                      id="Rectangle"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    ></rect>
                    <g
                      id="divider"
                      transform="translate(1.000000, 1.000000)"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    >
                      <rect
                        id="Rectangle"
                        x="3"
                        y="0"
                        width="16"
                        height="7"
                      ></rect>
                      <rect
                        id="Rectangle"
                        x="3"
                        y="15"
                        width="16"
                        height="7"
                      ></rect>
                      <path d="M0,11 L22,11" id="Path"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "theme":
      return (
        <SVG
          width="24px"
          height="23px"
          viewBox="0 0 24 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Toggle-design-(blocks)"
              transform="translate(-281.000000, -21.000000)"
            >
              <g id="Theme">
                <g transform="translate(281.000000, 20.000000)">
                  <g id="Icon-theme">
                    <rect
                      id="Rectangle"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    ></rect>
                    <g
                      id="paint-bucket-40"
                      transform="translate(1.000000, 0.000000)"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M2.41,13.017 L13.017,20.795 C13.798,21.576 16.172,20.468 18.32,18.32 C20.468,16.172 21.576,13.798 20.795,13.017 L13.017,2.41"
                        id="Path"
                        strokeWidth="1.75"
                      ></path>
                      <ellipse
                        id="Oval"
                        strokeWidth="1.75"
                        transform="translate(7.712725, 7.713400) rotate(-45.000000) translate(-7.712725, -7.713400) "
                        cx="7.7127246"
                        cy="7.7134"
                        rx="7.49992807"
                        ry="2.99997123"
                      ></ellipse>
                      <path
                        d="M0,21 C0,19.895 2,17 2,17 C2,17 4,19.895 4,21 C4,22.105 3.105,23 2,23 C0.895,23 0,22.105 0,21 Z"
                        id="Path"
                        strokeWidth="1.75"
                      ></path>
                      <path
                        d="M13,12 L17,12 C19.209,12 21,10.209 21,8 C21,5.791 19.209,4 17,4 L14.183,4"
                        id="Path"
                        strokeWidth="1.75"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "menu-icon":
      return (
        <SVG
          width="24px"
          height="16px"
          viewBox="0 0 24 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Toggle-design-(blocks)"
              transform="translate(-502.000000, -24.000000)"
            >
              <g id="Menu-icon">
                <g transform="translate(502.000000, 20.000000)">
                  <g id="Icon-menu">
                    <rect
                      id="Rectangle"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    ></rect>
                    <g
                      id="menu-icon"
                      transform="translate(1.000000, 4.000000)"
                      stroke={props.fill ? props.fill : colors.blue}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.75"
                    >
                      <path d="M0,8 L22,8" id="Path"></path>
                      <path d="M11,1 L22,1" id="Path"></path>
                      <path d="M0,15 L11,15" id="Path"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );

    case "checkmark-small":
      return (
        <SVG
          width="14px"
          height="10px"
          viewBox="0 0 14 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Style-Guide"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g transform="translate(-90.000000, -2020.000000)" id="Toggle-ON">
              <g transform="translate(81.000000, 2009.000000)">
                <g
                  id="Icon-checkmark"
                  transform="translate(4.000000, 4.000000)"
                >
                  <rect
                    id="Rectangle"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  ></rect>
                  <g
                    id="d-check"
                    transform="translate(6.000000, 8.000000)"
                    stroke={props.fill ? props.fill : colorPicker.blue}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <polyline id="Path" points="0 4 4 8 12 0"></polyline>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "add-section":
      return (
        <SVG
          width="24px"
          height="20px"
          viewBox="0 0 24 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Design-/-Blocks"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="1.1.1-Design-Blocks-MultiBlock-Hover"
              transform="translate(-1189.000000, -451.000000)"
            >
              <g
                id="Blocks-editor"
                transform="translate(1176.000000, 372.000000)"
              >
                <g id="Block-editor">
                  <g id="Design-dropdown">
                    <g
                      id="Icon-add-section"
                      transform="translate(13.000000, 77.000000)"
                    >
                      <rect
                        id="Rectangle"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <g
                        id="file-add"
                        transform="translate(1.000000, 3.000000)"
                        stroke={props.fill ? props.fill : colorPicker.blue}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      >
                        <polyline
                          id="Path"
                          points="0 12 0 18 22 18 22 12"
                        ></polyline>
                        <path d="M11,0 L11,10" id="Path"></path>
                        <path d="M16,5 L6,5" id="Path"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "double-dot-dot-dot":
      return (
        <SVG
          width="13px"
          height="18px"
          viewBox="0 0 13 18"
          version="1.1"
          xmlns="http://www.w3.org/2000/SVG"
          {...props}
        >
          <g
            id="Design-/-Blocks"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="6.0-Newsletter-block"
              transform="translate(-451.000000, -314.000000)"
              fill={props.fill ? props.fill : colors.gray50}
            >
              <g id="Banner-modal" transform="translate(74.000000, 93.000000)">
                <g id="Group-7" transform="translate(377.000000, 221.000000)">
                  <path
                    d="M3.6656,1.8516 C3.6656,2.8227 2.87888,3.60942 1.90778,3.60942 C0.93668,3.60942 0.14996,2.8227 0.14996,1.8516 C0.14996,0.8805 0.93668,0.09378 1.90778,0.09378 C2.87888,0.09378 3.6656,0.8805 3.6656,1.8516"
                    id="Fill-1"
                  ></path>
                  <path
                    d="M12.611,1.8516 C12.611,2.8227 11.82428,3.60942 10.85318,3.60942 C9.88208,3.60942 9.09536,2.8227 9.09536,1.8516 C9.09536,0.8805 9.88208,0.09378 10.85318,0.09378 C11.82428,0.09378 12.611,0.8805 12.611,1.8516"
                    id="Fill-2"
                  ></path>
                  <path
                    d="M3.6656,8.99724 C3.6656,9.96834 2.87888,10.75506 1.90778,10.75506 C0.93668,10.75506 0.14996,9.96834 0.14996,8.99724 C0.14996,8.02614 0.93668,7.23942 1.90778,7.23942 C2.87888,7.23942 3.6656,8.02614 3.6656,8.99724"
                    id="Fill-3"
                  ></path>
                  <path
                    d="M12.611,8.99724 C12.611,9.96834 11.82428,10.75506 10.85318,10.75506 C9.88208,10.75506 9.09536,9.96834 9.09536,8.99724 C9.09536,8.02614 9.88208,7.23942 10.85318,7.23942 C11.82428,7.23942 12.611,8.02614 12.611,8.99724"
                    id="Fill-4"
                  ></path>
                  <path
                    d="M3.6656,16.14288 C3.6656,17.1139794 2.87888,17.9006992 1.90778,17.9006992 C0.93668,17.9006992 0.14996,17.1139794 0.14996,16.14288 C0.14996,15.17178 0.93668,14.38506 1.90778,14.38506 C2.87888,14.38506 3.6656,15.17178 3.6656,16.14288"
                    id="Fill-5"
                  ></path>
                  <path
                    d="M12.611,16.14288 C12.611,17.1139794 11.82428,17.9006992 10.85318,17.9006992 C9.88208,17.9006992 9.09536,17.1139794 9.09536,16.14288 C9.09536,15.17178 9.88208,14.38506 10.85318,14.38506 C11.82428,14.38506 12.611,15.17178 12.611,16.14288"
                    id="Fill-6"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "android":
      return (
        <DashIconWrapper
          {...props}
          width="23px"
          height="26px"
          viewBox="0 0 23 26"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Header---Design"
              transform="translate(-397.000000, -113.000000)"
              fill={props.fill ? props.fill : colorPicker.green100}
              fillRule="nonzero"
            >
              <g id="Header">
                <g
                  id="App-status"
                  transform="translate(393.000000, 110.000000)"
                >
                  <g id="Android-Logo">
                    <g id="androd" transform="translate(4.428571, 2.952381)">
                      <path
                        d="M14.0770323,2.23559547 L15.3421289,0.381656137 C15.4172478,0.271453402 15.3985465,0.12679648 15.3003335,0.0583947823 C15.202246,-0.00962690555 15.0615472,0.024003929 14.9869931,0.134333333 L13.6721938,2.06028446 C12.8057228,1.71580591 11.8435489,1.52383781 10.8294132,1.52383781 C9.81527748,1.52383781 8.85285263,1.7156159 7.98644435,2.06028446 L6.67183326,0.134269998 C6.5964634,0.0240672639 6.45601564,-0.00969024045 6.35786538,0.0583314474 C6.25971511,0.12654314 6.2410766,0.271263398 6.31619545,0.381592802 L7.5817314,2.23553214 C5.56958822,3.18023558 4.15852128,4.97540013 3.97872556,7.07051878 L17.6793478,7.07051878 C17.5001796,4.97540013 16.0890499,3.18029892 14.0770323,2.23559547"
                        id="Shape"
                      ></path>
                      <path
                        d="M7.96724104,5.15786799 C7.54847076,5.15786799 7.20914948,4.81541616 7.20914948,4.39284567 C7.20914948,3.97033852 7.54828249,3.62776002 7.96724104,3.62776002 C8.38569754,3.62776002 8.72489331,3.97021185 8.72489331,4.39284567 C8.72495606,4.81535282 8.38569754,5.15786799 7.96724104,5.15786799"
                        id="Shape"
                      ></path>
                      <path
                        d="M13.6908951,5.15786799 C13.2724386,5.15786799 12.93318,4.81541616 12.93318,4.39284567 C12.93318,3.97021185 13.2724386,3.62776002 13.6908951,3.62776002 C14.1097908,3.62776002 14.4489239,3.97033852 14.4489239,4.39284567 C14.4489239,4.81535282 14.1096653,5.15786799 13.6908951,5.15786799"
                        id="Shape"
                      ></path>
                      <path
                        d="M3.09907578,15.8082656 C3.09907578,16.6601201 2.41478519,17.3507239 1.57065526,17.3507239 L1.57065526,17.3507239 C0.726588084,17.3507239 0.0422974925,16.6601201 0.0422974925,15.8082656 L0.0422974925,9.56927078 C0.0422974925,8.71741631 0.726588084,8.02681251 1.57065526,8.02681251 L1.57065526,8.02681251 C2.41478519,8.02681251 3.09907578,8.71741631 3.09907578,9.56927078 L3.09907578,15.8082656 Z"
                        id="Shape"
                      ></path>
                      <path
                        d="M3.97847453,8.07450369 L3.97847453,19.3427333 C3.97847453,20.0119299 4.51604178,20.55452 5.17930913,20.55452 L6.59966395,20.55452 L6.59966395,24.0217261 C6.59966395,24.8736439 7.28389179,25.5641843 8.12802172,25.5641843 C8.97215164,25.5641843 9.65644224,24.8736439 9.65644224,24.0217261 L9.65644224,20.55452 L12.0016939,20.55452 L12.0016939,24.0217261 C12.0016939,24.8736439 12.6858589,25.5641843 13.5300516,25.5641843 C14.3742443,25.5641843 15.0584094,24.8736439 15.0584094,24.0217261 L15.0584094,20.55452 L16.4787642,20.55452 C17.1420316,20.55452 17.6797243,20.0122466 17.6797243,19.3427333 L17.6797243,8.07450369 L3.97847453,8.07450369 Z"
                        id="Shape"
                      ></path>
                      <path
                        d="M18.5590603,15.8082656 C18.5590603,16.6601201 19.2432882,17.3507239 20.0874181,17.3507239 L20.0874181,17.3507239 C20.9314853,17.3507239 21.6157758,16.6601201 21.6157758,15.8082656 L21.6157758,9.56927078 C21.6157758,8.71741631 20.9314853,8.02681251 20.0874181,8.02681251 L20.0874181,8.02681251 C19.2432882,8.02681251 18.5590603,8.71741631 18.5590603,9.56927078 L18.5590603,15.8082656 Z"
                        id="Shape"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "apple":
      return (
        <DashIconWrapper
          {...props}
          width="21.85px"
          height="26.99px"
          viewBox="0 0 21.85 26.99"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>apple</title>
          <path
            d="M45.35,31.51c-.38.32-.73.6-1.05.9A5.22,5.22,0,0,0,42.7,35a5.77,5.77,0,0,0,1.62,6,10.52,10.52,0,0,0,1.39,1c.33.22.34.2.21.58a15.81,15.81,0,0,1-3.35,5.52A3.57,3.57,0,0,1,41,49.14a3.44,3.44,0,0,1-2.22,0c-.51-.18-1-.42-1.52-.59a5.2,5.2,0,0,0-3.76.17,11.29,11.29,0,0,1-1.78.6,2.76,2.76,0,0,1-2.39-.64,11.3,11.3,0,0,1-2.07-2.35A17,17,0,0,1,24.32,39a10.83,10.83,0,0,1,.34-5.24,6.82,6.82,0,0,1,4.25-4.44,5.46,5.46,0,0,1,3.94.05l1.53.58a2.41,2.41,0,0,0,1.79,0c.67-.26,1.35-.5,2-.74a6.44,6.44,0,0,1,6.39,1.46C44.86,30.92,45.09,31.22,45.35,31.51Z"
            transform="translate(-24.15 -22.36)"
            style={{ fill: props.fill ? props.fill : colorPicker.green100 }}
          />
          <path
            d="M40.46,22.36a5,5,0,0,1-.19,2.05A6,6,0,0,1,37.42,28a4.28,4.28,0,0,1-2.1.56c-.19,0-.25-.06-.26-.25a5.41,5.41,0,0,1,1.22-3.63,6,6,0,0,1,4.09-2.35Z"
            transform="translate(-24.15 -22.36)"
            style={{ fill: props.fill ? props.fill : colorPicker.green100 }}
          />
        </DashIconWrapper>
      );

    case "design":
      return (
        <DashIconWrapper
          {...props}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Header---Settings"
              transform="translate(-66.000000, -205.000000)"
            >
              <g id="Header">
                <g id="Navigation" transform="translate(66.000000, 203.000000)">
                  <g id="Group-2" transform="translate(0.000000, 1.000000)">
                    <g id="Tab-design">
                      <g
                        id="Icon-design"
                        transform="translate(0.000000, 1.000000)"
                      >
                        <rect
                          id="Rectangle"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                        <g
                          id="path-exclude"
                          transform="translate(1.000000, 1.000000)"
                          stroke={props.fill ? props.fill : colorPicker.gray50}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.75"
                        >
                          <polygon
                            id="Path"
                            points="22 0 7 0 7 7 0 7 0 22 15 22 15 15 22 15"
                          ></polygon>
                          <polyline
                            id="Path"
                            points="15 9 15 7 13 7"
                          ></polyline>
                          <polyline
                            id="Path"
                            points="7 13 7 15 9 15"
                          ></polyline>
                          <polyline id="Path" points="7 9 7 7 9 7"></polyline>
                          <polyline
                            id="Path"
                            points="13 15 15 15 15 13"
                          ></polyline>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "engage":
      return (
        <DashIconWrapper
          {...props}
          width="24px"
          height="22px"
          viewBox="0 0 24 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Header---Settings"
              transform="translate(-246.000000, -206.000000)"
            >
              <g id="Header">
                <g id="Navigation" transform="translate(66.000000, 203.000000)">
                  <g
                    id="Tab-engage"
                    transform="translate(180.000000, 0.000000)"
                  >
                    <g
                      id="Icon-engage"
                      transform="translate(0.000000, 2.000000)"
                    >
                      <rect
                        id="Rectangle-Copy-6"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <g
                        id="f-chat"
                        transform="translate(1.000000, 2.000000)"
                        stroke={props.fill ? props.fill : colorPicker.green100}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      >
                        <polygon
                          id="Path"
                          points="22 0 0 0 0 15 7 15 11 20 15 15 22 15"
                        ></polygon>
                        <path d="M6,5 L16,5" id="Path"></path>
                        <path d="M6,10 L12,10" id="Path"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );

    case "drops":
      return (
        <DashIconWrapper
          {...props}
          width="21px"
          height="26px"
          viewBox="0 0 21 26"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Header---Settings"
              transform="translate(-418.000000, -205.000000)"
            >
              <g id="Header">
                <g id="Navigation" transform="translate(66.000000, 203.000000)">
                  <g id="Group-3" transform="translate(351.000000, 1.000000)">
                    <g id="Tap-drops">
                      <g
                        id="Icon-drops"
                        transform="translate(0.000000, 2.000000)"
                      >
                        <rect
                          id="Rectangle-Copy-7"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                        <g
                          transform="translate(2.000000, 0.000000)"
                          stroke={props.fill ? props.fill : colorPicker.blue}
                          strokeWidth="1.75"
                        >
                          <g
                            id="app"
                            transform="translate(0.923077, 7.384615)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline
                              id="Path"
                              points="0.208436725 3.72208437 8.97766749 6.49131514 17.7468983 3.72208437"
                            ></polyline>
                            <path
                              d="M8.97766749,6.49131514 L8.97766749,15.7220844"
                              id="Path"
                            ></path>
                            <polygon
                              id="Path"
                              points="17.7468983 12.5836228 8.97766749 15.7220844 0.208436725 12.5836228 0.208436725 3.16823821 8.97766749 0.0297766749 17.7468983 3.16823821"
                            ></polygon>
                          </g>
                          <circle
                            id="Oval-Copy"
                            cx="9.63275434"
                            cy="1.7866005"
                            r="1.7866005"
                          ></circle>
                          <circle
                            id="Oval-Copy-2"
                            cx="16.9131514"
                            cy="3.93052109"
                            r="1.7866005"
                          ></circle>
                          <path
                            d="M13.507783,5.44913151 L15.5028202,8.96277916"
                            id="Line-Copy-2"
                            transform="translate(14.843672, 7.295285) scale(-1, 1) translate(-14.843672, -7.295285) "
                          ></path>
                          <g
                            id="Group"
                            transform="translate(3.074442, 5.643921) scale(-1, 1) translate(-3.074442, -5.643921) translate(0.074442, 2.143921)"
                          >
                            <circle
                              id="Oval-Copy-2"
                              transform="translate(3.454094, 1.786600) scale(-1, 1) translate(-3.454094, -1.786600) "
                              cx="3.45409429"
                              cy="1.7866005"
                              r="1.7866005"
                            ></circle>
                            <path
                              d="M0.0487259118,3.30521092 L2.04376313,6.81885856"
                              id="Line-Copy-2"
                              transform="translate(1.384615, 5.151365) scale(-1, 1) translate(-1.384615, -5.151365) "
                            ></path>
                          </g>
                          <path
                            d="M9.78461538,4.28784119 L9.78461538,7.38461538"
                            id="Line-Copy"
                            strokeLinecap="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "stats":
      return (
        <DashIconWrapper
          {...props}
          width="22px"
          height="22px"
          viewBox="0 0 22 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Header---Settings"
              transform="translate(-591.000000, -207.000000)"
            >
              <g id="Header">
                <g id="Navigation" transform="translate(66.000000, 203.000000)">
                  <g id="Tab-stats" transform="translate(524.000000, 1.000000)">
                    <g
                      id="Icon-stats"
                      transform="translate(0.000000, 2.000000)"
                    >
                      <rect
                        id="Rectangle-Copy-8"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <g
                        id="a-chart"
                        transform="translate(2.000000, 2.000000)"
                        stroke={props.fill ? props.fill : colorPicker.green100}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      >
                        <path
                          d="M14.6,16.5 C13.2,18.6 10.7,20 8,20 C3.6,20 0,16.4 0,12 C0,7.6 3.6,4 8,4"
                          id="Path"
                        ></path>
                        <path
                          d="M17.9,18.8 C19.2,16.9 20,14.5 20,12 C20,5.4 14.6,0 8,0 L8,12 L17.9,18.8 Z"
                          id="Path"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );

    case "settings":
      return (
        <DashIconWrapper
          {...props}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Header---App-Submission-(0/3)"
              transform="translate(-975.000000, -206.000000)"
            >
              <g id="Header">
                <g id="Navigation" transform="translate(66.000000, 203.000000)">
                  <g
                    id="Tab-settings"
                    transform="translate(909.000000, 1.000000)"
                  >
                    <g
                      id="Icon-settings"
                      transform="translate(0.000000, 2.000000)"
                    >
                      <rect
                        id="Rectangle-Copy-10"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <g
                        id="preferences-circle"
                        transform="translate(1.000000, 1.000000)"
                        stroke={props.fill ? props.fill : colorPicker.green100}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.75"
                      >
                        <path d="M13,3 L22,3" id="Path"></path>
                        <path d="M0,3 L3,3" id="Path"></path>
                        <path d="M21,11 L22,11" id="Path"></path>
                        <path d="M0,11 L11,11" id="Path"></path>
                        <path d="M13,19 L22,19" id="Path"></path>
                        <path d="M0,19 L3,19" id="Path"></path>
                        <circle id="Oval" cx="6" cy="3" r="3"></circle>
                        <circle id="Oval" cx="14" cy="11" r="3"></circle>
                        <circle id="Oval" cx="6" cy="19" r="3"></circle>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );

    case "dropdown-arrow":
      return (
        <DashIconWrapper
          {...props}
          width="10px"
          height="6px"
          viewBox="0 0 10 6"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g
              id="Header---Drops"
              transform="translate(-186.000000, -216.000000)"
              stroke={props.fill ? props.fill : colorPicker.gray50}
              strokeWidth="1.75"
            >
              <g id="Header">
                <g id="Navigation" transform="translate(66.000000, 203.000000)">
                  <g id="Group-2" transform="translate(0.000000, 1.000000)">
                    <g id="Group-4">
                      <polyline
                        id="Path-Copy"
                        points="129 13 125 17 121 13"
                      ></polyline>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );

    case "chat-multicolored":
      return (
        <DashIconWrapper
          {...props}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="App-Listing"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="2.0-App-submission-page"
              transform="translate(-1312.000000, -812.000000)"
            >
              <g
                id="demo-team-pic"
                transform="translate(47.000000, 751.000000)"
              >
                <g
                  id="Button-Glyph---Medium"
                  transform="translate(1143.000000, 53.000000)"
                >
                  <g id="Icon-chat" transform="translate(122.000000, 8.000000)">
                    <rect
                      id="Rectangle"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    ></rect>
                    <g
                      id="b-comment"
                      transform="translate(1.000000, 1.500000)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path
                        d="M6.799,15.601 C8.092,17.61 10.826,19 14,19 C14.59,19 15.163,18.949 15.716,18.858 L20,21 L20,16.96 C21.241,15.903 22,14.52 22,13 C22,11.448 21.208,10.039 19.919,8.973"
                        id="Path"
                        stroke={colorPicker.green100}
                      ></path>
                      <path
                        d="M10,0 C4.477,0 0,3.582 0,8 C0,9.797 0.75,11.45 2,12.785 L2,18 L6.833,15.584 C7.829,15.85 8.892,16 10,16 C15.523,16 20,12.418 20,8 C20,3.582 15.523,0 10,0 Z"
                        id="Path"
                        stroke={colorPicker.blue}
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );

    case "preview-app-multicolored":
      return (
        <DashIconWrapper
          {...props}
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path d="M10 23H4C2.89543 23 2 22.1046 2 21V3C2 1.89543 2.89543 1 4 1H16C17.1046 1 18 1.89543 18 3V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 23L19.121 20.121M17 21C18.6569 21 20 19.6569 20 18C20 16.3431 18.6569 15 17 15C15.3431 15 14 16.3431 14 18C14 19.6569 15.3431 21 17 21Z" stroke="#1BDFBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </DashIconWrapper>
      );

    case "duplicate":
      return (
        <DashIconWrapper
          {...props}
          width="22px"
          height="22px"
          viewBox="0 0 22 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Drops"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g
              id="1.1-Drop-hover-+-click-states"
              transform="translate(-682.000000, -658.000000)"
              stroke={props.fill ? props.fill : colorPicker.blue}
              strokeWidth="1.75"
            >
              <g
                id="Editor---Drafts-Copy"
                transform="translate(667.000000, 579.000000)"
              >
                <g id="Block-editor">
                  <g id="Delete" transform="translate(16.000000, 80.000000)">
                    <g id="Icon-Duplicate">
                      <path
                        d="M7.89454545,18.15 C10.7669461,20.7220559 15.1485569,20.6012914 17.8749241,17.8749241 C20.6012914,15.1485569 20.7220559,10.7669461 18.15,7.89454545"
                        id="Path"
                      ></path>
                      <circle
                        id="Oval"
                        cx="7.27272727"
                        cy="7.27272727"
                        r="7.27272727"
                      ></circle>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );

    case "blank-draft":
      return (
        <DashIconWrapper
          {...props}
          width="18px"
          height="20px"
          viewBox="0 0 18 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Drops"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g
              id="1.1-Drop-hover-+-click-states"
              transform="translate(-219.000000, -416.000000)"
              stroke={props.fill ? props.fill : colors.blue}
              strokeWidth="1.75"
            >
              <g id="All-drafts" transform="translate(145.000000, 300.000000)">
                <g id="Create-new-draft">
                  <g id="Start-from-blank-layout">
                    <g
                      id="Blank-Layout"
                      transform="translate(30.000000, 117.000000)"
                    >
                      <g
                        id="layout-grid"
                        transform="translate(45.000000, 0.000000)"
                      >
                        <rect
                          id="Rectangle"
                          x="0"
                          y="0"
                          width="16"
                          height="18"
                        ></rect>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "current-draft":
      return (
        <DashIconWrapper
          {...props}
          width="18px"
          height="20px"
          viewBox="0 0 18 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Drops"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g
              id="1.1-Drop-hover-+-click-states"
              transform="translate(-404.000000, -416.000000)"
              stroke={props.fill ? props.fill : colors.blue}
              strokeWidth="1.75"
            >
              <g id="All-drafts" transform="translate(145.000000, 300.000000)">
                <g id="Create-new-draft">
                  <g
                    id="Start-from-current-layout"
                    transform="translate(185.000000, 0.000000)"
                  >
                    <g
                      id="Current-App-Layout"
                      transform="translate(25.000000, 117.000000)"
                    >
                      <g
                        id="layout-grid-copy"
                        transform="translate(50.000000, 0.000000)"
                      >
                        <path d="M0,6 L16,6" id="Path"></path>
                        <path d="M0,12 L16,12" id="Path"></path>
                        <rect
                          id="Rectangle"
                          x="0"
                          y="0"
                          width="16"
                          height="18"
                        ></rect>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "upload-image":
      return (
        <DashIconWrapper
          {...props}
          width="24px"
          height="20px"
          viewBox="0 0 24 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Modals-/-Blocks"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="3.2-collection-added"
              transform="translate(-269.000000, -523.000000)"
            >
              <g id="Alert-modal" transform="translate(74.000000, 93.000000)">
                <g id="Modal">
                  <g
                    id="Block-editor"
                    transform="translate(179.000000, 409.000000)"
                  >
                    <g
                      id="Upload-banner-image"
                      transform="translate(16.000000, 19.000000)"
                    >
                      <g id="Icon-images">
                        <rect
                          id="Rectangle"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                        <g
                          id="img-stack"
                          transform="translate(1.000000, 3.000000)"
                        >
                          <rect
                            id="Rectangle"
                            stroke={props.fill ? props.fill : colors.blue}
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            x="0"
                            y="0"
                            width="22"
                            height="18"
                          ></rect>
                          <polygon
                            id="Path"
                            stroke={props.fill ? props.fill : colors.blue}
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points="5 14 14 6 18 14"
                          ></polygon>
                          <circle
                            id="Oval"
                            fill={props.fill ? props.fill : colors.blue}
                            fillRule="nonzero"
                            cx="6"
                            cy="5"
                            r="2"
                          ></circle>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "collections-icon":
      return (
        <DashIconWrapper
          {...props}
          width="23px"
          height="24px"
          viewBox="0 0 23 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Modals-/-Blocks"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="3.2-collection-added"
              transform="translate(-598.000000, -422.000000)"
            >
              <g id="Alert-modal" transform="translate(74.000000, 93.000000)">
                <g id="Modal">
                  <g
                    id="Choose-collection-interface"
                    transform="translate(111.000000, 303.000000)"
                  >
                    <g id="Media" transform="translate(309.500000, 0.000000)">
                      <g id="Group" transform="translate(14.000000, 26.000000)">
                        <g
                          id="Icon-collection"
                          transform="translate(89.000000, 0.000000)"
                        >
                          <rect
                            id="Rectangle"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          ></rect>
                          <g
                            id="single-copies"
                            transform="translate(2.000000, 1.000000)"
                            stroke={props.fill ? props.fill : colors.blue}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.75"
                          >
                            <rect
                              id="Rectangle"
                              x="0"
                              y="8"
                              width="12"
                              height="14"
                            ></rect>
                            <polyline
                              id="Path"
                              points="4 4 16 4 16 18"
                            ></polyline>
                            <polyline
                              id="Path"
                              points="8 0 20 0 20 14"
                            ></polyline>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "toast-checkmark":
      return (
        <DashIconWrapper
          {...props}
          width="37px"
          height="37px"
          viewBox="0 0 37 37"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Toast-Notifications"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="Toast" transform="translate(-114.000000, -78.000000)">
              <g id="Toast-1" transform="translate(86.000000, 66.000000)">
                <g
                  id="Group-Copy-3"
                  transform="translate(30.000000, 14.000000)"
                >
                  <g
                    id="check-small"
                    transform="translate(7.200000, 10.080000)"
                    fill={props.fill ? props.fill : "#FFFFFF"}
                    fillRule="nonzero"
                  >
                    <path
                      d="M7.2,14.4 C6.768,14.4 6.48,14.256 6.192,13.968 L0.432,8.208 C-0.144,7.632 -0.144,6.768 0.432,6.192 C1.008,5.616 1.872,5.616 2.448,6.192 L7.2,10.944 L17.712,0.432 C18.288,-0.144 19.152,-0.144 19.728,0.432 C20.304,1.008 20.304,1.872 19.728,2.448 L8.208,13.968 C7.92,14.256 7.632,14.4 7.2,14.4 Z"
                      id="Shape"
                    ></path>
                  </g>
                  <circle
                    id="Oval"
                    stroke={props.fill ? props.fill : "#FFFFFF"}
                    strokeWidth="2.88"
                    cx="16.56"
                    cy="16.56"
                    r="16.56"
                  ></circle>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "toast-alert":
      return (
        <DashIconWrapper
          {...props}
          width="35px"
          height="35px"
          viewBox="0 0 35 35"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Toast-Notifications"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="Toast" transform="translate(-114.000000, -162.000000)">
              <g id="Toast-2" transform="translate(86.000000, 150.000000)">
                <g
                  id="Group-3-Copy-6"
                  transform="translate(30.000000, 14.000000)"
                >
                  <g id="Group-2" transform="translate(14.976000, 8.640000)">
                    <path
                      d="M1.8,0 L1.8,11.52"
                      id="Line"
                      stroke={props.fill ? props.fill : "#FFFFFF"}
                      strokeWidth="2.88"
                      strokeLinecap="round"
                    ></path>
                    <circle
                      id="Oval-2"
                      fill={props.fill ? props.fill : "#FFFFFF"}
                      cx="1.8"
                      cy="15.84"
                      r="1.44"
                    ></circle>
                  </g>
                  <circle
                    id="Oval"
                    stroke={props.fill ? props.fill : "#FFFFFF"}
                    strokeWidth="2.88"
                    cx="16.56"
                    cy="16.56"
                    r="16.56"
                  ></circle>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "popup":
      return (
        <DashIconWrapper
          {...props}
          width="23px"
          height="23px"
          viewBox="0 0 23 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Engage-Segmented-Control---Send-Push"
              transform="translate(-506.000000, -21.000000)"
            >
              <g id="Toggle-design-(blocks)">
                <g id="Pop-ups" transform="translate(506.000000, 20.000000)">
                  <g id="Icon-popup">
                    <rect
                      id="Rectangle"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    ></rect>
                    <g
                      id="party"
                      transform="translate(1.000000, 2.000000)"
                      stroke={props.fill ? props.fill : colorPicker.blue}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <polygon id="Path" points="0 21 5 6 15 16"></polygon>
                      <path d="M8,4 L9,1" id="Path"></path>
                      <path d="M17,13 L20,12" id="Path"></path>
                      <path
                        d="M15,4 C13.8954305,4 13,3.1045695 13,2 C13,0.8954305 13.8954305,0 15,0 C16.1045695,0 17,0.8954305 17,2 C17,2.53043298 16.7892863,3.03914081 16.4142136,3.41421356 C16.0391408,3.78928632 15.530433,4 15,4 Z"
                        id="Path"
                      ></path>
                      <path
                        d="M21,2 C21,5.3137085 18.3137085,8 15,8"
                        id="Path"
                      ></path>
                      <path d="M2.762,12.714 L4.972,19.343" id="Path"></path>
                      <path d="M5.786,6.786 L9.471,17.843" id="Path"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "small-drag":
      return (
        <DashIconWrapper
          {...props}
          width="7px"
          height="10px"
          viewBox="0 0 7 10"
          version="1.1"
        >
          <g
            id="Design-/-Menu"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="1.1-Edit-menu-item"
              transform="translate(-39.000000, -1007.000000)"
              fill={props.fill ? props.fill : colorPicker.blue}
            >
              <g id="Collections" transform="translate(38.000000, 1000.000000)">
                <g id="Icon-drag" transform="translate(0.000000, 7.000000)">
                  <circle id="Oval" cx="1.97959184" cy="1" r="1"></circle>
                  <circle id="Oval-Copy" cx="6.55102041" cy="1" r="1"></circle>
                  <circle id="Oval" cx="1.97959184" cy="5" r="1"></circle>
                  <circle id="Oval-Copy" cx="6.55102041" cy="5" r="1"></circle>
                  <circle id="Oval" cx="1.97959184" cy="9" r="1"></circle>
                  <circle id="Oval-Copy" cx="6.55102041" cy="9" r="1"></circle>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "video":
      return (
        <DashIconWrapper
          {...props}
          width="24px"
          height="22px"
          viewBox="0 0 24 22"
          version="1.1"
        >
          <g
            id="Engage-/-Send-push"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="1.2-Design-Product-Selected"
              transform="translate(-1023.000000, -534.000000)"
            >
              <g
                id="1-Design-your-push"
                transform="translate(551.000000, 400.000000)"
              >
                <g id="Type" transform="translate(61.000000, 69.000000)">
                  <g id="Video" transform="translate(363.000000, 30.000000)">
                    <g
                      id="Icon-video"
                      transform="translate(48.000000, 34.000000)"
                    >
                      <rect
                        id="Rectangle"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <g
                        id="video-player"
                        transform="translate(1.000000, 2.000000)"
                        stroke={props.fill ? props.fill : colorPicker.blue}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path
                          d="M20,0 C21.1045695,0 22,0.8954305 22,2 L22,18 C22,19.1045695 21.1045695,20 20,20 L2,20 C0.8954305,20 0,19.1045695 0,18 L0,2 C0,0.8954305 0.8954305,0 2,0 L20,0 Z"
                          id="Path"
                        ></path>
                        <polygon id="Path" points="9 6 15 10 9 14"></polygon>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "users":
      return (
        <DashIconWrapper
          {...props}
          width="20px"
          height="20px"
          viewBox="0 0 20 20"
          version="1.1"
        >
          <g
            id="Engage-/-Send-annoucement-Popups"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="1.0-Design-popup"
              transform="translate(-551.000000, -961.000000)"
            >
              <g
                id="Instructions"
                transform="translate(551.000000, 961.000000)"
              >
                <g id="Icon-users">
                  <rect
                    id="Rectangle"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  ></rect>
                  <g
                    id="multiple-19"
                    transform="translate(0.833333, 1.250000)"
                    stroke={props.fill ? props.fill : colorPicker.blue}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M13.0558333,11.6666667 L18.3333333,11.6666667 L18.3333333,8.38333333 C18.3333333,7.8125 18.0341667,7.28333333 17.5441667,6.99 L15.19,5.5775"
                      id="Path"
                    ></path>
                    <path
                      d="M10.2066667,1.8325 C10.6366667,0.756666667 11.6875,0 12.9166667,0 L12.9166667,0 C14.5275,0 15.8333333,1.30583333 15.8333333,2.91666667 L15.8333333,3.75 C15.8333333,5.36083333 14.5275,6.66666667 12.9166667,6.66666667 L12.9166667,6.66666667 C12.4608333,6.66666667 12.0508333,6.56666667 11.6666667,6.38"
                      id="Path"
                    ></path>
                    <path
                      d="M4.88166667,9.90833333 L1.0925,12.1783333 C0.415,12.5841667 0,13.3166667 0,14.1075 L0,17.5 L15,17.5 L15,14.1075 C15,13.3175 14.585,12.585 13.9075,12.1783333 L10.1183333,9.90833333"
                      id="Path"
                    ></path>
                    <path
                      d="M7.5,10.8333333 L7.5,10.8333333 C5.19916667,10.8333333 3.33333333,8.9675 3.33333333,6.66666667 L3.33333333,5 C3.33333333,2.69916667 5.19916667,0.833333333 7.5,0.833333333 L7.5,0.833333333 C9.80083333,0.833333333 11.6666667,2.69916667 11.6666667,5 L11.6666667,6.66666667 C11.6666667,8.9675 9.80083333,10.8333333 7.5,10.8333333 Z"
                      id="Path"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "app-settings":
      return (
        <DashIconWrapper
          {...props}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <g
            id="Settings"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="1.0-Store-settings"
              transform="translate(-29.000000, -293.000000)"
            >
              <g id="Menu" transform="translate(1.000000, 276.000000)">
                <g id="Menu-app-settings-(selected)">
                  <g
                    id="App-settings"
                    transform="translate(28.000000, 17.000000)"
                  >
                    <g id="Icon-app-settings">
                      <rect
                        id="Rectangle"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <g
                        id="p-settings"
                        transform="translate(1.000000, 1.000000)"
                        stroke={
                          props.active ? colorPicker.blue : colorPicker.gray50
                        }
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path
                          d="M9,22 L2,22 C0.8954305,22 0,21.1045695 0,20 L0,2 C0,0.8954305 0.8954305,0 2,0 L14,0 C15.1045695,0 16,0.8954305 16,2 L16,7"
                          id="Path"
                        ></path>
                        <circle id="Oval" cx="17" cy="17" r="3"></circle>
                        <path d="M17,14 L17,12" id="Path"></path>
                        <path
                          d="M19.121,14.879 L20.536,13.464"
                          id="Path"
                        ></path>
                        <path d="M20,17 L22,17" id="Path"></path>
                        <path
                          d="M19.121,19.121 L20.536,20.536"
                          id="Path"
                        ></path>
                        <path d="M17,20 L17,22" id="Path"></path>
                        <path
                          d="M14.879,19.121 L13.464,20.536"
                          id="Path"
                        ></path>
                        <path d="M14,17 L12,17" id="Path"></path>
                        <path
                          d="M14.879,14.879 L13.464,13.464"
                          id="Path"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "customizations":
      return (
        <DashIconWrapper
          {...props}
          width="24px"
          height="23px"
          viewBox="0 0 24 23"
          version="1.1"
        >
          <g
            id="Settings"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="1.0-Store-settings"
              transform="translate(-29.000000, -374.000000)"
            >
              <g id="Menu" transform="translate(1.000000, 276.000000)">
                <g
                  id="Customizations"
                  transform="translate(28.000000, 97.000000)"
                >
                  <g id="Icon-customizations">
                    <rect
                      id="Rectangle-Copy-4"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    ></rect>
                    <g
                      id="palette"
                      transform="translate(1.000000, 2.000000)"
                      stroke={
                        props.active ? colorPicker.blue : colorPicker.gray50
                      }
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path
                        d="M0,10 C0,6.3 1.8,3 4.7,1 C5.7,0.3 7.4,0.1 8,1 C9,2.2 7.2,4 8,5 C10,7.4 14.1,2.7 19,5 C22.5,6.8 22,11.3 21.6,13 C20.3,17.6 16,21 11,21 C4.9,21 0,16.1 0,10 Z"
                        id="Path"
                      ></path>
                      <circle id="Oval" cx="16" cy="10" r="2"></circle>
                      <circle id="Oval" cx="4" cy="10" r="1"></circle>
                      <circle id="Oval" cx="6.5" cy="15" r="1"></circle>
                      <circle id="Oval" cx="12" cy="17" r="1"></circle>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "account-settings":
      return (
        <DashIconWrapper
          {...props}
          width="22px"
          height="24px"
          viewBox="0 0 22 24"
          version="1.1"
        >
          <g
            id="Settings"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="1.0-Store-settings"
              transform="translate(-30.000000, -453.000000)"
            >
              <g id="Menu" transform="translate(1.000000, 276.000000)">
                <g
                  id="Account-settings"
                  transform="translate(28.000000, 177.000000)"
                >
                  <g id="Icon-account-billing">
                    <rect
                      id="Rectangle-Copy-5"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    ></rect>
                    <g
                      id="single-05"
                      transform="translate(2.000000, 1.000000)"
                      stroke={
                        props.active ? colorPicker.blue : colorPicker.gray50
                      }
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path
                        d="M6.677,13.997 L0.971,17.418 C0.369,17.779 0,18.43 0,19.132 L0,22 L20,22 L20,19.132 C20,18.429 19.631,17.778 19.029,17.417 L13.323,13.996"
                        id="Path"
                      ></path>
                      <path
                        d="M10,15 L10,15 C6.686,15 4,12.314 4,9 L4,6 C4,2.686 6.686,0 10,0 L10,0 C13.314,0 16,2.686 16,6 L16,9 C16,12.314 13.314,15 10,15 Z"
                        id="Path"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "listing":
      return (
        <DashIconWrapper
          {...props}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <g
            id="Settings"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="1.0-Store-settings"
              transform="translate(-29.000000, -533.000000)"
            >
              <g id="Menu" transform="translate(1.000000, 276.000000)">
                <g
                  id="App-store-listing"
                  transform="translate(28.000000, 257.000000)"
                >
                  <g id="Icon-app-listing">
                    <rect
                      id="Rectangle-Copy-6"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    ></rect>
                    <g
                      id="cheque-3"
                      transform="translate(1.000000, 1.000000)"
                      stroke={
                        props.active ? colorPicker.blue : colorPicker.gray50
                      }
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path
                        d="M0,19 L0,22 L12,22 L12,19.417 C12,18.036 13.119,17 14.5,17 L2,17 C0.895,17 0,17.895 0,19 Z"
                        id="Path"
                      ></path>
                      <path
                        d="M14.5,17 C15.794,17 17,17.924 17,19.5 C17,20.881 18.119,22 19.5,22 L19.5,22 C20.881,22 22,20.881 22,19.5 L22,0 L6,0 L6,17"
                        id="Path"
                      ></path>
                      <path d="M11,6 L17,6" id="Path"></path>
                      <path d="M11,11 L17,11" id="Path"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "upload-cloud":
      return (
        <DashIconWrapper
          {...props}
          width="24px"
          height="17px"
          viewBox="0 0 24 17"
          version="1.1"
        >
          <g
            id="Settings"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="1.1-Customizations"
              transform="translate(-590.000000, -490.000000)"
            >
              <g
                id="Popups-customizations"
                transform="translate(410.000000, 287.000000)"
              >
                <g id="Push" transform="translate(0.000000, 34.000000)">
                  <g id="Media" transform="translate(24.000000, 77.000000)">
                    <g id="Group" transform="translate(67.000000, 89.000000)">
                      <g
                        id="Icon-download-cloud"
                        transform="translate(89.000000, 0.000000)"
                      >
                        <rect
                          id="Rectangle"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                        <g
                          id="cloud-download-95"
                          transform="translate(1.000000, 3.000000)"
                          stroke={props.fill ? props.fill : colorPicker.blue}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M11,6.998 L11,14.998" id="Path"></path>
                          <polyline
                            id="Path"
                            transform="translate(11.000000, 7.498000) scale(1, -1) translate(-11.000000, -7.498000) "
                            points="14 5.998 11 8.998 8 5.998"
                          ></polyline>
                          <path
                            d="M16,16 L18,16 C20.209,16 22,14.207 22,11.998 C22,9.801 20.218,7.985 17.975,8.001 C17.718,4.092 14.474,0.998 10.5,0.998 C6.481,0.998 3.21,4.162 3.018,8.134 C1.287,8.573 0,10.129 0,11.998 C0,14.207 1.791,16 4,16 L6,16"
                            id="Path"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "google":
      return (
        <DashIconWrapper
          {...props}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <g
            id="Settings"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="1.0-Store-settings"
              transform="translate(-1050.000000, -1738.000000)"
            >
              <g
                id="Checkout-settings"
                transform="translate(408.000000, 1072.000000)"
              >
                <g
                  id="Payment-methods"
                  transform="translate(0.000000, 612.000000)"
                >
                  <g id="Payment-method-selector">
                    <g transform="translate(472.000000, 20.000000)">
                      <g
                        id="Icon-google"
                        transform="translate(170.000000, 34.000000)"
                      >
                        <rect
                          id="Rectangle"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                        <path
                          d="M23.5150634,9.8181494 L12.0600634,9.8181494 L12.0600634,14.7271494 L18.5520634,14.7271494 C17.5150634,18.0001494 14.9520634,19.0911494 12.0080634,19.0911494 C8.8734916,19.0949505 6.10832926,17.04023 5.20755788,14.03787 C4.30678651,11.03551 5.48415236,7.79794782 8.10311408,6.07556741 C10.7220758,4.35318701 14.1611735,4.55469625 16.5610634,6.5711494 L20.1280634,3.1711494 C16.1765806,-0.466163685 10.2894583,-1.03498549 5.71468961,1.77850953 C1.13992095,4.59200456 -1.00833863,10.1026078 0.455130455,15.270056 C1.91859954,20.4375042 6.63737883,24.0032986 12.0080634,24.0001515 C18.6250634,24.0001515 24.6080634,19.6361494 23.5150634,9.8181494 Z"
                          id="Path"
                          fill={props.fill ? props.fill : colorPicker.blue}
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "paypal":
      return (
        <DashIconWrapper
          {...props}
          width="22px"
          height="24px"
          viewBox="0 0 22 24"
          version="1.1"
        >
          <g
            id="Settings"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="1.0-Store-settings"
              transform="translate(-1293.000000, -1738.000000)"
            >
              <g
                id="Checkout-settings"
                transform="translate(408.000000, 1072.000000)"
              >
                <g
                  id="Payment-methods"
                  transform="translate(0.000000, 612.000000)"
                >
                  <g id="Payment-method-selector">
                    <g transform="translate(472.000000, 20.000000)">
                      <g
                        id="Icon-paypal"
                        transform="translate(409.000000, 34.000000)"
                      >
                        <rect
                          id="Rectangle"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                        <g
                          id="logo-paypal"
                          transform="translate(4.000000, 0.000000)"
                          fill="#393CB4"
                          fillRule="nonzero"
                        >
                          <path
                            d="M19.16475,6.06777 C19.16329,6.07766 19.16293,6.07993 19.16029,6.09759 C19.16029,6.09759 19.16244,6.08321 19.16475,6.06777 Z"
                            id="Path"
                          ></path>
                          <path
                            d="M19.16475,6.06777 C19.1716,6.02194 19.1688,6.04054 19.16475,6.06777 L19.16475,6.06777 Z"
                            id="Path"
                          ></path>
                          <path
                            d="M18.14857,1.80966 C17.03726,0.54304 15.0284,0 12.45856,0 L5.00006,0 C4.47429,0 4.02748,0.38238 3.94519,0.90086 L0.83961,20.59705 C0.7779,20.98538 1.07863,21.33725 1.47227,21.33725 L6.07685,21.33725 L7.2333,14.00221 L7.19744,14.23191 C7.27977,13.71343 7.72321,13.33105 8.24834,13.33105 L10.43645,13.33105 C14.73495,13.33105 18.10075,11.58508 19.08394,6.53438 C19.11311,6.38503 19.16028,6.09758 19.16028,6.09758 C19.43915,4.22865 19.15831,2.96016 18.14857,1.80966 Z"
                            id="Path"
                          ></path>
                          <path
                            d="M20.32578,7.05404 C19.25664,12.02654 15.84648,14.65853 10.4365,14.65853 L8.47408,14.65853 L7.0107,24 L10.19359,24 C10.65299,24 11.044,23.66543 11.11568,23.21198 L11.15352,23.01417 L11.88509,18.37774 L11.93225,18.1215 C12.00393,17.66805 12.39494,17.33349 12.85434,17.33349 L13.43522,17.33349 C17.19535,17.33349 20.13958,15.80592 20.99996,11.38793 C21.34476,9.61549 21.17952,8.12845 20.32578,7.05404 Z"
                            id="Path"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "phone-with-border":
      return (
        <DashIconWrapper
          {...props}
          width="35px"
          height="35px"
          viewBox="0 0 35 35"
          version="1.1"
        >
          <g
            id="App-Listing"
            stroke="none"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="4.0-Connect-accounts-(apple)"
              transform="translate(-209.000000, -924.000000)"
            >
              <g
                id="Apple-Dev-Instructions"
                transform="translate(210.000000, 548.000000)"
              >
                <g
                  id="Verification"
                  transform="translate(0.000000, 377.000000)"
                >
                  <g id="Phone">
                    <circle
                      id="Oval"
                      stroke={props.fill ? props.fill : colorPicker.blue}
                      fill="transparent"
                      cx="16.5"
                      cy="16.5"
                      r="16.5"
                      strokeWidth="2"
                    ></circle>
                    <g
                      id="Icon-mini-phone"
                      transform="translate(8.000000, 7.000000)"
                    >
                      <rect
                        id="Rectangle"
                        x="0"
                        y="0"
                        width="18"
                        height="18"
                      ></rect>
                      <g
                        id="phone-2"
                        stroke={props.fill ? props.fill : colorPicker.blue}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path
                          d="M13.7142857,11.1428571 L11.1428571,13.7142857 L4.28571429,6.85714286 L6.85714286,4.28571429 L2.57142857,0 L0,2.57142857 C0,11.0922857 6.90771429,18 15.4285714,18 L18,15.4285714 L13.7142857,11.1428571 Z"
                          id="Path"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "automation":
      return (
        <DashIconWrapper
          {...props}
          width="23px"
          height="23px"
          viewBox="0 0 23 23"
          version="1.1"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Header---Stats"
              transform="translate(-371.000000, -211.000000)"
            >
              <g id="Header">
                <g id="Navigation" transform="translate(55.000000, 210.000000)">
                  <g id="Tap-drops" transform="translate(315.000000, 0.000000)">
                    <g id="Icon-integrations">
                      <rect
                        id="Rectangle-Copy-9"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <polygon
                        id="Path"
                        stroke={props.fill ? props.fill : colorPicker.gray50}
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="13.6666667 2 2 14.8333333 12.5 14.8333333 11.3333333 23 23 10.1666667 12.5 10.1666667"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    case "integrations-header":
      return (
        <DashIconWrapper
          {...props}
          width="22px"
          height="22px"
          viewBox="0 0 22 22"
          version="1.1"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Header---Stats"
              transform="translate(-715.000000, -211.000000)"
            >
              <g id="Header">
                <g id="Navigation" transform="translate(55.000000, 210.000000)">
                  <g
                    id="Tab-integrations"
                    transform="translate(659.000000, 0.000000)"
                  >
                    <g id="Icon-integrations">
                      <rect
                        id="Rectangle"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <g
                        id="edit-brightness"
                        transform="translate(2.000000, 2.000000)"
                        stroke={props.fill ? props.fill : colorPicker.gray50}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M10,15 C12.7614237,15 15,12.7614237 15,10 C15,12.7614237 17.2385763,15 20,15"
                          id="Path"
                        ></path>
                        <path
                          d="M10,15 C12.7614237,15 15,17.2385763 15,20 C15,17.2385763 17.2385763,15 20,15"
                          id="Path"
                        ></path>
                        <path
                          d="M0,5 C2.76142375,5 5,2.76142375 5,8.8817842e-16 C5,2.76142375 7.23857625,5 10,5"
                          id="Path"
                        ></path>
                        <path
                          d="M0,5 C2.76142375,5 5,7.23857625 5,10 C5,7.23857625 7.23857625,5 10,5"
                          id="Path"
                        ></path>
                        <path d="M1,17 L5,17" id="Path"></path>
                        <path d="M3,15 L3,19" id="Path"></path>
                        <path d="M15,3 L19,3" id="Path"></path>
                        <path d="M17,1 L17,5" id="Path"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </DashIconWrapper>
      );
    default:
      return <span />;
  }
}

export { Icon };

const SVG = styled.svg`
  ${props =>
    props.circleIcon &&
    `background: ${colorPicker.dullBlue};
  border-radius: 50%;
  padding: 5px;
  overflow: visible;
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  transform: scale(1.5);
  margin: 0 auto;
  height: 25px;
  width: 25px;`}
  margin-left: ${props => (props.iconRight ? "10px" : "0px")};
  margin-right: ${props => (props.iconLeft ? "10px" : "0px")};
  ${props => (props.style ? props.style : null)};
`;

const DashIconWrapper = styled.svg`
  margin-left: ${props => (props.iconRight ? "10px" : "0px")};
  margin-right: ${props => (props.iconLeft ? "10px" : "0px")};
  ${props => props.fill && `color: ${props.fill};`}
  ${props => (props.style ? props.style : null)};
`;

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  /**
   * margin creating separation to the left of the icon
   */
  iconRight: PropTypes.bool,
  /**
   * margin creating separation to the right of the icon
   */
  iconLeft: PropTypes.bool,
  /**
   * icon color
   */
  fill: PropTypes.string,
  circleIcon: PropTypes.bool,
  backgroundColor: PropTypes.string
};

Icon.defaultProps = {
  iconRight: false,
  iconLeft: false,
  circleIcon: false,
  backgroundColor: colors.blue25
};
