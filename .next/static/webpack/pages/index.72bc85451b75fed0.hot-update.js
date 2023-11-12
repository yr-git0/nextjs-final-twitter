"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./libs/client/useUser.ts":
/*!********************************!*\
  !*** ./libs/client/useUser.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\nfunction useUser() {\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/users/me\"), data = ref.data, error = ref.error;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data && !data.ok) {\n            router.replace(\"/log-in\");\n        }\n    }, [\n        data,\n        router\n    ]);\n    return {\n        user: data === null || data === void 0 ? void 0 : data.profile,\n        isLoading: !data && !error\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2NsaWVudC91c2VVc2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUNOO0FBQ1Q7QUFFVixTQUFTRyxPQUFPLEdBQUc7SUFDaEMsSUFBd0JELEdBQXVCLEdBQXZCQSwrQ0FBTSxDQUFDLGVBQWUsQ0FBQyxFQUF2Q0UsSUFBSSxHQUFZRixHQUF1QixDQUF2Q0UsSUFBSSxFQUFFQyxLQUFLLEdBQUtILEdBQXVCLENBQWpDRyxLQUFLO0lBQ25CLElBQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUMxQkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSUcsSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQ0csRUFBRSxFQUFFO1lBQ3BCRCxNQUFNLENBQUNFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzQjtLQUNGLEVBQUU7UUFBQ0osSUFBSTtRQUFFRSxNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBRW5CLE9BQU87UUFBRUcsSUFBSSxFQUFFTCxJQUFJLGFBQUpBLElBQUksV0FBUyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLElBQUksQ0FBRU0sT0FBTztRQUFFQyxTQUFTLEVBQUUsQ0FBQ1AsSUFBSSxJQUFJLENBQUNDLEtBQUs7S0FBRSxDQUFDO0NBQzVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYnMvY2xpZW50L3VzZVVzZXIudHM/MmFkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcIi9hcGkvdXNlcnMvbWVcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICYmICFkYXRhLm9rKSB7XG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9sb2ctaW5cIik7XG4gICAgfVxuICB9LCBbZGF0YSwgcm91dGVyXSk7XG5cbiAgcmV0dXJuIHsgdXNlcjogZGF0YT8ucHJvZmlsZSwgaXNMb2FkaW5nOiAhZGF0YSAmJiAhZXJyb3IgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTV1IiLCJ1c2VVc2VyIiwiZGF0YSIsImVycm9yIiwicm91dGVyIiwib2siLCJyZXBsYWNlIiwidXNlciIsInByb2ZpbGUiLCJpc0xvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/client/useUser.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout/index.tsx\");\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/post */ \"./components/post.tsx\");\n/* harmony import */ var _components_tweet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tweet */ \"./components/tweet.tsx\");\n/* harmony import */ var _libs_client_useUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/client/useUser */ \"./libs/client/useUser.ts\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Page = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,_libs_client_useUser__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), user = ref.user, isLoading = ref.isLoading;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-sm px-3 py-2 border-b-[1px] border-gray-200\",\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/home/pyr/nextjs-final-twitter/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/pyr/nextjs-final-twitter/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 overflow-y-scroll\",\n                children: [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5\n                ].map(function(i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tweet__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, i, false, {\n                        fileName: \"/home/pyr/nextjs-final-twitter/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/home/pyr/nextjs-final-twitter/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pyr/nextjs-final-twitter/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_s(Page, \"PQCoTygNGGBleNbc51kaxaFJif8=\", false, function() {\n    return [\n        _libs_client_useUser__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Page;\nPage.getLayout = function getLayout(page) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: page\n    }, void 0, false, {\n        fileName: \"/home/pyr/nextjs-final-twitter/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBRUY7QUFDSjtBQUNFO0FBQ0s7O0FBRTdDLElBQU1LLElBQUksR0FBdUIsV0FBTTs7O0lBQ3JDLElBQTRCRCxHQUFTLEdBQVRBLGdFQUFPLEVBQUUsRUFBN0JFLElBQUksR0FBZ0JGLEdBQVMsQ0FBN0JFLElBQUksRUFBRUMsU0FBUyxHQUFLSCxHQUFTLENBQXZCRyxTQUFTO0lBRXZCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxzQkFBc0I7OzBCQUNuQyw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDREQUE0RDswQkFBQyxNQUU1RTs7Ozs7cUJBQU07MEJBQ04sOERBQUNQLHdEQUFJOzs7O3FCQUFHOzBCQUNSLDhEQUFDTSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMEJBQTBCOzBCQUN0QztBQUFDLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztBQUFFLHFCQUFDO0FBQUUscUJBQUM7aUJBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLENBQUM7eUNBQ3JCLDhEQUFDUix5REFBSyxNQUFNUSxDQUFDOzs7OzhCQUFJO2lCQUNsQixDQUFDOzs7OztxQkFDRTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBaEJLTixJQUFJOztRQUNvQkQsNERBQU87OztBQUQvQkMsS0FBQUEsSUFBSTtBQWtCVkEsSUFBSSxDQUFDTyxTQUFTLEdBQUcsU0FBU0EsU0FBUyxDQUFDQyxJQUFrQixFQUFFO0lBQ3RELHFCQUFPLDhEQUFDWiwwREFBTTtrQkFBRVksSUFBSTs7Ozs7WUFBVSxDQUFDO0NBQ2hDLENBQUM7QUFFRiwrREFBZVIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5leHRQYWdlV2l0aExheW91dCB9IGZyb20gXCIuL19hcHBcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0XCI7XG5pbXBvcnQgVHdlZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdHdlZXRcIjtcbmltcG9ydCB1c2VVc2VyIGZyb20gXCIuLi9saWJzL2NsaWVudC91c2VVc2VyXCI7XG5cbmNvbnN0IFBhZ2U6IE5leHRQYWdlV2l0aExheW91dCA9ICgpID0+IHtcbiAgY29uc3QgeyB1c2VyLCBpc0xvYWRpbmcgfSA9IHVzZVVzZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc20gcHgtMyBweS0yIGJvcmRlci1iLVsxcHhdIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICBIb21lXG4gICAgICA8L2Rpdj5cbiAgICAgIDxQb3N0IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LXNjcm9sbFwiPlxuICAgICAgICB7WzEsIDIsIDMsIDQsIDVdLm1hcCgoaSkgPT4gKFxuICAgICAgICAgIDxUd2VldCBrZXk9e2l9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QYWdlLmdldExheW91dCA9IGZ1bmN0aW9uIGdldExheW91dChwYWdlOiBSZWFjdEVsZW1lbnQpIHtcbiAgcmV0dXJuIDxMYXlvdXQ+e3BhZ2V9PC9MYXlvdXQ+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIlBvc3QiLCJUd2VldCIsInVzZVVzZXIiLCJQYWdlIiwidXNlciIsImlzTG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImkiLCJnZXRMYXlvdXQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});