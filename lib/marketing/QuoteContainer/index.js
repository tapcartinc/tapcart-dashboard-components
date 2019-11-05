import styled from 'styled-components';
import React from 'react';
import PropTypes, { node } from 'prop-types';
import { Header } from '../Typography';
import { colors } from '../../utils/_variables';
import media from '../../utils/_media';
import { Body } from '../../elements/Typography';
import { ThemeProvider } from '../../utils/ThemeProvider';
import { sizes } from '../../utils/_sizes';

const QuoteContainer = props => {
  const sortText = (quote, highlighted) => {
    if (!highlighted) {
      return <span style={{ color: 'white' }}>{quote}</span>;
    }
    const fullSentence = [];
    // find highlighted text
    const highlightedText = quote.substr(
      quote.toLowerCase().indexOf(highlighted.toLowerCase()),
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
    <ThemeProvider>
      <QuoteContainerWrapper {...props}>
        <StyledBlob
          width="255px"
          // height="168px"
          // viewBox="0 0 255 168"
          viewBox="0 0 238 140.3"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>top-right</title>
          <g>
            <path
              d="M180,140.3h2.6c18.7-.3,37.5-5.1,55.4-13v-87a243.5,243.5,0,0,1-27.2,60.3A250.5,250.5,0,0,1,180,140.3Z"
              style={{ fill: '#02018c', opacity: '.3' }}
            />
            <path
              d="M210.8,100.6A243.5,243.5,0,0,0,238,40.3V34.8a243.7,243.7,0,0,1-28.5,65,245.8,245.8,0,0,1-31.6,40.5H180A250.5,250.5,0,0,0,210.8,100.6Z"
              fill="#1bdfba"
            />
          </g>
          <g>
            <path
              d="M221.4,0H0C9.9,14.9,20.4,29.5,31.4,43.2a161.8,161.8,0,0,0,65.8,14A162.9,162.9,0,0,0,221.4,0Z"
              style={{ fill: '#02018c', opacity: '.3' }}
            />
            <path
              d="M223.4,0A164.6,164.6,0,0,1,97.2,58.7a162.2,162.2,0,0,1-63.8-13l3.8,4.7c37.2,45,79.3,80.2,123.2,88.1a114.1,114.1,0,0,0,17.5,1.8,245.8,245.8,0,0,0,31.6-40.5,243.7,243.7,0,0,0,28.5-65V0Z"
              style={{ fill: '#02018c', opacity: '.3' }}
            />
            <path
              d="M33.4,45.7c1.2,1.6,2.5,3.2,3.8,4.7l-3.8-4.7Z"
              fill="#02018c"
            />
            <path
              d="M97.2,58.7A164.6,164.6,0,0,0,223.4,0h-2A162.9,162.9,0,0,1,97.2,57.2a161.8,161.8,0,0,1-65.8-14l2,2.5A162.2,162.2,0,0,0,97.2,58.7Z"
              fill="#1bdfba"
            />
          </g>
        </StyledBlob>

        <StyledQuoteContainer>
          <ImageWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="280"
              width="159"
              style={{ position: 'absolute' }}
            >
              <defs>
                <clipPath id="a" transform="translate(20 0.7)">
                  <rect
                    x="-20"
                    y="-0.7"
                    width="125"
                    height="192.74"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <title>bottom-left</title>
              <g style={{ clipPath: 'url(#a)' }}>
                <g>
                  <path
                    d="M43.3,108Q109.7,62.4,104.6-.7H-20V190.8Q-3.4,140.1,43.3,108Z"
                    transform="translate(20 0.7)"
                    fill="#16289b"
                  />
                  <path
                    d="M27,48.9A137,137,0,0,0-20,71.7v1.8A138.8,138.8,0,0,1,27.4,50.3,147,147,0,0,1,47,46.6l-1.1-1.4A157.6,157.6,0,0,0,27,48.9Z"
                    transform="translate(20 0.7)"
                    fill="#fff"
                    style={{ opacity: '0.36' }}
                  />
                  <path
                    d="M45.9,45.2,47,46.6a142.2,142.2,0,0,1,49.1,3l.6-1.4A142.2,142.2,0,0,0,45.9,45.2Z"
                    transform="translate(20 0.7)"
                    fill="#ffffff"
                    style={{ opacity: '0.36' }}
                  />
                  <path
                    d="M47,46.6l-1.1-1.4A222.2,222.2,0,0,0-1.2-.7H-3.8a217.8,217.8,0,0,1,48,46.1l1.1,1.4A243,243,0,0,1,69.7,86.4a5.7,5.7,0,0,0,1.1-1.1A245.9,245.9,0,0,0,47,46.6Z"
                    transform="translate(20 0.7)"
                    fill="#ffffff"
                    style={{ opacity: '0.36' }}
                  />
                </g>
              </g>
            </svg>

            <svg
              className="right"
              width="13px"
              height="472px"
              viewBox="0 0 13 472"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Landing-Page"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="1.0-Landing-Page"
                  transform="translate(-512.000000, -2274.000000)"
                  fill="#1BDFBA"
                >
                  <g id="Quote" transform="translate(0.000000, 2227.000000)">
                    <g id="Image" transform="translate(100.000000, 47.000000)">
                      <path
                        d="M192.5,219.60271 L672.5,219.60271 L672.5,256.299097 C563.817163,261.763354 479.790218,261.763354 420.419165,256.299097 C364.209997,251.125845 285,256.299097 192.5,250.5 L192.5,219.60271 Z"
                        id="Path-9"
                        transform="translate(432.500000, 240.000000) rotate(90.000000) translate(-432.500000, -240.000000) "
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <img alt="person" className="person" src={props.image} />
          </ImageWrapper>
          <Context>
            <QuoteText>
              <span style={{ color: colors.green }}>“</span>
              {sortText(props.children, props.highlighted)}
              <span style={{ color: colors.green }}>”</span>
            </QuoteText>

            <StyledPerson>
              <Body color="white">
                {props.person}
                <span className="mobile-hide">,</span>&nbsp;
              </Body>
              <Body color="white">{props.position} </Body>
            </StyledPerson>
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
    </ThemeProvider>
  );
};

export { QuoteContainer };

const StyledBlob = styled.svg`
  position: absolute;
  max-width: 100%;
  max-height: 80%;
  top: 0;
  right: 0;
`;

const QuoteContainerWrapper = styled.div`
  background: ${colors.blue};
  width: 100%;
  display: flex;
  justify-content: center;
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
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 5em;
  padding-right: 5em;
  max-width: ${sizes.xl}px;


  ${media.lg`
  padding-left: 2.5em;
  padding-right: 2.5em;
  `}

  ${media.md`
  padding-left: 3em;
  padding-right: 3em;
  `}

  ${media.sm`
  padding-left: 25px;
  padding-right: 25px;
  `}
  ${media.xs`
  max-width: 100%;
  padding-left: 1em;
  padding-right: 1em;
  `}

`;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 400px;
  height: 450px;
  position: relative;
  border-radius: 6px;

  .person {
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: 1;
  }


  .right {
    position: absolute;
    top: 0px;
    right: 0px;
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
  width: 90%;
  height: 430px;
  `}
`;

const QuoteText = styled(Header)`
  letter-spacing: 0.3px;
  margin-bottom: 30px;
  text-indent: -0.5em;
  font-style: none;
  color: white;
`;

const Context = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 55%;
  z-index: 1;
  align-items: flex-start;

  img {
    margin-top: 15px;
  }

  ${media.md`
    width: 80%;
    margin: 0 auto;
  `};
  ${media.xs`
    width: 90%;
  `};
`;

const StyledPerson = styled.div`
  color: white;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;

  p:nth-of-type(1) {
    font-weight: 700;
  }

  ${media.md`

flex-direction: column;
align-items: flex-start;

.mobile-hide {
  display: none;
}
`}
`;

QuoteContainer.propTypes = {
  /**
  The person being quoted in the current QuoteContainer
  */
  person: PropTypes.string.isRequired,
  /**
  The person being quoted's position/role in the current QuoteContainer
  */
  position: PropTypes.string.isRequired,
  /**
  The person being quoted's brand logo in the current QuoteContainer
  */
  logo: PropTypes.string.isRequired,
  /**
   Featured image in the left column of the component
  */
  image: PropTypes.string.isRequired,
  /**
   The portion of the quote that is to be highlighted
  */
  highlighted: PropTypes.string.isRequired,
  /**
   The child rendered inside of the QuoteContainer component is the quote
  */
  children: node.isRequired
};

QuoteContainer.defaultProps = {
  person: '',
  position: '',
  logo: '',
  image: '',
  highlighted: ''
};

// person="Person Sited"
// position="Person's Position"
// logo="https://www.zatista.com/sitemap/email-images/logo-placeholder.jpg"
// image="https://www.loxtonia.co.za/wp-content/uploads/2018/08/placeholder-person-man.png"
// highlighted="hightlighted text"
