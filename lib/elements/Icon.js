import React from "react";
import styled from "styled-components";
import { getColors } from "../utils/_functions";
import { colors } from "../utils/_variables";

function Icon(props) {
  const { type, fill } = props;
  switch (type) {
    case "trash":
      return (
        <SVG
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
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
            <g transform="translate(-612.000000, -1079.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-trash" transform="translate(531.000000, 60.000000)">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="trash-simple"
                    transform="translate(1.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path
                      d="M19,8 L19,20 C19,21.1045695 18.1045695,22 17,22 L5,22 C3.8954305,22 3,21.1045695 3,20 L3,8"
                      id="Path"
                    />
                    <path d="M0,4 L22,4" id="Path" />
                    <path d="M11,11 L11,17" id="Path" />
                    <path d="M7,11 L7,17" id="Path" />
                    <path d="M15,11 L15,17" id="Path" />
                    <polyline id="Path" points="7 4 7 0 15 0 15 4" />
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
              stroke="#373aaf"
              strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
              style={{ fill: props.fill ? getColors(fill) : colors.blue }}
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
                    fill={props.fill ? getColors(fill) : colors.blue}
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
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                    />
                    <path
                      d="M22,19 C22,17.137 20.969,13.5 18,12 L18,7 C18,3.134 14.866,0 11,0 C7.134,0 4,3.134 4,7 L4,12 C1,13.531 0,17.137 0,19"
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <ellipse
                      id="Oval"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.1,3.45 C12.75,2.616 13.243,1.439 13.064,0.236 C12.002,0.309 10.762,0.984 10.037,1.864 C9.379,2.663 8.836,3.847 9.047,4.999 C10.205,5.035 11.404,4.343 12.1,3.45 L12.1,3.45 Z"
                      id="Path"
                      fill={props.fill ? getColors(fill) : colors.blue}
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23,9 L23,16"
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7,3 L4,0"
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17,3 L20,0"
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8,19 L8,22"
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16,19 L16,22"
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12,1 C8.134,1 5,4.134 5,8 L5,19 L19,19 L19,8 C19,4.134 15.866,1 12,1 Z"
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                      cx="9"
                      cy="6"
                      r="1"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                      cx="15"
                      cy="6"
                      r="1"
                    />
                    <path
                      d="M5,9 L19,9"
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    style={{
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      x="0"
                      y="0"
                      width="22"
                      height="14"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                      cx="11"
                      cy="20"
                      r="2"
                    />
                    <circle
                      id="Oval"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      cx="3"
                      cy="20"
                      r="2"
                    />
                    <circle
                      id="Oval"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
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
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                      cx="5"
                      cy="20"
                      r="1"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                      cx="19"
                      cy="20"
                      r="1"
                    />
                    <circle
                      id="Oval"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      cx="5"
                      cy="20"
                      r="1"
                    />
                    <circle
                      id="Oval"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      cx="19"
                      cy="20"
                      r="1"
                    />
                    <polyline
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
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
                      stroke: props.fill ? getColors(fill) : colors.blue
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
    case "design":
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
            <g transform="translate(-81.000000, -1079.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-design" transform="translate(0.000000, 60.000000)">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="path-exclude"
                    transform="translate(1.000000, 1.000000)"
                    style={{
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <polygon
                      id="Path"
                      points="22 0 7 0 7 7 0 7 0 22 15 22 15 15 22 15"
                    />
                    <polyline id="Path" points="15 9 15 7 13 7" />
                    <polyline id="Path" points="7 13 7 15 9 15" />
                    <polyline id="Path" points="7 9 7 7 9 7" />
                    <polyline id="Path" points="13 15 15 15 15 13" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    case "drops":
      return (
        <SVG
          width="21px"
          height="26px"
          viewBox="0 0 21 26"
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
            <g transform="translate(-1085.000000, -1019.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-drops" transform="translate(1003.000000, 1.000000)">
                  <rect
                    id="Rectangle-Copy-7"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  />
                  <g
                    transform="translate(2.000000, 0.000000)"
                    style={{
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeWidth="2"
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
                      />
                      <path
                        d="M8.97766749,6.49131514 L8.97766749,15.7220844"
                        id="Path"
                      />
                      <polygon
                        id="Path"
                        points="17.7468983 12.5836228 8.97766749 15.7220844 0.208436725 12.5836228 0.208436725 3.16823821 8.97766749 0.0297766749 17.7468983 3.16823821"
                      />
                    </g>
                    <circle
                      id="Oval-Copy"
                      cx="9.63275434"
                      cy="1.7866005"
                      r="1.7866005"
                    />
                    <circle
                      id="Oval-Copy-2"
                      cx="16.9131514"
                      cy="3.93052109"
                      r="1.7866005"
                    />
                    <path
                      d="M13.507783,5.44913151 L15.5028202,8.96277916"
                      id="Line-Copy-2"
                      transform="translate(14.843672, 7.295285) scale(-1, 1) translate(-14.843672, -7.295285) "
                    />
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
                      />
                      <path
                        d="M0.0487259118,3.30521092 L2.04376313,6.81885856"
                        id="Line-Copy-2"
                        transform="translate(1.384615, 5.151365) scale(-1, 1) translate(-1.384615, -5.151365) "
                      />
                    </g>
                    <path
                      d="M9.78461538,4.28784119 L9.78461538,7.38461538"
                      id="Line-Copy"
                      strokeLinecap="round"
                    />
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
              style={{ stroke: props.fill ? getColors(fill) : colors.blue }}
              strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    fill={props.fill ? getColors(fill) : colors.blue}
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
          width="25px"
          height="25px"
          viewBox="0 0 25 25"
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
            <g transform="translate(-200.000000, -1139.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-edit-content"
                  transform="translate(120.000000, 121.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="pen"
                    style={{
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M13.8,4.6 L18.4,9.2" id="Path" />
                    <polygon
                      id="Path"
                      points="5.75 21.85 0 23 1.15 17.25 18.4 0 23 4.6"
                    />
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
            <g transform="translate(-436.000000, -1080.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g
                  id="Icon-edit-content"
                  transform="translate(354.000000, 60.000000)"
                >
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="rotate-22"
                    transform="translate(2.000000, 2.000000)"
                    style={{
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path
                      d="M12,4 L6,4 C4.34315,4 3,5.34315 3,7 L3,10"
                      id="Path"
                    />
                    <polyline id="Path" points="8 8 12 4 8 0" />
                    <path
                      d="M16.5,7 L16.5,7 C18.425,7 20,8.575 20,10.5 L20,10.5 C20,12.425 18.425,14 16.5,14 L16.5,14 C14.575,14 13,12.425 13,10.5 L13,10.5 C13,8.575 14.575,7 16.5,7 Z"
                      id="Path"
                    />
                    <path
                      d="M3.5,14 L3.5,14 C5.425,14 7,15.575 7,17.5 L7,17.5 C7,19.425 5.425,21 3.5,21 L3.5,21 C1.575,21 0,19.425 0,17.5 L0,17.5 C0,15.575 1.575,14 3.5,14 Z"
                      id="Path"
                    />
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                      cx="8"
                      cy="18"
                      r="1"
                    />
                    <rect
                      id="Rectangle"
                      fill={props.fill ? getColors(fill) : colors.blue}
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
    case "popup":
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.309,0.119 L3,5 C1.69762761,5.38755178 0.856827643,6.64875173 1,8 C0.856827643,9.35124827 1.69762761,10.6124482 3,11 L18.309,15.881"
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <ellipse
                      id="Oval"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
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
                      fill={props.fill ? getColors(fill) : colors.blue}
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
    case "video":
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
            <g transform="translate(-435.000000, -1020.000000)" id="Icons">
              <g transform="translate(81.000000, 1019.000000)">
                <g id="Icon-video" transform="translate(354.000000, 0.000000)">
                  <rect id="Rectangle" x="0" y="0" width="24" height="24" />
                  <g
                    id="video-player"
                    transform="translate(1.000000, 2.000000)"
                    style={{
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path
                      d="M20,0 C21.1045695,0 22,0.8954305 22,2 L22,18 C22,19.1045695 21.1045695,20 20,20 L2,20 C0.8954305,20 0,19.1045695 0,18 L0,2 C0,0.8954305 0.8954305,0 2,0 L20,0 Z"
                      id="Path"
                    />
                    <polygon id="Path" points="9 6 15 10 9 14" />
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                      cx="8"
                      cy="18"
                      r="1"
                    />
                    <rect
                      id="Rectangle"
                      fill={props.fill ? getColors(fill) : colors.blue}
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polygon
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="5 19 14 11 18 19"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? getColors(fill) : colors.blue}
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                stroke: props.fill ? getColors(fill) : colors.blue
              }}
              strokeWidth="2"
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? getColors(fill) : colors.blue}
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                    fill={props.fill ? getColors(fill) : colors.blue}
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="5 14 14 6 18 14"
                    />
                    <circle
                      id="Oval"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      fill="#FFFFFF"
                      cx="21.5"
                      cy="16.5"
                      r="5.5"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                      cx="6"
                      cy="5"
                      r="2"
                    />
                    <path
                      d="M19,16.5 L24,16.5"
                      id="Line-2"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.603,3.387 C9.682,2.129 6.164,2.693 3.779,5.079 C3.29,5.568 2.886,6.109 2.55,6.679 L5.978,10.107"
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.597,10.345 C20.887,13.277 20.322,16.82 17.921,19.221 C17.432,19.71 16.891,20.114 16.321,20.45 L12.879,17.008"
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.143,18.514 L4.486,12.857 C4.486,12.857 9.318,0.836 22.871,0.129 C22.104,13.623 10.143,18.514 10.143,18.514 Z"
                      id="Path"
                      style={{
                        stroke: props.fill ? getColors(fill) : colors.blue
                      }}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      id="Oval"
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                      transform="translate(13.999800, 9.000000) rotate(-45.000000) translate(-13.999800, -9.000000) "
                      cx="13.9998"
                      cy="9"
                      r="1.99998082"
                    />
                    <path
                      d="M1.113,17.844 C2.224,16.733 4.024,16.733 5.135,17.844 C6.246,18.955 6.246,20.755 5.135,21.866 C4.024,22.977 0,23 0,23 C0,23 0.002,18.954 1.113,17.844 Z"
                      id="Path"
                      fill={props.fill ? getColors(fill) : colors.blue}
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      stroke: props.fill ? getColors(fill) : colors.blue
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
              fill="#1BDFBA"
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
              fill={props.fill ? getColors(fill) : colors.blue}
              // style={{ fill: props.fill ? getColors(fill) : colors.blue }}
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
              fill={props.fill ? getColors(fill) : colors.blue}
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
                    fill={props.fill ? getColors(fill) : colors.blue}
                    fillRule="nonzero"
                    cx="19"
                    cy="5.5"
                    r="5"
                  ></circle>
                  <path
                    d="M9.91782847,5.5 L7,5.5 C3.6862915,5.5 1,8.1862915 1,11.5 L1,16.5 C1,19.8137085 3.6862915,22.5 7,22.5 L13,22.5 C16.3137085,22.5 19,19.8137085 19,16.5 L19,14.1359286"
                    id="Path-3"
                    stroke={props.fill ? getColors(fill) : colors.blue}
                    strokeWidth="2"
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
                      stroke={props.fill ? getColors(fill) : colors.blue}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M23,9 L23,16"
                      id="Path"
                      stroke={props.fill ? getColors(fill) : colors.blue}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7,3 L4,0"
                      id="Path"
                      stroke={props.fill ? getColors(fill) : colors.blue}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M17,3 L20,0"
                      id="Path"
                      stroke={props.fill ? getColors(fill) : colors.blue}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8,19 L8,22"
                      id="Path"
                      stroke={props.fill ? getColors(fill) : colors.blue}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16,19 L16,22"
                      id="Path"
                      stroke={props.fill ? getColors(fill) : colors.blue}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12,1 C8.134,1 5,4.134 5,8 L5,19 L19,19 L19,8 C19,4.134 15.866,1 12,1 Z"
                      id="Path"
                      stroke={props.fill ? getColors(fill) : colors.blue}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <circle
                      id="Oval"
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                      cx="9"
                      cy="6"
                      r="1"
                    ></circle>
                    <circle
                      id="Oval"
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                      cx="15"
                      cy="6"
                      r="1"
                    ></circle>
                    <path
                      d="M5,9 L19,9"
                      id="Path"
                      stroke={props.fill ? getColors(fill) : colors.blue}
                      strokeWidth="2"
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
                      stroke={props.fill ? getColors(fill) : colors.blue}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12.1,3.45 C12.75,2.616 13.243,1.439 13.064,0.236 C12.002,0.309 10.762,0.984 10.037,1.864 C9.379,2.663 8.836,3.847 9.047,4.999 C10.205,5.035 11.404,4.343 12.1,3.45 L12.1,3.45 Z"
                      id="Path"
                      fill={props.fill ? getColors(fill) : colors.blue}
                      fillRule="nonzero"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </SVG>
      );
    default:
      return null;
  }
}

export { Icon };

const SVG = styled.svg`
  ${props =>
    props.circleIcon &&
    `background: ${
      props.backgroundColor ? getColors(props.backgroundColor) : colors.blue25
    }
    border-radius: 50%;
    padding: 5px;
    overflow: visible;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
    margin: 0 auto;
    margin-left: auto;
    height: 25px;
    width: 25px;`}
  // margin: 0 auto;
    margin-left: ${props => props.buttonIcon && "10px"};
    ${props => (props.style ? props.style : null)};
`;
// ${props => {
//   return (
//     props.circleIcon &&
//     `background: ${props =>
//       props.backgroundColor
//         ? getColors(props.backgroundColor)
//         : colors.blue25};
//     border-radius: 50%;
//     padding: 5px;
//     overflow: visible;
//     -webkit-transform: scale(1.5);
//     -ms-transform: scale(1.5);
//     transform: scale(1.5);
//     margin: 0 auto;
//     margin-left: auto;
//     height: 25px;
//     width: 25px;`
//   );
// }};
