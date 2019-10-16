import styled from 'styled-components';
import React from 'react';
import { Header } from '../marketing/Typography';
import { colors, sofia } from '../utils/_variables';
import media from '../utils/_media';

const Hero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.layout ? props.layout.direction : 'row')};
  justify-content: ${props => {
    return props.layout ? props.layout.justify : 'flex-start';
  }};
  justify-items: ${props => {
    return props.layout ? props.layout.justify : 'flex-start';
  }};
  text-align: ${props => (props.layout ? props.layout.textAlign : 'left')};
  min-height: 900px;
  align-items: center;
  background: ${props =>
    props.bgColor ? props.bgColor : props.theme ? props.theme.bg : 'white'};
  margin: 0px;
  position: relative;
`;

const QuoteContainer = props => {
  const sortText = (quote, highlighted) => {
    if (!highlightedText) {
      return <span style={{ color: 'white' }}>{quote}</span>;
    }
    const fullSentence = [];
    // find highlighted text
    const highlightedText = quote.substr(
      quote.indexOf(highlighted),
      highlighted.length
    );
    // find the start and end indexes of that highlighted text
    const startIdx = quote.indexOf(highlightedText);
    const endIdx = startIdx + highlighted.length;

    // find the part of the quote before and after the highlighted text
    const beforeHighlight = quote.slice(0, startIdx);
    const afterHighlight = quote.slice(endIdx);

    // push each segment into full sentence array
    fullSentence.push(beforeHighlight);
    fullSentence.push(highlightedText);
    fullSentence.push(afterHighlight);

    // map through fullSentence array and return content with appropriate color styles
    return fullSentence.map((textSegment, idx) => {
      return (
        <span
          key={textSegment}
          style={{ color: idx === 1 ? colors.green : 'white' }}
        >
          {textSegment}
        </span>
      );
    });
  };
  return (
    <QuoteContainerWrapper {...props}>
      <img
        className="bg-image"
        src="https://i.imgur.com/zkEi123.png"
        alt="blob"
      />

      <StyledQuoteContainer>
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
          <QuoteText>“{sortText(props.children, props.highlighted)}”</QuoteText>

          <div className="contributer">
            <div className="contributer__person">{props.person}, </div>
            <div className="contributer__position"> {props.position}</div>
          </div>
          <img src={props.logo} alt="quote" />
        </Context>
      </StyledQuoteContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="green-path"
        viewBox="0 0 1440 13.8"
      >
        <title>Path 9</title>
        <path
          d="M1440,150.8c-22.5-.8-103.1-1.6-142.1-2.3-43.9-.9-201.2-2.6-238.5-2.2s-142.9,1.3-200.3,4.8-88.6,2.1-129,3.4-190.2.9-246.3,1.3-170.3-1.3-213.7-1.7-112.9-.4-142-.9c-25.9-.3-109.8-1.8-128.1-2.1V160H1440Z"
          transform="translate(0 -146.2)"
          fill="#1bdfba"
        />
      </svg>
    </QuoteContainerWrapper>
  );
};

export { Hero, QuoteContainer };

const QuoteContainerWrapper = styled.div`
  background: ${colors.blue};
  width: 100%;
  display: flex;
  justify-content: center;

  .bg-image {
    position: absolute;
    width: 20%;
    top: 0;
    right: 0;
  }
`;

const StyledQuoteContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  position: relative;
  max-width: 1140px;

  ${media.xs`
  padding: 40px 0px;
  max-width: 100%;
  `}
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

  ${media.lg`
  width: 325px;
  height: 375px;
  `}
  ${media.md`
    margin: 0 auto;
  `}

  ${media.xs`
  width: 300px;
  height: 350px;
  `}
`;

const QuoteText = styled(Header)`
  letter-spacing: 0.3px;
  margin-bottom: 30px;
  text-indent: -0.5em;
  font-family: CircularStd;
  font-style: none;
  font-weight: bold;
  color: white;
`;

const Context = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  margin-left: 60px;
  z-index: 1;
  align-items: flex-start;

  img {
    margin-top: 15px;
    object-fit: contain;
    height: 25px;
    max-width: 215px;
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

  ${media.md`
    width: 80%;
    margin: 0 auto;
  `};
`;
