"use strict";

export default class Position {
  constructor(top, left, time, identifier) {
    this.top = top;
    this.left = left;
    this.time = time;
    this.identifier = identifier;
  }

  getTop() {
    return this.top;
  }

  getLeft() {
    return this.left;
  }

  getTime() {
    return this.time;
  }

  getIdentifier() {
    return this.identifier;
  }

  minus(position) {
    const positionTop = position.getTop(),
          positionLeft = position.getLeft(),
          positionTime = position.getTime(),
          top = this.top - positionTop,
          left = this.left - positionLeft,
          time = this.time - positionTime,
          identifier = this.identifier;

    position = new Position(top, left, time, identifier); ///

    return position;
  }

  match(position) {
    const identifier = position.getIdentifier(),
          matches = (this.identifier === identifier);

    return matches;
  }

  static fromTouch(touch) {
    const { pageX, pageY, identifier } = touch,
          top = pageY,  ///
          left = pageX, ///
          time = getTime(),
          position = new Position(top, left, time, identifier);

    return position;
  }

  static fromMouseEvent(mouseEvent) {
    const { pageX, pageY } = mouseEvent,
          top = pageY,  ///
          left = pageX, ///
          time = getTime(),
          identifier = null,
          position = new Position(top, left, time, identifier);

    return position;
  }
}

function getTime() {
  const time = Date.now();  ///

  return time;
}
