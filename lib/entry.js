const path = require("path");

// TODO: PUT IN ALPHABETICAL ORDER
module.exports = {
  Accordion: path.resolve(__dirname, "../build/components/Accordion"),
  AccordionPanel: path.resolve(
    __dirname,
    "../build/components/Accordion/AccordionPanel"
  ),
  AccordionLabel: path.resolve(
    __dirname,
    "../build/components/Accordion/AccordionLabel"
  ),
  AccordionBody: path.resolve(
    __dirname,
    "../build/components/Accordion/AccordionBody"
  ),

  Button: path.resolve(__dirname, "../build/components/Button"),

  base: path.resolve(__dirname, "../build/utils/_theme"),
  Breadcrumbs: path.resolve(__dirname, "../build/components/Breadcrumbs"),
  BreadcrumbItem: path.resolve(
    __dirname,
    "../build/components/Breadcrumbs/BreadcrumbItem"
  ),

  ClickDropdown: path.resolve(__dirname, "../build/components/ClickDropdown"),
  ClickDropdown: path.resolve(
    __dirname,
    "../build/components/ClickDropdown/ClickDropdownOption"
  ),

  DropdownContainer: path.resolve(
    __dirname,
    "../build/components/DropdownContainer"
  ),
  Fields: path.resolve(__dirname, "../build/components/Fields"),
  Field: path.resolve(__dirname, "../build/components/Fields/Field"),
  FieldDescription: path.resolve(
    __dirname,
    "../build/components/Fields/FieldDescription"
  ),
  FieldHeader: path.resolve(
    __dirname,
    "../build/components/Fields/FieldHeader"
  ),
  FieldLabel: path.resolve(__dirname, "../build/components/Fields/FieldLabel"),

  H1: path.resolve(__dirname, "../build/elements/Typography"),
  H2: path.resolve(__dirname, "../build/elements/Typography"),

  Icon: path.resolve(__dirname, "../build/elements/Icon"),
  ImageUploader: path.resolve(__dirname, "../build/components/ImageUploader"),
  invert: path.resolve(__dirname, "../build/utils/_theme"),
  Input: path.resolve(__dirname, "../build/components/Input/index.js"),
  Link: path.resolve(__dirname, "../build/components/Link"),
  Loader: path.resolve(__dirname, "../build/elements/Loader"),
  OptionBoxes: path.resolve(__dirname, "../build/components/OptionBoxes"),
  OptionBox: path.resolve(
    __dirname,
    "../build/components/OptionBoxes/OptionBox"
  ),

  P1: path.resolve(__dirname, "../build/elements/Typography"),
  P2: path.resolve(__dirname, "../build/elements/Typography"),
  P3: path.resolve(__dirname, "../build/elements/Typography"),

  PopoutContainer: path.resolve(
    __dirname,
    "../build/components/PopoutContainer"
  ),
  PopoutOption: path.resolve(
    __dirname,
    "../build/components/PopoutContainer/PopoutOption"
  ),

  swatches: path.resolve(__dirname, "../build/utils/_swatches"),

  Searchbar: path.resolve(__dirname, "../build/components/Searchbar"),

  SegmentedControl: path.resolve(
    __dirname,
    "../build/components/SegmentedControl"
  ),

  Textarea: path.resolve(__dirname, "../build/components/Textarea"),
  Toggle: path.resolve(__dirname, "../build/components/Toggle"),
  ToolTip: path.resolve(__dirname, "../build/components/ToolTip"),
  ThemeProvider: path.resolve(__dirname, "../build/utils/ThemeProvider"),

  // ThemeProvider: path.resolve(__dirname,"../src/ThemeProvider.js")
};
