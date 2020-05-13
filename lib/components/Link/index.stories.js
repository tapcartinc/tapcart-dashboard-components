import React, { useState } from "react";
import { Link } from "./index";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import {
  Link as CustomLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Button } from "../../components/Button";
import { Icon } from "../../elements/Icon";

storiesOf("Examples|Components/Link", module)
  .add("Basic", () => {
    return (
      <Link element="a" href="#">
        Link
      </Link>
    );
  })
  .add("As button", () => {
    return (
      <Link href="#" element="a">
        <Button type="primary">As button</Button>
      </Link>
    );
  })
  .add("As button with Icon", () => {
    return (
      <Link href="#" element="a">
        <Button type="primary">
          With Icon <Icon type="edit" fill="white" iconRight />
        </Button>
      </Link>
    );
  })
  .add("As React Router Link", () => {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/" element={CustomLink}>
                  Home
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/">{/* <About /> */}</Route>
          </Switch>
        </div>
      </Router>
    );
  });
