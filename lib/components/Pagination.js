import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "../elements/Icon";
import { Body } from "../elements/Typography";
import { colors } from "../utils/_variables";
import styled from "styled-components";

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */

const range = (from, to, currentPage, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  const currentIndex = range.indexOf(currentPage);

  const visibleRange = (range, currIdx) => {
    let arr = [];
    if (range[currIdx] <= 4) {
      return range.slice(0, 5);
    }

    if (range[currIdx] >= range.length - 3) {
      arr = range.slice(Math.max(range.length - 5, 1));
      return arr;
    }
    arr = range.slice(currIdx - 2, currIdx + 3);
    return arr;
  };

  return visibleRange(range, currentIndex, to);
};

const getPages = (
  currentPage,
  pages,
  onPageClick,
  totalRecords,
  perPage,
  { ...props }
) => {
  const elements = [];
  const pagRange = Math.ceil(totalRecords / perPage);

  if (currentPage === 1) {
    elements.push(
      <DisabledPage key={"prev"} {...props} pagNav>
        <Icon iconLeft type="arrow-left" />
        {/* PREV */}
      </DisabledPage>
    );
  } else {
    elements.push(
      <Page
        pagNav
        key={"prev"}
        onClick={() => {
          if (currentPage !== 1) {
            onPageClick(currentPage - 1);
          }
          cd;
        }}
      >
        <Icon iconLeft type="arrow-left" fill={colors.grayText} />
        {/* PREV */}
      </Page>
    );
  }

  if (currentPage > 4) {
    elements.push(
      <>
        <Page onClick={() => onPageClick(1)}>1</Page>
        <Body color={colors.grayText}>...</Body>
      </>
    );
  }

  pages.length &&
    pages.forEach(page => {
      if (currentPage === page) {
        elements.push(<ActivePage key={page}>{page}</ActivePage>);
      } else {
        elements.push(
          <Page key={page} onClick={() => onPageClick(page)}>
            {page}
          </Page>
        );
      }
    });

  if (currentPage < pagRange - 3) {
    elements.push(
      <>
        <Body color={colors.grayText}>...</Body>
        <Page onClick={() => onPageClick(pagRange)}>{pagRange}</Page>
      </>
    );
  }
  if (currentPage === pagRange) {
    elements.push(
      <DisabledPage {...props} key={"next"} pagNav>
        {/* NEXT */}
        <Icon iconRight type="arrow-right" />
      </DisabledPage>
    );
  } else {
    elements.push(
      <Page
        pagNav
        key={"next"}
        onClick={() => {
          if (currentPage !== pagRange) {
            onPageClick(currentPage + 1);
          }
        }}
      >
        {/* NEXT */}
        <Icon iconRight type="arrow-right" fill={colors.grayText} />
      </Page>
    );
  }

  return elements;
};

const Pagination = props => {
  const { totalRecords, perPage } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const onPageClick = page => {
    setCurrentPage(page);
    props.onPageChanged(page);
  };

  let pages = range(
    1,
    Math.ceil(props.totalRecords / props.perPage),
    currentPage
  );

  const elements = getPages(
    currentPage,
    pages,
    onPageClick,
    totalRecords,
    perPage
  );

  return <PaginationContainer>{elements}</PaginationContainer>;
};

const PaginationContainer = styled.ul`
  display: flex;
  flex-direction: row;
  user-select: none;
  align-items: center;
  justify-content: center;
`;

const Page = styled(Body)`
  ${props =>
    props.disabled && `visibility: hidden; transition: 400ms all ease-in`};
  ${props =>
    !props.disabled && `visibility: visible; transition: 400ms all ease-in`};
  ${props => props.pagNav && `width: 30px; text-align: center`};

  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  list-style-type: none;
  letter-spacing: 1px;
  color: ${colors.grayText};
  &:hover {
    cursor: pointer;
  }
  transition: 400ms all ease-in;
`;

const DisabledPage = props => {
  return (
    <Page disabled pagNav={props.pagNav}>
      {props.children}
      {props.children[1]}
    </Page>
  );
};

const ActivePage = styled(Page)`
  color: ${colors.blue};
  cursor: auto;
`;

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  perPage: PropTypes.number,
  onPageChanged: PropTypes.func
};

export { Pagination };

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { Icon } from "../elements/Icon";
// import { Body } from "../elements/Typography";
// import { colors } from "../utils/_variables";
// import styled from "styled-components";

// /**
//  * Helper method for creating a range of numbers
//  * range(1, 5) => [1, 2, 3, 4, 5]
//  */

// const range = (from, to, currentPage, step = 1) => {
//   let i = from;
//   const range = [];

//   while (i <= to) {
//     range.push(i);
//     i += step;
//   }

//   const currentIndex = range.indexOf(currentPage);

//   const visibleRange = (range, currIdx) => {
//     let arr = [];
//     if (range[currIdx] <= 4) {
//       return range.slice(0, 7);
//     }

//     if (range[currIdx] >= range.length - 3) {
//       arr = range.slice(Math.max(range.length - 7, 1));
//       return arr;
//     }
//     arr = range.slice(currIdx - 3, currIdx + 4);
//     return arr;
//   };

//   return visibleRange(range, currentIndex, to);
// };

// const getPages = (
//   currentPage,
//   pages,
//   onPageClick,
//   totalRecords,
//   perPage,
//   leftDots,
//   rightDots,
//   { ...props }
// ) => {
//   const elements = [];
//   const pagRange = Math.ceil(totalRecords / perPage);

