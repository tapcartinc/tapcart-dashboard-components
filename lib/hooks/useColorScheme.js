import React, { useEffect, useState, useRef } from "react";

const useColorScheme = colors => {
  if (colors) {
    return colors;
  } else {
    const colors = [];
    defaultGraphColors.map((color, index) => {
      if (index <= state.data.length) {
        colors.push(color);
      }
    });
    return colors;
  }
};

export { useColorScheme };
