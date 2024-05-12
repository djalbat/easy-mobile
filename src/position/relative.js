"use strict";

import { PI } from "../constants";

export default class RelativePosition {
  constructor(top, left, time, speed, magnitude, direction) {
    this.top = top;
    this.left = left;
    this.time = time;
    this.speed = speed;
    this.magnitude = magnitude;
    this.direction = direction;
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

  getSpeed() {
    return this.speed;
  }

  getMagnitude() {
    return this.magnitude;
  }

  getDirection() {
    return this.direction;
  }

  static fromFirstPositionAndSecondPosition(firstPosition, secondPosition) {
    const position = secondPosition.minus(firstPosition),
          top = position.getTop(),
          left = position.getLeft(),
          time = position.getTime(),
          magnitude = Math.sqrt(top * top + left * left),
          speed = (time === 0) ?
                    0 :
                      magnitude / time;

    let direction;

    if (left === 0) {
      direction = (top < 0) ?
                   +PI / 2 :
                    -PI / 2;
    } else {
      direction = Math.atan2(-top, left);
    }

    const relativePosition = new RelativePosition(top, left, time, speed, magnitude, direction);

    return relativePosition;
  }
}
