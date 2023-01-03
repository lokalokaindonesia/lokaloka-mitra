(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/store */ "./redux/store.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\lokaloka-mitra\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_auth_client__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    session: pageProps.session,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {
      store: _redux_store__WEBPACK_IMPORTED_MODULE_2__.store,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./redux/requestOrder/requestedOrderSlice.js":
/*!***************************************************!*\
  !*** ./redux/requestOrder/requestedOrderSlice.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestedOrder": () => (/* binding */ requestedOrder),
/* harmony export */   "setRequestedOrder": () => (/* binding */ setRequestedOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  value: []
};
const requestedOrder = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'requestedOrder',
  initialState,
  reducers: {
    setRequestedOrder: (state, action) => {
      state.value = action.payload;
    }
  }
}); // Action creators are generated for each case reducer function

const {
  setRequestedOrder
} = requestedOrder.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestedOrder.reducer);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _requestOrder_requestedOrderSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestOrder/requestedOrderSlice */ "./redux/requestOrder/requestedOrderSlice.js");
/* harmony import */ var _tempRequestOrder_tempRequestedOrderSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tempRequestOrder/tempRequestedOrderSlice */ "./redux/tempRequestOrder/tempRequestedOrderSlice.js");



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    requestedOrder: _requestOrder_requestedOrderSlice__WEBPACK_IMPORTED_MODULE_1__.default,
    tempRequestedOrder: _tempRequestOrder_tempRequestedOrderSlice__WEBPACK_IMPORTED_MODULE_2__.default
  }
});

/***/ }),

/***/ "./redux/tempRequestOrder/tempRequestedOrderSlice.js":
/*!***********************************************************!*\
  !*** ./redux/tempRequestOrder/tempRequestedOrderSlice.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tempRequestedOrder": () => (/* binding */ tempRequestedOrder),
/* harmony export */   "setTempRequestedOrder": () => (/* binding */ setTempRequestedOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  value: []
};
const tempRequestedOrder = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'tempRequestedOrder',
  initialState,
  reducers: {
    setTempRequestedOrder: (state, action) => {
      state.value = action.payload;
    }
  }
}); // Action creators are generated for each case reducer function

