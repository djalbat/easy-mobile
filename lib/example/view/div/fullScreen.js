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
        _define_property(_assert_this_initialized(_this), "pressCustomHandler", function(event, element) {
            debugger;
        });
        _define_property(_assert_this_initialized(_this), "fullScreenButtonClickHandler", function(event, element) {
            var fullScreen = isFullScreen();
            fullScreen ? _this.exitFullScreen() : _this.requestFullScreen();
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
                this.onCustomFullScreenChange(this.fullScreenButtonClickHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offCustomFullScreenChange(this.fullScreenButtonClickHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2Z1bGxTY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgdG91Y2hNaXhpbnMsIGZ1bGxTY3JlZW5NaXhpbnMsIGZ1bGxTY3JlZW5VdGlsaXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgRnVsbFNjcmVlbkJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2Z1bGxTY3JlZW5cIjtcblxuY29uc3QgeyBpc0Z1bGxTY3JlZW4gfSA9IGZ1bGxTY3JlZW5VdGlsaXRpZXM7XG5cbmNsYXNzIEZ1bGxTY3JlZW5EaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgcHJlc3NDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGZ1bGxTY3JlZW5CdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBmdWxsU2NyZWVuID9cbiAgICAgIHRoaXMuZXhpdEZ1bGxTY3JlZW4oKSA6XG4gICAgICAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZW5hYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVByZXNzKHRoaXMucHJlc3NDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkJ1dHRvbkNsaWNrSGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQnV0dG9uQ2xpY2tIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tUHJlc3ModGhpcy5wcmVzc0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5kaXNhYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPEZ1bGxTY3JlZW5CdXR0b24gb25DbGljaz17dGhpcy5mdWxsU2NyZWVuQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZ1bGwtc2NyZWVuXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihGdWxsU2NyZWVuRGl2LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihGdWxsU2NyZWVuRGl2LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShGdWxsU2NyZWVuRGl2KWBcblxuICB3aWR0aDogNjRyZW07XG4gIGhlaWdodDogMzJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiaXNGdWxsU2NyZWVuIiwiZnVsbFNjcmVlblV0aWxpdGllcyIsIkZ1bGxTY3JlZW5EaXYiLCJmdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInByZXNzQ3VzdG9tSGFuZGxlciIsImZ1bGxTY3JlZW5CdXR0b25DbGlja0hhbmRsZXIiLCJmdWxsU2NyZWVuIiwiZXhpdEZ1bGxTY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsImRpZE1vdW50IiwiZW5hYmxlVG91Y2giLCJlbmFibGVGdWxsU2NyZWVuIiwib25DdXN0b21QcmVzcyIsIm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsIndpbGxVbm1vdW50Iiwib2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsIm9mZkN1c3RvbVByZXNzIiwiZGlzYWJsZUZ1bGxTY3JlZW4iLCJkaXNhYmxlVG91Y2giLCJjaGlsZEVsZW1lbnRzIiwiRnVsbFNjcmVlbkJ1dHRvbiIsIm9uQ2xpY2siLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtFQTs7O2VBQUE7OztvRUFoRXNCO29CQUVFO3FCQUMyQztpRUFFdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxBQUFFQSxlQUFpQkMsMEJBQW1CLENBQXBDRDtBQUVSLElBQUEsQUFBTUUsOEJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLGlDQUFnQyxTQUFDQyxPQUFPQztZQUN0QyxRQUFRO1FBQ1Y7UUFFQUMsa0RBQUFBLHNCQUFxQixTQUFDRixPQUFPQztZQUMzQixRQUFRO1FBQ1Y7UUFFQUUsa0RBQUFBLGdDQUErQixTQUFDSCxPQUFPQztZQUNyQyxJQUFNRyxhQUFhUjtZQUVuQlEsYUFDRSxNQUFLQyxjQUFjLEtBQ2pCLE1BQUtDLGlCQUFpQjtRQUM1Qjs7O2tCQWZJUjs7WUFpQkpTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFdBQVc7Z0JBRWhCLElBQUksQ0FBQ0MsZ0JBQWdCO2dCQUVyQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNSLGtCQUFrQjtnQkFFMUMsSUFBSSxDQUFDUyx3QkFBd0IsQ0FBQyxJQUFJLENBQUNSLDRCQUE0QjtZQUNqRTs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLHlCQUF5QixDQUFDLElBQUksQ0FBQ1YsNEJBQTRCO2dCQUVoRSxJQUFJLENBQUNXLGNBQWMsQ0FBQyxJQUFJLENBQUNaLGtCQUFrQjtnQkFFM0MsSUFBSSxDQUFDYSxpQkFBaUI7Z0JBRXRCLElBQUksQ0FBQ0MsWUFBWTtZQUNuQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MsbUJBQWdCO29CQUFDQyxTQUFTLElBQUksQ0FBQ2hCLDRCQUE0Qjs7WUFHaEU7OztXQTNDSUw7cUJBQXNCc0IsYUFBTztBQTZDakMsaUJBN0NJdEIsZUE2Q0d1QixXQUFVO0FBRWpCLGlCQS9DSXZCLGVBK0NHd0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7QUFHRkMsT0FBT0MsTUFBTSxDQUFDM0IsY0FBYzRCLFNBQVMsRUFBRUMsa0JBQVc7QUFDbERILE9BQU9DLE1BQU0sQ0FBQzNCLGNBQWM0QixTQUFTLEVBQUVFLHVCQUFnQjtJQUV2RCxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDL0IifQ==