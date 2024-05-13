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
}
function singleTap(event, element, top, left) {
    var customEventType = _customEventTypes.SINGLE_TAP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element, top, left); ///
}
function doubleTap(event, element, top, left) {
    var customEventType = _customEventTypes.DOUBLE_TAP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element, top, left);
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
function dragStart(event, element) {
    var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), startPosition = firstStartPosition, top = startPosition.getTop(), left = startPosition.getLeft();
    this.callCustomHandlers(customEventType, event, element, top, left);
}
function pinchStart(event, element) {
    var customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE, startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), secondStartPosition = second(startPositions), relativeStartPosition = _relative.default.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition), magnitude = relativeStartPosition.getMagnitude(), startMagnitude = magnitude; ///
    this.setStartMagnitude(startMagnitude);
    this.callCustomHandlers(customEventType, event, element);
}
function possibleTap(event, element) {
    var startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), time = relativePosition.getTime(), speed = relativePosition.getSpeed();
    if (speed === 0 && time < _constants.MAXIMUM_TAP_TIME) {
        this.singleTapOrDoubleTap(event, element);
    }
}
function possibleSwipe(event, element) {
    var startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), direction = relativePosition.getDirection(), speed = relativePosition.getSpeed();
    if (speed > _constants.MINIMUM_SWIPE_SPEED) {
        this.swipe(event, element, speed, direction);
    }
}
function singleTapOrDoubleTap(event, element) {
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
var touchMixins = {
    enableTouch: enableTouch,
    disableTouch: disableTouch,
    onTouchStart: onTouchStart,
    offTouchStart: offTouchStart,
    onTouchMove: onTouchMove,
    offTouchMove: offTouchMove,
    onTouchEnd: onTouchEnd,
    offTouchEnd: offTouchEnd,
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
    singleTap: singleTap,
    doubleTap: doubleTap,
    drag: drag,
    pinch: pinch,
    swipe: swipe,
    dragStart: dragStart,
    pinchStart: pinchStart,
    possibleTap: possibleTap,
    possibleSwipe: possibleSwipe,
    singleTapOrDoubleTap: singleTapOrDoubleTap
};
var _default = touchMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgd2luZG93LCBldmVudFR5cGVzIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBUQVBfREVMQVksIFBJX09WRVJfVFdPLCBNQVhJTVVNX1RBUF9USU1FLCBNSU5JTVVNX1NXSVBFX1NQRUVELCBNQVhJTVVNX1NQUkVBRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNvcnRQb3NpdGlvbnMsIG1hdGNoUG9zaXRpb25zLCBmaWx0ZXJQb3NpdGlvbnMsIHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50LCBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcG9zaXRpb25zXCI7XG5pbXBvcnQgeyBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSwgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsIFRPVUNIRU5EX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmZ1bmN0aW9uIGVuYWJsZVRvdWNoKCkge1xuICBjb25zdCB0YXBJbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbnVsbCxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gW107XG5cbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWwsXG4gICAgc3RhcnRNYWduaXR1ZGUsXG4gICAgc3RhcnRQb3NpdGlvbnMsXG4gICAgbW92aW5nUG9zaXRpb25zXG4gIH0pO1xuXG4gIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vbk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vblRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZVRvdWNoKCkge1xuICB0aGlzLm9mZk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vZmZNb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub2ZmVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hTdGFydCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSFNUQVJUX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZUb3VjaFN0YXJ0KHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZFdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoTW92ZSh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlRvdWNoTW92ZSh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZFdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoRW5kKHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNIRU5EX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZUb3VjaEVuZCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSEVORF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9mZkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1VwKGRyYWdVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnVXAoZHJhZ1VwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1VwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdEb3duKGRyYWdEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnRG93bihkcmFnRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0Rvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ0xlZnQoZHJhZ0xlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdMZWZ0KGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnUmlnaHQoZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdSaWdodChkcmFnUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnU3RhcnQoZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVEb3duKHN3aXBlRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlTGVmdChzd2lwZUxlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZUxlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaE1vdmUocGluY2hNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVNpbmdsZVRhcChzaW5nbGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzaW5nbGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU2luZ2xlVGFwKHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHNpbmdsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Eb3VibGVUYXAoZG91YmxlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZG91YmxlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURvdWJsZVRhcChkb3VibGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkb3VibGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhcEludGVydmFsKCkge1xuICBjb25zdCB7IHRhcEludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHRhcEludGVydmFsO1xufVxuXG5mdW5jdGlvbiBzZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICB0YXBJbnRlcnZhbFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRNYWduaXR1ZGUoKSB7XG4gIGNvbnN0IHsgc3RhcnRNYWduaXR1ZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhcnRNYWduaXR1ZGU7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0TWFnbml0dWRlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydFBvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBzdGFydFBvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydFBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE1vdmluZ1Bvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBtb3ZpbmdQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gbW92aW5nUG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRNb3ZpbmdQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIG1vdmluZ1Bvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hTdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hFbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIHB1c2goc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3Qgc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgdGhpcy5kcmFnU3RhcnQoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgdGhpcy5waW5jaFN0YXJ0KGV2ZW50LCBlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgcHVzaChtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3QgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBzb3J0UG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgc3RhcnRQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgbW92aW5nUG9zaXRpb25zTGVuZ3RoID0gbW92aW5nUG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuZHJhZyhldmVudCwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5waW5jaChldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5wb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIHRoaXMucG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHNpbmdsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTsgLy8vXG59XG5cbmZ1bmN0aW9uIGRvdWJsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbn1cblxuZnVuY3Rpb24gZHJhZyhldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICB0b3AgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRMZWZ0KCksXG4gICAgICAgIGRpcmVjdGlvbiA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0RGlyZWN0aW9uKCk7XG5cbiAgbGV0IGN1c3RvbUV2ZW50VHlwZSA9IG51bGw7XG5cbiAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoLVBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwaW5jaChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgc2Vjb25kTW92aW5nUG9zaXRpb24gPSBzZWNvbmQobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgcmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdE1vdmluZ1Bvc2l0aW9uLCBzZWNvbmRNb3ZpbmdQb3NpdGlvbiksXG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gdGhpcy5nZXRTdGFydE1hZ25pdHVkZSgpLFxuICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICByYXRpbyA9IG1hZ25pdHVkZSAvIHN0YXJ0TWFnbml0dWRlO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHJhdGlvKTtcbn1cblxuZnVuY3Rpb24gc3dpcGUoZXZlbnQsIGVsZW1lbnQsIHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGN1c3RvbUV2ZW50VHlwZSA9IG51bGw7XG5cbiAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5jb3MoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguc2luKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoLVBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguY29zKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sICAvLy9cbiAgICAgICAgdG9wID0gc3RhcnRQb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG59XG5cbmZ1bmN0aW9uIHBpbmNoU3RhcnQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHNlY29uZFN0YXJ0UG9zaXRpb24gPSBzZWNvbmQoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICByZWxhdGl2ZVN0YXJ0UG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RTdGFydFBvc2l0aW9uLCBzZWNvbmRTdGFydFBvc2l0aW9uKSxcbiAgICAgICAgbWFnbml0dWRlID0gcmVsYXRpdmVTdGFydFBvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IG1hZ25pdHVkZTsgLy8vXG5cbiAgdGhpcy5zZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHBvc3NpYmxlVGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIHRpbWUgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRpbWUoKSxcbiAgICAgICAgc3BlZWQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFNwZWVkKCk7XG5cbiAgaWYgKChzcGVlZCA9PT0gMCkgJiYgKHRpbWUgPCBNQVhJTVVNX1RBUF9USU1FKSl7XG4gICAgdGhpcy5zaW5nbGVUYXBPckRvdWJsZVRhcChldmVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpLFxuICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKTtcblxuICBpZiAoc3BlZWQgPiBNSU5JTVVNX1NXSVBFX1NQRUVEKSB7XG4gICAgdGhpcy5zd2lwZShldmVudCwgZWxlbWVudCwgc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2luZ2xlVGFwT3JEb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICBsZXQgdGFwSW50ZXJ2YWwgPSB0aGlzLmdldFRhcEludGVydmFsKCk7XG5cbiAgaWYgKHRhcEludGVydmFsICE9PSBudWxsKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRhcEludGVydmFsKTtcblxuICAgIHRhcEludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5kb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICB0YXBJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhcEludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5zaW5nbGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG4gIH0sIFRBUF9ERUxBWSk7XG5cbiAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG59XG5cbmNvbnN0IHRvdWNoTWl4aW5zID0ge1xuICBlbmFibGVUb3VjaCxcbiAgZGlzYWJsZVRvdWNoLFxuICBvblRvdWNoU3RhcnQsXG4gIG9mZlRvdWNoU3RhcnQsXG4gIG9uVG91Y2hNb3ZlLFxuICBvZmZUb3VjaE1vdmUsXG4gIG9uVG91Y2hFbmQsXG4gIG9mZlRvdWNoRW5kLFxuICBvbkN1c3RvbURyYWdVcCxcbiAgb2ZmQ3VzdG9tRHJhZ1VwLFxuICBvbkN1c3RvbURyYWdEb3duLFxuICBvZmZDdXN0b21EcmFnRG93bixcbiAgb25DdXN0b21EcmFnTGVmdCxcbiAgb2ZmQ3VzdG9tRHJhZ0xlZnQsXG4gIG9uQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvZmZDdXN0b21EcmFnUmlnaHQsXG4gIG9uQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvZmZDdXN0b21EcmFnU3RhcnQsXG4gIG9uQ3VzdG9tU3dpcGVVcCxcbiAgb2ZmQ3VzdG9tU3dpcGVVcCxcbiAgb25DdXN0b21Td2lwZURvd24sXG4gIG9mZkN1c3RvbVN3aXBlRG93bixcbiAgb25DdXN0b21Td2lwZUxlZnQsXG4gIG9mZkN1c3RvbVN3aXBlTGVmdCxcbiAgb25DdXN0b21Td2lwZVJpZ2h0LFxuICBvZmZDdXN0b21Td2lwZVJpZ2h0LFxuICBvbkN1c3RvbVBpbmNoTW92ZSxcbiAgb2ZmQ3VzdG9tUGluY2hNb3ZlLFxuICBvbkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9mZkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9uQ3VzdG9tU2luZ2xlVGFwLFxuICBvZmZDdXN0b21TaW5nbGVUYXAsXG4gIG9uQ3VzdG9tRG91YmxlVGFwLFxuICBvZmZDdXN0b21Eb3VibGVUYXAsXG4gIGdldFRhcEludGVydmFsLFxuICBzZXRUYXBJbnRlcnZhbCxcbiAgZ2V0U3RhcnRNYWduaXR1ZGUsXG4gIHNldFN0YXJ0TWFnbml0dWRlLFxuICBnZXRTdGFydFBvc2l0aW9ucyxcbiAgc2V0U3RhcnRQb3NpdGlvbnMsXG4gIGdldE1vdmluZ1Bvc2l0aW9ucyxcbiAgc2V0TW92aW5nUG9zaXRpb25zLFxuICB0b3VjaFN0YXJ0SGFuZGxlcixcbiAgbW91c2VEb3duSGFuZGxlcixcbiAgdG91Y2hNb3ZlSGFuZGxlcixcbiAgbW91c2VNb3ZlSGFuZGxlcixcbiAgdG91Y2hFbmRIYW5kbGVyLFxuICBtb3VzZVVwSGFuZGxlcixcbiAgc3RhcnRIYW5kbGVyLFxuICBtb3ZlSGFuZGxlcixcbiAgZW5kSGFuZGxlcixcbiAgc2luZ2xlVGFwLFxuICBkb3VibGVUYXAsXG4gIGRyYWcsXG4gIHBpbmNoLFxuICBzd2lwZSxcbiAgZHJhZ1N0YXJ0LFxuICBwaW5jaFN0YXJ0LFxuICBwb3NzaWJsZVRhcCxcbiAgcG9zc2libGVTd2lwZSxcbiAgc2luZ2xlVGFwT3JEb3VibGVUYXBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvdWNoTWl4aW5zO1xuIl0sIm5hbWVzIjpbInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiVE9VQ0hTVEFSVF9FVkVOVF9UWVBFIiwiZXZlbnRUeXBlcyIsIlRPVUNITU9WRV9FVkVOVF9UWVBFIiwiVE9VQ0hFTkRfRVZFTlRfVFlQRSIsImVuYWJsZVRvdWNoIiwidGFwSW50ZXJ2YWwiLCJzdGFydE1hZ25pdHVkZSIsInN0YXJ0UG9zaXRpb25zIiwibW92aW5nUG9zaXRpb25zIiwidXBkYXRlU3RhdGUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ3aW5kb3ciLCJvbk1vdXNlVXAiLCJtb3VzZVVwSGFuZGxlciIsIm9uVG91Y2hTdGFydCIsInRvdWNoU3RhcnRIYW5kbGVyIiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmVIYW5kbGVyIiwib25Ub3VjaEVuZCIsInRvdWNoRW5kSGFuZGxlciIsImRpc2FibGVUb3VjaCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlVXAiLCJvZmZUb3VjaFN0YXJ0Iiwib2ZmVG91Y2hNb3ZlIiwib2ZmVG91Y2hFbmQiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwib25FdmVudCIsIm9mZkV2ZW50Iiwib25DdXN0b21EcmFnVXAiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIkRSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjdXN0b21IYW5kbGVyIiwib25DdXN0b21FdmVudCIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbUV2ZW50Iiwib25DdXN0b21EcmFnRG93biIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsIkRSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnTGVmdCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsIkRSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdMZWZ0Iiwib25DdXN0b21EcmFnUmlnaHQiLCJkcmFnUmlnaHRDdXN0b21IYW5kbGVyIiwiRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdSaWdodCIsIm9uQ3VzdG9tRHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsIkRSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsIlNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbVNpbmdsZVRhcCIsInNpbmdsZVRhcEN1c3RvbUhhbmRsZXIiLCJTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU2luZ2xlVGFwIiwib25DdXN0b21Eb3VibGVUYXAiLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwiRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURvdWJsZVRhcCIsImdldFRhcEludGVydmFsIiwiZ2V0U3RhdGUiLCJzZXRUYXBJbnRlcnZhbCIsImdldFN0YXJ0TWFnbml0dWRlIiwic2V0U3RhcnRNYWduaXR1ZGUiLCJnZXRTdGFydFBvc2l0aW9ucyIsInNldFN0YXJ0UG9zaXRpb25zIiwiZ2V0TW92aW5nUG9zaXRpb25zIiwic2V0TW92aW5nUG9zaXRpb25zIiwiZXZlbnQiLCJzdGFydEhhbmRsZXIiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZCIsInBvc2l0aW9ucyIsInBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IiwibW91c2VFdmVudCIsInBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50IiwibW92ZUhhbmRsZXIiLCJlbmRIYW5kbGVyIiwicG9zaXRpb25zRnJvbUV2ZW50IiwiZmlsdGVyUG9zaXRpb25zIiwic3RhcnRpbmdQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkcmFnU3RhcnQiLCJwaW5jaFN0YXJ0IiwicG9zaXRpb25zTWF0Y2giLCJtYXRjaFBvc2l0aW9ucyIsInNvcnRQb3NpdGlvbnMiLCJtb3ZpbmdQb3NpdGlvbnNMZW5ndGgiLCJkcmFnIiwicGluY2giLCJzdGFydFBvc2l0aW9uc0xlbmd0aCIsInBvc3NpYmxlVGFwIiwicG9zc2libGVTd2lwZSIsInNpbmdsZVRhcCIsInRvcCIsImxlZnQiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJkb3VibGVUYXAiLCJmaXJzdFN0YXJ0UG9zaXRpb24iLCJmaXJzdE1vdmluZ1Bvc2l0aW9uIiwiZmlyc3RQb3NpdGlvbiIsInNlY29uZFBvc2l0aW9uIiwicmVsYXRpdmVQb3NpdGlvbiIsIlJlbGF0aXZlUG9zaXRpb24iLCJmcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uIiwiZ2V0VG9wIiwiZ2V0TGVmdCIsImRpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsIk1hdGgiLCJhYnMiLCJNQVhJTVVNX1NQUkVBRCIsIlBJX09WRVJfVFdPIiwiUEkiLCJzZWNvbmRNb3ZpbmdQb3NpdGlvbiIsInJlbGF0aXZlTW92aW5nUG9zaXRpb24iLCJtYWduaXR1ZGUiLCJnZXRNYWduaXR1ZGUiLCJyYXRpbyIsInN3aXBlIiwic3BlZWQiLCJjb3MiLCJzaW4iLCJzdGFydFBvc2l0aW9uIiwic2Vjb25kU3RhcnRQb3NpdGlvbiIsInJlbGF0aXZlU3RhcnRQb3NpdGlvbiIsInRpbWUiLCJnZXRUaW1lIiwiZ2V0U3BlZWQiLCJNQVhJTVVNX1RBUF9USU1FIiwic2luZ2xlVGFwT3JEb3VibGVUYXAiLCJNSU5JTVVNX1NXSVBFX1NQRUVEIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIlRBUF9ERUxBWSIsInRvdWNoTWl4aW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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