const {
  setTempRequestedOrder
} = tempRequestedOrder.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tempRequestedOrder.reducer);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNHLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFBTyw4REFBQyxzREFBRDtBQUFVLFdBQU8sRUFBRUEsU0FBUyxDQUFDQyxPQUE3QjtBQUFBLDJCQUNMLDhEQUFDLGlEQUFEO0FBQWUsV0FBSyxFQUFFSiwrQ0FBdEI7QUFBQSw2QkFDRSw4REFBQyxTQUFELG9CQUFlRyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBS0Q7O0FBRUQsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVBLE1BQU1LLFlBQVksR0FBRztBQUNqQkMsRUFBQUEsS0FBSyxFQUFFO0FBRFUsQ0FBckI7QUFJTyxNQUFNQyxjQUFjLEdBQUdILDZEQUFXLENBQUM7QUFDdENJLEVBQUFBLElBQUksRUFBRSxnQkFEZ0M7QUFFdENILEVBQUFBLFlBRnNDO0FBR3RDSSxFQUFBQSxRQUFRLEVBQUU7QUFDTkMsSUFBQUEsaUJBQWlCLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2xDRCxNQUFBQSxLQUFLLENBQUNMLEtBQU4sR0FBY00sTUFBTSxDQUFDQyxPQUFyQjtBQUNIO0FBSEs7QUFINEIsQ0FBRCxDQUFsQyxFQVVQOztBQUNPLE1BQU07QUFBRUgsRUFBQUE7QUFBRixJQUF3QkgsY0FBYyxDQUFDTyxPQUE3QztBQUVQLGlFQUFlUCxjQUFjLENBQUNRLE9BQTlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUVPLE1BQU1oQixLQUFLLEdBQUdpQixnRUFBYyxDQUFDO0FBQ2hDRCxFQUFBQSxPQUFPLEVBQUU7QUFDTFIsSUFBQUEsY0FBYyxFQUFFVSxzRUFEWDtBQUVMRSxJQUFBQSxrQkFBa0IsRUFBRUQsOEVBQXVCQTtBQUZ0QztBQUR1QixDQUFELENBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlA7QUFFQSxNQUFNYixZQUFZLEdBQUc7QUFDakJDLEVBQUFBLEtBQUssRUFBRTtBQURVLENBQXJCO0FBSU8sTUFBTWEsa0JBQWtCLEdBQUdmLDZEQUFXLENBQUM7QUFDMUNJLEVBQUFBLElBQUksRUFBRSxvQkFEb0M7QUFFMUNILEVBQUFBLFlBRjBDO0FBRzFDSSxFQUFBQSxRQUFRLEVBQUU7QUFDTlcsSUFBQUEscUJBQXFCLEVBQUUsQ0FBQ1QsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3RDRCxNQUFBQSxLQUFLLENBQUNMLEtBQU4sR0FBY00sTUFBTSxDQUFDQyxPQUFyQjtBQUNIO0FBSEs7QUFIZ0MsQ0FBRCxDQUF0QyxFQVVQOztBQUNPLE1BQU07QUFBRU8sRUFBQUE7QUFBRixJQUE0QkQsa0JBQWtCLENBQUNMLE9BQXJEO0FBRVAsaUVBQWVLLGtCQUFrQixDQUFDSixPQUFsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFbkJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL3JlZHV4L3JlcXVlc3RPcmRlci9yZXF1ZXN0ZWRPcmRlclNsaWNlLmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0Ly4vcmVkdXgvdGVtcFJlcXVlc3RPcmRlci90ZW1wUmVxdWVzdGVkT3JkZXJTbGljZS5qcyIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0Ly4vc3R5bGVzL2dsb2JhbHMuY3NzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgYXMgUmVkdXhQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQC9yZWR1eC9zdG9yZSdcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPFByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cclxuICAgIDxSZWR1eFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvUmVkdXhQcm92aWRlcj5cclxuICA8L1Byb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB2YWx1ZTogW10sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0ZWRPcmRlciA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdyZXF1ZXN0ZWRPcmRlcicsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldFJlcXVlc3RlZE9yZGVyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pXHJcblxyXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cclxuZXhwb3J0IGNvbnN0IHsgc2V0UmVxdWVzdGVkT3JkZXIgfSA9IHJlcXVlc3RlZE9yZGVyLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RlZE9yZGVyLnJlZHVjZXIiLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCByZXF1ZXN0ZWRPcmRlclNsaWNlIGZyb20gJy4vcmVxdWVzdE9yZGVyL3JlcXVlc3RlZE9yZGVyU2xpY2UnXHJcbmltcG9ydCB0ZW1wUmVxdWVzdGVkT3JkZXJTbGljZSBmcm9tICcuL3RlbXBSZXF1ZXN0T3JkZXIvdGVtcFJlcXVlc3RlZE9yZGVyU2xpY2UnXHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgICAgcmVxdWVzdGVkT3JkZXI6IHJlcXVlc3RlZE9yZGVyU2xpY2UsXHJcbiAgICAgICAgdGVtcFJlcXVlc3RlZE9yZGVyOiB0ZW1wUmVxdWVzdGVkT3JkZXJTbGljZSxcclxuICAgIH0sXHJcbn0pIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdmFsdWU6IFtdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGVtcFJlcXVlc3RlZE9yZGVyID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3RlbXBSZXF1ZXN0ZWRPcmRlcicsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldFRlbXBSZXF1ZXN0ZWRPcmRlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudmFsdWUgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KVxyXG5cclxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXHJcbmV4cG9ydCBjb25zdCB7IHNldFRlbXBSZXF1ZXN0ZWRPcmRlciB9ID0gdGVtcFJlcXVlc3RlZE9yZGVyLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlbXBSZXF1ZXN0ZWRPcmRlci5yZWR1Y2VyIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJSZWR1eFByb3ZpZGVyIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwicmVxdWVzdGVkT3JkZXIiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRSZXF1ZXN0ZWRPcmRlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiY29uZmlndXJlU3RvcmUiLCJyZXF1ZXN0ZWRPcmRlclNsaWNlIiwidGVtcFJlcXVlc3RlZE9yZGVyU2xpY2UiLCJ0ZW1wUmVxdWVzdGVkT3JkZXIiLCJzZXRUZW1wUmVxdWVzdGVkT3JkZXIiXSwic291cmNlUm9vdCI6IiJ9