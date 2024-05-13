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
var _fullScreen = require("../utilities/fullScreen");
var _customEventTypes = require("../customEventTypes");
var FULLSCREENCHANGE_EVENT_TYPE = _easy.eventTypes.FULLSCREENCHANGE_EVENT_TYPE;
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
    var domElement = this.getDOMElement();
    domElement.requestFullscreen().catch(alert);
}
function onFullscreenchange(fullscreenchangeHandler) {
    var eventType = FULLSCREENCHANGE_EVENT_TYPE, handler = fullscreenchangeHandler; ///
    this.onEvent(eventType, handler);
}
function offFullscreenchange(fullscreenchangeHandler) {
    var eventType = FULLSCREENCHANGE_EVENT_TYPE, handler = fullscreenchangeHandler; ///
    this.offEvent(eventType, handler);
}
function fullscreenchangeHandler(event, element) {
    var customEventType = _customEventTypes.FULL_SCREEN_CHANGE_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element);
}
function onCustomFullScreenChange(fullScreenChangeCustomHandler, element) {
    var customEventType = _customEventTypes.FULL_SCREEN_CHANGE_CUSTOM_EVENT_TYPE, customHandler = fullScreenChangeCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomFullScreenChange(fullScreenChangeCustomHandler, element) {
    var customEventType = _customEventTypes.FULL_SCREEN_CHANGE_CUSTOM_EVENT_TYPE, customHandler = fullScreenChangeCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
var fullScreenMixins = {
    enableFullScreen: enableFullScreen,
    disableFullScreen: disableFullScreen,
    isFullScreen: _fullScreen.isFullScreen,
    exitFullScreen: exitFullScreen,
    requestFullScreen: requestFullScreen,
    onFullscreenchange: onFullscreenchange,
    offFullscreenchange: offFullscreenchange,
    fullscreenchangeHandler: fullscreenchangeHandler,
    onCustomFullScreenChange: onCustomFullScreenChange,
    offCustomFullScreenChange: offCustomFullScreenChange
};
var _default = fullScreenMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvZnVsbFNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IGlzRnVsbFNjcmVlbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvZnVsbFNjcmVlblwiO1xuaW1wb3J0IHsgRlVMTF9TQ1JFRU5fQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmZ1bmN0aW9uIGVuYWJsZUZ1bGxTY3JlZW4oKSB7XG4gIHRoaXMub25GdWxsc2NyZWVuY2hhbmdlKHRoaXMuZnVsbHNjcmVlbmNoYW5nZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlRnVsbFNjcmVlbigpIHtcbiAgdGhpcy5vZmZGdWxsc2NyZWVuY2hhbmdlKHRoaXMuZnVsbHNjcmVlbmNoYW5nZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBleGl0RnVsbFNjcmVlbigpIHtcbiAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdEZ1bGxTY3JlZW4oKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICBkb21FbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKClcbiAgICAuY2F0Y2goYWxlcnQpO1xufVxuXG5mdW5jdGlvbiBvbkZ1bGxzY3JlZW5jaGFuZ2UoZnVsbHNjcmVlbmNoYW5nZUhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gRlVMTFNDUkVFTkNIQU5HRV9FVkVOVF9UWVBFLFxuICAgICAgICBoYW5kbGVyID0gZnVsbHNjcmVlbmNoYW5nZUhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmRnVsbHNjcmVlbmNoYW5nZShmdWxsc2NyZWVuY2hhbmdlSGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSBGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEUsXG4gICAgICAgIGhhbmRsZXIgPSBmdWxsc2NyZWVuY2hhbmdlSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gZnVsbHNjcmVlbmNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRlVMTF9TQ1JFRU5fQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UoZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRlVMTF9TQ1JFRU5fQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IEZVTExfU0NSRUVOX0NIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmNvbnN0IGZ1bGxTY3JlZW5NaXhpbnMgPSB7XG4gIGVuYWJsZUZ1bGxTY3JlZW4sXG4gIGRpc2FibGVGdWxsU2NyZWVuLFxuICBpc0Z1bGxTY3JlZW4sXG4gIGV4aXRGdWxsU2NyZWVuLFxuICByZXF1ZXN0RnVsbFNjcmVlbixcbiAgb25GdWxsc2NyZWVuY2hhbmdlLFxuICBvZmZGdWxsc2NyZWVuY2hhbmdlLFxuICBmdWxsc2NyZWVuY2hhbmdlSGFuZGxlcixcbiAgb25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlLFxuICBvZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdWxsU2NyZWVuTWl4aW5zO1xuIl0sIm5hbWVzIjpbIkZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJlbmFibGVGdWxsU2NyZWVuIiwib25GdWxsc2NyZWVuY2hhbmdlIiwiZnVsbHNjcmVlbmNoYW5nZUhhbmRsZXIiLCJkaXNhYmxlRnVsbFNjcmVlbiIsIm9mZkZ1bGxzY3JlZW5jaGFuZ2UiLCJleGl0RnVsbFNjcmVlbiIsImRvY3VtZW50IiwiZXhpdEZ1bGxzY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJjYXRjaCIsImFsZXJ0IiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsIm9uRXZlbnQiLCJvZmZFdmVudCIsImV2ZW50IiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIkZVTExfU0NSRUVOX0NIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVycyIsIm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsImZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyIiwiY3VzdG9tSGFuZGxlciIsIm9uQ3VzdG9tRXZlbnQiLCJvZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwib2ZmQ3VzdG9tRXZlbnQiLCJmdWxsU2NyZWVuTWl4aW5zIiwiaXNGdWxsU2NyZWVuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyRUE7OztlQUFBOzs7b0JBekUyQjswQkFFRTtnQ0FDd0I7QUFFckQsSUFBTSxBQUFFQSw4QkFBZ0NDLGdCQUFVLENBQTFDRDtBQUVSLFNBQVNFO0lBQ1AsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUNDLHVCQUF1QjtBQUN0RDtBQUVBLFNBQVNDO0lBQ1AsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUNGLHVCQUF1QjtBQUN2RDtBQUVBLFNBQVNHO0lBQ1BDLFNBQVNDLGNBQWM7QUFDekI7QUFFQSxTQUFTQztJQUNQLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDRCxXQUFXRSxpQkFBaUIsR0FDekJDLEtBQUssQ0FBQ0M7QUFDWDtBQUVBLFNBQVNaLG1CQUFtQkMsdUJBQXVCO0lBQ2pELElBQU1ZLFlBQVloQiw2QkFDWmlCLFVBQVViLHlCQUEwQixHQUFHO0lBRTdDLElBQUksQ0FBQ2MsT0FBTyxDQUFDRixXQUFXQztBQUMxQjtBQUVBLFNBQVNYLG9CQUFvQkYsdUJBQXVCO0lBQ2xELElBQU1ZLFlBQVloQiw2QkFDWmlCLFVBQVViLHlCQUEwQixHQUFHO0lBRTdDLElBQUksQ0FBQ2UsUUFBUSxDQUFDSCxXQUFXQztBQUMzQjtBQUVBLFNBQVNiLHdCQUF3QmdCLEtBQUssRUFBRUMsT0FBTztJQUM3QyxJQUFNQyxrQkFBa0JDLHNEQUFvQztJQUU1RCxJQUFJLENBQUNDLGtCQUFrQixDQUFDRixpQkFBaUJGLE9BQU9DO0FBQ2xEO0FBRUEsU0FBU0kseUJBQXlCQyw2QkFBNkIsRUFBRUwsT0FBTztJQUN0RSxJQUFNQyxrQkFBa0JDLHNEQUFvQyxFQUN0REksZ0JBQWdCRCwrQkFBK0IsR0FBRztJQUV4RCxJQUFJLENBQUNFLGFBQWEsQ0FBQ04saUJBQWlCSyxlQUFlTjtBQUNyRDtBQUVBLFNBQVNRLDBCQUEwQkgsNkJBQTZCLEVBQUVMLE9BQU87SUFDdkUsSUFBTUMsa0JBQWtCQyxzREFBb0MsRUFDdERJLGdCQUFnQkQsK0JBQStCLEdBQUc7SUFFeEQsSUFBSSxDQUFDSSxjQUFjLENBQUNSLGlCQUFpQkssZUFBZU47QUFDdEQ7QUFFQSxJQUFNVSxtQkFBbUI7SUFDdkI3QixrQkFBQUE7SUFDQUcsbUJBQUFBO0lBQ0EyQixjQUFBQSx3QkFBWTtJQUNaekIsZ0JBQUFBO0lBQ0FHLG1CQUFBQTtJQUNBUCxvQkFBQUE7SUFDQUcscUJBQUFBO0lBQ0FGLHlCQUFBQTtJQUNBcUIsMEJBQUFBO0lBQ0FJLDJCQUFBQTtBQUNGO0lBRUEsV0FBZUUifQ==