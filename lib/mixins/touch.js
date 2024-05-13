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
        if (startPositionsLength === 1) {
            var dragInterval = this.getDragInterval();
            if (dragInterval !== null) {
                clearTimeout(dragInterval);
                dragInterval = null;
                this.setDragInterval(dragInterval);
            }
        }
        if (startPositionsLength === 2) {
            var pinchInterval = this.getPinchInterval();
            if (pinchInterval !== null) {
                clearTimeout(pinchInterval);
                pinchInterval = null;
                this.setPinchInterval(pinchInterval);
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgd2luZG93LCBldmVudFR5cGVzIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBUQVBfREVMQVksIFBJX09WRVJfVFdPLCBNQVhJTVVNX1RBUF9USU1FLCBNSU5JTVVNX1NXSVBFX1NQRUVELCBNQVhJTVVNX1NQUkVBRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNvcnRQb3NpdGlvbnMsIG1hdGNoUG9zaXRpb25zLCBmaWx0ZXJQb3NpdGlvbnMsIHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50LCBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcG9zaXRpb25zXCI7XG5pbXBvcnQgeyBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSwgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsIFRPVUNIRU5EX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmZ1bmN0aW9uIGVuYWJsZVRvdWNoKCkge1xuICBjb25zdCB0YXBJbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbnVsbCxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gW10sXG4gICAgICAgIGN1c3RvbUdlc3R1cmVzRW5hYmxlZCA9IHRydWU7XG5cbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWwsXG4gICAgc3RhcnRNYWduaXR1ZGUsXG4gICAgc3RhcnRQb3NpdGlvbnMsXG4gICAgbW92aW5nUG9zaXRpb25zLFxuICAgIGN1c3RvbUdlc3R1cmVzRW5hYmxlZFxuICB9KTtcblxuICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gIHRoaXMub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICB3aW5kb3cub25Nb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub25Ub3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydEhhbmRsZXIpO1xuICB0aGlzLm9uVG91Y2hNb3ZlKHRoaXMudG91Y2hNb3ZlSGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVUb3VjaCgpIHtcbiAgdGhpcy5vZmZNb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vZmZNb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICB3aW5kb3cub2ZmTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICB0aGlzLm9mZlRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub2ZmVG91Y2hNb3ZlKHRoaXMudG91Y2hNb3ZlSGFuZGxlcik7XG4gIHRoaXMub2ZmVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoU3RhcnQodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hTVEFSVF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmVG91Y2hTdGFydCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSFNUQVJUX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaE1vdmUodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZUb3VjaE1vdmUodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaEVuZCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSEVORF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmVG91Y2hFbmQodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hFTkRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZFdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdVcChkcmFnVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1VwKGRyYWdVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnRG93bihkcmFnRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0Rvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ0Rvd24oZHJhZ0Rvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdMZWZ0KGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnTGVmdChkcmFnTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0xlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1JpZ2h0KGRyYWdSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnUmlnaHQoZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdTdGFydChkcmFnU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZURvd24oc3dpcGVEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVMZWZ0KHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoTW92ZShwaW5jaE1vdmVDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaE1vdmVDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21TaW5nbGVUYXAoc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVNpbmdsZVRhcChzaW5nbGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzaW5nbGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRG91YmxlVGFwKGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRvdWJsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Eb3VibGVUYXAoZG91YmxlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZG91YmxlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBnZXRUYXBJbnRlcnZhbCgpIHtcbiAgY29uc3QgeyB0YXBJbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiB0YXBJbnRlcnZhbDtcbn1cblxuZnVuY3Rpb24gc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0TWFnbml0dWRlKCkge1xuICBjb25zdCB7IHN0YXJ0TWFnbml0dWRlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0TWFnbml0dWRlO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydE1hZ25pdHVkZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYXJlQ3VzdG9tR2VzdHVyZXNFbmFibGVkKCkge1xuICBjb25zdCB7IGN1c3RvbUdlc3R1cmVzRW5hYmxlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBjdXN0b21HZXN0dXJlc0VuYWJsZWQ7XG59XG5cbmZ1bmN0aW9uIHNldEN1c3RvbUdlc3R1cmVzRW5hYmxlZChjdXN0b21HZXN0dXJlc0VuYWJsZWQpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgY3VzdG9tR2VzdHVyZXNFbmFibGVkXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydFBvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBzdGFydFBvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydFBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE1vdmluZ1Bvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBtb3ZpbmdQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gbW92aW5nUG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRNb3ZpbmdQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIG1vdmluZ1Bvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hTdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hFbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIHB1c2goc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3Qgc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgdGhpcy5kcmFnU3RhcnQoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgdGhpcy5waW5jaFN0YXJ0KGV2ZW50LCBlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgcHVzaChtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3QgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBzb3J0UG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgc3RhcnRQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgbW92aW5nUG9zaXRpb25zTGVuZ3RoID0gbW92aW5nUG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuZHJhZyhldmVudCwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5waW5jaChldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5wb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIHRoaXMucG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICBsZXQgZHJhZ0ludGVydmFsID0gdGhpcy5nZXREcmFnSW50ZXJ2YWwoKTtcblxuICAgICAgaWYgKGRyYWdJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoZHJhZ0ludGVydmFsKTtcblxuICAgICAgICBkcmFnSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0RHJhZ0ludGVydmFsKGRyYWdJbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgICBsZXQgcGluY2hJbnRlcnZhbCA9IHRoaXMuZ2V0UGluY2hJbnRlcnZhbCgpO1xuXG4gICAgICBpZiAocGluY2hJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQocGluY2hJbnRlcnZhbCk7XG5cbiAgICAgICAgcGluY2hJbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRQaW5jaEludGVydmFsKHBpbmNoSW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZpbHRlclBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBmaWx0ZXJQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBwb3NpdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBzaW5nbGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7IC8vL1xufVxuXG5mdW5jdGlvbiBkb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xufVxuXG5mdW5jdGlvbiBkcmFnKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIHRvcCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldExlZnQoKSxcbiAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKTtcblxuICBsZXQgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICBpZiAoKE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKFBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicygtUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoKFBJIC0gTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChjdXN0b21FdmVudFR5cGUgIT09IG51bGwpIHtcbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwaW5jaChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgc2Vjb25kTW92aW5nUG9zaXRpb24gPSBzZWNvbmQobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgcmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdE1vdmluZ1Bvc2l0aW9uLCBzZWNvbmRNb3ZpbmdQb3NpdGlvbiksXG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gdGhpcy5nZXRTdGFydE1hZ25pdHVkZSgpLFxuICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICByYXRpbyA9IG1hZ25pdHVkZSAvIHN0YXJ0TWFnbml0dWRlO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCByYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHN3aXBlKGV2ZW50LCBlbGVtZW50LCBzcGVlZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjdXN0b21FdmVudFR5cGUgPSBudWxsO1xuXG4gIGlmICgoTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguY29zKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKC1QSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5zaW4oZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmICgoUEkgLSBNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLmNvcyhkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUV2ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgIC8vL1xuICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gc3RhcnRQb3NpdGlvbi5nZXRMZWZ0KCk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG59XG5cbmZ1bmN0aW9uIHBpbmNoU3RhcnQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHNlY29uZFN0YXJ0UG9zaXRpb24gPSBzZWNvbmQoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICByZWxhdGl2ZVN0YXJ0UG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RTdGFydFBvc2l0aW9uLCBzZWNvbmRTdGFydFBvc2l0aW9uKSxcbiAgICAgICAgbWFnbml0dWRlID0gcmVsYXRpdmVTdGFydFBvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IG1hZ25pdHVkZTsgLy8vXG5cbiAgdGhpcy5zZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBwb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICB0aW1lID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRUaW1lKCksXG4gICAgICAgIHNwZWVkID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRTcGVlZCgpO1xuXG4gIGlmICgoc3BlZWQgPT09IDApICYmICh0aW1lIDwgTUFYSU1VTV9UQVBfVElNRSkpe1xuICAgIHRoaXMuc2luZ2xlVGFwT3JEb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvc3NpYmxlU3dpcGUoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgc3BlZWQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFNwZWVkKCk7XG5cbiAgaWYgKHNwZWVkID4gTUlOSU1VTV9TV0lQRV9TUEVFRCkge1xuICAgIHRoaXMuc3dpcGUoZXZlbnQsIGVsZW1lbnQsIHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNpbmdsZVRhcE9yRG91YmxlVGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gc3RhcnRQb3NpdGlvbi5nZXRMZWZ0KCk7XG5cbiAgbGV0IHRhcEludGVydmFsID0gdGhpcy5nZXRUYXBJbnRlcnZhbCgpO1xuXG4gIGlmICh0YXBJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgIGNsZWFyVGltZW91dCh0YXBJbnRlcnZhbCk7XG5cbiAgICB0YXBJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRhcEludGVydmFsKHRhcEludGVydmFsKTtcblxuICAgIHRoaXMuZG91YmxlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGFwSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0YXBJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRhcEludGVydmFsKHRhcEludGVydmFsKTtcblxuICAgIHRoaXMuc2luZ2xlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xuICB9LCBUQVBfREVMQVkpO1xuXG4gIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVDdXN0b21HZXN0dXJlcygpIHtcbiAgY29uc3QgY3VzdG9tR2VzdHVyZWRFbmFibGVkID0gdHJ1ZTtcblxuICB0aGlzLnNldEN1c3RvbUdlc3R1cmVzRW5hYmxlZChjdXN0b21HZXN0dXJlZEVuYWJsZWQpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlQ3VzdG9tR2VzdHVyZXMoKSB7XG4gIGNvbnN0IGN1c3RvbUdlc3R1cmVkRW5hYmxlZCA9IGZhbHNlO1xuXG4gIHRoaXMuc2V0Q3VzdG9tR2VzdHVyZXNFbmFibGVkKGN1c3RvbUdlc3R1cmVkRW5hYmxlZCk7XG59XG5cbmZ1bmN0aW9uIGNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGN1c3RvbUdlc3R1cmVzRW5hYmxlZCA9IHRoaXMuYXJlQ3VzdG9tR2VzdHVyZXNFbmFibGVkKCk7XG5cbiAgaWYgKGN1c3RvbUdlc3R1cmVzRW5hYmxlZCkge1xuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbn1cblxuY29uc3QgdG91Y2hNaXhpbnMgPSB7XG4gIGVuYWJsZVRvdWNoLFxuICBkaXNhYmxlVG91Y2gsXG4gIG9uVG91Y2hTdGFydCxcbiAgb2ZmVG91Y2hTdGFydCxcbiAgb25Ub3VjaE1vdmUsXG4gIG9mZlRvdWNoTW92ZSxcbiAgb25Ub3VjaEVuZCxcbiAgb2ZmVG91Y2hFbmQsXG4gIG9uQ3VzdG9tRHJhZ1VwLFxuICBvZmZDdXN0b21EcmFnVXAsXG4gIG9uQ3VzdG9tRHJhZ0Rvd24sXG4gIG9mZkN1c3RvbURyYWdEb3duLFxuICBvbkN1c3RvbURyYWdMZWZ0LFxuICBvZmZDdXN0b21EcmFnTGVmdCxcbiAgb25DdXN0b21EcmFnUmlnaHQsXG4gIG9mZkN1c3RvbURyYWdSaWdodCxcbiAgb25DdXN0b21EcmFnU3RhcnQsXG4gIG9mZkN1c3RvbURyYWdTdGFydCxcbiAgb25DdXN0b21Td2lwZVVwLFxuICBvZmZDdXN0b21Td2lwZVVwLFxuICBvbkN1c3RvbVN3aXBlRG93bixcbiAgb2ZmQ3VzdG9tU3dpcGVEb3duLFxuICBvbkN1c3RvbVN3aXBlTGVmdCxcbiAgb2ZmQ3VzdG9tU3dpcGVMZWZ0LFxuICBvbkN1c3RvbVN3aXBlUmlnaHQsXG4gIG9mZkN1c3RvbVN3aXBlUmlnaHQsXG4gIG9uQ3VzdG9tUGluY2hNb3ZlLFxuICBvZmZDdXN0b21QaW5jaE1vdmUsXG4gIG9uQ3VzdG9tUGluY2hTdGFydCxcbiAgb2ZmQ3VzdG9tUGluY2hTdGFydCxcbiAgb25DdXN0b21TaW5nbGVUYXAsXG4gIG9mZkN1c3RvbVNpbmdsZVRhcCxcbiAgb25DdXN0b21Eb3VibGVUYXAsXG4gIG9mZkN1c3RvbURvdWJsZVRhcCxcbiAgZ2V0VGFwSW50ZXJ2YWwsXG4gIHNldFRhcEludGVydmFsLFxuICBnZXRTdGFydE1hZ25pdHVkZSxcbiAgc2V0U3RhcnRNYWduaXR1ZGUsXG4gIGdldFN0YXJ0UG9zaXRpb25zLFxuICBzZXRTdGFydFBvc2l0aW9ucyxcbiAgYXJlQ3VzdG9tR2VzdHVyZXNFbmFibGVkLFxuICBzZXRDdXN0b21HZXN0dXJlc0VuYWJsZWQsXG4gIGdldE1vdmluZ1Bvc2l0aW9ucyxcbiAgc2V0TW92aW5nUG9zaXRpb25zLFxuICB0b3VjaFN0YXJ0SGFuZGxlcixcbiAgbW91c2VEb3duSGFuZGxlcixcbiAgdG91Y2hNb3ZlSGFuZGxlcixcbiAgbW91c2VNb3ZlSGFuZGxlcixcbiAgdG91Y2hFbmRIYW5kbGVyLFxuICBtb3VzZVVwSGFuZGxlcixcbiAgc3RhcnRIYW5kbGVyLFxuICBtb3ZlSGFuZGxlcixcbiAgZW5kSGFuZGxlcixcbiAgc2luZ2xlVGFwLFxuICBkb3VibGVUYXAsXG4gIGRyYWcsXG4gIHBpbmNoLFxuICBzd2lwZSxcbiAgZHJhZ1N0YXJ0LFxuICBwaW5jaFN0YXJ0LFxuICBwb3NzaWJsZVRhcCxcbiAgcG9zc2libGVTd2lwZSxcbiAgc2luZ2xlVGFwT3JEb3VibGVUYXAsXG4gIGVuYWJsZUN1c3RvbUdlc3R1cmVzLFxuICBkaXNhYmxlQ3VzdG9tR2VzdHVyZXMsXG4gIGNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvdWNoTWl4aW5zO1xuIl0sIm5hbWVzIjpbInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiVE9VQ0hTVEFSVF9FVkVOVF9UWVBFIiwiZXZlbnRUeXBlcyIsIlRPVUNITU9WRV9FVkVOVF9UWVBFIiwiVE9VQ0hFTkRfRVZFTlRfVFlQRSIsImVuYWJsZVRvdWNoIiwidGFwSW50ZXJ2YWwiLCJzdGFydE1hZ25pdHVkZSIsInN0YXJ0UG9zaXRpb25zIiwibW92aW5nUG9zaXRpb25zIiwiY3VzdG9tR2VzdHVyZXNFbmFibGVkIiwidXBkYXRlU3RhdGUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ3aW5kb3ciLCJvbk1vdXNlVXAiLCJtb3VzZVVwSGFuZGxlciIsIm9uVG91Y2hTdGFydCIsInRvdWNoU3RhcnRIYW5kbGVyIiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmVIYW5kbGVyIiwib25Ub3VjaEVuZCIsInRvdWNoRW5kSGFuZGxlciIsImRpc2FibGVUb3VjaCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlVXAiLCJvZmZUb3VjaFN0YXJ0Iiwib2ZmVG91Y2hNb3ZlIiwib2ZmVG91Y2hFbmQiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwib25FdmVudCIsIm9mZkV2ZW50Iiwib25DdXN0b21EcmFnVXAiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIkRSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjdXN0b21IYW5kbGVyIiwib25DdXN0b21FdmVudCIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbUV2ZW50Iiwib25DdXN0b21EcmFnRG93biIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsIkRSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnTGVmdCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsIkRSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdMZWZ0Iiwib25DdXN0b21EcmFnUmlnaHQiLCJkcmFnUmlnaHRDdXN0b21IYW5kbGVyIiwiRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdSaWdodCIsIm9uQ3VzdG9tRHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsIkRSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsIlNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbVNpbmdsZVRhcCIsInNpbmdsZVRhcEN1c3RvbUhhbmRsZXIiLCJTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU2luZ2xlVGFwIiwib25DdXN0b21Eb3VibGVUYXAiLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwiRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURvdWJsZVRhcCIsImdldFRhcEludGVydmFsIiwiZ2V0U3RhdGUiLCJzZXRUYXBJbnRlcnZhbCIsImdldFN0YXJ0TWFnbml0dWRlIiwic2V0U3RhcnRNYWduaXR1ZGUiLCJhcmVDdXN0b21HZXN0dXJlc0VuYWJsZWQiLCJzZXRDdXN0b21HZXN0dXJlc0VuYWJsZWQiLCJnZXRTdGFydFBvc2l0aW9ucyIsInNldFN0YXJ0UG9zaXRpb25zIiwiZ2V0TW92aW5nUG9zaXRpb25zIiwic2V0TW92aW5nUG9zaXRpb25zIiwiZXZlbnQiLCJzdGFydEhhbmRsZXIiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZCIsInBvc2l0aW9ucyIsInBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IiwibW91c2VFdmVudCIsInBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50IiwibW92ZUhhbmRsZXIiLCJlbmRIYW5kbGVyIiwicG9zaXRpb25zRnJvbUV2ZW50IiwiZmlsdGVyUG9zaXRpb25zIiwic3RhcnRpbmdQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkcmFnU3RhcnQiLCJwaW5jaFN0YXJ0IiwicG9zaXRpb25zTWF0Y2giLCJtYXRjaFBvc2l0aW9ucyIsInNvcnRQb3NpdGlvbnMiLCJtb3ZpbmdQb3NpdGlvbnNMZW5ndGgiLCJkcmFnIiwicGluY2giLCJzdGFydFBvc2l0aW9uc0xlbmd0aCIsInBvc3NpYmxlVGFwIiwicG9zc2libGVTd2lwZSIsImRyYWdJbnRlcnZhbCIsImdldERyYWdJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsInNldERyYWdJbnRlcnZhbCIsInBpbmNoSW50ZXJ2YWwiLCJnZXRQaW5jaEludGVydmFsIiwic2V0UGluY2hJbnRlcnZhbCIsInNpbmdsZVRhcCIsInRvcCIsImxlZnQiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJkb3VibGVUYXAiLCJjYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5IiwiZmlyc3RTdGFydFBvc2l0aW9uIiwiZmlyc3RNb3ZpbmdQb3NpdGlvbiIsImZpcnN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInJlbGF0aXZlUG9zaXRpb24iLCJSZWxhdGl2ZVBvc2l0aW9uIiwiZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbiIsImdldFRvcCIsImdldExlZnQiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJNYXRoIiwiYWJzIiwiTUFYSU1VTV9TUFJFQUQiLCJQSV9PVkVSX1RXTyIsIlBJIiwic2Vjb25kTW92aW5nUG9zaXRpb24iLCJyZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uIiwibWFnbml0dWRlIiwiZ2V0TWFnbml0dWRlIiwicmF0aW8iLCJzd2lwZSIsInNwZWVkIiwiY29zIiwic2luIiwic3RhcnRQb3NpdGlvbiIsInNlY29uZFN0YXJ0UG9zaXRpb24iLCJyZWxhdGl2ZVN0YXJ0UG9zaXRpb24iLCJ0aW1lIiwiZ2V0VGltZSIsImdldFNwZWVkIiwiTUFYSU1VTV9UQVBfVElNRSIsInNpbmdsZVRhcE9yRG91YmxlVGFwIiwiTUlOSU1VTV9TV0lQRV9TUEVFRCIsInNldFRpbWVvdXQiLCJUQVBfREVMQVkiLCJlbmFibGVDdXN0b21HZXN0dXJlcyIsImN1c3RvbUdlc3R1cmVkRW5hYmxlZCIsImRpc2FibGVDdXN0b21HZXN0dXJlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInRvdWNoTWl4aW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpd0JBOzs7ZUFBQTs7O3lCQS92QitCO29CQUNJOytEQUVOO3lCQUVxRTt5QkFDZTtnQ0FhcEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBUUEsT0FBd0JDLHlCQUFjLENBQXRDRCxNQUFNRSxRQUFrQkQseUJBQWMsQ0FBaENDLE9BQU9DLFNBQVdGLHlCQUFjLENBQXpCRSxRQUNiQyx3QkFBcUVDLGdCQUFVLENBQS9FRCx1QkFBdUJFLHVCQUE4Q0QsZ0JBQVUsQ0FBeERDLHNCQUFzQkMsc0JBQXdCRixnQkFBVSxDQUFsQ0U7QUFFckQsU0FBU0M7SUFDUCxJQUFNQyxjQUFjLE1BQ2RDLGlCQUFpQixNQUNqQkMsaUJBQWlCLEVBQUUsRUFDbkJDLGtCQUFrQixFQUFFLEVBQ3BCQyx3QkFBd0I7SUFFOUIsSUFBSSxDQUFDQyxXQUFXLENBQUM7UUFDZkwsYUFBQUE7UUFDQUMsZ0JBQUFBO1FBQ0FDLGdCQUFBQTtRQUNBQyxpQkFBQUE7UUFDQUMsdUJBQUFBO0lBQ0Y7SUFFQSxJQUFJLENBQUNFLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQjtJQUN0QyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQjtJQUV0Q0MsWUFBTSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDQyxjQUFjLEVBQUUsSUFBSTtJQUUxQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNDLGlCQUFpQjtJQUN4QyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQjtJQUN0QyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUNDLGVBQWU7QUFDdEM7QUFFQSxTQUFTQztJQUNQLElBQUksQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ2IsZ0JBQWdCO0lBQ3ZDLElBQUksQ0FBQ2MsWUFBWSxDQUFDLElBQUksQ0FBQ1osZ0JBQWdCO0lBRXZDQyxZQUFNLENBQUNZLFVBQVUsQ0FBQyxJQUFJLENBQUNWLGNBQWMsRUFBRSxJQUFJO0lBRTNDLElBQUksQ0FBQ1csYUFBYSxDQUFDLElBQUksQ0FBQ1QsaUJBQWlCO0lBQ3pDLElBQUksQ0FBQ1UsWUFBWSxDQUFDLElBQUksQ0FBQ1IsZ0JBQWdCO0lBQ3ZDLElBQUksQ0FBQ1MsV0FBVyxDQUFDLElBQUksQ0FBQ1AsZUFBZTtBQUN2QztBQUVBLFNBQVNMLGFBQWFDLGlCQUFpQjtJQUNyQyxJQUFNWSxZQUFZL0IsdUJBQ1pnQyxVQUFVYixtQkFBb0IsR0FBRztJQUV2QyxJQUFJLENBQUNjLE9BQU8sQ0FBQ0YsV0FBV0M7QUFDMUI7QUFFQSxTQUFTSixjQUFjVCxpQkFBaUI7SUFDdEMsSUFBTVksWUFBWS9CLHVCQUNaZ0MsVUFBVWIsbUJBQW9CLEdBQUc7SUFFdkMsSUFBSSxDQUFDZSxRQUFRLENBQUNILFdBQVdDO0FBQzNCO0FBRUEsU0FBU1osWUFBWUQsaUJBQWlCO0lBQ3BDLElBQU1ZLFlBQVk3QixzQkFDWjhCLFVBQVViLG1CQUFvQixHQUFHO0lBRXZDLElBQUksQ0FBQ2MsT0FBTyxDQUFDRixXQUFXQztBQUMxQjtBQUVBLFNBQVNILGFBQWFWLGlCQUFpQjtJQUNyQyxJQUFNWSxZQUFZN0Isc0JBQ1o4QixVQUFVYixtQkFBb0IsR0FBRztJQUV2QyxJQUFJLENBQUNlLFFBQVEsQ0FBQ0gsV0FBV0M7QUFDM0I7QUFFQSxTQUFTVixXQUFXSCxpQkFBaUI7SUFDbkMsSUFBTVksWUFBWTVCLHFCQUNaNkIsVUFBVWIsbUJBQW9CLEdBQUc7SUFFdkMsSUFBSSxDQUFDYyxPQUFPLENBQUNGLFdBQVdDO0FBQzFCO0FBRUEsU0FBU0YsWUFBWVgsaUJBQWlCO0lBQ3BDLElBQU1ZLFlBQVk1QixxQkFDWjZCLFVBQVViLG1CQUFvQixHQUFHO0lBRXZDLElBQUksQ0FBQ2UsUUFBUSxDQUFDSCxXQUFXQztBQUMzQjtBQUVBLFNBQVNHLGVBQWVDLG1CQUFtQixFQUFFQyxPQUFPO0lBQ2xELElBQU1DLGtCQUFrQkMsMkNBQXlCLEVBQzNDQyxnQkFBZ0JKLHFCQUFxQixHQUFHO0lBRTlDLElBQUksQ0FBQ0ssYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBU0ssZ0JBQWdCTixtQkFBbUIsRUFBRUMsT0FBTztJQUNuRCxJQUFNQyxrQkFBa0JDLDJDQUF5QixFQUMzQ0MsZ0JBQWdCSixxQkFBcUIsR0FBRztJQUU5QyxJQUFJLENBQUNPLGNBQWMsQ0FBQ0wsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVNPLGlCQUFpQkMscUJBQXFCLEVBQUVSLE9BQU87SUFDdEQsSUFBTUMsa0JBQWtCUSw2Q0FBMkIsRUFDN0NOLGdCQUFnQkssdUJBQXVCLEdBQUc7SUFFaEQsSUFBSSxDQUFDSixhQUFhLENBQUNILGlCQUFpQkUsZUFBZUg7QUFDckQ7QUFFQSxTQUFTVSxrQkFBa0JGLHFCQUFxQixFQUFFUixPQUFPO0lBQ3ZELElBQU1DLGtCQUFrQlEsNkNBQTJCLEVBQzdDTixnQkFBZ0JLLHVCQUF1QixHQUFHO0lBRWhELElBQUksQ0FBQ0YsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBU1csaUJBQWlCQyxxQkFBcUIsRUFBRVosT0FBTztJQUN0RCxJQUFNQyxrQkFBa0JZLDZDQUEyQixFQUM3Q1YsZ0JBQWdCUyx1QkFBdUIsR0FBRztJQUVoRCxJQUFJLENBQUNSLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVNjLGtCQUFrQkYscUJBQXFCLEVBQUVaLE9BQU87SUFDdkQsSUFBTUMsa0JBQWtCWSw2Q0FBMkIsRUFDN0NWLGdCQUFnQlMsdUJBQXVCLEdBQUc7SUFFaEQsSUFBSSxDQUFDTixjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTZSxrQkFBa0JDLHNCQUFzQixFQUFFaEIsT0FBTztJQUN4RCxJQUFNQyxrQkFBa0JnQiw4Q0FBNEIsRUFDOUNkLGdCQUFnQmEsd0JBQXdCLEdBQUc7SUFFakQsSUFBSSxDQUFDWixhQUFhLENBQUNILGlCQUFpQkUsZUFBZUg7QUFDckQ7QUFFQSxTQUFTa0IsbUJBQW1CRixzQkFBc0IsRUFBRWhCLE9BQU87SUFDekQsSUFBTUMsa0JBQWtCZ0IsOENBQTRCLEVBQzlDZCxnQkFBZ0JhLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ1YsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBU21CLGtCQUFrQkMsc0JBQXNCLEVBQUVwQixPQUFPO0lBQ3hELElBQU1DLGtCQUFrQm9CLDhDQUE0QixFQUM5Q2xCLGdCQUFnQmlCLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ2hCLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVNzQixtQkFBbUJGLHNCQUFzQixFQUFFcEIsT0FBTztJQUN6RCxJQUFNQyxrQkFBa0JvQiw4Q0FBNEIsRUFDOUNsQixnQkFBZ0JpQix3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUNkLGNBQWMsQ0FBQ0wsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVN1QixnQkFBZ0JDLG9CQUFvQixFQUFFeEIsT0FBTztJQUNwRCxJQUFNQyxrQkFBa0J3Qiw0Q0FBMEIsRUFDNUN0QixnQkFBZ0JxQixzQkFBc0IsR0FBRztJQUUvQyxJQUFJLENBQUNwQixhQUFhLENBQUNILGlCQUFpQkUsZUFBZUg7QUFDckQ7QUFFQSxTQUFTMEIsaUJBQWlCRixvQkFBb0IsRUFBRXhCLE9BQU87SUFDckQsSUFBTUMsa0JBQWtCd0IsNENBQTBCLEVBQzVDdEIsZ0JBQWdCcUIsc0JBQXNCLEdBQUc7SUFFL0MsSUFBSSxDQUFDbEIsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBUzJCLGtCQUFrQkMsc0JBQXNCLEVBQUU1QixPQUFPO0lBQ3hELElBQU1DLGtCQUFrQjRCLDhDQUE0QixFQUM5QzFCLGdCQUFnQnlCLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ3hCLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVM4QixtQkFBbUJGLHNCQUFzQixFQUFFNUIsT0FBTztJQUN6RCxJQUFNQyxrQkFBa0I0Qiw4Q0FBNEIsRUFDOUMxQixnQkFBZ0J5Qix3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUN0QixjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTK0Isa0JBQWtCQyxzQkFBc0IsRUFBRWhDLE9BQU87SUFDeEQsSUFBTUMsa0JBQWtCZ0MsOENBQTRCLEVBQzlDOUIsZ0JBQWdCNkIsd0JBQXdCLEdBQUc7SUFFakQsSUFBSSxDQUFDNUIsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBU2tDLG1CQUFtQkYsc0JBQXNCLEVBQUVoQyxPQUFPO0lBQ3pELElBQU1DLGtCQUFrQmdDLDhDQUE0QixFQUM5QzlCLGdCQUFnQjZCLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQzFCLGNBQWMsQ0FBQ0wsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVNtQyxtQkFBbUJDLHVCQUF1QixFQUFFcEMsT0FBTztJQUMxRCxJQUFNQyxrQkFBa0JvQywrQ0FBNkIsRUFDL0NsQyxnQkFBZ0JpQyx5QkFBeUIsR0FBRztJQUVsRCxJQUFJLENBQUNoQyxhQUFhLENBQUNILGlCQUFpQkUsZUFBZUg7QUFDckQ7QUFFQSxTQUFTc0Msb0JBQW9CRix1QkFBdUIsRUFBRXBDLE9BQU87SUFDM0QsSUFBTUMsa0JBQWtCb0MsK0NBQTZCLEVBQy9DbEMsZ0JBQWdCaUMseUJBQXlCLEdBQUc7SUFFbEQsSUFBSSxDQUFDOUIsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBU3VDLGtCQUFrQkMsc0JBQXNCLEVBQUV4QyxPQUFPO0lBQ3hELElBQU1DLGtCQUFrQndDLDhDQUE0QixFQUM5Q3RDLGdCQUFnQnFDLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ3BDLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVMwQyxtQkFBbUJGLHNCQUFzQixFQUFFeEMsT0FBTztJQUN6RCxJQUFNQyxrQkFBa0J3Qyw4Q0FBNEIsRUFDOUN0QyxnQkFBZ0JxQyx3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUNsQyxjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTMkMsbUJBQW1CQyx1QkFBdUIsRUFBRTVDLE9BQU87SUFDMUQsSUFBTUMsa0JBQWtCNEMsK0NBQTZCLEVBQy9DMUMsZ0JBQWdCeUMseUJBQXlCLEdBQUc7SUFFbEQsSUFBSSxDQUFDeEMsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBUzhDLG9CQUFvQkYsdUJBQXVCLEVBQUU1QyxPQUFPO0lBQzNELElBQU1DLGtCQUFrQjRDLCtDQUE2QixFQUMvQzFDLGdCQUFnQnlDLHlCQUF5QixHQUFHO0lBRWxELElBQUksQ0FBQ3RDLGNBQWMsQ0FBQ0wsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVMrQyxrQkFBa0JDLHNCQUFzQixFQUFFaEQsT0FBTztJQUN4RCxJQUFNQyxrQkFBa0JnRCw4Q0FBNEIsRUFDOUM5QyxnQkFBZ0I2Qyx3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUM1QyxhQUFhLENBQUNILGlCQUFpQkUsZUFBZUg7QUFDckQ7QUFFQSxTQUFTa0QsbUJBQW1CRixzQkFBc0IsRUFBRWhELE9BQU87SUFDekQsSUFBTUMsa0JBQWtCZ0QsOENBQTRCLEVBQzlDOUMsZ0JBQWdCNkMsd0JBQXdCLEdBQUc7SUFFakQsSUFBSSxDQUFDMUMsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBU21ELGtCQUFrQkMsc0JBQXNCLEVBQUVwRCxPQUFPO0lBQ3hELElBQU1DLGtCQUFrQm9ELDhDQUE0QixFQUM5Q2xELGdCQUFnQmlELHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ2hELGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVNzRCxtQkFBbUJGLHNCQUFzQixFQUFFcEQsT0FBTztJQUN6RCxJQUFNQyxrQkFBa0JvRCw4Q0FBNEIsRUFDOUNsRCxnQkFBZ0JpRCx3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUM5QyxjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTdUQ7SUFDUCxJQUFNLEFBQUV2RixjQUFnQixJQUFJLENBQUN3RixRQUFRLEdBQTdCeEY7SUFFUixPQUFPQTtBQUNUO0FBRUEsU0FBU3lGLGVBQWV6RixXQUFXO0lBQ2pDLElBQUksQ0FBQ0ssV0FBVyxDQUFDO1FBQ2ZMLGFBQUFBO0lBQ0Y7QUFDRjtBQUVBLFNBQVMwRjtJQUNQLElBQU0sQUFBRXpGLGlCQUFtQixJQUFJLENBQUN1RixRQUFRLEdBQWhDdkY7SUFFUixPQUFPQTtBQUNUO0FBRUEsU0FBUzBGLGtCQUFrQjFGLGNBQWM7SUFDdkMsSUFBSSxDQUFDSSxXQUFXLENBQUM7UUFDZkosZ0JBQUFBO0lBQ0Y7QUFDRjtBQUVBLFNBQVMyRjtJQUNQLElBQU0sQUFBRXhGLHdCQUEwQixJQUFJLENBQUNvRixRQUFRLEdBQXZDcEY7SUFFUixPQUFPQTtBQUNUO0FBRUEsU0FBU3lGLHlCQUF5QnpGLHFCQUFxQjtJQUNyRCxJQUFJLENBQUNDLFdBQVcsQ0FBQztRQUNmRCx1QkFBQUE7SUFDRjtBQUNGO0FBRUEsU0FBUzBGO0lBQ1AsSUFBTSxBQUFFNUYsaUJBQW1CLElBQUksQ0FBQ3NGLFFBQVEsR0FBaEN0RjtJQUVSLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTNkYsa0JBQWtCN0YsY0FBYztJQUN2QyxJQUFJLENBQUNHLFdBQVcsQ0FBQztRQUNmSCxnQkFBQUE7SUFDRjtBQUNGO0FBRUEsU0FBUzhGO0lBQ1AsSUFBTSxBQUFFN0Ysa0JBQW9CLElBQUksQ0FBQ3FGLFFBQVEsR0FBakNyRjtJQUVSLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTOEYsbUJBQW1COUYsZUFBZTtJQUN6QyxJQUFJLENBQUNFLFdBQVcsQ0FBQztRQUNmRixpQkFBQUE7SUFDRjtBQUNGO0FBRUEsU0FBU1csa0JBQWtCb0YsS0FBSyxFQUFFbEUsT0FBTztJQUN2QyxJQUFJLENBQUNtRSxZQUFZLENBQUNELE9BQU9sRSxTQUFTLFNBQUNrRTtRQUNqQyxJQUFNRSxhQUFhRixPQUNiRyxVQUFVLE9BQ1ZDLFlBQVlDLElBQUFBLGtDQUF1QixFQUFDSCxZQUFZQztRQUV0RCxPQUFPQztJQUNUO0FBQ0Y7QUFFQSxTQUFTL0YsaUJBQWlCMkYsS0FBSyxFQUFFbEUsT0FBTztJQUN0QyxJQUFJLENBQUNtRSxZQUFZLENBQUNELE9BQU9sRSxTQUFTLFNBQUNrRTtRQUNqQyxJQUFNTSxhQUFhTixPQUNiSSxZQUFZRyxJQUFBQSxrQ0FBdUIsRUFBQ0Q7UUFFMUMsT0FBT0Y7SUFDVDtBQUNGO0FBRUEsU0FBU3RGLGlCQUFpQmtGLEtBQUssRUFBRWxFLE9BQU87SUFDdEMsSUFBSSxDQUFDMEUsV0FBVyxDQUFDUixPQUFPbEUsU0FBUyxTQUFDa0U7UUFDaEMsSUFBTUUsYUFBYUYsT0FDYkcsVUFBVSxPQUNWQyxZQUFZQyxJQUFBQSxrQ0FBdUIsRUFBQ0gsWUFBWUM7UUFFdEQsT0FBT0M7SUFDVDtBQUNGO0FBRUEsU0FBUzdGLGlCQUFpQnlGLEtBQUssRUFBRWxFLE9BQU87SUFDdEMsSUFBSSxDQUFDMEUsV0FBVyxDQUFDUixPQUFPbEUsU0FBUyxTQUFDa0U7UUFDaEMsSUFBTU0sYUFBYU4sT0FDYkksWUFBWUcsSUFBQUEsa0NBQXVCLEVBQUNEO1FBRTFDLE9BQU9GO0lBQ1Q7QUFDRjtBQUVBLFNBQVNwRixnQkFBZ0JnRixLQUFLLEVBQUVsRSxPQUFPO0lBQ3JDLElBQUksQ0FBQzJFLFVBQVUsQ0FBQ1QsT0FBT2xFLFNBQVMsU0FBQ2tFO1FBQy9CLElBQU1FLGFBQWFGLE9BQ2JHLFVBQVUsTUFDVkMsWUFBWUMsSUFBQUEsa0NBQXVCLEVBQUNILFlBQVlDO1FBRXRELE9BQU9DO0lBQ1Q7QUFDRjtBQUVBLFNBQVMxRixlQUFlc0YsS0FBSyxFQUFFbEUsT0FBTztJQUNwQyxJQUFJLENBQUMyRSxVQUFVLENBQUNULE9BQU9sRSxTQUFTLFNBQUNrRTtRQUMvQixJQUFNTSxhQUFhTixPQUNiSSxZQUFZRyxJQUFBQSxrQ0FBdUIsRUFBQ0Q7UUFFMUMsT0FBT0Y7SUFDVDtBQUNGO0FBRUEsU0FBU0gsYUFBYUQsS0FBSyxFQUFFbEUsT0FBTyxFQUFFNEUsa0JBQWtCO0lBQ3RELElBQU1OLFlBQVlNLG1CQUFtQlYsUUFDL0JoRyxpQkFBaUIsSUFBSSxDQUFDNEYsaUJBQWlCO0lBRTdDZSxJQUFBQSwwQkFBZSxFQUFDM0csZ0JBQWdCb0c7SUFFaEMvRyxLQUFLVyxnQkFBZ0JvRztJQUVyQixJQUFNUSwwQkFBMEI1RyxlQUFlNkcsTUFBTTtJQUVyRCxJQUFJRCw0QkFBNEIsR0FBRztRQUNqQyxJQUFJLENBQUNFLFNBQVMsQ0FBQ2QsT0FBT2xFO0lBQ3hCO0lBRUEsSUFBSThFLDRCQUE0QixHQUFHO1FBQ2pDLElBQUksQ0FBQ0csVUFBVSxDQUFDZixPQUFPbEU7SUFDekI7QUFDRjtBQUVBLFNBQVMwRSxZQUFZUixLQUFLLEVBQUVsRSxPQUFPLEVBQUU0RSxrQkFBa0I7SUFDckQsSUFBTU4sWUFBWU0sbUJBQW1CVixRQUMvQmhHLGlCQUFpQixJQUFJLENBQUM0RixpQkFBaUIsSUFDdkMzRixrQkFBa0IsSUFBSSxDQUFDNkYsa0JBQWtCO0lBRS9DYSxJQUFBQSwwQkFBZSxFQUFDMUcsaUJBQWlCbUc7SUFFakMvRyxLQUFLWSxpQkFBaUJtRztJQUV0QixJQUFNWSxpQkFBaUJDLElBQUFBLHlCQUFjLEVBQUNqSCxnQkFBZ0JDO0lBRXRELElBQUkrRyxnQkFBZ0I7UUFDbEJFLElBQUFBLHdCQUFhLEVBQUNqSCxpQkFBaUJEO1FBRS9CLElBQU1tSCx3QkFBd0JsSCxnQkFBZ0I0RyxNQUFNO1FBRXBELElBQUlNLDBCQUEwQixHQUFHO1lBQy9CLElBQUksQ0FBQ0MsSUFBSSxDQUFDcEIsT0FBT2xFO1FBQ25CO1FBRUEsSUFBSXFGLDBCQUEwQixHQUFHO1lBQy9CLElBQUksQ0FBQ0UsS0FBSyxDQUFDckIsT0FBT2xFO1FBQ3BCO0lBQ0Y7QUFDRjtBQUVBLFNBQVMyRSxXQUFXVCxLQUFLLEVBQUVsRSxPQUFPLEVBQUU0RSxrQkFBa0I7SUFDcEQsSUFBTU4sWUFBWU0sbUJBQW1CVixRQUMvQmhHLGlCQUFpQixJQUFJLENBQUM0RixpQkFBaUIsSUFDdkMzRixrQkFBa0IsSUFBSSxDQUFDNkYsa0JBQWtCLElBQ3pDa0IsaUJBQWlCQyxJQUFBQSx5QkFBYyxFQUFDakgsZ0JBQWdCQztJQUV0RCxJQUFJK0csZ0JBQWdCO1FBQ2xCLElBQU1NLHVCQUF1QnRILGVBQWU2RyxNQUFNO1FBRWxELElBQUlTLHlCQUF5QixHQUFHO1lBQzlCLElBQUksQ0FBQ0MsV0FBVyxDQUFDdkIsT0FBT2xFO1lBRXhCLElBQUksQ0FBQzBGLGFBQWEsQ0FBQ3hCLE9BQU9sRTtRQUM1QjtRQUVBLElBQUl3Rix5QkFBeUIsR0FBRztZQUM5QixJQUFJRyxlQUFlLElBQUksQ0FBQ0MsZUFBZTtZQUV2QyxJQUFJRCxpQkFBaUIsTUFBTTtnQkFDekJFLGFBQWFGO2dCQUViQSxlQUFlO2dCQUVmLElBQUksQ0FBQ0csZUFBZSxDQUFDSDtZQUN2QjtRQUNGO1FBRUEsSUFBSUgseUJBQXlCLEdBQUc7WUFDOUIsSUFBSU8sZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCO1lBRXpDLElBQUlELGtCQUFrQixNQUFNO2dCQUMxQkYsYUFBYUU7Z0JBRWJBLGdCQUFnQjtnQkFFaEIsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ0Y7WUFDeEI7UUFDRjtJQUNGO0lBRUFsQixJQUFBQSwwQkFBZSxFQUFDM0csZ0JBQWdCb0c7SUFFaENPLElBQUFBLDBCQUFlLEVBQUMxRyxpQkFBaUJtRztBQUNuQztBQUVBLFNBQVM0QixVQUFVaEMsS0FBSyxFQUFFbEUsT0FBTyxFQUFFbUcsR0FBRyxFQUFFQyxJQUFJO0lBQzFDLElBQU1uRyxrQkFBa0JnRCw4Q0FBNEI7SUFFcEQsSUFBSSxDQUFDb0Qsa0JBQWtCLENBQUNwRyxpQkFBaUJpRSxPQUFPbEUsU0FBU21HLEtBQUtDLE9BQU8sR0FBRztBQUMxRTtBQUVBLFNBQVNFLFVBQVVwQyxLQUFLLEVBQUVsRSxPQUFPLEVBQUVtRyxHQUFHLEVBQUVDLElBQUk7SUFDMUMsSUFBTW5HLGtCQUFrQm9ELDhDQUE0QjtJQUVwRCxJQUFJLENBQUNrRCwrQkFBK0IsQ0FBQ3RHLGlCQUFpQmlFLE9BQU9sRSxTQUFTbUcsS0FBS0M7QUFDN0U7QUFFQSxTQUFTZCxLQUFLcEIsS0FBSyxFQUFFbEUsT0FBTztJQUMxQixJQUFNOUIsaUJBQWlCLElBQUksQ0FBQzRGLGlCQUFpQixJQUN2QzNGLGtCQUFrQixJQUFJLENBQUM2RixrQkFBa0IsSUFDekN3QyxxQkFBcUIvSSxNQUFNUyxpQkFDM0J1SSxzQkFBc0JoSixNQUFNVSxrQkFDNUJ1SSxnQkFBZ0JGLG9CQUNoQkcsaUJBQWlCRixxQkFDakJHLG1CQUFtQkMsaUJBQWdCLENBQUNDLGtDQUFrQyxDQUFDSixlQUFlQyxpQkFDdEZSLE1BQU1TLGlCQUFpQkcsTUFBTSxJQUM3QlgsT0FBT1EsaUJBQWlCSSxPQUFPLElBQy9CQyxZQUFZTCxpQkFBaUJNLFlBQVk7SUFFL0MsSUFBSWpILGtCQUFrQjtJQUV0QixJQUFJLEFBQUNrSCxLQUFLQyxHQUFHLENBQUNILGFBQWNJLHlCQUFjLEVBQUU7UUFDMUNwSCxrQkFBa0JnQiw4Q0FBNEI7SUFDaEQ7SUFFQSxJQUFJa0csS0FBS0MsR0FBRyxDQUFDRSxzQkFBVyxHQUFHTCxhQUFhSSx5QkFBYyxFQUFFO1FBQ3REcEgsa0JBQWtCQywyQ0FBeUI7SUFDN0M7SUFFQSxJQUFJaUgsS0FBS0MsR0FBRyxDQUFDLENBQUNFLHNCQUFXLEdBQUdMLGFBQWFJLHlCQUFjLEVBQUU7UUFDdkRwSCxrQkFBa0JRLDZDQUEyQjtJQUMvQztJQUVBLElBQUksQUFBQzhHLGFBQUUsR0FBR0osS0FBS0MsR0FBRyxDQUFDSCxhQUFjSSx5QkFBYyxFQUFFO1FBQy9DcEgsa0JBQWtCWSw2Q0FBMkI7SUFDL0M7SUFFQSxJQUFJWixvQkFBb0IsTUFBTTtRQUM1QixJQUFJLENBQUNzRywrQkFBK0IsQ0FBQ3RHLGlCQUFpQmlFLE9BQU9sRSxTQUFTbUcsS0FBS0M7SUFDN0U7QUFDRjtBQUVBLFNBQVNiLE1BQU1yQixLQUFLLEVBQUVsRSxPQUFPO0lBQzNCLElBQU03QixrQkFBa0IsSUFBSSxDQUFDNkYsa0JBQWtCLElBQ3pDeUMsc0JBQXNCaEosTUFBTVUsa0JBQzVCcUosdUJBQXVCOUosT0FBT1Msa0JBQzlCc0oseUJBQXlCWixpQkFBZ0IsQ0FBQ0Msa0NBQWtDLENBQUNMLHFCQUFxQmUsdUJBQ2xHdkgsa0JBQWtCd0MsOENBQTRCLEVBQzlDeEUsaUJBQWlCLElBQUksQ0FBQ3lGLGlCQUFpQixJQUN2Q2dFLFlBQVlELHVCQUF1QkUsWUFBWSxJQUMvQ0MsUUFBUUYsWUFBWXpKO0lBRTFCLElBQUksQ0FBQ3NJLCtCQUErQixDQUFDdEcsaUJBQWlCaUUsT0FBT2xFLFNBQVM0SDtBQUN4RTtBQUVBLFNBQVNDLE1BQU0zRCxLQUFLLEVBQUVsRSxPQUFPLEVBQUU4SCxLQUFLLEVBQUViLFNBQVM7SUFDN0MsSUFBSWhILGtCQUFrQjtJQUV0QixJQUFJLEFBQUNrSCxLQUFLQyxHQUFHLENBQUNILGFBQWNJLHlCQUFjLEVBQUU7UUFDMUNwSCxrQkFBa0JvQywrQ0FBNkI7UUFFL0N5RixRQUFRQSxRQUFRWCxLQUFLWSxHQUFHLENBQUNkO0lBQzNCO0lBRUEsSUFBSUUsS0FBS0MsR0FBRyxDQUFDRSxzQkFBVyxHQUFHTCxhQUFhSSx5QkFBYyxFQUFFO1FBQ3REcEgsa0JBQWtCd0IsNENBQTBCO1FBRTVDcUcsUUFBUUEsUUFBUVgsS0FBS2EsR0FBRyxDQUFDZjtJQUMzQjtJQUVBLElBQUlFLEtBQUtDLEdBQUcsQ0FBQyxDQUFDRSxzQkFBVyxHQUFHTCxhQUFhSSx5QkFBYyxFQUFFO1FBQ3ZEcEgsa0JBQWtCNEIsOENBQTRCO1FBRTlDaUcsUUFBUUEsUUFBUVgsS0FBS2EsR0FBRyxDQUFDZjtJQUMzQjtJQUVBLElBQUksQUFBQ00sYUFBRSxHQUFHSixLQUFLQyxHQUFHLENBQUNILGFBQWNJLHlCQUFjLEVBQUU7UUFDL0NwSCxrQkFBa0JnQyw4Q0FBNEI7UUFFOUM2RixRQUFRQSxRQUFRWCxLQUFLWSxHQUFHLENBQUNkO0lBQzNCO0lBRUEsSUFBSWhILG9CQUFvQixNQUFNO1FBQzVCLElBQU0vQixpQkFBaUIsSUFBSSxDQUFDNEYsaUJBQWlCLElBQ3ZDMEMscUJBQXFCL0ksTUFBTVMsaUJBQzNCK0osZ0JBQWdCekIsb0JBQ2hCTCxNQUFNOEIsY0FBY2xCLE1BQU0sSUFDMUJYLE9BQU82QixjQUFjakIsT0FBTztRQUVsQyxJQUFJLENBQUNULCtCQUErQixDQUFDdEcsaUJBQWlCaUUsT0FBT2xFLFNBQVNtRyxLQUFLQyxNQUFNMEI7SUFDbkY7QUFDRjtBQUVBLFNBQVM5QyxVQUFVZCxLQUFLLEVBQUVsRSxPQUFPO0lBQy9CLElBQU1DLGtCQUFrQm9CLDhDQUE0QixFQUM5Q25ELGlCQUFpQixJQUFJLENBQUM0RixpQkFBaUIsSUFDdkMwQyxxQkFBcUIvSSxNQUFNUyxpQkFDM0IrSixnQkFBZ0J6QixvQkFDaEJMLE1BQU04QixjQUFjbEIsTUFBTSxJQUMxQlgsT0FBTzZCLGNBQWNqQixPQUFPO0lBRWxDLElBQUksQ0FBQ1QsK0JBQStCLENBQUN0RyxpQkFBaUJpRSxPQUFPbEUsU0FBU21HLEtBQUtDO0FBQzdFO0FBRUEsU0FBU25CLFdBQVdmLEtBQUssRUFBRWxFLE9BQU87SUFDaEMsSUFBTUMsa0JBQWtCNEMsK0NBQTZCLEVBQy9DM0UsaUJBQWlCLElBQUksQ0FBQzRGLGlCQUFpQixJQUN2QzBDLHFCQUFxQi9JLE1BQU1TLGlCQUMzQmdLLHNCQUFzQnhLLE9BQU9RLGlCQUM3QmlLLHdCQUF3QnRCLGlCQUFnQixDQUFDQyxrQ0FBa0MsQ0FBQ04sb0JBQW9CMEIsc0JBQ2hHUixZQUFZUyxzQkFBc0JSLFlBQVksSUFDOUMxSixpQkFBaUJ5SixXQUFXLEdBQUc7SUFFckMsSUFBSSxDQUFDL0QsaUJBQWlCLENBQUMxRjtJQUV2QixJQUFJLENBQUNzSSwrQkFBK0IsQ0FBQ3RHLGlCQUFpQmlFLE9BQU9sRTtBQUMvRDtBQUVBLFNBQVN5RixZQUFZdkIsS0FBSyxFQUFFbEUsT0FBTztJQUNqQyxJQUFNOUIsaUJBQWlCLElBQUksQ0FBQzRGLGlCQUFpQixJQUN2QzNGLGtCQUFrQixJQUFJLENBQUM2RixrQkFBa0IsSUFDekN3QyxxQkFBcUIvSSxNQUFNUyxpQkFDM0J1SSxzQkFBc0JoSixNQUFNVSxrQkFDNUJ1SSxnQkFBZ0JGLG9CQUNoQkcsaUJBQWlCRixxQkFDakJHLG1CQUFtQkMsaUJBQWdCLENBQUNDLGtDQUFrQyxDQUFDSixlQUFlQyxpQkFDdEZ5QixPQUFPeEIsaUJBQWlCeUIsT0FBTyxJQUMvQlAsUUFBUWxCLGlCQUFpQjBCLFFBQVE7SUFFdkMsSUFBSSxBQUFDUixVQUFVLEtBQU9NLE9BQU9HLDJCQUFnQixFQUFFO1FBQzdDLElBQUksQ0FBQ0Msb0JBQW9CLENBQUN0RSxPQUFPbEU7SUFDbkM7QUFDRjtBQUVBLFNBQVMwRixjQUFjeEIsS0FBSyxFQUFFbEUsT0FBTztJQUNuQyxJQUFNOUIsaUJBQWlCLElBQUksQ0FBQzRGLGlCQUFpQixJQUN2QzNGLGtCQUFrQixJQUFJLENBQUM2RixrQkFBa0IsSUFDekN3QyxxQkFBcUIvSSxNQUFNUyxpQkFDM0J1SSxzQkFBc0JoSixNQUFNVSxrQkFDNUJ1SSxnQkFBZ0JGLG9CQUNoQkcsaUJBQWlCRixxQkFDakJHLG1CQUFtQkMsaUJBQWdCLENBQUNDLGtDQUFrQyxDQUFDSixlQUFlQyxpQkFDdEZNLFlBQVlMLGlCQUFpQk0sWUFBWSxJQUN6Q1ksUUFBUWxCLGlCQUFpQjBCLFFBQVE7SUFFdkMsSUFBSVIsUUFBUVcsOEJBQW1CLEVBQUU7UUFDL0IsSUFBSSxDQUFDWixLQUFLLENBQUMzRCxPQUFPbEUsU0FBUzhILE9BQU9iO0lBQ3BDO0FBQ0Y7QUFFQSxTQUFTdUIscUJBQXFCdEUsS0FBSyxFQUFFbEUsT0FBTzs7SUFDMUMsSUFBTTlCLGlCQUFpQixJQUFJLENBQUM0RixpQkFBaUIsSUFDdkMwQyxxQkFBcUIvSSxNQUFNUyxpQkFDM0IrSixnQkFBZ0J6QixvQkFDaEJMLE1BQU04QixjQUFjbEIsTUFBTSxJQUMxQlgsT0FBTzZCLGNBQWNqQixPQUFPO0lBRWxDLElBQUloSixjQUFjLElBQUksQ0FBQ3VGLGNBQWM7SUFFckMsSUFBSXZGLGdCQUFnQixNQUFNO1FBQ3hCNkgsYUFBYTdIO1FBRWJBLGNBQWM7UUFFZCxJQUFJLENBQUN5RixjQUFjLENBQUN6RjtRQUVwQixJQUFJLENBQUNzSSxTQUFTLENBQUNwQyxPQUFPbEUsU0FBU21HLEtBQUtDO1FBRXBDO0lBQ0Y7SUFFQXBJLGNBQWMwSyxXQUFXO1FBQ3ZCMUssY0FBYztRQUVkLE1BQUt5RixjQUFjLENBQUN6RjtRQUVwQixNQUFLa0ksU0FBUyxDQUFDaEMsT0FBT2xFLFNBQVNtRyxLQUFLQztJQUN0QyxHQUFHdUMsb0JBQVM7SUFFWixJQUFJLENBQUNsRixjQUFjLENBQUN6RjtBQUN0QjtBQUVBLFNBQVM0SztJQUNQLElBQU1DLHdCQUF3QjtJQUU5QixJQUFJLENBQUNoRix3QkFBd0IsQ0FBQ2dGO0FBQ2hDO0FBRUEsU0FBU0M7SUFDUCxJQUFNRCx3QkFBd0I7SUFFOUIsSUFBSSxDQUFDaEYsd0JBQXdCLENBQUNnRjtBQUNoQztBQUVBLFNBQVN0QyxnQ0FBZ0N0RyxlQUFlLEVBQUVpRSxLQUFLLEVBQUVsRSxPQUFPO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUcrSSxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtRQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztJQUM3RixJQUFNM0ssd0JBQXdCLElBQUksQ0FBQ3dGLHdCQUF3QjtJQUUzRCxJQUFJeEYsdUJBQXVCO1FBQ3pCLElBQUksQ0FBQ2lJLGtCQUFrQixDQUF2QixNQUFBLElBQUksRUFBSjtZQUF3QnBHO1lBQWlCaUU7WUFBT2xFO1NBQStCLENBQS9FLE9BQXlELHFCQUFHK0k7SUFDOUQ7QUFDRjtBQUVBLElBQU1DLGNBQWM7SUFDbEJqTCxhQUFBQTtJQUNBb0IsY0FBQUE7SUFDQU4sY0FBQUE7SUFDQVUsZUFBQUE7SUFDQVIsYUFBQUE7SUFDQVMsY0FBQUE7SUFDQVAsWUFBQUE7SUFDQVEsYUFBQUE7SUFDQUssZ0JBQUFBO0lBQ0FPLGlCQUFBQTtJQUNBRSxrQkFBQUE7SUFDQUcsbUJBQUFBO0lBQ0FDLGtCQUFBQTtJQUNBRyxtQkFBQUE7SUFDQUMsbUJBQUFBO0lBQ0FHLG9CQUFBQTtJQUNBQyxtQkFBQUE7SUFDQUcsb0JBQUFBO0lBQ0FDLGlCQUFBQTtJQUNBRyxrQkFBQUE7SUFDQUMsbUJBQUFBO0lBQ0FHLG9CQUFBQTtJQUNBQyxtQkFBQUE7SUFDQUcsb0JBQUFBO0lBQ0FDLG9CQUFBQTtJQUNBRyxxQkFBQUE7SUFDQUMsbUJBQUFBO0lBQ0FHLG9CQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUcscUJBQUFBO0lBQ0FDLG1CQUFBQTtJQUNBRyxvQkFBQUE7SUFDQUMsbUJBQUFBO0lBQ0FHLG9CQUFBQTtJQUNBQyxnQkFBQUE7SUFDQUUsZ0JBQUFBO0lBQ0FDLG1CQUFBQTtJQUNBQyxtQkFBQUE7SUFDQUcsbUJBQUFBO0lBQ0FDLG1CQUFBQTtJQUNBSCwwQkFBQUE7SUFDQUMsMEJBQUFBO0lBQ0FHLG9CQUFBQTtJQUNBQyxvQkFBQUE7SUFDQW5GLG1CQUFBQTtJQUNBUCxrQkFBQUE7SUFDQVMsa0JBQUFBO0lBQ0FQLGtCQUFBQTtJQUNBUyxpQkFBQUE7SUFDQU4sZ0JBQUFBO0lBQ0F1RixjQUFBQTtJQUNBTyxhQUFBQTtJQUNBQyxZQUFBQTtJQUNBdUIsV0FBQUE7SUFDQUksV0FBQUE7SUFDQWhCLE1BQUFBO0lBQ0FDLE9BQUFBO0lBQ0FzQyxPQUFBQTtJQUNBN0MsV0FBQUE7SUFDQUMsWUFBQUE7SUFDQVEsYUFBQUE7SUFDQUMsZUFBQUE7SUFDQThDLHNCQUFBQTtJQUNBSSxzQkFBQUE7SUFDQUUsdUJBQUFBO0lBQ0F2QyxpQ0FBQUE7QUFDRjtJQUVBLFdBQWV5QyJ9