import React, { useState } from "react";
import { Grid } from "./index";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

storiesOf("Examples|Components/Grid", module)
  .addDecorator(withKnobs)
  .add("Basic Grid", () => {
    const numItems = number('Number of Items', 3);
    const gridType = text('Grid type', 'row');
    const shouldWrap = boolean('Wrap', false);
    const wrapCount = number('Wrap count', 4);
    const childMargin = number('Child margin', 10);
    const alignment = text('Align', 'flex-start flex-start');
    // Create placeholder array of children
    const items =
      Array
        .from(Array(numItems).keys())
        .map(i => <div key={`item-${i}`}>{i + 1}</div>);
    return (
      <Grid
        id="grid-example-basic"
        wrap={shouldWrap}
        type={gridType}
        wrapCount={wrapCount}
        margin={childMargin}
        align={alignment}
      >
        {items}
      </Grid>
    );
  })
  .add("Basic Column", () => {
    return (
      <Grid
        style={{ border: '1px solid #ddd'}}
        id="grid-example-column"
        type="column"
      >
        <div>Grid item 1</div>
        <div>Grid item 2</div>
        <div>Grid item 3</div>
      </Grid>
    );
  })
  .add("Wrapped Rows", () => {
    // create some styles for children
    const itemStyle = {
      background: '#f5f5f5',
      padding: 10,
      boxSizing: 'border-box',
    };
    // Create placeholder array of children
    const items =
      Array
        .from(Array(6).keys())
        .map(i => <div key={`item-${i}`}>{i + 1}</div>);
    // render Grid
    return (
      <Grid
        id="grid-example-row-wrapped"
        type="row"
        wrap={true}
        wrapCount={3}
        margin={10}
        childStyle={itemStyle}
      >
        {items}
      </Grid>
    );
  });

