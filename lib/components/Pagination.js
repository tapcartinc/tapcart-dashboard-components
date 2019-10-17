import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

const getPages = (currentPage, pages, onPageClick) => {
  const elements = [];

  if (currentPage === 1) {
    elements.push((
      <DisabledPage key={'prev'}>PREV</DisabledPage>
    ));
  } else {
    elements.push((
      <Page
        key={'prev'}
        onClick={() => {
          if (currentPage !== 1) {
            onPageClick(currentPage-1);
          }
        }}
      >PREV</Page>)
    );
  }

  pages.forEach((page) => {
    if (currentPage === page) {
      elements.push((
        <ActivePage key={page}>{page}</ActivePage>
      ));
    } else {
      elements.push((
        <Page key={page} onClick={() => onPageClick(page)}>{page}</Page>
      ));
    }
  });

  if (currentPage === pages.length) {
    elements.push((
      <DisabledPage key={'next'}>NEXT</DisabledPage>
    ));
  } else {
    elements.push((
      <Page
        key={'next'}
        onClick={() => {
          if (currentPage  !== pages.length) {
            onPageClick(currentPage+1);
          }
        }}
      >NEXT</Page>));
  }

  return elements;
};

const Pagination = (props) => {
  const [ currentPage, setCurrentPage ] = useState(1);

  const onPageClick = (page) => {
    setCurrentPage(page);
    props.onPageChanged(page);
  };

  let pages = range(1, Math.ceil(props.totalRecords / props.perPage));

  const elements = getPages(currentPage, pages, onPageClick);

  return (
    <PaginationContainer>
      {elements}
    </PaginationContainer>
  );
};

const PaginationContainer = styled.ul`
  display: flex;
  flex-direction: row;
  user-select: none;
`;

const Page = styled.li`
  margin-right: 5px;
  min-width: 10px;
  min-height: 10px;
  color: blue;
  cursor: pointer;
  border: 1px solid black;
  list-style-type: none;
`;

const DisabledPage = styled(Page)`
  color: gray;
  cursor: auto;
`;

const ActivePage = styled(Page)`
  color: red;
  cursor: auto;
`;

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  perPage: PropTypes.number,
  onPageChanged: PropTypes.func
};

export { Pagination };
