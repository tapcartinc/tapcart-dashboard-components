import React from "react";
import Accordion from "../../lib/layout/Accordion";
import { Body } from "../../lib/elements/Typography";
import {
  withKnobs,
  radios,
  select,
  boolean,
  optionsKnob
} from "@storybook/addon-knobs";

export default {
  component: Accordion,
  title: "Components/Accordion",
  decorators: [withKnobs]
};

const accordionContent = [
  {
    question: "What are the requirements to use Tapcart?",
    answer:
      "Yes, your app will seamlessly sync with your Shopify store so all products, collections, orders and discounts update in real-time. You can also curate the products you feature in the app in real-time."
  },
  {
    question: "Does the app sync with my store?",
    answer:
      "Yes, we support all payment gateways via a web-based checkout. It’s not as sweet as our native checkout but it’s the next best thing."
  }
];

const label = "Toggle Icons";
const options = {
  PlusMinus: "plus/minus",
  None: "none"
};
const defaultValue = "plus/minus";

export const accordionExampleOne = () => (
  <>
    <Accordion
      boxShadow={boolean("boxShadow", true)}
      toggleIcons={select(label, options, defaultValue)}
    >
      {accordionContent.map(content => {
        return (
          <div key={content.question} label={content.question}>
            <Body> {content.answer}</Body>
          </div>
        );
      })}
    </Accordion>

    <br />
  </>
);

export const accordionExampleTwo = () => (
  <>
    <Accordion boxShadow={false}>
      {accordionContent.map(content => {
        return (
          <div key={content.question} label={content.question}>
            <Body> {content.answer}</Body>
          </div>
        );
      })}
    </Accordion>
  </>
);
