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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("../index");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  \n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  touch-action: none;\n  justify-content: center;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "singleTapCustomHandler", function(event, element, top, left) {
            console.log("single tap");
        }), _define_property(_this, "doubleTapCustomHandler", function(event, element, top, left) {
            console.log("double tap");
        }), _define_property(_this, "pinchStartCustomHandler", function(event, element) {
            console.log("pinch start");
        }), _define_property(_this, "pinchMoveCustomHandler", function(event, element, ratio) {
            console.log("pinch move", ratio);
        }), _define_property(_this, "swipeRightCustomHandler", function(event, element, top, left, speed) {
            console.log("swipe right", speed);
        }), _define_property(_this, "swipeLeftCustomHandler", function(event, element, top, left, speed) {
            console.log("swipe left", speed);
        }), _define_property(_this, "dragDownCustomHandler", function(event, element, top, left) {
            console.log("drag down", top);
        }), _define_property(_this, "dragUpCustomHandler", function(event, element, top, left) {
            console.log("drag up", top);
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "didMount",
            value: function didMount() {
                this.onCustomDragUp(this.dragUpCustomHandler);
                this.onCustomDragDown(this.dragDownCustomHandler);
                this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.onCustomSwipeRight(this.swipeRightCustomHandler);
                this.onCustomPinchMove(this.pinchMoveCustomHandler);
                this.onCustomPinchStart(this.pinchStartCustomHandler);
                this.onCustomSingleTap(this.singleTapCustomHandler);
                this.onCustomDoubleTap(this.doubleTapCustomHandler);
                this.enableTouch();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableTouch();
                this.offCustomDragUp(this.dragUpCustomHandler);
                this.offCustomDragDown(this.dragDownCustomHandler);
                this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.offCustomSwipeRight(this.swipeRightCustomHandler);
                this.offCustomPinchMove(this.pinchMoveCustomHandler);
                this.offCustomPinchStart(this.pinchStartCustomHandler);
                this.offCustomSingleTap(this.singleTapCustomHandler);
                this.offCustomDoubleTap(this.doubleTapCustomHandler);
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
Object.assign(View.prototype, _index.touchMixins);
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgdG91Y2hNaXhpbnMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzaW5nbGUgdGFwXCIpXG4gIH1cblxuICBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRvdWJsZSB0YXBcIilcbiAgfVxuXG4gIHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJwaW5jaCBzdGFydFwiKVxuICB9XG5cbiAgcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInBpbmNoIG1vdmVcIiwgcmF0aW8pXG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic3dpcGUgcmlnaHRcIiwgc3BlZWQpXG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzd2lwZSBsZWZ0XCIsIHNwZWVkKVxuICB9XG5cbiAgZHJhZ0Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRyYWcgZG93blwiLCB0b3ApXG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRyYWcgdXBcIiwgdG9wKVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuICBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlZpZXciLCJzaW5nbGVUYXBDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidG9wIiwibGVmdCIsImNvbnNvbGUiLCJsb2ciLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNwZWVkIiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJkaWRNb3VudCIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbVNpbmdsZVRhcCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwiZW5hYmxlVG91Y2giLCJ3aWxsVW5tb3VudCIsImRpc2FibGVUb3VjaCIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbURyYWdEb3duIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJFQTs7O2VBQUE7OztvRUF6RXNCO29CQUVFO3FCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQUEsQUFBTUEscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsa0JBQ0pDLHdCQUFBQSwwQkFBeUIsU0FBQ0MsT0FBT0MsU0FBU0MsS0FBS0M7WUFDN0NDLFFBQVFDLEdBQUcsQ0FBQztRQUNkLElBRUFDLHdCQUFBQSwwQkFBeUIsU0FBQ04sT0FBT0MsU0FBU0MsS0FBS0M7WUFDN0NDLFFB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