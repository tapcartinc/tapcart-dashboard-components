import styled from "styled-components";
import React from "react";
import { Header } from "../marketing/Typography";
import { colors, sofia } from "../utils/_variables";

const Hero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.layout ? props.layout.direction : "row")};
  justify-content: ${props =>
    props.layout ? props.layout.justify : "flex-start"};
  text-align: ${props => (props.layout ? props.layout.text : "left")};
  min-height: 720px;
  align-items: center;
  background: ${props => (props.bgColor ? props.bgColor : props.theme.bg)};
`;

const QuoteContainer = props => {
  return (
    <QuoteContainerWrapper {...props}>
      <img
        className="bg-image"
        src="https://i.imgur.com/zkEi123.png"
        alt="blob"
      />
      <ImageWrapper>
        <img
          src="https://i.imgur.com/KUWgSbr.png"
          className="left"
          alt="oval"
        />

        <svg
          className="right"
          width="13px"
          height="472px"
          viewBox="0 0 13 472"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Pricing-Page"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="2.1-expanded"
              transform="translate(-512.000000, -4221.000000)"
              fill="#1BDFBA"
            >
              <g id="Quote" transform="translate(0.000000, 4174.000000)">
                <g id="Image" transform="translate(100.000000, 47.000000)">
                  <path
                    d="M141,264 L724,264 L724,300.696386 C551.385637,306.160644 435.392928,306.160644 376.021875,300.696386 C319.812707,295.523135 240.60271,300.696386 148.10271,294.89729 C144.979679,294.701498 142.612109,296.63453 141,300.696386 L141,264 Z"
                    id="Path-9"
                    transform="translate(432.500000, 284.397290) rotate(90.000000) translate(-432.500000, -284.397290) "
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <img alt="person" className="person" src={props.image} />
      </ImageWrapper>
      <Context>
        <QuoteText>"{props.children}"</QuoteText>

        <div className="contributer">
          <div className="contributer__person">{props.person}, </div>
          <div className="contributer__position"> {props.position}</div>
        </div>
        <img src={props.logo} alt="quote" />
      </Context>
    </QuoteContainerWrapper>
  );
};

export { Hero, QuoteContainer };

const QuoteContainerWrapper = styled.div`
  background: ${colors.blue};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 40px;
  position: relative;

  .bg-image {
    position: absolute;
    width: 20%;
    top: 0;
    right: 0;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 425px;
  height: 475px;
  position: relative;
  border-radius: 6px;

  .person {
    object-fit: cover;
    height: 100%;
    z-index: 1;
  }

  .left {
    position: absolute;
    top: -5px;
    left: -5px;
    width: 30%;
    z-index: 5;
  }
  .right {
    position: absolute;
    top: 0px;
    right: -5px;
    width: 10%;
    z-index: 5;
    bottom: 0px;
    height: 100%;
  }
`;

const QuoteText = styled(Header)`
  letter-spacing: 0.3px;
  color: white;
  margin-bottom: 30px;
  text-indent: -0.5em;
  span {
    color: #1bdfba;
  }
`;

const Context = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  width: 40%;
  margin-left: 60px;
  z-index: 1;

  img {
    margin-top: 20px;
    height: 25px;
  }

  .contributer {
    color: white;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    flex-direction: row;

    &__person {
      ${sofia.sofiaSemiBold}
      margin-right: 5px;
    }
    &__position {
      ${sofia.sofiaLight}
    }
  }
`;
