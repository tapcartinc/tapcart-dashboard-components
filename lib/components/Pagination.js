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

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const getPages = (currentPage, pages, onPageClick, { ...props }) => {
  const elements = [];

  if (currentPage === 1) {
    elements.push(
      <DisabledPage key={"prev"} {...props}>
        <Icon iconLeft type="arrow-left" />
        PREV
      </DisabledPage>
    );
  } else {
    elements.push(
      <Page
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

  if (currentPage === pages.length) {
    elements.push(
      <DisabledPage {...props} key={"next"}>
        NEXT
        <Icon iconRight type="arrow-right" />
      </DisabledPage>
    );
  } else {
    elements.push(
      <Page
        key={"next"}
        onClick={() => {
          if (currentPage !== pages.length) {
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
  const [currentPage, setCurrentPage] = useState(1);

  const onPageClick = page => {
    setCurrentPage(page);
    props.onPageChanged(page);
  };

  let pages = range(1, Math.ceil(props.totalRecords / props.perPage));

  const elements = getPages(currentPage, pages, onPageClick);

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
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  min-width: 15px;
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
    <Page disabled>
      {props.children}
      {props.key}
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
