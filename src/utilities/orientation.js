"use strict";

import { eventTypes } from "easy";

import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION, ORIENTATION_PORTRAIT_QUERY } from "../constants";

const { CHANGE_EVENT_TYPE } = eventTypes;

var mediaQueryList = matchMedia(ORIENTATION_PORTRAIT_QUERY);

export function getOrientation(callback) {
  const orientation = orientationFromMediaQueryList(mediaQueryList);

  callback(orientation);
}

export function onOrientationChange(handler) {
  const eventType = CHANGE_EVENT_TYPE;

  mediaQueryList.addEventListener(eventType, (mediaQueryList) => {
    const orientation = orientationFromMediaQueryList(mediaQueryList);

    handler(orientation);
  });
}

function orientationFromMediaQueryList(mediaQueryList) {
  const { matches = false } = mediaQueryList,
        orientation = matches ?
          PORTRAIT_ORIENTATION :
            LANDSCAPE_ORIENTATION;

  return orientation;
}