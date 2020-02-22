import React, { useState, useEffect } from "react";

function useEaseIn(time) {
  const [state, setState] = useState({
    easeIn: false
  });

  useEffect(() => {
    setEaseIn();
  }, []);

  const setEaseIn = () => {
    setTimeout(() => {
      return setState(() => ({
        easedIn: true
      }));
    }, time);
  };

  return state.easedIn;
}

export { useEaseIn };
