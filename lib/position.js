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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIHRpbWUsIGlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBtaW51cyhwb3NpdGlvbikge1xuICAgIGNvbnN0IHBvc2l0aW9uVG9wID0gcG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgICAgcG9zaXRpb25MZWZ0ID0gcG9zaXRpb24uZ2V0TGVmdCgpLFxuICAgICAgICAgIHBvc2l0aW9uVGltZSA9IHBvc2l0aW9uLmdldFRpbWUoKSxcbiAgICAgICAgICB0b3AgPSB0aGlzLnRvcCAtIHBvc2l0aW9uVG9wLFxuICAgICAgICAgIGxlZnQgPSB0aGlzLmxlZnQgLSBwb3NpdGlvbkxlZnQsXG4gICAgICAgICAgdGltZSA9IHRoaXMudGltZSAtIHBvc2l0aW9uVGltZSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyO1xuXG4gICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0LCB0aW1lLCBpZGVudGlmaWVyKTsgLy8vXG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBtYXRjaChwb3NpdGlvbikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbi5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICh0aGlzLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvdWNoKHRvdWNoKSB7XG4gICAgY29uc3QgeyBwYWdlWCwgcGFnZVksIGlkZW50aWZpZXIgfSA9IHRvdWNoLFxuICAgICAgICAgIHRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHBhZ2VYLCAvLy9cbiAgICAgICAgICB0aW1lID0gZ2V0VGltZSgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCkge1xuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBtb3VzZUV2ZW50LFxuICAgICAgICAgIHRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHBhZ2VYLCAvLy9cbiAgICAgICAgICB0aW1lID0gZ2V0VGltZSgpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBudWxsLFxuICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgY29uc3QgdGltZSA9IERhdGUubm93KCk7ICAvLy9cblxuICByZXR1cm4gdGltZTtcbn1cbiJdLCJuYW1lcyI6WyJQb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0aW1lIiwiaWRlbnRpZmllciIsImdldFRvcCIsImdldExlZnQiLCJnZXRUaW1lIiwiZ2V0SWRlbnRpZmllciIsIm1pbnVzIiwicG9zaXRpb24iLCJwb3NpdGlvblRvcCIsInBvc2l0aW9uTGVmdCIsInBvc2l0aW9uVGltZSIsIm1hdGNoIiwibWF0Y2hlcyIsImZyb21Ub3VjaCIsInRvdWNoIiwicGFnZVgiLCJwYWdlWSIsImZyb21Nb3VzZUV2ZW50IiwibW91c2VFdmVudCIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEseUJBQUQsQUFBTDthQUFNQSxTQUNQQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURwQko7UUFFakIsSUFBSSxDQUFDQyxHQUFHLEdBQUdBO1FBQ1gsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFMREo7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLEdBQUc7WUFDakI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsUUFBUTtnQkFDWixJQUFNQyxjQUFjRCxTQUFTTCxNQUFNLElBQzdCTyxlQUFlRixTQUFTSixPQUFPLElBQy9CTyxlQUFlSCxTQUFTSCxPQUFPLElBQy9CTixNQUFNLElBQUksQ0FBQ0EsR0FBRyxHQUFHVSxhQUNqQlQsT0FBTyxJQUFJLENBQUNBLElBQUksR0FBR1UsY0FDbkJULE9BQU8sSUFBSSxDQUFDQSxJQUFJLEdBQUdVLGNBQ25CVCxhQUFhLElBQUksQ0FBQ0EsVUFBVTtnQkFFbENNLFdBQVcsSUFqQ01WLFNBaUNPQyxLQUFLQyxNQUFNQyxNQUFNQyxhQUFhLEdBQUc7Z0JBRXpELE9BQU9NO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUosUUFBUTtnQkFDWixJQUFNTixhQUFhTSxTQUFTRixhQUFhLElBQ25DTyxVQUFXLElBQUksQ0FBQ1gsVUFBVSxLQUFLQTtnQkFFckMsT0FBT1c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLO2dCQUNwQixJQUFRQyxRQUE2QkQsTUFBN0JDLE9BQU9DLFFBQXNCRixNQUF0QkUsT0FBT2YsYUFBZWEsTUFBZmIsWUFDaEJILE1BQU1rQixPQUNOakIsT0FBT2dCLE9BQ1BmLE9BQU9JLFdBQ1BHLFdBQVcsSUFsREFWLFNBa0RhQyxLQUFLQyxNQUFNQyxNQUFNQztnQkFFL0MsT0FBT007WUFDVDs7O1lBRU9VLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLFVBQVU7Z0JBQzlCLElBQVFILFFBQWlCRyxXQUFqQkgsT0FBT0MsUUFBVUUsV0FBVkYsT0FDVGxCLE1BQU1rQixPQUNOakIsT0FBT2dCLE9BQ1BmLE9BQU9JLFdBQ1BILGFBQWEsTUFDYk0sV0FBVyxJQTdEQVYsU0E2RGFDLEtBQUtDLE1BQU1DLE1BQU1DO2dCQUUvQyxPQUFPTTtZQUNUOzs7V0FoRW1CVjs7QUFtRXJCLFNBQVNPO0lBQ1AsSUFBTUosT0FBT21CLEtBQUtDLEdBQUcsSUFBSyxHQUFHO0lBRTdCLE9BQU9wQjtBQUNUIn0=