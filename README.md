# Tapcart UI Library

## Table of Contents

- [General Info](#general-info)
- [Setup](#setup)
- [Technologies](#technologies)

## General Info

This project is a ui kit and component libarary for the Tapcart brand

## Setup

Use the package manager to add the library to your node_modules

Add to your dependencies in the package.json file

```
"tapcart-ui-library": "github:tapcartinc/tapcart-ui-library#master"
```

```
$ cd ../your-project
$ npm install
```

Make sure your github account has SSH enabled

## Technologies

- **[Styled Components](https://www.styled-components.com/)**
- **[React](https://reactjs.org/)**

# Library: <b>UI Elements</b>

## Button

#### **`props:`**

primary, primary--reversed, secondary, transparent--blue, transparent--green, transparent--red, transparent--white, save, save--reversed, delete, delete--reversed, inverted, inverted--reversed, secondary--green

| Prop      | type     | required | default |
| --------- | -------- | -------- | ------- |
| type      | string   | true     | primary |
| disabled  | bool     | false    | false   |
| isLoading | bool     | false    | false   |
| onClick   | function |          |         |

#### **`example:`**

`<Button type="primary"> Button Text </Button>`

`<Button type="primary"> <Icon type="trash" iconButton /> Icon Button Text </Button>`

## Input

#### **`props:`**

| Prop      | type     | required | default |
| --------- | -------- | -------- | ------- |
| type      | string   | true     | primary |
| disabled  | bool     | false    | false   |
| isLoading | bool     | false    | false   |
| onClick   | function |          |         |
