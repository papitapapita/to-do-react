"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withStorageListener = withStorageListener;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function withStorageListener(WrappedComponent) {
    return function WithStorageListenerWrapper(props) {
        var _a = (0, react_1.useState)(false), storageChanged = _a[0], setStorageChanged = _a[1];
        (0, react_1.useEffect)(function () {
            var onStorage = function (event) {
                if (event.key == 'TODOS_V1') {
                    setStorageChanged(true);
                }
            };
            window.addEventListener('storage', onStorage);
            return function () {
                return window.removeEventListener('storage', onStorage);
            };
        }, []);
        return ((0, jsx_runtime_1.jsx)(WrappedComponent, __assign({}, props, { show: storageChanged, toggleShow: setStorageChanged })));
    };
}
