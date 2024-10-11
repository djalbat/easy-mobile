"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Position;
    }
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Position = /*#__PURE__*/ function() {
    function Position(top, left, time, identifier) {
        _class_call_check(this, Position);
        this.top = top;
        this.left = left;
        this.time = time;
        this.identifier = identifier;
    }
    _create_class(Position, [
        {
            key: "getTop",
            value: function getTop() {
                return this.top;
            }
        },
        {
            key: "getLeft",
            value: function getLeft() {
                return this.left;
            }
        },
        {
            key: "getTime",
            value: function getTime() {
                return this.time;
            }
        },
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "minus",
            value: function minus(position) {
                var positionTop = position.getTop(), positionLeft = position.getLeft(), positionTime = position.getTime(), top = this.top - positionTop, left = this.left - positionLeft, time = this.time - positionTime, identifier = this.identifier;
                position = new Position(top, left, time, identifier); ///
                return position;
            }
        },
        {
            key: "match",
            value: function match(position) {
                var identifier = position.getIdentifier(), matches = this.identifier === identifier;
                return matches;
            }
        }
    ], [
        {
            key: "fromTouch",
            value: function fromTouch(touch) {
                var pageX = touch.pageX, pageY = touch.pageY, identifier = touch.identifier, top = pageY, left = pageX, time = getTime(), position = new Position(top, left, time, identifier);
                return position;
            }
        },
        {
            key: "fromMouseEvent",
            value: function fromMouseEvent(mouseEvent) {
                var pageX = mouseEvent.pageX, pageY = mouseEvent.pageY, top = pageY, left = pageX, time = getTime(), identifier = null, position = new Position(top, left, time, identifier);
                return position;
            }
        }
    ]);
    return Position;
}();
function getTime() {
    var time = Date.now(); ///
    return time;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIHRpbWUsIGlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBtaW51cyhwb3NpdGlvbikge1xuICAgIGNvbnN0IHBvc2l0aW9uVG9wID0gcG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgICAgcG9zaXRpb25MZWZ0ID0gcG9zaXRpb24uZ2V0TGVmdCgpLFxuICAgICAgICAgIHBvc2l0aW9uVGltZSA9IHBvc2l0aW9uLmdldFRpbWUoKSxcbiAgICAgICAgICB0b3AgPSB0aGlzLnRvcCAtIHBvc2l0aW9uVG9wLFxuICAgICAgICAgIGxlZnQgPSB0aGlzLmxlZnQgLSBwb3NpdGlvbkxlZnQsXG4gICAgICAgICAgdGltZSA9IHRoaXMudGltZSAtIHBvc2l0aW9uVGltZSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyO1xuXG4gICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0LCB0aW1lLCBpZGVudGlmaWVyKTsgLy8vXG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBtYXRjaChwb3NpdGlvbikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbi5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICh0aGlzLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvdWNoKHRvdWNoKSB7XG4gICAgY29uc3QgeyBwYWdlWCwgcGFnZVksIGlkZW50aWZpZXIgfSA9IHRvdWNoLFxuICAgICAgICAgIHRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHBhZ2VYLCAvLy9cbiAgICAgICAgICB0aW1lID0gZ2V0VGltZSgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCkge1xuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBtb3VzZUV2ZW50LFxuICAgICAgICAgIHRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHBhZ2VYLCAvLy9cbiAgICAgICAgICB0aW1lID0gZ2V0VGltZSgpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBudWxsLFxuICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgY29uc3QgdGltZSA9IERhdGUubm93KCk7ICAvLy9cblxuICByZXR1cm4gdGltZTtcbn1cbiJdLCJuYW1lcyI6WyJQb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0aW1lIiwiaWRlbnRpZmllciIsImdldFRvcCIsImdldExlZnQiLCJnZXRUaW1lIiwiZ2V0SWRlbnRpZmllciIsIm1pbnVzIiwicG9zaXRpb24iLCJwb3NpdGlvblRvcCIsInBvc2l0aW9uTGVmdCIsInBvc2l0aW9uVGltZSIsIm1hdGNoIiwibWF0Y2hlcyIsImZyb21Ub3VjaCIsInRvdWNoIiwicGFnZVgiLCJwYWdlWSIsImZyb21Nb3VzZUV2ZW50IiwibW91c2VFdmVudCIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEseUJBQU47YUFBTUEsU0FDUEMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsVUFBVTtnQ0FEcEJKO1FBRWpCLElBQUksQ0FBQ0MsR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBTERKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixHQUFHO1lBQ2pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixVQUFVO1lBQ3hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFFBQVE7Z0JBQ1osSUFBTUMsY0FBY0QsU0FBU0wsTUFBTSxJQUM3Qk8sZUFBZUYsU0FBU0osT0FBTyxJQUMvQk8sZUFBZUgsU0FBU0gsT0FBTyxJQUMvQk4sTUFBTSxJQUFJLENBQUNBLEdBQUcsR0FBR1UsYUFDakJULE9BQU8sSUFBSSxDQUFDQSxJQUFJLEdBQUdVLGNBQ25CVCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxHQUFHVSxjQUNuQlQsYUFBYSxJQUFJLENBQUNBLFVBQVU7Z0JBRWxDTSxXQUFXLElBakNNVixTQWlDT0MsS0FBS0MsTUFBTUMsTUFBTUMsYUFBYSxHQUFHO2dCQUV6RCxPQUFPTTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1KLFFBQVE7Z0JBQ1osSUFBTU4sYUFBYU0sU0FBU0YsYUFBYSxJQUNuQ08sVUFBVyxJQUFJLENBQUNYLFVBQVUsS0FBS0E7Z0JBRXJDLE9BQU9XO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUMsS0FBSztnQkFDcEIsSUFBUUMsUUFBNkJELE1BQTdCQyxPQUFPQyxRQUFzQkYsTUFBdEJFLE9BQU9mLGFBQWVhLE1BQWZiLFlBQ2hCSCxNQUFNa0IsT0FDTmpCLE9BQU9nQixPQUNQZixPQUFPSSxXQUNQRyxXQUFXLElBbERBVixTQWtEYUMsS0FBS0MsTUFBTUMsTUFBTUM7Z0JBRS9DLE9BQU9NO1lBQ1Q7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUM5QixJQUFRSCxRQUFpQkcsV0FBakJILE9BQU9DLFFBQVVFLFdBQVZGLE9BQ1RsQixNQUFNa0IsT0FDTmpCLE9BQU9nQixPQUNQZixPQUFPSSxXQUNQSCxhQUFhLE1BQ2JNLFdBQVcsSUE3REFWLFNBNkRhQyxLQUFLQyxNQUFNQyxNQUFNQztnQkFFL0MsT0FBT007WUFDVDs7O1dBaEVtQlY7O0FBbUVyQixTQUFTTztJQUNQLElBQU1KLE9BQU9tQixLQUFLQyxHQUFHLElBQUssR0FBRztJQUU3QixPQUFPcEI7QUFDVCJ9