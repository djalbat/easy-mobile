"use strict";

import { arrayUtilities } from "necessary";
import { window, eventTypes } from "easy";

import RelativePosition from "../position/relative";

import { PI, TAP_DELAY, PI_OVER_TWO, MAXIMUM_TAP_TIME, MINIMUM_SWIPE_SPEED, MAXIMUM_SPREAD } from "../constants";
import { sortPositions, matchPositions, filterPositions, positionsFromMouseEvent, positionsFromTouchEvent } from "../utilities/positions";
import { DRAG_UP_CUSTOM_EVENT_TYPE,
         DRAG_DOWN_CUSTOM_EVENT_TYPE,
         DRAG_LEFT_CUSTOM_EVENT_TYPE,
         DRAG_RIGHT_CUSTOM_EVENT_TYPE,
         DRAG_START_CUSTOM_EVENT_TYPE,
         SWIPE_UP_CUSTOM_EVENT_TYPE,
         SWIPE_DOWN_CUSTOM_EVENT_TYPE,
         SWIPE_LEFT_CUSTOM_EVENT_TYPE,
         SWIPE_RIGHT_CUSTOM_EVENT_TYPE,
         PINCH_MOVE_CUSTOM_EVENT_TYPE,
         PINCH_START_CUSTOM_EVENT_TYPE,
         SINGLE_TAP_CUSTOM_EVENT_TYPE,
         DOUBLE_TAP_CUSTOM_EVENT_TYPE } from "../customEventTypes";

const { push, first, second } = arrayUtilities,
      { TOUCHSTART_EVENT_TYPE, TOUCHMOVE_EVENT_TYPE, TOUCHEND_EVENT_TYPE } = eventTypes;

function enableTouch() {
  const tapInterval = null,
        startMagnitude = null,
        startPositions = [],
        movingPositions = [],
        customGesturesEnabled = true;

  this.updateState({
    tapInterval,
    startMagnitude,
    startPositions,
    movingPositions,
    customGesturesEnabled
  });

  this.onMouseDown(this.mouseDownHandler);
  this.onMouseMove(this.mouseMoveHandler);

  window.onMouseUp(this.mouseUpHandler, this);

  this.onTouchStart(this.touchStartHandler);
  this.onTouchMove(this.touchMoveHandler);
  this.onTouchEnd(this.touchEndHandler);
}

function disableTouch() {
  this.offMouseDown(this.mouseDownHandler);
  this.offMouseMove(this.mouseMoveHandler);

  window.offMouseUp(this.mouseUpHandler, this);

  this.offTouchStart(this.touchStartHandler);
  this.offTouchMove(this.touchMoveHandler);
  this.offTouchEnd(this.touchEndHandler);
}

function onTouchStart(touchStartHandler) {
  const eventType = TOUCHSTART_EVENT_TYPE,
        handler = touchStartHandler;  ///

  this.onEvent(eventType, handler);
}

function offTouchStart(touchStartHandler) {
  const eventType = TOUCHSTART_EVENT_TYPE,
        handler = touchStartHandler;  ///

  this.offEvent(eventType, handler);
}

function onTouchMove(touchStartHandler) {
  const eventType = TOUCHMOVE_EVENT_TYPE,
        handler = touchStartHandler;  ///

  this.onEvent(eventType, handler);
}

function offTouchMove(touchStartHandler) {
  const eventType = TOUCHMOVE_EVENT_TYPE,
        handler = touchStartHandler;  ///

  this.offEvent(eventType, handler);
}

function onTouchEnd(touchStartHandler) {
  const eventType = TOUCHEND_EVENT_TYPE,
        handler = touchStartHandler;  ///

  this.onEvent(eventType, handler);
}

function offTouchEnd(touchStartHandler) {
  const eventType = TOUCHEND_EVENT_TYPE,
        handler = touchStartHandler;  ///

  this.offEvent(eventType, handler);
}

