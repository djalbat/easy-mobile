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
function onCustomDrag(dragCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_CUSTOM_EVENT_TYPE, customHandler = dragCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
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
    var customEventType;
    customEventType = _customEventTypes.DRAG_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element, top, left);
    customEventType = null;
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
    onCustomDrag: onCustomDrag,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBUQVBfREVMQVksIFBSRVNTX0RFTEFZLCBQSV9PVkVSX1RXTywgTUFYSU1VTV9UQVBfVElNRSwgTUlOSU1VTV9TV0lQRV9TUEVFRCwgTUFYSU1VTV9TUFJFQUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzb3J0UG9zaXRpb25zLCBtYXRjaFBvc2l0aW9ucywgZmlsdGVyUG9zaXRpb25zLCBwb3NpdGlvbnNGcm9tTW91c2VFdmVudCwgcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bvc2l0aW9uc1wiO1xuaW1wb3J0IHtcbiAgUFJFU1NfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gIERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gIERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gIFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gIFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLCBEUkFHX0NVU1RPTV9FVkVOVF9UWVBFXG59IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGVuYWJsZVRvdWNoKCkge1xuICBjb25zdCB0YXBJbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbnVsbCxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gW107XG5cbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWwsXG4gICAgc3RhcnRNYWduaXR1ZGUsXG4gICAgc3RhcnRQb3NpdGlvbnMsXG4gICAgbW92aW5nUG9zaXRpb25zXG4gIH0pO1xuXG4gIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vbk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vblRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZVRvdWNoKCkge1xuICB0aGlzLm9mZk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vZmZNb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub2ZmVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUHJlc3MocHJlc3NDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBSRVNTX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcHJlc3NDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUHJlc3MocHJlc3NDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBSRVNTX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcHJlc3NDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZyhkcmFnQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0N1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdVcChkcmFnVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1VwKGRyYWdVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnRG93bihkcmFnRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0Rvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ0Rvd24oZHJhZ0Rvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdMZWZ0KGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnTGVmdChkcmFnTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0xlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1JpZ2h0KGRyYWdSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnUmlnaHQoZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdTdGFydChkcmFnU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZURvd24oc3dpcGVEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVMZWZ0KHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoTW92ZShwaW5jaE1vdmVDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaE1vdmVDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21TaW5nbGVUYXAoc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVNpbmdsZVRhcChzaW5nbGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzaW5nbGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRG91YmxlVGFwKGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRvdWJsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Eb3VibGVUYXAoZG91YmxlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZG91YmxlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBnZXRUYXBJbnRlcnZhbCgpIHtcbiAgY29uc3QgeyB0YXBJbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiB0YXBJbnRlcnZhbDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJlc3NTSW50ZXJ2YWwoKSB7XG4gIGNvbnN0IHsgcHJlc3NJbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBwcmVzc0ludGVydmFsO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydE1hZ25pdHVkZSgpIHtcbiAgY29uc3QgeyBzdGFydE1hZ25pdHVkZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydE1hZ25pdHVkZTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IHsgc3RhcnRQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhcnRQb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGdldE1vdmluZ1Bvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBtb3ZpbmdQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gbW92aW5nUG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICB0YXBJbnRlcnZhbFxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0UHJlc3NTSW50ZXJ2YWwocHJlc3NJbnRlcnZhbCkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBwcmVzc0ludGVydmFsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydE1hZ25pdHVkZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldE1vdmluZ1Bvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgbW92aW5nUG9zaXRpb25zXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaFN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLnN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLnN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaE1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5tb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b3VjaEVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5lbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbW91c2VFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKTtcblxuICBmaWx0ZXJQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgcHVzaChzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBjb25zdCBzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aDtcblxuICBpZiAoc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICB0aGlzLmRyYWdTdGFydChldmVudCwgZWxlbWVudCk7XG5cbiAgICBsZXQgcHJlc3NJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcHJlc3NJbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0UHJlc3NTSW50ZXJ2YWwocHJlc3NJbnRlcnZhbCk7XG5cbiAgICAgIHRoaXMucHJlc3MoZXZlbnQsIGVsZW1lbnQpO1xuICAgIH0sIFBSRVNTX0RFTEFZKTtcblxuICAgIHRoaXMuc2V0UHJlc3NTSW50ZXJ2YWwocHJlc3NJbnRlcnZhbCk7XG4gIH1cblxuICBpZiAoc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPT09IDIpIHtcbiAgICB0aGlzLnBpbmNoU3RhcnQoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBjb25zdCBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBtb3ZpbmdQb3NpdGlvbnMpO1xuXG4gIGlmIChwb3NpdGlvbnNNYXRjaCkge1xuICAgIHNvcnRQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBzdGFydFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCBtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPSBtb3ZpbmdQb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5kcmFnKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAobW92aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLnBpbmNoKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBsZXQgcHJlc3NJbnRlcnZhbCA9IHRoaXMuZ2V0UHJlc3NTSW50ZXJ2YWwoKTtcblxuICBpZiAocHJlc3NJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgIGNsZWFyVGltZW91dChwcmVzc0ludGVydmFsKTtcblxuICAgIHByZXNzSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRQcmVzc1NJbnRlcnZhbChwcmVzc0ludGVydmFsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIHBvc2l0aW9uc01hdGNoID0gbWF0Y2hQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIG1vdmluZ1Bvc2l0aW9ucyk7XG5cbiAgaWYgKHBvc2l0aW9uc01hdGNoKSB7XG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMucG9zc2libGVUYXAoZXZlbnQsIGVsZW1lbnQpO1xuXG4gICAgICB0aGlzLnBvc3NpYmxlU3dpcGUoZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlclBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBmaWx0ZXJQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGxldCBwcmVzc0ludGVydmFsID0gdGhpcy5nZXRQcmVzc1NJbnRlcnZhbCgpO1xuXG4gIGlmIChwcmVzc0ludGVydmFsICE9PSBudWxsKSB7XG4gICAgY2xlYXJUaW1lb3V0KHByZXNzSW50ZXJ2YWwpO1xuXG4gICAgcHJlc3NJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFByZXNzU0ludGVydmFsKHByZXNzSW50ZXJ2YWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvc3NpYmxlVGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIHRpbWUgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRpbWUoKSxcbiAgICAgICAgc3BlZWQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFNwZWVkKCk7XG5cbiAgaWYgKChzcGVlZCA9PT0gMCkgJiYgKHRpbWUgPCBNQVhJTVVNX1RBUF9USU1FKSl7XG4gICAgdGhpcy50YXAoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvc3NpYmxlU3dpcGUoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgc3BlZWQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFNwZWVkKCk7XG5cbiAgaWYgKHNwZWVkID4gTUlOSU1VTV9TV0lQRV9TUEVFRCkge1xuICAgIHRoaXMuc3dpcGUoZXZlbnQsIGVsZW1lbnQsIHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRhcChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBzdGFydFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgdG9wID0gc3RhcnRQb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gIGxldCB0YXBJbnRlcnZhbCA9IHRoaXMuZ2V0VGFwSW50ZXJ2YWwoKTtcblxuICBpZiAodGFwSW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICBjbGVhclRpbWVvdXQodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGFwSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG5cbiAgICB0aGlzLmRvdWJsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHRhcEludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFwSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG5cbiAgICB0aGlzLnNpbmdsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbiAgfSwgVEFQX0RFTEFZKTtcblxuICB0aGlzLnNldFRhcEludGVydmFsKHRhcEludGVydmFsKTtcbn1cblxuZnVuY3Rpb24gZHJhZyhldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICB0b3AgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRMZWZ0KCksXG4gICAgICAgIGRpcmVjdGlvbiA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0RGlyZWN0aW9uKCk7XG5cbiAgbGV0IGN1c3RvbUV2ZW50VHlwZTtcblxuICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG5cbiAgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICBpZiAoKE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKFBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicygtUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoKFBJIC0gTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChjdXN0b21FdmVudFR5cGUgIT09IG51bGwpIHtcbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBpbmNoKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBzZWNvbmRNb3ZpbmdQb3NpdGlvbiA9IHNlY29uZChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0TW92aW5nUG9zaXRpb24sIHNlY29uZE1vdmluZ1Bvc2l0aW9uKSxcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRNYWduaXR1ZGUgPSB0aGlzLmdldFN0YXJ0TWFnbml0dWRlKCksXG4gICAgICAgIG1hZ25pdHVkZSA9IHJlbGF0aXZlTW92aW5nUG9zaXRpb24uZ2V0TWFnbml0dWRlKCksXG4gICAgICAgIHJhdGlvID0gbWFnbml0dWRlIC8gc3RhcnRNYWduaXR1ZGU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcmF0aW8pO1xufVxuXG5mdW5jdGlvbiBwcmVzcyhldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQUkVTU19DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc3dpcGUoZXZlbnQsIGVsZW1lbnQsIHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGN1c3RvbUV2ZW50VHlwZSA9IG51bGw7XG5cbiAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5hYnMoTWF0aC5jb3MoZGlyZWN0aW9uKSk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLmFicyhNYXRoLnNpbihkaXJlY3Rpb24pKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicygtUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguYWJzKE1hdGguc2luKGRpcmVjdGlvbikpO1xuICB9XG5cbiAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguYWJzKE1hdGguY29zKGRpcmVjdGlvbikpO1xuICB9XG5cbiAgaWYgKGN1c3RvbUV2ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNpbmdsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTsgLy8vXG59XG5cbmZ1bmN0aW9uIGRvdWJsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbn1cblxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sICAvLy9cbiAgICAgICAgdG9wID0gc3RhcnRQb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG59XG5cbmZ1bmN0aW9uIHBpbmNoU3RhcnQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHNlY29uZFN0YXJ0UG9zaXRpb24gPSBzZWNvbmQoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICByZWxhdGl2ZVN0YXJ0UG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RTdGFydFBvc2l0aW9uLCBzZWNvbmRTdGFydFBvc2l0aW9uKSxcbiAgICAgICAgbWFnbml0dWRlID0gcmVsYXRpdmVTdGFydFBvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IG1hZ25pdHVkZTsgLy8vXG5cbiAgdGhpcy5zZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG59XG5cbmNvbnN0IHRvdWNoTWl4aW5zID0ge1xuICBlbmFibGVUb3VjaCxcbiAgZGlzYWJsZVRvdWNoLFxuICBvbkN1c3RvbVByZXNzLFxuICBvZmZDdXN0b21QcmVzcyxcbiAgb25DdXN0b21EcmFnLFxuICBvbkN1c3RvbURyYWdVcCxcbiAgb2ZmQ3VzdG9tRHJhZ1VwLFxuICBvbkN1c3RvbURyYWdEb3duLFxuICBvZmZDdXN0b21EcmFnRG93bixcbiAgb25DdXN0b21EcmFnTGVmdCxcbiAgb2ZmQ3VzdG9tRHJhZ0xlZnQsXG4gIG9uQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvZmZDdXN0b21EcmFnUmlnaHQsXG4gIG9uQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvZmZDdXN0b21EcmFnU3RhcnQsXG4gIG9uQ3VzdG9tU3dpcGVVcCxcbiAgb2ZmQ3VzdG9tU3dpcGVVcCxcbiAgb25DdXN0b21Td2lwZURvd24sXG4gIG9mZkN1c3RvbVN3aXBlRG93bixcbiAgb25DdXN0b21Td2lwZUxlZnQsXG4gIG9mZkN1c3RvbVN3aXBlTGVmdCxcbiAgb25DdXN0b21Td2lwZVJpZ2h0LFxuICBvZmZDdXN0b21Td2lwZVJpZ2h0LFxuICBvbkN1c3RvbVBpbmNoTW92ZSxcbiAgb2ZmQ3VzdG9tUGluY2hNb3ZlLFxuICBvbkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9mZkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9uQ3VzdG9tU2luZ2xlVGFwLFxuICBvZmZDdXN0b21TaW5nbGVUYXAsXG4gIG9uQ3VzdG9tRG91YmxlVGFwLFxuICBvZmZDdXN0b21Eb3VibGVUYXAsXG4gIGdldFRhcEludGVydmFsLFxuICBnZXRQcmVzc1NJbnRlcnZhbCxcbiAgZ2V0U3RhcnRNYWduaXR1ZGUsXG4gIGdldFN0YXJ0UG9zaXRpb25zLFxuICBnZXRNb3ZpbmdQb3NpdGlvbnMsXG4gIHNldFRhcEludGVydmFsLFxuICBzZXRQcmVzc1NJbnRlcnZhbCxcbiAgc2V0U3RhcnRNYWduaXR1ZGUsXG4gIHNldFN0YXJ0UG9zaXRpb25zLFxuICBzZXRNb3ZpbmdQb3NpdGlvbnMsXG4gIHRvdWNoU3RhcnRIYW5kbGVyLFxuICBtb3VzZURvd25IYW5kbGVyLFxuICB0b3VjaE1vdmVIYW5kbGVyLFxuICBtb3VzZU1vdmVIYW5kbGVyLFxuICB0b3VjaEVuZEhhbmRsZXIsXG4gIG1vdXNlVXBIYW5kbGVyLFxuICBzdGFydEhhbmRsZXIsXG4gIG1vdmVIYW5kbGVyLFxuICBlbmRIYW5kbGVyLFxuICBwb3NzaWJsZVRhcCxcbiAgcG9zc2libGVTd2lwZSxcbiAgdGFwLFxuICBkcmFnLFxuICBwaW5jaCxcbiAgcHJlc3MsXG4gIHN3aXBlLFxuICBzaW5nbGVUYXAsXG4gIGRvdWJsZVRhcCxcbiAgZHJhZ1N0YXJ0LFxuICBwaW5jaFN0YXJ0XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b3VjaE1peGlucztcbiJdLCJuYW1lcyI6WyJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsImVuYWJsZVRvdWNoIiwidGFwSW50ZXJ2YWwiLCJzdGFydE1hZ25pdHVkZSIsInN0YXJ0UG9zaXRpb25zIiwibW92aW5nUG9zaXRpb25zIiwidXBkYXRlU3RhdGUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ3aW5kb3ciLCJvbk1vdXNlVXAiLCJtb3VzZVVwSGFuZGxlciIsIm9uVG91Y2hTdGFydCIsInRvdWNoU3RhcnRIYW5kbGVyIiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmVIYW5kbGVyIiwib25Ub3VjaEVuZCIsInRvdWNoRW5kSGFuZGxlciIsImRpc2FibGVUb3VjaCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlVXAiLCJvZmZUb3VjaFN0YXJ0Iiwib2ZmVG91Y2hNb3ZlIiwib2ZmVG91Y2hFbmQiLCJvbkN1c3RvbVByZXNzIiwicHJlc3NDdXN0b21IYW5kbGVyIiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIlBSRVNTX0NVU1RPTV9FVkVOVF9UWVBFIiwiY3VzdG9tSGFuZGxlciIsIm9uQ3VzdG9tRXZlbnQiLCJvZmZDdXN0b21QcmVzcyIsIm9mZkN1c3RvbUV2ZW50Iiwib25DdXN0b21EcmFnIiwiZHJhZ0N1c3RvbUhhbmRsZXIiLCJEUkFHX0NVU1RPTV9FVkVOVF9UWVBFIiwib25DdXN0b21EcmFnVXAiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwiRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ0xlZnQiLCJkcmFnTGVmdEN1c3RvbUhhbmRsZXIiLCJEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnTGVmdCIsIm9uQ3VzdG9tRHJhZ1JpZ2h0IiwiZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciIsIkRSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnUmlnaHQiLCJvbkN1c3RvbURyYWdTdGFydCIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwiU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwiUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21TaW5nbGVUYXAiLCJzaW5nbGVUYXBDdXN0b21IYW5kbGVyIiwiU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVNpbmdsZVRhcCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsIkRPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJnZXRUYXBJbnRlcnZhbCIsImdldFN0YXRlIiwiZ2V0UHJlc3NTSW50ZXJ2YWwiLCJwcmVzc0ludGVydmFsIiwiZ2V0U3RhcnRNYWduaXR1ZGUiLCJnZXRTdGFydFBvc2l0aW9ucyIsImdldE1vdmluZ1Bvc2l0aW9ucyIsInNldFRhcEludGVydmFsIiwic2V0UHJlc3NTSW50ZXJ2YWwiLCJzZXRTdGFydE1hZ25pdHVkZSIsInNldFN0YXJ0UG9zaXRpb25zIiwic2V0TW92aW5nUG9zaXRpb25zIiwiZXZlbnQiLCJzdGFydEhhbmRsZXIiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZCIsInBvc2l0aW9ucyIsInBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IiwibW91c2VFdmVudCIsInBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50IiwibW92ZUhhbmRsZXIiLCJlbmRIYW5kbGVyIiwicG9zaXRpb25zRnJvbUV2ZW50IiwiZmlsdGVyUG9zaXRpb25zIiwic3RhcnRpbmdQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkcmFnU3RhcnQiLCJzZXRUaW1lb3V0IiwicHJlc3MiLCJQUkVTU19ERUxBWSIsInBpbmNoU3RhcnQiLCJwb3NpdGlvbnNNYXRjaCIsIm1hdGNoUG9zaXRpb25zIiwic29ydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9uc0xlbmd0aCIsImRyYWciLCJwaW5jaCIsImNsZWFyVGltZW91dCIsInN0YXJ0UG9zaXRpb25zTGVuZ3RoIiwicG9zc2libGVUYXAiLCJwb3NzaWJsZVN3aXBlIiwiZmlyc3RTdGFydFBvc2l0aW9uIiwiZmlyc3RNb3ZpbmdQb3NpdGlvbiIsImZpcnN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInJlbGF0aXZlUG9zaXRpb24iLCJSZWxhdGl2ZVBvc2l0aW9uIiwiZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbiIsInRpbWUiLCJnZXRUaW1lIiwic3BlZWQiLCJnZXRTcGVlZCIsIk1BWElNVU1fVEFQX1RJTUUiLCJ0YXAiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJNSU5JTVVNX1NXSVBFX1NQRUVEIiwic3dpcGUiLCJzdGFydFBvc2l0aW9uIiwidG9wIiwiZ2V0VG9wIiwibGVmdCIsImdldExlZnQiLCJkb3VibGVUYXAiLCJzaW5nbGVUYXAiLCJUQVBfREVMQVkiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJNYXRoIiwiYWJzIiwiTUFYSU1VTV9TUFJFQUQiLCJQSV9PVkVSX1RXTyIsIlBJIiwic2Vjb25kTW92aW5nUG9zaXRpb24iLCJyZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uIiwibWFnbml0dWRlIiwiZ2V0TWFnbml0dWRlIiwicmF0aW8iLCJjb3MiLCJzaW4iLCJzZWNvbmRTdGFydFBvc2l0aW9uIiwicmVsYXRpdmVTdGFydFBvc2l0aW9uIiwidG91Y2hNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXF1QkE7OztlQUFBOzs7b0JBbnVCdUI7eUJBQ1E7K0RBRUY7eUJBRWtGO3lCQUNFO2dDQWdCMUc7Ozs7OztBQUVQLElBQVFBLE9BQXdCQyx5QkFBYyxDQUF0Q0QsTUFBTUUsUUFBa0JELHlCQUFjLENBQWhDQyxPQUFPQyxTQUFXRix5QkFBYyxDQUF6QkU7QUFFckIsU0FBU0M7SUFDUCxJQUFNQyxjQUFjLE1BQ2RDLGlCQUFpQixNQUNqQkMsaUJBQWlCLEVBQUUsRUFDbkJDLGtCQUFr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