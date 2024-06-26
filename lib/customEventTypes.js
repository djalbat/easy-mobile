"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DOUBLE_TAP_CUSTOM_EVENT_TYPE: function() {
        return DOUBLE_TAP_CUSTOM_EVENT_TYPE;
    },
    DRAG_DOWN_CUSTOM_EVENT_TYPE: function() {
        return DRAG_DOWN_CUSTOM_EVENT_TYPE;
    },
    DRAG_LEFT_CUSTOM_EVENT_TYPE: function() {
        return DRAG_LEFT_CUSTOM_EVENT_TYPE;
    },
    DRAG_RIGHT_CUSTOM_EVENT_TYPE: function() {
        return DRAG_RIGHT_CUSTOM_EVENT_TYPE;
    },
    DRAG_START_CUSTOM_EVENT_TYPE: function() {
        return DRAG_START_CUSTOM_EVENT_TYPE;
    },
    DRAG_UP_CUSTOM_EVENT_TYPE: function() {
        return DRAG_UP_CUSTOM_EVENT_TYPE;
    },
    FULL_SCREEN_CHANGE_CUSTOM_EVENT_TYPE: function() {
        return FULL_SCREEN_CHANGE_CUSTOM_EVENT_TYPE;
    },
    PINCH_MOVE_CUSTOM_EVENT_TYPE: function() {
        return PINCH_MOVE_CUSTOM_EVENT_TYPE;
    },
    PINCH_START_CUSTOM_EVENT_TYPE: function() {
        return PINCH_START_CUSTOM_EVENT_TYPE;
    },
    PRESS_CUSTOM_EVENT_TYPE: function() {
        return PRESS_CUSTOM_EVENT_TYPE;
    },
    SINGLE_TAP_CUSTOM_EVENT_TYPE: function() {
        return SINGLE_TAP_CUSTOM_EVENT_TYPE;
    },
    SWIPE_DOWN_CUSTOM_EVENT_TYPE: function() {
        return SWIPE_DOWN_CUSTOM_EVENT_TYPE;
    },
    SWIPE_LEFT_CUSTOM_EVENT_TYPE: function() {
        return SWIPE_LEFT_CUSTOM_EVENT_TYPE;
    },
    SWIPE_RIGHT_CUSTOM_EVENT_TYPE: function() {
        return SWIPE_RIGHT_CUSTOM_EVENT_TYPE;
    },
    SWIPE_UP_CUSTOM_EVENT_TYPE: function() {
        return SWIPE_UP_CUSTOM_EVENT_TYPE;
    }
});
var PRESS_CUSTOM_EVENT_TYPE = "press";
var DRAG_UP_CUSTOM_EVENT_TYPE = "drag-up";
var DRAG_DOWN_CUSTOM_EVENT_TYPE = "drag-down";
var DRAG_LEFT_CUSTOM_EVENT_TYPE = "drag-left";
var DRAG_RIGHT_CUSTOM_EVENT_TYPE = "drag-right";
var DRAG_START_CUSTOM_EVENT_TYPE = "drag-start";
var SWIPE_UP_CUSTOM_EVENT_TYPE = "swipe-up";
var SWIPE_DOWN_CUSTOM_EVENT_TYPE = "swipe-down";
var SWIPE_LEFT_CUSTOM_EVENT_TYPE = "swipe-left";
var SWIPE_RIGHT_CUSTOM_EVENT_TYPE = "swipe-right";
var PINCH_MOVE_CUSTOM_EVENT_TYPE = "pinch-move";
var PINCH_START_CUSTOM_EVENT_TYPE = "pinch-start";
var SINGLE_TAP_CUSTOM_EVENT_TYPE = "single-tap";
var DOUBLE_TAP_CUSTOM_EVENT_TYPE = "double-tap";
var FULL_SCREEN_CHANGE_CUSTOM_EVENT_TYPE = "full-screen-change";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21FdmVudFR5cGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgUFJFU1NfQ1VTVE9NX0VWRU5UX1RZUEUgPSBcInByZXNzXCI7XG5leHBvcnQgY29uc3QgRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSA9IFwiZHJhZy11cFwiO1xuZXhwb3J0IGNvbnN0IERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSA9IFwiZHJhZy1kb3duXCI7XG5leHBvcnQgY29uc3QgRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFID0gXCJkcmFnLWxlZnRcIjtcbmV4cG9ydCBjb25zdCBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFID0gXCJkcmFnLXJpZ2h0XCI7XG5leHBvcnQgY29uc3QgRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSA9IFwiZHJhZy1zdGFydFwiO1xuZXhwb3J0IGNvbnN0IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFID0gXCJzd2lwZS11cFwiO1xuZXhwb3J0IGNvbnN0IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUgPSBcInN3aXBlLWRvd25cIjtcbmV4cG9ydCBjb25zdCBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFID0gXCJzd2lwZS1sZWZ0XCI7XG5leHBvcnQgY29uc3QgU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUgPSBcInN3aXBlLXJpZ2h0XCI7XG5leHBvcnQgY29uc3QgUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSA9IFwicGluY2gtbW92ZVwiO1xuZXhwb3J0IGNvbnN0IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFID0gXCJwaW5jaC1zdGFydFwiO1xuZXhwb3J0IGNvbnN0IFNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUgPSBcInNpbmdsZS10YXBcIjtcbmV4cG9ydCBjb25zdCBET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFID0gXCJkb3VibGUtdGFwXCI7XG5leHBvcnQgY29uc3QgRlVMTF9TQ1JFRU5fQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFID0gXCJmdWxsLXNjcmVlbi1jaGFuZ2VcIjtcbiJdLCJuYW1lcyI6WyJET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwiRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwiRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFIiwiRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIkRSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFIiwiRlVMTF9TQ1JFRU5fQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFIiwiUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSIsIlBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFIiwiUFJFU1NfQ1VTVE9NX0VWRU5UX1RZUEUiLCJTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwiU1dJUEVfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSIsIlNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSIsIlNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFlYUEsNEJBQTRCO2VBQTVCQTs7SUFYQUMsMkJBQTJCO2VBQTNCQTs7SUFDQUMsMkJBQTJCO2VBQTNCQTs7SUFDQUMsNEJBQTRCO2VBQTVCQTs7SUFDQUMsNEJBQTRCO2VBQTVCQTs7SUFKQUMseUJBQXlCO2VBQXpCQTs7SUFhQUMsb0NBQW9DO2VBQXBDQTs7SUFKQUMsNEJBQTRCO2VBQTVCQTs7SUFDQUMsNkJBQTZCO2VBQTdCQTs7SUFYQUMsdUJBQXVCO2VBQXZCQTs7SUFZQUMsNEJBQTRCO2VBQTVCQTs7SUFMQUMsNEJBQTRCO2VBQTVCQTs7SUFDQUMsNEJBQTRCO2VBQTVCQTs7SUFDQUMsNkJBQTZCO2VBQTdCQTs7SUFIQUMsMEJBQTBCO2VBQTFCQTs7O0FBTk4sSUFBTUwsMEJBQTBCO0FBQ2hDLElBQU1KLDRCQUE0QjtBQUNsQyxJQUFNSiw4QkFBOEI7QUFDcEMsSUFBTUMsOEJBQThCO0FBQ3BDLElBQU1DLCtCQUErQjtBQUNyQyxJQUFNQywrQkFBK0I7QUFDckMsSUFBTVUsNkJBQTZCO0FBQ25DLElBQU1ILCtCQUErQjtBQUNyQyxJQUFNQywrQkFBK0I7QUFDckMsSUFBTUMsZ0NBQWdDO0FBQ3RDLElBQU1OLCtCQUErQjtBQUNyQyxJQUFNQyxnQ0FBZ0M7QUFDdEMsSUFBTUUsK0JBQStCO0FBQ3JDLElBQU1WLCtCQUErQjtBQUNyQyxJQUFNTSx1Q0FBdUMifQ==