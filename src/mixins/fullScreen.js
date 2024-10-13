"use strict";

import { FULL_SCREEN_CHANGE_CUSTOM_EVENT_TYPE } from "../customEventTypes";

function enableFullScreen() {
  this.onFullScreenChange(this.fullScreenChangeHandler);
}

function disableFullScreen() {
  this.offFullScreenChange(this.fullScreenChangeHandler);
}

function fullScreenChangeHandler(event, element) {
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
  fullScreenChangeHandler,
  onCustomFullScreenChange,
  offCustomFullScreenChange
};

export default fullScreenMixins;