function onCustomDragUp(dragUpCustomHandler, element) {
  const customEventType = DRAG_UP_CUSTOM_EVENT_TYPE,
        customHandler = dragUpCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDragUp(dragUpCustomHandler, element) {
  const customEventType = DRAG_UP_CUSTOM_EVENT_TYPE,
        customHandler = dragUpCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomDragDown(dragDownCustomHandler, element) {
  const customEventType = DRAG_DOWN_CUSTOM_EVENT_TYPE,
        customHandler = dragDownCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDragDown(dragDownCustomHandler, element) {
  const customEventType = DRAG_DOWN_CUSTOM_EVENT_TYPE,
        customHandler = dragDownCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomDragLeft(dragLeftCustomHandler, element) {
  const customEventType = DRAG_LEFT_CUSTOM_EVENT_TYPE,
        customHandler = dragLeftCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDragLeft(dragLeftCustomHandler, element) {
  const customEventType = DRAG_LEFT_CUSTOM_EVENT_TYPE,
        customHandler = dragLeftCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomDragRight(dragRightCustomHandler, element) {
  const customEventType = DRAG_RIGHT_CUSTOM_EVENT_TYPE,
        customHandler = dragRightCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDragRight(dragRightCustomHandler, element) {
  const customEventType = DRAG_RIGHT_CUSTOM_EVENT_TYPE,
        customHandler = dragRightCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomDragStart(dragStartCustomHandler, element) {
  const customEventType = DRAG_START_CUSTOM_EVENT_TYPE,
        customHandler = dragStartCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDragStart(dragStartCustomHandler, element) {
  const customEventType = DRAG_START_CUSTOM_EVENT_TYPE,
        customHandler = dragStartCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomSwipeUp(swipeUpCustomHandler, element) {
  const customEventType = SWIPE_UP_CUSTOM_EVENT_TYPE,
        customHandler = swipeUpCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomSwipeUp(swipeUpCustomHandler, element) {
  const customEventType = SWIPE_UP_CUSTOM_EVENT_TYPE,
        customHandler = swipeUpCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomSwipeDown(swipeDownCustomHandler, element) {
  const customEventType = SWIPE_DOWN_CUSTOM_EVENT_TYPE,
        customHandler = swipeDownCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomSwipeDown(swipeDownCustomHandler, element) {
  const customEventType = SWIPE_DOWN_CUSTOM_EVENT_TYPE,
        customHandler = swipeDownCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomSwipeLeft(swipeLeftCustomHandler, element) {
  const customEventType = SWIPE_LEFT_CUSTOM_EVENT_TYPE,
        customHandler = swipeLeftCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomSwipeLeft(swipeLeftCustomHandler, element) {
  const customEventType = SWIPE_LEFT_CUSTOM_EVENT_TYPE,
        customHandler = swipeLeftCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomSwipeRight(swipeRightCustomHandler, element) {
  const customEventType = SWIPE_RIGHT_CUSTOM_EVENT_TYPE,
        customHandler = swipeRightCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomSwipeRight(swipeRightCustomHandler, element) {
  const customEventType = SWIPE_RIGHT_CUSTOM_EVENT_TYPE,
        customHandler = swipeRightCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomPinchMove(pinchMoveCustomHandler, element) {
  const customEventType = PINCH_MOVE_CUSTOM_EVENT_TYPE,
        customHandler = pinchMoveCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomPinchMove(pinchMoveCustomHandler, element) {
  const customEventType = PINCH_MOVE_CUSTOM_EVENT_TYPE,
        customHandler = pinchMoveCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomPinchStart(pinchStartCustomHandler, element) {
  const customEventType = PINCH_START_CUSTOM_EVENT_TYPE,
        customHandler = pinchStartCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomPinchStart(pinchStartCustomHandler, element) {
  const customEventType = PINCH_START_CUSTOM_EVENT_TYPE,
        customHandler = pinchStartCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomSingleTap(singleTapCustomHandler, element) {
  const customEventType = SINGLE_TAP_CUSTOM_EVENT_TYPE,
        customHandler = singleTapCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomSingleTap(singleTapCustomHandler, element) {
  const customEventType = SINGLE_TAP_CUSTOM_EVENT_TYPE,
        customHandler = singleTapCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function onCustomDoubleTap(doubleTapCustomHandler, element) {
  const customEventType = DOUBLE_TAP_CUSTOM_EVENT_TYPE,
        customHandler = doubleTapCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomDoubleTap(doubleTapCustomHandler, element) {
  const customEventType = DOUBLE_TAP_CUSTOM_EVENT_TYPE,
        customHandler = doubleTapCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function getTapInterval() {
  const { tapInterval } = this.getState();

  return tapInterval;
}

function setTapInterval(tapInterval) {
  this.updateState({
    tapInterval
  });
}

function getStartMagnitude() {
  const { startMagnitude } = this.getState();

  return startMagnitude;
}

function setStartMagnitude(startMagnitude) {
  this.updateState({
    startMagnitude
  });
}

function areCustomGesturesEnabled() {
  const { customGesturesEnabled } = this.getState();

  return customGesturesEnabled;
}

function setCustomGesturesEnabled(customGesturesEnabled) {
  this.updateState({
    customGesturesEnabled
  });
}

function getStartPositions() {
  const { startPositions } = this.getState();

  return startPositions;
}

function setStartPositions(startPositions) {
  this.updateState({
    startPositions
  });
}

function getMovingPositions() {
  const { movingPositions } = this.getState();

  return movingPositions;
}

function setMovingPositions(movingPositions) {
  this.updateState({
    movingPositions
  });
}

function touchStartHandler(event, element) {
  this.startHandler(event, element, (event) => {
    const touchEvent = event, ///
          changed = false,
          positions = positionsFromTouchEvent(touchEvent, changed);

    return positions;
  });
}

function mouseDownHandler(event, element) {
  this.startHandler(event, element, (event) => {
    const mouseEvent = event, ///
          positions = positionsFromMouseEvent(mouseEvent);

    return positions;
  });
}

function touchMoveHandler(event, element) {
  this.moveHandler(event, element, (event) => {
    const touchEvent = event, ///
          changed = false,
          positions = positionsFromTouchEvent(touchEvent, changed);

    return positions;
  });
}

function mouseMoveHandler(event, element) {
  this.moveHandler(event, element, (event) => {
    const mouseEvent = event, ///
          positions = positionsFromMouseEvent(mouseEvent);

    return positions;
  });
}

function touchEndHandler(event, element) {
  this.endHandler(event, element, (event) => {
    const touchEvent = event, ///
          changed = true,
          positions = positionsFromTouchEvent(touchEvent, changed);

    return positions;
  });
}

function mouseUpHandler(event, element) {
  this.endHandler(event, element, (event) => {
    const mouseEvent = event, ///
          positions = positionsFromMouseEvent(mouseEvent);

    return positions;
  });
}

function startHandler(event, element, positionsFromEvent) {
  const positions = positionsFromEvent(event),
        startPositions = this.getStartPositions();

  filterPositions(startPositions, positions);

  push(startPositions, positions);

  const startingPositionsLength = startPositions.length;

  if (startingPositionsLength === 1) {
    this.dragStart(event, element);
  }

  if (startingPositionsLength === 2) {
    this.pinchStart(event, element);
  }
}

function moveHandler(event, element, positionsFromEvent) {
  const positions = positionsFromEvent(event),
        startPositions = this.getStartPositions(),
        movingPositions = this.getMovingPositions();

  filterPositions(movingPositions, positions);

  push(movingPositions, positions);

  const positionsMatch = matchPositions(startPositions, movingPositions);

  if (positionsMatch) {
    sortPositions(movingPositions, startPositions);

    const movingPositionsLength = movingPositions.length;

    if (movingPositionsLength === 1) {
      const dragInterval = this.getDragInterval();

      if (dragInterval === null) {
        this.drag(event, element);
      }
    }

    if (movingPositionsLength === 2) {
      const pinchInterval = this.getPinchInterval();

      if (pinchInterval === null) {
        this.pinch(event, element);
      }
    }
  }
}

function endHandler(event, element, positionsFromEvent) {
  const positions = positionsFromEvent(event),
        startPositions = this.getStartPositions(),
        movingPositions = this.getMovingPositions(),
        positionsMatch = matchPositions(startPositions, movingPositions);

  if (positionsMatch) {
    const startPositionsLength = startPositions.length;

    if (startPositionsLength === 1) {
      this.possibleTap(event, element);

      this.possibleSwipe(event, element);
    }

    if (startPositionsLength === 1) {
      let dragInterval = this.getDragInterval();

      if (dragInterval !== null) {
        clearTimeout(dragInterval);

        dragInterval = null;

        this.setDragInterval(dragInterval);
      }
    }

    if (startPositionsLength === 2) {
      let pinchInterval = this.getPinchInterval();

      if (pinchInterval !== null) {
        clearTimeout(pinchInterval);

        pinchInterval = null;

        this.setPinchInterval(pinchInterval);
      }
    }
  }

  filterPositions(startPositions, positions);

  filterPositions(movingPositions, positions);
}

function singleTap(event, element, top, left) {
  const customEventType = SINGLE_TAP_CUSTOM_EVENT_TYPE;

  this.callCustomHandlers(customEventType, event, element, top, left); ///
}

function doubleTap(event, element, top, left) {
  const customEventType = DOUBLE_TAP_CUSTOM_EVENT_TYPE;

  this.callCustomHandlersConditionally(customEventType, event, element, top, left);
}

function drag(event, element) {
  const startPositions = this.getStartPositions(),
        movingPositions = this.getMovingPositions(),
        firstStartPosition = first(startPositions),
        firstMovingPosition = first(movingPositions),
        firstPosition = firstStartPosition, ///
        secondPosition = firstMovingPosition, ///
        relativePosition = RelativePosition.fromFirstPositionAndSecondPosition(firstPosition, secondPosition),
        top = relativePosition.getTop(),
        left = relativePosition.getLeft(),
        direction = relativePosition.getDirection();

  let customEventType = null;

  if ((Math.abs(direction)) < MAXIMUM_SPREAD) {
    customEventType = DRAG_RIGHT_CUSTOM_EVENT_TYPE;
  }

  if (Math.abs(PI_OVER_TWO - direction) < MAXIMUM_SPREAD) {
    customEventType = DRAG_UP_CUSTOM_EVENT_TYPE;
  }

  if (Math.abs(-PI_OVER_TWO - direction) < MAXIMUM_SPREAD) {
    customEventType = DRAG_DOWN_CUSTOM_EVENT_TYPE;
  }

  if ((PI - Math.abs(direction)) < MAXIMUM_SPREAD) {
    customEventType = DRAG_LEFT_CUSTOM_EVENT_TYPE;
  }

  if (customEventType !== null) {
    this.callCustomHandlersConditionally(customEventType, event, element, top, left);
  }
}

function pinch(event, element) {
  const movingPositions = this.getMovingPositions(),
        firstMovingPosition = first(movingPositions),
        secondMovingPosition = second(movingPositions),
        relativeMovingPosition = RelativePosition.fromFirstPositionAndSecondPosition(firstMovingPosition, secondMovingPosition),
        customEventType = PINCH_MOVE_CUSTOM_EVENT_TYPE,
        startMagnitude = this.getStartMagnitude(),
        magnitude = relativeMovingPosition.getMagnitude(),
        ratio = magnitude / startMagnitude;

  this.callCustomHandlersConditionally(customEventType, event, element, ratio);
}

function swipe(event, element, speed, direction) {
  let customEventType = null;

  if ((Math.abs(direction)) < MAXIMUM_SPREAD) {
    customEventType = SWIPE_RIGHT_CUSTOM_EVENT_TYPE;

    speed = speed * Math.cos(direction);
  }

  if (Math.abs(PI_OVER_TWO - direction) < MAXIMUM_SPREAD) {
    customEventType = SWIPE_UP_CUSTOM_EVENT_TYPE;

    speed = speed * Math.sin(direction);
  }

  if (Math.abs(-PI_OVER_TWO - direction) < MAXIMUM_SPREAD) {
    customEventType = SWIPE_DOWN_CUSTOM_EVENT_TYPE;

    speed = speed * Math.sin(direction);
  }

  if ((PI - Math.abs(direction)) < MAXIMUM_SPREAD) {
    customEventType = SWIPE_LEFT_CUSTOM_EVENT_TYPE;

    speed = speed * Math.cos(direction);
  }

  if (customEventType !== null) {
    const startPositions = this.getStartPositions(),
          firstStartPosition = first(startPositions),
          startPosition = firstStartPosition, ///
          top = startPosition.getTop(),
          left = startPosition.getLeft();

    this.callCustomHandlersConditionally(customEventType, event, element, top, left, speed);
  }
}

function dragStart(event, element) {
  const customEventType = DRAG_START_CUSTOM_EVENT_TYPE,
        startPositions = this.getStartPositions(),
        firstStartPosition = first(startPositions),
        startPosition = firstStartPosition,  ///
        top = startPosition.getTop(),
        left = startPosition.getLeft();

  this.callCustomHandlersConditionally(customEventType, event, element, top, left);
}

function pinchStart(event, element) {
  const customEventType = PINCH_START_CUSTOM_EVENT_TYPE,
        startPositions = this.getStartPositions(),
        firstStartPosition = first(startPositions),
        secondStartPosition = second(startPositions),
        relativeStartPosition = RelativePosition.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition),
        magnitude = relativeStartPosition.getMagnitude(),
        startMagnitude = magnitude; ///

  this.setStartMagnitude(startMagnitude);

  this.callCustomHandlersConditionally(customEventType, event, element);
}

function possibleTap(event, element) {
  const startPositions = this.getStartPositions(),
        movingPositions = this.getMovingPositions(),
        firstStartPosition = first(startPositions),
        firstMovingPosition = first(movingPositions),
        firstPosition = firstStartPosition, ///
        secondPosition = firstMovingPosition, ///
        relativePosition = RelativePosition.fromFirstPositionAndSecondPosition(firstPosition, secondPosition),
        time = relativePosition.getTime(),
        speed = relativePosition.getSpeed();

  if ((speed === 0) && (time < MAXIMUM_TAP_TIME)){
    this.singleTapOrDoubleTap(event, element);
  }
}

function possibleSwipe(event, element) {
  const startPositions = this.getStartPositions(),
        movingPositions = this.getMovingPositions(),
        firstStartPosition = first(startPositions),
        firstMovingPosition = first(movingPositions),
        firstPosition = firstStartPosition, ///
        secondPosition = firstMovingPosition, ///
        relativePosition = RelativePosition.fromFirstPositionAndSecondPosition(firstPosition, secondPosition),
        direction = relativePosition.getDirection(),
        speed = relativePosition.getSpeed();

  if (speed > MINIMUM_SWIPE_SPEED) {
    this.swipe(event, element, speed, direction);
  }
}

function singleTapOrDoubleTap(event, element) {
  const startPositions = this.getStartPositions(),
        firstStartPosition = first(startPositions),
        startPosition = firstStartPosition, ///
        top = startPosition.getTop(),
        left = startPosition.getLeft();

  let tapInterval = this.getTapInterval();

  if (tapInterval !== null) {
    clearTimeout(tapInterval);

    tapInterval = null;

    this.setTapInterval(tapInterval);

    this.doubleTap(event, element, top, left);

    return;
  }

  tapInterval = setTimeout(() => {
    tapInterval = null;

    this.setTapInterval(tapInterval);

    this.singleTap(event, element, top, left);
  }, TAP_DELAY);

  this.setTapInterval(tapInterval);
}

function enableCustomGestures() {
  const customGesturedEnabled = true;

  this.setCustomGesturesEnabled(customGesturedEnabled);
}

function disableCustomGestures() {
  const customGesturedEnabled = false;

  this.setCustomGesturesEnabled(customGesturedEnabled);
}

function callCustomHandlersConditionally(customEventType, event, element, ...remainingArguments) {
  const customGesturesEnabled = this.areCustomGesturesEnabled();

  if (customGesturesEnabled) {
    this.callCustomHandlers(customEventType, event, element, ...remainingArguments);
  }
}

const touchMixins = {
  enableTouch,
  disableTouch,
  onTouchStart,
  offTouchStart,
  onTouchMove,
  offTouchMove,
  onTouchEnd,
  offTouchEnd,
  onCustomDragUp,
  offCustomDragUp,
  onCustomDragDown,
  offCustomDragDown,
  onCustomDragLeft,
  offCustomDragLeft,
  onCustomDragRight,
  offCustomDragRight,
  onCustomDragStart,
  offCustomDragStart,
  onCustomSwipeUp,
  offCustomSwipeUp,
  onCustomSwipeDown,
  offCustomSwipeDown,
  onCustomSwipeLeft,
  offCustomSwipeLeft,
  onCustomSwipeRight,
  offCustomSwipeRight,
  onCustomPinchMove,
  offCustomPinchMove,
  onCustomPinchStart,
  offCustomPinchStart,
  onCustomSingleTap,
  offCustomSingleTap,
  onCustomDoubleTap,
  offCustomDoubleTap,
  getTapInterval,
  setTapInterval,
  getStartMagnitude,
  setStartMagnitude,
  getStartPositions,
  setStartPositions,
  areCustomGesturesEnabled,
  setCustomGesturesEnabled,
  getMovingPositions,
  setMovingPositions,
  touchStartHandler,
  mouseDownHandler,
  touchMoveHandler,
  mouseMoveHandler,
  touchEndHandler,
  mouseUpHandler,
  startHandler,
  moveHandler,
  endHandler,
  singleTap,
  doubleTap,
  drag,
  pinch,
  swipe,
  dragStart,
  pinchStart,
  possibleTap,
  possibleSwipe,
  singleTapOrDoubleTap,
  enableCustomGestures,
  disableCustomGestures,
  callCustomHandlersConditionally
};

export default touchMixins;
