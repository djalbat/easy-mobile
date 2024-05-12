"use strict";

export function isFullScreen() {
  const { fullscreenElement } = document,
        fullScreen =(fullscreenElement !== null);

  return fullScreen;
}

export default {
  isFullScreen
};

