const path = require("path");

module.exports = {
  Icon: path.resolve(__dirname, "../build/elements/Icon"),
  Breadcrumbs: path.resolve(__dirname, "../build/components/Breadcrumbs"),
  BreadcrumbItem: path.resolve(
    __dirname,
    "../build/components/Breadcrumbs/BreadcrumbItem"
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
  ImageUploader: path.resolve(__dirname, "../build/components/ImageUploader"),
  Input: path.resolve(__dirname, "../build/components/Input"),
  Link: path.resolve(__dirname, "../build/components/Link"),
  OptionBoxes: path.resolve(__dirname, "../build/components/OptionBoxes"),
  OptionBox: path.resolve(
    __dirname,
    "../build/components/OptionBoxes/OptionBox"
  ),
  // Button: path.resolve(__dirname,"../src/components/Button.js"),
  // Icon: path.resolve(__dirname,"../src/components/Icon.js"),
  // ThemeProvider: path.resolve(__dirname,"../src/ThemeProvider.js")
};
