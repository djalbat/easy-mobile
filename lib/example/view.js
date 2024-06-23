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
var _fullScreen = /*#__PURE__*/ _interop_require_default(require("./view/div/fullScreen"));
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
        "\n  \n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  touch-action: none;\n  justify-content: center;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "singleTapCustomHandler", function(event, element, top, left) {
            console.log("single tap");
        });
        _define_property(_assert_this_initialized(_this), "doubleTapCustomHandler", function(event, element, top, left) {
            console.log("double tap");
        });
        _define_property(_assert_this_initialized(_this), "pinchStartCustomHandler", function(event, element) {
            console.log("pinch start");
        });
        _define_property(_assert_this_initialized(_this), "pinchMoveCustomHandler", function(event, element, ratio) {
            console.log("pinch move", ratio);
        });
        _define_property(_assert_this_initialized(_this), "swipeRightCustomHandler", function(event, element, top, left, speed) {
            console.log("swipe right", speed);
        });
        _define_property(_assert_this_initialized(_this), "swipeLeftCustomHandler", function(event, element, top, left, speed) {
            console.log("swipe left", speed);
        });
        _define_property(_assert_this_initialized(_this), "dragDownCustomHandler", function(event, element, top, left) {
            console.log("drag down", top);
        });
        _define_property(_assert_this_initialized(_this), "dragUpCustomHandler", function(event, element, top, left) {
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
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_fullScreen.default, null);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgdG91Y2hNaXhpbnMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBGdWxsU2NyZWVuRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2Z1bGxTY3JlZW5cIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzaW5nbGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInNpbmdsZSB0YXBcIilcbiAgfVxuXG4gIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZG91YmxlIHRhcFwiKVxuICB9XG5cbiAgcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInBpbmNoIHN0YXJ0XCIpXG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicGluY2ggbW92ZVwiLCByYXRpbylcbiAgfVxuXG4gIHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJzd2lwZSByaWdodFwiLCBzcGVlZClcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInN3aXBlIGxlZnRcIiwgc3BlZWQpXG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZHJhZyBkb3duXCIsIHRvcClcbiAgfVxuXG4gIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZHJhZyB1cFwiLCB0b3ApXG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZVRvdWNoKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxGdWxsU2NyZWVuRGl2Lz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG4gIFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiVmlldyIsInNpbmdsZVRhcEN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ0b3AiLCJsZWZ0IiwiY29uc29sZSIsImxvZyIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJyYXRpbyIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwic3BlZWQiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsImRpZE1vdW50Iiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbURyYWdEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwib25DdXN0b21Eb3VibGVUYXAiLCJlbmFibGVUb3VjaCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbVNpbmdsZVRhcCIsIm9mZkN1c3RvbURvdWJsZVRhcCIsImNoaWxkRWxlbWVudHMiLCJGdWxsU2NyZWVuRGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxRkE7OztlQUFBOzs7b0VBbkZzQjtvQkFFRTtxQkFDSTtpRUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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