//   const Dropdown = ({ pages, side }) => {
//     return (
//       <StyledPagDropdown>
//         <StyledPagDropdownList>
//           {pages.length > 0 &&
//             pages.reverse().map(page => {
//               return (
//                 <StyledPagListItem onClick={() => onPageClick(page)}>
//                   {page}
//                 </StyledPagListItem>
//               );
//             })}
//         </StyledPagDropdownList>
//       </StyledPagDropdown>
//     );
//   };

//   if (currentPage === 1) {
//     elements.push(
//       <DisabledPage key={"prev"} {...props} pagNav>
//         <Icon iconLeft type="arrow-left" />
//         PREV
//       </DisabledPage>
//     );
//   } else {
//     elements.push(
//       <Page
//         pagNav
//         key={"prev"}
//         onClick={() => {
//           if (currentPage !== 1) {
//             onPageClick(currentPage - 1);
//           }
//         }}
//       >
//         <Icon iconLeft type="arrow-left" fill={colors.grayText} />
//         PREV
//       </Page>
//     );
//   }

//   if (currentPage > 4) {
//     elements.push(
//       <>
//         <Page onClick={() => onPageClick(1)}>1</Page>

//         <Body style={{ position: "relative" }} color={colors.grayText}>
//           ... <Dropdown pages={leftDots} side="left" />
//         </Body>
//       </>
//     );
//   }

//   pages.length &&
//     pages.forEach(page => {
//       if (currentPage === page) {
//         elements.push(<ActivePage key={page}>{page}</ActivePage>);
//       } else {
//         elements.push(
//           <Page key={page} onClick={() => onPageClick(page)}>
//             {page}
//           </Page>
//         );
//       }
//     });

//   if (currentPage < pagRange - 3) {
//     elements.push(
//       <>
//         <Body color={colors.grayText}>...</Body>
//         <Page onClick={() => onPageClick(pagRange)}>{pagRange}</Page>
//       </>
//     );
//   }
//   if (currentPage === pagRange) {
//     elements.push(
//       <DisabledPage {...props} key={"next"} pagNav>
//         NEXT
//         <Icon iconRight type="arrow-right" />
//       </DisabledPage>
//     );
//   } else {
//     elements.push(
//       <Page
//         pagNav
//         key={"next"}
//         onClick={() => {
//           if (currentPage !== pagRange) {
//             onPageClick(currentPage + 1);
//           }
//         }}
//       >
//         NEXT
//         <Icon iconRight type="arrow-right" fill={colors.grayText} />
//       </Page>
//     );
//   }

//   return elements;
// };

// const Pagination = props => {
//   const { totalRecords, perPage } = props;
//   const [currentPage, setCurrentPage] = useState(1);

//   const onPageClick = page => {
//     setCurrentPage(page);
//     props.onPageChanged(page);
//   };

//   let pages = range(
//     1,
//     Math.ceil(props.totalRecords / props.perPage),
//     currentPage
//   );

//   const hiddenPagesLeft = pages => {
//     let starting = pages[0];
//     const arr = [];
//     while (starting > 1) {
//       starting = starting - 1;
//       arr.push(starting);
//     }
//     arr.pop();
//     return arr;
//   };

//   const hiddenPagesRight = pages => {
//     let starting = pages[pages.length - 1];
//     const totalPages = Math.ceil(totalRecords / perPage);
//     const arr = [];
//     while (starting < totalPages) {
//       starting = starting + 1;
//       arr.push(starting);
//     }
//     arr.pop();
//     return arr;
//   };

//   const leftDots = hiddenPagesLeft(pages);
//   const rightDots = hiddenPagesRight(pages);

//   const elements = getPages(
//     currentPage,
//     pages,
//     onPageClick,
//     totalRecords,
//     perPage,
//     leftDots,
//     rightDots
//   );

//   return <PaginationContainer>{elements}</PaginationContainer>;
// };

// const PaginationContainer = styled.ul`
//   display: flex;
//   flex-direction: row;
//   user-select: none;
//   align-items: center;
//   justify-content: center;
// `;

// const Page = styled(Body)`
//   ${props =>
//     props.disabled && `visibility: hidden; transition: 400ms all ease-in`};
//   ${props =>
//     !props.disabled && `visibility: visible; transition: 400ms all ease-in`};
//   ${props => props.pagNav && `width: 100px; text-align: center`};

//   margin-right: 10px;
//   margin-left: 10px;
//   cursor: pointer;
//   list-style-type: none;
//   letter-spacing: 1px;
//   color: ${colors.grayText};
//   &:hover {
//     cursor: pointer;
//   }
//   transition: 400ms all ease-in;
// `;

// const DisabledPage = props => {
//   return (
//     <Page disabled pagNav={props.pagNav}>
//       {props.children}
//       {props.children[1]}
//     </Page>
//   );
// };

// const ActivePage = styled(Page)`
//   color: ${colors.blue};
//   cursor: auto;
// `;

// const StyledPagDropdown = styled.div`
//   width: 45px;
//   position: absolute;
//   top: 0;
//   left: -10px;
//   opacity: 0;
//   height: auto;
//   // padding: 5px;
//   padding-top: 25px;
//   border: 1px soid blue;
//   box-sizing: border-box;

//   &:hover {
//     opacity: 1;
//   }
// `;

// const StyledPagDropdownList = styled.ul`
//   padding-left: 10px;
//   border-radius: 3px;
//   max-height: 200px;
//   overflow: scroll;
//   box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.05);
//   height: 100%;
//   &::-webkit-scrollbar {
//     // width: 5px;
//     // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
//   }
// `;

// const StyledPagListItem = styled.li`
//   &:hover {
//     cursor: pointer;
//   }
// `;

// Pagination.propTypes = {
//   totalRecords: PropTypes.number.isRequired,
//   perPage: PropTypes.number,
//   onPageChanged: PropTypes.func
// };

// export { Pagination };
