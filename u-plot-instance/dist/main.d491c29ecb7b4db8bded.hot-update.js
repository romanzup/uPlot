webpackHotUpdate("main",{

/***/ "./src/components/ErrorInfo/ErrorInfo.tsx":
/*!************************************************!*\
  !*** ./src/components/ErrorInfo/ErrorInfo.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");



var ErrorInfo = function ErrorInfo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](piral__WEBPACK_IMPORTED_MODULE_1__["SwitchErrorInfo"], Object.assign({}, props)));
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorInfo);

/***/ }),

/***/ "./src/components/ErrorInfo/index.ts":
/*!*******************************************!*\
  !*** ./src/components/ErrorInfo/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorInfo */ "./src/components/ErrorInfo/ErrorInfo.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_ErrorInfo__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
  DashboardTile: function DashboardTile(_ref) {
    var columns = _ref.columns,
        rows = _ref.rows,
        children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "tile cols-".concat(columns, " rows-").concat(rows)
    }, children);
  },
  Layout: _components_App__WEBPACK_IMPORTED_MODULE_2__["default"],
  MenuContainer: _components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"],
  MenuItem: _components_Navigation__WEBPACK_IMPORTED_MODULE_3__["MenuItem"],
  NotificationsHost: function NotificationsHost(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "notifications"
    }, children);
  },
  NotificationsToast: function NotificationsToast(_ref3) {
    var options = _ref3.options,
        onClose = _ref3.onClose,
        children = _ref3.children;
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
//# sourceMappingURL=main.d491c29ecb7b4db8bded.hot-update.js.map