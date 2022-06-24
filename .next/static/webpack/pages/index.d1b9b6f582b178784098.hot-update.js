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
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
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
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhdGluZyIsImhhc1ByaW1lIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUUsQ0FBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsQ0FBbkI7O0FBQ0EsU0FBU0MsT0FBVCxPQUFxRTtBQUFBOztBQUFBOztBQUFBLE1BQWxEQyxFQUFrRCxRQUFsREEsRUFBa0Q7QUFBQSxNQUE5Q0MsS0FBOEMsUUFBOUNBLEtBQThDO0FBQUEsTUFBdkNDLEtBQXVDLFFBQXZDQSxLQUF1QztBQUFBLE1BQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7QUFBQSxNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1CO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNoREMsK0NBQVEsQ0FDckJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBZ0JaLFVBQVUsR0FBR0MsVUFBYixHQUEwQixDQUExQyxDQUFYLElBQTJEQSxVQUR0QyxDQUR3QztBQUFBLE1BQzFEWSxNQUQwRDs7QUFBQSxtQkFJOUNKLCtDQUFRLENBQUNDLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUFqQixDQUpzQztBQUFBLE1BSTFERSxRQUowRDs7QUFLbkUsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLGdCQUFJUDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFQyxLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsZ0JBQUtKO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLGdCQUNHVyxLQUFLLENBQUNGLE1BQUQsQ0FBTCxDQUFjRyxJQUFkLEdBQXFCQyxHQUFyQixDQUF5QixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSw0QkFDakMsOERBQUMsNERBQUQ7QUFBVSxtQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlDO0FBQUEsT0FBekI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFVRTtBQUFBLGdCQUFJYjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7R0F0QlFKLE87O0tBQUFBLE87QUF3QlQsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDFiOWI2ZjU4MmIxNzg3ODQwOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IE1BWF9SQVRJTkcgPTU7XHJcbmNvbnN0IE1JTl9SQVRJTkcgPSAxO1xyXG5mdW5jdGlvbiBQcm9kdWN0KHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSB7XHJcbiAgICBjb25zdCBbcmF0aW5nXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkpICsgTUlOX1JBVElOR1xyXG4gICAgKTtcclxuICAgIGNvbnN0IFtoYXNQcmltZV0gPSB1c2VTdGF0ZShNYXRoLnJhbmRvbSgpIDwgMC41KVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD57Y2F0ZWdvcnl9PC9wPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxyXG4gICAgICA8aDQ+e3RpdGxlfTwvaDQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIHtBcnJheShyYXRpbmcpLmZpbGwoKS5tYXAoKF8sIGkpID0+IChcclxuIDxTdGFySWNvbiBjbGFzc05hbWU9XCJoLTVcIiAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGRpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==