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
var _index = require("../../../index");
var _fullScreen = /*#__PURE__*/ _interop_require_default(require("../button/fullScreen"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: 64rem;\n  height: 32rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: blue;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var isFullScreen = _index.fullScreenUtilities.isFullScreen;
var FullScreenDiv = /*#__PURE__*/ function(Element) {
    _inherits(FullScreenDiv, Element);
    var _super = _create_super(FullScreenDiv);
    function FullScreenDiv() {
        _class_call_check(this, FullScreenDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "fullScreenChangeCustomHandler", function(event, element) {
            debugger;
        });
        _define_property(_assert_this_initialized(_this), "fullScreenButtonClickHandler", function(event, element) {
            var fullScreen = isFullScreen();
            fullScreen ? _this.exitFullScreen() : _this.requestFullScreen();
        });
        _define_property(_assert_this_initialized(_this), "pressCustomHandler", function(event, element) {
            debugger;
        });
        return _this;
    }
    _create_class(FullScreenDiv, [
        {
            key: "didMount",
            value: function didMount() {
                this.enableTouch();
                this.enableFullScreen();
                this.onCustomPress(this.pressCustomHandler);
                this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
                this.offCustomPress(this.pressCustomHandler);
                this.disableFullScreen();
                this.disableTouch();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_fullScreen.default, {
                    onClick: this.fullScreenButtonClickHandler
                });
            }
        }
    ]);
    return FullScreenDiv;
}(_wrap_native_super(_easy.Element));
_define_property(FullScreenDiv, "tagName", "div");
_define_property(FullScreenDiv, "defaultProperties", {
    className: "full-screen"
});
Object.assign(FullScreenDiv.prototype, _index.touchMixins);
Object.assign(FullScreenDiv.prototype, _index.fullScreenMixins);
var _default = (0, _easywithstyle.default)(FullScreenDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2Z1bGxTY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgdG91Y2hNaXhpbnMsIGZ1bGxTY3JlZW5NaXhpbnMsIGZ1bGxTY3JlZW5VdGlsaXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgRnVsbFNjcmVlbkJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2Z1bGxTY3JlZW5cIjtcblxuY29uc3QgeyBpc0Z1bGxTY3JlZW4gfSA9IGZ1bGxTY3JlZW5VdGlsaXRpZXM7XG5cbmNsYXNzIEZ1bGxTY3JlZW5EaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgZnVsbFNjcmVlbkJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgIGZ1bGxTY3JlZW4gP1xuICAgICAgdGhpcy5leGl0RnVsbFNjcmVlbigpIDpcbiAgICAgICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICB9XG5cbiAgcHJlc3NDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZW5hYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVByZXNzKHRoaXMucHJlc3NDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21QcmVzcyh0aGlzLnByZXNzQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8RnVsbFNjcmVlbkJ1dHRvbiBvbkNsaWNrPXt0aGlzLmZ1bGxTY3JlZW5CdXR0b25DbGlja0hhbmRsZXJ9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZnVsbC1zY3JlZW5cIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKEZ1bGxTY3JlZW5EaXYucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKEZ1bGxTY3JlZW5EaXYucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEZ1bGxTY3JlZW5EaXYpYFxuXG4gIHdpZHRoOiA2NHJlbTtcbiAgaGVpZ2h0OiAzMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJpc0Z1bGxTY3JlZW4iLCJmdWxsU2NyZWVuVXRpbGl0aWVzIiwiRnVsbFNjcmVlbkRpdiIsImZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZnVsbFNjcmVlbkJ1dHRvbkNsaWNrSGFuZGxlciIsImZ1bGxTY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsInJlcXVlc3RGdWxsU2NyZWVuIiwicHJlc3NDdXN0b21IYW5kbGVyIiwiZGlkTW91bnQiLCJlbmFibGVUb3VjaCIsImVuYWJsZUZ1bGxTY3JlZW4iLCJvbkN1c3RvbVByZXNzIiwib25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwid2lsbFVubW91bnQiLCJvZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwib2ZmQ3VzdG9tUHJlc3MiLCJkaXNhYmxlRnVsbFNjcmVlbiIsImRpc2FibGVUb3VjaCIsImNoaWxkRWxlbWVudHMiLCJGdWxsU2NyZWVuQnV0dG9uIiwib25DbGljayIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJ0b3VjaE1peGlucyIsImZ1bGxTY3JlZW5NaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtFQTs7O2VBQUE7OztvRUFoRXNCO29CQUVFO3FCQUMyQztpRUFFdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxBQUFFQSxlQUFpQkMsMEJBQW1CLENBQXBDRDtBQUVSLElBQUEsQUFBTUUsOEJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLGlDQUFnQyxTQUFDQyxPQUFPQztZQUN0QyxRQUFRO1FBQ1Y7UUFFQUMsa0RBQUFBLGdDQUErQixTQUFDRixPQUFPQztZQUNyQyxJQUFNRSxhQUFhUDtZQUVuQk8sYUFDRSxNQUFLQyxjQUFjLEtBQ2pCLE1BQUtDLGlCQUFpQjtRQUM1QjtRQUVBQyxrREFBQUEsc0JBQXFCLFNBQUNOLE9BQU9DO1lBQzNCLFFBQVE7UUFDVjs7O2tCQWZJSDs7WUFpQkpTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFdBQVc7Z0JBRWhCLElBQUksQ0FBQ0MsZ0JBQWdCO2dCQUVyQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNKLGtCQUFrQjtnQkFFMUMsSUFBSSxDQUFDSyx3QkFBd0IsQ0FBQyxJQUFJLENBQUNaLDZCQUE2QjtZQUNsRTs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLHlCQUF5QixDQUFDLElBQUksQ0FBQ2QsNkJBQTZCO2dCQUVqRSxJQUFJLENBQUNlLGNBQWMsQ0FBQyxJQUFJLENBQUNSLGtCQUFrQjtnQkFFM0MsSUFBSSxDQUFDUyxpQkFBaUI7Z0JBRXRCLElBQUksQ0FBQ0MsWUFBWTtZQUNuQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MsbUJBQWdCO29CQUFDQyxTQUFTLElBQUksQ0FBQ2pCLDRCQUE0Qjs7WUFHaEU7OztXQTNDSUo7cUJBQXNCc0IsYUFBTztBQTZDakMsaUJBN0NJdEIsZUE2Q0d1QixXQUFVO0FBRWpCLGlCQS9DSXZCLGVBK0NHd0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7QUFHRkMsT0FBT0MsTUFBTSxDQUFDM0IsY0FBYzRCLFNBQVMsRUFBRUMsa0JBQVc7QUFDbERILE9BQU9DLE1BQU0sQ0FBQzNCLGNBQWM0QixTQUFTLEVBQUVFLHVCQUFnQjtJQUV2RCxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDL0IifQ==