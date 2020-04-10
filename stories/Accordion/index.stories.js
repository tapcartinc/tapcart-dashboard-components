import React, { useState } from "react";
import Accordion from "../../lib/layout/Accordion";
import { Body } from "../../lib/elements/Typography";
import {
  withKnobs,
  radios,
  select,
  boolean,
  optionsKnob
} from "@storybook/addon-knobs";
import { isEmpty } from "../../lib/hooks/useEmptyObjectCheck";
import { Input } from "../../lib/components/Input";
import { Button } from "../../lib/elements/Button";
import { OptionBoxes } from "../../lib/components/OptionBoxes";

const SectionOne = ({ state, setState, key, ...props }) => {
  const handleInput = e => {
    e.preventDefault();
    const value = e.target.value;
    return setState(prevState => ({
      ...prevState,
      input: value
    }));
  };
  return (
    <div>
      <Input value={state.input} placeholder="blah" onChange={handleInput} />
    </div>
  );
};
const SectionTwo = ({ state, setState, key, ...props }) => {
  const clickOption = option => {
    return setState(prevState => ({
      ...prevState,
      currentOption: option
    }));
  };
  return (
    <div>
      <OptionBoxes
        selectedOption={state.currentOption}
        clickOption={clickOption}
        size="120px"
        options={[
          {
            label: "one",
            icon: "design",
            value: "one"
          },
          {
            label: "two",
            icon: "design",
            value: "two"
          }
        ]}
      />
    </div>
  );
};

export default {
  component: Accordion,
  title: "Components/Accordion",
  decorators: [withKnobs]
};

const accordionContent = [
  {
    header: "What are the requirements to use Tapcart?",
    answer: SectionOne
  },
  {
    header: "Does the app sync with my store?",
    answer: SectionTwo
  }
];

export const accordionExampleOne = props => {
  const [state, setState] = useState({
    input: "",
    currentOption: null,
    errors: null
  });

  const errorCheck = () => {
    let updatedErrors = {};
    if (!state.input) {
      updatedErrors["input"] = ["Enter input"];
    }
    if (!state.currentOption) {
      updatedErrors["currentOption"] = ["Select option"];
    }

    return setState(prevState => ({
      ...prevState,
      errors: updatedErrors
    }));
  };

  const mockSubmitButton = (
    <Button onClick={errorCheck} kind="primary">
      Submit
    </Button>
  );

  const stateValues = Object.values(state);

  return (
    <>
      <Accordion
        numerical
        steps
        stateValues={stateValues}
        errors={isEmpty(state.errors) ? null : state.errors}
      >
        {accordionContent.map((content, index) => {
          return (
            <div key={content.header} label={content.header}>
              {React.createElement(
                content.answer,
                {
                  key: content.header,
                  state,
                  setState,
                  errors: state.errors,
                  ...props
                }
                // children
              )}
            </div>
          );
        })}
      </Accordion>
      <br />
      {mockSubmitButton}
    </>
  );
};

// export const accordionExampleTwo = props => {
//   const [state, setState] = useState({
//     input: "",
//     currentOption: null
//   });

//   const stateValues = Object.values(state);

//   return (
//     <>
//       <Accordion numerical stateValues={stateValues}>
//         {accordionContent.map((content, index) => {
//           return (
//             <div key={content.header} label={content.header}>
//               {React.createElement(
//                 content.answer,
//                 {
//                   key: content.header,
//                   state,
//                   setState,
//                   ...props
//                 }
//                 // children
//               )}
//             </div>
//           );
//         })}
//       </Accordion>
//       <br />
//     </>
//   );
// };

export const accordionExampleTwo = () => (
  <Accordion boxShadow={false}>
    {accordionContent.map(content => {
      return (
        <div key={content.question} label={content.question}>
          <Body> {content.answer}</Body>
        </div>
      );
    })}
  </Accordion>
);
