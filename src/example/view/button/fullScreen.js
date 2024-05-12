"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

class FullScreenButton extends Button {
  childElements() {
    return "Full Screen"
  }

  static defaultProperties = {
    className: "full-screen"
  };
}

export default withStyle(FullScreenButton)`

  color: white;
  cursor: pointer;
  display: flex;
  padding: 1rem;
  font-size: 4rem;
  align-items: center;
  justify-content: center;
  background-color: green;
  
`;
