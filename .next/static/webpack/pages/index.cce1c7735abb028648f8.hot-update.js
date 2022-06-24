self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ "./src/components/Product.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\New folder\\Amazon-starter-template-nextjs\\src\\components\\ProductFeed.js";



function ProductFeed(_ref) {
  var _this = this;

  var products = _ref.products;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto",
    children: [products.slice(0, 4).map(function (_ref2) {
      var id = _ref2.id,
          title = _ref2.title,
          price = _ref2.price,
          description = _ref2.description,
          category = _ref2.category,
          image = _ref2.image;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
        ket: id,
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "md:col-span-full",
      src: "https://links.papareact.com/dyz",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "",
      children: products.slice(4, 5).map(function (_ref3) {
        var id = _ref3.id,
            title = _ref3.title,
            price = _ref3.price,
            description = _ref3.description,
            category = _ref3.category,
            image = _ref3.image;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
          ket: id,
          id: id,
          title: title,
          price: price,
          description: description,
          category: category,
          image: image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = ProductFeed;
/* harmony default export */ __webpack_exports__["default"] = (ProductFeed);

var _c;

$RefreshReg$(_c, "ProductFeed");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanMiXSwibmFtZXMiOlsiUHJvZHVjdEZlZWQiLCJwcm9kdWN0cyIsInNsaWNlIiwibWFwIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDakMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUZBQWY7QUFBQSxlQUNHQSxRQUFRLENBQ05DLEtBREYsQ0FDUSxDQURSLEVBQ1csQ0FEWCxFQUVFQyxHQUZGLENBRU07QUFBQSxVQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxVQUFPQyxLQUFQLFNBQU9BLEtBQVA7QUFBQSxVQUFjQyxLQUFkLFNBQWNBLEtBQWQ7QUFBQSxVQUFxQkMsV0FBckIsU0FBcUJBLFdBQXJCO0FBQUEsVUFBa0NDLFFBQWxDLFNBQWtDQSxRQUFsQztBQUFBLFVBQTRDQyxLQUE1QyxTQUE0Q0EsS0FBNUM7QUFBQSwwQkFDSCw4REFBQyw2Q0FBRDtBQUNFLFdBQUcsRUFBRUwsRUFEUDtBQUVFLFVBQUUsRUFBRUEsRUFGTjtBQUdFLGFBQUssRUFBRUMsS0FIVDtBQUlFLGFBQUssRUFBRUMsS0FKVDtBQUtFLG1CQUFXLEVBQUVDLFdBTGY7QUFNRSxnQkFBUSxFQUFFQyxRQU5aO0FBT0UsYUFBSyxFQUFFQztBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERztBQUFBLEtBRk4sQ0FESCxlQWNFO0FBQ0UsZUFBUyxFQUFDLGtCQURaO0FBRUUsU0FBRyxFQUFDLGlDQUZOO0FBR0UsU0FBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLGVBbUJFO0FBQUssZUFBUyxFQUFDLEVBQWY7QUFBQSxnQkFDR1IsUUFBUSxDQUNOQyxLQURGLENBQ1EsQ0FEUixFQUNXLENBRFgsRUFFRUMsR0FGRixDQUVNO0FBQUEsWUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsWUFBT0MsS0FBUCxTQUFPQSxLQUFQO0FBQUEsWUFBY0MsS0FBZCxTQUFjQSxLQUFkO0FBQUEsWUFBcUJDLFdBQXJCLFNBQXFCQSxXQUFyQjtBQUFBLFlBQWtDQyxRQUFsQyxTQUFrQ0EsUUFBbEM7QUFBQSxZQUE0Q0MsS0FBNUMsU0FBNENBLEtBQTVDO0FBQUEsNEJBQ0gsOERBQUMsNkNBQUQ7QUFDRSxhQUFHLEVBQUVMLEVBRFA7QUFFRSxZQUFFLEVBQUVBLEVBRk47QUFHRSxlQUFLLEVBQUVDLEtBSFQ7QUFJRSxlQUFLLEVBQUVDLEtBSlQ7QUFLRSxxQkFBVyxFQUFFQyxXQUxmO0FBTUUsa0JBQVEsRUFBRUMsUUFOWjtBQU9FLGVBQUssRUFBRUM7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHO0FBQUEsT0FGTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQ0Q7O0tBdENRVCxXO0FBd0NULCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNjZTFjNzczNWFiYjAyODY0OGY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3RcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RGZWVkKHsgcHJvZHVjdHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvdy1kZW5zZSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBtZDotbXQtNTIgbXgtYXV0b1wiPlxyXG4gICAgICB7cHJvZHVjdHNcclxuICAgICAgICAuc2xpY2UoMCwgNClcclxuICAgICAgICAubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4gKFxyXG4gICAgICAgICAgPFByb2R1Y3RcclxuICAgICAgICAgICAga2V0PXtpZH1cclxuICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgIHByaWNlPXtwcmljZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi1mdWxsXCJcclxuICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZHl6XCJcclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIHtwcm9kdWN0c1xyXG4gICAgICAgICAgLnNsaWNlKDQsIDUpXHJcbiAgICAgICAgICAubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4gKFxyXG4gICAgICAgICAgICA8UHJvZHVjdFxyXG4gICAgICAgICAgICAgIGtldD17aWR9XHJcbiAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICBwcmljZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RmVlZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==