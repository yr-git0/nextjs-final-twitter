"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/explore",{

/***/ "./components/layout/sidemenu.tsx":
/*!****************************************!*\
  !*** ./components/layout/sidemenu.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction SideMenu() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-56 bg-blue-300 p-5 flex flex-col justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/explore\",\n                        children: \"Explore\"\n                    }, void 0, false, {\n                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/notifications\",\n                        children: \"Notifications\"\n                    }, void 0, false, {\n                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/messages\",\n                        children: \"Messages\"\n                    }, void 0, false, {\n                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/bookmarks\",\n                        children: \"Bookmarks\"\n                    }, void 0, false, {\n                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/lists\",\n                        children: \"Lists\"\n                    }, void 0, false, {\n                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/Profile\",\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/more\",\n                        children: \"More\"\n                    }, void 0, false, {\n                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full bg-[#1DA1F2] text-white text-sm py-2 rounded-full mt-3\",\n                        children: \"Tweet\"\n                    }, void 0, false, {\n                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/images/\\uB9DD\\uACE0.png\",\n                                width: 40,\n                                height: 40,\n                                className: \"bg-white rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-sm font-bold\",\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-xs -mt-1 font-bold text-gray-500\",\n                                        children: \"@id\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold text-xl cursor-pointer\",\n                        children: \"\\xb7\\xb7\\xb7\"\n                    }, void 0, false, {\n                        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pyr/nextjs-final-twitter/components/layout/sidemenu.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\n_c = SideMenu;\nvar _c;\n$RefreshReg$(_c, \"SideMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9zaWRlbWVudS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ0Y7QUFFZCxTQUFTRSxRQUFRLEdBQUc7SUFDakMscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG9EQUFvRDs7MEJBQ2pFLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMscUJBQXFCOztrQ0FDbEMsOERBQUNILGtEQUFJO3dCQUFDSSxJQUFJLEVBQUMsR0FBRztrQ0FBQyxNQUFJOzs7Ozs0QkFBTztrQ0FDMUIsOERBQUNKLGtEQUFJO3dCQUFDSSxJQUFJLEVBQUMsVUFBVTtrQ0FBQyxTQUFPOzs7Ozs0QkFBTztrQ0FDcEMsOERBQUNKLGtEQUFJO3dCQUFDSSxJQUFJLEVBQUMsZ0JBQWdCO2tDQUFDLGVBQWE7Ozs7OzRCQUFPO2tDQUNoRCw4REFBQ0osa0RBQUk7d0JBQUNJLElBQUksRUFBQyxXQUFXO2tDQUFDLFVBQVE7Ozs7OzRCQUFPO2tDQUN0Qyw4REFBQ0osa0RBQUk7d0JBQUNJLElBQUksRUFBQyxZQUFZO2tDQUFDLFdBQVM7Ozs7OzRCQUFPO2tDQUN4Qyw4REFBQ0osa0RBQUk7d0JBQUNJLElBQUksRUFBQyxRQUFRO2tDQUFDLE9BQUs7Ozs7OzRCQUFPO2tDQUNoQyw4REFBQ0osa0RBQUk7d0JBQUNJLElBQUksRUFBQyxVQUFVO2tDQUFDLFNBQU87Ozs7OzRCQUFPO2tDQUNwQyw4REFBQ0osa0RBQUk7d0JBQUNJLElBQUksRUFBQyxPQUFPO2tDQUFDLE1BQUk7Ozs7OzRCQUFPO2tDQUM5Qiw4REFBQ0MsUUFBTTt3QkFBQ0YsU0FBUyxFQUFDLCtEQUErRDtrQ0FBQyxPQUVsRjs7Ozs7NEJBQVM7Ozs7OztvQkFDTDswQkFDTiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLG1DQUFtQzs7a0NBQ2hELDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMseUJBQXlCOzswQ0FDdEMsOERBQUNKLG1EQUFLO2dDQUNKTyxHQUFHLEVBQUMsMEJBQWdCO2dDQUNoQkMsS0FBQyxFQUFFLEVBQUU7Z0NBQ1RDLE1BQU0sRUFBRSxFQUFFO2dDQUNWTCxTQUFTLEVBQUMsdUJBQXVCOzs7OztvQ0FDakM7MENBQ0YsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxlQUFlOztrREFDNUIsOERBQUNNLE1BQUk7d0NBQUNOLFNBQVMsRUFBQyxtQkFBbUI7a0RBQUMsTUFBSTs7Ozs7NENBQU87a0RBQy9DLDhEQUFDTSxNQUFJO3dDQUFDTixTQUFTLEVBQUMsdUNBQXVDO2tEQUFDLEtBQUc7Ozs7OzRDQUFPOzs7Ozs7b0NBQzlEOzs7Ozs7NEJBQ0Y7a0NBQ04sOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7a0NBQUMsY0FBRzs7Ozs7NEJBQU07Ozs7OztvQkFDdkQ7Ozs7OztZQUNGLENBQ047Q0FDSDtBQWpDdUJGLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZW1lbnUudHN4P2RiMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVNZW51KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy01NiBiZy1ibHVlLTMwMCBwLTUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZXhwbG9yZVwiPkV4cGxvcmU8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbm90aWZpY2F0aW9uc1wiPk5vdGlmaWNhdGlvbnM8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbWVzc2FnZXNcIj5NZXNzYWdlczwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9ib29rbWFya3NcIj5Cb29rbWFya3M8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbGlzdHNcIj5MaXN0czwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9Qcm9maWxlXCI+UHJvZmlsZTwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9tb3JlXCI+TW9yZTwvTGluaz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyMxREExRjJdIHRleHQtd2hpdGUgdGV4dC1zbSBweS0yIHJvdW5kZWQtZnVsbCBtdC0zXCI+XG4gICAgICAgICAgVHdlZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMv66ed6rOgLnBuZ1wiXG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGRcIj5OYW1lPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyAtbXQtMSBmb250LWJvbGQgdGV4dC1ncmF5LTUwMFwiPkBpZDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgY3Vyc29yLXBvaW50ZXJcIj7Ct8K3wrc8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIlNpZGVNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImJ1dHRvbiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/sidemenu.tsx\n");

/***/ })

});