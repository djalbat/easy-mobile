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
var _positions = require("../utilities/positions");
var _constants = require("../constants");
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
    var tapInterval = null, dragInterval = null, pinchInterval = null, startMagnitude = null, startPositions = [], movingPositions = [], customGesturesEnabled = true;
    this.updateState({
        tapInterval: tapInterval,
        dragInterval: dragInterval,
        pinchInterval: pinchInterval,
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
function onCustomDragEnd(dragEndCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_END_CUSTOM_EVENT_TYPE, customHandler = dragEndCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragEnd(dragEndCustomHandler, element) {
    var customEventType = _customEventTypes.DRAG_END_CUSTOM_EVENT_TYPE, customHandler = dragEndCustomHandler; ///
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
function onCustomPinchEnd(pinchEndCustomHandler, element) {
    var customEventType = _customEventTypes.PINCH_END_CUSTOM_EVENT_TYPE, customHandler = pinchEndCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomPinchEnd(pinchEndCustomHandler, element) {
    var customEventType = _customEventTypes.PINCH_END_CUSTOM_EVENT_TYPE, customHandler = pinchEndCustomHandler; ///
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
function getDragInterval() {
    var dragInterval = this.getState().dragInterval;
    return dragInterval;
}
function setDragInterval(dragInterval) {
    this.updateState({
        dragInterval: dragInterval
    });
}
function getPinchInterval() {
    var pinchInterval = this.getState().pinchInterval;
    return pinchInterval;
}
function setPinchInterval(pinchInterval) {
    this.updateState({
        pinchInterval: pinchInterval
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
        this.waitToDrag(event, element);
    }
    if (startingPositionsLength === 2) {
        this.waitToPinch(event, element);
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
            var dragInterval = this.getDragInterval();
            if (dragInterval === null) {
                this.drag(event, element);
            }
        }
        if (movingPositionsLength === 2) {
            var pinchInterval = this.getPinchInterval();
            if (pinchInterval === null) {
                this.pinch(event, element);
            }
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
            if (dragInterval === null) {
                this.dragEnd(event, element);
            } else {
                clearTimeout(dragInterval);
                dragInterval = null;
                this.setDragInterval(dragInterval);
            }
        }
        if (startPositionsLength === 2) {
            var pinchInterval = this.getPinchInterval();
            if (pinchInterval === null) {
                this.pinchEnd(event, element);
            } else {
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
function dragEnd(event, element) {
    var customEventType = _customEventTypes.DRAG_END_CUSTOM_EVENT_TYPE;
    this.callCustomHandlersConditionally(customEventType, event, element);
}
function pinchEnd(event, element) {
    var customEventType = _customEventTypes.PINCH_END_CUSTOM_EVENT_TYPE;
    this.callCustomHandlersConditionally(customEventType, event, element);
}
function dragStart(event, element) {
    var startPositions = this.getStartPositions(), startPositionsLength = startPositions.length;
    if (startPositionsLength !== 1) {
        return;
    }
    var customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, firstStartPosition = first(startPositions), startPosition = firstStartPosition, top = startPosition.getTop(), left = startPosition.getLeft();
    this.callCustomHandlersConditionally(customEventType, event, element, top, left);
}
function pinchStart(event, element) {
    var startPositions = this.getStartPositions(), startPositionsLength = startPositions.length;
    if (startPositionsLength !== 2) {
        return;
    }
    var customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE, firstStartPosition = first(startPositions), secondStartPosition = second(startPositions), relativeStartPosition = _relative.default.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition), magnitude = relativeStartPosition.getMagnitude(), startMagnitude = magnitude; ///
    this.setStartMagnitude(startMagnitude);
    this.callCustomHandlersConditionally(customEventType, event, element);
}
function waitToDrag(event, element) {
    var _this = this;
    var dragInterval = this.getDragInterval();
    if (dragInterval !== null) {
        clearTimeout(dragInterval);
        dragInterval = null;
        this.setDragInterval(dragInterval);
    }
    dragInterval = setTimeout(function() {
        dragInterval = null;
        _this.setDragInterval(dragInterval);
        _this.dragStart(event, element);
    }, _constants.DRAG_DELAY);
    this.setDragInterval(dragInterval);
}
function waitToPinch(event, element) {
    var _this = this;
    var pinchInterval = this.getPinchInterval();
    if (pinchInterval !== null) {
        clearTimeout(pinchInterval);
        pinchInterval = null;
        this.setPinchInterval(pinchInterval);
    }
    pinchInterval = setTimeout(function() {
        pinchInterval = null;
        _this.setPinchInterval(pinchInterval);
        _this.pinchStart(event, element);
    }, _constants.DRAG_DELAY);
    this.setPinchInterval(pinchInterval);
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
    onCustomDragEnd: onCustomDragEnd,
    offCustomDragEnd: offCustomDragEnd,
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
    onCustomPinchEnd: onCustomPinchEnd,
    offCustomPinchEnd: offCustomPinchEnd,
    onCustomSingleTap: onCustomSingleTap,
    offCustomSingleTap: offCustomSingleTap,
    onCustomDoubleTap: onCustomDoubleTap,
    offCustomDoubleTap: offCustomDoubleTap,
    getTapInterval: getTapInterval,
    setTapInterval: setTapInterval,
    getDragInterval: getDragInterval,
    setDragInterval: setDragInterval,
    getPinchInterval: getPinchInterval,
    setPinchInterval: setPinchInterval,
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
    dragEnd: dragEnd,
    pinchEnd: pinchEnd,
    dragStart: dragStart,
    pinchStart: pinchStart,
    waitToDrag: waitToDrag,
    waitToPinch: waitToPinch,
    possibleTap: possibleTap,
    possibleSwipe: possibleSwipe,
    singleTapOrDoubleTap: singleTapOrDoubleTap,
    enableCustomGestures: enableCustomGestures,
    disableCustomGestures: disableCustomGestures,
    callCustomHandlersConditionally: callCustomHandlersConditionally
};
var _default = touchMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgd2luZG93LCBldmVudFR5cGVzIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IHNvcnRQb3NpdGlvbnMsIG1hdGNoUG9zaXRpb25zLCBmaWx0ZXJQb3NpdGlvbnMsIHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50LCBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcG9zaXRpb25zXCI7XG5pbXBvcnQgeyBQSSwgVEFQX0RFTEFZLCBEUkFHX0RFTEFZLCBQSU5DSF9ERUxBWSwgUElfT1ZFUl9UV08sIE1BWElNVU1fVEFQX1RJTUUsIE1JTklNVU1fU1dJUEVfU1BFRUQsIE1BWElNVU1fU1BSRUFEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19FTkRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9FTkRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCwgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSwgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsIFRPVUNIRU5EX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmZ1bmN0aW9uIGVuYWJsZVRvdWNoKCkge1xuICBjb25zdCB0YXBJbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIGRyYWdJbnRlcnZhbCA9IG51bGwsXG4gICAgICAgIHBpbmNoSW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IG51bGwsXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gW10sXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IFtdLFxuICAgICAgICBjdXN0b21HZXN0dXJlc0VuYWJsZWQgPSB0cnVlO1xuXG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHRhcEludGVydmFsLFxuICAgIGRyYWdJbnRlcnZhbCxcbiAgICBwaW5jaEludGVydmFsLFxuICAgIHN0YXJ0TWFnbml0dWRlLFxuICAgIHN0YXJ0UG9zaXRpb25zLFxuICAgIG1vdmluZ1Bvc2l0aW9ucyxcbiAgICBjdXN0b21HZXN0dXJlc0VuYWJsZWRcbiAgfSk7XG5cbiAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgd2luZG93Lm9uTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICB0aGlzLm9uVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICB0aGlzLm9uVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlVG91Y2goKSB7XG4gIHRoaXMub2ZmTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gIHRoaXMub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgd2luZG93Lm9mZk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vZmZUb3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydEhhbmRsZXIpO1xuICB0aGlzLm9mZlRvdWNoTW92ZSh0aGlzLnRvdWNoTW92ZUhhbmRsZXIpO1xuICB0aGlzLm9mZlRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlRvdWNoU3RhcnQodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hTVEFSVF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9mZkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hNb3ZlKHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNITU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmVG91Y2hNb3ZlKHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNITU9WRV9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9mZkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hFbmQodG91Y2hTdGFydEhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gVE9VQ0hFTkRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlRvdWNoRW5kKHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNIRU5EX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnVXAoZHJhZ1VwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1VwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdVcChkcmFnVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ0Rvd24oZHJhZ0Rvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdEb3duKGRyYWdEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnTGVmdChkcmFnTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0xlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ0xlZnQoZHJhZ0xlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdSaWdodChkcmFnUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1JpZ2h0KGRyYWdSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnU3RhcnQoZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdTdGFydChkcmFnU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ0VuZChkcmFnRW5kQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0VORF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdFbmRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ0VuZChkcmFnRW5kQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0VORF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdFbmRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVVcChzd2lwZVVwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVVcChzd2lwZVVwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVEb3duKHN3aXBlRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZURvd24oc3dpcGVEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlTGVmdChzd2lwZUxlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZUxlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVMZWZ0KHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZVJpZ2h0KHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZVJpZ2h0KHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaE1vdmUocGluY2hNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoTW92ZShwaW5jaE1vdmVDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaE1vdmVDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUGluY2hTdGFydChwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUGluY2hTdGFydChwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUGluY2hFbmQocGluY2hFbmRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX0VORF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoRW5kQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoRW5kKHBpbmNoRW5kQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9FTkRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaEVuZEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21TaW5nbGVUYXAoc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVNpbmdsZVRhcChzaW5nbGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzaW5nbGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRG91YmxlVGFwKGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRvdWJsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Eb3VibGVUYXAoZG91YmxlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZG91YmxlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBnZXRUYXBJbnRlcnZhbCgpIHtcbiAgY29uc3QgeyB0YXBJbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiB0YXBJbnRlcnZhbDtcbn1cblxuZnVuY3Rpb24gc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldERyYWdJbnRlcnZhbCgpIHtcbiAgY29uc3QgeyBkcmFnSW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gZHJhZ0ludGVydmFsO1xufVxuXG5mdW5jdGlvbiBzZXREcmFnSW50ZXJ2YWwoZHJhZ0ludGVydmFsKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIGRyYWdJbnRlcnZhbFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UGluY2hJbnRlcnZhbCgpIHtcbiAgY29uc3QgeyBwaW5jaEludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHBpbmNoSW50ZXJ2YWw7XG59XG5cbmZ1bmN0aW9uIHNldFBpbmNoSW50ZXJ2YWwocGluY2hJbnRlcnZhbCkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBwaW5jaEludGVydmFsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydE1hZ25pdHVkZSgpIHtcbiAgY29uc3QgeyBzdGFydE1hZ25pdHVkZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydE1hZ25pdHVkZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRNYWduaXR1ZGUoc3RhcnRNYWduaXR1ZGUpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRNYWduaXR1ZGVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFyZUN1c3RvbUdlc3R1cmVzRW5hYmxlZCgpIHtcbiAgY29uc3QgeyBjdXN0b21HZXN0dXJlc0VuYWJsZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gY3VzdG9tR2VzdHVyZXNFbmFibGVkO1xufVxuXG5mdW5jdGlvbiBzZXRDdXN0b21HZXN0dXJlc0VuYWJsZWQoY3VzdG9tR2VzdHVyZXNFbmFibGVkKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIGN1c3RvbUdlc3R1cmVzRW5hYmxlZFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IHsgc3RhcnRQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhcnRQb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0UG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0UG9zaXRpb25zXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRNb3ZpbmdQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IHsgbW92aW5nUG9zaXRpb25zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIG1vdmluZ1Bvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0TW92aW5nUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucykge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBtb3ZpbmdQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoU3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5tb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvdWNoRW5kSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IHRydWUsXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQodG91Y2hFdmVudCwgY2hhbmdlZCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5lbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBtb3VzZUV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgIHRoaXMud2FpdFRvRHJhZyhldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBpZiAoc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPT09IDIpIHtcbiAgICB0aGlzLndhaXRUb1BpbmNoKGV2ZW50LCBlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgcHVzaChtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3QgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBzb3J0UG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgc3RhcnRQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgbW92aW5nUG9zaXRpb25zTGVuZ3RoID0gbW92aW5nUG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGRyYWdJbnRlcnZhbCA9IHRoaXMuZ2V0RHJhZ0ludGVydmFsKCk7XG5cbiAgICAgIGlmIChkcmFnSW50ZXJ2YWwgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5kcmFnKGV2ZW50LCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW92aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCBwaW5jaEludGVydmFsID0gdGhpcy5nZXRQaW5jaEludGVydmFsKCk7XG5cbiAgICAgIGlmIChwaW5jaEludGVydmFsID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMucGluY2goZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBlbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIHBvc2l0aW9uc01hdGNoID0gbWF0Y2hQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIG1vdmluZ1Bvc2l0aW9ucyk7XG5cbiAgaWYgKHBvc2l0aW9uc01hdGNoKSB7XG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMucG9zc2libGVUYXAoZXZlbnQsIGVsZW1lbnQpO1xuXG4gICAgICB0aGlzLnBvc3NpYmxlU3dpcGUoZXZlbnQsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgbGV0IGRyYWdJbnRlcnZhbCA9IHRoaXMuZ2V0RHJhZ0ludGVydmFsKCk7XG5cbiAgICAgIGlmIChkcmFnSW50ZXJ2YWwgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5kcmFnRW5kKGV2ZW50LCBlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFyVGltZW91dChkcmFnSW50ZXJ2YWwpO1xuXG4gICAgICAgIGRyYWdJbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXREcmFnSW50ZXJ2YWwoZHJhZ0ludGVydmFsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbnNMZW5ndGggPT09IDIpIHtcbiAgICAgIGxldCBwaW5jaEludGVydmFsID0gdGhpcy5nZXRQaW5jaEludGVydmFsKCk7XG5cbiAgICAgIGlmIChwaW5jaEludGVydmFsID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMucGluY2hFbmQoZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHBpbmNoSW50ZXJ2YWwpO1xuXG4gICAgICAgIHBpbmNoSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0UGluY2hJbnRlcnZhbChwaW5jaEludGVydmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaWx0ZXJQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcbn1cblxuZnVuY3Rpb24gc2luZ2xlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpOyAvLy9cbn1cblxuZnVuY3Rpb24gZG91YmxlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbn1cblxuZnVuY3Rpb24gZHJhZyhldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICB0b3AgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRMZWZ0KCksXG4gICAgICAgIGRpcmVjdGlvbiA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0RGlyZWN0aW9uKCk7XG5cbiAgbGV0IGN1c3RvbUV2ZW50VHlwZSA9IG51bGw7XG5cbiAgaWYgKChNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoLVBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKChQSSAtIE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGluY2goZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIHNlY29uZE1vdmluZ1Bvc2l0aW9uID0gc2Vjb25kKG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIHJlbGF0aXZlTW92aW5nUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RNb3ZpbmdQb3NpdGlvbiwgc2Vjb25kTW92aW5nUG9zaXRpb24pLFxuICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IHRoaXMuZ2V0U3RhcnRNYWduaXR1ZGUoKSxcbiAgICAgICAgbWFnbml0dWRlID0gcmVsYXRpdmVNb3ZpbmdQb3NpdGlvbi5nZXRNYWduaXR1ZGUoKSxcbiAgICAgICAgcmF0aW8gPSBtYWduaXR1ZGUgLyBzdGFydE1hZ25pdHVkZTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgcmF0aW8pO1xufVxuXG5mdW5jdGlvbiBzd2lwZShldmVudCwgZWxlbWVudCwgc3BlZWQsIGRpcmVjdGlvbikge1xuICBsZXQgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICBpZiAoKE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLmNvcyhkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKFBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5zaW4oZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicygtUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguc2luKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoKFBJIC0gTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5jb3MoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmIChjdXN0b21FdmVudFR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgdG9wID0gc3RhcnRQb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgICBsZWZ0ID0gc3RhcnRQb3NpdGlvbi5nZXRMZWZ0KCk7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhZ0VuZChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0VORF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHBpbmNoRW5kKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX0VORF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0UG9zaXRpb25zTGVuZ3RoICE9PSAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBzdGFydFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAgLy8vXG4gICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbn1cblxuZnVuY3Rpb24gcGluY2hTdGFydChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICBzdGFydFBvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aDtcblxuICBpZiAoc3RhcnRQb3NpdGlvbnNMZW5ndGggIT09IDIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBzZWNvbmRTdGFydFBvc2l0aW9uID0gc2Vjb25kKHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgcmVsYXRpdmVTdGFydFBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0U3RhcnRQb3NpdGlvbiwgc2Vjb25kU3RhcnRQb3NpdGlvbiksXG4gICAgICAgIG1hZ25pdHVkZSA9IHJlbGF0aXZlU3RhcnRQb3NpdGlvbi5nZXRNYWduaXR1ZGUoKSxcbiAgICAgICAgc3RhcnRNYWduaXR1ZGUgPSBtYWduaXR1ZGU7IC8vL1xuXG4gIHRoaXMuc2V0U3RhcnRNYWduaXR1ZGUoc3RhcnRNYWduaXR1ZGUpO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gd2FpdFRvRHJhZyhldmVudCwgZWxlbWVudCkge1xuICBsZXQgZHJhZ0ludGVydmFsID0gdGhpcy5nZXREcmFnSW50ZXJ2YWwoKTtcblxuICBpZiAoZHJhZ0ludGVydmFsICE9PSBudWxsKSB7XG4gICAgY2xlYXJUaW1lb3V0KGRyYWdJbnRlcnZhbCk7XG5cbiAgICBkcmFnSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXREcmFnSW50ZXJ2YWwoZHJhZ0ludGVydmFsKTtcbiAgfVxuXG4gIGRyYWdJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRyYWdJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldERyYWdJbnRlcnZhbChkcmFnSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5kcmFnU3RhcnQoZXZlbnQsIGVsZW1lbnQpO1xuICB9LCBEUkFHX0RFTEFZKTtcblxuICB0aGlzLnNldERyYWdJbnRlcnZhbChkcmFnSW50ZXJ2YWwpO1xufVxuXG5mdW5jdGlvbiB3YWl0VG9QaW5jaChldmVudCwgZWxlbWVudCkge1xuICBsZXQgcGluY2hJbnRlcnZhbCA9IHRoaXMuZ2V0UGluY2hJbnRlcnZhbCgpO1xuXG4gIGlmIChwaW5jaEludGVydmFsICE9PSBudWxsKSB7XG4gICAgY2xlYXJUaW1lb3V0KHBpbmNoSW50ZXJ2YWwpO1xuXG4gICAgcGluY2hJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFBpbmNoSW50ZXJ2YWwocGluY2hJbnRlcnZhbCk7XG4gIH1cblxuICBwaW5jaEludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcGluY2hJbnRlcnZhbCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFBpbmNoSW50ZXJ2YWwocGluY2hJbnRlcnZhbCk7XG5cbiAgICB0aGlzLnBpbmNoU3RhcnQoZXZlbnQsIGVsZW1lbnQpO1xuICB9LCBEUkFHX0RFTEFZKTtcblxuICB0aGlzLnNldFBpbmNoSW50ZXJ2YWwocGluY2hJbnRlcnZhbCk7XG59XG5cbmZ1bmN0aW9uIHBvc3NpYmxlVGFwKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIHRpbWUgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFRpbWUoKSxcbiAgICAgICAgc3BlZWQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldFNwZWVkKCk7XG5cbiAgaWYgKChzcGVlZCA9PT0gMCkgJiYgKHRpbWUgPCBNQVhJTVVNX1RBUF9USU1FKSl7XG4gICAgdGhpcy5zaW5nbGVUYXBPckRvdWJsZVRhcChldmVudCwgZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpLFxuICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKTtcblxuICBpZiAoc3BlZWQgPiBNSU5JTVVNX1NXSVBFX1NQRUVEKSB7XG4gICAgdGhpcy5zd2lwZShldmVudCwgZWxlbWVudCwgc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2luZ2xlVGFwT3JEb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICBsZXQgdGFwSW50ZXJ2YWwgPSB0aGlzLmdldFRhcEludGVydmFsKCk7XG5cbiAgaWYgKHRhcEludGVydmFsICE9PSBudWxsKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRhcEludGVydmFsKTtcblxuICAgIHRhcEludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5kb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICB0YXBJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhcEludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5zaW5nbGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG4gIH0sIFRBUF9ERUxBWSk7XG5cbiAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUN1c3RvbUdlc3R1cmVzKCkge1xuICBjb25zdCBjdXN0b21HZXN0dXJlZEVuYWJsZWQgPSB0cnVlO1xuXG4gIHRoaXMuc2V0Q3VzdG9tR2VzdHVyZXNFbmFibGVkKGN1c3RvbUdlc3R1cmVkRW5hYmxlZCk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVDdXN0b21HZXN0dXJlcygpIHtcbiAgY29uc3QgY3VzdG9tR2VzdHVyZWRFbmFibGVkID0gZmFsc2U7XG5cbiAgdGhpcy5zZXRDdXN0b21HZXN0dXJlc0VuYWJsZWQoY3VzdG9tR2VzdHVyZWRFbmFibGVkKTtcbn1cblxuZnVuY3Rpb24gY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgY3VzdG9tR2VzdHVyZXNFbmFibGVkID0gdGhpcy5hcmVDdXN0b21HZXN0dXJlc0VuYWJsZWQoKTtcblxuICBpZiAoY3VzdG9tR2VzdHVyZXNFbmFibGVkKSB7XG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxufVxuXG5jb25zdCB0b3VjaE1peGlucyA9IHtcbiAgZW5hYmxlVG91Y2gsXG4gIGRpc2FibGVUb3VjaCxcbiAgb25Ub3VjaFN0YXJ0LFxuICBvZmZUb3VjaFN0YXJ0LFxuICBvblRvdWNoTW92ZSxcbiAgb2ZmVG91Y2hNb3ZlLFxuICBvblRvdWNoRW5kLFxuICBvZmZUb3VjaEVuZCxcbiAgb25DdXN0b21EcmFnVXAsXG4gIG9mZkN1c3RvbURyYWdVcCxcbiAgb25DdXN0b21EcmFnRG93bixcbiAgb2ZmQ3VzdG9tRHJhZ0Rvd24sXG4gIG9uQ3VzdG9tRHJhZ0xlZnQsXG4gIG9mZkN1c3RvbURyYWdMZWZ0LFxuICBvbkN1c3RvbURyYWdSaWdodCxcbiAgb2ZmQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvbkN1c3RvbURyYWdTdGFydCxcbiAgb2ZmQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvbkN1c3RvbURyYWdFbmQsXG4gIG9mZkN1c3RvbURyYWdFbmQsXG4gIG9uQ3VzdG9tU3dpcGVVcCxcbiAgb2ZmQ3VzdG9tU3dpcGVVcCxcbiAgb25DdXN0b21Td2lwZURvd24sXG4gIG9mZkN1c3RvbVN3aXBlRG93bixcbiAgb25DdXN0b21Td2lwZUxlZnQsXG4gIG9mZkN1c3RvbVN3aXBlTGVmdCxcbiAgb25DdXN0b21Td2lwZVJpZ2h0LFxuICBvZmZDdXN0b21Td2lwZVJpZ2h0LFxuICBvbkN1c3RvbVBpbmNoTW92ZSxcbiAgb2ZmQ3VzdG9tUGluY2hNb3ZlLFxuICBvbkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9mZkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9uQ3VzdG9tUGluY2hFbmQsXG4gIG9mZkN1c3RvbVBpbmNoRW5kLFxuICBvbkN1c3RvbVNpbmdsZVRhcCxcbiAgb2ZmQ3VzdG9tU2luZ2xlVGFwLFxuICBvbkN1c3RvbURvdWJsZVRhcCxcbiAgb2ZmQ3VzdG9tRG91YmxlVGFwLFxuICBnZXRUYXBJbnRlcnZhbCxcbiAgc2V0VGFwSW50ZXJ2YWwsXG4gIGdldERyYWdJbnRlcnZhbCxcbiAgc2V0RHJhZ0ludGVydmFsLFxuICBnZXRQaW5jaEludGVydmFsLFxuICBzZXRQaW5jaEludGVydmFsLFxuICBnZXRTdGFydE1hZ25pdHVkZSxcbiAgc2V0U3RhcnRNYWduaXR1ZGUsXG4gIGdldFN0YXJ0UG9zaXRpb25zLFxuICBzZXRTdGFydFBvc2l0aW9ucyxcbiAgYXJlQ3VzdG9tR2VzdHVyZXNFbmFibGVkLFxuICBzZXRDdXN0b21HZXN0dXJlc0VuYWJsZWQsXG4gIGdldE1vdmluZ1Bvc2l0aW9ucyxcbiAgc2V0TW92aW5nUG9zaXRpb25zLFxuICB0b3VjaFN0YXJ0SGFuZGxlcixcbiAgbW91c2VEb3duSGFuZGxlcixcbiAgdG91Y2hNb3ZlSGFuZGxlcixcbiAgbW91c2VNb3ZlSGFuZGxlcixcbiAgdG91Y2hFbmRIYW5kbGVyLFxuICBtb3VzZVVwSGFuZGxlcixcbiAgc3RhcnRIYW5kbGVyLFxuICBtb3ZlSGFuZGxlcixcbiAgZW5kSGFuZGxlcixcbiAgc2luZ2xlVGFwLFxuICBkb3VibGVUYXAsXG4gIGRyYWcsXG4gIHBpbmNoLFxuICBzd2lwZSxcbiAgZHJhZ0VuZCxcbiAgcGluY2hFbmQsXG4gIGRyYWdTdGFydCxcbiAgcGluY2hTdGFydCxcbiAgd2FpdFRvRHJhZyxcbiAgd2FpdFRvUGluY2gsXG4gIHBvc3NpYmxlVGFwLFxuICBwb3NzaWJsZVN3aXBlLFxuICBzaW5nbGVUYXBPckRvdWJsZVRhcCxcbiAgZW5hYmxlQ3VzdG9tR2VzdHVyZXMsXG4gIGRpc2FibGVDdXN0b21HZXN0dXJlcyxcbiAgY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG91Y2hNaXhpbnM7XG4iXSwibmFtZXMiOlsicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJzZWNvbmQiLCJUT1VDSFNUQVJUX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiVE9VQ0hNT1ZFX0VWRU5UX1RZUEUiLCJUT1VDSEVORF9FVkVOVF9UWVBFIiwiZW5hYmxlVG91Y2giLCJ0YXBJbnRlcnZhbCIsImRyYWdJbnRlcnZhbCIsInBpbmNoSW50ZXJ2YWwiLCJzdGFydE1hZ25pdHVkZSIsInN0YXJ0UG9zaXRpb25zIiwibW92aW5nUG9zaXRpb25zIiwiY3VzdG9tR2VzdHVyZXNFbmFibGVkIiwidXBkYXRlU3RhdGUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ3aW5kb3ciLCJvbk1vdXNlVXAiLCJtb3VzZVVwSGFuZGxlciIsIm9uVG91Y2hTdGFydCIsInRvdWNoU3RhcnRIYW5kbGVyIiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmVIYW5kbGVyIiwib25Ub3VjaEVuZCIsInRvdWNoRW5kSGFuZGxlciIsImRpc2FibGVUb3VjaCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlVXAiLCJvZmZUb3VjaFN0YXJ0Iiwib2ZmVG91Y2hNb3ZlIiwib2ZmVG91Y2hFbmQiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwib25FdmVudCIsIm9mZkV2ZW50Iiwib25DdXN0b21EcmFnVXAiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIkRSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjdXN0b21IYW5kbGVyIiwib25DdXN0b21FdmVudCIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbUV2ZW50Iiwib25DdXN0b21EcmFnRG93biIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsIkRSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnTGVmdCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsIkRSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdMZWZ0Iiwib25DdXN0b21EcmFnUmlnaHQiLCJkcmFnUmlnaHRDdXN0b21IYW5kbGVyIiwiRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdSaWdodCIsIm9uQ3VzdG9tRHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsIkRSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbURyYWdFbmQiLCJkcmFnRW5kQ3VzdG9tSGFuZGxlciIsIkRSQUdfRU5EX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ0VuZCIsIm9uQ3VzdG9tU3dpcGVVcCIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwiU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsIlNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsIlNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsIlBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsIlBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tUGluY2hFbmQiLCJwaW5jaEVuZEN1c3RvbUhhbmRsZXIiLCJQSU5DSF9FTkRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21QaW5jaEVuZCIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsIlNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvbkN1c3RvbURvdWJsZVRhcCIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwiZ2V0VGFwSW50ZXJ2YWwiLCJnZXRTdGF0ZSIsInNldFRhcEludGVydmFsIiwiZ2V0RHJhZ0ludGVydmFsIiwic2V0RHJhZ0ludGVydmFsIiwiZ2V0UGluY2hJbnRlcnZhbCIsInNldFBpbmNoSW50ZXJ2YWwiLCJnZXRTdGFydE1hZ25pdHVkZSIsInNldFN0YXJ0TWFnbml0dWRlIiwiYXJlQ3VzdG9tR2VzdHVyZXNFbmFibGVkIiwic2V0Q3VzdG9tR2VzdHVyZXNFbmFibGVkIiwiZ2V0U3RhcnRQb3NpdGlvbnMiLCJzZXRTdGFydFBvc2l0aW9ucyIsImdldE1vdmluZ1Bvc2l0aW9ucyIsInNldE1vdmluZ1Bvc2l0aW9ucyIsImV2ZW50Iiwic3RhcnRIYW5kbGVyIiwidG91Y2hFdmVudCIsImNoYW5nZWQiLCJwb3NpdGlvbnMiLCJwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCIsIm1vdXNlRXZlbnQiLCJwb3NpdGlvbnNGcm9tTW91c2VFdmVudCIsIm1vdmVIYW5kbGVyIiwiZW5kSGFuZGxlciIsInBvc2l0aW9uc0Zyb21FdmVudCIsImZpbHRlclBvc2l0aW9ucyIsInN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwid2FpdFRvRHJhZyIsIndhaXRUb1BpbmNoIiwicG9zaXRpb25zTWF0Y2giLCJtYXRjaFBvc2l0aW9ucyIsInNvcnRQb3NpdGlvbnMiLCJtb3ZpbmdQb3NpdGlvbnNMZW5ndGgiLCJkcmFnIiwicGluY2giLCJzdGFydFBvc2l0aW9uc0xlbmd0aCIsInBvc3NpYmxlVGFwIiwicG9zc2libGVTd2lwZSIsImRyYWdFbmQiLCJjbGVhclRpbWVvdXQiLCJwaW5jaEVuZCIsInNpbmdsZVRhcCIsInRvcCIsImxlZnQiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJkb3VibGVUYXAiLCJjYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5IiwiZmlyc3RTdGFydFBvc2l0aW9uIiwiZmlyc3RNb3ZpbmdQb3NpdGlvbiIsImZpcnN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInJlbGF0aXZlUG9zaXRpb24iLCJSZWxhdGl2ZVBvc2l0aW9uIiwiZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbiIsImdldFRvcCIsImdldExlZnQiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJNYXRoIiwiYWJzIiwiTUFYSU1VTV9TUFJFQUQiLCJQSV9PVkVSX1RXTyIsIlBJIiwic2Vjb25kTW92aW5nUG9zaXRpb24iLCJyZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uIiwibWFnbml0dWRlIiwiZ2V0TWFnbml0dWRlIiwicmF0aW8iLCJzd2lwZSIsInNwZWVkIiwiY29zIiwic2luIiwic3RhcnRQb3NpdGlvbiIsImRyYWdTdGFydCIsInBpbmNoU3RhcnQiLCJzZWNvbmRTdGFydFBvc2l0aW9uIiwicmVsYXRpdmVTdGFydFBvc2l0aW9uIiwic2V0VGltZW91dCIsIkRSQUdfREVMQVkiLCJ0aW1lIiwiZ2V0VGltZSIsImdldFNwZWVkIiwiTUFYSU1VTV9UQVBfVElNRSIsInNpbmdsZVRhcE9yRG91YmxlVGFwIiwiTUlOSU1VTV9TV0lQRV9TUEVFRCIsIlRBUF9ERUxBWSIsImVuYWJsZUN1c3RvbUdlc3R1cmVzIiwiY3VzdG9tR2VzdHVyZWRFbmFibGVkIiwiZGlzYWJsZUN1c3RvbUdlc3R1cmVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidG91Y2hNaXhpbnMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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