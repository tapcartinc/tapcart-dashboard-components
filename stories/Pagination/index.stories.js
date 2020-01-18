import React from "react";
import { Pagination } from "../../lib/components/Pagination";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  component: Pagination,
  title: "Components/Pagination",
  decorators: [withKnobs]
};

export const pagination = props => (
  <>
    <br />
    <Pagination
      totalRecords={150}
      pageNeighbours={5}
      perPage={6}
      onPageChanged={page => {
        let offset = 0;

        if (page !== 1) {
          offset = (page - 1) * props.perPage;
        }

        props.fetchMore({
          variables: {
            offset,
            limit: props.perPage
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            return Object.assign({}, prev, {
              articles: [...fetchMoreResult.articles]
            });
          }
        });
      }}
    />
  </>
);
