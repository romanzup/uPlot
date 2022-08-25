webpackHotUpdate("main",{

/***/ "./src/components/Host/Host.tsx":
/*!**************************************!*\
  !*** ./src/components/Host/Host.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Host = function Host(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "notifications"
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Host);

/***/ }),

/***/ "./src/components/Host/index.ts":
/*!**************************************!*\
  !*** ./src/components/Host/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Host */ "./src/components/Host/Host.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_Host__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App/index.ts");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navigation */ "./src/components/Navigation/index.ts");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Container */ "./src/components/Container/index.ts");
/* harmony import */ var _components_ErrorInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ErrorInfo */ "./src/components/ErrorInfo/index.ts");
/* harmony import */ var _components_Tile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Tile */ "./src/components/Tile/index.ts");
/* harmony import */ var _components_Host__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Host */ "./src/components/Host/index.ts");








var errors = {
  not_found: function not_found() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      className: "error"
    }, "Could not find the requested page. Are you sure it exists?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Go back ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/"
    }, "to the dashboard"), "."));
  }
};
var layout = {
  ErrorInfo: _components_ErrorInfo__WEBPACK_IMPORTED_MODULE_5__["default"],
  DashboardContainer: _components_Container__WEBPACK_IMPORTED_MODULE_4__["default"],
  DashboardTile: _components_Tile__WEBPACK_IMPORTED_MODULE_6__["default"],
  Layout: _components_App__WEBPACK_IMPORTED_MODULE_2__["default"],
  MenuContainer: _components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"],
  MenuItem: _components_Navigation__WEBPACK_IMPORTED_MODULE_3__["MenuItem"],
  NotificationsHost: _components_Host__WEBPACK_IMPORTED_MODULE_7__["default"],
  NotificationsToast: function NotificationsToast(_ref) {
    var options = _ref.options,
        onClose = _ref.onClose,
        children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "notification-toast ".concat(options.type)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "notification-toast-details"
    }, options.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "notification-toast-title"
    }, options.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "notification-toast-description"
    }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "notification-toast-close",
      onClick: onClose
    }));
  }
};

/***/ })

})
//# sourceMappingURL=main.9b13157ceccafff6dd85.hot-update.js.map