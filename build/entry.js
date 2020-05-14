"use strict";

var path = require("path"); // TODO: PUT IN ALPHABETICAL ORDER


module.exports = {
  Button: path.resolve(__dirname, "../build/components/Button"),
  base: path.resolve(__dirname, "../build/utils/_theme"),
  Breadcrumbs: path.resolve(__dirname, "../build/components/Breadcrumbs"),
  BreadcrumbItem: path.resolve(__dirname, "../build/components/Breadcrumbs/BreadcrumbItem"),
  DropdownContainer: path.resolve(__dirname, "../build/components/DropdownContainer"),
  Fields: path.resolve(__dirname, "../build/components/Fields"),
  Field: path.resolve(__dirname, "../build/components/Fields/Field"),
  FieldDescription: path.resolve(__dirname, "../build/components/Fields/FieldDescription"),
  FieldHeader: path.resolve(__dirname, "../build/components/Fields/FieldHeader"),
  FieldLabel: path.resolve(__dirname, "../build/components/Fields/FieldLabel"),
  Header: path.resolve(__dirname, "../build/elements/Typography"),
  Icon: path.resolve(__dirname, "../build/elements/Icon"),
  ImageUploader: path.resolve(__dirname, "../build/components/ImageUploader"),
  invert: path.resolve(__dirname, "../build/utils/_theme"),
  Input: path.resolve(__dirname, "../build/components/Input/index.js"),
  Link: path.resolve(__dirname, "../build/components/Link"),
  Loader: path.resolve(__dirname, "../build/elements/Loader"),
  OptionBoxes: path.resolve(__dirname, "../build/components/OptionBoxes"),
  OptionBox: path.resolve(__dirname, "../build/components/OptionBoxes/OptionBox"),
  swatches: path.resolve(__dirname, "../build/utils/_swatches"),
  ThemeProvider: path.resolve(__dirname, "../build/utils/ThemeProvider") // Icon: path.resolve(__dirname,"../src/components/Icon.js"),
  // ThemeProvider: path.resolve(__dirname,"../src/ThemeProvider.js")

};