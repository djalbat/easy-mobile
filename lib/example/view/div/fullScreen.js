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
                this.onCustomPress(this.pressCustomHandler);
                this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
                this.offCustomPress(this.pressCustomHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L2Z1bGxTY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgdG91Y2hNaXhpbnMsIGZ1bGxTY3JlZW5NaXhpbnMgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgRnVsbFNjcmVlbkJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2Z1bGxTY3JlZW5cIjtcblxuY2xhc3MgRnVsbFNjcmVlbkRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBmdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBmdWxsU2NyZWVuQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBmdWxsU2NyZWVuID9cbiAgICAgIHRoaXMuZXhpdEZ1bGxTY3JlZW4oKSA6XG4gICAgICAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oYWxlcnQpO1xuICB9XG5cbiAgcHJlc3NDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMub25DdXN0b21QcmVzcyh0aGlzLnByZXNzQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tUHJlc3ModGhpcy5wcmVzc0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPEZ1bGxTY3JlZW5CdXR0b24gb25DbGljaz17dGhpcy5mdWxsU2NyZWVuQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZ1bGwtc2NyZWVuXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihGdWxsU2NyZWVuRGl2LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihGdWxsU2NyZWVuRGl2LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShGdWxsU2NyZWVuRGl2KWBcblxuICB3aWR0aDogNjRyZW07XG4gIGhlaWdodDogMzJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiRnVsbFNjcmVlbkRpdiIsImZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZnVsbFNjcmVlbkJ1dHRvbkNsaWNrSGFuZGxlciIsImZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJleGl0RnVsbFNjcmVlbiIsInJlcXVlc3RGdWxsU2NyZWVuIiwiYWxlcnQiLCJwcmVzc0N1c3RvbUhhbmRsZXIiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwib25DdXN0b21QcmVzcyIsIm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsIndpbGxVbm1vdW50Iiwib2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsIm9mZkN1c3RvbVByZXNzIiwiZGlzYWJsZVRvdWNoIiwiY2hpbGRFbGVtZW50cyIsIkZ1bGxTY3JlZW5CdXR0b24iLCJvbkNsaWNrIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNERBOzs7ZUFBQTs7O29FQTFEc0I7b0JBRUU7cUJBQ3NCO2lFQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLDJCQUNKQyx3QkFBQUEsaUNBQWdDLFNBQUNDLE9BQU9DO1lBQ3RDLFFBQVE7UUFDVixJQUVBQyx3QkFBQUEsZ0NBQStCLFNBQUNGLE9BQU9DO1lBQ3JDLElBQU1FLGFBQWEsTUFBS0MsWUFBWTtZQUVwQ0QsYUFDRSxNQUFLRSxjQUFjLEtBQ2pCLE1BQUtDLGlCQUFpQixDQUFDQztRQUM3QixJQUVBQyx3QkFBQUEsc0JBQXFCLFNBQUNSLE9BQU9DO1lBQzNCLFFBQVE7UUFDVjs7O2tCQWZJSDs7WUFpQkpXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFdBQVc7Z0JBRWhCLElBQUksQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQ0gsa0JBQWtCO2dCQUUxQyxJQUFJLENBQUNJLHdCQUF3QixDQUFDLElBQUksQ0FBQ2IsNkJBQTZCO1lBQ2xFOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MseUJBQXlCLENBQUMsSUFBSSxDQUFDZiw2QkFBNkI7Z0JBRWpFLElBQUksQ0FBQ2dCLGNBQWMsQ0FBQyxJQUFJLENBQUNQLGtCQUFrQjtnQkFFM0MsSUFBSSxDQUFDUSxZQUFZO1lBQ25COzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyxtQkFBZ0I7b0JBQUNDLFNBQVMsSUFBSSxDQUFDakIsNEJBQTRCOztZQUdoRTs7O1dBdkNJSjtxQkFBc0JzQixhQUFPO0FBeUNqQyxpQkF6Q0l0QixlQXlDR3VCLFdBQVU7QUFFakIsaUJBM0NJdkIsZUEyQ0d3QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtBQUdGQyxPQUFPQyxNQUFNLENBQUMzQixjQUFjNEIsU0FBUyxFQUFFQyxrQkFBVztBQUNsREgsT0FBT0MsTUFBTSxDQUFDM0IsY0FBYzRCLFNBQVMsRUFBRUUsdUJBQWdCO0lBRXZELFdBQWVDLElBQUFBLHNCQUFTLEVBQUMvQiJ9