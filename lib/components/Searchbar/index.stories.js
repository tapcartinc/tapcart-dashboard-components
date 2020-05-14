import React, { useState, createRef } from "react";
import { Searchbar } from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("Examples|Components/Searchbar", module).add("Basic", () => {
  const [state, setState] = useState({
    input: "",
  });

  const inputRef = createRef();

  const onSearch = (e, searchTerm) => {
    return setState((prevState) => ({
      ...prevState,
      input: searchTerm,
    }));
  };

  return (
    <Searchbar
      innerRef={inputRef}
      placeholder="Search"
      onChange={(e) => onSearch(e, e.target.value)}
    />
  );
});
