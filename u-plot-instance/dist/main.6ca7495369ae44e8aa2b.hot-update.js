webpackHotUpdate("main",{

/***/ "./src/components/NotFound/NotFound.tsx":
/*!**********************************************!*\
  !*** ./src/components/NotFound/NotFound.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "error"
  }, "Could not find the requested page. Are you sure it exists?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Go back ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "to the dashboard"), "."));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/components/NotFound/index.ts":
/*!******************************************!*\
  !*** ./src/components/NotFound/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound */ "./src/components/NotFound/NotFound.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_NotFound__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/layout.tsx":
/*!************************!*\
  !*** ./src/layout.tsx ***!
  \************************/
/*! exports provided: errors, layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NotFound */ "./src/components/NotFound/index.ts");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ "./src/components/App/index.ts");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navigation */ "./src/components/Navigation/index.ts");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _components_ErrorInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ErrorInfo */ "./src/components/ErrorInfo/index.ts");
/* harmony import */ var _components_Tile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Tile */ "./src/components/Tile/index.ts");
/* harmony import */ var _components_Host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Host */ "./src/components/Host/index.ts");
/* harmony import */ var _components_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Toast/Toast */ "./src/components/Toast/Toast.tsx");








var errors = {
  not_found: _components_NotFound__WEBPACK_IMPORTED_MODULE_0__["default"]
};
var layout = {
  ErrorInfo: _components_ErrorInfo__WEBPACK_IMPORTED_MODULE_4__["default"],
  DashboardContainer: _components_Container__WEBPACK_IMPORTED_MODULE_3__["default"],
  DashboardTile: _components_Tile__WEBPACK_IMPORTED_MODULE_5__["default"],
  Layout: _components_App__WEBPACK_IMPORTED_MODULE_1__["default"],
  MenuContainer: _components_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"],
  MenuItem: _components_Navigation__WEBPACK_IMPORTED_MODULE_2__["MenuItem"],
  NotificationsHost: _components_Host__WEBPACK_IMPORTED_MODULE_6__["default"],
  NotificationsToast: _components_Toast_Toast__WEBPACK_IMPORTED_MODULE_7__["default"]
};

/***/ })

})
//# sourceMappingURL=main.6ca7495369ae44e8aa2b.hot-update.js.map