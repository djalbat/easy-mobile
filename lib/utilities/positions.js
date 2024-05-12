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
    filterPositions: function() {
        return filterPositions;
    },
    matchPositions: function() {
        return matchPositions;
    },
    positionsFromMouseEvent: function() {
        return positionsFromMouseEvent;
    },
    positionsFromTouchEvent: function() {
        return positionsFromTouchEvent;
    },
    sortPositions: function() {
        return sortPositions;
    }
});
var _necessary = require("necessary");
var _position = /*#__PURE__*/ _interop_require_default(require("../position"));
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
var clear = _necessary.arrayUtilities.clear, filter = _necessary.arrayUtilities.filter;
function sortPositions(positionsA, positionsB) {
    var positionAMap = positionsA.reduce(function(positionAMap, positionA) {
        var identifier = positionA.getIdentifier();
        positionAMap[identifier] = positionA;
        return positionAMap;
    }, {});
    clear(positionsA);
    positionsB.forEach(function(positionB) {
        var identifier = positionB.getIdentifier(), positionA = positionAMap[identifier];
        positionsA.push(positionA);
    });
}
function matchPositions(positionsA, positionsB) {
    var positionsMatch = false;
    var positionsALength = positionsA.length, positionsBLength = positionsB.length;
    if (positionsALength === positionsBLength) {
        var identifiersA = identifiersFromPositions(positionsA), identifiersB = identifiersFromPositions(positionsB);
        identifiersA.sort();
        identifiersB.sort();
        var identifiersMatch = identifiersA.every(function(identifierA, index) {
            var identifierB = identifiersB[index];
            if (identifierA === identifierB) {
                return true;
            }
        });
        positionsMatch = identifiersMatch; ///
    }
    return positionsMatch;
}
function filterPositions(positionsA, positionsB) {
    filter(positionsA, function(positionA) {
        var matches = positionsB.some(function(positionB) {
            var matches = positionA.match(positionB);
            if (matches) {
                return true;
            }
        });
        if (!matches) {
            return true;
        }
    });
}
function positionsFromMouseEvent(mouseEvent) {
    var position = _position.default.fromMouseEvent(mouseEvent), positions = [
        position
    ];
    return positions;
}
function positionsFromTouchEvent(touchEvent) {
    var changed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var touchesNodeList;
    if (changed) {
        var ref;
        ref = touchEvent, touchesNodeList = ref.changedTouches, ref;
    } else {
        var ref1;
        ref1 = touchEvent, touchesNodeList = ref1.touches, ref1;
    }
    var touches = _to_consumable_array(touchesNodeList), positions = touches.map(function(touch) {
        var position = _position.default.fromTouch(touch);
        return position;
    });
    compressPositions(positions);
    return positions;
}
function compressPositions(positions) {
    var positionMap = positions.reduce(function(positionMap, position) {
        var identifier = position.getIdentifier();
        positionMap[identifier] = position;
        return positionMap;
    }, {});
    positions = Object.values(positionMap);
    return positions;
}
function identifiersFromPositions(positions) {
    var identifiers = positions.map(function(position) {
        var identifier = position.getIdentifier();
        return identifier;
    });
    return identifiers;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcG9zaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuLi9wb3NpdGlvblwiO1xuXG5jb25zdCB7IGNsZWFyLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gc29ydFBvc2l0aW9ucyhwb3NpdGlvbnNBLCBwb3NpdGlvbnNCKSB7XG4gIGNvbnN0IHBvc2l0aW9uQU1hcCA9IHBvc2l0aW9uc0EucmVkdWNlKChwb3NpdGlvbkFNYXAsIHBvc2l0aW9uQSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbkEuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgcG9zaXRpb25BTWFwW2lkZW50aWZpZXJdID0gcG9zaXRpb25BO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uQU1hcDtcbiAgfSwge30pO1xuXG4gIGNsZWFyKHBvc2l0aW9uc0EpO1xuXG4gIHBvc2l0aW9uc0IuZm9yRWFjaCgocG9zaXRpb25CKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBvc2l0aW9uQi5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgcG9zaXRpb25BID0gcG9zaXRpb25BTWFwW2lkZW50aWZpZXJdO1xuXG4gICAgcG9zaXRpb25zQS5wdXNoKHBvc2l0aW9uQSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hQb3NpdGlvbnMocG9zaXRpb25zQSwgcG9zaXRpb25zQikge1xuICBsZXQgcG9zaXRpb25zTWF0Y2ggPSBmYWxzZTtcblxuICBjb25zdCBwb3NpdGlvbnNBTGVuZ3RoID0gcG9zaXRpb25zQS5sZW5ndGgsXG4gICAgICAgIHBvc2l0aW9uc0JMZW5ndGggPSBwb3NpdGlvbnNCLmxlbmd0aDtcblxuICBpZiAocG9zaXRpb25zQUxlbmd0aCA9PT0gcG9zaXRpb25zQkxlbmd0aCkge1xuICAgIGNvbnN0IGlkZW50aWZpZXJzQSA9IGlkZW50aWZpZXJzRnJvbVBvc2l0aW9ucyhwb3NpdGlvbnNBKSxcbiAgICAgICAgICBpZGVudGlmaWVyc0IgPSBpZGVudGlmaWVyc0Zyb21Qb3NpdGlvbnMocG9zaXRpb25zQik7XG5cbiAgICBpZGVudGlmaWVyc0Euc29ydCgpO1xuXG4gICAgaWRlbnRpZmllcnNCLnNvcnQoKTtcblxuICAgIGNvbnN0IGlkZW50aWZpZXJzTWF0Y2ggPSBpZGVudGlmaWVyc0EuZXZlcnkoKGlkZW50aWZpZXJBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllckIgPSBpZGVudGlmaWVyc0JbaW5kZXhdO1xuXG4gICAgICBpZiAoaWRlbnRpZmllckEgPT09IGlkZW50aWZpZXJCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcG9zaXRpb25zTWF0Y2ggPSBpZGVudGlmaWVyc01hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcG9zaXRpb25zTWF0Y2g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJQb3NpdGlvbnMocG9zaXRpb25zQSwgcG9zaXRpb25zQikge1xuICBmaWx0ZXIocG9zaXRpb25zQSwgKHBvc2l0aW9uQSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBwb3NpdGlvbnNCLnNvbWUoKHBvc2l0aW9uQikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHBvc2l0aW9uQS5tYXRjaChwb3NpdGlvbkIpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KSxcbiAgICAgICAgcG9zaXRpb25zID0gW1xuICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQgPSB0cnVlKSB7XG4gIGxldCB0b3VjaGVzTm9kZUxpc3Q7XG5cbiAgaWYgKGNoYW5nZWQpIHtcbiAgICAoeyBjaGFuZ2VkVG91Y2hlczogdG91Y2hlc05vZGVMaXN0IH0gPSB0b3VjaEV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICAoeyB0b3VjaGVzOiB0b3VjaGVzTm9kZUxpc3QgfSA9IHRvdWNoRXZlbnQpO1xuICB9XG5cbiAgY29uc3QgdG91Y2hlcyA9IFtcbiAgICAgICAgICAuLi50b3VjaGVzTm9kZUxpc3RcbiAgICAgICAgXSxcbiAgICAgICAgcG9zaXRpb25zID0gdG91Y2hlcy5tYXAoKHRvdWNoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tVG91Y2godG91Y2gpO1xuXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9KTtcblxuICBjb21wcmVzc1Bvc2l0aW9ucyhwb3NpdGlvbnMpO1xuXG4gIHJldHVybiBwb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNvbXByZXNzUG9zaXRpb25zKHBvc2l0aW9ucykge1xuICBjb25zdCBwb3NpdGlvbk1hcCA9IHBvc2l0aW9ucy5yZWR1Y2UoKHBvc2l0aW9uTWFwLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbi5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICBwb3NpdGlvbk1hcFtpZGVudGlmaWVyXSA9IHBvc2l0aW9uO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uTWFwO1xuICB9LCB7fSk7XG5cbiAgcG9zaXRpb25zID0gT2JqZWN0LnZhbHVlcyhwb3NpdGlvbk1hcCk7XG5cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gaWRlbnRpZmllcnNGcm9tUG9zaXRpb25zKHBvc2l0aW9ucykge1xuICBjb25zdCBpZGVudGlmaWVycyA9IHBvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBvc2l0aW9uLmdldElkZW50aWZpZXIoKTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9KTtcblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbiJdLCJuYW1lcyI6WyJmaWx0ZXJQb3NpdGlvbnMiLCJtYXRjaFBvc2l0aW9ucyIsInBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50IiwicG9zaXRpb25zRnJvbVRvdWNoRXZlbnQiLCJzb3J0UG9zaXRpb25zIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsInBvc2l0aW9uc0EiLCJwb3NpdGlvbnNCIiwicG9zaXRpb25BTWFwIiwicmVkdWNlIiwicG9zaXRpb25BIiwiaWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJmb3JFYWNoIiwicG9zaXRpb25CIiwicHVzaCIsInBvc2l0aW9uc01hdGNoIiwicG9zaXRpb25zQUxlbmd0aCIsImxlbmd0aCIsInBvc2l0aW9uc0JMZW5ndGgiLCJpZGVudGlmaWVyc0EiLCJpZGVudGlmaWVyc0Zyb21Qb3NpdGlvbnMiLCJpZGVudGlmaWVyc0IiLCJzb3J0IiwiaWRlbnRpZmllcnNNYXRjaCIsImV2ZXJ5IiwiaWRlbnRpZmllckEiLCJpbmRleCIsImlkZW50aWZpZXJCIiwibWF0Y2hlcyIsInNvbWUiLCJtYXRjaCIsIm1vdXNlRXZlbnQiLCJwb3NpdGlvbiIsIlBvc2l0aW9uIiwiZnJvbU1vdXNlRXZlbnQiLCJwb3NpdGlvbnMiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZCIsInRvdWNoZXNOb2RlTGlzdCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hlcyIsIm1hcCIsInRvdWNoIiwiZnJvbVRvdWNoIiwiY29tcHJlc3NQb3NpdGlvbnMiLCJwb3NpdGlvbk1hcCIsIk9iamVjdCIsInZhbHVlcyIsImlkZW50aWZpZXJzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF1RGdCQSxlQUFlO2VBQWZBOztJQTVCQUMsY0FBYztlQUFkQTs7SUE0Q0FDLHVCQUF1QjtlQUF2QkE7O0lBU0FDLHVCQUF1QjtlQUF2QkE7O0lBeEVBQyxhQUFhO2VBQWJBOzs7eUJBTmU7K0RBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFUixTQUFTSCxjQUFjSSxVQUFVLEVBQUVDLFVBQVU7SUFDbEQsSUFBTUMsZUFBZUYsV0FBV0csTUFBTSxDQUFDLFNBQUNELGNBQWNFO1FBQ3BELElBQU1DLGFBQWFELFVBQVVFLGFBQWE7UUFFMUNKLFlBQVksQ0FBQ0csV0FBVyxHQUFHRDtRQUUzQixPQUFPRjtJQUNULEdBQUcsQ0FBQztJQUVKTCxNQUFNRztJQUVOQyxXQUFXTSxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBTUgsYUFBYUcsVUFBVUYsYUFBYSxJQUNwQ0YsWUFBWUYsWUFBWSxDQUFDRyxXQUFXO1FBRTFDTCxXQUFXUyxJQUFJLENBQUNMO0lBQ2xCO0FBQ0Y7QUFFTyxTQUFTWCxlQUFlTyxVQUFVLEVBQUVDLFVBQVU7SUFDbkQsSUFBSVMsaUJBQWlCO0lBRXJCLElBQU1DLG1CQUFtQlgsV0FBV1ksTUFBTSxFQUNwQ0MsbUJBQW1CWixXQUFXVyxNQUFNO0lBRTFDLElBQUlELHFCQUFxQkUsa0JBQWtCO1FBQ3pDLElBQU1DLGVBQWVDLHlCQUF5QmYsYUFDeENnQixlQUFlRCx5QkFBeUJkO1FBRTlDYSxhQUFhRyxJQUFJO1FBRWpCRCxhQUFhQyxJQUFJO1FBRWpCLElBQU1DLG1CQUFtQkosYUFBYUssS0FBSyxDQUFDLFNBQUNDLGFBQWFDO1lBQ3hELElBQU1DLGNBQWNOLFlBQVksQ0FBQ0ssTUFBTTtZQUV2QyxJQUFJRCxnQkFBZ0JFLGFBQWE7Z0JBQy9CLE9BQU87WUFDVDtRQUNGO1FBRUFaLGlCQUFpQlEsa0JBQW1CLEdBQUc7SUFDekM7SUFFQSxPQUFPUjtBQUNUO0FBRU8sU0FBU2xCLGdCQUFnQlEsVUFBVSxFQUFFQyxVQUFVO0lBQ3BERixPQUFPQyxZQUFZLFNBQUNJO1FBQ2xCLElBQU1tQixVQUFVdEIsV0FBV3VCLElBQUksQ0FBQyxTQUFDaEI7WUFDL0IsSUFBTWUsVUFBVW5CLFVBQVVxQixLQUFLLENBQUNqQjtZQUVoQyxJQUFJZSxTQUFTO2dCQUNYLE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBSSxDQUFDQSxTQUFTO1lBQ1osT0FBTztRQUNUO0lBQ0Y7QUFDRjtBQUVPLFNBQVM3Qix3QkFBd0JnQyxVQUFVO0lBQ2hELElBQU1DLFdBQVdDLGlCQUFRLENBQUNDLGNBQWMsQ0FBQ0gsYUFDbkNJLFlBQVk7UUFDVkg7S0FDRDtJQUVQLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTbkMsd0JBQXdCb0MsVUFBVTtRQUFFQyxVQUFBQSxpRUFBVTtJQUM1RCxJQUFJQztJQUVKLElBQUlELFNBQVM7O2NBQzRCRCxZQUFwQkUsc0JBQWhCQztJQUNMLE9BQU87O2VBQzJCSCxZQUFwQkUsdUJBQVRFO0lBQ0w7SUFFQSxJQUFNQSxVQUNFLHFCQUFHRixrQkFFTEgsWUFBWUssUUFBUUMsR0FBRyxDQUFDLFNBQUNDO1FBQ3ZCLElBQU1WLFdBQVdDLGlCQUFRLENBQUNVLFNBQVMsQ0FBQ0Q7UUFFcEMsT0FBT1Y7SUFDVDtJQUVOWSxrQkFBa0JUO0lBRWxCLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTUyxrQkFBa0JULFNBQVM7SUFDbEMsSUFBTVUsY0FBY1YsVUFBVTNCLE1BQU0sQ0FBQyxTQUFDcUMsYUFBYWI7UUFDakQsSUFBTXRCLGFBQWFzQixTQUFTckIsYUFBYTtRQUV6Q2tDLFdBQVcsQ0FBQ25DLFdBQVcsR0FBR3NCO1FBRTFCLE9BQU9hO0lBQ1QsR0FBRyxDQUFDO0lBRUpWLFlBQVlXLE9BQU9DLE1BQU0sQ0FBQ0Y7SUFFMUIsT0FBT1Y7QUFDVDtBQUVBLFNBQVNmLHlCQUF5QmUsU0FBUztJQUN6QyxJQUFNYSxjQUFjYixVQUFVTSxHQUFHLENBQUMsU0FBQ1Q7UUFDakMsSUFBTXRCLGFBQWFzQixTQUFTckIsYUFBYTtRQUV6QyxPQUFPRDtJQUNUO0lBRUEsT0FBT3NDO0FBQ1QifQ==