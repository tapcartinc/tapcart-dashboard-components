///////////
// ELEMENTS
///////////

export { Icon } from "./elements/Icon";
export { LinkTag } from "./elements/LinkTag";
export { IconButton } from "./elements/IconButton";
export { LoaderOld } from "./elements/LoaderOld";
export { DraftStatus } from "./elements/DraftStatus";
export { TapcartPlanLogo } from "./elements/TapcartPlanLogo";
export { TapcartLogo } from "./elements/TapcartLogo";
export {
  Header,
  Description,
  Body,
  placeholder,
  input,
  Label,
  Sofia,
  Circular,
} from "./elements/Typography";

///////////
// COMPONENTS
///////////

// TODO: PUT IN ALPHABETICAL ORDER
export { Accordion } from "./components/Accordion";
export { AccordionBody } from "./components/Accordion/AccordionBody";
export { AccordionLabel } from "./components/Accordion/AccordionLabel";
export { AccordionPanel } from "./components/Accordion/AccordionPanel";

export { Breadcrumbs } from "./components/Breadcrumbs";
export { BreadcrumbItem } from "./components/Breadcrumbs/BreadcrumbItem";

export { Button } from "./components/Button/index";

export { DropdownContainer } from "./components/DropdownContainer";

export { Fields } from "./components/Fields";
export { Field } from "./components/Fields/Field";
export { FieldDescription } from "./components/Fields/FieldDescription";
export { FieldHeader } from "./components/Fields/FieldHeader";
export { FieldLabel } from "./components/Fields/FieldLabel";

export { ImageUploader } from "./components/ImageUploader";

export { Input } from "./components/Input/index";

export { Link } from "./components/Link";

export { OptionBoxes } from "./components/OptionBoxes/index";
export { OptionBox } from "./components/OptionBoxes/OptionBox";

///////////
// LAYOUT
///////////

export { Container } from "./layout/Container";
export { ContainerBox } from "./layout/ContainerBox";
export { default as AccordionOld } from "./layout/AccordionOld";
export { Card } from "./layout/Card";
export { DottedLineContainer } from "./layout/DottedLineContainer";
export { ProTip } from "./layout/ProTip";
export { PageHeader } from "./layout/PageHeader";

///////////
// THEME
///////////

export {
  colors,
  gradientOverlay,
  border,
  marginRight,
  marginLeft,
  sofia,
  circular,
  boxShadow,
} from "./utils/_variables";
export {
  sofiaPro,
  circularStd,
  colorPicker,
  defaultGraphColors,
} from "./utils/_dashVariables";
export {
  transition,
  hover,
  onClickTransition,
  hoverWithBorder,
} from "./utils/_animations";

export { getColors } from "./utils/_functions";

export { ThemeProvider } from "./utils/ThemeProvider";

export * from "./utils/_theme";
export * from "./utils/_layout";
export * from "./utils/_swatches";

///////////
// HOOKS
///////////

export { useWindowSize } from "./hooks/useWindowSize";
export { useEaseIn } from "./hooks/useEaseIn";

///////////
// STATS
///////////

export { SummaryCard } from "./stats/SummaryCard";
export { StatsIcon } from "./stats/StatsIcon";
export { AreaGraph } from "./stats/charts/AreaGraph";
export { BarGraph } from "./stats/charts/BarGraph";
export { HeatMapGraph } from "./stats/charts/HeatMapGraph";
export { MultiSeriesBarGraph } from "./stats/charts/MultiSeriesBarGraph";
export { PieGraph } from "./stats/charts/PieGraph";
export { heatmapColors, statsColors } from "./stats/utils/_colors";
