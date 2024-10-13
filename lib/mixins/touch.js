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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBUQVBfREVMQVksIFBSRVNTX0RFTEFZLCBQSV9PVkVSX1RXTywgTUFYSU1VTV9UQVBfVElNRSwgTUlOSU1VTV9TV0lQRV9TUEVFRCwgTUFYSU1VTV9TUFJFQUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzb3J0UG9zaXRpb25zLCBtYXRjaFBvc2l0aW9ucywgZmlsdGVyUG9zaXRpb25zLCBwb3NpdGlvbnNGcm9tTW91c2VFdmVudCwgcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bvc2l0aW9uc1wiO1xuaW1wb3J0IHsgUFJFU1NfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGVuYWJsZVRvdWNoKCkge1xuICBjb25zdCB0YXBJbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbnVsbCxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gW107XG5cbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWwsXG4gICAgc3RhcnRNYWduaXR1ZGUsXG4gICAgc3RhcnRQb3NpdGlvbnMsXG4gICAgbW92aW5nUG9zaXRpb25zXG4gIH0pO1xuXG4gIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vbk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vblRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZVRvdWNoKCkge1xuICB0aGlzLm9mZk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vZmZNb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub2ZmVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUHJlc3MocHJlc3NDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBSRVNTX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcHJlc3NDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUHJlc3MocHJlc3NDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBSRVNTX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcHJlc3NDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1VwKGRyYWdVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnVXAoZHJhZ1VwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1VwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdEb3duKGRyYWdEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnRG93bihkcmFnRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0Rvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ0xlZnQoZHJhZ0xlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdMZWZ0KGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnUmlnaHQoZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdSaWdodChkcmFnUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnU3RhcnQoZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVEb3duKHN3aXBlRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlTGVmdChzd2lwZUxlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZUxlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaE1vdmUocGluY2hNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVNpbmdsZVRhcChzaW5nbGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzaW5nbGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU2luZ2xlVGFwKHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHNpbmdsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Eb3VibGVUYXAoZG91YmxlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZG91YmxlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURvdWJsZVRhcChkb3VibGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkb3VibGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhcEludGVydmFsKCkge1xuICBjb25zdCB7IHRhcEludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHRhcEludGVydmFsO1xufVxuXG5mdW5jdGlvbiBnZXRQcmVzc1NJbnRlcnZhbCgpIHtcbiAgY29uc3QgeyBwcmVzc0ludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHByZXNzSW50ZXJ2YWw7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0TWFnbml0dWRlKCkge1xuICBjb25zdCB7IHN0YXJ0TWFnbml0dWRlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0TWFnbml0dWRlO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydFBvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBzdGFydFBvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydFBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gZ2V0TW92aW5nUG9zaXRpb25zKCkge1xuICBjb25zdCB7IG1vdmluZ1Bvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBtb3ZpbmdQb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHNldFRhcEludGVydmFsKHRhcEludGVydmFsKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHRhcEludGVydmFsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRQcmVzc1NJbnRlcnZhbChwcmVzc0ludGVydmFsKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHByZXNzSW50ZXJ2YWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0TWFnbml0dWRlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucykge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydFBvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0TW92aW5nUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucykge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBtb3ZpbmdQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoU3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5tb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoRW5kSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IHRydWUsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5lbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIHRoaXMuZHJhZ1N0YXJ0KGV2ZW50LCBlbGVtZW50KTtcblxuICAgIGxldCBwcmVzc0ludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwcmVzc0ludGVydmFsID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRQcmVzc1NJbnRlcnZhbChwcmVzc0ludGVydmFsKTtcblxuICAgICAgdGhpcy5wcmVzcyhldmVudCwgZWxlbWVudCk7XG4gICAgfSwgUFJFU1NfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRQcmVzc1NJbnRlcnZhbChwcmVzc0ludGVydmFsKTtcbiAgfVxuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgIHRoaXMucGluY2hTdGFydChldmVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKTtcblxuICBmaWx0ZXJQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIHB1c2gobW92aW5nUG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGNvbnN0IHBvc2l0aW9uc01hdGNoID0gbWF0Y2hQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIG1vdmluZ1Bvc2l0aW9ucyk7XG5cbiAgaWYgKHBvc2l0aW9uc01hdGNoKSB7XG4gICAgc29ydFBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHN0YXJ0UG9zaXRpb25zKTtcblxuICAgIGNvbnN0IG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9IG1vdmluZ1Bvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAobW92aW5nUG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmRyYWcoZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMucGluY2goZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBwcmVzc0ludGVydmFsID0gdGhpcy5nZXRQcmVzc1NJbnRlcnZhbCgpO1xuXG4gIGlmIChwcmVzc0ludGVydmFsICE9PSBudWxsKSB7XG4gICAgY2xlYXJUaW1lb3V0KHByZXNzSW50ZXJ2YWwpO1xuXG4gICAgcHJlc3NJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFByZXNzU0ludGVydmFsKHByZXNzSW50ZXJ2YWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5wb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIHRoaXMucG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgbGV0IHByZXNzSW50ZXJ2YWwgPSB0aGlzLmdldFByZXNzU0ludGVydmFsKCk7XG5cbiAgaWYgKHByZXNzSW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICBjbGVhclRpbWVvdXQocHJlc3NJbnRlcnZhbCk7XG5cbiAgICBwcmVzc0ludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0UHJlc3NTSW50ZXJ2YWwocHJlc3NJbnRlcnZhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zc2libGVUYXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgdGltZSA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VGltZSgpLFxuICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKTtcblxuICBpZiAoKHNwZWVkID09PSAwKSAmJiAodGltZSA8IE1BWElNVU1fVEFQX1RJTUUpKXtcbiAgICB0aGlzLnRhcChldmVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpLFxuICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKTtcblxuICBpZiAoc3BlZWQgPiBNSU5JTVVNX1NXSVBFX1NQRUVEKSB7XG4gICAgdGhpcy5zd2lwZShldmVudCwgZWxlbWVudCwgc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gc3RhcnRQb3NpdGlvbi5nZXRMZWZ0KCk7XG5cbiAgbGV0IHRhcEludGVydmFsID0gdGhpcy5nZXRUYXBJbnRlcnZhbCgpO1xuXG4gIGlmICh0YXBJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgIGNsZWFyVGltZW91dCh0YXBJbnRlcnZhbCk7XG5cbiAgICB0YXBJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRhcEludGVydmFsKHRhcEludGVydmFsKTtcblxuICAgIHRoaXMuZG91YmxlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGFwSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YXBJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRhcEludGVydmFsKHRhcEludGVydmFsKTtcblxuICAgIHRoaXMuc2luZ2xlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuICB9LCBUQVBfREVMQVkpO1xuXG4gIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xufVxuXG5mdW5jdGlvbiBkcmFnKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIHRvcCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldExlZnQoKSxcbiAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKTtcblxuICBsZXQgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICBpZiAoKE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKFBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicygtUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoKFBJIC0gTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChjdXN0b21FdmVudFR5cGUgIT09IG51bGwpIHtcbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBpbmNoKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBzZWNvbmRNb3ZpbmdQb3NpdGlvbiA9IHNlY29uZChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0TW92aW5nUG9zaXRpb24sIHNlY29uZE1vdmluZ1Bvc2l0aW9uKSxcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRNYWduaXR1ZGUgPSB0aGlzLmdldFN0YXJ0TWFnbml0dWRlKCksXG4gICAgICAgIG1hZ25pdHVkZSA9IHJlbGF0aXZlTW92aW5nUG9zaXRpb24uZ2V0TWFnbml0dWRlKCksXG4gICAgICAgIHJhdGlvID0gbWFnbml0dWRlIC8gc3RhcnRNYWduaXR1ZGU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcmF0aW8pO1xufVxuXG5mdW5jdGlvbiBwcmVzcyhldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQUkVTU19DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc3dpcGUoZXZlbnQsIGVsZW1lbnQsIHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGN1c3RvbUV2ZW50VHlwZSA9IG51bGw7XG5cbiAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5jb3MoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguc2luKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoLVBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguY29zKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2luZ2xlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpOyAvLy9cbn1cblxuZnVuY3Rpb24gZG91YmxlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xufVxuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgIC8vL1xuICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gc3RhcnRQb3NpdGlvbi5nZXRMZWZ0KCk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbn1cblxuZnVuY3Rpb24gcGluY2hTdGFydChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc2Vjb25kU3RhcnRQb3NpdGlvbiA9IHNlY29uZChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHJlbGF0aXZlU3RhcnRQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFN0YXJ0UG9zaXRpb24sIHNlY29uZFN0YXJ0UG9zaXRpb24pLFxuICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZVN0YXJ0UG9zaXRpb24uZ2V0TWFnbml0dWRlKCksXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbWFnbml0dWRlOyAvLy9cblxuICB0aGlzLnNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbn1cblxuY29uc3QgdG91Y2hNaXhpbnMgPSB7XG4gIGVuYWJsZVRvdWNoLFxuICBkaXNhYmxlVG91Y2gsXG4gIG9uQ3VzdG9tUHJlc3MsXG4gIG9mZkN1c3RvbVByZXNzLFxuICBvbkN1c3RvbURyYWdVcCxcbiAgb2ZmQ3VzdG9tRHJhZ1VwLFxuICBvbkN1c3RvbURyYWdEb3duLFxuICBvZmZDdXN0b21EcmFnRG93bixcbiAgb25DdXN0b21EcmFnTGVmdCxcbiAgb2ZmQ3VzdG9tRHJhZ0xlZnQsXG4gIG9uQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvZmZDdXN0b21EcmFnUmlnaHQsXG4gIG9uQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvZmZDdXN0b21EcmFnU3RhcnQsXG4gIG9uQ3VzdG9tU3dpcGVVcCxcbiAgb2ZmQ3VzdG9tU3dpcGVVcCxcbiAgb25DdXN0b21Td2lwZURvd24sXG4gIG9mZkN1c3RvbVN3aXBlRG93bixcbiAgb25DdXN0b21Td2lwZUxlZnQsXG4gIG9mZkN1c3RvbVN3aXBlTGVmdCxcbiAgb25DdXN0b21Td2lwZVJpZ2h0LFxuICBvZmZDdXN0b21Td2lwZVJpZ2h0LFxuICBvbkN1c3RvbVBpbmNoTW92ZSxcbiAgb2ZmQ3VzdG9tUGluY2hNb3ZlLFxuICBvbkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9mZkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9uQ3VzdG9tU2luZ2xlVGFwLFxuICBvZmZDdXN0b21TaW5nbGVUYXAsXG4gIG9uQ3VzdG9tRG91YmxlVGFwLFxuICBvZmZDdXN0b21Eb3VibGVUYXAsXG4gIGdldFRhcEludGVydmFsLFxuICBnZXRQcmVzc1NJbnRlcnZhbCxcbiAgZ2V0U3RhcnRNYWduaXR1ZGUsXG4gIGdldFN0YXJ0UG9zaXRpb25zLFxuICBnZXRNb3ZpbmdQb3NpdGlvbnMsXG4gIHNldFRhcEludGVydmFsLFxuICBzZXRQcmVzc1NJbnRlcnZhbCxcbiAgc2V0U3RhcnRNYWduaXR1ZGUsXG4gIHNldFN0YXJ0UG9zaXRpb25zLFxuICBzZXRNb3ZpbmdQb3NpdGlvbnMsXG4gIHRvdWNoU3RhcnRIYW5kbGVyLFxuICBtb3VzZURvd25IYW5kbGVyLFxuICB0b3VjaE1vdmVIYW5kbGVyLFxuICBtb3VzZU1vdmVIYW5kbGVyLFxuICB0b3VjaEVuZEhhbmRsZXIsXG4gIG1vdXNlVXBIYW5kbGVyLFxuICBzdGFydEhhbmRsZXIsXG4gIG1vdmVIYW5kbGVyLFxuICBlbmRIYW5kbGVyLFxuICBwb3NzaWJsZVRhcCxcbiAgcG9zc2libGVTd2lwZSxcbiAgdGFwLFxuICBkcmFnLFxuICBwaW5jaCxcbiAgcHJlc3MsXG4gIHN3aXBlLFxuICBzaW5nbGVUYXAsXG4gIGRvdWJsZVRhcCxcbiAgZHJhZ1N0YXJ0LFxuICBwaW5jaFN0YXJ0XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b3VjaE1peGlucztcbiJdLCJuYW1lcyI6WyJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImVuYWJsZVRvdWNoIiwidGFwSW50ZXJ2YWwiLCJzdGFydE1hZ25pdHVkZSIsInN0YXJ0UG9zaXRpb25zIiwibW92aW5nUG9zaXRpb25zIiwidXBkYXRlU3RhdGUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ3aW5kb3ciLCJvbk1vdXNlVXAiLCJtb3VzZVVwSGFuZGxlciIsIm9uVG91Y2hTdGFydCIsInRvdWNoU3RhcnRIYW5kbGVyIiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmVIYW5kbGVyIiwib25Ub3VjaEVuZCIsInRvdWNoRW5kSGFuZGxlciIsImRpc2FibGVUb3VjaCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlVXAiLCJvZmZUb3VjaFN0YXJ0Iiwib2ZmVG91Y2hNb3ZlIiwib2ZmVG91Y2hFbmQiLCJvbkN1c3RvbVByZXNzIiwicHJlc3NDdXN0b21IYW5kbGVyIiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIlBSRVNTX0NVU1RPTV9FVkVOVF9UWVBFIiwiY3VzdG9tSGFuZGxlciIsIm9uQ3VzdG9tRXZlbnQiLCJvZmZDdXN0b21QcmVzcyIsIm9mZkN1c3RvbUV2ZW50Iiwib25DdXN0b21EcmFnVXAiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwiRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ0xlZnQiLCJkcmFnTGVmdEN1c3RvbUhhbmRsZXIiLCJEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnTGVmdCIsIm9uQ3VzdG9tRHJhZ1JpZ2h0IiwiZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciIsIkRSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnUmlnaHQiLCJvbkN1c3RvbURyYWdTdGFydCIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwiU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwiUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21TaW5nbGVUYXAiLCJzaW5nbGVUYXBDdXN0b21IYW5kbGVyIiwiU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVNpbmdsZVRhcCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsIkRPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJnZXRUYXBJbnRlcnZhbCIsImdldFN0YXRlIiwiZ2V0UHJlc3NTSW50ZXJ2YWwiLCJwcmVzc0ludGVydmFsIiwiZ2V0U3RhcnRNYWduaXR1ZGUiLCJnZXRTdGFydFBvc2l0aW9ucyIsImdldE1vdmluZ1Bvc2l0aW9ucyIsInNldFRhcEludGVydmFsIiwic2V0UHJlc3NTSW50ZXJ2YWwiLCJzZXRTdGFydE1hZ25pdHVkZSIsInNldFN0YXJ0UG9zaXRpb25zIiwic2V0TW92aW5nUG9zaXRpb25zIiwiZXZlbnQiLCJzdGFydEhhbmRsZXIiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZCIsInBvc2l0aW9ucyIsInBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IiwibW91c2VFdmVudCIsInBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50IiwibW92ZUhhbmRsZXIiLCJlbmRIYW5kbGVyIiwicG9zaXRpb25zRnJvbUV2ZW50IiwiZmlsdGVyUG9zaXRpb25zIiwic3RhcnRpbmdQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkcmFnU3RhcnQiLCJzZXRUaW1lb3V0IiwicHJlc3MiLCJQUkVTU19ERUxBWSIsInBpbmNoU3RhcnQiLCJwb3NpdGlvbnNNYXRjaCIsIm1hdGNoUG9zaXRpb25zIiwic29ydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9uc0xlbmd0aCIsImRyYWciLCJwaW5jaCIsImNsZWFyVGltZW91dCIsInN0YXJ0UG9zaXRpb25zTGVuZ3RoIiwicG9zc2libGVUYXAiLCJwb3NzaWJsZVN3aXBlIiwiZmlyc3RTdGFydFBvc2l0aW9uIiwiZmlyc3RNb3ZpbmdQb3NpdGlvbiIsImZpcnN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInJlbGF0aXZlUG9zaXRpb24iLCJSZWxhdGl2ZVBvc2l0aW9uIiwiZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbiIsInRpbWUiLCJnZXRUaW1lIiwic3BlZWQiLCJnZXRTcGVlZCIsIk1BWElNVU1fVEFQX1RJTUUiLCJ0YXAiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJNSU5JTVVNX1NXSVBFX1NQRUVEIiwic3dpcGUiLCJzdGFydFBvc2l0aW9uIiwidG9wIiwiZ2V0VG9wIiwibGVmdCIsImdldExlZnQiLCJkb3VibGVUYXAiLCJzaW5nbGVUYXAiLCJUQVBfREVMQVkiLCJNYXRoIiwiYWJzIiwiTUFYSU1VTV9TUFJFQUQiLCJQSV9PVkVSX1RXTyIsIlBJIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwic2Vjb25kTW92aW5nUG9zaXRpb24iLCJyZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uIiwibWFnbml0dWRlIiwiZ2V0TWFnbml0dWRlIiwicmF0aW8iLCJjb3MiLCJzaW4iLCJzZWNvbmRTdGFydFBvc2l0aW9uIiwicmVsYXRpdmVTdGFydFBvc2l0aW9uIiwidG91Y2hNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXF0QkE7OztlQUFBOzs7b0JBbnRCdUI7eUJBQ1E7K0RBRUY7eUJBRWtGO3lCQUNFO2dDQWNwRTs7Ozs7O0FBRTdDLElBQVFBLE9BQXdCQyx5QkFBYyxDQUF0Q0QsTUFBTUUsUUFBa0JELHlCQUFjLENBQWhDQyxPQUFPQyxTQUFXRix5QkFBYyxDQUF6QkU7QUFFckIsU0FBU0M7SUFDUCxJQUFNQyxjQUFjLE1BQ2RDLGlCQUFpQixNQUNqQkMsaUJBQWlCLEVBQUUsRUFDbkJDLGtCQUFrQixFQUFFO0lBRTFCLElBQUksQ0FBQ0MsV0FBVyxDQUFDO1FBQ2ZKLGFBQUFBO1FBQ0FDLGdCQUFBQTtRQUNBQyxnQkFBQUE7UUFDQUMsaUJBQUFBO0lBQ0Y7SUFFQSxJQUFJLENBQUNFLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQjtJQUN0QyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQjtJQUV0Q0MsWUFBTSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDQyxjQUFjLEVBQUUsSUFBSTtJQUUxQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNDLGlCQUFpQjtJQUN4QyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQjtJQUN0QyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUNDLGVBQWU7QUFDdEM7QUFFQSxTQUFTQztJQUNQLElBQUksQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ2Is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