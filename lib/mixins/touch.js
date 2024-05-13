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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, TOUCHSTART_EVENT_TYPE = _easy.eventTypes.TOUCHSTART_EVENT_TYPE, TOUCHMOVE_EVENT_TYPE = _easy.eventTypes.TOUCHMOVE_EVENT_TYPE, TOUCHEND_EVENT_TYPE = _easy.eventTypes.TOUCHEND_EVENT_TYPE;
function enableTouch() {
    var tapInterval = null, startMagnitude = null, startPositions = [], movingPositions = [], customGesturesEnabled = true;
    this.updateState({
        tapInterval: tapInterval,
        startMagnitude: startMagnitude,
        startPositions: startPositions,
        movingPositions: movingPositions,
        customGesturesEnabled: customGesturesEnabled
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
function areCustomGesturesEnabled() {
    var customGesturesEnabled = this.getState().customGesturesEnabled;
    return customGesturesEnabled;
}
function setCustomGesturesEnabled(customGesturesEnabled) {
    this.updateState({
        customGesturesEnabled: customGesturesEnabled
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
    this.callCustomHandlersConditionally(customEventType, event, element, top, left);
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
        this.callCustomHandlersConditionally(customEventType, event, element, top, left);
    }
}
function pinch(event, element) {
    var movingPositions = this.getMovingPositions(), firstMovingPosition = first(movingPositions), secondMovingPosition = second(movingPositions), relativeMovingPosition = _relative.default.fromFirstPositionAndSecondPosition(firstMovingPosition, secondMovingPosition), customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, startMagnitude = this.getStartMagnitude(), magnitude = relativeMovingPosition.getMagnitude(), ratio = magnitude / startMagnitude;
    this.callCustomHandlersConditionally(customEventType, event, element, ratio);
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
        this.callCustomHandlersConditionally(customEventType, event, element, top, left, speed);
    }
}
function dragStart(event, element) {
    var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), startPosition = firstStartPosition, top = startPosition.getTop(), left = startPosition.getLeft();
    this.callCustomHandlersConditionally(customEventType, event, element, top, left);
}
function pinchStart(event, element) {
    var customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE, startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), secondStartPosition = second(startPositions), relativeStartPosition = _relative.default.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition), magnitude = relativeStartPosition.getMagnitude(), startMagnitude = magnitude; ///
    this.setStartMagnitude(startMagnitude);
    this.callCustomHandlersConditionally(customEventType, event, element);
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
function enableCustomGestures() {
    var customGesturedEnabled = true;
    this.setCustomGesturesEnabled(customGesturedEnabled);
}
function disableCustomGestures() {
    var customGesturedEnabled = false;
    this.setCustomGesturesEnabled(customGesturedEnabled);
}
function callCustomHandlersConditionally(customEventType, event, element) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        remainingArguments[_key - 3] = arguments[_key];
    }
    var customGesturesEnabled = this.areCustomGesturesEnabled();
    if (customGesturesEnabled) {
        this.callCustomHandlers.apply(this, [
            customEventType,
            event,
            element
        ].concat(_to_consumable_array(remainingArguments)));
    }
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
    areCustomGesturesEnabled: areCustomGesturesEnabled,
    setCustomGesturesEnabled: setCustomGesturesEnabled,
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
    singleTapOrDoubleTap: singleTapOrDoubleTap,
    enableCustomGestures: enableCustomGestures,
    disableCustomGestures: disableCustomGestures,
    callCustomHandlersConditionally: callCustomHandlersConditionally
};
var _default = touchMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgd2luZG93LCBldmVudFR5cGVzIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBUQVBfREVMQVksIFBJX09WRVJfVFdPLCBNQVhJTVVNX1RBUF9USU1FLCBNSU5JTVVNX1NXSVBFX1NQRUVELCBNQVhJTVVNX1NQUkVBRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNvcnRQb3NpdGlvbnMsIG1hdGNoUG9zaXRpb25zLCBmaWx0ZXJQb3NpdGlvbnMsIHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50LCBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcG9zaXRpb25zXCI7XG5pbXBvcnQgeyBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSwgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsIFRPVUNIRU5EX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmZ1bmN0aW9uIGVuYWJsZVRvdWNoKCkge1xuICBjb25zdCB0YXBJbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbnVsbCxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gW10sXG4gICAgICAgIGN1c3RvbUdlc3R1cmVzRW5hYmxlZCA9IHRydWU7XG5cbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWwsXG4gICAgc3RhcnRNYWduaXR1ZGUsXG4gICAgc3RhcnRQb3NpdGlvbnMsXG4gICAgbW92aW5nUG9zaXRpb25zLFxuICAgIGN1c3RvbUdlc3R1cmVzRW5hYmxlZFxuICB9KTtcblxuICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gIHRoaXMub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICB3aW5kb3cub25Nb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub25Ub3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydEhhbmRsZXIpO1xuICB0aGlzLm9uVG91Y2hNb3ZlKHRoaXMudG91Y2hNb3ZlSGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVUb3VjaCgpIHtcbiAgdGhpcy5vZmZNb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vZmZNb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICB3aW5kb3cub2ZmTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICB0aGlzLm9mZlRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub2ZmVG91Y2hNb3ZlKHRoaXMudG91Y2hNb3ZlSGFuZGxlcik7XG4gIHRoaXMub2ZmVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoU3RhcnQodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hTVEFSVF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmVG91Y2hTdGFydCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSFNUQVJUX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaE1vdmUodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZUb3VjaE1vdmUodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaEVuZCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSEVORF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmVG91Y2hFbmQodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hFTkRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZFdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdVcChkcmFnVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1VwKGRyYWdVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnRG93bihkcmFnRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0Rvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ0Rvd24oZHJhZ0Rvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdMZWZ0KGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnTGVmdChkcmFnTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0xlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1JpZ2h0KGRyYWdSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnUmlnaHQoZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdTdGFydChkcmFnU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZURvd24oc3dpcGVEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVMZWZ0KHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoTW92ZShwaW5jaE1vdmVDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaE1vdmVDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21TaW5nbGVUYXAoc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVNpbmdsZVRhcChzaW5nbGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzaW5nbGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRG91YmxlVGFwKGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRvdWJsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Eb3VibGVUYXAoZG91YmxlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZG91YmxlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBnZXRUYXBJbnRlcnZhbCgpIHtcbiAgY29uc3QgeyB0YXBJbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiB0YXBJbnRlcnZhbDtcbn1cblxuZnVuY3Rpb24gc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0TWFnbml0dWRlKCkge1xuICBjb25zdCB7IHN0YXJ0TWFnbml0dWRlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0TWFnbml0dWRlO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydE1hZ25pdHVkZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYXJlQ3VzdG9tR2VzdHVyZXNFbmFibGVkKCkge1xuICBjb25zdCB7IGN1c3RvbUdlc3R1cmVzRW5hYmxlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBjdXN0b21HZXN0dXJlc0VuYWJsZWQ7XG59XG5cbmZ1bmN0aW9uIHNldEN1c3RvbUdlc3R1cmVzRW5hYmxlZChjdXN0b21HZXN0dXJlc0VuYWJsZWQpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgY3VzdG9tR2VzdHVyZXNFbmFibGVkXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydFBvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBzdGFydFBvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydFBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE1vdmluZ1Bvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBtb3ZpbmdQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gbW92aW5nUG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRNb3ZpbmdQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIG1vdmluZ1Bvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hTdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hFbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIHB1c2goc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3Qgc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgdGhpcy5kcmFnU3RhcnQoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgdGhpcy5waW5jaFN0YXJ0KGV2ZW50LCBlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgcHVzaChtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3QgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBzb3J0UG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgc3RhcnRQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgbW92aW5nUG9zaXRpb25zTGVuZ3RoID0gbW92aW5nUG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuZHJhZyhldmVudCwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5waW5jaChldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5wb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIHRoaXMucG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHNpbmdsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTsgLy8vXG59XG5cbmZ1bmN0aW9uIGRvdWJsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG59XG5cbmZ1bmN0aW9uIGRyYWcoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgdG9wID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgbGVmdCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0TGVmdCgpLFxuICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpO1xuXG4gIGxldCBjdXN0b21FdmVudFR5cGUgPSBudWxsO1xuXG4gIGlmICgoTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKC1QSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmICgoUEkgLSBNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKGN1c3RvbUV2ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBpbmNoKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBzZWNvbmRNb3ZpbmdQb3NpdGlvbiA9IHNlY29uZChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0TW92aW5nUG9zaXRpb24sIHNlY29uZE1vdmluZ1Bvc2l0aW9uKSxcbiAgICAgICAgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRNYWduaXR1ZGUgPSB0aGlzLmdldFN0YXJ0TWFnbml0dWRlKCksXG4gICAgICAgIG1hZ25pdHVkZSA9IHJlbGF0aXZlTW92aW5nUG9zaXRpb24uZ2V0TWFnbml0dWRlKCksXG4gICAgICAgIHJhdGlvID0gbWFnbml0dWRlIC8gc3RhcnRNYWduaXR1ZGU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHJhdGlvKTtcbn1cblxuZnVuY3Rpb24gc3dpcGUoZXZlbnQsIGVsZW1lbnQsIHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgbGV0IGN1c3RvbUV2ZW50VHlwZSA9IG51bGw7XG5cbiAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5jb3MoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguc2luKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoLVBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguY29zKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBzdGFydFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAgLy8vXG4gICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbn1cblxuZnVuY3Rpb24gcGluY2hTdGFydChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc2Vjb25kU3RhcnRQb3NpdGlvbiA9IHNlY29uZChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHJlbGF0aXZlU3RhcnRQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFN0YXJ0UG9zaXRpb24sIHNlY29uZFN0YXJ0UG9zaXRpb24pLFxuICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZVN0YXJ0UG9zaXRpb24uZ2V0TWFnbml0dWRlKCksXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbWFnbml0dWRlOyAvLy9cblxuICB0aGlzLnNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHBvc3NpYmxlVGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIHRpbWUgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRpbWUoKSxcbiAgICAgICAgc3BlZWQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFNwZWVkKCk7XG5cbiAgaWYgKChzcGVlZCA9PT0gMCkgJiYgKHRpbWUgPCBNQVhJTVVNX1RBUF9USU1FKSl7XG4gICAgdGhpcy5zaW5nbGVUYXBPckRvdWJsZVRhcChldmVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpLFxuICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKTtcblxuICBpZiAoc3BlZWQgPiBNSU5JTVVNX1NXSVBFX1NQRUVEKSB7XG4gICAgdGhpcy5zd2lwZShldmVudCwgZWxlbWVudCwgc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2luZ2xlVGFwT3JEb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICBsZXQgdGFwSW50ZXJ2YWwgPSB0aGlzLmdldFRhcEludGVydmFsKCk7XG5cbiAgaWYgKHRhcEludGVydmFsICE9PSBudWxsKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRhcEludGVydmFsKTtcblxuICAgIHRhcEludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5kb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICB0YXBJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhcEludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5zaW5nbGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG4gIH0sIFRBUF9ERUxBWSk7XG5cbiAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUN1c3RvbUdlc3R1cmVzKCkge1xuICBjb25zdCBjdXN0b21HZXN0dXJlZEVuYWJsZWQgPSB0cnVlO1xuXG4gIHRoaXMuc2V0Q3VzdG9tR2VzdHVyZXNFbmFibGVkKGN1c3RvbUdlc3R1cmVkRW5hYmxlZCk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVDdXN0b21HZXN0dXJlcygpIHtcbiAgY29uc3QgY3VzdG9tR2VzdHVyZWRFbmFibGVkID0gZmFsc2U7XG5cbiAgdGhpcy5zZXRDdXN0b21HZXN0dXJlc0VuYWJsZWQoY3VzdG9tR2VzdHVyZWRFbmFibGVkKTtcbn1cblxuZnVuY3Rpb24gY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgY3VzdG9tR2VzdHVyZXNFbmFibGVkID0gdGhpcy5hcmVDdXN0b21HZXN0dXJlc0VuYWJsZWQoKTtcblxuICBpZiAoY3VzdG9tR2VzdHVyZXNFbmFibGVkKSB7XG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxufVxuXG5jb25zdCB0b3VjaE1peGlucyA9IHtcbiAgZW5hYmxlVG91Y2gsXG4gIGRpc2FibGVUb3VjaCxcbiAgb25Ub3VjaFN0YXJ0LFxuICBvZmZUb3VjaFN0YXJ0LFxuICBvblRvdWNoTW92ZSxcbiAgb2ZmVG91Y2hNb3ZlLFxuICBvblRvdWNoRW5kLFxuICBvZmZUb3VjaEVuZCxcbiAgb25DdXN0b21EcmFnVXAsXG4gIG9mZkN1c3RvbURyYWdVcCxcbiAgb25DdXN0b21EcmFnRG93bixcbiAgb2ZmQ3VzdG9tRHJhZ0Rvd24sXG4gIG9uQ3VzdG9tRHJhZ0xlZnQsXG4gIG9mZkN1c3RvbURyYWdMZWZ0LFxuICBvbkN1c3RvbURyYWdSaWdodCxcbiAgb2ZmQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvbkN1c3RvbURyYWdTdGFydCxcbiAgb2ZmQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvbkN1c3RvbVN3aXBlVXAsXG4gIG9mZkN1c3RvbVN3aXBlVXAsXG4gIG9uQ3VzdG9tU3dpcGVEb3duLFxuICBvZmZDdXN0b21Td2lwZURvd24sXG4gIG9uQ3VzdG9tU3dpcGVMZWZ0LFxuICBvZmZDdXN0b21Td2lwZUxlZnQsXG4gIG9uQ3VzdG9tU3dpcGVSaWdodCxcbiAgb2ZmQ3VzdG9tU3dpcGVSaWdodCxcbiAgb25DdXN0b21QaW5jaE1vdmUsXG4gIG9mZkN1c3RvbVBpbmNoTW92ZSxcbiAgb25DdXN0b21QaW5jaFN0YXJ0LFxuICBvZmZDdXN0b21QaW5jaFN0YXJ0LFxuICBvbkN1c3RvbVNpbmdsZVRhcCxcbiAgb2ZmQ3VzdG9tU2luZ2xlVGFwLFxuICBvbkN1c3RvbURvdWJsZVRhcCxcbiAgb2ZmQ3VzdG9tRG91YmxlVGFwLFxuICBnZXRUYXBJbnRlcnZhbCxcbiAgc2V0VGFwSW50ZXJ2YWwsXG4gIGdldFN0YXJ0TWFnbml0dWRlLFxuICBzZXRTdGFydE1hZ25pdHVkZSxcbiAgZ2V0U3RhcnRQb3NpdGlvbnMsXG4gIHNldFN0YXJ0UG9zaXRpb25zLFxuICBhcmVDdXN0b21HZXN0dXJlc0VuYWJsZWQsXG4gIHNldEN1c3RvbUdlc3R1cmVzRW5hYmxlZCxcbiAgZ2V0TW92aW5nUG9zaXRpb25zLFxuICBzZXRNb3ZpbmdQb3NpdGlvbnMsXG4gIHRvdWNoU3RhcnRIYW5kbGVyLFxuICBtb3VzZURvd25IYW5kbGVyLFxuICB0b3VjaE1vdmVIYW5kbGVyLFxuICBtb3VzZU1vdmVIYW5kbGVyLFxuICB0b3VjaEVuZEhhbmRsZXIsXG4gIG1vdXNlVXBIYW5kbGVyLFxuICBzdGFydEhhbmRsZXIsXG4gIG1vdmVIYW5kbGVyLFxuICBlbmRIYW5kbGVyLFxuICBzaW5nbGVUYXAsXG4gIGRvdWJsZVRhcCxcbiAgZHJhZyxcbiAgcGluY2gsXG4gIHN3aXBlLFxuICBkcmFnU3RhcnQsXG4gIHBpbmNoU3RhcnQsXG4gIHBvc3NpYmxlVGFwLFxuICBwb3NzaWJsZVN3aXBlLFxuICBzaW5nbGVUYXBPckRvdWJsZVRhcCxcbiAgZW5hYmxlQ3VzdG9tR2VzdHVyZXMsXG4gIGRpc2FibGVDdXN0b21HZXN0dXJlcyxcbiAgY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG91Y2hNaXhpbnM7XG4iXSwibmFtZXMiOlsicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJzZWNvbmQiLCJUT1VDSFNUQVJUX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiVE9VQ0hNT1ZFX0VWRU5UX1RZUEUiLCJUT1VDSEVORF9FVkVOVF9UWVBFIiwiZW5hYmxlVG91Y2giLCJ0YXBJbnRlcnZhbCIsInN0YXJ0TWFnbml0dWRlIiwic3RhcnRQb3NpdGlvbnMiLCJtb3ZpbmdQb3NpdGlvbnMiLCJjdXN0b21HZXN0dXJlc0VuYWJsZWQiLCJ1cGRhdGVTdGF0ZSIsIm9uTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsIndpbmRvdyIsIm9uTW91c2VVcCIsIm1vdXNlVXBIYW5kbGVyIiwib25Ub3VjaFN0YXJ0IiwidG91Y2hTdGFydEhhbmRsZXIiLCJvblRvdWNoTW92ZSIsInRvdWNoTW92ZUhhbmRsZXIiLCJvblRvdWNoRW5kIiwidG91Y2hFbmRIYW5kbGVyIiwiZGlzYWJsZVRvdWNoIiwib2ZmTW91c2VEb3duIiwib2ZmTW91c2VNb3ZlIiwib2ZmTW91c2VVcCIsIm9mZlRvdWNoU3RhcnQiLCJvZmZUb3VjaE1vdmUiLCJvZmZUb3VjaEVuZCIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJvbkV2ZW50Iiwib2ZmRXZlbnQiLCJvbkN1c3RvbURyYWdVcCIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJlbGVtZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSIsImN1c3RvbUhhbmRsZXIiLCJvbkN1c3RvbUV2ZW50Iiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRXZlbnQiLCJvbkN1c3RvbURyYWdEb3duIiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdMZWZ0IiwiZHJhZ0xlZnRDdXN0b21IYW5kbGVyIiwiRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ0xlZnQiLCJvbkN1c3RvbURyYWdSaWdodCIsImRyYWdSaWdodEN1c3RvbUhhbmRsZXIiLCJEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ1JpZ2h0Iiwib25DdXN0b21EcmFnU3RhcnQiLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwiRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVVcCIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwiU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsIlNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsIlNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsIlBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsIlBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsIlNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvbkN1c3RvbURvdWJsZVRhcCIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwiZ2V0VGFwSW50ZXJ2YWwiLCJnZXRTdGF0ZSIsInNldFRhcEludGVydmFsIiwiZ2V0U3RhcnRNYWduaXR1ZGUiLCJzZXRTdGFydE1hZ25pdHVkZSIsImFyZUN1c3RvbUdlc3R1cmVzRW5hYmxlZCIsInNldEN1c3RvbUdlc3R1cmVzRW5hYmxlZCIsImdldFN0YXJ0UG9zaXRpb25zIiwic2V0U3RhcnRQb3NpdGlvbnMiLCJnZXRNb3ZpbmdQb3NpdGlvbnMiLCJzZXRNb3ZpbmdQb3NpdGlvbnMiLCJldmVudCIsInN0YXJ0SGFuZGxlciIsInRvdWNoRXZlbnQiLCJjaGFuZ2VkIiwicG9zaXRpb25zIiwicG9zaXRpb25zRnJvbVRvdWNoRXZlbnQiLCJtb3VzZUV2ZW50IiwicG9zaXRpb25zRnJvbU1vdXNlRXZlbnQiLCJtb3ZlSGFuZGxlciIsImVuZEhhbmRsZXIiLCJwb3NpdGlvbnNGcm9tRXZlbnQiLCJmaWx0ZXJQb3NpdGlvbnMiLCJzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsImRyYWdTdGFydCIsInBpbmNoU3RhcnQiLCJwb3NpdGlvbnNNYXRjaCIsIm1hdGNoUG9zaXRpb25zIiwic29ydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9uc0xlbmd0aCIsImRyYWciLCJwaW5jaCIsInN0YXJ0UG9zaXRpb25zTGVuZ3RoIiwicG9zc2libGVUYXAiLCJwb3NzaWJsZVN3aXBlIiwic2luZ2xlVGFwIiwidG9wIiwibGVmdCIsImNhbGxDdXN0b21IYW5kbGVycyIsImRvdWJsZVRhcCIsImNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkiLCJmaXJzdFN0YXJ0UG9zaXRpb24iLCJmaXJzdE1vdmluZ1Bvc2l0aW9uIiwiZmlyc3RQb3NpdGlvbiIsInNlY29uZFBvc2l0aW9uIiwicmVsYXRpdmVQb3NpdGlvbiIsIlJlbGF0aXZlUG9zaXRpb24iLCJmcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uIiwiZ2V0VG9wIiwiZ2V0TGVmdCIsImRpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsIk1hdGgiLCJhYnMiLCJNQVhJTVVNX1NQUkVBRCIsIlBJX09WRVJfVFdPIiwiUEkiLCJzZWNvbmRNb3ZpbmdQb3NpdGlvbiIsInJlbGF0aXZlTW92aW5nUG9zaXRpb24iLCJtYWduaXR1ZGUiLCJnZXRNYWduaXR1ZGUiLCJyYXRpbyIsInN3aXBlIiwic3BlZWQiLCJjb3MiLCJzaW4iLCJzdGFydFBvc2l0aW9uIiwic2Vjb25kU3RhcnRQb3NpdGlvbiIsInJlbGF0aXZlU3RhcnRQb3NpdGlvbiIsInRpbWUiLCJnZXRUaW1lIiwiZ2V0U3BlZWQiLCJNQVhJTVVNX1RBUF9USU1FIiwic2luZ2xlVGFwT3JEb3VibGVUYXAiLCJNSU5JTVVNX1NXSVBFX1NQRUVEIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIlRBUF9ERUxBWSIsImVuYWJsZUN1c3RvbUdlc3R1cmVzIiwiY3VzdG9tR2VzdHVyZWRFbmFibGVkIiwiZGlzYWJsZUN1c3RvbUdlc3R1cmVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidG91Y2hNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7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