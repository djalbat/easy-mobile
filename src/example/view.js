"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { touchMixins } from "../index"; ///

class View extends Element {
  singleTapCustomHandler = (event, element, top, left) => {
    console.log("single tap")
  }

  doubleTapCustomHandler = (event, element, top, left) => {
    console.log("double tap")
  }

  pinchStartCustomHandler = (event, element) => {
    console.log("pinch start")
  }

  pinchMoveCustomHandler = (event, element, ratio) => {
    console.log("pinch move", ratio)
  }

  swipeRightCustomHandler = (event, element, top, left, speed) => {
    console.log("swipe right", speed)
  }

  swipeLeftCustomHandler = (event, element, top, left, speed) => {
    console.log("swipe left", speed)
  }

  dragDownCustomHandler = (event, element, top, left) => {
    console.log("drag down", top)
  }

  dragUpCustomHandler = (event, element, top, left) => {
    console.log("drag up", top)
  }

  didMount() {
    this.onCustomDragUp(this.dragUpCustomHandler);
    this.onCustomDragDown(this.dragDownCustomHandler);
    this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
    this.onCustomSwipeRight(this.swipeRightCustomHandler);
    this.onCustomPinchMove(this.pinchMoveCustomHandler);
    this.onCustomPinchStart(this.pinchStartCustomHandler);
    this.onCustomSingleTap(this.singleTapCustomHandler);
    this.onCustomDoubleTap(this.doubleTapCustomHandler);

    this.enableTouch();
  }

  willUnmount() {
    this.disableTouch();

    this.offCustomDragUp(this.dragUpCustomHandler);
    this.offCustomDragDown(this.dragDownCustomHandler);
    this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
    this.offCustomSwipeRight(this.swipeRightCustomHandler);
    this.offCustomPinchMove(this.pinchMoveCustomHandler);
    this.offCustomPinchStart(this.pinchStartCustomHandler);
    this.offCustomSingleTap(this.singleTapCustomHandler);
    this.offCustomDoubleTap(this.doubleTapCustomHandler);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

Object.assign(View.prototype, touchMixins);

export default withStyle(View)`
  
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  touch-action: none;
  justify-content: center;
  
`;
