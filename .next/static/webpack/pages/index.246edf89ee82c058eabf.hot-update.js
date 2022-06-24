self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ "./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\New folder\\Amazon-starter-template-nextjs\\src\\components\\Product.js",
    _s = $RefreshSig$();





var MAX_RATING = 5;
var MIN_RATING = 1;

function Product(_ref) {
  _s();

  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING),
      rating = _useState[0];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.random() < 0.5),
      hasPrime = _useState2[0];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map(function (_, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {
          className: "h-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 2
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {
        quantity: price,
        currency: "GBP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 2
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "https://links.papareact.com/fdw",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "FREE Next-day Delivery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      children: "Add "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(Product, "5muYyZ7ex6ia4hbSM1gSdY3SsaQ=");

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhdGluZyIsImhhc1ByaW1lIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRSxDQUFsQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxDQUFuQjs7QUFDQSxTQUFTQyxPQUFULE9BQXFFO0FBQUE7O0FBQUE7O0FBQUEsTUFBbERDLEVBQWtELFFBQWxEQSxFQUFrRDtBQUFBLE1BQTlDQyxLQUE4QyxRQUE5Q0EsS0FBOEM7QUFBQSxNQUF2Q0MsS0FBdUMsUUFBdkNBLEtBQXVDO0FBQUEsTUFBaENDLFdBQWdDLFFBQWhDQSxXQUFnQztBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBQ2hEQywrQ0FBUSxDQUNyQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFnQlosVUFBVSxHQUFHQyxVQUFiLEdBQTBCLENBQTFDLENBQVgsSUFBMkRBLFVBRHRDLENBRHdDO0FBQUEsTUFDMURZLE1BRDBEOztBQUFBLG1CQUk5Q0osK0NBQVEsQ0FBQ0MsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQWpCLENBSnNDO0FBQUEsTUFJMURFLFFBSjBEOztBQUtuRSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUlQO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVDLEtBQVo7QUFBbUIsWUFBTSxFQUFFLEdBQTNCO0FBQWdDLFdBQUssRUFBRSxHQUF2QztBQUE0QyxlQUFTLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBQSxnQkFBS0o7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsZ0JBQ0dXLEtBQUssQ0FBQ0YsTUFBRCxDQUFMLENBQWNHLElBQWQsR0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDRCQUNqQyw4REFBQyw0REFBRDtBQUFVLG1CQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEaUM7QUFBQSxPQUF6QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVVFO0FBQUEsZ0JBQUliO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLGVBV0U7QUFBQSw2QkFDTCw4REFBQyxpRUFBRDtBQUFVLGdCQUFRLEVBQUVELEtBQXBCO0FBQTJCLGdCQUFRLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixFQWNHUyxRQUFRLGlCQUNQO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUMsaUNBQVQ7QUFBMkMsV0FBRyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkosZUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBN0JRWixPOztLQUFBQSxPO0FBK0JULCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI0NmVkZjg5ZWU4MmMwNThlYWJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIlxyXG5cclxuY29uc3QgTUFYX1JBVElORyA9NTtcclxuY29uc3QgTUlOX1JBVElORyA9IDE7XHJcbmZ1bmN0aW9uIFByb2R1Y3QoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pIHtcclxuICAgIGNvbnN0IFtyYXRpbmddID0gdXNlU3RhdGUoXHJcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICooTUFYX1JBVElORyAtIE1JTl9SQVRJTkcgKyAxKSkgKyBNSU5fUkFUSU5HXHJcbiAgICApO1xyXG4gICAgY29uc3QgW2hhc1ByaW1lXSA9IHVzZVN0YXRlKE1hdGgucmFuZG9tKCkgPCAwLjUpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPntjYXRlZ29yeX08L3A+XHJcbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XHJcbiAgICAgIDxoND57dGl0bGV9PC9oND5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAge0FycmF5KHJhdGluZykuZmlsbCgpLm1hcCgoXywgaSkgPT4gKFxyXG4gPFN0YXJJY29uIGNsYXNzTmFtZT1cImgtNVwiIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8ZGl2PlxyXG4gPEN1cnJlbmN5IHF1YW50aXR5PXtwcmljZX0gY3VycmVuY3k9XCJHQlBcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aGFzUHJpbWUgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mZHdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPHA+RlJFRSBOZXh0LWRheSBEZWxpdmVyeTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGJ1dHRvbj5BZGQgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9