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
    }, _constants.PINCH_DELAY);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgd2luZG93LCBldmVudFR5cGVzIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IHNvcnRQb3NpdGlvbnMsIG1hdGNoUG9zaXRpb25zLCBmaWx0ZXJQb3NpdGlvbnMsIHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50LCBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcG9zaXRpb25zXCI7XG5pbXBvcnQgeyBQSSwgVEFQX0RFTEFZLCBEUkFHX0RFTEFZLCBQSU5DSF9ERUxBWSwgUElfT1ZFUl9UV08sIE1BWElNVU1fVEFQX1RJTUUsIE1JTklNVU1fU1dJUEVfU1BFRUQsIE1BWElNVU1fU1BSRUFEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vY3VzdG9tRXZlbnRUeXBlc1wiO1xuXG5jb25zdCB7IHB1c2gsIGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBUT1VDSFNUQVJUX0VWRU5UX1RZUEUsIFRPVUNITU9WRV9FVkVOVF9UWVBFLCBUT1VDSEVORF9FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xuXG5mdW5jdGlvbiBlbmFibGVUb3VjaCgpIHtcbiAgY29uc3QgdGFwSW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICBkcmFnSW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICBwaW5jaEludGVydmFsID0gbnVsbCxcbiAgICAgICAgc3RhcnRNYWduaXR1ZGUgPSBudWxsLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgY3VzdG9tR2VzdHVyZXNFbmFibGVkID0gdHJ1ZTtcblxuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICB0YXBJbnRlcnZhbCxcbiAgICBkcmFnSW50ZXJ2YWwsXG4gICAgcGluY2hJbnRlcnZhbCxcbiAgICBzdGFydE1hZ25pdHVkZSxcbiAgICBzdGFydFBvc2l0aW9ucyxcbiAgICBtb3ZpbmdQb3NpdGlvbnMsXG4gICAgY3VzdG9tR2VzdHVyZXNFbmFibGVkXG4gIH0pO1xuXG4gIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vbk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5vblRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vblRvdWNoRW5kKHRoaXMudG91Y2hFbmRIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZVRvdWNoKCkge1xuICB0aGlzLm9mZk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICB0aGlzLm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gIHdpbmRvdy5vZmZNb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub2ZmVG91Y2hTdGFydCh0aGlzLnRvdWNoU3RhcnRIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaE1vdmUodGhpcy50b3VjaE1vdmVIYW5kbGVyKTtcbiAgdGhpcy5vZmZUb3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hTdGFydCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSFNUQVJUX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZUb3VjaFN0YXJ0KHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZFdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoTW92ZSh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlRvdWNoTW92ZSh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSE1PVkVfRVZFTlRfVFlQRSxcbiAgICAgICAgaGFuZGxlciA9IHRvdWNoU3RhcnRIYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vZmZFdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoRW5kKHRvdWNoU3RhcnRIYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IFRPVUNIRU5EX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSB0b3VjaFN0YXJ0SGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZUb3VjaEVuZCh0b3VjaFN0YXJ0SGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBUT1VDSEVORF9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gdG91Y2hTdGFydEhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9mZkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1VwKGRyYWdVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnVXAoZHJhZ1VwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1VwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdEb3duKGRyYWdEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnRG93bihkcmFnRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0Rvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ0xlZnQoZHJhZ0xlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdMZWZ0KGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnUmlnaHQoZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURyYWdSaWdodChkcmFnUmlnaHRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnU3RhcnQoZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlVXAoc3dpcGVVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVVwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVEb3duKHN3aXBlRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlRG93bkN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlTGVmdChzd2lwZUxlZnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZUxlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU3dpcGVSaWdodChzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaE1vdmUocGluY2hNb3ZlQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoU3RhcnQocGluY2hTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVNpbmdsZVRhcChzaW5nbGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzaW5nbGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU2luZ2xlVGFwKHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHNpbmdsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Eb3VibGVUYXAoZG91YmxlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZG91YmxlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbURvdWJsZVRhcChkb3VibGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkb3VibGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhcEludGVydmFsKCkge1xuICBjb25zdCB7IHRhcEludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHRhcEludGVydmFsO1xufVxuXG5mdW5jdGlvbiBzZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICB0YXBJbnRlcnZhbFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RHJhZ0ludGVydmFsKCkge1xuICBjb25zdCB7IGRyYWdJbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBkcmFnSW50ZXJ2YWw7XG59XG5cbmZ1bmN0aW9uIHNldERyYWdJbnRlcnZhbChkcmFnSW50ZXJ2YWwpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgZHJhZ0ludGVydmFsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQaW5jaEludGVydmFsKCkge1xuICBjb25zdCB7IHBpbmNoSW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gcGluY2hJbnRlcnZhbDtcbn1cblxuZnVuY3Rpb24gc2V0UGluY2hJbnRlcnZhbChwaW5jaEludGVydmFsKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHBpbmNoSW50ZXJ2YWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0TWFnbml0dWRlKCkge1xuICBjb25zdCB7IHN0YXJ0TWFnbml0dWRlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0TWFnbml0dWRlO1xufVxuXG5mdW5jdGlvbiBzZXRTdGFydE1hZ25pdHVkZShzdGFydE1hZ25pdHVkZSkge1xuICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICBzdGFydE1hZ25pdHVkZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYXJlQ3VzdG9tR2VzdHVyZXNFbmFibGVkKCkge1xuICBjb25zdCB7IGN1c3RvbUdlc3R1cmVzRW5hYmxlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBjdXN0b21HZXN0dXJlc0VuYWJsZWQ7XG59XG5cbmZ1bmN0aW9uIHNldEN1c3RvbUdlc3R1cmVzRW5hYmxlZChjdXN0b21HZXN0dXJlc0VuYWJsZWQpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgY3VzdG9tR2VzdHVyZXNFbmFibGVkXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFydFBvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBzdGFydFBvc2l0aW9ucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiBzdGFydFBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRQb3NpdGlvbnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE1vdmluZ1Bvc2l0aW9ucygpIHtcbiAgY29uc3QgeyBtb3ZpbmdQb3NpdGlvbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gbW92aW5nUG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBzZXRNb3ZpbmdQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIG1vdmluZ1Bvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hTdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hFbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIHB1c2goc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3Qgc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgdGhpcy53YWl0VG9EcmFnKGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGlmIChzdGFydGluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgIHRoaXMud2FpdFRvUGluY2goZXZlbnQsIGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBwdXNoKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBjb25zdCBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBtb3ZpbmdQb3NpdGlvbnMpO1xuXG4gIGlmIChwb3NpdGlvbnNNYXRjaCkge1xuICAgIHNvcnRQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBzdGFydFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCBtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPSBtb3ZpbmdQb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZHJhZ0ludGVydmFsID0gdGhpcy5nZXREcmFnSW50ZXJ2YWwoKTtcblxuICAgICAgaWYgKGRyYWdJbnRlcnZhbCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRyYWcoZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDIpIHtcbiAgICAgIGNvbnN0IHBpbmNoSW50ZXJ2YWwgPSB0aGlzLmdldFBpbmNoSW50ZXJ2YWwoKTtcblxuICAgICAgaWYgKHBpbmNoSW50ZXJ2YWwgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5waW5jaChldmVudCwgZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIHBvc2l0aW9uc0Zyb21FdmVudCkge1xuICBjb25zdCBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tRXZlbnQoZXZlbnQpLFxuICAgICAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uc0xlbmd0aCA9IHN0YXJ0UG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5wb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCk7XG5cbiAgICAgIHRoaXMucG9zc2libGVTd2lwZShldmVudCwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICBsZXQgZHJhZ0ludGVydmFsID0gdGhpcy5nZXREcmFnSW50ZXJ2YWwoKTtcblxuICAgICAgaWYgKGRyYWdJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoZHJhZ0ludGVydmFsKTtcblxuICAgICAgICBkcmFnSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0RHJhZ0ludGVydmFsKGRyYWdJbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgICBsZXQgcGluY2hJbnRlcnZhbCA9IHRoaXMuZ2V0UGluY2hJbnRlcnZhbCgpO1xuXG4gICAgICBpZiAocGluY2hJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQocGluY2hJbnRlcnZhbCk7XG5cbiAgICAgICAgcGluY2hJbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRQaW5jaEludGVydmFsKHBpbmNoSW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZpbHRlclBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBmaWx0ZXJQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zLCBwb3NpdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBzaW5nbGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7IC8vL1xufVxuXG5mdW5jdGlvbiBkb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xufVxuXG5mdW5jdGlvbiBkcmFnKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIHRvcCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSByZWxhdGl2ZVBvc2l0aW9uLmdldExlZnQoKSxcbiAgICAgICAgZGlyZWN0aW9uID0gcmVsYXRpdmVQb3NpdGlvbi5nZXREaXJlY3Rpb24oKTtcblxuICBsZXQgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICBpZiAoKE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKFBJX09WRVJfVFdPIC0gZGlyZWN0aW9uKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicygtUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoKFBJIC0gTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmIChjdXN0b21FdmVudFR5cGUgIT09IG51bGwpIHtcbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwaW5jaChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgc2Vjb25kTW92aW5nUG9zaXRpb24gPSBzZWNvbmQobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgcmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdE1vdmluZ1Bvc2l0aW9uLCBzZWNvbmRNb3ZpbmdQb3NpdGlvbiksXG4gICAgICAgIGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gdGhpcy5nZXRTdGFydE1hZ25pdHVkZSgpLFxuICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZU1vdmluZ1Bvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgICAgICByYXRpbyA9IG1hZ25pdHVkZSAvIHN0YXJ0TWFnbml0dWRlO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCByYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHN3aXBlKGV2ZW50LCBlbGVtZW50LCBzcGVlZCwgZGlyZWN0aW9uKSB7XG4gIGxldCBjdXN0b21FdmVudFR5cGUgPSBudWxsO1xuXG4gIGlmICgoTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguY29zKGRpcmVjdGlvbik7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLnNpbihkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKC1QSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5zaW4oZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGlmICgoUEkgLSBNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLmNvcyhkaXJlY3Rpb24pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUV2ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzQ29uZGl0aW9uYWxseShjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoO1xuXG4gIGlmIChzdGFydFBvc2l0aW9uc0xlbmd0aCAhPT0gMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgIC8vL1xuICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gc3RhcnRQb3NpdGlvbi5nZXRMZWZ0KCk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG59XG5cbmZ1bmN0aW9uIHBpbmNoU3RhcnQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgc3RhcnRQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0UG9zaXRpb25zTGVuZ3RoICE9PSAyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc2Vjb25kU3RhcnRQb3NpdGlvbiA9IHNlY29uZChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIHJlbGF0aXZlU3RhcnRQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFN0YXJ0UG9zaXRpb24sIHNlY29uZFN0YXJ0UG9zaXRpb24pLFxuICAgICAgICBtYWduaXR1ZGUgPSByZWxhdGl2ZVN0YXJ0UG9zaXRpb24uZ2V0TWFnbml0dWRlKCksXG4gICAgICAgIHN0YXJ0TWFnbml0dWRlID0gbWFnbml0dWRlOyAvLy9cblxuICB0aGlzLnNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHdhaXRUb0RyYWcoZXZlbnQsIGVsZW1lbnQpIHtcbiAgbGV0IGRyYWdJbnRlcnZhbCA9IHRoaXMuZ2V0RHJhZ0ludGVydmFsKCk7XG5cbiAgaWYgKGRyYWdJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgIGNsZWFyVGltZW91dChkcmFnSW50ZXJ2YWwpO1xuXG4gICAgZHJhZ0ludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0RHJhZ0ludGVydmFsKGRyYWdJbnRlcnZhbCk7XG4gIH1cblxuICBkcmFnSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkcmFnSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXREcmFnSW50ZXJ2YWwoZHJhZ0ludGVydmFsKTtcblxuICAgIHRoaXMuZHJhZ1N0YXJ0KGV2ZW50LCBlbGVtZW50KTtcbiAgfSwgRFJBR19ERUxBWSk7XG5cbiAgdGhpcy5zZXREcmFnSW50ZXJ2YWwoZHJhZ0ludGVydmFsKTtcbn1cblxuZnVuY3Rpb24gd2FpdFRvUGluY2goZXZlbnQsIGVsZW1lbnQpIHtcbiAgbGV0IHBpbmNoSW50ZXJ2YWwgPSB0aGlzLmdldFBpbmNoSW50ZXJ2YWwoKTtcblxuICBpZiAocGluY2hJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgIGNsZWFyVGltZW91dChwaW5jaEludGVydmFsKTtcblxuICAgIHBpbmNoSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRQaW5jaEludGVydmFsKHBpbmNoSW50ZXJ2YWwpO1xuICB9XG5cbiAgcGluY2hJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHBpbmNoSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRQaW5jaEludGVydmFsKHBpbmNoSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5waW5jaFN0YXJ0KGV2ZW50LCBlbGVtZW50KTtcbiAgfSwgUElOQ0hfREVMQVkpO1xuXG4gIHRoaXMuc2V0UGluY2hJbnRlcnZhbChwaW5jaEludGVydmFsKTtcbn1cblxuZnVuY3Rpb24gcG9zc2libGVUYXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgdGltZSA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0VGltZSgpLFxuICAgICAgICBzcGVlZCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0U3BlZWQoKTtcblxuICBpZiAoKHNwZWVkID09PSAwKSAmJiAodGltZSA8IE1BWElNVU1fVEFQX1RJTUUpKXtcbiAgICB0aGlzLnNpbmdsZVRhcE9yRG91YmxlVGFwKGV2ZW50LCBlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3NzaWJsZVN3aXBlKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIGRpcmVjdGlvbiA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgIHNwZWVkID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRTcGVlZCgpO1xuXG4gIGlmIChzcGVlZCA+IE1JTklNVU1fU1dJUEVfU1BFRUQpIHtcbiAgICB0aGlzLnN3aXBlKGV2ZW50LCBlbGVtZW50LCBzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaW5nbGVUYXBPckRvdWJsZVRhcChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBzdGFydFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgdG9wID0gc3RhcnRQb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gIGxldCB0YXBJbnRlcnZhbCA9IHRoaXMuZ2V0VGFwSW50ZXJ2YWwoKTtcblxuICBpZiAodGFwSW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICBjbGVhclRpbWVvdXQodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGFwSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG5cbiAgICB0aGlzLmRvdWJsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHRhcEludGVydmFsID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGFwSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG5cbiAgICB0aGlzLnNpbmdsZVRhcChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbiAgfSwgVEFQX0RFTEFZKTtcblxuICB0aGlzLnNldFRhcEludGVydmFsKHRhcEludGVydmFsKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlQ3VzdG9tR2VzdHVyZXMoKSB7XG4gIGNvbnN0IGN1c3RvbUdlc3R1cmVkRW5hYmxlZCA9IHRydWU7XG5cbiAgdGhpcy5zZXRDdXN0b21HZXN0dXJlc0VuYWJsZWQoY3VzdG9tR2VzdHVyZWRFbmFibGVkKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUN1c3RvbUdlc3R1cmVzKCkge1xuICBjb25zdCBjdXN0b21HZXN0dXJlZEVuYWJsZWQgPSBmYWxzZTtcblxuICB0aGlzLnNldEN1c3RvbUdlc3R1cmVzRW5hYmxlZChjdXN0b21HZXN0dXJlZEVuYWJsZWQpO1xufVxuXG5mdW5jdGlvbiBjYWxsQ3VzdG9tSGFuZGxlcnNDb25kaXRpb25hbGx5KGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBjdXN0b21HZXN0dXJlc0VuYWJsZWQgPSB0aGlzLmFyZUN1c3RvbUdlc3R1cmVzRW5hYmxlZCgpO1xuXG4gIGlmIChjdXN0b21HZXN0dXJlc0VuYWJsZWQpIHtcbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG59XG5cbmNvbnN0IHRvdWNoTWl4aW5zID0ge1xuICBlbmFibGVUb3VjaCxcbiAgZGlzYWJsZVRvdWNoLFxuICBvblRvdWNoU3RhcnQsXG4gIG9mZlRvdWNoU3RhcnQsXG4gIG9uVG91Y2hNb3ZlLFxuICBvZmZUb3VjaE1vdmUsXG4gIG9uVG91Y2hFbmQsXG4gIG9mZlRvdWNoRW5kLFxuICBvbkN1c3RvbURyYWdVcCxcbiAgb2ZmQ3VzdG9tRHJhZ1VwLFxuICBvbkN1c3RvbURyYWdEb3duLFxuICBvZmZDdXN0b21EcmFnRG93bixcbiAgb25DdXN0b21EcmFnTGVmdCxcbiAgb2ZmQ3VzdG9tRHJhZ0xlZnQsXG4gIG9uQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvZmZDdXN0b21EcmFnUmlnaHQsXG4gIG9uQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvZmZDdXN0b21EcmFnU3RhcnQsXG4gIG9uQ3VzdG9tU3dpcGVVcCxcbiAgb2ZmQ3VzdG9tU3dpcGVVcCxcbiAgb25DdXN0b21Td2lwZURvd24sXG4gIG9mZkN1c3RvbVN3aXBlRG93bixcbiAgb25DdXN0b21Td2lwZUxlZnQsXG4gIG9mZkN1c3RvbVN3aXBlTGVmdCxcbiAgb25DdXN0b21Td2lwZVJpZ2h0LFxuICBvZmZDdXN0b21Td2lwZVJpZ2h0LFxuICBvbkN1c3RvbVBpbmNoTW92ZSxcbiAgb2ZmQ3VzdG9tUGluY2hNb3ZlLFxuICBvbkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9mZkN1c3RvbVBpbmNoU3RhcnQsXG4gIG9uQ3VzdG9tU2luZ2xlVGFwLFxuICBvZmZDdXN0b21TaW5nbGVUYXAsXG4gIG9uQ3VzdG9tRG91YmxlVGFwLFxuICBvZmZDdXN0b21Eb3VibGVUYXAsXG4gIGdldFRhcEludGVydmFsLFxuICBzZXRUYXBJbnRlcnZhbCxcbiAgZ2V0RHJhZ0ludGVydmFsLFxuICBzZXREcmFnSW50ZXJ2YWwsXG4gIGdldFBpbmNoSW50ZXJ2YWwsXG4gIHNldFBpbmNoSW50ZXJ2YWwsXG4gIGdldFN0YXJ0TWFnbml0dWRlLFxuICBzZXRTdGFydE1hZ25pdHVkZSxcbiAgZ2V0U3RhcnRQb3NpdGlvbnMsXG4gIHNldFN0YXJ0UG9zaXRpb25zLFxuICBhcmVDdXN0b21HZXN0dXJlc0VuYWJsZWQsXG4gIHNldEN1c3RvbUdlc3R1cmVzRW5hYmxlZCxcbiAgZ2V0TW92aW5nUG9zaXRpb25zLFxuICBzZXRNb3ZpbmdQb3NpdGlvbnMsXG4gIHRvdWNoU3RhcnRIYW5kbGVyLFxuICBtb3VzZURvd25IYW5kbGVyLFxuICB0b3VjaE1vdmVIYW5kbGVyLFxuICBtb3VzZU1vdmVIYW5kbGVyLFxuICB0b3VjaEVuZEhhbmRsZXIsXG4gIG1vdXNlVXBIYW5kbGVyLFxuICBzdGFydEhhbmRsZXIsXG4gIG1vdmVIYW5kbGVyLFxuICBlbmRIYW5kbGVyLFxuICBzaW5nbGVUYXAsXG4gIGRvdWJsZVRhcCxcbiAgZHJhZyxcbiAgcGluY2gsXG4gIHN3aXBlLFxuICBkcmFnU3RhcnQsXG4gIHBpbmNoU3RhcnQsXG4gIHdhaXRUb0RyYWcsXG4gIHdhaXRUb1BpbmNoLFxuICBwb3NzaWJsZVRhcCxcbiAgcG9zc2libGVTd2lwZSxcbiAgc2luZ2xlVGFwT3JEb3VibGVUYXAsXG4gIGVuYWJsZUN1c3RvbUdlc3R1cmVzLFxuICBkaXNhYmxlQ3VzdG9tR2VzdHVyZXMsXG4gIGNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvdWNoTWl4aW5zO1xuIl0sIm5hbWVzIjpbInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiVE9VQ0hTVEFSVF9FVkVOVF9UWVBFIiwiZXZlbnRUeXBlcyIsIlRPVUNITU9WRV9FVkVOVF9UWVBFIiwiVE9VQ0hFTkRfRVZFTlRfVFlQRSIsImVuYWJsZVRvdWNoIiwidGFwSW50ZXJ2YWwiLCJkcmFnSW50ZXJ2YWwiLCJwaW5jaEludGVydmFsIiwic3RhcnRNYWduaXR1ZGUiLCJzdGFydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9ucyIsImN1c3RvbUdlc3R1cmVzRW5hYmxlZCIsInVwZGF0ZVN0YXRlIiwib25Nb3VzZURvd24iLCJtb3VzZURvd25IYW5kbGVyIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwid2luZG93Iiwib25Nb3VzZVVwIiwibW91c2VVcEhhbmRsZXIiLCJvblRvdWNoU3RhcnQiLCJ0b3VjaFN0YXJ0SGFuZGxlciIsIm9uVG91Y2hNb3ZlIiwidG91Y2hNb3ZlSGFuZGxlciIsIm9uVG91Y2hFbmQiLCJ0b3VjaEVuZEhhbmRsZXIiLCJkaXNhYmxlVG91Y2giLCJvZmZNb3VzZURvd24iLCJvZmZNb3VzZU1vdmUiLCJvZmZNb3VzZVVwIiwib2ZmVG91Y2hTdGFydCIsIm9mZlRvdWNoTW92ZSIsIm9mZlRvdWNoRW5kIiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsIm9uRXZlbnQiLCJvZmZFdmVudCIsIm9uQ3VzdG9tRHJhZ1VwIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsImVsZW1lbnQiLCJjdXN0b21FdmVudFR5cGUiLCJEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwiY3VzdG9tSGFuZGxlciIsIm9uQ3VzdG9tRXZlbnQiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21FdmVudCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ0xlZnQiLCJkcmFnTGVmdEN1c3RvbUhhbmRsZXIiLCJEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnTGVmdCIsIm9uQ3VzdG9tRHJhZ1JpZ2h0IiwiZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciIsIkRSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnUmlnaHQiLCJvbkN1c3RvbURyYWdTdGFydCIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwiU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwiUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21TaW5nbGVUYXAiLCJzaW5nbGVUYXBDdXN0b21IYW5kbGVyIiwiU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVNpbmdsZVRhcCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsIkRPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJnZXRUYXBJbnRlcnZhbCIsImdldFN0YXRlIiwic2V0VGFwSW50ZXJ2YWwiLCJnZXREcmFnSW50ZXJ2YWwiLCJzZXREcmFnSW50ZXJ2YWwiLCJnZXRQaW5jaEludGVydmFsIiwic2V0UGluY2hJbnRlcnZhbCIsImdldFN0YXJ0TWFnbml0dWRlIiwic2V0U3RhcnRNYWduaXR1ZGUiLCJhcmVDdXN0b21HZXN0dXJlc0VuYWJsZWQiLCJzZXRDdXN0b21HZXN0dXJlc0VuYWJsZWQiLCJnZXRTdGFydFBvc2l0aW9ucyIsInNldFN0YXJ0UG9zaXRpb25zIiwiZ2V0TW92aW5nUG9zaXRpb25zIiwic2V0TW92aW5nUG9zaXRpb25zIiwiZXZlbnQiLCJzdGFydEhhbmRsZXIiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZCIsInBvc2l0aW9ucyIsInBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50IiwibW91c2VFdmVudCIsInBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50IiwibW92ZUhhbmRsZXIiLCJlbmRIYW5kbGVyIiwicG9zaXRpb25zRnJvbUV2ZW50IiwiZmlsdGVyUG9zaXRpb25zIiwic3RhcnRpbmdQb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJ3YWl0VG9EcmFnIiwid2FpdFRvUGluY2giLCJwb3NpdGlvbnNNYXRjaCIsIm1hdGNoUG9zaXRpb25zIiwic29ydFBvc2l0aW9ucyIsIm1vdmluZ1Bvc2l0aW9uc0xlbmd0aCIsImRyYWciLCJwaW5jaCIsInN0YXJ0UG9zaXRpb25zTGVuZ3RoIiwicG9zc2libGVUYXAiLCJwb3NzaWJsZVN3aXBlIiwiY2xlYXJUaW1lb3V0Iiwic2luZ2xlVGFwIiwidG9wIiwibGVmdCIsImNhbGxDdXN0b21IYW5kbGVycyIsImRvdWJsZVRhcCIsImNhbGxDdXN0b21IYW5kbGVyc0NvbmRpdGlvbmFsbHkiLCJmaXJzdFN0YXJ0UG9zaXRpb24iLCJmaXJzdE1vdmluZ1Bvc2l0aW9uIiwiZmlyc3RQb3NpdGlvbiIsInNlY29uZFBvc2l0aW9uIiwicmVsYXRpdmVQb3NpdGlvbiIsIlJlbGF0aXZlUG9zaXRpb24iLCJmcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uIiwiZ2V0VG9wIiwiZ2V0TGVmdCIsImRpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsIk1hdGgiLCJhYnMiLCJNQVhJTVVNX1NQUkVBRCIsIlBJX09WRVJfVFdPIiwiUEkiLCJzZWNvbmRNb3ZpbmdQb3NpdGlvbiIsInJlbGF0aXZlTW92aW5nUG9zaXRpb24iLCJtYWduaXR1ZGUiLCJnZXRNYWduaXR1ZGUiLCJyYXRpbyIsInN3aXBlIiwic3BlZWQiLCJjb3MiLCJzaW4iLCJzdGFydFBvc2l0aW9uIiwiZHJhZ1N0YXJ0IiwicGluY2hTdGFydCIsInNlY29uZFN0YXJ0UG9zaXRpb24iLCJyZWxhdGl2ZVN0YXJ0UG9zaXRpb24iLCJzZXRUaW1lb3V0IiwiRFJBR19ERUxBWSIsIlBJTkNIX0RFTEFZIiwidGltZSIsImdldFRpbWUiLCJnZXRTcGVlZCIsIk1BWElNVU1fVEFQX1RJTUUiLCJzaW5nbGVUYXBPckRvdWJsZVRhcCIsIk1JTklNVU1fU1dJUEVfU1BFRUQiLCJUQVBfREVMQVkiLCJlbmFibGVDdXN0b21HZXN0dXJlcyIsImN1c3RvbUdlc3R1cmVkRW5hYmxlZCIsImRpc2FibGVDdXN0b21HZXN0dXJlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInRvdWNoTWl4aW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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