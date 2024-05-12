"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RelativePosition;
    }
});
var _constants = require("../constants");
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
var RelativePosition = /*#__PURE__*/ function() {
    function RelativePosition(top, left, time, speed, magnitude, direction) {
        _class_call_check(this, RelativePosition);
        this.top = top;
        this.left = left;
        this.time = time;
        this.speed = speed;
        this.magnitude = magnitude;
        this.direction = direction;
    }
    _create_class(RelativePosition, [
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
            key: "getSpeed",
            value: function getSpeed() {
                return this.speed;
            }
        },
        {
            key: "getMagnitude",
            value: function getMagnitude() {
                return this.magnitude;
            }
        },
        {
            key: "getDirection",
            value: function getDirection() {
                return this.direction;
            }
        }
    ], [
        {
            key: "fromFirstPositionAndSecondPosition",
            value: function fromFirstPositionAndSecondPosition(firstPosition, secondPosition) {
                var position = secondPosition.minus(firstPosition), top = position.getTop(), left = position.getLeft(), time = position.getTime(), magnitude = Math.sqrt(top * top + left * left), speed = time === 0 ? 0 : magnitude / time;
                var direction;
                if (left === 0) {
                    direction = top < 0 ? +_constants.PI / 2 : -_constants.PI / 2;
                } else {
                    direction = Math.atan2(-top, left);
                }
                var relativePosition = new RelativePosition(top, left, time, speed, magnitude, direction);
                return relativePosition;
            }
        }
    ]);
    return RelativePosition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wb3NpdGlvbi9yZWxhdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUEkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF0aXZlUG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIHRpbWUsIHNwZWVkLCBtYWduaXR1ZGUsIGRpcmVjdGlvbikge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5tYWduaXR1ZGUgPSBtYWduaXR1ZGU7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lO1xuICB9XG5cbiAgZ2V0U3BlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BlZWQ7XG4gIH1cblxuICBnZXRNYWduaXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFnbml0dWRlO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBzZWNvbmRQb3NpdGlvbi5taW51cyhmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICB0b3AgPSBwb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgICBsZWZ0ID0gcG9zaXRpb24uZ2V0TGVmdCgpLFxuICAgICAgICAgIHRpbWUgPSBwb3NpdGlvbi5nZXRUaW1lKCksXG4gICAgICAgICAgbWFnbml0dWRlID0gTWF0aC5zcXJ0KHRvcCAqIHRvcCArIGxlZnQgKiBsZWZ0KSxcbiAgICAgICAgICBzcGVlZCA9ICh0aW1lID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgIDAgOlxuICAgICAgICAgICAgICAgICAgICAgIG1hZ25pdHVkZSAvIHRpbWU7XG5cbiAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgaWYgKGxlZnQgPT09IDApIHtcbiAgICAgIGRpcmVjdGlvbiA9ICh0b3AgPCAwKSA/XG4gICAgICAgICAgICAgICAgICAgK1BJIC8gMiA6XG4gICAgICAgICAgICAgICAgICAgIC1QSSAvIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbiA9IE1hdGguYXRhbjIoLXRvcCwgbGVmdCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRpdmVQb3NpdGlvbiA9IG5ldyBSZWxhdGl2ZVBvc2l0aW9uKHRvcCwgbGVmdCwgdGltZSwgc3BlZWQsIG1hZ25pdHVkZSwgZGlyZWN0aW9uKTtcblxuICAgIHJldHVybiByZWxhdGl2ZVBvc2l0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsYXRpdmVQb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0aW1lIiwic3BlZWQiLCJtYWduaXR1ZGUiLCJkaXJlY3Rpb24iLCJnZXRUb3AiLCJnZXRMZWZ0IiwiZ2V0VGltZSIsImdldFNwZWVkIiwiZ2V0TWFnbml0dWRlIiwiZ2V0RGlyZWN0aW9uIiwiZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbiIsImZpcnN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInBvc2l0aW9uIiwibWludXMiLCJNYXRoIiwic3FydCIsIlBJIiwiYXRhbjIiLCJyZWxhdGl2ZVBvc2l0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7eUJBRkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUosSUFBQSxBQUFNQSxpQ0FBRCxBQUFMO2FBQU1BLGlCQUNQQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsU0FBUztnQ0FEckNOO1FBRWpCLElBQUksQ0FBQ0MsR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQVBBTjs7WUFVbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sR0FBRztZQUNqQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sSUFBSTtZQUNsQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sSUFBSTtZQUNsQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sS0FBSztZQUNuQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sU0FBUztZQUN2Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sU0FBUztZQUN2Qjs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSxtQ0FBbUNDLGFBQWEsRUFBRUMsY0FBYztnQkFDckUsSUFBTUMsV0FBV0QsZUFBZUUsS0FBSyxDQUFDSCxnQkFDaENiLE1BQU1lLFNBQVNULE1BQU0sSUFDckJMLE9BQU9jLFNBQVNSLE9BQU8sSUFDdkJMLE9BQU9hLFNBQVNQLE9BQU8sSUFDdkJKLFlBQVlhLEtBQUtDLElBQUksQ0FBQ2xCLE1BQU1BLE1BQU1DLE9BQU9BLE9BQ3pDRSxRQUFRLEFBQUNELFNBQVMsSUFDUixJQUNFRSxZQUFZRjtnQkFFOUIsSUFBSUc7Z0JBRUosSUFBSUosU0FBUyxHQUFHO29CQUNkSSxZQUFZLEFBQUNMLE1BQU0sSUFDTixDQUFDbUIsYUFBRSxHQUFHLElBQ0wsQ0FBQ0EsYUFBRSxHQUFHO2dCQUN0QixPQUFPO29CQUNMZCxZQUFZWSxLQUFLRyxLQUFLLENBQUMsQ0FBQ3BCLEtBQUtDO2dCQUMvQjtnQkFFQSxJQUFNb0IsbUJBQW1CLElBdERSdEIsaUJBc0Q2QkMsS0FBS0MsTUFBTUMsTUFBTUMsT0FBT0MsV0FBV0M7Z0JBRWpGLE9BQU9nQjtZQUNUOzs7V0F6RG1CdEIifQ==