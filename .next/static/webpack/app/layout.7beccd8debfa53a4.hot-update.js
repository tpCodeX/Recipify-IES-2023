"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/botonSignin/signinButton.tsx":
/*!*****************************************************!*\
  !*** ./src/components/botonSignin/signinButton.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n//donde muestro el usuario si tiene más de 2 estilos me da error\nfunction SigninButton() {\n    _s();\n    //para usar la sesión\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    // console.log(session?.user);\n    //si lo coloco en otro componente no me toma bien la sesión para lo que quiero mostrar si \n    //esta el usuario logueado\n    if (session && session.user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    style: {\n                        color: \"white\"\n                    },\n                    href: \"/dashboard\",\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\geron\\\\Downloads\\\\PROYECTO FINAL\\\\Recipify-IES-2023\\\\src\\\\components\\\\botonSignin\\\\signinButton.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-4 ml-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sky-600\",\n                            style: {\n                                color: \"white\"\n                            },\n                            children: session.user.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\geron\\\\Downloads\\\\PROYECTO FINAL\\\\Recipify-IES-2023\\\\src\\\\components\\\\botonSignin\\\\signinButton.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)({\n                                    callbackUrl: \"/\"\n                                }),\n                            className: \"btn btn-danger\",\n                            children: \"Cerrar Sesi\\xf3n\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\geron\\\\Downloads\\\\PROYECTO FINAL\\\\Recipify-IES-2023\\\\src\\\\components\\\\botonSignin\\\\signinButton.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 5\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\geron\\\\Downloads\\\\PROYECTO FINAL\\\\Recipify-IES-2023\\\\src\\\\components\\\\botonSignin\\\\signinButton.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(),\n        className: \"btn btn-primary\",\n        children: \"Iniciar Sesi\\xf3n\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\geron\\\\Downloads\\\\PROYECTO FINAL\\\\Recipify-IES-2023\\\\src\\\\components\\\\botonSignin\\\\signinButton.tsx\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, this);\n}\n_s(SigninButton, \"85IJaNwg2AqUdpEiQwfZNE0LFIY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = SigninButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SigninButton);\nvar _c;\n$RefreshReg$(_c, \"SigninButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2JvdG9uU2lnbmluL3NpZ25pbkJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNkQ7QUFDcEM7QUFDcUI7QUFDakI7QUFDN0IsZ0VBQWdFO0FBQ2hFLFNBQVNLOztJQUNULHFCQUFxQjtJQUNuQixNQUFNLEVBQUNDLE1BQU1DLE9BQU8sRUFBQyxHQUFFTCwyREFBVUE7SUFDakMsOEJBQThCO0lBQzlCLDBGQUEwRjtJQUMxRiwwQkFBMEI7SUFDMUIsSUFBR0ssV0FBV0EsUUFBUUMsSUFBSSxFQUFDO1FBQ3pCLHFCQUNFOzs4QkFDQSw4REFBQ0osa0RBQUlBO29CQUFDSyxPQUFPO3dCQUFDQyxPQUFPO29CQUFPO29CQUFFQyxNQUFNOzhCQUFjOzs7Ozs7OEJBQ3BELDhEQUFDQztvQkFBSUMsV0FBVTs7c0NBQ2YsOERBQUNDOzRCQUFFRCxXQUFVOzRCQUFlSixPQUFPO2dDQUFDQyxPQUFPOzRCQUFPO3NDQUFJSCxRQUFRQyxJQUFJLENBQUNPLElBQUk7Ozs7OztzQ0FDdkUsOERBQUNDOzRCQUFPQyxTQUFTLElBQUloQix3REFBT0EsQ0FBQztvQ0FBQ2lCLGFBQWE7Z0NBQUc7NEJBQUlMLFdBQVU7c0NBQWlCOzs7Ozs7Ozs7Ozs7OztJQU0vRTtJQUVBLHFCQUFPLDhEQUFDRztRQUFPQyxTQUFTLElBQUlqQix1REFBTUE7UUFBSWEsV0FBVTtrQkFBa0I7Ozs7OztBQUdwRTtHQXZCU1I7O1FBRWdCSCx1REFBVUE7OztLQUYxQkc7QUF5QlQsK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYm90b25TaWduaW4vc2lnbmluQnV0dG9uLnRzeD9jMzJiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnOyBcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLy9kb25kZSBtdWVzdHJvIGVsIHVzdWFyaW8gc2kgdGllbmUgbcOhcyBkZSAyIGVzdGlsb3MgbWUgZGEgZXJyb3JcclxuZnVuY3Rpb24gU2lnbmluQnV0dG9uKCkge1xyXG4vL3BhcmEgdXNhciBsYSBzZXNpw7NuXHJcbiAgY29uc3Qge2RhdGE6IHNlc3Npb259PSB1c2VTZXNzaW9uKClcclxuICAvLyBjb25zb2xlLmxvZyhzZXNzaW9uPy51c2VyKTtcclxuICAvL3NpIGxvIGNvbG9jbyBlbiBvdHJvIGNvbXBvbmVudGUgbm8gbWUgdG9tYSBiaWVuIGxhIHNlc2nDs24gcGFyYSBsbyBxdWUgcXVpZXJvIG1vc3RyYXIgc2kgXHJcbiAgLy9lc3RhIGVsIHVzdWFyaW8gbG9ndWVhZG9cclxuICBpZihzZXNzaW9uICYmIHNlc3Npb24udXNlcil7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8TGluayBzdHlsZT17e2NvbG9yOiAnd2hpdGUnfX1ocmVmPXtcIi9kYXNoYm9hcmRcIn0+RGFzaGJvYXJkPC9MaW5rPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTQgbWwtYXV0byc+XHJcbiAgICA8cCBjbGFzc05hbWU9J3RleHQtc2t5LTYwMCcgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwifX0+e3Nlc3Npb24udXNlci5uYW1lfTwvcD5cclxuICAgIDxidXR0b24gb25DbGljaz17KCk9PnNpZ25PdXQoe2NhbGxiYWNrVXJsOiBcIi9cIn0pfSBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyJz5cclxuICAgICAgICBDZXJyYXIgU2VzacOzblxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxidXR0b24gb25DbGljaz17KCk9PnNpZ25JbigpfSBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSc+XHJcbiAgICBJbmljaWFyIFNlc2nDs25cclxuICA8L2J1dHRvbj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmluQnV0dG9uIl0sIm5hbWVzIjpbInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiUmVhY3QiLCJMaW5rIiwiU2lnbmluQnV0dG9uIiwiZGF0YSIsInNlc3Npb24iLCJ1c2VyIiwic3R5bGUiLCJjb2xvciIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjYWxsYmFja1VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/botonSignin/signinButton.tsx\n"));

/***/ })

});