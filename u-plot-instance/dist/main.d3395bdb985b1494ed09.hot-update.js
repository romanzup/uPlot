webpackHotUpdate("main",{

/***/ "./src/components/Navigation/Navigation.tsx":
/*!**************************************************!*\
  !*** ./src/components/Navigation/Navigation.tsx ***!
  \**************************************************/
/*! exports provided: MenuItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var MenuItem = function MenuItem(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "nav-item"
  }, children);
};
var defaultMenuItems = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MenuItem, {
  type: "general",
  meta: {}
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  className: "nav-link text-dark",
  to: "/not-found"
}, "Not Found")));

var Navigation = function Navigation(_ref2) {
  var children = _ref2.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      collapsed = _React$useState2[0],
      setCollapsed = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", {
    className: "navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "navbar-brand",
    to: "/"
  }, "Piral"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    "aria-label": "Toggle navigation",
    type: "button",
    onClick: function onClick() {
      return setCollapsed(!collapsed);
    },
    className: "navbar-toggler mr-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ".concat(collapsed ? '' : 'show'),
    "aria-expanded": !collapsed
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "navbar-nav flex-grow"
  }, children, defaultMenuItems)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/components/Navigation/index.ts":
/*!********************************************!*\
  !*** ./src/components/Navigation/index.ts ***!
  \********************************************/
/*! exports provided: MenuItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation */ "./src/components/Navigation/Navigation.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _Navigation__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]; });



/* harmony default export */ __webpack_exports__["default"] = (_Navigation__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ "./src/components/App/index.ts");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Navigation */ "./src/components/Navigation/index.ts");





var defaultTiles = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
var errors = {
  not_found: function not_found() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      className: "error"
    }, "Could not find the requested page. Are you sure it exists?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Go back ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/"
    }, "to the dashboard"), "."));
  }
};
var layout = {
  ErrorInfo: function ErrorInfo(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](piral__WEBPACK_IMPORTED_MODULE_1__["SwitchErrorInfo"], Object.assign({}, props)));
  },
  DashboardContainer: function DashboardContainer(_ref) {
    var children = _ref.children;
    var mainVar = Object(piral__WEBPACK_IMPORTED_MODULE_1__["useGlobalState"])(function (m) {
      return m.mainVar;
    });
    var mainVarHandler = Object(piral__WEBPACK_IMPORTED_MODULE_1__["useAction"])('dispatchMainVar');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "The gloabl value (mainVar) is ", mainVar, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
      onClick: mainVarHandler
    }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "tiles"
    }, defaultTiles, children));
  },
  DashboardTile: function DashboardTile(_ref2) {
    var columns = _ref2.columns,
        rows = _ref2.rows,
        children = _ref2.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "tile cols-".concat(columns, " rows-").concat(rows)
    }, children);
  },
  Layout: _components_App__WEBPACK_IMPORTED_MODULE_3__["default"],
  MenuContainer: _components_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"],
  MenuItem: _components_Navigation__WEBPACK_IMPORTED_MODULE_4__["MenuItem"],
  NotificationsHost: function NotificationsHost(_ref3) {
    var children = _ref3.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "notifications"
    }, children);
  },
  NotificationsToast: function NotificationsToast(_ref4) {
    var options = _ref4.options,
        onClose = _ref4.onClose,
        children = _ref4.children;
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
//# sourceMappingURL=main.d3395bdb985b1494ed09.hot-update.js.map