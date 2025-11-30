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
var _easy = require("easy");
var _necessary = require("necessary");
var _relative = /*#__PURE__*/ _interop_require_default(require("../position/relative"));
var _constants = require("../constants");
var _positions = require("../utilities/positions");
var _customEventTypes = require("../customEventTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
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
function getPressSInterval() {
    var pressInterval = this.getState().pressInterval;
    return pressInterval;
}
function getStartMagnitude() {
    var startMagnitude = this.getState().startMagnitude;
    return startMagnitude;
}
function getStartPositions() {
    var startPositions = this.getState().startPositions;
    return startPositions;
}
function getMovingPositions() {
    var movingPositions = this.getState().movingPositions;
    return movingPositions;
}
function setTapInterval(tapInterval) {
    this.updateState({
        tapInterval: tapInterval
    });
}
function setPressSInterval(pressInterval) {
    this.updateState({
        pressInterval: pressInterval
    });
}
function setStartMagnitude(startMagnitude) {
    this.updateState({
        startMagnitude: startMagnitude
    });
}
function setStartPositions(startPositions) {
    this.updateState({
        startPositions: startPositions
    });
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
    var _this = this;
    var positions = positionsFromEvent(event), startPositions = this.getStartPositions();
    (0, _positions.filterPositions)(startPositions, positions);
    push(startPositions, positions);
    var startingPositionsLength = startPositions.length;
    if (startingPositionsLength === 1) {
        this.dragStart(event, element);
        var pressInterval = setTimeout(function() {
            pressInterval = null;
            _this.setPressSInterval(pressInterval);
            _this.press(event, element);
        }, _constants.PRESS_DELAY);
        this.setPressSInterval(pressInterval);
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
    var pressInterval = this.getPressSInterval();
    if (pressInterval !== null) {
        clearTimeout(pressInterval);
        pressInterval = null;
        this.setPressSInterval(pressInterval);
    }
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
    var pressInterval = this.getPressSInterval();
    if (pressInterval !== null) {
        clearTimeout(pressInterval);
        pressInterval = null;
        this.setPressSInterval(pressInterval);
    }
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
        speed = speed * Math.abs(Math.cos(direction));
    }
    if (Math.abs(_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_UP_CUSTOM_EVENT_TYPE;
        speed = speed * Math.abs(Math.sin(direction));
    }
    if (Math.abs(-_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_DOWN_CUSTOM_EVENT_TYPE;
        speed = speed * Math.abs(Math.sin(direction));
    }
    if (_constants.PI - Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_LEFT_CUSTOM_EVENT_TYPE;
        speed = speed * Math.abs(Math.cos(direction));
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
    getPressSInterval: getPressSInterval,
    getStartMagnitude: getStartMagnitude,
    getStartPositions: getStartPositions,
    getMovingPositions: getMovingPositions,
    setTapInterval: setTapInterval,
    setPressSInterval: setPressSInterval,
    setStartMagnitude: setStartMagnitude,
    setStartPositions: setStartPositions,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBUQVBfREVMQVksIFBSRVNTX0RFTEFZLCBQSV9PVkVSX1RXTywgTUFYSU1VTV9UQVBfVElNRSwgTUlOSU1VTV9TV0lQRV9TUEVFRCwgTUFYSU1VTV9TUFJFQUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzb3J0UG9zaXRpb25zLCBtYXRjaFBvc2l0aW9ucywgZmlsdGVyUG9zaXRpb25zLCBwb3NpdGlvbnNGcm9tTW91c2VFdmVudCwgcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bvc2l0aW9uc1wiO1xuaW1wb3J0IHsgUFJFU1NfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGVuYWJsZVRvdWNoKCkge1xuICBjb25zdCB0YXBJbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbnVsbCxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gW107XG5cbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWwsXG4gICAgc3RhcnRNYWduaXR1ZGUsXG4gICAgc3RhcnRQb3NpdGlvbnMsXG4gICAgbW92aW5nUG9zaXRpb25zXG4gIH0pO1xuXG4gIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vbk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vblRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZVRvdWNoKCkge1xuICB0aGlzLm9mZk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vZmZNb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub2ZmVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUHJlc3MocHJlc3NDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBSRVNTX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcHJlc3NDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUHJlc3MocHJlc3NDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBSRVNTX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcHJlc3NDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1VwKGRyYWdVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnVXAoZHJhZ1VwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1VwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdEb3duKGRyYWdEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnRG93bihkcmFnRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0Rvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ0xlZnQoZHJhZ0xlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdMZWZ0KGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnUmlnaHQoZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdSaWdodChkcmFnUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnU3RhcnQoZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVEb3duKHN3aXBlRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlTGVmdChzd2lwZUxlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZUxlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaE1vdmUocGluY2hNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVNpbmdsZVRhcChzaW5nbGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzaW5nbGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU2luZ2xlVGFwKHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHNpbmdsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Eb3VibGVUYXAoZG91YmxlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZG91YmxlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURvdWJsZVRhcChkb3VibGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkb3VibGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhcEludGVydmFsKCkge1xuICBjb25zdCB7IHRhcEludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHRhcEludGVydmFsO1xufVxuXG5mdW5jdGlvbiBnZXRQcmVzc1NJbnRlcnZhbCgpIHtcbiAgY29uc3QgeyBwcmVzc0ludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHByZXNzSW50ZXJ2YWw7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0TWFnbml0dWRlKCkge1xuICBjb25zdCB7IHN0YXJ0TWFnbml0dWRlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0TWFnbml0dWRlO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydFBvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBzdGFydFBvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydFBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gZ2V0TW92aW5nUG9zaXRpb25zKCkge1xuICBjb25zdCB7IG1vdmluZ1Bvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBtb3ZpbmdQb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHNldFRhcEludGVydmFsKHRhcEludGVydmFsKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHRhcEludGVydmFsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRQcmVzc1NJbnRlcnZhbChwcmVzc0ludGVydmFsKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHByZXNzSW50ZXJ2YWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0TWFnbml0dWRlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucykge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydFBvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0TW92aW5nUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucykge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBtb3ZpbmdQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoU3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5tb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoRW5kSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IHRydWUsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5lbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIHRoaXMuZHJhZ1N0YXJ0KGV2ZW50LCBlbGVtZW50KTtcblxuICAgIGxldCBwcmVzc0ludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwcmVzc0ludGVydmFsID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRQcmVzc1NJbnRlcnZhbChwcmVzc0ludGVydmFsKTtcblxuICAgICAgdGhpcy5wcmVzcyhldmVudCwgZWxlbWVudCk7XG4gICAgfSwgUFJFU1NfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRQcmVzc1NJbnRlcnZhbChwcmVzc0ludGVydmFsKTtcbiAgfVxuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgIHRoaXMucGluY2hTdGFydChldmVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKTtcblxuICBmaWx0ZXJQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIHB1c2gobW92aW5nUG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGNvbnN0IHBvc2l0aW9uc01hdGNoID0gbWF0Y2hQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIG1vdmluZ1Bvc2l0aW9ucyk7XG5cbiAgaWYgKHBvc2l0aW9uc01hdGNoKSB7XG4gICAgc29ydFBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHN0YXJ0UG9zaXRpb25zKTtcblxuICAgIGNvbnN0IG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9IG1vdmluZ1Bvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobW92aW5nUG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmRyYWcoZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMucGluY2goZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBwcmVzc0ludGVydmFsID0gdGhpcy5nZXRQcmVzc1NJbnRlcnZhbCgpO1xuXG4gIGlmIChwcmVzc0ludGVydmFsICE9PSBudWxsKSB7XG4gICAgY2xlYXJUaW1lb3V0KHByZXNzSW50ZXJ2YWwpO1xuXG4gICAgcHJlc3NJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFByZXNzU0ludGVydmFsKHByZXNzSW50ZXJ2YWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5wb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIHRoaXMucG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgbGV0IHByZXNzSW50ZXJ2YWwgPSB0aGlzLmdldFByZXNzU0ludGVydmFsKCk7XG5cbiAgaWYgKHByZXNzSW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICBjbGVhclRpbWVvdXQocHJlc3NJbnRlcnZhbCk7XG5cbiAgICBwcmVzc0ludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0UHJlc3NTSW50ZXJ2YWwocHJlc3NJbnRlcnZhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zc2libGVUYXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgdGltZSA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VGltZSgpLFxuICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKTtcblxuICBpZiAoKHNwZWVkID09PSAwKSAmJiAodGltZSA8IE1BWElNVU1fVEFQX1RJTUUpKXtcbiAgICB0aGlzLnRhcChldmVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpLFxuICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKTtcblxuICBpZiAoc3BlZWQgPiBNSU5JTVVNX1NXSVBFX1NQRUVEKSB7XG4gICAgdGhpcy5zd2lwZShldmVudCwgZWxlbWVudCwgc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gc3RhcnRQb3NpdGlvbi5nZXRMZWZ0KCk7XG5cbiAgbGV0IHRhcEludGVydmFsID0gdGhpcy5nZXRUYXBJbnRlcnZhbCgpO1xuXG4gIGlmICh0YXBJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgIGNsZWFyVGltZW91dCh0YXBJbnRlcnZhbCk7XG5cbiAgICB0YXBJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRhcEludGVydmFsKHRhcEludGVydmFsKTtcblxuICAgIHRoaXMuZG91YmxlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGFwSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YXBJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRhcEludGVydmFsKHRhcEludGVydmFsKTtcblxuICAgIHRoaXMuc2luZ2xlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuICB9LCBUQVBfREVMQVkpO1xuXG4gIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xufVxuXG5mdW5jdGlvbiBkcmFnKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIHRvcCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldExlZnQoKSxcbiAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKTtcblxuICBsZXQgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICBpZiAoKE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKFBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicygtUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoKFBJIC0gTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChjdXN0b21FdmVudFR5cGUgIT09IG51bGwpIHtcbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBpbmNoKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBzZWNvbmRNb3ZpbmdQb3NpdGlvbiA9IHNlY29uZChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0TW92aW5nUG9zaXRpb24sIHNlY29uZE1vdmluZ1Bvc2l0aW9uKSxcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRNYWduaXR1ZGUgPSB0aGlzLmdldFN0YXJ0TWFnbml0dWRlKCksXG4gICAgICAgIG1hZ25pdHVkZSA9IHJlbGF0aXZlTW92aW5nUG9zaXRpb24uZ2V0TWFnbml0dWRlKCksXG4gICAgICAgIHJhdGlvID0gbWFnbml0dWRlIC8gc3RhcnRNYWduaXR1ZGU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcmF0aW8pO1xufVxuXG5mdW5jdGlvbiBwcmVzcyhldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQUkVTU19DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc3dpcGUoZXZlbnQsIGVsZW1lbnQsIHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGN1c3RvbUV2ZW50VHlwZSA9IG51bGw7XG5cbiAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5hYnMoTWF0aC5jb3MoZGlyZWN0aW9uKSk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLmFicyhNYXRoLnNpbihkaXJlY3Rpb24pKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicygtUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguYWJzKE1hdGguc2luKGRpcmVjdGlvbikpO1xuICB9XG5cbiAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguYWJzKE1hdGguY29zKGRpcmVjdGlvbikpO1xuICB9XG5cbiAgaWYgKGN1c3RvbUV2ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNpbmdsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTsgLy8vXG59XG5cbmZ1bmN0aW9uIGRvdWJsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbn1cblxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sICAvLy9cbiAgICAgICAgdG9wID0gc3RhcnRQb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG59XG5cbmZ1bmN0aW9uIHBpbmNoU3RhcnQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHNlY29uZFN0YXJ0UG9zaXRpb24gPSBzZWNvbmQoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICByZWxhdGl2ZVN0YXJ0UG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RTdGFydFBvc2l0aW9uLCBzZWNvbmRTdGFydFBvc2l0aW9uKSxcbiAgICAgICAgbWFnbml0dWRlID0gcmVsYXRpdmVTdGFydFBvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IG1hZ25pdHVkZTsgLy8vXG5cbiAgdGhpcy5zZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG59XG5cbmNvbnN0IHRvdWNoTWl4aW5zID0ge1xuICBlbmFibGVUb3VjaCxcbiAgZGlzYWJsZVRvdWNoLFxuICBvbkN1c3RvbVByZXNzLFxuICBvZmZDdXN0b21QcmVzcyxcbiAgb25DdXN0b21EcmFnVXAsXG4gIG9mZkN1c3RvbURyYWdVcCxcbiAgb25DdXN0b21EcmFnRG93bixcbiAgb2ZmQ3VzdG9tRHJhZ0Rvd24sXG4gIG9uQ3VzdG9tRHJhZ0xlZnQsXG4gIG9mZkN1c3RvbURyYWdMZWZ0LFxuICBvbkN1c3RvbURyYWdSaWdodCxcbiAgb2ZmQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvbkN1c3RvbURyYWdTdGFydCxcbiAgb2ZmQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvbkN1c3RvbVN3aXBlVXAsXG4gIG9mZkN1c3RvbVN3aXBlVXAsXG4gIG9uQ3VzdG9tU3dpcGVEb3duLFxuICBvZmZDdXN0b21Td2lwZURvd24sXG4gIG9uQ3VzdG9tU3dpcGVMZWZ0LFxuICBvZmZDdXN0b21Td2lwZUxlZnQsXG4gIG9uQ3VzdG9tU3dpcGVSaWdodCxcbiAgb2ZmQ3VzdG9tU3dpcGVSaWdodCxcbiAgb25DdXN0b21QaW5jaE1vdmUsXG4gIG9mZkN1c3RvbVBpbmNoTW92ZSxcbiAgb25DdXN0b21QaW5jaFN0YXJ0LFxuICBvZmZDdXN0b21QaW5jaFN0YXJ0LFxuICBvbkN1c3RvbVNpbmdsZVRhcCxcbiAgb2ZmQ3VzdG9tU2luZ2xlVGFwLFxuICBvbkN1c3RvbURvdWJsZVRhcCxcbiAgb2ZmQ3VzdG9tRG91YmxlVGFwLFxuICBnZXRUYXBJbnRlcnZhbCxcbiAgZ2V0UHJlc3NTSW50ZXJ2YWwsXG4gIGdldFN0YXJ0TWFnbml0dWRlLFxuICBnZXRTdGFydFBvc2l0aW9ucyxcbiAgZ2V0TW92aW5nUG9zaXRpb25zLFxuICBzZXRUYXBJbnRlcnZhbCxcbiAgc2V0UHJlc3NTSW50ZXJ2YWwsXG4gIHNldFN0YXJ0TWFnbml0dWRlLFxuICBzZXRTdGFydFBvc2l0aW9ucyxcbiAgc2V0TW92aW5nUG9zaXRpb25zLFxuICB0b3VjaFN0YXJ0SGFuZGxlcixcbiAgbW91c2VEb3duSGFuZGxlcixcbiAgdG91Y2hNb3ZlSGFuZGxlcixcbiAgbW91c2VNb3ZlSGFuZGxlcixcbiAgdG91Y2hFbmRIYW5kbGVyLFxuICBtb3VzZVVwSGFuZGxlcixcbiAgc3RhcnRIYW5kbGVyLFxuICBtb3ZlSGFuZGxlcixcbiAgZW5kSGFuZGxlcixcbiAgcG9zc2libGVUYXAsXG4gIHBvc3NpYmxlU3dpcGUsXG4gIHRhcCxcbiAgZHJhZyxcbiAgcGluY2gsXG4gIHByZXNzLFxuICBzd2lwZSxcbiAgc2luZ2xlVGFwLFxuICBkb3VibGVUYXAsXG4gIGRyYWdTdGFydCxcbiAgcGluY2hTdGFydFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG91Y2hNaXhpbnM7XG4iXSwibmFtZXMiOlsicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJzZWNvbmQiLCJlbmFibGVUb3VjaCIsInRhcEludGVydmFsIiwic3RhcnRNYWduaXR1ZGUiLCJzdGFydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9ucyIsInVwZGF0ZVN0YXRlIiwib25Nb3VzZURvd24iLCJtb3VzZURvd25IYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwid2luZG93Iiwib25Nb3VzZVVwIiwibW91c2VVcEhhbmRsZXIiLCJvblRvdWNoU3RhcnQiLCJ0b3VjaFN0YXJ0SGFuZGxlciIsIm9uVG91Y2hNb3ZlIiwidG91Y2hNb3ZlSGFuZGxlciIsIm9uVG91Y2hFbmQiLCJ0b3VjaEVuZEhhbmRsZXIiLCJkaXNhYmxlVG91Y2giLCJvZmZNb3VzZURvd24iLCJvZmZNb3VzZU1vdmUiLCJvZmZNb3VzZVVwIiwib2ZmVG91Y2hTdGFydCIsIm9mZlRvdWNoTW92ZSIsIm9mZlRvdWNoRW5kIiwib25DdXN0b21QcmVzcyIsInByZXNzQ3VzdG9tSGFuZGxlciIsImVsZW1lbnQiLCJjdXN0b21FdmVudFR5cGUiLCJQUkVTU19DVVNUT01fRVZFTlRfVFlQRSIsImN1c3RvbUhhbmRsZXIiLCJvbkN1c3RvbUV2ZW50Iiwib2ZmQ3VzdG9tUHJlc3MiLCJvZmZDdXN0b21FdmVudCIsIm9uQ3VzdG9tRHJhZ1VwIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsIkRSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnVXAiLCJvbkN1c3RvbURyYWdEb3duIiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdMZWZ0IiwiZHJhZ0xlZnRDdXN0b21IYW5kbGVyIiwiRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ0xlZnQiLCJvbkN1c3RvbURyYWdSaWdodCIsImRyYWdSaWdodEN1c3RvbUhhbmRsZXIiLCJEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ1JpZ2h0Iiwib25DdXN0b21EcmFnU3RhcnQiLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwiRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVVcCIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwiU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsIlNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsIlNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsIlBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsIlBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsIlNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvbkN1c3RvbURvdWJsZVRhcCIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwiZ2V0VGFwSW50ZXJ2YWwiLCJnZXRTdGF0ZSIsImdldFByZXNzU0ludGVydmFsIiwicHJlc3NJbnRlcnZhbCIsImdldFN0YXJ0TWFnbml0dWRlIiwiZ2V0U3RhcnRQb3NpdGlvbnMiLCJnZXRNb3ZpbmdQb3NpdGlvbnMiLCJzZXRUYXBJbnRlcnZhbCIsInNldFByZXNzU0ludGVydmFsIiwic2V0U3RhcnRNYWduaXR1ZGUiLCJzZXRTdGFydFBvc2l0aW9ucyIsInNldE1vdmluZ1Bvc2l0aW9ucyIsImV2ZW50Iiwic3RhcnRIYW5kbGVyIiwidG91Y2hFdmVudCIsImNoYW5nZWQiLCJwb3NpdGlvbnMiLCJwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCIsIm1vdXNlRXZlbnQiLCJwb3NpdGlvbnNGcm9tTW91c2VFdmVudCIsIm1vdmVIYW5kbGVyIiwiZW5kSGFuZGxlciIsInBvc2l0aW9uc0Zyb21FdmVudCIsImZpbHRlclBvc2l0aW9ucyIsInN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZHJhZ1N0YXJ0Iiwic2V0VGltZW91dCIsInByZXNzIiwiUFJFU1NfREVMQVkiLCJwaW5jaFN0YXJ0IiwicG9zaXRpb25zTWF0Y2giLCJtYXRjaFBvc2l0aW9ucyIsInNvcnRQb3NpdGlvbnMiLCJtb3ZpbmdQb3NpdGlvbnNMZW5ndGgiLCJkcmFnIiwicGluY2giLCJjbGVhclRpbWVvdXQiLCJzdGFydFBvc2l0aW9uc0xlbmd0aCIsInBvc3NpYmxlVGFwIiwicG9zc2libGVTd2lwZSIsImZpcnN0U3RhcnRQb3NpdGlvbiIsImZpcnN0TW92aW5nUG9zaXRpb24iLCJmaXJzdFBvc2l0aW9uIiwic2Vjb25kUG9zaXRpb24iLCJyZWxhdGl2ZVBvc2l0aW9uIiwiUmVsYXRpdmVQb3NpdGlvbiIsImZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24iLCJ0aW1lIiwiZ2V0VGltZSIsInNwZWVkIiwiZ2V0U3BlZWQiLCJNQVhJTVVNX1RBUF9USU1FIiwidGFwIiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiTUlOSU1VTV9TV0lQRV9TUEVFRCIsInN3aXBlIiwic3RhcnRQb3NpdGlvbiIsInRvcCIsImdldFRvcCIsImxlZnQiLCJnZXRMZWZ0IiwiZG91YmxlVGFwIiwic2luZ2xlVGFwIiwiVEFQX0RFTEFZIiwiTWF0aCIsImFicyIsIk1BWElNVU1fU1BSRUFEIiwiUElfT1ZFUl9UV08iLCJQSSIsImNhbGxDdXN0b21IYW5kbGVycyIsInNlY29uZE1vdmluZ1Bvc2l0aW9uIiwicmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiIsIm1hZ25pdHVkZSIsImdldE1hZ25pdHVkZSIsInJhdGlvIiwiY29zIiwic2luIiwic2Vjb25kU3RhcnRQb3NpdGlvbiIsInJlbGF0aXZlU3RhcnRQb3NpdGlvbiIsInRvdWNoTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxdEJBOzs7ZUFBQTs7O29CQW50QnVCO3lCQUNROytEQUVGO3lCQUVrRjt5QkFDRTtnQ0FjcEU7Ozs7OztBQUU3QyxJQUFRQSxPQUF3QkMseUJBQWMsQ0FBdENELE1BQU1FLFFBQWtCRCx5QkFBYyxDQUFoQ0MsT0FBT0MsU0FBV0YseUJBQWMsQ0FBekJFO0FBRXJCLFNBQVNDO0lBQ1AsSUFBTUMsY0FBYyxNQUNkQyxpQkFBaUIsTUFDakJDLGlCQUFpQixFQUFFLEVBQ25CQyxrQkFBa0IsRUFBRTtJQUUxQixJQUFJLENBQUNDLFdBQVcsQ0FBQztRQUNmSixhQUFBQTtRQUNBQyxnQkFBQUE7UUFDQUMsZ0JBQUFBO1FBQ0FDLGlCQUFBQTtJQUNGO0lBRUEsSUFBSSxDQUFDRSxXQUFXLENBQUMsSUFBSSxDQUFDQyxnQkFBZ0I7SUFDdEMsSUFBSSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDQyxnQkFBZ0I7SUFFdENDLFlBQU0sQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ0MsY0FBYyxFQUFFLElBQUk7SUFFMUMsSUFBSSxDQUFDQyxZQUFZLENBQUMsSUFBSSxDQUFDQyxpQkFBaUI7SUFDeEMsSUFBSSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDQyxnQkFBZ0I7SUFDdEMsSUFBSSxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDQyxlQUFlO0FBQ3RDO0FBRUEsU0FB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