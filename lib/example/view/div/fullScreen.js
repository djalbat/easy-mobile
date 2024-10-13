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
        "\n\n  width: 64rem;\n  height: 32rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: blue;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var FullScreenDiv = /*#__PURE__*/ function(Element) {
    _inherits(FullScreenDiv, Element);
    function FullScreenDiv() {
        _class_call_check(this, FullScreenDiv);
        var _this;
        _this = _call_super(this, FullScreenDiv, arguments), _define_property(_this, "fullScreenChangeCustomHandler", function(event, element) {
            debugger;
        }), _define_property(_this, "fullScreenButtonClickHandler", function(event, element) {
            var fullScreen = _this.isFullScreen();
            fullScreen ? _this.exitFullScreen() : _this.requestFullScreen(alert);
        }), _define_property(_this, "pressCustomHandler", function(event, element) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2Z1bGxTY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgdG91Y2hNaXhpbnMsIGZ1bGxTY3JlZW5NaXhpbnMgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgRnVsbFNjcmVlbkJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2Z1bGxTY3JlZW5cIjtcblxuY2xhc3MgRnVsbFNjcmVlbkRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBmdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBmdWxsU2NyZWVuQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBmdWxsU2NyZWVuID9cbiAgICAgIHRoaXMuZXhpdEZ1bGxTY3JlZW4oKSA6XG4gICAgICAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oYWxlcnQpO1xuICB9XG5cbiAgcHJlc3NDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZW5hYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVByZXNzKHRoaXMucHJlc3NDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21QcmVzcyh0aGlzLnByZXNzQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8RnVsbFNjcmVlbkJ1dHRvbiBvbkNsaWNrPXt0aGlzLmZ1bGxTY3JlZW5CdXR0b25DbGlja0hhbmRsZXJ9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZnVsbC1zY3JlZW5cIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKEZ1bGxTY3JlZW5EaXYucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKEZ1bGxTY3JlZW5EaXYucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEZ1bGxTY3JlZW5EaXYpYFxuXG4gIHdpZHRoOiA2NHJlbTtcbiAgaGVpZ2h0OiAzMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJGdWxsU2NyZWVuRGl2IiwiZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJmdWxsU2NyZWVuQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJhbGVydCIsInByZXNzQ3VzdG9tSGFuZGxlciIsImRpZE1vdW50IiwiZW5hYmxlVG91Y2giLCJlbmFibGVGdWxsU2NyZWVuIiwib25DdXN0b21QcmVzcyIsIm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsIndpbGxVbm1vdW50Iiwib2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsIm9mZkN1c3RvbVByZXNzIiwiZGlzYWJsZUZ1bGxTY3JlZW4iLCJkaXNhYmxlVG91Y2giLCJjaGlsZEVsZW1lbnRzIiwiRnVsbFNjcmVlbkJ1dHRvbiIsIm9uQ2xpY2siLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnRUE7OztlQUFBOzs7b0VBOURzQjtvQkFFRTtxQkFDc0I7aUVBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztrQ0FBQUEsMkJBQ0pDLHdCQUFBQSxpQ0FBZ0MsU0FBQ0MsT0FBT0M7WUFDdEMsUUFBUTtRQUNWLElBRUFDLHdCQUFBQSxnQ0FBK0IsU0FBQ0YsT0FBT0M7WUFDckMsSUFBTUUsYUFBYSxNQUFLQyxZQUFZO1lBRXBDRCxhQUNFLE1BQUtFLGNBQWMsS0FDakIsTUFBS0MsaUJBQWlCLENBQUNDO1FBQzdCLElBRUFDLHdCQUFBQSxzQkFBcUIsU0FBQ1IsT0FBT0M7WUFDM0IsUUFBUTtRQUNWOzs7a0JBZklIOztZQWlCSlcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsV0FBVztnQkFFaEIsSUFBSSxDQUFDQyxnQkFBZ0I7Z0JBRXJCLElBQUksQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQ0osa0JBQWtCO2dCQUUxQyxJQUFJLENBQUNLLHdCQUF3QixDQUFDLElBQUksQ0FBQ2QsNkJBQTZCO1lBQ2xFOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MseUJBQXlCLENBQUMsSUFBSSxDQUFDaEIsNkJBQTZCO2dCQUVqRSxJQUFJLENBQUNpQixjQUFjLENBQUMsSUFBSSxDQUFDUixrQkFBa0I7Z0JBRTNDLElBQUksQ0FBQ1MsaUJBQWlCO2dCQUV0QixJQUFJLENBQUNDLFlBQVk7WUFDbkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLG1CQUFnQjtvQkFBQ0MsU0FBUyxJQUFJLENBQUNuQiw0QkFBNEI7O1lBR2hFOzs7V0EzQ0lKO3FCQUFzQndCLGFBQU87QUE2Q2pDLGlCQTdDSXhCLGVBNkNHeUIsV0FBVTtBQUVqQixpQkEvQ0l6QixlQStDRzBCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0FBR0ZDLE9BQU9DLE1BQU0sQ0FBQzdCLGNBQWM4QixTQUFTLEVBQUVDLGtCQUFXO0FBQ2xESCxPQUFPQyxNQUFNLENBQUM3QixjQUFjOEIsU0FBUyxFQUFFRSx1QkFBZ0I7SUFFdkQsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2pDIn0=