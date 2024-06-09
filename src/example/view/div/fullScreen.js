"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { touchMixins, fullScreenMixins, fullScreenUtilities } from "../../../index";  ///

import FullScreenButton from "../button/fullScreen";

const { isFullScreen } = fullScreenUtilities;

class FullScreenDiv extends Element {
  fullScreenChangeCustomHandler = (event, element) => {
    debugger
  }

  pressCustomHandler = (event, element) => {
    debugger
  }

  fullScreenButtonClickHandler = (event, element) => {
    const fullScreen = isFullScreen();

    fullScreen ?
      this.exitFullScreen() :
        this.requestFullScreen();
  }

  didMount() {
    this.enableTouch();

    this.enableFullScreen();

    this.onCustomPress(this.pressCustomHandler);

    this.onCustomFullScreenChange(this.fullScreenButtonClickHandler);
  }

  willUnmount() {
    this.offCustomFullScreenChange(this.fullScreenButtonClickHandler);

    this.offCustomPress(this.pressCustomHandler);

    this.disableFullScreen();

    this.disableTouch();
  }

  childElements() {
    return (

      <FullScreenButton onClick={this.fullScreenButtonClickHandler} />

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "full-screen"
  };
}

Object.assign(FullScreenDiv.prototype, touchMixins);
Object.assign(FullScreenDiv.prototype, fullScreenMixins);

export default withStyle(FullScreenDiv)`

  width: 64rem;
  height: 32rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  
`;
