import React from 'react';
import Accordion from '../../lib/layout/Accordion';
import { Body } from '../../lib/elements/Typography';

export default {
  component: Accordion,
  title: 'Accordion'
};

const accordionContent = [
  {
    question: 'What are the requirements to use Tapcart?',
    answer:
      'Yes, your app will seamlessly sync with your Shopify store so all products, collections, orders and discounts update in real-time. You can also curate the products you feature in the app in real-time.'
  },
  {
    question: 'Does the app sync with my store?',
    answer:
      'Yes, we support all payment gateways via a web-based checkout. It’s not as sweet as our native checkout but it’s the next best thing.'
  }
];

export const accordion = () => (
  <>
    <Accordion boxShadow={true} toggleIcons="plus/minus">
      {accordionContent.map(content => {
        return (
          <div key={content.question} label={content.question}>
            <Body> {content.answer}</Body>
          </div>
        );
      })}
    </Accordion>

    <br />

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
