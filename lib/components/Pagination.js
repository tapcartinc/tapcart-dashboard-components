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
      return range.slice(0, 7);
    }

    if (range[currIdx] >= range.length - 3) {
      arr = range.slice(Math.max(range.length - 7, 1));
      return arr;
    }
    arr = range.slice(currIdx - 3, currIdx + 4);
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
        PREV
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
        }}
      >
        <Icon iconLeft type="arrow-left" fill={colors.grayText} />
        PREV
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
        NEXT
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
        NEXT
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
  ${props => props.pagNav && `width: 100px; text-align: center`};

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
