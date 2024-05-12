"use strict";

import { eventTypes } from "easy";

import { isFullScreen } from "../utilities/fullScreen";
import { FULL_SCREEN_CHANGE_CUSTOM_EVENT_TYPE } from "../customEventTypes";

const { FULLSCREENCHANGE_EVENT_TYPE } = eventTypes;

function enableFullScreen() {
  this.onFullscreenchange(this.fullscreenchangeHandler);
}

function disableFullScreen() {
  this.offFullscreenchange(this.fullscreenchangeHandler);
}

function exitFullScreen() {
  document.exitFullscreen();
}

function requestFullScreen() {
  const domElement = this.getDOMElement();

  domElement.requestFullscreen()
    .catch(alert);
}

function onFullscreenchange(fullscreenchangeHandler) {
  const eventType = FULLSCREENCHANGE_EVENT_TYPE,
        handler = fullscreenchangeHandler;  ///

  this.onEvent(eventType, handler);
}

function offFullscreenchange(fullscreenchangeHandler) {
  const eventType = FULLSCREENCHANGE_EVENT_TYPE,
        handler = fullscreenchangeHandler;  ///

  this.offEvent(eventType, handler);
}

function fullscreenchangeHandler(event, element) {
  const customEventType = FULL_SCREEN_CHANGE_CUSTOM_EVENT_TYPE;

  this.callCustomHandlers(customEventType, event, element);
}

function onCustomFullScreenChange(fullScreenChangeCustomHandler, element) {
  const customEventType = FULL_SCREEN_CHANGE_CUSTOM_EVENT_TYPE,
        customHandler = fullScreenChangeCustomHandler; ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomFullScreenChange(fullScreenChangeCustomHandler, element) {
  const customEventType = FULL_SCREEN_CHANGE_CUSTOM_EVENT_TYPE,
        customHandler = fullScreenChangeCustomHandler; ///

  this.offCustomEvent(customEventType, customHandler, element);
}

const fullScreenMixins = {
  enableFullScreen,
  disableFullScreen,
  isFullScreen,
  exitFullScreen,
  requestFullScreen,
  onFullscreenchange,
  offFullscreenchange,
  fullscreenchangeHandler,
  onCustomFullScreenChange,
  offCustomFullScreenChange
};

export default fullScreenMixins;
