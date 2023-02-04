"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./src/pages/api/index.ts":
/*!********************************!*\
  !*** ./src/pages/api/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_http_proxy_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-http-proxy-middleware */ \"next-http-proxy-middleware\");\n/* harmony import */ var next_http_proxy_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_http_proxy_middleware__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    const { accessToken  } = await (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.getAccessToken)(req, res);\n    return next_http_proxy_middleware__WEBPACK_IMPORTED_MODULE_1___default()(req, res, {\n        target: \"http://localhost:3332/graphql\",\n        headers: {\n            \"Authorization\": `Bearer ${accessToken}`\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxRDtBQUNRO0FBR3RELE1BQU1FLE1BQU0sR0FBRztJQUNsQkMsR0FBRyxFQUFFO1FBQ0hDLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0NBQ0o7QUFFYyxlQUFlQyxPQUFPLENBQUNDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDN0UsTUFBTSxFQUFFQyxXQUFXLEdBQUUsR0FBRyxNQUFNUixtRUFBYyxDQUFDTSxHQUFHLEVBQUVDLEdBQUcsQ0FBQztJQUV0RCxPQUFPTixpRUFBbUIsQ0FBQ0ssR0FBRyxFQUFFQyxHQUFHLEVBQUU7UUFDakNFLE1BQU0sRUFBRSwrQkFBK0I7UUFDdkNDLE9BQU8sRUFBRTtZQUNMLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRUYsV0FBVyxDQUFDLENBQUM7U0FDM0M7S0FDSixDQUFDO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvcGFnZXMvYXBpL2luZGV4LnRzPzhlNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWNjZXNzVG9rZW4gfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJztcbmltcG9ydCBodHRwUHJveHlNaWRkbGV3YXJlIGZyb20gJ25leHQtaHR0cC1wcm94eS1taWRkbGV3YXJlJztcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnOyBcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGk6IHtcbiAgICAgIGJvZHlQYXJzZXI6IGZhbHNlLCAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBhY2Nlc3NUb2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4ocmVxLCByZXMpO1xuXG4gICAgcmV0dXJuIGh0dHBQcm94eU1pZGRsZXdhcmUocmVxLCByZXMsIHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMzMyL2dyYXBocWwnLCBcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgICAgfVxuICAgIH0pXG59Il0sIm5hbWVzIjpbImdldEFjY2Vzc1Rva2VuIiwiaHR0cFByb3h5TWlkZGxld2FyZSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYWNjZXNzVG9rZW4iLCJ0YXJnZXQiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/index.ts\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "next-http-proxy-middleware":
/*!*********************************************!*\
  !*** external "next-http-proxy-middleware" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-http-proxy-middleware");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/index.ts"));
module.exports = __webpack_exports__;

})();