///////////
// ELEMENTS
///////////

export { Icon } from "./elements/Icon";
export { Button } from "./elements/Button";
export { IconButton } from "./elements/IconButton";
export {
  H1,
  H2,
  H3,
  H4,
  H5,
  Generic,
  Paragraph,
  placeholder,
  input,
  Body
} from "./elements/Typography";

///////////
// COMPONENTS
///////////

export { SegmentedControl } from "./components/SegmentedControl";
export { SearchBar } from "./components/SearchBar";
export { Input } from "./components/Input";
export { OptionBoxes } from "./components/OptionBoxes";
export { ClickDropdown } from "./components/ClickDropdown";
export { HoverDropdown } from "./components/HoverDropdown";
export { Breadcrumbs } from "./components/Breadcrumbs";
export { SelectDropdown } from "./components/SelectDropdown";
export { Toggle } from "./components/Toggle";
export { IconToggle } from "./components/IconToggle";

///////////
// LAYOUT
///////////

export { Container } from "./layout/Container";
export { default as Accordion } from "./layout/Accordion";
export { Card } from "./layout/Card";
export { DottedLineContainer } from "./layout/DottedLineContainer";
export { ProTip } from "./layout/ProTip";

///////////
// THEME
///////////

export { colors, gradientOverlay, border } from "./utils/_variables";
export {
  transition,
  hover,
  onClickTransition,
  hoverWithBorder
} from "./utils/_animations";
export { getColors } from "./utils/_functions";

export { ThemeProvider } from "./utils/ThemeProvider";

export * from "./utils/_theme";
export * from "./utils/_layout";

///////////
// MARKETING
///////////

export { Hero } from "./marketing/Layout";
export {
  MarketingHeading,
  MarketingSubHeading,
  MarketingNavLink,
  MarketingFooterLink
} from "./marketing/Typography";
export { MarketingIcon } from "./marketing/MarketingIcon";
