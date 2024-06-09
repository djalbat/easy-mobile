"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _easy = require("easy");
var _relative = /*#__PURE__*/ _interop_require_default(require("../position/relative"));
var _constants = require("../constants");
var _positions = require("../utilities/positions");
var _customEventTypes = require("../customEventTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, TOUCHSTART_EVENT_TYPE = _easy.eventTypes.TOUCHSTART_EVENT_TYPE, TOUCHMOVE_EVENT_TYPE = _easy.eventTypes.TOUCHMOVE_EVENT_TYPE, TOUCHEND_EVENT_TYPE = _easy.eventTypes.TOUCHEND_EVENT_TYPE;
function enableTouch() {
    var tapInterval = null, startMagnitude = null, startPositions = [], movingPositions = [];
    this.updateState({
        tapInterval: tapInterval,
        startMagnitude: startMagnitude,
        startPositions: startPositions,
        movingPositions: movingPositions
    });
    this.onMouseDown(this.mouseDownHandler);
    this.onMouseMove(this.mouseMoveHandler);
    _easy.window.onMouseUp(this.mouseUpHandler, this);
    this.onTouchStart(this.touchStartHandler);
    this.onTouchMove(this.touchMoveHandler);
    this.onTouchEnd(this.touchEndHandler);
}
function disableTouch() {
    this.offMouseDown(this.mouseDownHandler);
    this.offMouseMove(this.mouseMoveHandler);
    _easy.window.offMouseUp(this.mouseUpHandler, this);
    this.offTouchStart(this.touchStartHandler);
    this.offTouchMove(this.touchMoveHandler);
    this.offTouchEnd(this.touchEndHandler);
}
function onTouchStart(touchStartHandler) {
    var eventType = TOUCHSTART_EVENT_TYPE, handler = touchStartHandler; ///
    this.onEvent(eventType, handler);
}
function offTouchStart(touchStartHandler) {
    var eventType = TOUCHSTART_EVENT_TYPE, handler = touchStartHandler; ///
    this.offEvent(eventType, handler);
}
function onTouchMove(touchStartHandler) {
    var eventType = TOUCHMOVE_EVENT_TYPE, handler = touchStartHandler; ///
    this.onEvent(eventType, handler);
}
function offTouchMove(touchStartHandler) {
    var eventType = TOUCHMOVE_EVENT_TYPE, handler = touchStartHandler; ///
    this.offEvent(eventType, handler);
}
function onTouchEnd(touchStartHandler) {
    var eventType = TOUCHEND_EVENT_TYPE, handler = touchStartHandler; ///
    this.onEvent(eventType, handler);
}
function offTouchEnd(touchStartHandler) {
    var eventType = TOUCHEND_EVENT_TYPE, handler = touchStartHandler; ///
    this.offEvent(eventType, handler);
}
function onCustomPress(pressCustomHandler, element) {
    var customEventType = _customEventTypes.PRESS_CUSTOM_EVENT_TYPE, customHandler = pressCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomPress(pressCustomHandler, element) {
    var customEventType = _customEventTypes.PRESS_CUSTOM_EVENT_TYPE, customHandler = pressCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragUp(dragUpCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_UP_CUSTOM_EVENT_TYPE, customHandler = dragUpCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragUp(dragUpCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_UP_CUSTOM_EVENT_TYPE, customHandler = dragUpCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragDown(dragDownCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_DOWN_CUSTOM_EVENT_TYPE, customHandler = dragDownCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragDown(dragDownCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_DOWN_CUSTOM_EVENT_TYPE, customHandler = dragDownCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragLeft(dragLeftCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_LEFT_CUSTOM_EVENT_TYPE, customHandler = dragLeftCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragLeft(dragLeftCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_LEFT_CUSTOM_EVENT_TYPE, customHandler = dragLeftCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragRight(dragRightCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_RIGHT_CUSTOM_EVENT_TYPE, customHandler = dragRightCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragRight(dragRightCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_RIGHT_CUSTOM_EVENT_TYPE, customHandler = dragRightCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragStart(dragStartCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, customHandler = dragStartCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragStart(dragStartCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, customHandler = dragStartCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSwipeUp(swipeUpCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_UP_CUSTOM_EVENT_TYPE, customHandler = swipeUpCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSwipeUp(swipeUpCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_UP_CUSTOM_EVENT_TYPE, customHandler = swipeUpCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSwipeDown(swipeDownCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_DOWN_CUSTOM_EVENT_TYPE, customHandler = swipeDownCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSwipeDown(swipeDownCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_DOWN_CUSTOM_EVENT_TYPE, customHandler = swipeDownCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSwipeLeft(swipeLeftCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_LEFT_CUSTOM_EVENT_TYPE, customHandler = swipeLeftCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSwipeLeft(swipeLeftCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_LEFT_CUSTOM_EVENT_TYPE, customHandler = swipeLeftCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSwipeRight(swipeRightCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_RIGHT_CUSTOM_EVENT_TYPE, customHandler = swipeRightCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSwipeRight(swipeRightCustomHandler, element) {
    var customEventType = _customEventTypes.SWIPE_RIGHT_CUSTOM_EVENT_TYPE, customHandler = swipeRightCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomPinchMove(pinchMoveCustomHandler, element) {
    var customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, customHandler = pinchMoveCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomPinchMove(pinchMoveCustomHandler, element) {
    var customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, customHandler = pinchMoveCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomPinchStart(pinchStartCustomHandler, element) {
    var customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE, customHandler = pinchStartCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomPinchStart(pinchStartCustomHandler, element) {
    var customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE, customHandler = pinchStartCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSingleTap(singleTapCustomHandler, element) {
    var customEventType = _customEventTypes.SINGLE_TAP_CUSTOM_EVENT_TYPE, customHandler = singleTapCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSingleTap(singleTapCustomHandler, element) {
    var customEventType = _customEventTypes.SINGLE_TAP_CUSTOM_EVENT_TYPE, customHandler = singleTapCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDoubleTap(doubleTapCustomHandler, element) {
    var customEventType = _customEventTypes.DOUBLE_TAP_CUSTOM_EVENT_TYPE, customHandler = doubleTapCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDoubleTap(doubleTapCustomHandler, element) {
    var customEventType = _customEventTypes.DOUBLE_TAP_CUSTOM_EVENT_TYPE, customHandler = doubleTapCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function getTapInterval() {
    var tapInterval = this.getState().tapInterval;
    return tapInterval;
}
function setTapInterval(tapInterval) {
    this.updateState({
        tapInterval: tapInterval
    });
}
function getPressSInterval() {
    var pressInterval = this.getState().pressInterval;
    return pressInterval;
}
function setPressSInterval(pressInterval) {
    this.updateState({
        pressInterval: pressInterval
    });
}
function getStartMagnitude() {
    var startMagnitude = this.getState().startMagnitude;
    return startMagnitude;
}
function setStartMagnitude(startMagnitude) {
    this.updateState({
        startMagnitude: startMagnitude
    });
}
function getStartPositions() {
    var startPositions = this.getState().startPositions;
    return startPositions;
}
function setStartPositions(startPositions) {
    this.updateState({
        startPositions: startPositions
    });
}
function getMovingPositions() {
    var movingPositions = this.getState().movingPositions;
    return movingPositions;
}
function setMovingPositions(movingPositions) {
    this.updateState({
        movingPositions: movingPositions
    });
}
function touchStartHandler(event, element) {
    this.startHandler(event, element, function(event) {
        var touchEvent = event, changed = false, positions = (0, _positions.positionsFromTouchEvent)(touchEvent, changed);
        return positions;
    });
}
function mouseDownHandler(event, element) {
    this.startHandler(event, element, function(event) {
        var mouseEvent = event, positions = (0, _positions.positionsFromMouseEvent)(mouseEvent);
        return positions;
    });
}
function touchMoveHandler(event, element) {
    this.moveHandler(event, element, function(event) {
        var touchEvent = event, changed = false, positions = (0, _positions.positionsFromTouchEvent)(touchEvent, changed);
        return positions;
    });
}
function mouseMoveHandler(event, element) {
    this.moveHandler(event, element, function(event) {
        var mouseEvent = event, positions = (0, _positions.positionsFromMouseEvent)(mouseEvent);
        return positions;
    });
}
function touchEndHandler(event, element) {
    this.endHandler(event, element, function(event) {
        var touchEvent = event, changed = true, positions = (0, _positions.positionsFromTouchEvent)(touchEvent, changed);
        return positions;
    });
}
function mouseUpHandler(event, element) {
    this.endHandler(event, element, function(event) {
        var mouseEvent = event, positions = (0, _positions.positionsFromMouseEvent)(mouseEvent);
        return positions;
    });
}
function startHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions();
    (0, _positions.filterPositions)(startPositions, positions);
    push(startPositions, positions);
    var startingPositionsLength = startPositions.length;
    if (startingPositionsLength === 1) {
        this.dragStart(event, element);
    // let pressInterval = setTimeout(() => {
    //   pressInterval = null;
    //
    //   this.setPressSInterval(pressInterval);
    //
    //   this.press(event, element);
    // }, PRESS_DELAY);
    //
    // this.setPressSInterval(pressInterval);
    }
    if (startingPositionsLength === 2) {
        this.pinchStart(event, element);
    }
}
function moveHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions();
    (0, _positions.filterPositions)(movingPositions, positions);
    push(movingPositions, positions);
    var positionsMatch = (0, _positions.matchPositions)(startPositions, movingPositions);
    if (positionsMatch) {
        (0, _positions.sortPositions)(movingPositions, startPositions);
        var movingPositionsLength = movingPositions.length;
        if (movingPositionsLength === 1) {
            this.drag(event, element);
        }
        if (movingPositionsLength === 2) {
            this.pinch(event, element);
        }
    }
// let pressInterval = this.getPressSInterval();
//
// if (pressInterval !== null) {
//   clearTimeout(pressInterval);
//
//   pressInterval = null;
//
//   this.setPressSInterval(pressInterval);
// }
}
function endHandler(event, element, positionsFromEvent) {
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), positionsMatch = (0, _positions.matchPositions)(startPositions, movingPositions);
    if (positionsMatch) {
        var startPositionsLength = startPositions.length;
        if (startPositionsLength === 1) {
            this.possibleTap(event, element);
            this.possibleSwipe(event, element);
        }
    }
    (0, _positions.filterPositions)(startPositions, positions);
    (0, _positions.filterPositions)(movingPositions, positions);
// let pressInterval = this.getPressSInterval();
//
// if (pressInterval !== null) {
//   clearTimeout(pressInterval);
//
//   pressInterval = null;
//
//   this.setPressSInterval(pressInterval);
// }
}
function possibleTap(event, element) {
    var startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), time = relativePosition.getTime(), speed = relativePosition.getSpeed();
    if (speed === 0 && time < _constants.MAXIMUM_TAP_TIME) {
        this.tap(event, element);
    }
}
function possibleSwipe(event, element) {
    var startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), direction = relativePosition.getDirection(), speed = relativePosition.getSpeed();
    if (speed > _constants.MINIMUM_SWIPE_SPEED) {
        this.swipe(event, element, speed, direction);
    }
}
function tap(event, element) {
    var _this = this;
    var startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), startPosition = firstStartPosition, top = startPosition.getTop(), left = startPosition.getLeft();
    var tapInterval = this.getTapInterval();
    if (tapInterval !== null) {
        clearTimeout(tapInterval);
        tapInterval = null;
        this.setTapInterval(tapInterval);
        this.doubleTap(event, element, top, left);
        return;
    }
    tapInterval = setTimeout(function() {
        tapInterval = null;
        _this.setTapInterval(tapInterval);
        _this.singleTap(event, element, top, left);
    }, _constants.TAP_DELAY);
    this.setTapInterval(tapInterval);
}
function drag(event, element) {
    var startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), top = relativePosition.getTop(), left = relativePosition.getLeft(), direction = relativePosition.getDirection();
    var customEventType = null;
    if (Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.DRAG_RIGHT_CUSTOM_EVENT_TYPE;
    }
    if (Math.abs(_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.DRAG_UP_CUSTOM_EVENT_TYPE;
    }
    if (Math.abs(-_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.DRAG_DOWN_CUSTOM_EVENT_TYPE;
    }
    if (_constants.PI - Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.DRAG_LEFT_CUSTOM_EVENT_TYPE;
    }
    if (customEventType !== null) {
        this.callCustomHandlers(customEventType, event, element, top, left);
    }
}
function pinch(event, element) {
    var movingPositions = this.getMovingPositions(), firstMovingPosition = first(movingPositions), secondMovingPosition = second(movingPositions), relativeMovingPosition = _relative.default.fromFirstPositionAndSecondPosition(firstMovingPosition, secondMovingPosition), customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, startMagnitude = this.getStartMagnitude(), magnitude = relativeMovingPosition.getMagnitude(), ratio = magnitude / startMagnitude;
    this.callCustomHandlers(customEventType, event, element, ratio);
}
function press(event, element) {
    var customEventType = _customEventTypes.PRESS_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element);
}
function swipe(event, element, speed, direction) {
    var customEventType = null;
    if (Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_RIGHT_CUSTOM_EVENT_TYPE;
        speed = speed * Math.cos(direction);
    }
    if (Math.abs(_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_UP_CUSTOM_EVENT_TYPE;
        speed = speed * Math.sin(direction);
    }
    if (Math.abs(-_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_DOWN_CUSTOM_EVENT_TYPE;
        speed = speed * Math.sin(direction);
    }
    if (_constants.PI - Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_LEFT_CUSTOM_EVENT_TYPE;
        speed = speed * Math.cos(direction);
    }
    if (customEventType !== null) {
        var startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), startPosition = firstStartPosition, top = startPosition.getTop(), left = startPosition.getLeft();
        this.callCustomHandlers(customEventType, event, element, top, left, speed);
    }
}
function singleTap(event, element, top, left) {
    var customEventType = _customEventTypes.SINGLE_TAP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element, top, left); ///
}
function doubleTap(event, element, top, left) {
    var customEventType = _customEventTypes.DOUBLE_TAP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element, top, left);
}
function dragStart(event, element) {
    var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), startPosition = firstStartPosition, top = startPosition.getTop(), left = startPosition.getLeft();
    this.callCustomHandlers(customEventType, event, element, top, left);
}
function pinchStart(event, element) {
    var customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE, startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), secondStartPosition = second(startPositions), relativeStartPosition = _relative.default.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition), magnitude = relativeStartPosition.getMagnitude(), startMagnitude = magnitude; ///
    this.setStartMagnitude(startMagnitude);
    this.callCustomHandlers(customEventType, event, element);
}
var touchMixins = {
    enableTouch: enableTouch,
    disableTouch: disableTouch,
    onTouchStart: onTouchStart,
    offTouchStart: offTouchStart,
    onTouchMove: onTouchMove,
    offTouchMove: offTouchMove,
    onTouchEnd: onTouchEnd,
    offTouchEnd: offTouchEnd,
    onCustomPress: onCustomPress,
    offCustomPress: offCustomPress,
    onCustomDragUp: onCustomDragUp,
    offCustomDragUp: offCustomDragUp,
    onCustomDragDown: onCustomDragDown,
    offCustomDragDown: offCustomDragDown,
    onCustomDragLeft: onCustomDragLeft,
    offCustomDragLeft: offCustomDragLeft,
    onCustomDragRight: onCustomDragRight,
    offCustomDragRight: offCustomDragRight,
    onCustomDragStart: onCustomDragStart,
    offCustomDragStart: offCustomDragStart,
    onCustomSwipeUp: onCustomSwipeUp,
    offCustomSwipeUp: offCustomSwipeUp,
    onCustomSwipeDown: onCustomSwipeDown,
    offCustomSwipeDown: offCustomSwipeDown,
    onCustomSwipeLeft: onCustomSwipeLeft,
    offCustomSwipeLeft: offCustomSwipeLeft,
    onCustomSwipeRight: onCustomSwipeRight,
    offCustomSwipeRight: offCustomSwipeRight,
    onCustomPinchMove: onCustomPinchMove,
    offCustomPinchMove: offCustomPinchMove,
    onCustomPinchStart: onCustomPinchStart,
    offCustomPinchStart: offCustomPinchStart,
    onCustomSingleTap: onCustomSingleTap,
    offCustomSingleTap: offCustomSingleTap,
    onCustomDoubleTap: onCustomDoubleTap,
    offCustomDoubleTap: offCustomDoubleTap,
    getTapInterval: getTapInterval,
    setTapInterval: setTapInterval,
    getPressSInterval: getPressSInterval,
    setPressSInterval: setPressSInterval,
    getStartMagnitude: getStartMagnitude,
    setStartMagnitude: setStartMagnitude,
    getStartPositions: getStartPositions,
    setStartPositions: setStartPositions,
    getMovingPositions: getMovingPositions,
    setMovingPositions: setMovingPositions,
    touchStartHandler: touchStartHandler,
    mouseDownHandler: mouseDownHandler,
    touchMoveHandler: touchMoveHandler,
    mouseMoveHandler: mouseMoveHandler,
    touchEndHandler: touchEndHandler,
    mouseUpHandler: mouseUpHandler,
    startHandler: startHandler,
    moveHandler: moveHandler,
    endHandler: endHandler,
    possibleTap: possibleTap,
    possibleSwipe: possibleSwipe,
    tap: tap,
    drag: drag,
    pinch: pinch,
    press: press,
    swipe: swipe,
    singleTap: singleTap,
    doubleTap: doubleTap,
    dragStart: dragStart,
    pinchStart: pinchStart
};
var _default = touchMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgd2luZG93LCBldmVudFR5cGVzIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBUQVBfREVMQVksIFBSRVNTX0RFTEFZLCBQSV9PVkVSX1RXTywgTUFYSU1VTV9UQVBfVElNRSwgTUlOSU1VTV9TV0lQRV9TUEVFRCwgTUFYSU1VTV9TUFJFQUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzb3J0UG9zaXRpb25zLCBtYXRjaFBvc2l0aW9ucywgZmlsdGVyUG9zaXRpb25zLCBwb3NpdGlvbnNGcm9tTW91c2VFdmVudCwgcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bvc2l0aW9uc1wiO1xuaW1wb3J0IHsgUFJFU1NfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSwgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsIFRPVUNIRU5EX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmZ1bmN0aW9uIGVuYWJsZVRvdWNoKCkge1xuICBjb25zdCB0YXBJbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbnVsbCxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gW107XG5cbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWwsXG4gICAgc3RhcnRNYWduaXR1ZGUsXG4gICAgc3RhcnRQb3NpdGlvbnMsXG4gICAgbW92aW5nUG9zaXRpb25zXG4gIH0pO1xuXG4gIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vbk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vblRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZVRvdWNoKCkge1xuICB0aGlzLm9mZk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vZmZNb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub2ZmVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hTdGFydCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSFNUQVJUX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZUb3VjaFN0YXJ0KHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZFdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoTW92ZSh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlRvdWNoTW92ZSh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZFdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoRW5kKHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNIRU5EX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZUb3VjaEVuZCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSEVORF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9mZkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUHJlc3MocHJlc3NDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBSRVNTX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcHJlc3NDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUHJlc3MocHJlc3NDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBSRVNTX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcHJlc3NDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1VwKGRyYWdVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnVXAoZHJhZ1VwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1VwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdEb3duKGRyYWdEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnRG93bihkcmFnRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0Rvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ0xlZnQoZHJhZ0xlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdMZWZ0KGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnUmlnaHQoZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdSaWdodChkcmFnUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnU3RhcnQoZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVEb3duKHN3aXBlRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlTGVmdChzd2lwZUxlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZUxlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaE1vdmUocGluY2hNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVNpbmdsZVRhcChzaW5nbGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzaW5nbGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU2luZ2xlVGFwKHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHNpbmdsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Eb3VibGVUYXAoZG91YmxlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZG91YmxlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURvdWJsZVRhcChkb3VibGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkb3VibGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhcEludGVydmFsKCkge1xuICBjb25zdCB7IHRhcEludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHRhcEludGVydmFsO1xufVxuXG5mdW5jdGlvbiBzZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICB0YXBJbnRlcnZhbFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJlc3NTSW50ZXJ2YWwoKSB7XG4gIGNvbnN0IHsgcHJlc3NJbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBwcmVzc0ludGVydmFsO1xufVxuXG5mdW5jdGlvbiBzZXRQcmVzc1NJbnRlcnZhbChwcmVzc0ludGVydmFsKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHByZXNzSW50ZXJ2YWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0TWFnbml0dWRlKCkge1xuICBjb25zdCB7IHN0YXJ0TWFnbml0dWRlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0TWFnbml0dWRlO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydE1hZ25pdHVkZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IHsgc3RhcnRQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhcnRQb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0UG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0UG9zaXRpb25zXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRNb3ZpbmdQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IHsgbW92aW5nUG9zaXRpb25zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIG1vdmluZ1Bvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0TW92aW5nUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucykge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBtb3ZpbmdQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoU3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5tb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoRW5kSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IHRydWUsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5lbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIHRoaXMuZHJhZ1N0YXJ0KGV2ZW50LCBlbGVtZW50KTtcblxuICAgIC8vIGxldCBwcmVzc0ludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICBwcmVzc0ludGVydmFsID0gbnVsbDtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5zZXRQcmVzc1NJbnRlcnZhbChwcmVzc0ludGVydmFsKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5wcmVzcyhldmVudCwgZWxlbWVudCk7XG4gICAgLy8gfSwgUFJFU1NfREVMQVkpO1xuICAgIC8vXG4gICAgLy8gdGhpcy5zZXRQcmVzc1NJbnRlcnZhbChwcmVzc0ludGVydmFsKTtcbiAgfVxuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgIHRoaXMucGluY2hTdGFydChldmVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKTtcblxuICBmaWx0ZXJQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIHB1c2gobW92aW5nUG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGNvbnN0IHBvc2l0aW9uc01hdGNoID0gbWF0Y2hQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIG1vdmluZ1Bvc2l0aW9ucyk7XG5cbiAgaWYgKHBvc2l0aW9uc01hdGNoKSB7XG4gICAgc29ydFBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHN0YXJ0UG9zaXRpb25zKTtcblxuICAgIGNvbnN0IG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9IG1vdmluZ1Bvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobW92aW5nUG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmRyYWcoZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMucGluY2goZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxldCBwcmVzc0ludGVydmFsID0gdGhpcy5nZXRQcmVzc1NJbnRlcnZhbCgpO1xuICAvL1xuICAvLyBpZiAocHJlc3NJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAvLyAgIGNsZWFyVGltZW91dChwcmVzc0ludGVydmFsKTtcbiAgLy9cbiAgLy8gICBwcmVzc0ludGVydmFsID0gbnVsbDtcbiAgLy9cbiAgLy8gICB0aGlzLnNldFByZXNzU0ludGVydmFsKHByZXNzSW50ZXJ2YWwpO1xuICAvLyB9XG59XG5cbmZ1bmN0aW9uIGVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5wb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIHRoaXMucG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgLy8gbGV0IHByZXNzSW50ZXJ2YWwgPSB0aGlzLmdldFByZXNzU0ludGVydmFsKCk7XG4gIC8vXG4gIC8vIGlmIChwcmVzc0ludGVydmFsICE9PSBudWxsKSB7XG4gIC8vICAgY2xlYXJUaW1lb3V0KHByZXNzSW50ZXJ2YWwpO1xuICAvL1xuICAvLyAgIHByZXNzSW50ZXJ2YWwgPSBudWxsO1xuICAvL1xuICAvLyAgIHRoaXMuc2V0UHJlc3NTSW50ZXJ2YWwocHJlc3NJbnRlcnZhbCk7XG4gIC8vIH1cbn1cblxuZnVuY3Rpb24gcG9zc2libGVUYXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgdGltZSA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VGltZSgpLFxuICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKTtcblxuICBpZiAoKHNwZWVkID09PSAwKSAmJiAodGltZSA8IE1BWElNVU1fVEFQX1RJTUUpKXtcbiAgICB0aGlzLnRhcChldmVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpLFxuICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKTtcblxuICBpZiAoc3BlZWQgPiBNSU5JTVVNX1NXSVBFX1NQRUVEKSB7XG4gICAgdGhpcy5zd2lwZShldmVudCwgZWxlbWVudCwgc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gc3RhcnRQb3NpdGlvbi5nZXRMZWZ0KCk7XG5cbiAgbGV0IHRhcEludGVydmFsID0gdGhpcy5nZXRUYXBJbnRlcnZhbCgpO1xuXG4gIGlmICh0YXBJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgIGNsZWFyVGltZW91dCh0YXBJbnRlcnZhbCk7XG5cbiAgICB0YXBJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRhcEludGVydmFsKHRhcEludGVydmFsKTtcblxuICAgIHRoaXMuZG91YmxlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGFwSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YXBJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRhcEludGVydmFsKHRhcEludGVydmFsKTtcblxuICAgIHRoaXMuc2luZ2xlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuICB9LCBUQVBfREVMQVkpO1xuXG4gIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xufVxuXG5mdW5jdGlvbiBkcmFnKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIHRvcCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldExlZnQoKSxcbiAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKTtcblxuICBsZXQgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICBpZiAoKE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKFBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicygtUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoKFBJIC0gTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChjdXN0b21FdmVudFR5cGUgIT09IG51bGwpIHtcbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBpbmNoKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBzZWNvbmRNb3ZpbmdQb3NpdGlvbiA9IHNlY29uZChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0TW92aW5nUG9zaXRpb24sIHNlY29uZE1vdmluZ1Bvc2l0aW9uKSxcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRNYWduaXR1ZGUgPSB0aGlzLmdldFN0YXJ0TWFnbml0dWRlKCksXG4gICAgICAgIG1hZ25pdHVkZSA9IHJlbGF0aXZlTW92aW5nUG9zaXRpb24uZ2V0TWFnbml0dWRlKCksXG4gICAgICAgIHJhdGlvID0gbWFnbml0dWRlIC8gc3RhcnRNYWduaXR1ZGU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcmF0aW8pO1xufVxuXG5mdW5jdGlvbiBwcmVzcyhldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQUkVTU19DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc3dpcGUoZXZlbnQsIGVsZW1lbnQsIHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGN1c3RvbUV2ZW50VHlwZSA9IG51bGw7XG5cbiAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5jb3MoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguc2luKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoLVBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguY29zKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2luZ2xlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpOyAvLy9cbn1cblxuZnVuY3Rpb24gZG91YmxlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xufVxuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgIC8vL1xuICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gc3RhcnRQb3NpdGlvbi5nZXRMZWZ0KCk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbn1cblxuZnVuY3Rpb24gcGluY2hTdGFydChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc2Vjb25kU3RhcnRQb3NpdGlvbiA9IHNlY29uZChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHJlbGF0aXZlU3RhcnRQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFN0YXJ0UG9zaXRpb24sIHNlY29uZFN0YXJ0UG9zaXRpb24pLFxuICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZVN0YXJ0UG9zaXRpb24uZ2V0TWFnbml0dWRlKCksXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbWFnbml0dWRlOyAvLy9cblxuICB0aGlzLnNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbn1cblxuY29uc3QgdG91Y2hNaXhpbnMgPSB7XG4gIGVuYWJsZVRvdWNoLFxuICBkaXNhYmxlVG91Y2gsXG4gIG9uVG91Y2hTdGFydCxcbiAgb2ZmVG91Y2hTdGFydCxcbiAgb25Ub3VjaE1vdmUsXG4gIG9mZlRvdWNoTW92ZSxcbiAgb25Ub3VjaEVuZCxcbiAgb2ZmVG91Y2hFbmQsXG4gIG9uQ3VzdG9tUHJlc3MsXG4gIG9mZkN1c3RvbVByZXNzLFxuICBvbkN1c3RvbURyYWdVcCxcbiAgb2ZmQ3VzdG9tRHJhZ1VwLFxuICBvbkN1c3RvbURyYWdEb3duLFxuICBvZmZDdXN0b21EcmFnRG93bixcbiAgb25DdXN0b21EcmFnTGVmdCxcbiAgb2ZmQ3VzdG9tRHJhZ0xlZnQsXG4gIG9uQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvZmZDdXN0b21EcmFnUmlnaHQsXG4gIG9uQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvZmZDdXN0b21EcmFnU3RhcnQsXG4gIG9uQ3VzdG9tU3dpcGVVcCxcbiAgb2ZmQ3VzdG9tU3dpcGVVcCxcbiAgb25DdXN0b21Td2lwZURvd24sXG4gIG9mZkN1c3RvbVN3aXBlRG93bixcbiAgb25DdXN0b21Td2lwZUxlZnQsXG4gIG9mZkN1c3RvbVN3aXBlTGVmdCxcbiAgb25DdXN0b21Td2lwZVJpZ2h0LFxuICBvZmZDdXN0b21Td2lwZVJpZ2h0LFxuICBvbkN1c3RvbVBpbmNoTW92ZSxcbiAgb2ZmQ3VzdG9tUGluY2hNb3ZlLFxuICBvbkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9mZkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9uQ3VzdG9tU2luZ2xlVGFwLFxuICBvZmZDdXN0b21TaW5nbGVUYXAsXG4gIG9uQ3VzdG9tRG91YmxlVGFwLFxuICBvZmZDdXN0b21Eb3VibGVUYXAsXG4gIGdldFRhcEludGVydmFsLFxuICBzZXRUYXBJbnRlcnZhbCxcbiAgZ2V0UHJlc3NTSW50ZXJ2YWwsXG4gIHNldFByZXNzU0ludGVydmFsLFxuICBnZXRTdGFydE1hZ25pdHVkZSxcbiAgc2V0U3RhcnRNYWduaXR1ZGUsXG4gIGdldFN0YXJ0UG9zaXRpb25zLFxuICBzZXRTdGFydFBvc2l0aW9ucyxcbiAgZ2V0TW92aW5nUG9zaXRpb25zLFxuICBzZXRNb3ZpbmdQb3NpdGlvbnMsXG4gIHRvdWNoU3RhcnRIYW5kbGVyLFxuICBtb3VzZURvd25IYW5kbGVyLFxuICB0b3VjaE1vdmVIYW5kbGVyLFxuICBtb3VzZU1vdmVIYW5kbGVyLFxuICB0b3VjaEVuZEhhbmRsZXIsXG4gIG1vdXNlVXBIYW5kbGVyLFxuICBzdGFydEhhbmRsZXIsXG4gIG1vdmVIYW5kbGVyLFxuICBlbmRIYW5kbGVyLFxuICBwb3NzaWJsZVRhcCxcbiAgcG9zc2libGVTd2lwZSxcbiAgdGFwLFxuICBkcmFnLFxuICBwaW5jaCxcbiAgcHJlc3MsXG4gIHN3aXBlLFxuICBzaW5nbGVUYXAsXG4gIGRvdWJsZVRhcCxcbiAgZHJhZ1N0YXJ0LFxuICBwaW5jaFN0YXJ0XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b3VjaE1peGlucztcbiJdLCJuYW1lcyI6WyJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsIlRPVUNIU1RBUlRfRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJUT1VDSE1PVkVfRVZFTlRfVFlQRSIsIlRPVUNIRU5EX0VWRU5UX1RZUEUiLCJlbmFibGVUb3VjaCIsInRhcEludGVydmFsIiwic3RhcnRNYWduaXR1ZGUiLCJzdGFydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9ucyIsInVwZGF0ZVN0YXRlIiwib25Nb3VzZURvd24iLCJtb3VzZURvd25IYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwid2luZG93Iiwib25Nb3VzZVVwIiwibW91c2VVcEhhbmRsZXIiLCJvblRvdWNoU3RhcnQiLCJ0b3VjaFN0YXJ0SGFuZGxlciIsIm9uVG91Y2hNb3ZlIiwidG91Y2hNb3ZlSGFuZGxlciIsIm9uVG91Y2hFbmQiLCJ0b3VjaEVuZEhhbmRsZXIiLCJkaXNhYmxlVG91Y2giLCJvZmZNb3VzZURvd24iLCJvZmZNb3VzZU1vdmUiLCJvZmZNb3VzZVVwIiwib2ZmVG91Y2hTdGFydCIsIm9mZlRvdWNoTW92ZSIsIm9mZlRvdWNoRW5kIiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsIm9uRXZlbnQiLCJvZmZFdmVudCIsIm9uQ3VzdG9tUHJlc3MiLCJwcmVzc0N1c3RvbUhhbmRsZXIiLCJlbGVtZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiUFJFU1NfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjdXN0b21IYW5kbGVyIiwib25DdXN0b21FdmVudCIsIm9mZkN1c3RvbVByZXNzIiwib2ZmQ3VzdG9tRXZlbnQiLCJvbkN1c3RvbURyYWdVcCIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsIkRSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnTGVmdCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsIkRSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdMZWZ0Iiwib25DdXN0b21EcmFnUmlnaHQiLCJkcmFnUmlnaHRDdXN0b21IYW5kbGVyIiwiRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdSaWdodCIsIm9uQ3VzdG9tRHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsIkRSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsIlNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbVNpbmdsZVRhcCIsInNpbmdsZVRhcEN1c3RvbUhhbmRsZXIiLCJTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU2luZ2xlVGFwIiwib25DdXN0b21Eb3VibGVUYXAiLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwiRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURvdWJsZVRhcCIsImdldFRhcEludGVydmFsIiwiZ2V0U3RhdGUiLCJzZXRUYXBJbnRlcnZhbCIsImdldFByZXNzU0ludGVydmFsIiwicHJlc3NJbnRlcnZhbCIsInNldFByZXNzU0ludGVydmFsIiwiZ2V0U3RhcnRNYWduaXR1ZGUiLCJzZXRTdGFydE1hZ25pdHVkZSIsImdldFN0YXJ0UG9zaXRpb25zIiwic2V0U3RhcnRQb3NpdGlvbnMiLCJnZXRNb3ZpbmdQb3NpdGlvbnMiLCJzZXRNb3ZpbmdQb3NpdGlvbnMiLCJldmVudCIsInN0YXJ0SGFuZGxlciIsInRvdWNoRXZlbnQiLCJjaGFuZ2VkIiwicG9zaXRpb25zIiwicG9zaXRpb25zRnJvbVRvdWNoRXZlbnQiLCJtb3VzZUV2ZW50IiwicG9zaXRpb25zRnJvbU1vdXNlRXZlbnQiLCJtb3ZlSGFuZGxlciIsImVuZEhhbmRsZXIiLCJwb3NpdGlvbnNGcm9tRXZlbnQiLCJmaWx0ZXJQb3NpdGlvbnMiLCJzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsImRyYWdTdGFydCIsInBpbmNoU3RhcnQiLCJwb3NpdGlvbnNNYXRjaCIsIm1hdGNoUG9zaXRpb25zIiwic29ydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9uc0xlbmd0aCIsImRyYWciLCJwaW5jaCIsInN0YXJ0UG9zaXRpb25zTGVuZ3RoIiwicG9zc2libGVUYXAiLCJwb3NzaWJsZVN3aXBlIiwiZmlyc3RTdGFydFBvc2l0aW9uIiwiZmlyc3RNb3ZpbmdQb3NpdGlvbiIsImZpcnN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInJlbGF0aXZlUG9zaXRpb24iLCJSZWxhdGl2ZVBvc2l0aW9uIiwiZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbiIsInRpbWUiLCJnZXRUaW1lIiwic3BlZWQiLCJnZXRTcGVlZCIsIk1BWElNVU1fVEFQX1RJTUUiLCJ0YXAiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJNSU5JTVVNX1NXSVBFX1NQRUVEIiwic3dpcGUiLCJzdGFydFBvc2l0aW9uIiwidG9wIiwiZ2V0VG9wIiwibGVmdCIsImdldExlZnQiLCJjbGVhclRpbWVvdXQiLCJkb3VibGVUYXAiLCJzZXRUaW1lb3V0Iiwic2luZ2xlVGFwIiwiVEFQX0RFTEFZIiwiTWF0aCIsImFicyIsIk1BWElNVU1fU1BSRUFEIiwiUElfT1ZFUl9UV08iLCJQSSIsImNhbGxDdXN0b21IYW5kbGVycyIsInNlY29uZE1vdmluZ1Bvc2l0aW9uIiwicmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiIsIm1hZ25pdHVkZSIsImdldE1hZ25pdHVkZSIsInJhdGlvIiwicHJlc3MiLCJjb3MiLCJzaW4iLCJzZWNvbmRTdGFydFBvc2l0aW9uIiwicmVsYXRpdmVTdGFydFBvc2l0aW9uIiwidG91Y2hNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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