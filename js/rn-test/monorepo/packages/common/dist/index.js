"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = __importStar(require("react"));
exports.App = function () {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, null, "Welcome to React Native App"),
        react_1.default.createElement(react_native_1.Text, null, count),
        react_1.default.createElement(react_native_1.Button, { title: 'increment', onPress: function () { return setCount(count + 1); } })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
