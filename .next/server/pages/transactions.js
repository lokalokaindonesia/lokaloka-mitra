(() => {
var exports = {};
exports.id = "pages/transactions";
exports.ids = ["pages/transactions"];
exports.modules = {

/***/ "./components/atoms/content/Header.jsx":
/*!*********************************************!*\
  !*** ./components/atoms/content/Header.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\lokaloka-mitra\\components\\atoms\\content\\Header.jsx";


const Header = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "text-2xl font-bold",
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./components/atoms/content/SubHeader.jsx":
/*!************************************************!*\
  !*** ./components/atoms/content/SubHeader.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\lokaloka-mitra\\components\\atoms\\content\\SubHeader.jsx";


const SubHeader = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "text-sm font-bold text-blueGray-400",
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubHeader);

/***/ }),

/***/ "./components/atoms/sidebar/Divider.jsx":
/*!**********************************************!*\
  !*** ./components/atoms/sidebar/Divider.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\lokaloka-mitra\\components\\atoms\\sidebar\\Divider.jsx";


const Divider = ({
  label
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "text-xs text-blueGray-400 font-bold uppercase py-2 px-4",
    children: label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

/***/ }),

/***/ "./components/atoms/sidebar/NavItem.jsx":
/*!**********************************************!*\
  !*** ./components/atoms/sidebar/NavItem.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\lokaloka-mitra\\components\\atoms\\sidebar\\NavItem.jsx";




const NavItem = ({
  href,
  children
}) => {
  const {
    asPath
  } = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: `cursor-pointer flex justify-start items-center space-x-2 py-2.5 px-4 rounded transition duration-200 hover:bg-blueGray-700 capitalize hover:text-blueGray-50 ${asPath == href ? 'bg-blueGray-700' : ''}`,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./components/layout/Layout.jsx":
/*!**************************************!*\
  !*** ./components/layout/Layout.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var _atoms_sidebar_Divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../atoms/sidebar/Divider */ "./components/atoms/sidebar/Divider.jsx");
/* harmony import */ var _atoms_sidebar_NavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/sidebar/NavItem */ "./components/atoms/sidebar/NavItem.jsx");
/* harmony import */ var _molecules_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/sidebar/Sidebar */ "./components/molecules/sidebar/Sidebar.jsx");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/script */ "next/script");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\lokaloka-mitra\\components\\layout\\Layout.jsx";










const Layout = ({
  children
}) => {
  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "layout",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: "Mitra x Lokaloka | Admin Panel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("meta", {
        name: "description",
        content: "Admin panel for Mitra"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_molecules_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_sidebar_Divider__WEBPACK_IMPORTED_MODULE_0__.default, {
        label: "orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_atoms_sidebar_NavItem__WEBPACK_IMPORTED_MODULE_1__.default, {
        href: "/transactions",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiBadgeCheck, {
          className: "w-5 h-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
          children: "Transactions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "flex-1 py-8 px-10 bg-blueGray-800 max-h-screen h-screen overflow-y-auto",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./components/molecules/sidebar/Sidebar.jsx":
/*!**************************************************!*\
  !*** ./components/molecules/sidebar/Sidebar.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\lokaloka-mitra\\components\\molecules\\sidebar\\Sidebar.jsx";



const Sidebar = ({
  children
}) => {
  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.useSession)();

  const logoutHandler = () => {
    if (session) {
      return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.signOut)({
        redirect: true,
        callbackUrl: process.env.NEXTAUTH_URL
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "sidebar",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        href: "#",
        className: "text-white flex items-center space-x-2 px-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
          className: "w-8 h-8",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "text-2xl font-extrabold",
          children: "Lokaloka"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("nav", {
        className: "flex flex-col space-y-1",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      className: "px-4 py-2 rounded cursor-pointer bg-red-500 w-full",
      onClick: () => logoutHandler(),
      children: "Logout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/transactions/index.jsx":
/*!**************************************!*\
  !*** ./pages/transactions/index.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_atoms_content_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/atoms/content/Header */ "./components/atoms/content/Header.jsx");
/* harmony import */ var _components_atoms_content_SubHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/atoms/content/SubHeader */ "./components/atoms/content/SubHeader.jsx");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout/Layout */ "./components/layout/Layout.jsx");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\lokaloka-mitra\\pages\\transactions\\index.jsx";










const index = ({
  transactions
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
        children: "Arumanis x Lokaloka | Admin Panel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("meta", {
        name: "description",
        content: "Admin panel for Arumanis"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "flex flex-col space-y-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_atoms_content_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
        title: "Transactions"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_atoms_content_SubHeader__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: "All orders that delivered to customers"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), (transactions === null || transactions === void 0 ? void 0 : transactions.length) == 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "w-full text-lg text-center border border-dashed border-blueGray-100 p-8 rounded h-full font-bold",
        children: "No Transaction"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined), (transactions === null || transactions === void 0 ? void 0 : transactions.length) != 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "shadow overflow-hidden border-b border-blueGray-700 sm:rounded",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("table", {
                className: "min-w-full divide-y divide-blueGray-700",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("thead", {
                  className: "bg-blueGray-900",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                      scope: "col",
                      className: "cursor-pointer px-6 py-3 text-left text-xs font-medium text-blueGray-400 uppercase tracking-wider",
                      children: "Transaction Code"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                      scope: "col",
                      className: "px-6 py-3 text-left text-xs font-medium text-blueGray-400 uppercase tracking-wider",
                      children: "Customer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 40,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                      scope: "col",
                      className: "px-6 py-3 text-left text-xs font-medium text-blueGray-400 uppercase tracking-wider",
                      children: "Total"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                      scope: "col",
                      className: "px-6 py-3 text-left text-xs font-medium text-blueGray-400 uppercase tracking-wider",
                      children: "Payment Method"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                      scope: "col",
                      className: "px-6 py-3 text-left text-xs font-medium text-blueGray-400 uppercase tracking-wider",
                      children: "Status"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tbody", {
                  className: "bg-blueGray-900 divide-y divide-blueGray-700",
                  children: transactions === null || transactions === void 0 ? void 0 : transactions.map((t, i) => {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                        className: "px-6 py-4 whitespace-nowrap",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                          className: "text-sm text-blueGray-200",
                          children: t.code
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 71,
                          columnNumber: 31
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                        className: "px-6 py-4 whitespace-nowrap",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                          className: "text-sm font-medium text-blueGray-200",
                          children: t.user.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 76,
                          columnNumber: 31
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                          className: "text-sm text-blueGray-400",
                          children: t.user.email
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 79,
                          columnNumber: 31
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                        className: "px-6 py-4 whitespace-nowrap",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                          className: "text-sm text-blueGray-200",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react_number_format__WEBPACK_IMPORTED_MODULE_6___default()), {
                            value: t.shouldPayAmount,
                            displayType: "text",
                            thousandSeparator: true,
                            prefix: "Rp. "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 85,
                            columnNumber: 33
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 84,
                          columnNumber: 31
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                        className: "px-6 py-4 whitespace-nowrap",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                          className: "text-sm text-blueGray-400",
                          children: t.paymentMethod.replace("ID_", "")
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 94,
                          columnNumber: 31
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                        className: "px-6 py-4 whitespace-nowrap text-sm text-blueGray-400",
                        children: t.paymentStatus
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 29
                      }, undefined)]
                    }, i, true, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 27
                    }, undefined);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

const getServerSideProps = async context => {
  var _session$user;

  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.getSession)(context);
  const {
    data: getUser
  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${"https://seal-app-92qnm.ondigitalocean.app"}/users?email=${session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email}`, {
    headers: {
      Authorization: `Bearer ${session.jwt}`
    }
  });
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${"https://seal-app-92qnm.ondigitalocean.app"}/transactions?_sort=createdAt:asc&coupon.code=${getUser[0].coupons[0].code}`, {
    headers: {
      Authorization: `Bearer ${session.jwt}`
    }
  });
  return {
    props: {
      transactions: data
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-icons/hi/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/hi/index.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiAcademicCap": () => (/* binding */ HiAcademicCap),
/* harmony export */   "HiAdjustments": () => (/* binding */ HiAdjustments),
/* harmony export */   "HiAnnotation": () => (/* binding */ HiAnnotation),
/* harmony export */   "HiArchive": () => (/* binding */ HiArchive),
/* harmony export */   "HiArrowCircleDown": () => (/* binding */ HiArrowCircleDown),
/* harmony export */   "HiArrowCircleLeft": () => (/* binding */ HiArrowCircleLeft),
/* harmony export */   "HiArrowCircleRight": () => (/* binding */ HiArrowCircleRight),
/* harmony export */   "HiArrowCircleUp": () => (/* binding */ HiArrowCircleUp),
/* harmony export */   "HiArrowDown": () => (/* binding */ HiArrowDown),
/* harmony export */   "HiArrowLeft": () => (/* binding */ HiArrowLeft),
/* harmony export */   "HiArrowNarrowDown": () => (/* binding */ HiArrowNarrowDown),
/* harmony export */   "HiArrowNarrowLeft": () => (/* binding */ HiArrowNarrowLeft),
/* harmony export */   "HiArrowNarrowRight": () => (/* binding */ HiArrowNarrowRight),
/* harmony export */   "HiArrowNarrowUp": () => (/* binding */ HiArrowNarrowUp),
/* harmony export */   "HiArrowRight": () => (/* binding */ HiArrowRight),
/* harmony export */   "HiArrowSmDown": () => (/* binding */ HiArrowSmDown),
/* harmony export */   "HiArrowSmLeft": () => (/* binding */ HiArrowSmLeft),
/* harmony export */   "HiArrowSmRight": () => (/* binding */ HiArrowSmRight),
/* harmony export */   "HiArrowSmUp": () => (/* binding */ HiArrowSmUp),
/* harmony export */   "HiArrowUp": () => (/* binding */ HiArrowUp),
/* harmony export */   "HiArrowsExpand": () => (/* binding */ HiArrowsExpand),
/* harmony export */   "HiAtSymbol": () => (/* binding */ HiAtSymbol),
/* harmony export */   "HiBackspace": () => (/* binding */ HiBackspace),
/* harmony export */   "HiBadgeCheck": () => (/* binding */ HiBadgeCheck),
/* harmony export */   "HiBan": () => (/* binding */ HiBan),
/* harmony export */   "HiBeaker": () => (/* binding */ HiBeaker),
/* harmony export */   "HiBell": () => (/* binding */ HiBell),
/* harmony export */   "HiBookOpen": () => (/* binding */ HiBookOpen),
/* harmony export */   "HiBookmarkAlt": () => (/* binding */ HiBookmarkAlt),
/* harmony export */   "HiBookmark": () => (/* binding */ HiBookmark),
/* harmony export */   "HiBriefcase": () => (/* binding */ HiBriefcase),
/* harmony export */   "HiCake": () => (/* binding */ HiCake),
/* harmony export */   "HiCalculator": () => (/* binding */ HiCalculator),
/* harmony export */   "HiCalendar": () => (/* binding */ HiCalendar),
/* harmony export */   "HiCamera": () => (/* binding */ HiCamera),
/* harmony export */   "HiCash": () => (/* binding */ HiCash),
/* harmony export */   "HiChartBar": () => (/* binding */ HiChartBar),
/* harmony export */   "HiChartPie": () => (/* binding */ HiChartPie),
/* harmony export */   "HiChartSquareBar": () => (/* binding */ HiChartSquareBar),
/* harmony export */   "HiChatAlt2": () => (/* binding */ HiChatAlt2),
/* harmony export */   "HiChatAlt": () => (/* binding */ HiChatAlt),
/* harmony export */   "HiChat": () => (/* binding */ HiChat),
/* harmony export */   "HiCheckCircle": () => (/* binding */ HiCheckCircle),
/* harmony export */   "HiCheck": () => (/* binding */ HiCheck),
/* harmony export */   "HiChevronDoubleDown": () => (/* binding */ HiChevronDoubleDown),
/* harmony export */   "HiChevronDoubleLeft": () => (/* binding */ HiChevronDoubleLeft),
/* harmony export */   "HiChevronDoubleRight": () => (/* binding */ HiChevronDoubleRight),
/* harmony export */   "HiChevronDoubleUp": () => (/* binding */ HiChevronDoubleUp),
/* harmony export */   "HiChevronDown": () => (/* binding */ HiChevronDown),
/* harmony export */   "HiChevronLeft": () => (/* binding */ HiChevronLeft),
/* harmony export */   "HiChevronRight": () => (/* binding */ HiChevronRight),
/* harmony export */   "HiChevronUp": () => (/* binding */ HiChevronUp),
/* harmony export */   "HiChip": () => (/* binding */ HiChip),
/* harmony export */   "HiClipboardCheck": () => (/* binding */ HiClipboardCheck),
/* harmony export */   "HiClipboardCopy": () => (/* binding */ HiClipboardCopy),
/* harmony export */   "HiClipboardList": () => (/* binding */ HiClipboardList),
/* harmony export */   "HiClipboard": () => (/* binding */ HiClipboard),
/* harmony export */   "HiClock": () => (/* binding */ HiClock),
/* harmony export */   "HiCloudDownload": () => (/* binding */ HiCloudDownload),
/* harmony export */   "HiCloudUpload": () => (/* binding */ HiCloudUpload),
/* harmony export */   "HiCloud": () => (/* binding */ HiCloud),
/* harmony export */   "HiCode": () => (/* binding */ HiCode),
/* harmony export */   "HiCog": () => (/* binding */ HiCog),
/* harmony export */   "HiCollection": () => (/* binding */ HiCollection),
/* harmony export */   "HiColorSwatch": () => (/* binding */ HiColorSwatch),
/* harmony export */   "HiCreditCard": () => (/* binding */ HiCreditCard),
/* harmony export */   "HiCubeTransparent": () => (/* binding */ HiCubeTransparent),
/* harmony export */   "HiCube": () => (/* binding */ HiCube),
/* harmony export */   "HiCurrencyBangladeshi": () => (/* binding */ HiCurrencyBangladeshi),
/* harmony export */   "HiCurrencyDollar": () => (/* binding */ HiCurrencyDollar),
/* harmony export */   "HiCurrencyEuro": () => (/* binding */ HiCurrencyEuro),
/* harmony export */   "HiCurrencyPound": () => (/* binding */ HiCurrencyPound),
/* harmony export */   "HiCurrencyRupee": () => (/* binding */ HiCurrencyRupee),
/* harmony export */   "HiCurrencyYen": () => (/* binding */ HiCurrencyYen),
/* harmony export */   "HiCursorClick": () => (/* binding */ HiCursorClick),
/* harmony export */   "HiDatabase": () => (/* binding */ HiDatabase),
/* harmony export */   "HiDesktopComputer": () => (/* binding */ HiDesktopComputer),
/* harmony export */   "HiDeviceMobile": () => (/* binding */ HiDeviceMobile),
/* harmony export */   "HiDeviceTablet": () => (/* binding */ HiDeviceTablet),
/* harmony export */   "HiDocumentAdd": () => (/* binding */ HiDocumentAdd),
/* harmony export */   "HiDocumentDownload": () => (/* binding */ HiDocumentDownload),
/* harmony export */   "HiDocumentDuplicate": () => (/* binding */ HiDocumentDuplicate),
/* harmony export */   "HiDocumentRemove": () => (/* binding */ HiDocumentRemove),
/* harmony export */   "HiDocumentReport": () => (/* binding */ HiDocumentReport),
/* harmony export */   "HiDocumentSearch": () => (/* binding */ HiDocumentSearch),
/* harmony export */   "HiDocumentText": () => (/* binding */ HiDocumentText),
/* harmony export */   "HiDocument": () => (/* binding */ HiDocument),
/* harmony export */   "HiDotsCircleHorizontal": () => (/* binding */ HiDotsCircleHorizontal),
/* harmony export */   "HiDotsHorizontal": () => (/* binding */ HiDotsHorizontal),
/* harmony export */   "HiDotsVertical": () => (/* binding */ HiDotsVertical),
/* harmony export */   "HiDownload": () => (/* binding */ HiDownload),
/* harmony export */   "HiDuplicate": () => (/* binding */ HiDuplicate),
/* harmony export */   "HiEmojiHappy": () => (/* binding */ HiEmojiHappy),
/* harmony export */   "HiEmojiSad": () => (/* binding */ HiEmojiSad),
/* harmony export */   "HiExclamationCircle": () => (/* binding */ HiExclamationCircle),
/* harmony export */   "HiExclamation": () => (/* binding */ HiExclamation),
/* harmony export */   "HiExternalLink": () => (/* binding */ HiExternalLink),
/* harmony export */   "HiEyeOff": () => (/* binding */ HiEyeOff),
/* harmony export */   "HiEye": () => (/* binding */ HiEye),
/* harmony export */   "HiFastForward": () => (/* binding */ HiFastForward),
/* harmony export */   "HiFilm": () => (/* binding */ HiFilm),
/* harmony export */   "HiFilter": () => (/* binding */ HiFilter),
/* harmony export */   "HiFingerPrint": () => (/* binding */ HiFingerPrint),
/* harmony export */   "HiFire": () => (/* binding */ HiFire),
/* harmony export */   "HiFlag": () => (/* binding */ HiFlag),
/* harmony export */   "HiFolderAdd": () => (/* binding */ HiFolderAdd),
/* harmony export */   "HiFolderDownload": () => (/* binding */ HiFolderDownload),
/* harmony export */   "HiFolderOpen": () => (/* binding */ HiFolderOpen),
/* harmony export */   "HiFolderRemove": () => (/* binding */ HiFolderRemove),
/* harmony export */   "HiFolder": () => (/* binding */ HiFolder),
/* harmony export */   "HiGift": () => (/* binding */ HiGift),
/* harmony export */   "HiGlobeAlt": () => (/* binding */ HiGlobeAlt),
/* harmony export */   "HiGlobe": () => (/* binding */ HiGlobe),
/* harmony export */   "HiHand": () => (/* binding */ HiHand),
/* harmony export */   "HiHashtag": () => (/* binding */ HiHashtag),
/* harmony export */   "HiHeart": () => (/* binding */ HiHeart),
/* harmony export */   "HiHome": () => (/* binding */ HiHome),
/* harmony export */   "HiIdentification": () => (/* binding */ HiIdentification),
/* harmony export */   "HiInboxIn": () => (/* binding */ HiInboxIn),
/* harmony export */   "HiInbox": () => (/* binding */ HiInbox),
/* harmony export */   "HiInformationCircle": () => (/* binding */ HiInformationCircle),
/* harmony export */   "HiKey": () => (/* binding */ HiKey),
/* harmony export */   "HiLibrary": () => (/* binding */ HiLibrary),
/* harmony export */   "HiLightBulb": () => (/* binding */ HiLightBulb),
/* harmony export */   "HiLightningBolt": () => (/* binding */ HiLightningBolt),
/* harmony export */   "HiLink": () => (/* binding */ HiLink),
/* harmony export */   "HiLocationMarker": () => (/* binding */ HiLocationMarker),
/* harmony export */   "HiLockClosed": () => (/* binding */ HiLockClosed),
/* harmony export */   "HiLockOpen": () => (/* binding */ HiLockOpen),
/* harmony export */   "HiLogin": () => (/* binding */ HiLogin),
/* harmony export */   "HiLogout": () => (/* binding */ HiLogout),
/* harmony export */   "HiMailOpen": () => (/* binding */ HiMailOpen),
/* harmony export */   "HiMail": () => (/* binding */ HiMail),
/* harmony export */   "HiMap": () => (/* binding */ HiMap),
/* harmony export */   "HiMenuAlt1": () => (/* binding */ HiMenuAlt1),
/* harmony export */   "HiMenuAlt2": () => (/* binding */ HiMenuAlt2),
/* harmony export */   "HiMenuAlt3": () => (/* binding */ HiMenuAlt3),
/* harmony export */   "HiMenuAlt4": () => (/* binding */ HiMenuAlt4),
/* harmony export */   "HiMenu": () => (/* binding */ HiMenu),
/* harmony export */   "HiMicrophone": () => (/* binding */ HiMicrophone),
/* harmony export */   "HiMinusCircle": () => (/* binding */ HiMinusCircle),
/* harmony export */   "HiMinusSm": () => (/* binding */ HiMinusSm),
/* harmony export */   "HiMinus": () => (/* binding */ HiMinus),
/* harmony export */   "HiMoon": () => (/* binding */ HiMoon),
/* harmony export */   "HiMusicNote": () => (/* binding */ HiMusicNote),
/* harmony export */   "HiNewspaper": () => (/* binding */ HiNewspaper),
/* harmony export */   "HiOfficeBuilding": () => (/* binding */ HiOfficeBuilding),
/* harmony export */   "HiPaperAirplane": () => (/* binding */ HiPaperAirplane),
/* harmony export */   "HiPaperClip": () => (/* binding */ HiPaperClip),
/* harmony export */   "HiPause": () => (/* binding */ HiPause),
/* harmony export */   "HiPencilAlt": () => (/* binding */ HiPencilAlt),
/* harmony export */   "HiPencil": () => (/* binding */ HiPencil),
/* harmony export */   "HiPhoneIncoming": () => (/* binding */ HiPhoneIncoming),
/* harmony export */   "HiPhoneMissedCall": () => (/* binding */ HiPhoneMissedCall),
/* harmony export */   "HiPhoneOutgoing": () => (/* binding */ HiPhoneOutgoing),
/* harmony export */   "HiPhone": () => (/* binding */ HiPhone),
/* harmony export */   "HiPhotograph": () => (/* binding */ HiPhotograph),
/* harmony export */   "HiPlay": () => (/* binding */ HiPlay),
/* harmony export */   "HiPlusCircle": () => (/* binding */ HiPlusCircle),
/* harmony export */   "HiPlusSm": () => (/* binding */ HiPlusSm),
/* harmony export */   "HiPlus": () => (/* binding */ HiPlus),
/* harmony export */   "HiPresentationChartBar": () => (/* binding */ HiPresentationChartBar),
/* harmony export */   "HiPresentationChartLine": () => (/* binding */ HiPresentationChartLine),
/* harmony export */   "HiPrinter": () => (/* binding */ HiPrinter),
/* harmony export */   "HiPuzzle": () => (/* binding */ HiPuzzle),
/* harmony export */   "HiQrcode": () => (/* binding */ HiQrcode),
/* harmony export */   "HiQuestionMarkCircle": () => (/* binding */ HiQuestionMarkCircle),
/* harmony export */   "HiReceiptRefund": () => (/* binding */ HiReceiptRefund),
/* harmony export */   "HiReceiptTax": () => (/* binding */ HiReceiptTax),
/* harmony export */   "HiRefresh": () => (/* binding */ HiRefresh),
/* harmony export */   "HiReply": () => (/* binding */ HiReply),
/* harmony export */   "HiRewind": () => (/* binding */ HiRewind),
/* harmony export */   "HiRss": () => (/* binding */ HiRss),
/* harmony export */   "HiSaveAs": () => (/* binding */ HiSaveAs),
/* harmony export */   "HiSave": () => (/* binding */ HiSave),
/* harmony export */   "HiScale": () => (/* binding */ HiScale),
/* harmony export */   "HiScissors": () => (/* binding */ HiScissors),
/* harmony export */   "HiSearchCircle": () => (/* binding */ HiSearchCircle),
/* harmony export */   "HiSearch": () => (/* binding */ HiSearch),
/* harmony export */   "HiSelector": () => (/* binding */ HiSelector),
/* harmony export */   "HiServer": () => (/* binding */ HiServer),
/* harmony export */   "HiShare": () => (/* binding */ HiShare),
/* harmony export */   "HiShieldCheck": () => (/* binding */ HiShieldCheck),
/* harmony export */   "HiShieldExclamation": () => (/* binding */ HiShieldExclamation),
/* harmony export */   "HiShoppingBag": () => (/* binding */ HiShoppingBag),
/* harmony export */   "HiShoppingCart": () => (/* binding */ HiShoppingCart),
/* harmony export */   "HiSortAscending": () => (/* binding */ HiSortAscending),
/* harmony export */   "HiSortDescending": () => (/* binding */ HiSortDescending),
/* harmony export */   "HiSparkles": () => (/* binding */ HiSparkles),
/* harmony export */   "HiSpeakerphone": () => (/* binding */ HiSpeakerphone),
/* harmony export */   "HiStar": () => (/* binding */ HiStar),
/* harmony export */   "HiStatusOffline": () => (/* binding */ HiStatusOffline),
/* harmony export */   "HiStatusOnline": () => (/* binding */ HiStatusOnline),
/* harmony export */   "HiStop": () => (/* binding */ HiStop),
/* harmony export */   "HiSun": () => (/* binding */ HiSun),
/* harmony export */   "HiSupport": () => (/* binding */ HiSupport),
/* harmony export */   "HiSwitchHorizontal": () => (/* binding */ HiSwitchHorizontal),
/* harmony export */   "HiSwitchVertical": () => (/* binding */ HiSwitchVertical),
/* harmony export */   "HiTable": () => (/* binding */ HiTable),
/* harmony export */   "HiTag": () => (/* binding */ HiTag),
/* harmony export */   "HiTemplate": () => (/* binding */ HiTemplate),
/* harmony export */   "HiTerminal": () => (/* binding */ HiTerminal),
/* harmony export */   "HiThumbDown": () => (/* binding */ HiThumbDown),
/* harmony export */   "HiThumbUp": () => (/* binding */ HiThumbUp),
/* harmony export */   "HiTicket": () => (/* binding */ HiTicket),
/* harmony export */   "HiTranslate": () => (/* binding */ HiTranslate),
/* harmony export */   "HiTrash": () => (/* binding */ HiTrash),
/* harmony export */   "HiTrendingDown": () => (/* binding */ HiTrendingDown),
/* harmony export */   "HiTrendingUp": () => (/* binding */ HiTrendingUp),
/* harmony export */   "HiTruck": () => (/* binding */ HiTruck),
/* harmony export */   "HiUpload": () => (/* binding */ HiUpload),
/* harmony export */   "HiUserAdd": () => (/* binding */ HiUserAdd),
/* harmony export */   "HiUserCircle": () => (/* binding */ HiUserCircle),
/* harmony export */   "HiUserGroup": () => (/* binding */ HiUserGroup),
/* harmony export */   "HiUserRemove": () => (/* binding */ HiUserRemove),
/* harmony export */   "HiUser": () => (/* binding */ HiUser),
/* harmony export */   "HiUsers": () => (/* binding */ HiUsers),
/* harmony export */   "HiVariable": () => (/* binding */ HiVariable),
/* harmony export */   "HiVideoCamera": () => (/* binding */ HiVideoCamera),
/* harmony export */   "HiViewBoards": () => (/* binding */ HiViewBoards),
/* harmony export */   "HiViewGridAdd": () => (/* binding */ HiViewGridAdd),
/* harmony export */   "HiViewGrid": () => (/* binding */ HiViewGrid),
/* harmony export */   "HiViewList": () => (/* binding */ HiViewList),
/* harmony export */   "HiVolumeOff": () => (/* binding */ HiVolumeOff),
/* harmony export */   "HiVolumeUp": () => (/* binding */ HiVolumeUp),
/* harmony export */   "HiWifi": () => (/* binding */ HiWifi),
/* harmony export */   "HiXCircle": () => (/* binding */ HiXCircle),
/* harmony export */   "HiX": () => (/* binding */ HiX),
/* harmony export */   "HiZoomIn": () => (/* binding */ HiZoomIn),
/* harmony export */   "HiZoomOut": () => (/* binding */ HiZoomOut),
/* harmony export */   "HiOutlineAcademicCap": () => (/* binding */ HiOutlineAcademicCap),
/* harmony export */   "HiOutlineAdjustments": () => (/* binding */ HiOutlineAdjustments),
/* harmony export */   "HiOutlineAnnotation": () => (/* binding */ HiOutlineAnnotation),
/* harmony export */   "HiOutlineArchive": () => (/* binding */ HiOutlineArchive),
/* harmony export */   "HiOutlineArrowCircleDown": () => (/* binding */ HiOutlineArrowCircleDown),
/* harmony export */   "HiOutlineArrowCircleLeft": () => (/* binding */ HiOutlineArrowCircleLeft),
/* harmony export */   "HiOutlineArrowCircleRight": () => (/* binding */ HiOutlineArrowCircleRight),
/* harmony export */   "HiOutlineArrowCircleUp": () => (/* binding */ HiOutlineArrowCircleUp),
/* harmony export */   "HiOutlineArrowDown": () => (/* binding */ HiOutlineArrowDown),
/* harmony export */   "HiOutlineArrowLeft": () => (/* binding */ HiOutlineArrowLeft),
/* harmony export */   "HiOutlineArrowNarrowDown": () => (/* binding */ HiOutlineArrowNarrowDown),
/* harmony export */   "HiOutlineArrowNarrowLeft": () => (/* binding */ HiOutlineArrowNarrowLeft),
/* harmony export */   "HiOutlineArrowNarrowRight": () => (/* binding */ HiOutlineArrowNarrowRight),
/* harmony export */   "HiOutlineArrowNarrowUp": () => (/* binding */ HiOutlineArrowNarrowUp),
/* harmony export */   "HiOutlineArrowRight": () => (/* binding */ HiOutlineArrowRight),
/* harmony export */   "HiOutlineArrowSmDown": () => (/* binding */ HiOutlineArrowSmDown),
/* harmony export */   "HiOutlineArrowSmLeft": () => (/* binding */ HiOutlineArrowSmLeft),
/* harmony export */   "HiOutlineArrowSmRight": () => (/* binding */ HiOutlineArrowSmRight),
/* harmony export */   "HiOutlineArrowSmUp": () => (/* binding */ HiOutlineArrowSmUp),
/* harmony export */   "HiOutlineArrowUp": () => (/* binding */ HiOutlineArrowUp),
/* harmony export */   "HiOutlineArrowsExpand": () => (/* binding */ HiOutlineArrowsExpand),
/* harmony export */   "HiOutlineAtSymbol": () => (/* binding */ HiOutlineAtSymbol),
/* harmony export */   "HiOutlineBackspace": () => (/* binding */ HiOutlineBackspace),
/* harmony export */   "HiOutlineBadgeCheck": () => (/* binding */ HiOutlineBadgeCheck),
/* harmony export */   "HiOutlineBan": () => (/* binding */ HiOutlineBan),
/* harmony export */   "HiOutlineBeaker": () => (/* binding */ HiOutlineBeaker),
/* harmony export */   "HiOutlineBell": () => (/* binding */ HiOutlineBell),
/* harmony export */   "HiOutlineBookOpen": () => (/* binding */ HiOutlineBookOpen),
/* harmony export */   "HiOutlineBookmarkAlt": () => (/* binding */ HiOutlineBookmarkAlt),
/* harmony export */   "HiOutlineBookmark": () => (/* binding */ HiOutlineBookmark),
/* harmony export */   "HiOutlineBriefcase": () => (/* binding */ HiOutlineBriefcase),
/* harmony export */   "HiOutlineCake": () => (/* binding */ HiOutlineCake),
/* harmony export */   "HiOutlineCalculator": () => (/* binding */ HiOutlineCalculator),
/* harmony export */   "HiOutlineCalendar": () => (/* binding */ HiOutlineCalendar),
/* harmony export */   "HiOutlineCamera": () => (/* binding */ HiOutlineCamera),
/* harmony export */   "HiOutlineCash": () => (/* binding */ HiOutlineCash),
/* harmony export */   "HiOutlineChartBar": () => (/* binding */ HiOutlineChartBar),
/* harmony export */   "HiOutlineChartPie": () => (/* binding */ HiOutlineChartPie),
/* harmony export */   "HiOutlineChartSquareBar": () => (/* binding */ HiOutlineChartSquareBar),
/* harmony export */   "HiOutlineChatAlt2": () => (/* binding */ HiOutlineChatAlt2),
/* harmony export */   "HiOutlineChatAlt": () => (/* binding */ HiOutlineChatAlt),
/* harmony export */   "HiOutlineChat": () => (/* binding */ HiOutlineChat),
/* harmony export */   "HiOutlineCheckCircle": () => (/* binding */ HiOutlineCheckCircle),
/* harmony export */   "HiOutlineCheck": () => (/* binding */ HiOutlineCheck),
/* harmony export */   "HiOutlineChevronDoubleDown": () => (/* binding */ HiOutlineChevronDoubleDown),
/* harmony export */   "HiOutlineChevronDoubleLeft": () => (/* binding */ HiOutlineChevronDoubleLeft),
/* harmony export */   "HiOutlineChevronDoubleRight": () => (/* binding */ HiOutlineChevronDoubleRight),
/* harmony export */   "HiOutlineChevronDoubleUp": () => (/* binding */ HiOutlineChevronDoubleUp),
/* harmony export */   "HiOutlineChevronDown": () => (/* binding */ HiOutlineChevronDown),
/* harmony export */   "HiOutlineChevronLeft": () => (/* binding */ HiOutlineChevronLeft),
/* harmony export */   "HiOutlineChevronRight": () => (/* binding */ HiOutlineChevronRight),
/* harmony export */   "HiOutlineChevronUp": () => (/* binding */ HiOutlineChevronUp),
/* harmony export */   "HiOutlineChip": () => (/* binding */ HiOutlineChip),
/* harmony export */   "HiOutlineClipboardCheck": () => (/* binding */ HiOutlineClipboardCheck),
/* harmony export */   "HiOutlineClipboardCopy": () => (/* binding */ HiOutlineClipboardCopy),
/* harmony export */   "HiOutlineClipboardList": () => (/* binding */ HiOutlineClipboardList),
/* harmony export */   "HiOutlineClipboard": () => (/* binding */ HiOutlineClipboard),
/* harmony export */   "HiOutlineClock": () => (/* binding */ HiOutlineClock),
/* harmony export */   "HiOutlineCloudDownload": () => (/* binding */ HiOutlineCloudDownload),
/* harmony export */   "HiOutlineCloudUpload": () => (/* binding */ HiOutlineCloudUpload),
/* harmony export */   "HiOutlineCloud": () => (/* binding */ HiOutlineCloud),
/* harmony export */   "HiOutlineCode": () => (/* binding */ HiOutlineCode),
/* harmony export */   "HiOutlineCog": () => (/* binding */ HiOutlineCog),
/* harmony export */   "HiOutlineCollection": () => (/* binding */ HiOutlineCollection),
/* harmony export */   "HiOutlineColorSwatch": () => (/* binding */ HiOutlineColorSwatch),
/* harmony export */   "HiOutlineCreditCard": () => (/* binding */ HiOutlineCreditCard),
/* harmony export */   "HiOutlineCubeTransparent": () => (/* binding */ HiOutlineCubeTransparent),
/* harmony export */   "HiOutlineCube": () => (/* binding */ HiOutlineCube),
/* harmony export */   "HiOutlineCurrencyBangladeshi": () => (/* binding */ HiOutlineCurrencyBangladeshi),
/* harmony export */   "HiOutlineCurrencyDollar": () => (/* binding */ HiOutlineCurrencyDollar),
/* harmony export */   "HiOutlineCurrencyEuro": () => (/* binding */ HiOutlineCurrencyEuro),
/* harmony export */   "HiOutlineCurrencyPound": () => (/* binding */ HiOutlineCurrencyPound),
/* harmony export */   "HiOutlineCurrencyRupee": () => (/* binding */ HiOutlineCurrencyRupee),
/* harmony export */   "HiOutlineCurrencyYen": () => (/* binding */ HiOutlineCurrencyYen),
/* harmony export */   "HiOutlineCursorClick": () => (/* binding */ HiOutlineCursorClick),
/* harmony export */   "HiOutlineDatabase": () => (/* binding */ HiOutlineDatabase),
/* harmony export */   "HiOutlineDesktopComputer": () => (/* binding */ HiOutlineDesktopComputer),
/* harmony export */   "HiOutlineDeviceMobile": () => (/* binding */ HiOutlineDeviceMobile),
/* harmony export */   "HiOutlineDeviceTablet": () => (/* binding */ HiOutlineDeviceTablet),
/* harmony export */   "HiOutlineDocumentAdd": () => (/* binding */ HiOutlineDocumentAdd),
/* harmony export */   "HiOutlineDocumentDownload": () => (/* binding */ HiOutlineDocumentDownload),
/* harmony export */   "HiOutlineDocumentDuplicate": () => (/* binding */ HiOutlineDocumentDuplicate),
/* harmony export */   "HiOutlineDocumentRemove": () => (/* binding */ HiOutlineDocumentRemove),
/* harmony export */   "HiOutlineDocumentReport": () => (/* binding */ HiOutlineDocumentReport),
/* harmony export */   "HiOutlineDocumentSearch": () => (/* binding */ HiOutlineDocumentSearch),
/* harmony export */   "HiOutlineDocumentText": () => (/* binding */ HiOutlineDocumentText),
/* harmony export */   "HiOutlineDocument": () => (/* binding */ HiOutlineDocument),
/* harmony export */   "HiOutlineDotsCircleHorizontal": () => (/* binding */ HiOutlineDotsCircleHorizontal),
/* harmony export */   "HiOutlineDotsHorizontal": () => (/* binding */ HiOutlineDotsHorizontal),
/* harmony export */   "HiOutlineDotsVertical": () => (/* binding */ HiOutlineDotsVertical),
/* harmony export */   "HiOutlineDownload": () => (/* binding */ HiOutlineDownload),
/* harmony export */   "HiOutlineDuplicate": () => (/* binding */ HiOutlineDuplicate),
/* harmony export */   "HiOutlineEmojiHappy": () => (/* binding */ HiOutlineEmojiHappy),
/* harmony export */   "HiOutlineEmojiSad": () => (/* binding */ HiOutlineEmojiSad),
/* harmony export */   "HiOutlineExclamationCircle": () => (/* binding */ HiOutlineExclamationCircle),
/* harmony export */   "HiOutlineExclamation": () => (/* binding */ HiOutlineExclamation),
/* harmony export */   "HiOutlineExternalLink": () => (/* binding */ HiOutlineExternalLink),
/* harmony export */   "HiOutlineEyeOff": () => (/* binding */ HiOutlineEyeOff),
/* harmony export */   "HiOutlineEye": () => (/* binding */ HiOutlineEye),
/* harmony export */   "HiOutlineFastForward": () => (/* binding */ HiOutlineFastForward),
/* harmony export */   "HiOutlineFilm": () => (/* binding */ HiOutlineFilm),
/* harmony export */   "HiOutlineFilter": () => (/* binding */ HiOutlineFilter),
/* harmony export */   "HiOutlineFingerPrint": () => (/* binding */ HiOutlineFingerPrint),
/* harmony export */   "HiOutlineFire": () => (/* binding */ HiOutlineFire),
/* harmony export */   "HiOutlineFlag": () => (/* binding */ HiOutlineFlag),
/* harmony export */   "HiOutlineFolderAdd": () => (/* binding */ HiOutlineFolderAdd),
/* harmony export */   "HiOutlineFolderDownload": () => (/* binding */ HiOutlineFolderDownload),
/* harmony export */   "HiOutlineFolderOpen": () => (/* binding */ HiOutlineFolderOpen),
/* harmony export */   "HiOutlineFolderRemove": () => (/* binding */ HiOutlineFolderRemove),
/* harmony export */   "HiOutlineFolder": () => (/* binding */ HiOutlineFolder),
/* harmony export */   "HiOutlineGift": () => (/* binding */ HiOutlineGift),
/* harmony export */   "HiOutlineGlobeAlt": () => (/* binding */ HiOutlineGlobeAlt),
/* harmony export */   "HiOutlineGlobe": () => (/* binding */ HiOutlineGlobe),
/* harmony export */   "HiOutlineHand": () => (/* binding */ HiOutlineHand),
/* harmony export */   "HiOutlineHashtag": () => (/* binding */ HiOutlineHashtag),
/* harmony export */   "HiOutlineHeart": () => (/* binding */ HiOutlineHeart),
/* harmony export */   "HiOutlineHome": () => (/* binding */ HiOutlineHome),
/* harmony export */   "HiOutlineIdentification": () => (/* binding */ HiOutlineIdentification),
/* harmony export */   "HiOutlineInboxIn": () => (/* binding */ HiOutlineInboxIn),
/* harmony export */   "HiOutlineInbox": () => (/* binding */ HiOutlineInbox),
/* harmony export */   "HiOutlineInformationCircle": () => (/* binding */ HiOutlineInformationCircle),
/* harmony export */   "HiOutlineKey": () => (/* binding */ HiOutlineKey),
/* harmony export */   "HiOutlineLibrary": () => (/* binding */ HiOutlineLibrary),
/* harmony export */   "HiOutlineLightBulb": () => (/* binding */ HiOutlineLightBulb),
/* harmony export */   "HiOutlineLightningBolt": () => (/* binding */ HiOutlineLightningBolt),
/* harmony export */   "HiOutlineLink": () => (/* binding */ HiOutlineLink),
/* harmony export */   "HiOutlineLocationMarker": () => (/* binding */ HiOutlineLocationMarker),
/* harmony export */   "HiOutlineLockClosed": () => (/* binding */ HiOutlineLockClosed),
/* harmony export */   "HiOutlineLockOpen": () => (/* binding */ HiOutlineLockOpen),
/* harmony export */   "HiOutlineLogin": () => (/* binding */ HiOutlineLogin),
/* harmony export */   "HiOutlineLogout": () => (/* binding */ HiOutlineLogout),
/* harmony export */   "HiOutlineMailOpen": () => (/* binding */ HiOutlineMailOpen),
/* harmony export */   "HiOutlineMail": () => (/* binding */ HiOutlineMail),
/* harmony export */   "HiOutlineMap": () => (/* binding */ HiOutlineMap),
/* harmony export */   "HiOutlineMenuAlt1": () => (/* binding */ HiOutlineMenuAlt1),
/* harmony export */   "HiOutlineMenuAlt2": () => (/* binding */ HiOutlineMenuAlt2),
/* harmony export */   "HiOutlineMenuAlt3": () => (/* binding */ HiOutlineMenuAlt3),
/* harmony export */   "HiOutlineMenuAlt4": () => (/* binding */ HiOutlineMenuAlt4),
/* harmony export */   "HiOutlineMenu": () => (/* binding */ HiOutlineMenu),
/* harmony export */   "HiOutlineMicrophone": () => (/* binding */ HiOutlineMicrophone),
/* harmony export */   "HiOutlineMinusCircle": () => (/* binding */ HiOutlineMinusCircle),
/* harmony export */   "HiOutlineMinusSm": () => (/* binding */ HiOutlineMinusSm),
/* harmony export */   "HiOutlineMinus": () => (/* binding */ HiOutlineMinus),
/* harmony export */   "HiOutlineMoon": () => (/* binding */ HiOutlineMoon),
/* harmony export */   "HiOutlineMusicNote": () => (/* binding */ HiOutlineMusicNote),
/* harmony export */   "HiOutlineNewspaper": () => (/* binding */ HiOutlineNewspaper),
/* harmony export */   "HiOutlineOfficeBuilding": () => (/* binding */ HiOutlineOfficeBuilding),
/* harmony export */   "HiOutlinePaperAirplane": () => (/* binding */ HiOutlinePaperAirplane),
/* harmony export */   "HiOutlinePaperClip": () => (/* binding */ HiOutlinePaperClip),
/* harmony export */   "HiOutlinePause": () => (/* binding */ HiOutlinePause),
/* harmony export */   "HiOutlinePencilAlt": () => (/* binding */ HiOutlinePencilAlt),
/* harmony export */   "HiOutlinePencil": () => (/* binding */ HiOutlinePencil),
/* harmony export */   "HiOutlinePhoneIncoming": () => (/* binding */ HiOutlinePhoneIncoming),
/* harmony export */   "HiOutlinePhoneMissedCall": () => (/* binding */ HiOutlinePhoneMissedCall),
/* harmony export */   "HiOutlinePhoneOutgoing": () => (/* binding */ HiOutlinePhoneOutgoing),
/* harmony export */   "HiOutlinePhone": () => (/* binding */ HiOutlinePhone),
/* harmony export */   "HiOutlinePhotograph": () => (/* binding */ HiOutlinePhotograph),
/* harmony export */   "HiOutlinePlay": () => (/* binding */ HiOutlinePlay),
/* harmony export */   "HiOutlinePlusCircle": () => (/* binding */ HiOutlinePlusCircle),
/* harmony export */   "HiOutlinePlusSm": () => (/* binding */ HiOutlinePlusSm),
/* harmony export */   "HiOutlinePlus": () => (/* binding */ HiOutlinePlus),
/* harmony export */   "HiOutlinePresentationChartBar": () => (/* binding */ HiOutlinePresentationChartBar),
/* harmony export */   "HiOutlinePresentationChartLine": () => (/* binding */ HiOutlinePresentationChartLine),
/* harmony export */   "HiOutlinePrinter": () => (/* binding */ HiOutlinePrinter),
/* harmony export */   "HiOutlinePuzzle": () => (/* binding */ HiOutlinePuzzle),
/* harmony export */   "HiOutlineQrcode": () => (/* binding */ HiOutlineQrcode),
/* harmony export */   "HiOutlineQuestionMarkCircle": () => (/* binding */ HiOutlineQuestionMarkCircle),
/* harmony export */   "HiOutlineReceiptRefund": () => (/* binding */ HiOutlineReceiptRefund),
/* harmony export */   "HiOutlineReceiptTax": () => (/* binding */ HiOutlineReceiptTax),
/* harmony export */   "HiOutlineRefresh": () => (/* binding */ HiOutlineRefresh),
/* harmony export */   "HiOutlineReply": () => (/* binding */ HiOutlineReply),
/* harmony export */   "HiOutlineRewind": () => (/* binding */ HiOutlineRewind),
/* harmony export */   "HiOutlineRss": () => (/* binding */ HiOutlineRss),
/* harmony export */   "HiOutlineSaveAs": () => (/* binding */ HiOutlineSaveAs),
/* harmony export */   "HiOutlineSave": () => (/* binding */ HiOutlineSave),
/* harmony export */   "HiOutlineScale": () => (/* binding */ HiOutlineScale),
/* harmony export */   "HiOutlineScissors": () => (/* binding */ HiOutlineScissors),
/* harmony export */   "HiOutlineSearchCircle": () => (/* binding */ HiOutlineSearchCircle),
/* harmony export */   "HiOutlineSearch": () => (/* binding */ HiOutlineSearch),
/* harmony export */   "HiOutlineSelector": () => (/* binding */ HiOutlineSelector),
/* harmony export */   "HiOutlineServer": () => (/* binding */ HiOutlineServer),
/* harmony export */   "HiOutlineShare": () => (/* binding */ HiOutlineShare),
/* harmony export */   "HiOutlineShieldCheck": () => (/* binding */ HiOutlineShieldCheck),
/* harmony export */   "HiOutlineShieldExclamation": () => (/* binding */ HiOutlineShieldExclamation),
/* harmony export */   "HiOutlineShoppingBag": () => (/* binding */ HiOutlineShoppingBag),
/* harmony export */   "HiOutlineShoppingCart": () => (/* binding */ HiOutlineShoppingCart),
/* harmony export */   "HiOutlineSortAscending": () => (/* binding */ HiOutlineSortAscending),
/* harmony export */   "HiOutlineSortDescending": () => (/* binding */ HiOutlineSortDescending),
/* harmony export */   "HiOutlineSparkles": () => (/* binding */ HiOutlineSparkles),
/* harmony export */   "HiOutlineSpeakerphone": () => (/* binding */ HiOutlineSpeakerphone),
/* harmony export */   "HiOutlineStar": () => (/* binding */ HiOutlineStar),
/* harmony export */   "HiOutlineStatusOffline": () => (/* binding */ HiOutlineStatusOffline),
/* harmony export */   "HiOutlineStatusOnline": () => (/* binding */ HiOutlineStatusOnline),
/* harmony export */   "HiOutlineStop": () => (/* binding */ HiOutlineStop),
/* harmony export */   "HiOutlineSun": () => (/* binding */ HiOutlineSun),
/* harmony export */   "HiOutlineSupport": () => (/* binding */ HiOutlineSupport),
/* harmony export */   "HiOutlineSwitchHorizontal": () => (/* binding */ HiOutlineSwitchHorizontal),
/* harmony export */   "HiOutlineSwitchVertical": () => (/* binding */ HiOutlineSwitchVertical),
/* harmony export */   "HiOutlineTable": () => (/* binding */ HiOutlineTable),
/* harmony export */   "HiOutlineTag": () => (/* binding */ HiOutlineTag),
/* harmony export */   "HiOutlineTemplate": () => (/* binding */ HiOutlineTemplate),
/* harmony export */   "HiOutlineTerminal": () => (/* binding */ HiOutlineTerminal),
/* harmony export */   "HiOutlineThumbDown": () => (/* binding */ HiOutlineThumbDown),
/* harmony export */   "HiOutlineThumbUp": () => (/* binding */ HiOutlineThumbUp),
/* harmony export */   "HiOutlineTicket": () => (/* binding */ HiOutlineTicket),
/* harmony export */   "HiOutlineTranslate": () => (/* binding */ HiOutlineTranslate),
/* harmony export */   "HiOutlineTrash": () => (/* binding */ HiOutlineTrash),
/* harmony export */   "HiOutlineTrendingDown": () => (/* binding */ HiOutlineTrendingDown),
/* harmony export */   "HiOutlineTrendingUp": () => (/* binding */ HiOutlineTrendingUp),
/* harmony export */   "HiOutlineTruck": () => (/* binding */ HiOutlineTruck),
/* harmony export */   "HiOutlineUpload": () => (/* binding */ HiOutlineUpload),
/* harmony export */   "HiOutlineUserAdd": () => (/* binding */ HiOutlineUserAdd),
/* harmony export */   "HiOutlineUserCircle": () => (/* binding */ HiOutlineUserCircle),
/* harmony export */   "HiOutlineUserGroup": () => (/* binding */ HiOutlineUserGroup),
/* harmony export */   "HiOutlineUserRemove": () => (/* binding */ HiOutlineUserRemove),
/* harmony export */   "HiOutlineUser": () => (/* binding */ HiOutlineUser),
/* harmony export */   "HiOutlineUsers": () => (/* binding */ HiOutlineUsers),
/* harmony export */   "HiOutlineVariable": () => (/* binding */ HiOutlineVariable),
/* harmony export */   "HiOutlineVideoCamera": () => (/* binding */ HiOutlineVideoCamera),
/* harmony export */   "HiOutlineViewBoards": () => (/* binding */ HiOutlineViewBoards),
/* harmony export */   "HiOutlineViewGridAdd": () => (/* binding */ HiOutlineViewGridAdd),
/* harmony export */   "HiOutlineViewGrid": () => (/* binding */ HiOutlineViewGrid),
/* harmony export */   "HiOutlineViewList": () => (/* binding */ HiOutlineViewList),
/* harmony export */   "HiOutlineVolumeOff": () => (/* binding */ HiOutlineVolumeOff),
/* harmony export */   "HiOutlineVolumeUp": () => (/* binding */ HiOutlineVolumeUp),
/* harmony export */   "HiOutlineWifi": () => (/* binding */ HiOutlineWifi),
/* harmony export */   "HiOutlineXCircle": () => (/* binding */ HiOutlineXCircle),
/* harmony export */   "HiOutlineX": () => (/* binding */ HiOutlineX),
/* harmony export */   "HiOutlineZoomIn": () => (/* binding */ HiOutlineZoomIn),
/* harmony export */   "HiOutlineZoomOut": () => (/* binding */ HiOutlineZoomOut)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/react-icons/lib/cjs/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_0__);
// THIS FILE IS AUTO GENERATED

function HiAcademicCap (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"}}]})(props);
};
function HiAdjustments (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"}}]})(props);
};
function HiAnnotation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z","clipRule":"evenodd"}}]})(props);
};
function HiArchive (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiArrowCircleDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z","clipRule":"evenodd"}}]})(props);
};
function HiArrowCircleLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z","clipRule":"evenodd"}}]})(props);
};
function HiArrowCircleRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowCircleUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowNarrowDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowNarrowLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowNarrowRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowNarrowUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowSmDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowSmLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowSmRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowSmUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowsExpand (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 19 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"}}]})(props);
};
function HiAtSymbol (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z","clipRule":"evenodd"}}]})(props);
};
function HiBackspace (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z","clipRule":"evenodd"}}]})(props);
};
function HiBadgeCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiBan (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z","clipRule":"evenodd"}}]})(props);
};
function HiBeaker (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z","clipRule":"evenodd"}}]})(props);
};
function HiBell (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}}]})(props);
};
function HiBookOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"}}]})(props);
};
function HiBookmarkAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z","clipRule":"evenodd"}}]})(props);
};
function HiBookmark (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"}}]})(props);
};
function HiBriefcase (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"}}]})(props);
};
function HiCake (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiCalculator (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiCalendar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clipRule":"evenodd"}}]})(props);
};
function HiCamera (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z","clipRule":"evenodd"}}]})(props);
};
function HiCash (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z","clipRule":"evenodd"}}]})(props);
};
function HiChartBar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}}]})(props);
};
function HiChartPie (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}},{"tag":"path","attr":{"d":"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"}}]})(props);
};
function HiChartSquareBar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z","clipRule":"evenodd"}}]})(props);
};
function HiChatAlt2 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}},{"tag":"path","attr":{"d":"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"}}]})(props);
};
function HiChatAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z","clipRule":"evenodd"}}]})(props);
};
function HiChat (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z","clipRule":"evenodd"}}]})(props);
};
function HiCheckCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDoubleDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDoubleLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDoubleRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clipRule":"evenodd"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDoubleUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiChevronLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiChip (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M13 7H7v6h6V7z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z","clipRule":"evenodd"}}]})(props);
};
function HiClipboardCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiClipboardCopy (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"}},{"tag":"path","attr":{"d":"M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"}}]})(props);
};
function HiClipboardList (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z","clipRule":"evenodd"}}]})(props);
};
function HiClipboard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"}},{"tag":"path","attr":{"d":"M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"}}]})(props);
};
function HiClock (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z","clipRule":"evenodd"}}]})(props);
};
function HiCloudDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z","clipRule":"evenodd"}}]})(props);
};
function HiCloudUpload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"}},{"tag":"path","attr":{"d":"M9 13h2v5a1 1 0 11-2 0v-5z"}}]})(props);
};
function HiCloud (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"}}]})(props);
};
function HiCode (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiCog (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z","clipRule":"evenodd"}}]})(props);
};
function HiCollection (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"}}]})(props);
};
function HiColorSwatch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z","clipRule":"evenodd"}}]})(props);
};
function HiCreditCard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z","clipRule":"evenodd"}}]})(props);
};
function HiCubeTransparent (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z","clipRule":"evenodd"}}]})(props);
};
function HiCube (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"}}]})(props);
};
function HiCurrencyBangladeshi (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyDollar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyEuro (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyPound (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyRupee (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyYen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z","clipRule":"evenodd"}}]})(props);
};
function HiCursorClick (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clipRule":"evenodd"}}]})(props);
};
function HiDatabase (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"}},{"tag":"path","attr":{"d":"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"}},{"tag":"path","attr":{"d":"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"}}]})(props);
};
function HiDesktopComputer (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z","clipRule":"evenodd"}}]})(props);
};
function HiDeviceMobile (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
};
function HiDeviceTablet (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentDuplicate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"}},{"tag":"path","attr":{"d":"M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"}}]})(props);
};
function HiDocumentRemove (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentReport (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentSearch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentText (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiDocument (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z","clipRule":"evenodd"}}]})(props);
};
function HiDotsCircleHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z","clipRule":"evenodd"}}]})(props);
};
function HiDotsHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"}}]})(props);
};
function HiDotsVertical (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"}}]})(props);
};
function HiDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiDuplicate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"}},{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"}}]})(props);
};
function HiEmojiHappy (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z","clipRule":"evenodd"}}]})(props);
};
function HiEmojiSad (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z","clipRule":"evenodd"}}]})(props);
};
function HiExclamationCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiExclamation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiExternalLink (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}},{"tag":"path","attr":{"d":"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}}]})(props);
};
function HiEyeOff (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}}]})(props);
};
function HiEye (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10 12a2 2 0 100-4 2 2 0 000 4z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clipRule":"evenodd"}}]})(props);
};
function HiFastForward (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"}}]})(props);
};
function HiFilm (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z","clipRule":"evenodd"}}]})(props);
};
function HiFilter (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clipRule":"evenodd"}}]})(props);
};
function HiFingerPrint (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z","clipRule":"evenodd"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z","clipRule":"evenodd"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiFire (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z","clipRule":"evenodd"}}]})(props);
};
function HiFlag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z","clipRule":"evenodd"}}]})(props);
};
function HiFolderAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}},{"tag":"path","attr":{"stroke":"#fff","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 11h4m-2-2v4"}}]})(props);
};
function HiFolderDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}},{"tag":"path","attr":{"stroke":"#fff","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 9v4m0 0l-2-2m2 2l2-2"}}]})(props);
};
function HiFolderOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"}}]})(props);
};
function HiFolderRemove (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}},{"tag":"path","attr":{"stroke":"#fff","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 11h4"}}]})(props);
};
function HiFolder (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}}]})(props);
};
function HiGift (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"}}]})(props);
};
function HiGlobeAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z","clipRule":"evenodd"}}]})(props);
};
function HiGlobe (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z","clipRule":"evenodd"}}]})(props);
};
function HiHand (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z","clipRule":"evenodd"}}]})(props);
};
function HiHashtag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z","clipRule":"evenodd"}}]})(props);
};
function HiHeart (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clipRule":"evenodd"}}]})(props);
};
function HiHome (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}}]})(props);
};
function HiIdentification (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiInboxIn (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"}},{"tag":"path","attr":{"d":"M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"}}]})(props);
};
function HiInbox (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z","clipRule":"evenodd"}}]})(props);
};
function HiInformationCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clipRule":"evenodd"}}]})(props);
};
function HiKey (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z","clipRule":"evenodd"}}]})(props);
};
function HiLibrary (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiLightBulb (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"}}]})(props);
};
function HiLightningBolt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z","clipRule":"evenodd"}}]})(props);
};
function HiLink (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clipRule":"evenodd"}}]})(props);
};
function HiLocationMarker (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z","clipRule":"evenodd"}}]})(props);
};
function HiLockClosed (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clipRule":"evenodd"}}]})(props);
};
function HiLockOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"}}]})(props);
};
function HiLogin (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiLogout (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z","clipRule":"evenodd"}}]})(props);
};
function HiMailOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z","clipRule":"evenodd"}}]})(props);
};
function HiMail (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}},{"tag":"path","attr":{"d":"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}}]})(props);
};
function HiMap (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z","clipRule":"evenodd"}}]})(props);
};
function HiMenuAlt1 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMenuAlt2 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMenuAlt3 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMenuAlt4 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMenu (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMicrophone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z","clipRule":"evenodd"}}]})(props);
};
function HiMinusCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiMinusSm (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMinus (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMoon (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}}]})(props);
};
function HiMusicNote (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"}}]})(props);
};
function HiNewspaper (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"}}]})(props);
};
function HiOfficeBuilding (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z","clipRule":"evenodd"}}]})(props);
};
function HiPaperAirplane (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}}]})(props);
};
function HiPaperClip (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z","clipRule":"evenodd"}}]})(props);
};
function HiPause (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiPencilAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z","clipRule":"evenodd"}}]})(props);
};
function HiPencil (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}}]})(props);
};
function HiPhoneIncoming (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"}},{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}}]})(props);
};
function HiPhoneMissedCall (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}},{"tag":"path","attr":{"d":"M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"}}]})(props);
};
function HiPhoneOutgoing (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"}},{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}}]})(props);
};
function HiPhone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}}]})(props);
};
function HiPhotograph (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z","clipRule":"evenodd"}}]})(props);
};
function HiPlay (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clipRule":"evenodd"}}]})(props);
};
function HiPlusCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z","clipRule":"evenodd"}}]})(props);
};
function HiPlusSm (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiPlus (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiPresentationChartBar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z","clipRule":"evenodd"}}]})(props);
};
function HiPresentationChartLine (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiPrinter (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z","clipRule":"evenodd"}}]})(props);
};
function HiPuzzle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"}}]})(props);
};
function HiQrcode (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"}}]})(props);
};
function HiQuestionMarkCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
};
function HiReceiptRefund (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z","clipRule":"evenodd"}}]})(props);
};
function HiReceiptTax (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z","clipRule":"evenodd"}}]})(props);
};
function HiRefresh (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clipRule":"evenodd"}}]})(props);
};
function HiReply (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiRewind (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"}}]})(props);
};
function HiRss (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"}},{"tag":"path","attr":{"d":"M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"}}]})(props);
};
function HiSaveAs (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"}},{"tag":"path","attr":{"d":"M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"}}]})(props);
};
function HiSave (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"}}]})(props);
};
function HiScale (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z","clipRule":"evenodd"}}]})(props);
};
function HiScissors (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"}}]})(props);
};
function HiSearchCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 9a2 2 0 114 0 2 2 0 01-4 0z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z","clipRule":"evenodd"}}]})(props);
};
function HiSearch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clipRule":"evenodd"}}]})(props);
};
function HiSelector (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiServer (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z","clipRule":"evenodd"}}]})(props);
};
function HiShare (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"}}]})(props);
};
function HiShieldCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiShieldExclamation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z","clipRule":"evenodd"}}]})(props);
};
function HiShoppingBag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z","clipRule":"evenodd"}}]})(props);
};
function HiShoppingCart (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}}]})(props);
};
function HiSortAscending (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"}}]})(props);
};
function HiSortDescending (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"}}]})(props);
};
function HiSparkles (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z","clipRule":"evenodd"}}]})(props);
};
function HiSpeakerphone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z","clipRule":"evenodd"}}]})(props);
};
function HiStar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}}]})(props);
};
function HiStatusOffline (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"}}]})(props);
};
function HiStatusOnline (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiStop (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z","clipRule":"evenodd"}}]})(props);
};
function HiSun (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clipRule":"evenodd"}}]})(props);
};
function HiSupport (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z","clipRule":"evenodd"}}]})(props);
};
function HiSwitchHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"}}]})(props);
};
function HiSwitchVertical (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"}}]})(props);
};
function HiTable (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z","clipRule":"evenodd"}}]})(props);
};
function HiTag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
};
function HiTemplate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"}}]})(props);
};
function HiTerminal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z","clipRule":"evenodd"}}]})(props);
};
function HiThumbDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"}}]})(props);
};
function HiThumbUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"}}]})(props);
};
function HiTicket (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"}}]})(props);
};
function HiTranslate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z","clipRule":"evenodd"}}]})(props);
};
function HiTrash (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiTrendingDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z","clipRule":"evenodd"}}]})(props);
};
function HiTrendingUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z","clipRule":"evenodd"}}]})(props);
};
function HiTruck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}},{"tag":"path","attr":{"d":"M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"}}]})(props);
};
function HiUpload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiUserAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"}}]})(props);
};
function HiUserCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clipRule":"evenodd"}}]})(props);
};
function HiUserGroup (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"}}]})(props);
};
function HiUserRemove (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"}}]})(props);
};
function HiUser (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clipRule":"evenodd"}}]})(props);
};
function HiUsers (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"}}]})(props);
};
function HiVariable (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z","clipRule":"evenodd"}}]})(props);
};
function HiVideoCamera (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"}}]})(props);
};
function HiViewBoards (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"}}]})(props);
};
function HiViewGridAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"}}]})(props);
};
function HiViewGrid (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"}}]})(props);
};
function HiViewList (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiVolumeOff (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiVolumeUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z","clipRule":"evenodd"}}]})(props);
};
function HiWifi (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiXCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clipRule":"evenodd"}}]})(props);
};
function HiX (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiZoomIn (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z","clipRule":"evenodd"}}]})(props);
};
function HiZoomOut (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clipRule":"evenodd"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiOutlineAcademicCap (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"d":"M12 14l9-5-9-5-9 5 9 5z"}},{"tag":"path","attr":{"d":"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"}}]})(props);
};
function HiOutlineAdjustments (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}}]})(props);
};
function HiOutlineAnnotation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"}}]})(props);
};
function HiOutlineArchive (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"}}]})(props);
};
function HiOutlineArrowCircleDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"}}]})(props);
};
function HiOutlineArrowCircleLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"}}]})(props);
};
function HiOutlineArrowCircleRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineArrowCircleUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"}}]})(props);
};
function HiOutlineArrowDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 14l-7 7m0 0l-7-7m7 7V3"}}]})(props);
};
function HiOutlineArrowLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 19l-7-7m0 0l7-7m-7 7h18"}}]})(props);
};
function HiOutlineArrowNarrowDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 17l-4 4m0 0l-4-4m4 4V3"}}]})(props);
};
function HiOutlineArrowNarrowLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 16l-4-4m0 0l4-4m-4 4h18"}}]})(props);
};
function HiOutlineArrowNarrowRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 8l4 4m0 0l-4 4m4-4H3"}}]})(props);
};
function HiOutlineArrowNarrowUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 7l4-4m0 0l4 4m-4-4v18"}}]})(props);
};
function HiOutlineArrowRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14 5l7 7m0 0l-7 7m7-7H3"}}]})(props);
};
function HiOutlineArrowSmDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 13l-5 5m0 0l-5-5m5 5V6"}}]})(props);
};
function HiOutlineArrowSmLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 17l-5-5m0 0l5-5m-5 5h12"}}]})(props);
};
function HiOutlineArrowSmRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 7l5 5m0 0l-5 5m5-5H6"}}]})(props);
};
function HiOutlineArrowSmUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 11l5-5m0 0l5 5m-5-5v12"}}]})(props);
};
function HiOutlineArrowUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 10l7-7m0 0l7 7m-7-7v18"}}]})(props);
};
function HiOutlineArrowsExpand (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"}}]})(props);
};
function HiOutlineAtSymbol (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"}}]})(props);
};
function HiOutlineBackspace (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"}}]})(props);
};
function HiOutlineBadgeCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"}}]})(props);
};
function HiOutlineBan (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"}}]})(props);
};
function HiOutlineBeaker (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}}]})(props);
};
function HiOutlineBell (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"}}]})(props);
};
function HiOutlineBookOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"}}]})(props);
};
function HiOutlineBookmarkAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlineBookmark (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"}}]})(props);
};
function HiOutlineBriefcase (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(props);
};
function HiOutlineCake (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"}}]})(props);
};
function HiOutlineCalculator (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"}}]})(props);
};
function HiOutlineCalendar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlineCamera (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 13a3 3 0 11-6 0 3 3 0 016 0z"}}]})(props);
};
function HiOutlineCash (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"}}]})(props);
};
function HiOutlineChartBar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}}]})(props);
};
function HiOutlineChartPie (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"}}]})(props);
};
function HiOutlineChartSquareBar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlineChatAlt2 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"}}]})(props);
};
function HiOutlineChatAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"}}]})(props);
};
function HiOutlineChat (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"}}]})(props);
};
function HiOutlineCheckCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 13l4 4L19 7"}}]})(props);
};
function HiOutlineChevronDoubleDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 13l-7 7-7-7m14-8l-7 7-7-7"}}]})(props);
};
function HiOutlineChevronDoubleLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 19l-7-7 7-7m8 14l-7-7 7-7"}}]})(props);
};
function HiOutlineChevronDoubleRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 5l7 7-7 7M5 5l7 7-7 7"}}]})(props);
};
function HiOutlineChevronDoubleUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 11l7-7 7 7M5 19l7-7 7 7"}}]})(props);
};
function HiOutlineChevronDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 9l-7 7-7-7"}}]})(props);
};
function HiOutlineChevronLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 19l-7-7 7-7"}}]})(props);
};
function HiOutlineChevronRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 5l7 7-7 7"}}]})(props);
};
function HiOutlineChevronUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 15l7-7 7 7"}}]})(props);
};
function HiOutlineChip (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"}}]})(props);
};
function HiOutlineClipboardCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"}}]})(props);
};
function HiOutlineClipboardCopy (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"}}]})(props);
};
function HiOutlineClipboardList (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"}}]})(props);
};
function HiOutlineClipboard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}}]})(props);
};
function HiOutlineClock (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCloudDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"}}]})(props);
};
function HiOutlineCloudUpload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"}}]})(props);
};
function HiOutlineCloud (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"}}]})(props);
};
function HiOutlineCode (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}}]})(props);
};
function HiOutlineCog (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}}]})(props);
};
function HiOutlineCollection (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"}}]})(props);
};
function HiOutlineColorSwatch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"}}]})(props);
};
function HiOutlineCreditCard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"}}]})(props);
};
function HiOutlineCubeTransparent (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"}}]})(props);
};
function HiOutlineCube (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"}}]})(props);
};
function HiOutlineCurrencyBangladeshi (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyDollar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyEuro (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyPound (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyRupee (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyYen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCursorClick (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"}}]})(props);
};
function HiOutlineDatabase (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"}}]})(props);
};
function HiOutlineDesktopComputer (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(props);
};
function HiOutlineDeviceMobile (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"}}]})(props);
};
function HiOutlineDeviceTablet (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"}}]})(props);
};
function HiOutlineDocumentAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocumentDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocumentDuplicate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"}}]})(props);
};
function HiOutlineDocumentRemove (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocumentReport (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocumentSearch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"}}]})(props);
};
function HiOutlineDocumentText (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocument (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"}}]})(props);
};
function HiOutlineDotsCircleHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineDotsHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"}}]})(props);
};
function HiOutlineDotsVertical (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"}}]})(props);
};
function HiOutlineDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"}}]})(props);
};
function HiOutlineDuplicate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"}}]})(props);
};
function HiOutlineEmojiHappy (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineEmojiSad (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineExclamationCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineExclamation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}}]})(props);
};
function HiOutlineExternalLink (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}}]})(props);
};
function HiOutlineEyeOff (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"}}]})(props);
};
function HiOutlineEye (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}}]})(props);
};
function HiOutlineFastForward (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"}}]})(props);
};
function HiOutlineFilm (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"}}]})(props);
};
function HiOutlineFilter (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"}}]})(props);
};
function HiOutlineFingerPrint (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"}}]})(props);
};
function HiOutlineFire (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"}}]})(props);
};
function HiOutlineFlag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"}}]})(props);
};
function HiOutlineFolderAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}}]})(props);
};
function HiOutlineFolderDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}}]})(props);
};
function HiOutlineFolderOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineFolderRemove (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}}]})(props);
};
function HiOutlineFolder (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"}}]})(props);
};
function HiOutlineGift (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"}}]})(props);
};
function HiOutlineGlobeAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}}]})(props);
};
function HiOutlineGlobe (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineHand (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"}}]})(props);
};
function HiOutlineHashtag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 20l4-16m2 16l4-16M6 9h14M4 15h14"}}]})(props);
};
function HiOutlineHeart (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}}]})(props);
};
function HiOutlineHome (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}}]})(props);
};
function HiOutlineIdentification (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"}}]})(props);
};
function HiOutlineInboxIn (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"}}]})(props);
};
function HiOutlineInbox (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"}}]})(props);
};
function HiOutlineInformationCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineKey (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"}}]})(props);
};
function HiOutlineLibrary (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"}}]})(props);
};
function HiOutlineLightBulb (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}}]})(props);
};
function HiOutlineLightningBolt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 10V3L4 14h7v7l9-11h-7z"}}]})(props);
};
function HiOutlineLink (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}}]})(props);
};
function HiOutlineLocationMarker (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 11a3 3 0 11-6 0 3 3 0 016 0z"}}]})(props);
};
function HiOutlineLockClosed (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"}}]})(props);
};
function HiOutlineLockOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}}]})(props);
};
function HiOutlineLogin (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"}}]})(props);
};
function HiOutlineLogout (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}}]})(props);
};
function HiOutlineMailOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"}}]})(props);
};
function HiOutlineMail (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(props);
};
function HiOutlineMap (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"}}]})(props);
};
function HiOutlineMenuAlt1 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 6h16M4 12h8m-8 6h16"}}]})(props);
};
function HiOutlineMenuAlt2 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 6h16M4 12h16M4 18h7"}}]})(props);
};
function HiOutlineMenuAlt3 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 6h16M4 12h16m-7 6h7"}}]})(props);
};
function HiOutlineMenuAlt4 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 8h16M4 16h16"}}]})(props);
};
function HiOutlineMenu (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 6h16M4 12h16M4 18h16"}}]})(props);
};
function HiOutlineMicrophone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"}}]})(props);
};
function HiOutlineMinusCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineMinusSm (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M18 12H6"}}]})(props);
};
function HiOutlineMinus (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M20 12H4"}}]})(props);
};
function HiOutlineMoon (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}}]})(props);
};
function HiOutlineMusicNote (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"}}]})(props);
};
function HiOutlineNewspaper (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"}}]})(props);
};
function HiOutlineOfficeBuilding (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"}}]})(props);
};
function HiOutlinePaperAirplane (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"}}]})(props);
};
function HiOutlinePaperClip (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"}}]})(props);
};
function HiOutlinePause (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlinePencilAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}}]})(props);
};
function HiOutlinePencil (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"}}]})(props);
};
function HiOutlinePhoneIncoming (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"}}]})(props);
};
function HiOutlinePhoneMissedCall (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"}}]})(props);
};
function HiOutlinePhoneOutgoing (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"}}]})(props);
};
function HiOutlinePhone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}}]})(props);
};
function HiOutlinePhotograph (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlinePlay (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlinePlusCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlinePlusSm (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 6v6m0 0v6m0-6h6m-6 0H6"}}]})(props);
};
function HiOutlinePlus (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 4v16m8-8H4"}}]})(props);
};
function HiOutlinePresentationChartBar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"}}]})(props);
};
function HiOutlinePresentationChartLine (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"}}]})(props);
};
function HiOutlinePrinter (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"}}]})(props);
};
function HiOutlinePuzzle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"}}]})(props);
};
function HiOutlineQrcode (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"}}]})(props);
};
function HiOutlineQuestionMarkCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineReceiptRefund (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"}}]})(props);
};
function HiOutlineReceiptTax (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"}}]})(props);
};
function HiOutlineRefresh (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}}]})(props);
};
function HiOutlineReply (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"}}]})(props);
};
function HiOutlineRewind (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"}}]})(props);
};
function HiOutlineRss (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"}}]})(props);
};
function HiOutlineSaveAs (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"}}]})(props);
};
function HiOutlineSave (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}}]})(props);
};
function HiOutlineScale (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"}}]})(props);
};
function HiOutlineScissors (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"}}]})(props);
};
function HiOutlineSearchCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineSearch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}}]})(props);
};
function HiOutlineSelector (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 9l4-4 4 4m0 6l-4 4-4-4"}}]})(props);
};
function HiOutlineServer (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"}}]})(props);
};
function HiOutlineShare (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"}}]})(props);
};
function HiOutlineShieldCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}}]})(props);
};
function HiOutlineShieldExclamation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"}}]})(props);
};
function HiOutlineShoppingBag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"}}]})(props);
};
function HiOutlineShoppingCart (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}}]})(props);
};
function HiOutlineSortAscending (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"}}]})(props);
};
function HiOutlineSortDescending (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"}}]})(props);
};
function HiOutlineSparkles (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"}}]})(props);
};
function HiOutlineSpeakerphone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"}}]})(props);
};
function HiOutlineStar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}}]})(props);
};
function HiOutlineStatusOffline (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"}}]})(props);
};
function HiOutlineStatusOnline (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"}}]})(props);
};
function HiOutlineStop (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"}}]})(props);
};
function HiOutlineSun (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}}]})(props);
};
function HiOutlineSupport (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"}}]})(props);
};
function HiOutlineSwitchHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}}]})(props);
};
function HiOutlineSwitchVertical (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"}}]})(props);
};
function HiOutlineTable (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}}]})(props);
};
function HiOutlineTag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}}]})(props);
};
function HiOutlineTemplate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"}}]})(props);
};
function HiOutlineTerminal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlineThumbDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"}}]})(props);
};
function HiOutlineThumbUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"}}]})(props);
};
function HiOutlineTicket (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"}}]})(props);
};
function HiOutlineTranslate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"}}]})(props);
};
function HiOutlineTrash (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}}]})(props);
};
function HiOutlineTrendingDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"}}]})(props);
};
function HiOutlineTrendingUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"}}]})(props);
};
function HiOutlineTruck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"}}]})(props);
};
function HiOutlineUpload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"}}]})(props);
};
function HiOutlineUserAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"}}]})(props);
};
function HiOutlineUserCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineUserGroup (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}}]})(props);
};
function HiOutlineUserRemove (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"}}]})(props);
};
function HiOutlineUser (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}}]})(props);
};
function HiOutlineUsers (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"}}]})(props);
};
function HiOutlineVariable (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"}}]})(props);
};
function HiOutlineVideoCamera (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}}]})(props);
};
function HiOutlineViewBoards (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"}}]})(props);
};
function HiOutlineViewGridAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"}}]})(props);
};
function HiOutlineViewGrid (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"}}]})(props);
};
function HiOutlineViewList (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 6h16M4 10h16M4 14h16M4 18h16"}}]})(props);
};
function HiOutlineVolumeOff (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z","clipRule":"evenodd"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"}}]})(props);
};
function HiOutlineVolumeUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"}}]})(props);
};
function HiOutlineWifi (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"}}]})(props);
};
function HiOutlineXCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineX (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M6 18L18 6M6 6l12 12"}}]})(props);
};
function HiOutlineZoomIn (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"}}]})(props);
};
function HiOutlineZoomOut (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"}}]})(props);
};


/***/ }),

/***/ "./node_modules/react-icons/lib/cjs/iconBase.js":
/*!******************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/iconBase.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconBase = exports.GenIcon = void 0;
var React = __webpack_require__(/*! react */ "react");
var iconContext_1 = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/cjs/iconContext.js");
function Tree2Element(tree) {
    return tree && tree.map(function (node, i) { return React.createElement(node.tag, __assign({ key: i }, node.attr), Tree2Element(node.child)); });
}
function GenIcon(data) {
    return function (props) { return (React.createElement(IconBase, __assign({ attr: __assign({}, data.attr) }, props), Tree2Element(data.child))); };
}
exports.GenIcon = GenIcon;
function IconBase(props) {
    var elem = function (conf) {
        var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className)
            className = conf.className;
        if (props.className)
            className = (className ? className + ' ' : '') + props.className;
        return (React.createElement("svg", __assign({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, conf.attr, attr, svgProps, { className: className, style: __assign(__assign({ color: props.color || conf.color }, conf.style), props.style), height: computedSize, width: computedSize, xmlns: "http://www.w3.org/2000/svg" }),
            title && React.createElement("title", null, title),
            props.children));
    };
    return iconContext_1.IconContext !== undefined
        ? React.createElement(iconContext_1.IconContext.Consumer, null, function (conf) { return elem(conf); })
        : elem(iconContext_1.DefaultContext);
}
exports.IconBase = IconBase;


/***/ }),

/***/ "./node_modules/react-icons/lib/cjs/iconContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/iconContext.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconContext = exports.DefaultContext = void 0;
var React = __webpack_require__(/*! react */ "react");
exports.DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined,
};
exports.IconContext = React.createContext && React.createContext(exports.DefaultContext);


/***/ }),

/***/ "./node_modules/react-icons/lib/cjs/iconsManifest.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/iconsManifest.js ***!
  \***********************************************************/
/***/ ((module) => {

module.exports.IconsManifest = [
  {
    "id": "fa",
    "name": "Font Awesome",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  }
]

/***/ }),

/***/ "./node_modules/react-icons/lib/cjs/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./iconsManifest */ "./node_modules/react-icons/lib/cjs/iconsManifest.js"), exports);
__exportStar(__webpack_require__(/*! ./iconBase */ "./node_modules/react-icons/lib/cjs/iconBase.js"), exports);
__exportStar(__webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/cjs/iconContext.js"), exports);


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-number-format");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/transactions/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqQyxhQUFhLG1CQUFPLENBQUMsd0VBQWU7Ozs7Ozs7Ozs7OztBQ2RwQzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL2NvbXBvbmVudHMvYXRvbXMvY29udGVudC9IZWFkZXIuanN4Iiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9jb21wb25lbnRzL2F0b21zL2NvbnRlbnQvU3ViSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0Ly4vY29tcG9uZW50cy9hdG9tcy9zaWRlYmFyL0RpdmlkZXIuanN4Iiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9jb21wb25lbnRzL2F0b21zL3NpZGViYXIvTmF2SXRlbS5qc3giLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL3NpZGViYXIvU2lkZWJhci5qc3giLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9wYWdlcy90cmFuc2FjdGlvbnMvaW5kZXguanN4Iiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvaGkvaW5kZXguZXNtLmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2Nqcy9pY29uQmFzZS5qcyIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9janMvaWNvbkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvY2pzL2ljb25zTWFuaWZlc3QuanMiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvY2pzL2luZGV4LmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJuZXh0L3NjcmlwdFwiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC1udW1iZXItZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvaWdub3JlZHxDOlxcVXNlcnNcXEFkbWluXFxEb2N1bWVudHNcXEdpdEh1YlxcbG9rYWxva2EtbWl0cmFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSGVhZGVyID0gKHsgdGl0bGUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQnPnt0aXRsZX08L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImNvbnN0IFN1YkhlYWRlciA9ICh7IHRpdGxlIH0pID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LWJvbGQgdGV4dC1ibHVlR3JheS00MDAnPnt0aXRsZX08L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ViSGVhZGVyXHJcbiIsImNvbnN0IERpdmlkZXIgPSAoeyBsYWJlbCB9KSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1ibHVlR3JheS00MDAgZm9udC1ib2xkIHVwcGVyY2FzZSBweS0yIHB4LTQnPntsYWJlbH08L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGl2aWRlclxyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTmF2SXRlbSA9ICh7IGhyZWYsIGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfSBwYXNzSHJlZj17dHJ1ZX0+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciBmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBweS0yLjUgcHgtNCByb3VuZGVkIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGhvdmVyOmJnLWJsdWVHcmF5LTcwMCBjYXBpdGFsaXplIGhvdmVyOnRleHQtYmx1ZUdyYXktNTAgJHtcclxuICAgICAgICAgICAgICAgICAgICBhc1BhdGggPT0gaHJlZiA/ICdiZy1ibHVlR3JheS03MDAnIDogJydcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW1cclxuIiwiaW1wb3J0IHsgSGlCYWRnZUNoZWNrLCBIaUNsb2NrLCBIaVRyZW5kaW5nVXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuaW1wb3J0IHsgQWlGaWxsRGFzaGJvYXJkIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCIuLi9hdG9tcy9zaWRlYmFyL0RpdmlkZXJcIjtcclxuaW1wb3J0IE5hdkl0ZW0gZnJvbSBcIi4uL2F0b21zL3NpZGViYXIvTmF2SXRlbVwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vbW9sZWN1bGVzL3NpZGViYXIvU2lkZWJhclwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5NaXRyYSB4IExva2Fsb2thIHwgQWRtaW4gUGFuZWw8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBZG1pbiBwYW5lbCBmb3IgTWl0cmFcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiBTaWRlYmFyICovfVxyXG4gICAgICA8U2lkZWJhcj5cclxuICAgICAgICB7LyogPE5hdkl0ZW0gaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpRmlsbERhc2hib2FyZCBjbGFzc05hbWU9J3ctNSBoLTUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGFzaGJvYXJkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPiAqL31cclxuICAgICAgICA8RGl2aWRlciBsYWJlbD1cIm9yZGVyc1wiIC8+XHJcblxyXG4gICAgICAgIDxOYXZJdGVtIGhyZWY9XCIvdHJhbnNhY3Rpb25zXCI+XHJcbiAgICAgICAgICA8SGlCYWRnZUNoZWNrIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxyXG4gICAgICAgICAgPHNwYW4+VHJhbnNhY3Rpb25zPC9zcGFuPlxyXG4gICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgPC9TaWRlYmFyPlxyXG5cclxuICAgICAgey8qIE1haW4gQ29udGVudCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcHktOCBweC0xMCBiZy1ibHVlR3JheS04MDAgbWF4LWgtc2NyZWVuIGgtc2NyZWVuIG92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgeyBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKClcclxuICAgIGNvbnN0IGxvZ291dEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNpZ25PdXQoe1xyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja1VybDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGViYXInPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBweC00Jz5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0ndy04IGgtOCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSdub25lJyB2aWV3Qm94PScwIDAgMjQgMjQnIHN0cm9rZT0nY3VycmVudENvbG9yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9JzInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPSdNOSAxMmwyIDIgNC00TTcuODM1IDQuNjk3YTMuNDIgMy40MiAwIDAwMS45NDYtLjgwNiAzLjQyIDMuNDIgMCAwMTQuNDM4IDAgMy40MiAzLjQyIDAgMDAxLjk0Ni44MDYgMy40MiAzLjQyIDAgMDEzLjEzOCAzLjEzOCAzLjQyIDMuNDIgMCAwMC44MDYgMS45NDYgMy40MiAzLjQyIDAgMDEwIDQuNDM4IDMuNDIgMy40MiAwIDAwLS44MDYgMS45NDYgMy40MiAzLjQyIDAgMDEtMy4xMzggMy4xMzggMy40MiAzLjQyIDAgMDAtMS45NDYuODA2IDMuNDIgMy40MiAwIDAxLTQuNDM4IDAgMy40MiAzLjQyIDAgMDAtMS45NDYtLjgwNiAzLjQyIDMuNDIgMCAwMS0zLjEzOC0zLjEzOCAzLjQyIDMuNDIgMCAwMC0uODA2LTEuOTQ2IDMuNDIgMy40MiAwIDAxMC00LjQzOCAzLjQyIDMuNDIgMCAwMC44MDYtMS45NDYgMy40MiAzLjQyIDAgMDEzLjEzOC0zLjEzOHonXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCc+TG9rYWxva2E8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBzcGFjZS15LTEnPntjaGlsZHJlbn08L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdweC00IHB5LTIgcm91bmRlZCBjdXJzb3ItcG9pbnRlciBiZy1yZWQtNTAwIHctZnVsbCcgb25DbGljaz17KCkgPT4gbG9nb3V0SGFuZGxlcigpfT5cclxuICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9hdG9tcy9jb250ZW50L0hlYWRlclwiO1xyXG5pbXBvcnQgU3ViSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvYXRvbXMvY29udGVudC9TdWJIZWFkZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgaW5kZXggPSAoeyB0cmFuc2FjdGlvbnMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QXJ1bWFuaXMgeCBMb2thbG9rYSB8IEFkbWluIFBhbmVsPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQWRtaW4gcGFuZWwgZm9yIEFydW1hbmlzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgPEhlYWRlciB0aXRsZT1cIlRyYW5zYWN0aW9uc1wiIC8+XHJcbiAgICAgICAgPFN1YkhlYWRlciB0aXRsZT1cIkFsbCBvcmRlcnMgdGhhdCBkZWxpdmVyZWQgdG8gY3VzdG9tZXJzXCIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7dHJhbnNhY3Rpb25zPy5sZW5ndGggPT0gMCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxnIHRleHQtY2VudGVyIGJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci1ibHVlR3JheS0xMDAgcC04IHJvdW5kZWQgaC1mdWxsIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICBObyBUcmFuc2FjdGlvblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7dHJhbnNhY3Rpb25zPy5sZW5ndGggIT0gMCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXktMiBvdmVyZmxvdy14LWF1dG8gc206LW14LTYgbGc6LW14LThcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgYWxpZ24tbWlkZGxlIGlubGluZS1ibG9jayBtaW4tdy1mdWxsIHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1iIGJvcmRlci1ibHVlR3JheS03MDAgc206cm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBkaXZpZGUteSBkaXZpZGUtYmx1ZUdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWJsdWVHcmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtYmx1ZUdyYXktNDAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbiBDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ibHVlR3JheS00MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEN1c3RvbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ibHVlR3JheS00MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ibHVlR3JheS00MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgTWV0aG9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ibHVlR3JheS00MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy1ibHVlR3JheS05MDAgZGl2aWRlLXkgZGl2aWRlLWJsdWVHcmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3RyYW5zYWN0aW9ucz8ubWFwKCh0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWJsdWVHcmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0LmNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtYmx1ZUdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZUdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QudXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlR3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dC5zaG91bGRQYXlBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD17XCJScC4gXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlR3JheS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dC5wYXltZW50TWV0aG9kLnJlcGxhY2UoXCJJRF9cIiwgXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSB0ZXh0LWJsdWVHcmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dC5wYXltZW50U3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IGdldFVzZXIgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3VzZXJzP2VtYWlsPSR7c2Vzc2lvbj8udXNlcj8uZW1haWx9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9uLmp3dH1gLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vdHJhbnNhY3Rpb25zP19zb3J0PWNyZWF0ZWRBdDphc2MmY291cG9uLmNvZGU9JHtnZXRVc2VyWzBdLmNvdXBvbnNbMF0uY29kZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Nlc3Npb24uand0fWAsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHRyYW5zYWN0aW9uczogZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvLyBUSElTIEZJTEUgSVMgQVVUTyBHRU5FUkFURURcbmltcG9ydCB7IEdlbkljb24gfSBmcm9tICcuLi9saWInO1xuZXhwb3J0IGZ1bmN0aW9uIEhpQWNhZGVtaWNDYXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTAuMzk0IDIuMDhhMSAxIDAgMDAtLjc4OCAwbC03IDNhMSAxIDAgMDAwIDEuODRMNS4yNSA4LjA1MWEuOTk5Ljk5OSAwIDAxLjM1Ni0uMjU3bDQtMS43MTRhMSAxIDAgMTEuNzg4IDEuODM4TDcuNjY3IDkuMDg4bDEuOTQuODMxYTEgMSAwIDAwLjc4NyAwbDctM2ExIDEgMCAwMDAtMS44MzhsLTctM3pNMy4zMSA5LjM5N0w1IDEwLjEydjQuMTAyYTguOTY5IDguOTY5IDAgMDAtMS4wNS0uMTc0IDEgMSAwIDAxLS44OS0uODkgMTEuMTE1IDExLjExNSAwIDAxLjI1LTMuNzYyek05LjMgMTYuNTczQTkuMDI2IDkuMDI2IDAgMDA3IDE0LjkzNXYtMy45NTdsMS44MTguNzhhMyAzIDAgMDAyLjM2NCAwbDUuNTA4LTIuMzYxYTExLjAyNiAxMS4wMjYgMCAwMS4yNSAzLjc2MiAxIDEgMCAwMS0uODkuODkgOC45NjggOC45NjggMCAwMC01LjM1IDIuNTI0IDEgMSAwIDAxLTEuNCAwek02IDE4YTEgMSAwIDAwMS0xdi0yLjA2NWE4LjkzNSA4LjkzNSAwIDAwLTItLjcxMlYxN2ExIDEgMCAwMDEgMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBZGp1c3RtZW50cyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk01IDRhMSAxIDAgMDAtMiAwdjcuMjY4YTIgMiAwIDAwMCAzLjQ2NFYxNmExIDEgMCAxMDIgMHYtMS4yNjhhMiAyIDAgMDAwLTMuNDY0VjR6TTExIDRhMSAxIDAgMTAtMiAwdjEuMjY4YTIgMiAwIDAwMCAzLjQ2NFYxNmExIDEgMCAxMDIgMFY4LjczMmEyIDIgMCAwMDAtMy40NjRWNHpNMTYgM2ExIDEgMCAwMTEgMXY3LjI2OGEyIDIgMCAwMTAgMy40NjRWMTZhMSAxIDAgMTEtMiAwdi0xLjI2OGEyIDIgMCAwMTAtMy40NjRWNGExIDEgMCAwMTEtMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBbm5vdGF0aW9uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCAxM1Y1YTIgMiAwIDAwLTItMkg0YTIgMiAwIDAwLTIgMnY4YTIgMiAwIDAwMiAyaDNsMyAzIDMtM2gzYTIgMiAwIDAwMi0yek01IDdhMSAxIDAgMDExLTFoOGExIDEgMCAxMTAgMkg2YTEgMSAwIDAxLTEtMXptMSAzYTEgMSAwIDEwMCAyaDNhMSAxIDAgMTAwLTJINnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXJjaGl2ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk00IDNhMiAyIDAgMTAwIDRoMTJhMiAyIDAgMTAwLTRINHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA4aDE0djdhMiAyIDAgMDEtMiAySDVhMiAyIDAgMDEtMi0yVjh6bTUgM2ExIDEgMCAwMTEtMWgyYTEgMSAwIDExMCAySDlhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd0NpcmNsZURvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6bTEtMTFhMSAxIDAgMTAtMiAwdjMuNTg2TDcuNzA3IDkuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0IDBsMy0zYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDExIDEwLjU4NlY3elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd0NpcmNsZUxlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6bS43MDctMTAuMjkzYTEgMSAwIDAwLTEuNDE0LTEuNDE0bC0zIDNhMSAxIDAgMDAwIDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0LTEuNDE0TDkuNDE0IDExSDEzYTEgMSAwIDEwMC0ySDkuNDE0bDEuMjkzLTEuMjkzelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd0NpcmNsZVJpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2em0zLjcwNy04LjcwN2wtMy0zYTEgMSAwIDAwLTEuNDE0IDEuNDE0TDEwLjU4NiA5SDdhMSAxIDAgMTAwIDJoMy41ODZsLTEuMjkzIDEuMjkzYTEgMSAwIDEwMS40MTQgMS40MTRsMy0zYTEgMSAwIDAwMC0xLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXJyb3dDaXJjbGVVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMy43MDctOC43MDdsLTMtM2ExIDEgMCAwMC0xLjQxNCAwbC0zIDNhMSAxIDAgMDAxLjQxNCAxLjQxNEw5IDkuNDE0VjEzYTEgMSAwIDEwMiAwVjkuNDE0bDEuMjkzIDEuMjkzYTEgMSAwIDAwMS40MTQtMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93RG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTYuNzA3IDEwLjI5M2ExIDEgMCAwMTAgMS40MTRsLTYgNmExIDEgMCAwMS0xLjQxNCAwbC02LTZhMSAxIDAgMTExLjQxNC0xLjQxNEw5IDE0LjU4NlYzYTEgMSAwIDAxMiAwdjExLjU4Nmw0LjI5My00LjI5M2ExIDEgMCAwMTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93TGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOS43MDcgMTYuNzA3YTEgMSAwIDAxLTEuNDE0IDBsLTYtNmExIDEgMCAwMTAtMS40MTRsNi02YTEgMSAwIDAxMS40MTQgMS40MTRMNS40MTQgOUgxN2ExIDEgMCAxMTAgMkg1LjQxNGw0LjI5MyA0LjI5M2ExIDEgMCAwMTAgMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93TmFycm93RG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTQuNzA3IDEyLjI5M2ExIDEgMCAwMTAgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMTExLjQxNC0xLjQxNEw5IDE0LjU4NlYzYTEgMSAwIDAxMiAwdjExLjU4NmwyLjI5My0yLjI5M2ExIDEgMCAwMTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93TmFycm93TGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNy43MDcgMTQuNzA3YTEgMSAwIDAxLTEuNDE0IDBsLTQtNGExIDEgMCAwMTAtMS40MTRsNC00YTEgMSAwIDAxMS40MTQgMS40MTRMNS40MTQgOUgxN2ExIDEgMCAxMTAgMkg1LjQxNGwyLjI5MyAyLjI5M2ExIDEgMCAwMTAgMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93TmFycm93UmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEyLjI5MyA1LjI5M2ExIDEgMCAwMTEuNDE0IDBsNCA0YTEgMSAwIDAxMCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0LTEuNDE0TDE0LjU4NiAxMUgzYTEgMSAwIDExMC0yaDExLjU4NmwtMi4yOTMtMi4yOTNhMSAxIDAgMDEwLTEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd05hcnJvd1VwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01LjI5MyA3LjcwN2ExIDEgMCAwMTAtMS40MTRsNC00YTEgMSAwIDAxMS40MTQgMGw0IDRhMSAxIDAgMDEtMS40MTQgMS40MTRMMTEgNS40MTRWMTdhMSAxIDAgMTEtMiAwVjUuNDE0TDYuNzA3IDcuNzA3YTEgMSAwIDAxLTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93UmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwLjI5MyAzLjI5M2ExIDEgMCAwMTEuNDE0IDBsNiA2YTEgMSAwIDAxMCAxLjQxNGwtNiA2YTEgMSAwIDAxLTEuNDE0LTEuNDE0TDE0LjU4NiAxMUgzYTEgMSAwIDExMC0yaDExLjU4NmwtNC4yOTMtNC4yOTNhMSAxIDAgMDEwLTEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd1NtRG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTQuNzA3IDEwLjI5M2ExIDEgMCAwMTAgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMTExLjQxNC0xLjQxNEw5IDEyLjU4NlY1YTEgMSAwIDAxMiAwdjcuNTg2bDIuMjkzLTIuMjkzYTEgMSAwIDAxMS40MTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXJyb3dTbUxlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkuNzA3IDE0LjcwN2ExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMDEwLTEuNDE0bDQtNGExIDEgMCAwMTEuNDE0IDEuNDE0TDcuNDE0IDlIMTVhMSAxIDAgMTEwIDJINy40MTRsMi4yOTMgMi4yOTNhMSAxIDAgMDEwIDEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd1NtUmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwLjI5MyA1LjI5M2ExIDEgMCAwMTEuNDE0IDBsNCA0YTEgMSAwIDAxMCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0LTEuNDE0TDEyLjU4NiAxMUg1YTEgMSAwIDExMC0yaDcuNTg2bC0yLjI5My0yLjI5M2ExIDEgMCAwMTAtMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93U21VcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNS4yOTMgOS43MDdhMSAxIDAgMDEwLTEuNDE0bDQtNGExIDEgMCAwMTEuNDE0IDBsNCA0YTEgMSAwIDAxLTEuNDE0IDEuNDE0TDExIDcuNDE0VjE1YTEgMSAwIDExLTIgMFY3LjQxNEw2LjcwNyA5LjcwN2ExIDEgMCAwMS0xLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd1VwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zLjI5MyA5LjcwN2ExIDEgMCAwMTAtMS40MTRsNi02YTEgMSAwIDAxMS40MTQgMGw2IDZhMSAxIDAgMDEtMS40MTQgMS40MTRMMTEgNS40MTRWMTdhMSAxIDAgMTEtMiAwVjUuNDE0TDQuNzA3IDkuNzA3YTEgMSAwIDAxLTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93c0V4cGFuZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTkgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyA4VjRtMCAwaDRNMyA0bDQgNG04IDBWNG0wIDBoLTRtNCAwbC00IDRtLTggNHY0bTAgMGg0bS00IDBsNC00bTggNGwtNC00bTQgNHYtNG0wIDRoLTRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBdFN5bWJvbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTQuMjQzIDUuNzU3YTYgNiAwIDEwLS45ODYgOS4yODQgMSAxIDAgMTExLjA4NyAxLjY3OEE4IDggMCAxMTE4IDEwYTMgMyAwIDAxLTQuOCAyLjQwMUE0IDQgMCAxMTE0IDEwYTEgMSAwIDEwMiAwYzAtMS41MzctLjU4Ni0zLjA3LTEuNzU3LTQuMjQzek0xMiAxMGEyIDIgMCAxMC00IDAgMiAyIDAgMDA0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUJhY2tzcGFjZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNi43MDcgNC44NzlBMyAzIDAgMDE4LjgyOCA0SDE1YTMgMyAwIDAxMyAzdjZhMyAzIDAgMDEtMyAzSDguODI4YTMgMyAwIDAxLTIuMTItLjg3OWwtNC40MTUtNC40MTRhMSAxIDAgMDEwLTEuNDE0bDQuNDE0LTQuNDE0em00IDIuNDE0YTEgMSAwIDAwLTEuNDE0IDEuNDE0TDEwLjU4NiAxMGwtMS4yOTMgMS4yOTNhMSAxIDAgMTAxLjQxNCAxLjQxNEwxMiAxMS40MTRsMS4yOTMgMS4yOTNhMSAxIDAgMDAxLjQxNC0xLjQxNEwxMy40MTQgMTBsMS4yOTMtMS4yOTNhMSAxIDAgMDAtMS40MTQtMS40MTRMMTIgOC41ODZsLTEuMjkzLTEuMjkzelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlCYWRnZUNoZWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02LjI2NyAzLjQ1NWEzLjA2NiAzLjA2NiAwIDAwMS43NDUtLjcyMyAzLjA2NiAzLjA2NiAwIDAxMy45NzYgMCAzLjA2NiAzLjA2NiAwIDAwMS43NDUuNzIzIDMuMDY2IDMuMDY2IDAgMDEyLjgxMiAyLjgxMmMuMDUxLjY0My4zMDQgMS4yNTQuNzIzIDEuNzQ1YTMuMDY2IDMuMDY2IDAgMDEwIDMuOTc2IDMuMDY2IDMuMDY2IDAgMDAtLjcyMyAxLjc0NSAzLjA2NiAzLjA2NiAwIDAxLTIuODEyIDIuODEyIDMuMDY2IDMuMDY2IDAgMDAtMS43NDUuNzIzIDMuMDY2IDMuMDY2IDAgMDEtMy45NzYgMCAzLjA2NiAzLjA2NiAwIDAwLTEuNzQ1LS43MjMgMy4wNjYgMy4wNjYgMCAwMS0yLjgxMi0yLjgxMiAzLjA2NiAzLjA2NiAwIDAwLS43MjMtMS43NDUgMy4wNjYgMy4wNjYgMCAwMTAtMy45NzYgMy4wNjYgMy4wNjYgMCAwMC43MjMtMS43NDUgMy4wNjYgMy4wNjYgMCAwMTIuODEyLTIuODEyem03LjQ0IDUuMjUyYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDkgMTAuNTg2IDcuNzA3IDkuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDIgMmExIDEgMCAwMDEuNDE0IDBsNC00elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlCYW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEzLjQ3NyAxNC44OUE2IDYgMCAwMTUuMTEgNi41MjRsOC4zNjcgOC4zNjh6bTEuNDE0LTEuNDE0TDYuNTI0IDUuMTFhNiA2IDAgMDE4LjM2NyA4LjM2N3pNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUJlYWtlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNyAyYTEgMSAwIDAwLS43MDcgMS43MDdMNyA0LjQxNHYzLjc1OGExIDEgMCAwMS0uMjkzLjcwN2wtNCA0Qy44MTcgMTQuNzY5IDIuMTU2IDE4IDQuODI4IDE4aDEwLjM0M2MyLjY3MyAwIDQuMDEyLTMuMjMxIDIuMTIyLTUuMTIxbC00LTRBMSAxIDAgMDExMyA4LjE3MlY0LjQxNGwuNzA3LS43MDdBMSAxIDAgMDAxMyAySDd6bTIgNi4xNzJWNGgydjQuMTcyYTMgMyAwIDAwLjg3OSAyLjEybDEuMDI3IDEuMDI4YTQgNCAwIDAwLTIuMTcxLjEwMmwtLjQ3LjE1NmE0IDQgMCAwMS0yLjUzIDBsLS41NjMtLjE4N2ExLjk5MyAxLjk5MyAwIDAwLS4xMTQtLjAzNWwxLjA2My0xLjA2M0EzIDMgMCAwMDkgOC4xNzJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUJlbGwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTAgMmE2IDYgMCAwMC02IDZ2My41ODZsLS43MDcuNzA3QTEgMSAwIDAwNCAxNGgxMmExIDEgMCAwMC43MDctMS43MDdMMTYgMTEuNTg2VjhhNiA2IDAgMDAtNi02ek0xMCAxOGEzIDMgMCAwMS0zLTNoNmEzIDMgMCAwMS0zIDN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQm9va09wZW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOSA0LjgwNEE3Ljk2OCA3Ljk2OCAwIDAwNS41IDRjLTEuMjU1IDAtMi40NDMuMjktMy41LjgwNHYxMEE3Ljk2OSA3Ljk2OSAwIDAxNS41IDE0YzEuNjY5IDAgMy4yMTguNTEgNC41IDEuMzg1QTcuOTYyIDcuOTYyIDAgMDExNC41IDE0YzEuMjU1IDAgMi40NDMuMjkgMy41LjgwNHYtMTBBNy45NjggNy45NjggMCAwMDE0LjUgNGMtMS4yNTUgMC0yLjQ0My4yOS0zLjUuODA0VjEyYTEgMSAwIDExLTIgMFY0LjgwNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlCb29rbWFya0FsdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA1YTIgMiAwIDAxMi0yaDEwYTIgMiAwIDAxMiAydjEwYTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMlY1em0xMSAxSDZ2OGw0LTIgNCAyVjZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUJvb2ttYXJrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTUgNGEyIDIgMCAwMTItMmg2YTIgMiAwIDAxMiAydjE0bC01LTIuNUw1IDE4VjR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQnJpZWZjYXNlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02IDZWNWEzIDMgMCAwMTMtM2gyYTMgMyAwIDAxMyAzdjFoMmEyIDIgMCAwMTIgMnYzLjU3QTIyLjk1MiAyMi45NTIgMCAwMTEwIDEzYTIyLjk1IDIyLjk1IDAgMDEtOC0xLjQzVjhhMiAyIDAgMDEyLTJoMnptMi0xYTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2MUg4VjV6bTEgNWExIDEgMCAwMTEtMWguMDFhMSAxIDAgMTEwIDJIMTBhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDEzLjY5MlYxNmEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMnYtMi4zMDhBMjQuOTc0IDI0Ljk3NCAwIDAxMTAgMTVjLTIuNzk2IDAtNS40ODctLjQ2LTgtMS4zMDh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2FrZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiAzYTEgMSAwIDAxMS0xaC4wMWExIDEgMCAwMTAgMkg3YTEgMSAwIDAxLTEtMXptMiAzYTEgMSAwIDAwLTIgMHYxYTIgMiAwIDAwLTIgMnYxYTIgMiAwIDAwLTIgMnYuNjgzYTMuNyAzLjcgMCAwMTEuMDU1LjQ4NSAxLjcwNCAxLjcwNCAwIDAwMS44OSAwIDMuNzA0IDMuNzA0IDAgMDE0LjExIDAgMS43MDQgMS43MDQgMCAwMDEuODkgMCAzLjcwNCAzLjcwNCAwIDAxNC4xMSAwIDEuNzA0IDEuNzA0IDAgMDAxLjg5IDBBMy43IDMuNyAwIDAxMTggMTIuNjgzVjEyYTIgMiAwIDAwLTItMlY5YTIgMiAwIDAwLTItMlY2YTEgMSAwIDEwLTIgMHYxaC0xVjZhMSAxIDAgMTAtMiAwdjFIOFY2em0xMCA4Ljg2OGEzLjcwNCAzLjcwNCAwIDAxLTQuMDU1LS4wMzYgMS43MDQgMS43MDQgMCAwMC0xLjg5IDAgMy43MDQgMy43MDQgMCAwMS00LjExIDAgMS43MDQgMS43MDQgMCAwMC0xLjg5IDBBMy43MDQgMy43MDQgMCAwMTIgMTQuODY4VjE3YTEgMSAwIDAwMSAxaDE0YTEgMSAwIDAwMS0xdi0yLjEzMnpNOSAzYTEgMSAwIDAxMS0xaC4wMWExIDEgMCAxMTAgMkgxMGExIDEgMCAwMS0xLTF6bTMgMGExIDEgMCAwMTEtMWguMDFhMSAxIDAgMTEwIDJIMTNhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDYWxjdWxhdG9yIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02IDJhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJWNGEyIDIgMCAwMC0yLTJINnptMSAyYTEgMSAwIDAwMCAyaDZhMSAxIDAgMTAwLTJIN3ptNiA3YTEgMSAwIDAxMSAxdjNhMSAxIDAgMTEtMiAwdi0zYTEgMSAwIDAxMS0xem0tMyAzYTEgMSAwIDEwMCAyaC4wMWExIDEgMCAxMDAtMkgxMHptLTQgMWExIDEgMCAwMTEtMWguMDFhMSAxIDAgMTEwIDJIN2ExIDEgMCAwMS0xLTF6bTEtNGExIDEgMCAxMDAgMmguMDFhMSAxIDAgMTAwLTJIN3ptMiAxYTEgMSAwIDAxMS0xaC4wMWExIDEgMCAxMTAgMkgxMGExIDEgMCAwMS0xLTF6bTQtNGExIDEgMCAxMDAgMmguMDFhMSAxIDAgMTAwLTJIMTN6TTkgOWExIDEgMCAwMTEtMWguMDFhMSAxIDAgMTEwIDJIMTBhMSAxIDAgMDEtMS0xek03IDhhMSAxIDAgMDAwIDJoLjAxYTEgMSAwIDAwMC0ySDd6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNhbGVuZGFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02IDJhMSAxIDAgMDAtMSAxdjFINGEyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJoMTJhMiAyIDAgMDAyLTJWNmEyIDIgMCAwMC0yLTJoLTFWM2ExIDEgMCAxMC0yIDB2MUg3VjNhMSAxIDAgMDAtMS0xem0wIDVhMSAxIDAgMDAwIDJoOGExIDEgMCAxMDAtMkg2elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDYW1lcmEgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgNWEyIDIgMCAwMC0yIDJ2OGEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMmgtMS41ODZhMSAxIDAgMDEtLjcwNy0uMjkzbC0xLjEyMS0xLjEyMUEyIDIgMCAwMDExLjE3MiAzSDguODI4YTIgMiAwIDAwLTEuNDE0LjU4Nkw2LjI5MyA0LjcwN0ExIDEgMCAwMTUuNTg2IDVINHptNiA5YTMgMyAwIDEwMC02IDMgMyAwIDAwMCA2elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDYXNoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDRhMiAyIDAgMDAtMiAydjRhMiAyIDAgMDAyIDJWNmgxMGEyIDIgMCAwMC0yLTJINHptMiA2YTIgMiAwIDAxMi0yaDhhMiAyIDAgMDEyIDJ2NGEyIDIgMCAwMS0yIDJIOGEyIDIgMCAwMS0yLTJ2LTR6bTYgNGEyIDIgMCAxMDAtNCAyIDIgMCAwMDAgNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hhcnRCYXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiAxMWExIDEgMCAwMTEtMWgyYTEgMSAwIDAxMSAxdjVhMSAxIDAgMDEtMSAxSDNhMSAxIDAgMDEtMS0xdi01ek04IDdhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXY5YTEgMSAwIDAxLTEgMUg5YTEgMSAwIDAxLTEtMVY3ek0xNCA0YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2MTJhMSAxIDAgMDEtMSAxaC0yYTEgMSAwIDAxLTEtMVY0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoYXJ0UGllIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgMTBhOCA4IDAgMDE4LTh2OGg4YTggOCAwIDExLTE2IDB6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTIgMi4yNTJBOC4wMTQgOC4wMTQgMCAwMTE3Ljc0OCA4SDEyVjIuMjUyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoYXJ0U3F1YXJlQmFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDNhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0ySDV6bTkgNGExIDEgMCAxMC0yIDB2NmExIDEgMCAxMDIgMFY3em0tMyAyYTEgMSAwIDEwLTIgMHY0YTEgMSAwIDEwMiAwVjl6bS0zIDNhMSAxIDAgMTAtMiAwdjFhMSAxIDAgMTAyIDB2LTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoYXRBbHQyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgNWEyIDIgMCAwMTItMmg3YTIgMiAwIDAxMiAydjRhMiAyIDAgMDEtMiAySDlsLTMgM3YtM0g0YTIgMiAwIDAxLTItMlY1elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTE1IDd2MmE0IDQgMCAwMS00IDRIOS44MjhsLTEuNzY2IDEuNzY3Yy4yOC4xNDkuNTk5LjIzMy45MzguMjMzaDJsMyAzdi0zaDJhMiAyIDAgMDAyLTJWOWEyIDIgMCAwMC0yLTJoLTF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hhdEFsdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTggNXY4YTIgMiAwIDAxLTIgMmgtNWwtNSA0di00SDRhMiAyIDAgMDEtMi0yVjVhMiAyIDAgMDEyLTJoMTJhMiAyIDAgMDEyIDJ6TTcgOEg1djJoMlY4em0yIDBoMnYySDlWOHptNiAwaC0ydjJoMlY4elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGF0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCAxMGMwIDMuODY2LTMuNTgyIDctOCA3YTguODQxIDguODQxIDAgMDEtNC4wODMtLjk4TDIgMTdsMS4zMzgtMy4xMjNDMi40OTMgMTIuNzY3IDIgMTEuNDM0IDIgMTBjMC0zLjg2NiAzLjU4Mi03IDgtN3M4IDMuMTM0IDggN3pNNyA5SDV2MmgyVjl6bTggMGgtMnYyaDJWOXpNOSA5aDJ2Mkg5Vjl6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoZWNrQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2em0zLjcwNy05LjI5M2ExIDEgMCAwMC0xLjQxNC0xLjQxNEw5IDEwLjU4NiA3LjcwNyA5LjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwyIDJhMSAxIDAgMDAxLjQxNCAwbDQtNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hlY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE2LjcwNyA1LjI5M2ExIDEgMCAwMTAgMS40MTRsLTggOGExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMDExLjQxNC0xLjQxNEw4IDEyLjU4Nmw3LjI5My03LjI5M2ExIDEgMCAwMTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoZXZyb25Eb3VibGVEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNS43MDcgNC4yOTNhMSAxIDAgMDEwIDEuNDE0bC01IDVhMSAxIDAgMDEtMS40MTQgMGwtNS01YTEgMSAwIDAxMS40MTQtMS40MTRMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMDExLjQxNCAwem0wIDZhMSAxIDAgMDEwIDEuNDE0bC01IDVhMSAxIDAgMDEtMS40MTQgMGwtNS01YTEgMSAwIDExMS40MTQtMS40MTRMMTAgMTQuNTg2bDQuMjkzLTQuMjkzYTEgMSAwIDAxMS40MTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hldnJvbkRvdWJsZUxlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE1LjcwNyAxNS43MDdhMSAxIDAgMDEtMS40MTQgMGwtNS01YTEgMSAwIDAxMC0xLjQxNGw1LTVhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEwIDEuNDE0em0tNiAwYTEgMSAwIDAxLTEuNDE0IDBsLTUtNWExIDEgMCAwMTAtMS40MTRsNS01YTEgMSAwIDAxMS40MTQgMS40MTRMNS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEwIDEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGV2cm9uRG91YmxlUmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwLjI5MyAxNS43MDdhMSAxIDAgMDEwLTEuNDE0TDE0LjU4NiAxMGwtNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNC0xLjQxNGw1IDVhMSAxIDAgMDEwIDEuNDE0bC01IDVhMSAxIDAgMDEtMS40MTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQuMjkzIDE1LjcwN2ExIDEgMCAwMTAtMS40MTRMOC41ODYgMTAgNC4yOTMgNS43MDdhMSAxIDAgMDExLjQxNC0xLjQxNGw1IDVhMSAxIDAgMDEwIDEuNDE0bC01IDVhMSAxIDAgMDEtMS40MTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hldnJvbkRvdWJsZVVwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00LjI5MyAxNS43MDdhMSAxIDAgMDEwLTEuNDE0bDUtNWExIDEgMCAwMTEuNDE0IDBsNSA1YTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMHptMC02YTEgMSAwIDAxMC0xLjQxNGw1LTVhMSAxIDAgMDExLjQxNCAwbDUgNWExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCA1LjQxNCA1LjcwNyA5LjcwN2ExIDEgMCAwMS0xLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGV2cm9uRG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNS4yOTMgNy4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDEwLjU4NmwzLjI5My0zLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0bC00IDRhMSAxIDAgMDEtMS40MTQgMGwtNC00YTEgMSAwIDAxMC0xLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hldnJvbkxlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEyLjcwNyA1LjI5M2ExIDEgMCAwMTAgMS40MTRMOS40MTQgMTBsMy4yOTMgMy4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRsLTQtNGExIDEgMCAwMTAtMS40MTRsNC00YTEgMSAwIDAxMS40MTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hldnJvblJpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03LjI5MyAxNC43MDdhMSAxIDAgMDEwLTEuNDE0TDEwLjU4NiAxMCA3LjI5MyA2LjcwN2ExIDEgMCAwMTEuNDE0LTEuNDE0bDQgNGExIDEgMCAwMTAgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGV2cm9uVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE0LjcwNyAxMi43MDdhMSAxIDAgMDEtMS40MTQgMEwxMCA5LjQxNGwtMy4yOTMgMy4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRsNC00YTEgMSAwIDAxMS40MTQgMGw0IDRhMSAxIDAgMDEwIDEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGlwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEzIDdIN3Y2aDZWN3pcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNyAyYTEgMSAwIDAxMiAwdjFoMlYyYTEgMSAwIDExMiAwdjFoMmEyIDIgMCAwMTIgMnYyaDFhMSAxIDAgMTEwIDJoLTF2MmgxYTEgMSAwIDExMCAyaC0xdjJhMiAyIDAgMDEtMiAyaC0ydjFhMSAxIDAgMTEtMiAwdi0xSDl2MWExIDEgMCAxMS0yIDB2LTFINWEyIDIgMCAwMS0yLTJ2LTJIMmExIDEgMCAxMTAtMmgxVjlIMmExIDEgMCAwMTAtMmgxVjVhMiAyIDAgMDEyLTJoMlYyek01IDVoMTB2MTBINVY1elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDbGlwYm9hcmRDaGVjayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk05IDJhMSAxIDAgMDAwIDJoMmExIDEgMCAxMDAtMkg5elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDVhMiAyIDAgMDEyLTIgMyAzIDAgMDAzIDNoMmEzIDMgMCAwMDMtMyAyIDIgMCAwMTIgMnYxMWEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJWNXptOS43MDcgNS43MDdhMSAxIDAgMDAtMS40MTQtMS40MTRMOSAxMi41ODZsLTEuMjkzLTEuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDIgMmExIDEgMCAwMDEuNDE0IDBsNC00elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDbGlwYm9hcmRDb3B5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTggMmExIDEgMCAwMDAgMmgyYTEgMSAwIDEwMC0ySDh6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMyA1YTIgMiAwIDAxMi0yIDMgMyAwIDAwMyAzaDJhMyAzIDAgMDAzLTMgMiAyIDAgMDEyIDJ2NmgtNC41ODZsMS4yOTMtMS4yOTNhMSAxIDAgMDAtMS40MTQtMS40MTRsLTMgM2ExIDEgMCAwMDAgMS40MTRsMyAzYTEgMSAwIDAwMS40MTQtMS40MTRMMTAuNDE0IDEzSDE1djNhMiAyIDAgMDEtMiAySDVhMiAyIDAgMDEtMi0yVjV6TTE1IDExaDJhMSAxIDAgMTEwIDJoLTJ2LTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2xpcGJvYXJkTGlzdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk05IDJhMSAxIDAgMDAwIDJoMmExIDEgMCAxMDAtMkg5elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDVhMiAyIDAgMDEyLTIgMyAzIDAgMDAzIDNoMmEzIDMgMCAwMDMtMyAyIDIgMCAwMTIgMnYxMWEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJWNXptMyA0YTEgMSAwIDAwMCAyaC4wMWExIDEgMCAxMDAtMkg3em0zIDBhMSAxIDAgMDAwIDJoM2ExIDEgMCAxMDAtMmgtM3ptLTMgNGExIDEgMCAxMDAgMmguMDFhMSAxIDAgMTAwLTJIN3ptMyAwYTEgMSAwIDEwMCAyaDNhMSAxIDAgMTAwLTJoLTN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNsaXBib2FyZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk04IDNhMSAxIDAgMDExLTFoMmExIDEgMCAxMTAgMkg5YTEgMSAwIDAxLTEtMXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk02IDNhMiAyIDAgMDAtMiAydjExYTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTIgMyAzIDAgMDEtMyAzSDlhMyAzIDAgMDEtMy0zelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNsb2NrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2em0xLTEyYTEgMSAwIDEwLTIgMHY0YTEgMSAwIDAwLjI5My43MDdsMi44MjggMi44MjlhMSAxIDAgMTAxLjQxNS0xLjQxNUwxMSA5LjU4NlY2elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDbG91ZERvd25sb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0yIDkuNUEzLjUgMy41IDAgMDA1LjUgMTNIOXYyLjU4NmwtMS4yOTMtMS4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMyAzYTEgMSAwIDAwMS40MTQgMGwzLTNhMSAxIDAgMDAtMS40MTQtMS40MTRMMTEgMTUuNTg2VjEzaDIuNWE0LjUgNC41IDAgMTAtLjYxNi04Ljk1OCA0LjAwMiA0LjAwMiAwIDEwLTcuNzUzIDEuOTc3QTMuNSAzLjUgMCAwMDIgOS41em05IDMuNUg5VjhhMSAxIDAgMDEyIDB2NXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2xvdWRVcGxvYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNS41IDEzYTMuNSAzLjUgMCAwMS0uMzY5LTYuOTggNCA0IDAgMTE3Ljc1My0xLjk3N0E0LjUgNC41IDAgMTExMy41IDEzSDExVjkuNDEzbDEuMjkzIDEuMjkzYTEgMSAwIDAwMS40MTQtMS40MTRsLTMtM2ExIDEgMCAwMC0xLjQxNCAwbC0zIDNhMSAxIDAgMDAxLjQxNCAxLjQxNEw5IDkuNDE0VjEzSDUuNXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk05IDEzaDJ2NWExIDEgMCAxMS0yIDB2LTV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2xvdWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNS41IDE2YTMuNSAzLjUgMCAwMS0uMzY5LTYuOTggNCA0IDAgMTE3Ljc1My0xLjk3N0E0LjUgNC41IDAgMTExMy41IDE2aC04elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNvZGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEyLjMxNiAzLjA1MWExIDEgMCAwMS42MzMgMS4yNjVsLTQgMTJhMSAxIDAgMTEtMS44OTgtLjYzMmw0LTEyYTEgMSAwIDAxMS4yNjUtLjYzM3pNNS43MDcgNi4yOTNhMSAxIDAgMDEwIDEuNDE0TDMuNDE0IDEwbDIuMjkzIDIuMjkzYTEgMSAwIDExLTEuNDE0IDEuNDE0bC0zLTNhMSAxIDAgMDEwLTEuNDE0bDMtM2ExIDEgMCAwMTEuNDE0IDB6bTguNTg2IDBhMSAxIDAgMDExLjQxNCAwbDMgM2ExIDEgMCAwMTAgMS40MTRsLTMgM2ExIDEgMCAxMS0xLjQxNC0xLjQxNEwxNi41ODYgMTBsLTIuMjkzLTIuMjkzYTEgMSAwIDAxMC0xLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ29nIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMS40OSAzLjE3Yy0uMzgtMS41Ni0yLjYtMS41Ni0yLjk4IDBhMS41MzIgMS41MzIgMCAwMS0yLjI4Ni45NDhjLTEuMzcyLS44MzYtMi45NDIuNzM0LTIuMTA2IDIuMTA2LjU0Ljg4Ni4wNjEgMi4wNDItLjk0NyAyLjI4Ny0xLjU2MS4zNzktMS41NjEgMi42IDAgMi45NzhhMS41MzIgMS41MzIgMCAwMS45NDcgMi4yODdjLS44MzYgMS4zNzIuNzM0IDIuOTQyIDIuMTA2IDIuMTA2YTEuNTMyIDEuNTMyIDAgMDEyLjI4Ny45NDdjLjM3OSAxLjU2MSAyLjYgMS41NjEgMi45NzggMGExLjUzMyAxLjUzMyAwIDAxMi4yODctLjk0N2MxLjM3Mi44MzYgMi45NDItLjczNCAyLjEwNi0yLjEwNmExLjUzMyAxLjUzMyAwIDAxLjk0Ny0yLjI4N2MxLjU2MS0uMzc5IDEuNTYxLTIuNiAwLTIuOTc4YTEuNTMyIDEuNTMyIDAgMDEtLjk0Ny0yLjI4N2MuODM2LTEuMzcyLS43MzQtMi45NDItMi4xMDYtMi4xMDZhMS41MzIgMS41MzIgMCAwMS0yLjI4Ny0uOTQ3ek0xMCAxM2EzIDMgMCAxMDAtNiAzIDMgMCAwMDAgNnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ29sbGVjdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk03IDNhMSAxIDAgMDAwIDJoNmExIDEgMCAxMDAtMkg3ek00IDdhMSAxIDAgMDExLTFoMTBhMSAxIDAgMTEwIDJINWExIDEgMCAwMS0xLTF6TTIgMTFhMiAyIDAgMDEyLTJoMTJhMiAyIDAgMDEyIDJ2NGEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJ2LTR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ29sb3JTd2F0Y2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgMmEyIDIgMCAwMC0yIDJ2MTFhMyAzIDAgMTA2IDBWNGEyIDIgMCAwMC0yLTJINHptMSAxNGExIDEgMCAxMDAtMiAxIDEgMCAwMDAgMnptNS0xLjc1N2w0LjktNC45YTIgMiAwIDAwMC0yLjgyOEwxMy40ODUgNS4xYTIgMiAwIDAwLTIuODI4IDBMMTAgNS43NTd2OC40ODZ6TTE2IDE4SDkuMDcxbDYtNkgxNmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ3JlZGl0Q2FyZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk00IDRhMiAyIDAgMDAtMiAydjFoMTZWNmEyIDIgMCAwMC0yLTJINHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTggOUgydjVhMiAyIDAgMDAyIDJoMTJhMiAyIDAgMDAyLTJWOXpNNCAxM2ExIDEgMCAwMTEtMWgxYTEgMSAwIDExMCAySDVhMSAxIDAgMDEtMS0xem01LTFhMSAxIDAgMTAwIDJoMWExIDEgMCAxMDAtMkg5elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDdWJlVHJhbnNwYXJlbnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkuNTA0IDEuMTMyYTEgMSAwIDAxLjk5MiAwbDEuNzUgMWExIDEgMCAxMS0uOTkyIDEuNzM2TDEwIDMuMTUybC0xLjI1NC43MTZhMSAxIDAgMTEtLjk5Mi0xLjczNmwxLjc1LTF6TTUuNjE4IDQuNTA0YTEgMSAwIDAxLS4zNzIgMS4zNjRMNS4wMTYgNmwuMjMuMTMyYTEgMSAwIDExLS45OTIgMS43MzZMNCA3LjcyM1Y4YTEgMSAwIDAxLTIgMFY2YS45OTYuOTk2IDAgMDEuNTItLjg3OGwxLjczNC0uOTlhMSAxIDAgMDExLjM2NC4zNzJ6bTguNzY0IDBhMSAxIDAgMDExLjM2NC0uMzcybDEuNzMzLjk5QTEuMDAyIDEuMDAyIDAgMDExOCA2djJhMSAxIDAgMTEtMiAwdi0uMjc3bC0uMjU0LjE0NWExIDEgMCAxMS0uOTkyLTEuNzM2bC4yMy0uMTMyLS4yMy0uMTMyYTEgMSAwIDAxLS4zNzItMS4zNjR6bS03IDRhMSAxIDAgMDExLjM2NC0uMzcyTDEwIDguODQ4bDEuMjU0LS43MTZhMSAxIDAgMTEuOTkyIDEuNzM2TDExIDEwLjU4VjEyYTEgMSAwIDExLTIgMHYtMS40MmwtMS4yNDYtLjcxMmExIDEgMCAwMS0uMzcyLTEuMzY0ek0zIDExYTEgMSAwIDAxMSAxdjEuNDJsMS4yNDYuNzEyYTEgMSAwIDExLS45OTIgMS43MzZsLTEuNzUtMUExIDEgMCAwMTIgMTR2LTJhMSAxIDAgMDExLTF6bTE0IDBhMSAxIDAgMDExIDF2MmExIDEgMCAwMS0uNTA0Ljg2OGwtMS43NSAxYTEgMSAwIDExLS45OTItMS43MzZMMTYgMTMuNDJWMTJhMSAxIDAgMDExLTF6bS05LjYxOCA1LjUwNGExIDEgMCAwMTEuMzY0LS4zNzJsLjI1NC4xNDVWMTZhMSAxIDAgMTEyIDB2LjI3N2wuMjU0LS4xNDVhMSAxIDAgMTEuOTkyIDEuNzM2bC0xLjczNS45OTJhLjk5NS45OTUgMCAwMS0xLjAyMiAwbC0xLjczNS0uOTkyYTEgMSAwIDAxLS4zNzItMS4zNjR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUN1YmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTEgMTdhMSAxIDAgMDAxLjQ0Ny44OTRsNC0yQTEgMSAwIDAwMTcgMTVWOS4yMzZhMSAxIDAgMDAtMS40NDctLjg5NGwtNCAyYTEgMSAwIDAwLS41NTMuODk0VjE3ek0xNS4yMTEgNi4yNzZhMSAxIDAgMDAwLTEuNzg4bC00Ljc2NC0yLjM4MmExIDEgMCAwMC0uODk0IDBMNC43ODkgNC40ODhhMSAxIDAgMDAwIDEuNzg4bDQuNzY0IDIuMzgyYTEgMSAwIDAwLjg5NCAwbDQuNzY0LTIuMzgyek00LjQ0NyA4LjM0MkExIDEgMCAwMDMgOS4yMzZWMTVhMSAxIDAgMDAuNTUzLjg5NGw0IDJBMSAxIDAgMDA5IDE3di01Ljc2NGExIDEgMCAwMC0uNTUzLS44OTRsLTQtMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDdXJyZW5jeUJhbmdsYWRlc2hpIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek03IDRhMSAxIDAgMDAwIDIgMSAxIDAgMDExIDF2MUg3YTEgMSAwIDAwMCAyaDF2M2EzIDMgMCAxMDYgMHYtMWExIDEgMCAxMC0yIDB2MWExIDEgMCAxMS0yIDB2LTNoM2ExIDEgMCAxMDAtMmgtM1Y3YTMgMyAwIDAwLTMtM3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ3VycmVuY3lEb2xsYXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOC40MzMgNy40MThjLjE1NS0uMTAzLjM0Ni0uMTk2LjU2Ny0uMjY3djEuNjk4YTIuMzA1IDIuMzA1IDAgMDEtLjU2Ny0uMjY3QzguMDcgOC4zNCA4IDguMTE0IDggOGMwLS4xMTQuMDctLjM0LjQzMy0uNTgyek0xMSAxMi44NDl2LTEuNjk4Yy4yMi4wNzEuNDEyLjE2NC41NjcuMjY3LjM2NC4yNDMuNDMzLjQ2OC40MzMuNTgyIDAgLjExNC0uMDcuMzQtLjQzMy41ODJhMi4zMDUgMi4zMDUgMCAwMS0uNTY3LjI2N3pcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMS0xM2ExIDEgMCAxMC0yIDB2LjA5MmE0LjUzNSA0LjUzNSAwIDAwLTEuNjc2LjY2MkM2LjYwMiA2LjIzNCA2IDcuMDA5IDYgOGMwIC45OS42MDIgMS43NjUgMS4zMjQgMi4yNDYuNDguMzIgMS4wNTQuNTQ1IDEuNjc2LjY2MnYxLjk0MWMtLjM5MS0uMTI3LS42OC0uMzE3LS44NDMtLjUwNGExIDEgMCAxMC0xLjUxIDEuMzFjLjU2Mi42NDkgMS40MTMgMS4wNzYgMi4zNTMgMS4yNTNWMTVhMSAxIDAgMTAyIDB2LS4wOTJhNC41MzUgNC41MzUgMCAwMDEuNjc2LS42NjJDMTMuMzk4IDEzLjc2NiAxNCAxMi45OTEgMTQgMTJjMC0uOTktLjYwMi0xLjc2NS0xLjMyNC0yLjI0NkE0LjUzNSA0LjUzNSAwIDAwMTEgOS4wOTJWNy4xNTFjLjM5MS4xMjcuNjguMzE3Ljg0My41MDRhMSAxIDAgMTAxLjUxMS0xLjMxYy0uNTYzLS42NDktMS40MTMtMS4wNzYtMi4zNTQtMS4yNTNWNXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ3VycmVuY3lFdXJvIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek04LjczNiA2Ljk3OUM5LjIwOCA2LjE5MyA5LjY5NiA2IDEwIDZjLjMwNCAwIC43OTIuMTkzIDEuMjY0Ljk3OWExIDEgMCAwMDEuNzE1LTEuMDI5QzEyLjI3OSA0Ljc4NCAxMS4yMzIgNCAxMCA0cy0yLjI3OS43ODQtMi45NzkgMS45NWMtLjI4NS40NzUtLjUwNyAxLS42NyAxLjU1SDZhMSAxIDAgMDAwIDJoLjAxM2E5LjM1OCA5LjM1OCAwIDAwMCAxSDZhMSAxIDAgMTAwIDJoLjM1MWMuMTYzLjU1LjM4NSAxLjA3NS42NyAxLjU1QzcuNzIxIDE1LjIxNiA4Ljc2OCAxNiAxMCAxNnMyLjI3OS0uNzg0IDIuOTc5LTEuOTVhMSAxIDAgMTAtMS43MTUtMS4wMjljLS40NzIuNzg2LS45Ni45NzktMS4yNjQuOTc5LS4zMDQgMC0uNzkyLS4xOTMtMS4yNjQtLjk3OWE0LjI2NSA0LjI2NSAwIDAxLS4yNjQtLjUyMUgxMGExIDEgMCAxMDAtMkg4LjAxN2E3LjM2IDcuMzYgMCAwMTAtMUgxMGExIDEgMCAxMDAtMkg4LjQ3MmMuMDgtLjE4NS4xNjctLjM2LjI2NC0uNTIxelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDdXJyZW5jeVBvdW5kIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2em0xLTE0YTMgMyAwIDAwLTMgM3YySDdhMSAxIDAgMDAwIDJoMXYxYTEgMSAwIDAxLTEgMSAxIDEgMCAxMDAgMmg2YTEgMSAwIDEwMC0ySDkuODNjLjExLS4zMTMuMTctLjY1LjE3LTF2LTFoMWExIDEgMCAxMDAtMmgtMVY3YTEgMSAwIDExMiAwIDEgMSAwIDEwMiAwIDMgMyAwIDAwLTMtM3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ3VycmVuY3lSdXBlZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNNyA1YTEgMSAwIDEwMCAyaDFhMiAyIDAgMDExLjczMiAxSDdhMSAxIDAgMTAwIDJoMi43MzJBMiAyIDAgMDE4IDExSDdhMSAxIDAgMDAtLjcwNyAxLjcwN2wzIDNhMSAxIDAgMDAxLjQxNC0xLjQxNGwtMS40ODMtMS40ODRBNC4wMDggNC4wMDggMCAwMDExLjg3NCAxMEgxM2ExIDEgMCAxMDAtMmgtMS4xMjZhMy45NzYgMy45NzYgMCAwMC0uNDEtMUgxM2ExIDEgMCAxMDAtMkg3elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDdXJyZW5jeVllbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNNy44NTggNS40ODVhMSAxIDAgMDAtMS43MTUgMS4wM0w3LjYzMyA5SDdhMSAxIDAgMTAwIDJoMS44MzRsLjE2Ni4yNzdWMTJIN2ExIDEgMCAxMDAgMmgydjFhMSAxIDAgMTAyIDB2LTFoMmExIDEgMCAxMDAtMmgtMnYtLjcyM2wuMTY2LS4yNzdIMTNhMSAxIDAgMTAwLTJoLS42MzRsMS40OTItMi40ODZhMSAxIDAgMTAtMS43MTYtMS4wMjlMMTAuMDM0IDloLS4wNjhMNy44NTggNS40ODV6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUN1cnNvckNsaWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02LjY3MiAxLjkxMWExIDEgMCAxMC0xLjkzMi41MThsLjI1OS45NjZhMSAxIDAgMDAxLjkzMi0uNTE4bC0uMjYtLjk2NnpNMi40MjkgNC43NGExIDEgMCAxMC0uNTE3IDEuOTMybC45NjYuMjU5YTEgMSAwIDAwLjUxNy0xLjkzMmwtLjk2Ni0uMjZ6bTguODE0LS41NjlhMSAxIDAgMDAtMS40MTUtMS40MTRsLS43MDcuNzA3YTEgMSAwIDEwMS40MTUgMS40MTVsLjcwNy0uNzA4em0tNy4wNzEgNy4wNzJsLjcwNy0uNzA3QTEgMSAwIDAwMy40NjUgOS4xMmwtLjcwOC43MDdhMSAxIDAgMDAxLjQxNSAxLjQxNXptMy4yLTUuMTcxYTEgMSAwIDAwLTEuMyAxLjNsNCAxMGExIDEgMCAwMDEuODIzLjA3NWwxLjM4LTIuNzU5IDMuMDE4IDMuMDJhMSAxIDAgMDAxLjQxNC0xLjQxNWwtMy4wMTktMy4wMiAyLjc2LTEuMzc5YTEgMSAwIDAwLS4wNzYtMS44MjJsLTEwLTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURhdGFiYXNlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTMgMTJ2M2MwIDEuNjU3IDMuMTM0IDMgNyAzczctMS4zNDMgNy0zdi0zYzAgMS42NTctMy4xMzQgMy03IDNzLTctMS4zNDMtNy0zelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTMgN3YzYzAgMS42NTcgMy4xMzQgMyA3IDNzNy0xLjM0MyA3LTNWN2MwIDEuNjU3LTMuMTM0IDMtNyAzUzMgOC42NTcgMyA3elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTE3IDVjMCAxLjY1Ny0zLjEzNCAzLTcgM1MzIDYuNjU3IDMgNXMzLjEzNC0zIDctMyA3IDEuMzQzIDcgM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEZXNrdG9wQ29tcHV0ZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgNWEyIDIgMCAwMTItMmgxMGEyIDIgMCAwMTIgMnY4YTIgMiAwIDAxLTIgMmgtMi4yMmwuMTIzLjQ4OS44MDQuODA0QTEgMSAwIDAxMTMgMThIN2ExIDEgMCAwMS0uNzA3LTEuNzA3bC44MDQtLjgwNEw3LjIyIDE1SDVhMiAyIDAgMDEtMi0yVjV6bTUuNzcxIDdINVY1aDEwdjdIOC43NzF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURldmljZU1vYmlsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNyAyYTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmg2YTIgMiAwIDAwMi0yVjRhMiAyIDAgMDAtMi0ySDd6bTMgMTRhMSAxIDAgMTAwLTIgMSAxIDAgMDAwIDJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURldmljZVRhYmxldCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiAyYTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0yVjRhMiAyIDAgMDAtMi0ySDZ6bTQgMTRhMSAxIDAgMTAwLTIgMSAxIDAgMDAwIDJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURvY3VtZW50QWRkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02IDJhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJWNy40MTRBMiAyIDAgMDAxNS40MTQgNkwxMiAyLjU4NkEyIDIgMCAwMDEwLjU4NiAySDZ6bTUgNmExIDEgMCAxMC0yIDB2Mkg3YTEgMSAwIDEwMCAyaDJ2MmExIDEgMCAxMDIgMHYtMmgyYTEgMSAwIDEwMC0yaC0yVjh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURvY3VtZW50RG93bmxvYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgMmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMlY3LjQxNEEyIDIgMCAwMDE1LjQxNCA2TDEyIDIuNTg2QTIgMiAwIDAwMTAuNTg2IDJINnptNSA2YTEgMSAwIDEwLTIgMHYzLjU4NmwtMS4yOTMtMS4yOTNhMSAxIDAgMTAtMS40MTQgMS40MTRsMyAzYTEgMSAwIDAwMS40MTQgMGwzLTNhMSAxIDAgMDAtMS40MTQtMS40MTRMMTEgMTEuNTg2Vjh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURvY3VtZW50RHVwbGljYXRlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTkgMmEyIDIgMCAwMC0yIDJ2OGEyIDIgMCAwMDIgMmg2YTIgMiAwIDAwMi0yVjYuNDE0QTIgMiAwIDAwMTYuNDE0IDVMMTQgMi41ODZBMiAyIDAgMDAxMi41ODYgMkg5elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTMgOGEyIDIgMCAwMTItMnYxMGg4YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMlY4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURvY3VtZW50UmVtb3ZlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02IDJhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJWNy40MTRBMiAyIDAgMDAxNS40MTQgNkwxMiAyLjU4NkEyIDIgMCAwMDEwLjU4NiAySDZ6bTEgOGExIDEgMCAxMDAgMmg2YTEgMSAwIDEwMC0ySDd6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURvY3VtZW50UmVwb3J0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02IDJhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJWNy40MTRBMiAyIDAgMDAxNS40MTQgNkwxMiAyLjU4NkEyIDIgMCAwMDEwLjU4NiAySDZ6bTIgMTBhMSAxIDAgMTAtMiAwdjNhMSAxIDAgMTAyIDB2LTN6bTItM2ExIDEgMCAwMTEgMXY1YTEgMSAwIDExLTIgMHYtNWExIDEgMCAwMTEtMXptNC0xYTEgMSAwIDEwLTIgMHY3YTEgMSAwIDEwMiAwVjh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURvY3VtZW50U2VhcmNoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTQgNGEyIDIgMCAwMTItMmg0LjU4NkEyIDIgMCAwMTEyIDIuNTg2TDE1LjQxNCA2QTIgMiAwIDAxMTYgNy40MTRWMTZhMiAyIDAgMDEtMiAyaC0xLjUyOEE2IDYgMCAwMDQgOS41MjhWNHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOCAxMGE0IDQgMCAwMC0zLjQ0NiA2LjAzMmwtMS4yNjEgMS4yNmExIDEgMCAxMDEuNDE0IDEuNDE1bDEuMjYxLTEuMjYxQTQgNCAwIDEwOCAxMHptLTIgNGEyIDIgMCAxMTQgMCAyIDIgMCAwMS00IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURvY3VtZW50VGV4dCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCA0YTIgMiAwIDAxMi0yaDQuNTg2QTIgMiAwIDAxMTIgMi41ODZMMTUuNDE0IDZBMiAyIDAgMDExNiA3LjQxNFYxNmEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJWNHptMiA2YTEgMSAwIDAxMS0xaDZhMSAxIDAgMTEwIDJIN2ExIDEgMCAwMS0xLTF6bTEgM2ExIDEgMCAxMDAgMmg2YTEgMSAwIDEwMC0ySDd6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURvY3VtZW50IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDRhMiAyIDAgMDEyLTJoNC41ODZBMiAyIDAgMDExMiAyLjU4NkwxNS40MTQgNkEyIDIgMCAwMTE2IDcuNDE0VjE2YTIgMiAwIDAxLTIgMkg2YTIgMiAwIDAxLTItMlY0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEb3RzQ2lyY2xlSG9yaXpvbnRhbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNNyA5SDV2MmgyVjl6bTggMGgtMnYyaDJWOXpNOSA5aDJ2Mkg5Vjl6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURvdHNIb3Jpem9udGFsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTYgMTBhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwek0xMiAxMGEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6TTE2IDEyYTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURvdHNWZXJ0aWNhbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMCA2YTIgMiAwIDExMC00IDIgMiAwIDAxMCA0ek0xMCAxMmEyIDIgMCAxMTAtNCAyIDIgMCAwMTAgNHpNMTAgMThhMiAyIDAgMTEwLTQgMiAyIDAgMDEwIDR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRG93bmxvYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgMTdhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6bTMuMjkzLTcuNzA3YTEgMSAwIDAxMS40MTQgMEw5IDEwLjU4NlYzYTEgMSAwIDExMiAwdjcuNTg2bDEuMjkzLTEuMjkzYTEgMSAwIDExMS40MTQgMS40MTRsLTMgM2ExIDEgMCAwMS0xLjQxNCAwbC0zLTNhMSAxIDAgMDEwLTEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEdXBsaWNhdGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNyA5YTIgMiAwIDAxMi0yaDZhMiAyIDAgMDEyIDJ2NmEyIDIgMCAwMS0yIDJIOWEyIDIgMCAwMS0yLTJWOXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk01IDNhMiAyIDAgMDAtMiAydjZhMiAyIDAgMDAyIDJWNWg4YTIgMiAwIDAwLTItMkg1elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUVtb2ppSGFwcHkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTcgOWExIDEgMCAxMDAtMiAxIDEgMCAwMDAgMnptNy0xYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptLS40NjQgNS41MzVhMSAxIDAgMTAtMS40MTUtMS40MTQgMyAzIDAgMDEtNC4yNDIgMCAxIDEgMCAwMC0xLjQxNSAxLjQxNCA1IDUgMCAwMDcuMDcyIDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUVtb2ppU2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek03IDlhMSAxIDAgMTAwLTIgMSAxIDAgMDAwIDJ6bTctMWExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bS03LjUzNiA1Ljg3OWExIDEgMCAwMDEuNDE1IDAgMyAzIDAgMDE0LjI0MiAwIDEgMSAwIDAwMS40MTUtMS40MTUgNSA1IDAgMDAtNy4wNzIgMCAxIDEgMCAwMDAgMS40MTV6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUV4Y2xhbWF0aW9uQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTcgNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bS0xLTlhMSAxIDAgMDAtMSAxdjRhMSAxIDAgMTAyIDBWNmExIDEgMCAwMC0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUV4Y2xhbWF0aW9uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk04LjI1NyAzLjA5OWMuNzY1LTEuMzYgMi43MjItMS4zNiAzLjQ4NiAwbDUuNTggOS45MmMuNzUgMS4zMzQtLjIxMyAyLjk4LTEuNzQyIDIuOThINC40MmMtMS41MyAwLTIuNDkzLTEuNjQ2LTEuNzQzLTIuOThsNS41OC05Ljkyek0xMSAxM2ExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bS0xLThhMSAxIDAgMDAtMSAxdjNhMSAxIDAgMDAyIDBWNmExIDEgMCAwMC0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUV4dGVybmFsTGluayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMSAzYTEgMSAwIDEwMCAyaDIuNTg2bC02LjI5MyA2LjI5M2ExIDEgMCAxMDEuNDE0IDEuNDE0TDE1IDYuNDE0VjlhMSAxIDAgMTAyIDBWNGExIDEgMCAwMC0xLTFoLTV6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNSA1YTIgMiAwIDAwLTIgMnY4YTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJ2LTNhMSAxIDAgMTAtMiAwdjNINVY3aDNhMSAxIDAgMDAwLTJINXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlFeWVPZmYgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMuNzA3IDIuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDE0IDE0YTEgMSAwIDAwMS40MTQtMS40MTRsLTEuNDczLTEuNDczQTEwLjAxNCAxMC4wMTQgMCAwMDE5LjU0MiAxMEMxOC4yNjggNS45NDMgMTQuNDc4IDMgMTAgM2E5Ljk1OCA5Ljk1OCAwIDAwLTQuNTEyIDEuMDc0bC0xLjc4LTEuNzgxem00LjI2MSA0LjI2bDEuNTE0IDEuNTE1YTIuMDAzIDIuMDAzIDAgMDEyLjQ1IDIuNDVsMS41MTQgMS41MTRhNCA0IDAgMDAtNS40NzgtNS40Nzh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEyLjQ1NCAxNi42OTdMOS43NSAxMy45OTJhNCA0IDAgMDEtMy43NDItMy43NDFMMi4zMzUgNi41NzhBOS45OCA5Ljk4IDAgMDAuNDU4IDEwYzEuMjc0IDQuMDU3IDUuMDY1IDcgOS41NDIgNyAuODQ3IDAgMS42NjktLjEwNSAyLjQ1NC0uMzAzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUV5ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMCAxMmEyIDIgMCAxMDAtNCAyIDIgMCAwMDAgNHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNLjQ1OCAxMEMxLjczMiA1Ljk0MyA1LjUyMiAzIDEwIDNzOC4yNjggMi45NDMgOS41NDIgN2MtMS4yNzQgNC4wNTctNS4wNjQgNy05LjU0MiA3UzEuNzMyIDE0LjA1Ny40NTggMTB6TTE0IDEwYTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRmFzdEZvcndhcmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNC41NTUgNS4xNjhBMSAxIDAgMDAzIDZ2OGExIDEgMCAwMDEuNTU1LjgzMkwxMCAxMS4yMDJWMTRhMSAxIDAgMDAxLjU1NS44MzJsNi00YTEgMSAwIDAwMC0xLjY2NGwtNi00QTEgMSAwIDAwMTAgNnYyLjc5OGwtNS40NDUtMy42M3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlGaWxtIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDNhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEyYTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0ySDR6bTMgMmg2djRIN1Y1em04IDh2Mmgxdi0yaC0xem0tMi0ySDd2NGg2di00em0yIDBoMVY5aC0xdjJ6bTEtNFY1aC0xdjJoMXpNNSA1djJINFY1aDF6bTAgNEg0djJoMVY5em0tMSA0aDF2Mkg0di0yelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlGaWx0ZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgM2ExIDEgMCAwMTEtMWgxMmExIDEgMCAwMTEgMXYzYTEgMSAwIDAxLS4yOTMuNzA3TDEyIDExLjQxNFYxNWExIDEgMCAwMS0uMjkzLjcwN2wtMiAyQTEgMSAwIDAxOCAxN3YtNS41ODZMMy4yOTMgNi43MDdBMSAxIDAgMDEzIDZWM3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRmluZ2VyUHJpbnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYuNjI1IDIuNjU1QTkgOSAwIDAxMTkgMTFhMSAxIDAgMTEtMiAwIDcgNyAwIDAwLTkuNjI1LTYuNDkyIDEgMSAwIDExLS43NS0xLjg1M3pNNC42NjIgNC45NTlBMSAxIDAgMDE0Ljc1IDYuMzcgNi45NyA2Ljk3IDAgMDAzIDExYTEgMSAwIDExLTIgMCA4Ljk3IDguOTcgMCAwMTIuMjUtNS45NTMgMSAxIDAgMDExLjQxMi0uMDg4elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNSAxMWE1IDUgMCAxMTEwIDAgMSAxIDAgMTEtMiAwIDMgMyAwIDEwLTYgMGMwIDEuNjc3LS4zNDUgMy4yNzYtLjk2OCA0LjcyOWExIDEgMCAxMS0xLjgzOC0uNzg5QTkuOTY0IDkuOTY0IDAgMDA1IDExem04LjkyMSAyLjAxMmExIDEgMCAwMS44MzEgMS4xNDUgMTkuODYgMTkuODYgMCAwMS0uNTQ1IDIuNDM2IDEgMSAwIDExLTEuOTItLjU1OGMuMjA3LS43MTMuMzcxLTEuNDQ1LjQ5LTIuMTkyYTEgMSAwIDAxMS4xNDQtLjgzelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMTBhMSAxIDAgMDExIDFjMCAyLjIzNi0uNDYgNC4zNjgtMS4yOSA2LjMwNGExIDEgMCAwMS0xLjgzOC0uNzg5QTEzLjk1MiAxMy45NTIgMCAwMDkgMTFhMSAxIDAgMDExLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUZpcmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEyLjM5NSAyLjU1M2ExIDEgMCAwMC0xLjQ1LS4zODVjLS4zNDUuMjMtLjYxNC41NTgtLjgyMi44OC0uMjE0LjMzLS40MDMuNzEzLS41NyAxLjExNi0uMzM0LjgwNC0uNjE0IDEuNzY4LS44NCAyLjczNGEzMS4zNjUgMzEuMzY1IDAgMDAtLjYxMyAzLjU4IDIuNjQgMi42NCAwIDAxLS45NDUtMS4wNjdjLS4zMjgtLjY4LS4zOTgtMS41MzQtLjM5OC0yLjY1NEExIDEgMCAwMDUuMDUgNi4wNSA2Ljk4MSA2Ljk4MSAwIDAwMyAxMWE3IDcgMCAxMDExLjk1LTQuOTVjLS41OTItLjU5MS0uOTgtLjk4NS0xLjM0OC0xLjQ2Ny0uMzYzLS40NzYtLjcyNC0xLjA2My0xLjIwNy0yLjAzek0xMi4xMiAxNS4xMkEzIDMgMCAwMTcgMTNzLjg3OS41IDIuNS41YzAtMSAuNS00IDEuMjUtNC41LjUgMSAuNzg2IDEuMjkzIDEuMzcxIDEuODc5QTIuOTkgMi45OSAwIDAxMTMgMTNhMi45OSAyLjk5IDAgMDEtLjg3OSAyLjEyMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRmxhZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA2YTMgMyAwIDAxMy0zaDEwYTEgMSAwIDAxLjggMS42TDE0LjI1IDhsMi41NSAzLjRBMSAxIDAgMDExNiAxM0g2YTEgMSAwIDAwLTEgMXYzYTEgMSAwIDExLTIgMFY2elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlGb2xkZXJBZGQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiA2YTIgMiAwIDAxMi0yaDVsMiAyaDVhMiAyIDAgMDEyIDJ2NmEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJWNnpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZVwiOlwiI2ZmZlwiLFwic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDExaDRtLTItMnY0XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRm9sZGVyRG93bmxvYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiA2YTIgMiAwIDAxMi0yaDVsMiAyaDVhMiAyIDAgMDEyIDJ2NmEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJWNnpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZVwiOlwiI2ZmZlwiLFwic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMCA5djRtMCAwbC0yLTJtMiAybDItMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUZvbGRlck9wZW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTIgNmEyIDIgMCAwMTItMmg0bDIgMmg0YTIgMiAwIDAxMiAydjFIOGEzIDMgMCAwMC0zIDN2MS41YTEuNSAxLjUgMCAwMS0zIDBWNnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNiAxMmEyIDIgMCAwMTItMmg4YTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAySDJoMmEyIDIgMCAwMDItMnYtMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlGb2xkZXJSZW1vdmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiA2YTIgMiAwIDAxMi0yaDVsMiAyaDVhMiAyIDAgMDEyIDJ2NmEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJWNnpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZVwiOlwiI2ZmZlwiLFwic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDExaDRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlGb2xkZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiA2YTIgMiAwIDAxMi0yaDVsMiAyaDVhMiAyIDAgMDEyIDJ2NmEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJWNnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlHaWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDVhMyAzIDAgMDE1LTIuMjM2QTMgMyAwIDAxMTQuODMgNkgxNmEyIDIgMCAxMTAgNGgtNVY5YTEgMSAwIDEwLTIgMHYxSDRhMiAyIDAgMTEwLTRoMS4xN0M1LjA2IDUuNjg3IDUgNS4zNSA1IDV6bTQgMVY1YTEgMSAwIDEwLTEgMWgxem0zIDBhMSAxIDAgMTAtMS0xdjFoMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOSAxMUgzdjVhMiAyIDAgMDAyIDJoNHYtN3pNMTEgMThoNGEyIDIgMCAwMDItMnYtNWgtNnY3elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUdsb2JlQWx0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00LjA4MyA5aDEuOTQ2Yy4wODktMS41NDYuMzgzLTIuOTcuODM3LTQuMTE4QTYuMDA0IDYuMDA0IDAgMDA0LjA4MyA5ek0xMCAyYTggOCAwIDEwMCAxNiA4IDggMCAwMDAtMTZ6bTAgMmMtLjA3NiAwLS4yMzIuMDMyLS40NjUuMjYyLS4yMzguMjM0LS40OTcuNjIzLS43MzcgMS4xODItLjM4OS45MDctLjY3MyAyLjE0Mi0uNzY2IDMuNTU2aDMuOTM2Yy0uMDkzLTEuNDE0LS4zNzctMi42NDktLjc2Ni0zLjU1Ni0uMjQtLjU2LS41LS45NDgtLjczNy0xLjE4MkMxMC4yMzIgNC4wMzIgMTAuMDc2IDQgMTAgNHptMy45NzEgNWMtLjA4OS0xLjU0Ni0uMzgzLTIuOTctLjgzNy00LjExOEE2LjAwNCA2LjAwNCAwIDAxMTUuOTE3IDloLTEuOTQ2em0tMi4wMDMgMkg4LjAzMmMuMDkzIDEuNDE0LjM3NyAyLjY0OS43NjYgMy41NTYuMjQuNTYuNS45NDguNzM3IDEuMTgyLjIzMy4yMy4zODkuMjYyLjQ2NS4yNjIuMDc2IDAgLjIzMi0uMDMyLjQ2NS0uMjYyLjIzOC0uMjM0LjQ5OC0uNjIzLjczNy0xLjE4Mi4zODktLjkwNy42NzMtMi4xNDIuNzY2LTMuNTU2em0xLjE2NiA0LjExOGMuNDU0LTEuMTQ3Ljc0OC0yLjU3Mi44MzctNC4xMThoMS45NDZhNi4wMDQgNi4wMDQgMCAwMS0yLjc4MyA0LjExOHptLTYuMjY4IDBDNi40MTIgMTMuOTcgNi4xMTggMTIuNTQ2IDYuMDMgMTFINC4wODNhNi4wMDQgNi4wMDQgMCAwMDIuNzgzIDQuMTE4elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlHbG9iZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNNC4zMzIgOC4wMjdhNi4wMTIgNi4wMTIgMCAwMTEuOTEyLTIuNzA2QzYuNTEyIDUuNzMgNi45NzQgNiA3LjUgNkExLjUgMS41IDAgMDE5IDcuNVY4YTIgMiAwIDAwNCAwIDIgMiAwIDAxMS41MjMtMS45NDNBNS45NzcgNS45NzcgMCAwMTE2IDEwYzAgLjM0LS4wMjguNjc1LS4wODMgMUgxNWEyIDIgMCAwMC0yIDJ2Mi4xOTdBNS45NzMgNS45NzMgMCAwMTEwIDE2di0yYTIgMiAwIDAwLTItMiAyIDIgMCAwMS0yLTIgMiAyIDAgMDAtMS42NjgtMS45NzN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUhhbmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkgM2ExIDEgMCAwMTIgMHY1LjVhLjUuNSAwIDAwMSAwVjRhMSAxIDAgMTEyIDB2NC41YS41LjUgMCAwMDEgMFY2YTEgMSAwIDExMiAwdjVhNyA3IDAgMTEtMTQgMFY5YTEgMSAwIDAxMiAwdjIuNWEuNS41IDAgMDAxIDBWNGExIDEgMCAwMTIgMHY0LjVhLjUuNSAwIDAwMSAwVjN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUhhc2h0YWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkuMjQzIDMuMDNhMSAxIDAgMDEuNzI3IDEuMjEzTDkuNTMgNmgyLjk0bC41Ni0yLjI0M2ExIDEgMCAxMTEuOTQuNDg2TDE0LjUzIDZIMTdhMSAxIDAgMTEwIDJoLTIuOTdsLTEgNEgxNWExIDEgMCAxMTAgMmgtMi40N2wtLjU2IDIuMjQyYTEgMSAwIDExLTEuOTQtLjQ4NUwxMC40NyAxNEg3LjUzbC0uNTYgMi4yNDJhMSAxIDAgMTEtMS45NC0uNDg1TDUuNDcgMTRIM2ExIDEgMCAxMTAtMmgyLjk3bDEtNEg1YTEgMSAwIDExMC0yaDIuNDdsLjU2LTIuMjQzYTEgMSAwIDAxMS4yMTMtLjcyN3pNOS4wMyA4bC0xIDRoMi45MzhsMS00SDkuMDMxelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlIZWFydCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMy4xNzIgNS4xNzJhNCA0IDAgMDE1LjY1NiAwTDEwIDYuMzQzbDEuMTcyLTEuMTcxYTQgNCAwIDExNS42NTYgNS42NTZMMTAgMTcuNjU3bC02LjgyOC02LjgyOWE0IDQgMCAwMTAtNS42NTZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUhvbWUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTAuNzA3IDIuMjkzYTEgMSAwIDAwLTEuNDE0IDBsLTcgN2ExIDEgMCAwMDEuNDE0IDEuNDE0TDQgMTAuNDE0VjE3YTEgMSAwIDAwMSAxaDJhMSAxIDAgMDAxLTF2LTJhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXYyYTEgMSAwIDAwMSAxaDJhMSAxIDAgMDAxLTF2LTYuNTg2bC4yOTMuMjkzYTEgMSAwIDAwMS40MTQtMS40MTRsLTctN3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlJZGVudGlmaWNhdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMmExIDEgMCAwMC0xIDF2MWExIDEgMCAwMDIgMFYzYTEgMSAwIDAwLTEtMXpNNCA0aDNhMyAzIDAgMDA2IDBoM2EyIDIgMCAwMTIgMnY5YTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMlY2YTIgMiAwIDAxMi0yem0yLjUgN2ExLjUgMS41IDAgMTAwLTMgMS41IDEuNSAwIDAwMCAzem0yLjQ1IDRhMi41IDIuNSAwIDEwLTQuOSAwaDQuOXpNMTIgOWExIDEgMCAxMDAgMmgzYTEgMSAwIDEwMC0yaC0zem0tMSA0YTEgMSAwIDAxMS0xaDJhMSAxIDAgMTEwIDJoLTJhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlJbmJveEluIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTguNzA3IDcuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDIgMmExIDEgMCAwMDEuNDE0IDBsMi0yYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDExIDcuNTg2VjNhMSAxIDAgMTAtMiAwdjQuNTg2bC0uMjkzLS4yOTN6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMyA1YTIgMiAwIDAxMi0yaDFhMSAxIDAgMDEwIDJINXY3aDJsMSAyaDRsMS0yaDJWNWgtMWExIDEgMCAxMTAtMmgxYTIgMiAwIDAxMiAydjEwYTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMlY1elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUluYm94IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDNhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0ySDV6bTAgMmgxMHY3aC0ybC0xIDJIOGwtMS0ySDVWNXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpSW5mb3JtYXRpb25DaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNy00YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpNOSA5YTEgMSAwIDAwMCAydjNhMSAxIDAgMDAxIDFoMWExIDEgMCAxMDAtMnYtM2ExIDEgMCAwMC0xLTFIOXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpS2V5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCA4YTYgNiAwIDAxLTcuNzQzIDUuNzQzTDEwIDE0bC0xIDEtMSAxSDZ2Mkgydi00bDQuMjU3LTQuMjU3QTYgNiAwIDExMTggOHptLTYtNGExIDEgMCAxMDAgMiAyIDIgMCAwMTIgMiAxIDEgMCAxMDIgMCA0IDQgMCAwMC00LTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUxpYnJhcnkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwLjQ5NiAyLjEzMmExIDEgMCAwMC0uOTkyIDBsLTcgNEExIDEgMCAwMDMgOHY3YTEgMSAwIDEwMCAyaDE0YTEgMSAwIDEwMC0yVjhhMSAxIDAgMDAuNDk2LTEuODY4bC03LTR6TTYgOWExIDEgMCAwMC0xIDF2M2ExIDEgMCAxMDIgMHYtM2ExIDEgMCAwMC0xLTF6bTMgMWExIDEgMCAwMTIgMHYzYTEgMSAwIDExLTIgMHYtM3ptNS0xYTEgMSAwIDAwLTEgMXYzYTEgMSAwIDEwMiAwdi0zYTEgMSAwIDAwLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTGlnaHRCdWxiIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTExIDNhMSAxIDAgMTAtMiAwdjFhMSAxIDAgMTAyIDBWM3pNMTUuNjU3IDUuNzU3YTEgMSAwIDAwLTEuNDE0LTEuNDE0bC0uNzA3LjcwN2ExIDEgMCAwMDEuNDE0IDEuNDE0bC43MDctLjcwN3pNMTggMTBhMSAxIDAgMDEtMSAxaC0xYTEgMSAwIDExMC0yaDFhMSAxIDAgMDExIDF6TTUuMDUgNi40NjRBMSAxIDAgMTA2LjQ2NCA1LjA1bC0uNzA3LS43MDdhMSAxIDAgMDAtMS40MTQgMS40MTRsLjcwNy43MDd6TTUgMTBhMSAxIDAgMDEtMSAxSDNhMSAxIDAgMTEwLTJoMWExIDEgMCAwMTEgMXpNOCAxNnYtMWg0djFhMiAyIDAgMTEtNCAwek0xMiAxNGMuMDE1LS4zNC4yMDgtLjY0Ni40NzctLjg1OWE0IDQgMCAxMC00Ljk1NCAwYy4yNy4yMTMuNDYyLjUxOS40NzYuODU5aDQuMDAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUxpZ2h0bmluZ0JvbHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTExLjMgMS4wNDZBMSAxIDAgMDExMiAydjVoNGExIDEgMCAwMS44MiAxLjU3M2wtNyAxMEExIDEgMCAwMTggMTh2LTVINGExIDEgMCAwMS0uODItMS41NzNsNy0xMGExIDEgMCAwMTEuMTItLjM4elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlMaW5rIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMi41ODYgNC41ODZhMiAyIDAgMTEyLjgyOCAyLjgyOGwtMyAzYTIgMiAwIDAxLTIuODI4IDAgMSAxIDAgMDAtMS40MTQgMS40MTQgNCA0IDAgMDA1LjY1NiAwbDMtM2E0IDQgMCAwMC01LjY1Ni01LjY1NmwtMS41IDEuNWExIDEgMCAxMDEuNDE0IDEuNDE0bDEuNS0xLjV6bS01IDVhMiAyIDAgMDEyLjgyOCAwIDEgMSAwIDEwMS40MTQtMS40MTQgNCA0IDAgMDAtNS42NTYgMGwtMyAzYTQgNCAwIDEwNS42NTYgNS42NTZsMS41LTEuNWExIDEgMCAxMC0xLjQxNC0xLjQxNGwtMS41IDEuNWEyIDIgMCAxMS0yLjgyOC0yLjgyOGwzLTN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUxvY2F0aW9uTWFya2VyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01LjA1IDQuMDVhNyA3IDAgMTE5LjkgOS45TDEwIDE4LjlsLTQuOTUtNC45NWE3IDcgMCAwMTAtOS45ek0xMCAxMWEyIDIgMCAxMDAtNCAyIDIgMCAwMDAgNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTG9ja0Nsb3NlZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNSA5VjdhNSA1IDAgMDExMCAwdjJhMiAyIDAgMDEyIDJ2NWEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ2LTVhMiAyIDAgMDEyLTJ6bTgtMnYySDdWN2EzIDMgMCAwMTYgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTG9ja09wZW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTAgMmE1IDUgMCAwMC01IDV2MmEyIDIgMCAwMC0yIDJ2NWEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMnYtNWEyIDIgMCAwMC0yLTJIN1Y3YTMgMyAwIDAxNS45MDUtLjc1IDEgMSAwIDAwMS45MzctLjVBNS4wMDIgNS4wMDIgMCAwMDEwIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTG9naW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgM2ExIDEgMCAwMTEgMXYxMmExIDEgMCAxMS0yIDBWNGExIDEgMCAwMTEtMXptNy43MDcgMy4yOTNhMSAxIDAgMDEwIDEuNDE0TDkuNDE0IDlIMTdhMSAxIDAgMTEwIDJIOS40MTRsMS4yOTMgMS4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRsLTMtM2ExIDEgMCAwMTAtMS40MTRsMy0zYTEgMSAwIDAxMS40MTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTG9nb3V0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDNhMSAxIDAgMDAtMSAxdjEyYTEgMSAwIDEwMiAwVjRhMSAxIDAgMDAtMS0xem0xMC4yOTMgOS4yOTNhMSAxIDAgMDAxLjQxNCAxLjQxNGwzLTNhMSAxIDAgMDAwLTEuNDE0bC0zLTNhMSAxIDAgMTAtMS40MTQgMS40MTRMMTQuNTg2IDlIN2ExIDEgMCAxMDAgMmg3LjU4NmwtMS4yOTMgMS4yOTN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1haWxPcGVuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0yLjk0IDYuNDEyQTIgMiAwIDAwMiA4LjEwOFYxNmEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMlY4LjEwOGEyIDIgMCAwMC0uOTQtMS42OTZsLTYtMy43NWEyIDIgMCAwMC0yLjEyIDBsLTYgMy43NXptMi42MTUgMi40MjNhMSAxIDAgMTAtMS4xMSAxLjY2NGw1IDMuMzMzYTEgMSAwIDAwMS4xMSAwbDUtMy4zMzNhMSAxIDAgMDAtMS4xMS0xLjY2NEwxMCAxMS43OTggNS41NTUgOC44MzV6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1haWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMi4wMDMgNS44ODRMMTAgOS44ODJsNy45OTctMy45OThBMiAyIDAgMDAxNiA0SDRhMiAyIDAgMDAtMS45OTcgMS44ODR6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTggOC4xMThsLTggNC04LTRWMTRhMiAyIDAgMDAyIDJoMTJhMiAyIDAgMDAyLTJWOC4xMTh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTWFwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMiAxLjU4NmwtNCA0djEyLjgyOGw0LTRWMS41ODZ6TTMuNzA3IDMuMjkzQTEgMSAwIDAwMiA0djEwYTEgMSAwIDAwLjI5My43MDdMNiAxOC40MTRWNS41ODZMMy43MDcgMy4yOTN6TTE3LjcwNyA1LjI5M0wxNCAxLjU4NnYxMi44MjhsMi4yOTMgMi4yOTNBMSAxIDAgMDAxOCAxNlY2YTEgMSAwIDAwLS4yOTMtLjcwN3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTWVudUFsdDEgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWg2YTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDE1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNZW51QWx0MiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDEwYTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDE1YTEgMSAwIDAxMS0xaDZhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1lbnVBbHQzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTBhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTkgMTVhMSAxIDAgMDExLTFoNmExIDEgMCAxMTAgMmgtNmExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1lbnVBbHQ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDdhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTNhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1lbnUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTWljcm9waG9uZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNyA0YTMgMyAwIDAxNiAwdjRhMyAzIDAgMTEtNiAwVjR6bTQgMTAuOTNBNy4wMDEgNy4wMDEgMCAwMDE3IDhhMSAxIDAgMTAtMiAwQTUgNSAwIDAxNSA4YTEgMSAwIDAwLTIgMCA3LjAwMSA3LjAwMSAwIDAwNiA2LjkzVjE3SDZhMSAxIDAgMTAwIDJoOGExIDEgMCAxMDAtMmgtM3YtMi4wN3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTWludXNDaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTcgOWExIDEgMCAwMDAgMmg2YTEgMSAwIDEwMC0ySDd6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1pbnVzU20gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUgMTBhMSAxIDAgMDExLTFoOGExIDEgMCAxMTAgMkg2YTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTWludXMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgMTBhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1vb24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTcuMjkzIDEzLjI5M0E4IDggMCAwMTYuNzA3IDIuNzA3YTguMDAxIDguMDAxIDAgMTAxMC41ODYgMTAuNTg2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU11c2ljTm90ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xOCAzYTEgMSAwIDAwLTEuMTk2LS45OGwtMTAgMkExIDEgMCAwMDYgNXY5LjExNEE0LjM2OSA0LjM2OSAwIDAwNSAxNGMtMS42NTcgMC0zIC44OTUtMyAyczEuMzQzIDIgMyAyIDMtLjg5NSAzLTJWNy44Mmw4LTEuNnY1Ljg5NEE0LjM3IDQuMzcgMCAwMDE1IDEyYy0xLjY1NyAwLTMgLjg5NS0zIDJzMS4zNDMgMiAzIDIgMy0uODk1IDMtMlYzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU5ld3NwYXBlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMiA1YTIgMiAwIDAxMi0yaDhhMiAyIDAgMDEyIDJ2MTBhMiAyIDAgMDAyIDJINGEyIDIgMCAwMS0yLTJWNXptMyAxaDZ2NEg1VjZ6bTYgNkg1djJoNnYtMnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTUgN2gxYTIgMiAwIDAxMiAydjUuNWExLjUgMS41IDAgMDEtMyAwVjd6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT2ZmaWNlQnVpbGRpbmcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgNGEyIDIgMCAwMTItMmg4YTIgMiAwIDAxMiAydjEyYTEgMSAwIDExMCAyaC0zYTEgMSAwIDAxLTEtMXYtMmExIDEgMCAwMC0xLTFIOWExIDEgMCAwMC0xIDF2MmExIDEgMCAwMS0xIDFINGExIDEgMCAxMTAtMlY0em0zIDFoMnYySDdWNXptMiA0SDd2MmgyVjl6bTItNGgydjJoLTJWNXptMiA0aC0ydjJoMlY5elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQYXBlckFpcnBsYW5lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEwLjg5NCAyLjU1M2ExIDEgMCAwMC0xLjc4OCAwbC03IDE0YTEgMSAwIDAwMS4xNjkgMS40MDlsNS0xLjQyOUExIDEgMCAwMDkgMTUuNTcxVjExYTEgMSAwIDExMiAwdjQuNTcxYTEgMSAwIDAwLjcyNS45NjJsNSAxLjQyOGExIDEgMCAwMDEuMTctMS40MDhsLTctMTR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGFwZXJDbGlwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk04IDRhMyAzIDAgMDAtMyAzdjRhNSA1IDAgMDAxMCAwVjdhMSAxIDAgMTEyIDB2NGE3IDcgMCAxMS0xNCAwVjdhNSA1IDAgMDExMCAwdjRhMyAzIDAgMTEtNiAwVjdhMSAxIDAgMDEyIDB2NGExIDEgMCAxMDIgMFY3YTMgMyAwIDAwLTMtM3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGF1c2UgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwek03IDhhMSAxIDAgMDEyIDB2NGExIDEgMCAxMS0yIDBWOHptNS0xYTEgMSAwIDAwLTEgMXY0YTEgMSAwIDEwMiAwVjhhMSAxIDAgMDAtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQZW5jaWxBbHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTcuNDE0IDIuNTg2YTIgMiAwIDAwLTIuODI4IDBMNyAxMC4xNzJWMTNoMi44MjhsNy41ODYtNy41ODZhMiAyIDAgMDAwLTIuODI4elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0yIDZhMiAyIDAgMDEyLTJoNGExIDEgMCAwMTAgMkg0djEwaDEwdi00YTEgMSAwIDExMiAwdjRhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0yVjZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBlbmNpbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMy41ODYgMy41ODZhMiAyIDAgMTEyLjgyOCAyLjgyOGwtLjc5My43OTMtMi44MjgtMi44MjguNzkzLS43OTN6TTExLjM3OSA1Ljc5M0wzIDE0LjE3MlYxN2gyLjgyOGw4LjM4LTguMzc5LTIuODMtMi44Mjh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGhvbmVJbmNvbWluZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xNC40MTQgN2wzLjI5My0zLjI5M2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxMyA1LjU4NlY0YTEgMSAwIDEwLTIgMHY0LjAwM2EuOTk2Ljk5NiAwIDAwLjYxNy45MjFBLjk5Ny45OTcgMCAwMDEyIDloNGExIDEgMCAxMDAtMmgtMS41ODZ6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiAzYTEgMSAwIDAxMS0xaDIuMTUzYTEgMSAwIDAxLjk4Ni44MzZsLjc0IDQuNDM1YTEgMSAwIDAxLS41NCAxLjA2bC0xLjU0OC43NzNhMTEuMDM3IDExLjAzNyAwIDAwNi4xMDUgNi4xMDVsLjc3NC0xLjU0OGExIDEgMCAwMTEuMDU5LS41NGw0LjQzNS43NGExIDEgMCAwMS44MzYuOTg2VjE3YTEgMSAwIDAxLTEgMWgtMkM3LjgyIDE4IDIgMTIuMTggMiA1VjN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGhvbmVNaXNzZWRDYWxsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgM2ExIDEgMCAwMTEtMWgyLjE1M2ExIDEgMCAwMS45ODYuODM2bC43NCA0LjQzNWExIDEgMCAwMS0uNTQgMS4wNmwtMS41NDguNzczYTExLjAzNyAxMS4wMzcgMCAwMDYuMTA1IDYuMTA1bC43NzQtMS41NDhhMSAxIDAgMDExLjA1OS0uNTRsNC40MzUuNzRhMSAxIDAgMDEuODM2Ljk4NlYxN2ExIDEgMCAwMS0xIDFoLTJDNy44MiAxOCAyIDEyLjE4IDIgNVYzelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTE2LjcwNyAzLjI5M2ExIDEgMCAwMTAgMS40MTRMMTUuNDE0IDZsMS4yOTMgMS4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTQgNy40MTRsLTEuMjkzIDEuMjkzYTEgMSAwIDExLTEuNDE0LTEuNDE0TDEyLjU4NiA2bC0xLjI5My0xLjI5M2ExIDEgMCAwMTEuNDE0LTEuNDE0TDE0IDQuNTg2bDEuMjkzLTEuMjkzYTEgMSAwIDAxMS40MTQgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQaG9uZU91dGdvaW5nIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTE3LjkyNCAyLjYxN2EuOTk3Ljk5NyAwIDAwLS4yMTUtLjMyMmwtLjAwNC0uMDA0QS45OTcuOTk3IDAgMDAxNyAyaC00YTEgMSAwIDEwMCAyaDEuNTg2bC0zLjI5MyAzLjI5M2ExIDEgMCAwMDEuNDE0IDEuNDE0TDE2IDUuNDE0VjdhMSAxIDAgMTAyIDBWM2EuOTk3Ljk5NyAwIDAwLS4wNzYtLjM4M3pcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDNhMSAxIDAgMDExLTFoMi4xNTNhMSAxIDAgMDEuOTg2LjgzNmwuNzQgNC40MzVhMSAxIDAgMDEtLjU0IDEuMDZsLTEuNTQ4Ljc3M2ExMS4wMzcgMTEuMDM3IDAgMDA2LjEwNSA2LjEwNWwuNzc0LTEuNTQ4YTEgMSAwIDAxMS4wNTktLjU0bDQuNDM1Ljc0YTEgMSAwIDAxLjgzNi45ODZWMTdhMSAxIDAgMDEtMSAxaC0yQzcuODIgMTggMiAxMi4xOCAyIDVWM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQaG9uZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDNhMSAxIDAgMDExLTFoMi4xNTNhMSAxIDAgMDEuOTg2LjgzNmwuNzQgNC40MzVhMSAxIDAgMDEtLjU0IDEuMDZsLTEuNTQ4Ljc3M2ExMS4wMzcgMTEuMDM3IDAgMDA2LjEwNSA2LjEwNWwuNzc0LTEuNTQ4YTEgMSAwIDAxMS4wNTktLjU0bDQuNDM1Ljc0YTEgMSAwIDAxLjgzNi45ODZWMTdhMSAxIDAgMDEtMSAxaC0yQzcuODIgMTggMiAxMi4xOCAyIDVWM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQaG90b2dyYXBoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDNhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEyYTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0ySDR6bTEyIDEySDRsNC04IDMgNiAyLTQgMyA2elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQbGF5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek05LjU1NSA3LjE2OEExIDEgMCAwMDggOHY0YTEgMSAwIDAwMS41NTUuODMybDMtMmExIDEgMCAwMDAtMS42NjRsLTMtMnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGx1c0NpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMS0xMWExIDEgMCAxMC0yIDB2Mkg3YTEgMSAwIDEwMCAyaDJ2MmExIDEgMCAxMDIgMHYtMmgyYTEgMSAwIDEwMC0yaC0yVjd6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBsdXNTbSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgNWExIDEgMCAwMTEgMXYzaDNhMSAxIDAgMTEwIDJoLTN2M2ExIDEgMCAxMS0yIDB2LTNINmExIDEgMCAxMTAtMmgzVjZhMSAxIDAgMDExLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBsdXMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDNhMSAxIDAgMDExIDF2NWg1YTEgMSAwIDExMCAyaC01djVhMSAxIDAgMTEtMiAwdi01SDRhMSAxIDAgMTEwLTJoNVY0YTEgMSAwIDAxMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQcmVzZW50YXRpb25DaGFydEJhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyAzYTEgMSAwIDAwMCAydjhhMiAyIDAgMDAyIDJoMi41ODZsLTEuMjkzIDEuMjkzYTEgMSAwIDEwMS40MTQgMS40MTRMMTAgMTUuNDE0bDIuMjkzIDIuMjkzYTEgMSAwIDAwMS40MTQtMS40MTRMMTIuNDE0IDE1SDE1YTIgMiAwIDAwMi0yVjVhMSAxIDAgMTAwLTJIM3ptMTEgNGExIDEgMCAxMC0yIDB2NGExIDEgMCAxMDIgMFY3em0tMyAxYTEgMSAwIDEwLTIgMHYzYTEgMSAwIDEwMiAwVjh6TTggOWExIDEgMCAwMC0yIDB2MmExIDEgMCAxMDIgMFY5elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQcmVzZW50YXRpb25DaGFydExpbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgM2ExIDEgMCAwMDAgMnY4YTIgMiAwIDAwMiAyaDIuNTg2bC0xLjI5MyAxLjI5M2ExIDEgMCAxMDEuNDE0IDEuNDE0TDEwIDE1LjQxNGwyLjI5MyAyLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0TDEyLjQxNCAxNUgxNWEyIDIgMCAwMDItMlY1YTEgMSAwIDEwMC0ySDN6bTExLjcwNyA0LjcwN2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxMCA5LjU4NiA4LjcwNyA4LjI5M2ExIDEgMCAwMC0xLjQxNCAwbC0yIDJhMSAxIDAgMTAxLjQxNCAxLjQxNEw4IDEwLjQxNGwxLjI5MyAxLjI5M2ExIDEgMCAwMDEuNDE0IDBsNC00elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQcmludGVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDR2M0g0YTIgMiAwIDAwLTIgMnYzYTIgMiAwIDAwMiAyaDF2MmEyIDIgMCAwMDIgMmg2YTIgMiAwIDAwMi0ydi0yaDFhMiAyIDAgMDAyLTJWOWEyIDIgMCAwMC0yLTJoLTFWNGEyIDIgMCAwMC0yLTJIN2EyIDIgMCAwMC0yIDJ6bTggMEg3djNoNlY0em0wIDhIN3Y0aDZ2LTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVB1enpsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMCAzLjVhMS41IDEuNSAwIDAxMyAwVjRhMSAxIDAgMDAxIDFoM2ExIDEgMCAwMTEgMXYzYTEgMSAwIDAxLTEgMWgtLjVhMS41IDEuNSAwIDAwMCAzaC41YTEgMSAwIDAxMSAxdjNhMSAxIDAgMDEtMSAxaC0zYTEgMSAwIDAxLTEtMXYtLjVhMS41IDEuNSAwIDAwLTMgMHYuNWExIDEgMCAwMS0xIDFINmExIDEgMCAwMS0xLTF2LTNhMSAxIDAgMDAtMS0xaC0uNWExLjUgMS41IDAgMDEwLTNINGExIDEgMCAwMDEtMVY2YTEgMSAwIDAxMS0xaDNhMSAxIDAgMDAxLTF2LS41elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVFyY29kZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA0YTEgMSAwIDAxMS0xaDNhMSAxIDAgMDExIDF2M2ExIDEgMCAwMS0xIDFINGExIDEgMCAwMS0xLTFWNHptMiAyVjVoMXYxSDV6TTMgMTNhMSAxIDAgMDExLTFoM2ExIDEgMCAwMTEgMXYzYTEgMSAwIDAxLTEgMUg0YTEgMSAwIDAxLTEtMXYtM3ptMiAydi0xaDF2MUg1ek0xMyAzYTEgMSAwIDAwLTEgMXYzYTEgMSAwIDAwMSAxaDNhMSAxIDAgMDAxLTFWNGExIDEgMCAwMC0xLTFoLTN6bTEgMnYxaDFWNWgtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTEgNGExIDEgMCAxMC0yIDB2MWExIDEgMCAwMDIgMFY0ek0xMCA3YTEgMSAwIDAxMSAxdjFoMmExIDEgMCAxMTAgMmgtM2ExIDEgMCAwMS0xLTFWOGExIDEgMCAwMTEtMXpNMTYgOWExIDEgMCAxMDAgMiAxIDEgMCAwMDAtMnpNOSAxM2ExIDEgMCAwMTEtMWgxYTEgMSAwIDExMCAydjJhMSAxIDAgMTEtMiAwdi0zek03IDExYTEgMSAwIDEwMC0ySDRhMSAxIDAgMTAwIDJoM3pNMTcgMTNhMSAxIDAgMDEtMSAxaC0yYTEgMSAwIDExMC0yaDJhMSAxIDAgMDExIDF6TTE2IDE3YTEgMSAwIDEwMC0yaC0zYTEgMSAwIDEwMCAyaDN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUXVlc3Rpb25NYXJrQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTgtM2ExIDEgMCAwMC0uODY3LjUgMSAxIDAgMTEtMS43MzEtMUEzIDMgMCAwMTEzIDhhMy4wMDEgMy4wMDEgMCAwMS0yIDIuODNWMTFhMSAxIDAgMTEtMiAwdi0xYTEgMSAwIDAxMS0xIDEgMSAwIDEwMC0yem0wIDhhMSAxIDAgMTAwLTIgMSAxIDAgMDAwIDJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVJlY2VpcHRSZWZ1bmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUgMmEyIDIgMCAwMC0yIDJ2MTRsMy41LTIgMy41IDIgMy41LTIgMy41IDJWNGEyIDIgMCAwMC0yLTJINXptNC43MDcgMy43MDdhMSAxIDAgMDAtMS40MTQtMS40MTRsLTMgM2ExIDEgMCAwMDAgMS40MTRsMyAzYTEgMSAwIDAwMS40MTQtMS40MTRMOC40MTQgOUgxMGEzIDMgMCAwMTMgM3YxYTEgMSAwIDEwMiAwdi0xYTUgNSAwIDAwLTUtNUg4LjQxNGwxLjI5My0xLjI5M3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUmVjZWlwdFRheCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNSAyYTIgMiAwIDAwLTIgMnYxNGwzLjUtMiAzLjUgMiAzLjUtMiAzLjUgMlY0YTIgMiAwIDAwLTItMkg1em0yLjUgM2ExLjUgMS41IDAgMTAwIDMgMS41IDEuNSAwIDAwMC0zem02LjIwNy4yOTNhMSAxIDAgMDAtMS40MTQgMGwtNiA2YTEgMSAwIDEwMS40MTQgMS40MTRsNi02YTEgMSAwIDAwMC0xLjQxNHpNMTIuNSAxMGExLjUgMS41IDAgMTAwIDMgMS41IDEuNSAwIDAwMC0zelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlSZWZyZXNoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDJhMSAxIDAgMDExIDF2Mi4xMDFhNy4wMDIgNy4wMDIgMCAwMTExLjYwMSAyLjU2NiAxIDEgMCAxMS0xLjg4NS42NjZBNS4wMDIgNS4wMDIgMCAwMDUuOTk5IDdIOWExIDEgMCAwMTAgMkg0YTEgMSAwIDAxLTEtMVYzYTEgMSAwIDAxMS0xem0uMDA4IDkuMDU3YTEgMSAwIDAxMS4yNzYuNjFBNS4wMDIgNS4wMDIgMCAwMDE0LjAwMSAxM0gxMWExIDEgMCAxMTAtMmg1YTEgMSAwIDAxMSAxdjVhMSAxIDAgMTEtMiAwdi0yLjEwMWE3LjAwMiA3LjAwMiAwIDAxLTExLjYwMS0yLjU2NiAxIDEgMCAwMS42MS0xLjI3NnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUmVwbHkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcuNzA3IDMuMjkzYTEgMSAwIDAxMCAxLjQxNEw1LjQxNCA3SDExYTcgNyAwIDAxNyA3djJhMSAxIDAgMTEtMiAwdi0yYTUgNSAwIDAwLTUtNUg1LjQxNGwyLjI5MyAyLjI5M2ExIDEgMCAxMS0xLjQxNCAxLjQxNGwtNC00YTEgMSAwIDAxMC0xLjQxNGw0LTRhMSAxIDAgMDExLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlSZXdpbmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOC40NDUgMTQuODMyQTEgMSAwIDAwMTAgMTR2LTIuNzk4bDUuNDQ1IDMuNjNBMSAxIDAgMDAxNyAxNFY2YTEgMSAwIDAwLTEuNTU1LS44MzJMMTAgOC43OThWNmExIDEgMCAwMC0xLjU1NS0uODMybC02IDRhMSAxIDAgMDAwIDEuNjY0bDYgNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlSc3MgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNSAzYTEgMSAwIDAwMCAyYzUuNTIzIDAgMTAgNC40NzcgMTAgMTBhMSAxIDAgMTAyIDBDMTcgOC4zNzMgMTEuNjI3IDMgNSAzelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTQgOWExIDEgMCAwMTEtMSA3IDcgMCAwMTcgNyAxIDEgMCAxMS0yIDAgNSA1IDAgMDAtNS01IDEgMSAwIDAxLTEtMXpNMyAxNWEyIDIgMCAxMTQgMCAyIDIgMCAwMS00IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2F2ZUFzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTkuNzA3IDcuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0IDBsMy0zYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDEzIDguNTg2VjVoM2EyIDIgMCAwMTIgMnY1YTIgMiAwIDAxLTIgMkg4YTIgMiAwIDAxLTItMlY3YTIgMiAwIDAxMi0yaDN2My41ODZMOS43MDcgNy4yOTN6TTExIDNhMSAxIDAgMTEyIDB2MmgtMlYzelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTQgOWEyIDIgMCAwMC0yIDJ2NWEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0ySDRWOXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTYXZlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTcuNzA3IDEwLjI5M2ExIDEgMCAxMC0xLjQxNCAxLjQxNGwzIDNhMSAxIDAgMDAxLjQxNCAwbDMtM2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxMSAxMS41ODZWNmg1YTIgMiAwIDAxMiAydjdhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0yVjhhMiAyIDAgMDEyLTJoNXY1LjU4NmwtMS4yOTMtMS4yOTN6TTkgNGExIDEgMCAwMTIgMHYySDlWNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTY2FsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMmExIDEgMCAwMTEgMXYxLjMyM2wzLjk1NCAxLjU4MiAxLjU5OS0uOGExIDEgMCAwMS44OTQgMS43OWwtMS4yMzMuNjE2IDEuNzM4IDUuNDJhMSAxIDAgMDEtLjI4NSAxLjA1QTMuOTg5IDMuOTg5IDAgMDExNSAxNWEzLjk4OSAzLjk4OSAwIDAxLTIuNjY3LTEuMDE5IDEgMSAwIDAxLS4yODUtMS4wNWwxLjcxNS01LjM0OUwxMSA2LjQ3N1YxNmgyYTEgMSAwIDExMCAySDdhMSAxIDAgMTEwLTJoMlY2LjQ3N0w2LjIzNyA3LjU4MmwxLjcxNSA1LjM0OWExIDEgMCAwMS0uMjg1IDEuMDVBMy45ODkgMy45ODkgMCAwMTUgMTVhMy45ODkgMy45ODkgMCAwMS0yLjY2Ny0xLjAxOSAxIDEgMCAwMS0uMjg1LTEuMDVsMS43MzgtNS40Mi0xLjIzMy0uNjE3YTEgMSAwIDAxLjg5NC0xLjc4OGwxLjU5OS43OTlMOSA0LjMyM1YzYTEgMSAwIDAxMS0xem0tNSA4LjI3NGwtLjgxOCAyLjU1MmMuMjUuMTEyLjUyNi4xNzQuODE4LjE3NC4yOTIgMCAuNTY5LS4wNjIuODE4LS4xNzRMNSAxMC4yNzR6bTEwIDBsLS44MTggMi41NTJjLjI1LjExMi41MjYuMTc0LjgxOC4xNzQuMjkyIDAgLjU2OS0uMDYyLjgxOC0uMTc0TDE1IDEwLjI3NHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2Npc3NvcnMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUuNSAyYTMuNSAzLjUgMCAxMDEuNjY1IDYuNThMOC41ODUgMTBsLTEuNDIgMS40MmEzLjUgMy41IDAgMTAxLjQxNCAxLjQxNGw4LjEyOC04LjEyN2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxMCA4LjU4NmwtMS40Mi0xLjQyQTMuNSAzLjUgMCAwMDUuNSAyek00IDUuNWExLjUgMS41IDAgMTEzIDAgMS41IDEuNSAwIDAxLTMgMHptMCA5YTEuNSAxLjUgMCAxMTMgMCAxLjUgMS41IDAgMDEtMyAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMi44MjggMTEuNDE0YTEgMSAwIDAwLTEuNDE0IDEuNDE0bDMuODc5IDMuODhhMSAxIDAgMDAxLjQxNC0xLjQxNWwtMy44NzktMy44Nzl6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2VhcmNoQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTkgOWEyIDIgMCAxMTQgMCAyIDIgMCAwMS00IDB6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6bTEtMTNhNCA0IDAgMDAtMy40NDYgNi4wMzJsLTIuMjYxIDIuMjZhMSAxIDAgMTAxLjQxNCAxLjQxNWwyLjI2MS0yLjI2MUE0IDQgMCAxMDExIDV6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNlYXJjaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOCA0YTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04ek0yIDhhNiA2IDAgMTExMC44OSAzLjQ3Nmw0LjgxNyA0LjgxN2ExIDEgMCAwMS0xLjQxNCAxLjQxNGwtNC44MTYtNC44MTZBNiA2IDAgMDEyIDh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNlbGVjdG9yIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAzYTEgMSAwIDAxLjcwNy4yOTNsMyAzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDUuNDE0IDcuNzA3IDcuNzA3YTEgMSAwIDAxLTEuNDE0LTEuNDE0bDMtM0ExIDEgMCAwMTEwIDN6bS0zLjcwNyA5LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgMTQuNTg2bDIuMjkzLTIuMjkzYTEgMSAwIDAxMS40MTQgMS40MTRsLTMgM2ExIDEgMCAwMS0xLjQxNCAwbC0zLTNhMSAxIDAgMDEwLTEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTZXJ2ZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTIgNWEyIDIgMCAwMTItMmgxMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMlY1em0xNCAxYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpNMiAxM2EyIDIgMCAwMTItMmgxMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMnYtMnptMTQgMWExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNoYXJlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTE1IDhhMyAzIDAgMTAtMi45NzctMi42M2wtNC45NCAyLjQ3YTMgMyAwIDEwMCA0LjMxOWw0Ljk0IDIuNDdhMyAzIDAgMTAuODk1LTEuNzg5bC00Ljk0LTIuNDdhMy4wMjcgMy4wMjcgMCAwMDAtLjc0bDQuOTQtMi40N0MxMy40NTYgNy42OCAxNC4xOSA4IDE1IDh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2hpZWxkQ2hlY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTIuMTY2IDQuOTk5QTExLjk1NCAxMS45NTQgMCAwMDEwIDEuOTQ0IDExLjk1NCAxMS45NTQgMCAwMDE3LjgzNCA1Yy4xMS42NS4xNjYgMS4zMi4xNjYgMi4wMDEgMCA1LjIyNS0zLjM0IDkuNjctOCAxMS4zMTdDNS4zNCAxNi42NyAyIDEyLjIyNSAyIDdjMC0uNjgyLjA1Ny0xLjM1LjE2Ni0yLjAwMXptMTEuNTQxIDMuNzA4YTEgMSAwIDAwLTEuNDE0LTEuNDE0TDkgMTAuNTg2IDcuNzA3IDkuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDIgMmExIDEgMCAwMDEuNDE0IDBsNC00elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTaGllbGRFeGNsYW1hdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMS45NDRBMTEuOTU0IDExLjk1NCAwIDAxMi4xNjYgNUMyLjA1NiA1LjY0OSAyIDYuMzE5IDIgN2MwIDUuMjI1IDMuMzQgOS42NyA4IDExLjMxN0MxNC42NiAxNi42NyAxOCAxMi4yMjUgMTggN2MwLS42ODItLjA1Ny0xLjM1LS4xNjYtMi4wMDFBMTEuOTU0IDExLjk1NCAwIDAxMTAgMS45NDR6TTExIDE0YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptMC03YTEgMSAwIDEwLTIgMHYzYTEgMSAwIDEwMiAwVjd6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNob3BwaW5nQmFnIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAyYTQgNCAwIDAwLTQgNHYxSDVhMSAxIDAgMDAtLjk5NC44OWwtMSA5QTEgMSAwIDAwNCAxOGgxMmExIDEgMCAwMC45OTQtMS4xMWwtMS05QTEgMSAwIDAwMTUgN2gtMVY2YTQgNCAwIDAwLTQtNHptMiA1VjZhMiAyIDAgMTAtNCAwdjFoNHptLTYgM2ExIDEgMCAxMTIgMCAxIDEgMCAwMS0yIDB6bTctMWExIDEgMCAxMDAgMiAxIDEgMCAwMDAtMnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2hvcHBpbmdDYXJ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTMgMWExIDEgMCAwMDAgMmgxLjIybC4zMDUgMS4yMjJhLjk5Ny45OTcgMCAwMC4wMS4wNDJsMS4zNTggNS40My0uODkzLjg5MkMzLjc0IDExLjg0NiA0LjYzMiAxNCA2LjQxNCAxNEgxNWExIDEgMCAwMDAtMkg2LjQxNGwxLTFIMTRhMSAxIDAgMDAuODk0LS41NTNsMy02QTEgMSAwIDAwMTcgM0g2LjI4bC0uMzEtMS4yNDNBMSAxIDAgMDA1IDFIM3pNMTYgMTYuNWExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHpNNi41IDE4YTEuNSAxLjUgMCAxMDAtMyAxLjUgMS41IDAgMDAwIDN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU29ydEFzY2VuZGluZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0zIDNhMSAxIDAgMDAwIDJoMTFhMSAxIDAgMTAwLTJIM3pNMyA3YTEgMSAwIDAwMCAyaDVhMSAxIDAgMDAwLTJIM3pNMyAxMWExIDEgMCAxMDAgMmg0YTEgMSAwIDEwMC0ySDN6TTEzIDE2YTEgMSAwIDEwMiAwdi01LjU4NmwxLjI5MyAxLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0bC0zLTNhMSAxIDAgMDAtMS40MTQgMGwtMyAzYTEgMSAwIDEwMS40MTQgMS40MTRMMTMgMTAuNDE0VjE2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNvcnREZXNjZW5kaW5nIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTMgM2ExIDEgMCAwMDAgMmgxMWExIDEgMCAxMDAtMkgzek0zIDdhMSAxIDAgMDAwIDJoN2ExIDEgMCAxMDAtMkgzek0zIDExYTEgMSAwIDEwMCAyaDRhMSAxIDAgMTAwLTJIM3pNMTUgOGExIDEgMCAxMC0yIDB2NS41ODZsLTEuMjkzLTEuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0IDBsMy0zYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDE1IDEzLjU4NlY4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNwYXJrbGVzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDJhMSAxIDAgMDExIDF2MWgxYTEgMSAwIDAxMCAySDZ2MWExIDEgMCAwMS0yIDBWNkgzYTEgMSAwIDAxMC0yaDFWM2ExIDEgMCAwMTEtMXptMCAxMGExIDEgMCAwMTEgMXYxaDFhMSAxIDAgMTEwIDJINnYxYTEgMSAwIDExLTIgMHYtMUgzYTEgMSAwIDExMC0yaDF2LTFhMSAxIDAgMDExLTF6TTEyIDJhMSAxIDAgMDEuOTY3Ljc0NEwxNC4xNDYgNy4yIDE3LjUgOS4xMzRhMSAxIDAgMDEwIDEuNzMybC0zLjM1NCAxLjkzNS0xLjE4IDQuNDU1YTEgMSAwIDAxLTEuOTMzIDBMOS44NTQgMTIuOCA2LjUgMTAuODY2YTEgMSAwIDAxMC0xLjczMmwzLjM1NC0xLjkzNSAxLjE4LTQuNDU1QTEgMSAwIDAxMTIgMnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU3BlYWtlcnBob25lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCAzYTEgMSAwIDAwLTEuNDQ3LS44OTRMOC43NjMgNkg1YTMgMyAwIDAwMCA2aC4yOGwxLjc3MSA1LjMxNkExIDEgMCAwMDggMThoMWExIDEgMCAwMDEtMXYtNC4zODJsNi41NTMgMy4yNzZBMSAxIDAgMDAxOCAxNVYzelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTdGFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTkuMDQ5IDIuOTI3Yy4zLS45MjEgMS42MDMtLjkyMSAxLjkwMiAwbDEuMDcgMy4yOTJhMSAxIDAgMDAuOTUuNjloMy40NjJjLjk2OSAwIDEuMzcxIDEuMjQuNTg4IDEuODFsLTIuOCAyLjAzNGExIDEgMCAwMC0uMzY0IDEuMTE4bDEuMDcgMy4yOTJjLjMuOTIxLS43NTUgMS42ODgtMS41NCAxLjExOGwtMi44LTIuMDM0YTEgMSAwIDAwLTEuMTc1IDBsLTIuOCAyLjAzNGMtLjc4NC41Ny0xLjgzOC0uMTk3LTEuNTM5LTEuMTE4bDEuMDctMy4yOTJhMSAxIDAgMDAtLjM2NC0xLjExOEwyLjk4IDguNzJjLS43ODMtLjU3LS4zOC0xLjgxLjU4OC0xLjgxaDMuNDYxYTEgMSAwIDAwLjk1MS0uNjlsMS4wNy0zLjI5MnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTdGF0dXNPZmZsaW5lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTMuNzA3IDIuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDYuOTIxIDYuOTIyYy4wNS4wNjIuMTA1LjExOC4xNjguMTY3bDYuOTEgNi45MTFhMSAxIDAgMDAxLjQxNS0xLjQxNGwtLjY3NS0uNjc1YTkuMDAxIDkuMDAxIDAgMDAtLjY2OC0xMS45ODJBMSAxIDAgMTAxNC45NSA1LjA1YTcuMDAyIDcuMDAyIDAgMDEuNjU3IDkuMTQzbC0xLjQzNS0xLjQzNWE1LjAwMiA1LjAwMiAwIDAwLS42MzYtNi4yOTRBMSAxIDAgMDAxMi4xMiA3Ljg4Yy45MjQuOTIzIDEuMTIgMi4zLjU4NyAzLjQxNWwtMS45OTItMS45OTJhLjkyMi45MjIgMCAwMC0uMDE4LS4wMThsLTYuOTktNi45OTF6TTMuMjM4IDguMTg3YTEgMSAwIDAwLTEuOTMzLS41MTZjLS44IDMtLjAyNSA2LjMzNiAyLjMzMSA4LjY5M2ExIDEgMCAwMDEuNDE0LTEuNDE1IDYuOTk3IDYuOTk3IDAgMDEtMS44MTItNi43NjJ6TTcuNCAxMS41YTEgMSAwIDEwLTEuNzMgMWMuMjE0LjM3MS40OC43Mi43OTUgMS4wMzVhMSAxIDAgMDAxLjQxNC0xLjQxNGMtLjE5MS0uMTkxLS4zNS0uNC0uNDc4LS42MjJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU3RhdHVzT25saW5lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01LjA1IDMuNjM2YTEgMSAwIDAxMCAxLjQxNCA3IDcgMCAwMDAgOS45IDEgMSAwIDExLTEuNDE0IDEuNDE0IDkgOSAwIDAxMC0xMi43MjggMSAxIDAgMDExLjQxNCAwem05LjkgMGExIDEgMCAwMTEuNDE0IDAgOSA5IDAgMDEwIDEyLjcyOCAxIDEgMCAxMS0xLjQxNC0xLjQxNCA3IDcgMCAwMDAtOS45IDEgMSAwIDAxMC0xLjQxNHpNNy44NzkgNi40NjRhMSAxIDAgMDEwIDEuNDE0IDMgMyAwIDAwMCA0LjI0MyAxIDEgMCAxMS0xLjQxNSAxLjQxNCA1IDUgMCAwMTAtNy4wNyAxIDEgMCAwMTEuNDE1IDB6bTQuMjQyIDBhMSAxIDAgMDExLjQxNSAwIDUgNSAwIDAxMCA3LjA3MiAxIDEgMCAwMS0xLjQxNS0xLjQxNSAzIDMgMCAwMDAtNC4yNDIgMSAxIDAgMDEwLTEuNDE1ek0xMCA5YTEgMSAwIDAxMSAxdi4wMWExIDEgMCAxMS0yIDBWMTBhMSAxIDAgMDExLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVN0b3AgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTggN2ExIDEgMCAwMC0xIDF2NGExIDEgMCAwMDEgMWg0YTEgMSAwIDAwMS0xVjhhMSAxIDAgMDAtMS0xSDh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVN1biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMmExIDEgMCAwMTEgMXYxYTEgMSAwIDExLTIgMFYzYTEgMSAwIDAxMS0xem00IDhhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwem0tLjQ2NCA0Ljk1bC43MDcuNzA3YTEgMSAwIDAwMS40MTQtMS40MTRsLS43MDctLjcwN2ExIDEgMCAwMC0xLjQxNCAxLjQxNHptMi4xMi0xMC42MDdhMSAxIDAgMDEwIDEuNDE0bC0uNzA2LjcwN2ExIDEgMCAxMS0xLjQxNC0xLjQxNGwuNzA3LS43MDdhMSAxIDAgMDExLjQxNCAwek0xNyAxMWExIDEgMCAxMDAtMmgtMWExIDEgMCAxMDAgMmgxem0tNyA0YTEgMSAwIDAxMSAxdjFhMSAxIDAgMTEtMiAwdi0xYTEgMSAwIDAxMS0xek01LjA1IDYuNDY0QTEgMSAwIDEwNi40NjUgNS4wNWwtLjcwOC0uNzA3YTEgMSAwIDAwLTEuNDE0IDEuNDE0bC43MDcuNzA3em0xLjQxNCA4LjQ4NmwtLjcwNy43MDdhMSAxIDAgMDEtMS40MTQtMS40MTRsLjcwNy0uNzA3YTEgMSAwIDAxMS40MTQgMS40MTR6TTQgMTFhMSAxIDAgMTAwLTJIM2ExIDEgMCAwMDAgMmgxelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTdXBwb3J0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTIgMGMwIC45OTMtLjI0MSAxLjkyOS0uNjY4IDIuNzU0bC0xLjUyNC0xLjUyNWEzLjk5NyAzLjk5NyAwIDAwLjA3OC0yLjE4M2wxLjU2Mi0xLjU2MkMxNS44MDIgOC4yNDkgMTYgOS4xIDE2IDEwem0tNS4xNjUgMy45MTNsMS41OCAxLjU4QTUuOTggNS45OCAwIDAxMTAgMTZhNS45NzYgNS45NzYgMCAwMS0yLjUxNi0uNTUybDEuNTYyLTEuNTYyYTQuMDA2IDQuMDA2IDAgMDAxLjc4OS4wMjd6bS00LjY3Ny0yLjc5NmE0LjAwMiA0LjAwMiAwIDAxLS4wNDEtMi4wOGwtLjA4LjA4LTEuNTMtMS41MzNBNS45OCA1Ljk4IDAgMDA0IDEwYzAgLjk1NC4yMjMgMS44NTYuNjE5IDIuNjU3bDEuNTQtMS41NHptMS4wODgtNi40NUE1Ljk3NCA1Ljk3NCAwIDAxMTAgNGMuOTU0IDAgMS44NTYuMjIzIDIuNjU3LjYxOWwtMS41NCAxLjU0YTQuMDAyIDQuMDAyIDAgMDAtMi4zNDYuMDMzTDcuMjQ2IDQuNjY4ek0xMiAxMGEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVN3aXRjaEhvcml6b250YWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOCA1YTEgMSAwIDEwMCAyaDUuNTg2bC0xLjI5MyAxLjI5M2ExIDEgMCAwMDEuNDE0IDEuNDE0bDMtM2ExIDEgMCAwMDAtMS40MTRsLTMtM2ExIDEgMCAxMC0xLjQxNCAxLjQxNEwxMy41ODYgNUg4ek0xMiAxNWExIDEgMCAxMDAtMkg2LjQxNGwxLjI5My0xLjI5M2ExIDEgMCAxMC0xLjQxNC0xLjQxNGwtMyAzYTEgMSAwIDAwMCAxLjQxNGwzIDNhMSAxIDAgMDAxLjQxNC0xLjQxNEw2LjQxNCAxNUgxMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTd2l0Y2hWZXJ0aWNhbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk01IDEyYTEgMSAwIDEwMiAwVjYuNDE0bDEuMjkzIDEuMjkzYTEgMSAwIDAwMS40MTQtMS40MTRsLTMtM2ExIDEgMCAwMC0xLjQxNCAwbC0zIDNhMSAxIDAgMDAxLjQxNCAxLjQxNEw1IDYuNDE0VjEyek0xNSA4YTEgMSAwIDEwLTIgMHY1LjU4NmwtMS4yOTMtMS4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMyAzYTEgMSAwIDAwMS40MTQgMGwzLTNhMSAxIDAgMDAtMS40MTQtMS40MTRMMTUgMTMuNTg2Vjh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVGFibGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUgNGEzIDMgMCAwMC0zIDN2NmEzIDMgMCAwMDMgM2gxMGEzIDMgMCAwMDMtM1Y3YTMgMyAwIDAwLTMtM0g1em0tMSA5di0xaDV2Mkg1YTEgMSAwIDAxLTEtMXptNyAxaDRhMSAxIDAgMDAxLTF2LTFoLTV2MnptMC00aDVWOGgtNXYyek05IDhINHYyaDVWOHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVGFnIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNy43MDcgOS4yOTNhMSAxIDAgMDEwIDEuNDE0bC03IDdhMSAxIDAgMDEtMS40MTQgMGwtNy03QS45OTcuOTk3IDAgMDEyIDEwVjVhMyAzIDAgMDEzLTNoNWMuMjU2IDAgLjUxMi4wOTguNzA3LjI5M2w3IDd6TTUgNmExIDEgMCAxMDAtMiAxIDEgMCAwMDAgMnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVGVtcGxhdGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMyA0YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDAxMSAxdjJhMSAxIDAgMDEtMSAxSDRhMSAxIDAgMDEtMS0xVjR6TTMgMTBhMSAxIDAgMDExLTFoNmExIDEgMCAwMTEgMXY2YTEgMSAwIDAxLTEgMUg0YTEgMSAwIDAxLTEtMXYtNnpNMTQgOWExIDEgMCAwMC0xIDF2NmExIDEgMCAwMDEgMWgyYTEgMSAwIDAwMS0xdi02YTEgMSAwIDAwLTEtMWgtMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlUZXJtaW5hbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMiA1YTIgMiAwIDAxMi0yaDEyYTIgMiAwIDAxMiAydjEwYTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMlY1em0zLjI5MyAxLjI5M2ExIDEgMCAwMTEuNDE0IDBsMyAzYTEgMSAwIDAxMCAxLjQxNGwtMyAzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDcuNTg2IDEwIDUuMjkzIDcuNzA3YTEgMSAwIDAxMC0xLjQxNHpNMTEgMTJhMSAxIDAgMTAwIDJoM2ExIDEgMCAxMDAtMmgtM3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVGh1bWJEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTE4IDkuNWExLjUgMS41IDAgMTEtMyAwdi02YTEuNSAxLjUgMCAwMTMgMHY2ek0xNCA5LjY2N3YtNS40M2EyIDIgMCAwMC0xLjEwNS0xLjc5bC0uMDUtLjAyNUE0IDQgMCAwMDExLjA1NSAySDUuNjRhMiAyIDAgMDAtMS45NjIgMS42MDhsLTEuMiA2QTIgMiAwIDAwNC40NCAxMkg4djRhMiAyIDAgMDAyIDIgMSAxIDAgMDAxLTF2LS42NjdhNCA0IDAgMDEuOC0yLjRsMS40LTEuODY2YTQgNCAwIDAwLjgtMi40elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVRodW1iVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiAxMC41YTEuNSAxLjUgMCAxMTMgMHY2YTEuNSAxLjUgMCAwMS0zIDB2LTZ6TTYgMTAuMzMzdjUuNDNhMiAyIDAgMDAxLjEwNiAxLjc5bC4wNS4wMjVBNCA0IDAgMDA4Ljk0MyAxOGg1LjQxNmEyIDIgMCAwMDEuOTYyLTEuNjA4bDEuMi02QTIgMiAwIDAwMTUuNTYgOEgxMlY0YTIgMiAwIDAwLTItMiAxIDEgMCAwMC0xIDF2LjY2N2E0IDQgMCAwMS0uOCAyLjRMNi44IDcuOTMzYTQgNCAwIDAwLS44IDIuNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlUaWNrZXQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiA2YTIgMiAwIDAxMi0yaDEyYTIgMiAwIDAxMiAydjJhMiAyIDAgMTAwIDR2MmEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJ2LTJhMiAyIDAgMTAwLTRWNnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlUcmFuc2xhdGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcgMmExIDEgMCAwMTEgMXYxaDNhMSAxIDAgMTEwIDJIOS41NzhhMTguODcgMTguODcgMCAwMS0xLjcyNCA0Ljc4Yy4yOS4zNTQuNTk2LjY5Ni45MTQgMS4wMjZhMSAxIDAgMTEtMS40NCAxLjM4OWMtLjE4OC0uMTk2LS4zNzMtLjM5Ni0uNTU0LS42YTE5LjA5OCAxOS4wOTggMCAwMS0zLjEwNyAzLjU2NyAxIDEgMCAwMS0xLjMzNC0xLjQ5IDE3LjA4NyAxNy4wODcgMCAwMDMuMTMtMy43MzMgMTguOTkyIDE4Ljk5MiAwIDAxLTEuNDg3LTIuNDk0IDEgMSAwIDExMS43OS0uODljLjIzNC40Ny40ODkuOTI4Ljc2NCAxLjM3Mi40MTctLjkzNC43NTItMS45MTMuOTk3LTIuOTI3SDNhMSAxIDAgMTEwLTJoM1YzYTEgMSAwIDAxMS0xem02IDZhMSAxIDAgMDEuODk0LjU1M2wyLjk5MSA1Ljk4MmEuODY5Ljg2OSAwIDAxLjAyLjAzN2wuOTkgMS45OGExIDEgMCAxMS0xLjc5Ljg5NUwxNS4zODMgMTZoLTQuNzY0bC0uNzI0IDEuNDQ3YTEgMSAwIDExLTEuNzg4LS44OTRsLjk5LTEuOTguMDE5LS4wMzggMi45OS01Ljk4MkExIDEgMCAwMTEzIDh6bS0xLjM4MiA2aDIuNzY0TDEzIDExLjIzNiAxMS42MTggMTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVRyYXNoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk05IDJhMSAxIDAgMDAtLjg5NC41NTNMNy4zODIgNEg0YTEgMSAwIDAwMCAydjEwYTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJWNmExIDEgMCAxMDAtMmgtMy4zODJsLS43MjQtMS40NDdBMSAxIDAgMDAxMSAySDl6TTcgOGExIDEgMCAwMTIgMHY2YTEgMSAwIDExLTIgMFY4em01LTFhMSAxIDAgMDAtMSAxdjZhMSAxIDAgMTAyIDBWOGExIDEgMCAwMC0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVRyZW5kaW5nRG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTIgMTNhMSAxIDAgMTAwIDJoNWExIDEgMCAwMDEtMVY5YTEgMSAwIDEwLTIgMHYyLjU4NmwtNC4yOTMtNC4yOTNhMSAxIDAgMDAtMS40MTQgMEw4IDkuNTg2IDMuNzA3IDUuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDUgNWExIDEgMCAwMDEuNDE0IDBMMTEgOS40MTQgMTQuNTg2IDEzSDEyelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlUcmVuZGluZ1VwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMiA3YTEgMSAwIDExMC0yaDVhMSAxIDAgMDExIDF2NWExIDEgMCAxMS0yIDBWOC40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0IDBMOCAxMC40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0bDUtNWExIDEgMCAwMTEuNDE0IDBMMTEgMTAuNTg2IDE0LjU4NiA3SDEyelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlUcnVjayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk04IDE2LjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6TTE1IDE2LjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMyA0YTEgMSAwIDAwLTEgMXYxMGExIDEgMCAwMDEgMWgxLjA1YTIuNSAyLjUgMCAwMTQuOSAwSDEwYTEgMSAwIDAwMS0xVjVhMSAxIDAgMDAtMS0xSDN6TTE0IDdhMSAxIDAgMDAtMSAxdjYuMDVBMi41IDIuNSAwIDAxMTUuOTUgMTZIMTdhMSAxIDAgMDAxLTF2LTVhMSAxIDAgMDAtLjI5My0uNzA3bC0yLTJBMSAxIDAgMDAxNSA3aC0xelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVVwbG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyAxN2ExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNNi4yOTMgNi43MDdhMSAxIDAgMDEwLTEuNDE0bDMtM2ExIDEgMCAwMTEuNDE0IDBsMyAzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDExIDUuNDE0VjEzYTEgMSAwIDExLTIgMFY1LjQxNEw3LjcwNyA2LjcwN2ExIDEgMCAwMS0xLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlVc2VyQWRkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTggOWEzIDMgMCAxMDAtNiAzIDMgMCAwMDAgNnpNOCAxMWE2IDYgMCAwMTYgNkgyYTYgNiAwIDAxNi02ek0xNiA3YTEgMSAwIDEwLTIgMHYxaC0xYTEgMSAwIDEwMCAyaDF2MWExIDEgMCAxMDIgMHYtMWgxYTEgMSAwIDEwMC0yaC0xVjd6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVXNlckNpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS02LTNhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwem0tMiA0YTUgNSAwIDAwLTQuNTQ2IDIuOTE2QTUuOTg2IDUuOTg2IDAgMDAxMCAxNmE1Ljk4NiA1Ljk4NiAwIDAwNC41NDYtMi4wODRBNSA1IDAgMDAxMCAxMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVXNlckdyb3VwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEzIDZhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwek0xOCA4YTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpNMTQgMTVhNCA0IDAgMDAtOCAwdjNoOHYtM3pNNiA4YTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpNMTYgMTh2LTNhNS45NzIgNS45NzIgMCAwMC0uNzUtMi45MDZBMy4wMDUgMy4wMDUgMCAwMTE5IDE1djNoLTN6TTQuNzUgMTIuMDk0QTUuOTczIDUuOTczIDAgMDA0IDE1djNIMXYtM2EzIDMgMCAwMTMuNzUtMi45MDZ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVXNlclJlbW92ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMSA2YTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpNMTQgMTdhNiA2IDAgMDAtMTIgMGgxMnpNMTMgOGExIDEgMCAxMDAgMmg0YTEgMSAwIDEwMC0yaC00elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVVzZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDlhMyAzIDAgMTAwLTYgMyAzIDAgMDAwIDZ6bS03IDlhNyA3IDAgMTExNCAwSDN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVVzZXJzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTkgNmEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6TTE3IDZhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwek0xMi45MyAxN2MuMDQ2LS4zMjcuMDctLjY2LjA3LTFhNi45NyA2Ljk3IDAgMDAtMS41LTQuMzNBNSA1IDAgMDExOSAxNnYxaC02LjA3ek02IDExYTUgNSAwIDAxNSA1djFIMXYtMWE1IDUgMCAwMTUtNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlWYXJpYWJsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNC42NDkgMy4wODRBMSAxIDAgMDE1LjE2MyA0LjQgMTMuOTUgMTMuOTUgMCAwMDQgMTBjMCAxLjk5My40MTYgMy44ODYgMS4xNjQgNS42YTEgMSAwIDAxLTEuODMyLjhBMTUuOTUgMTUuOTUgMCAwMTIgMTBjMC0yLjI3NC40NzUtNC40NCAxLjMzMi02LjRhMSAxIDAgMDExLjMxNy0uNTE2ek0xMi45NiA3YTMgMyAwIDAwLTIuMzQyIDEuMTI2bC0uMzI4LjQxLS4xMTEtLjI3OUEyIDIgMCAwMDguMzIzIDdIOGExIDEgMCAwMDAgMmguMzIzbC41MzIgMS4zMy0xLjAzNSAxLjI5NWExIDEgMCAwMS0uNzgxLjM3NUg3YTEgMSAwIDEwMCAyaC4wMzlhMyAzIDAgMDAyLjM0Mi0xLjEyNmwuMzI4LS40MS4xMTEuMjc5QTIgMiAwIDAwMTEuNjc3IDE0SDEyYTEgMSAwIDEwMC0yaC0uMzIzbC0uNTMyLTEuMzMgMS4wMzUtMS4yOTVBMSAxIDAgMDExMi45NjEgOUgxM2ExIDEgMCAxMDAtMmgtLjAzOXptMS44NzQtMi42YTEgMSAwIDAxMS44MzMtLjhBMTUuOTUgMTUuOTUgMCAwMTE4IDEwYzAgMi4yNzQtLjQ3NSA0LjQ0LTEuMzMyIDYuNGExIDEgMCAxMS0xLjgzMi0uOEExMy45NDkgMTMuOTQ5IDAgMDAxNiAxMGMwLTEuOTkzLS40MTYtMy44ODYtMS4xNjUtNS42elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlWaWRlb0NhbWVyYSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDZhMiAyIDAgMDEyLTJoNmEyIDIgMCAwMTIgMnY4YTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMlY2ek0xNC41NTMgNy4xMDZBMSAxIDAgMDAxNCA4djRhMSAxIDAgMDAuNTUzLjg5NGwyIDFBMSAxIDAgMDAxOCAxM1Y3YTEgMSAwIDAwLTEuNDQ3LS44OTRsLTIgMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlWaWV3Qm9hcmRzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgNGExIDEgMCAwMTEtMWgyYTEgMSAwIDAxMSAxdjEyYTEgMSAwIDAxLTEgMUgzYTEgMSAwIDAxLTEtMVY0ek04IDRhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXYxMmExIDEgMCAwMS0xIDFIOWExIDEgMCAwMS0xLTFWNHpNMTUgM2ExIDEgMCAwMC0xIDF2MTJhMSAxIDAgMDAxIDFoMmExIDEgMCAwMDEtMVY0YTEgMSAwIDAwLTEtMWgtMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlWaWV3R3JpZEFkZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk01IDNhMiAyIDAgMDAtMiAydjJhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg1ek01IDExYTIgMiAwIDAwLTIgMnYyYTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJ2LTJhMiAyIDAgMDAtMi0ySDV6TTExIDVhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMmgtMmEyIDIgMCAwMS0yLTJWNXpNMTQgMTFhMSAxIDAgMDExIDF2MWgxYTEgMSAwIDExMCAyaC0xdjFhMSAxIDAgMTEtMiAwdi0xaC0xYTEgMSAwIDExMC0yaDF2LTFhMSAxIDAgMDExLTF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVmlld0dyaWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNSAzYTIgMiAwIDAwLTIgMnYyYTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJINXpNNSAxMWEyIDIgMCAwMC0yIDJ2MmEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0ydi0yYTIgMiAwIDAwLTItMkg1ek0xMSA1YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJoLTJhMiAyIDAgMDEtMi0yVjV6TTExIDEzYTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJoLTJhMiAyIDAgMDEtMi0ydi0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVZpZXdMaXN0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDRhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6bTAgNGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXptMCA0YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xem0wIDRhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVZvbHVtZU9mZiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOS4zODMgMy4wNzZBMSAxIDAgMDExMCA0djEyYTEgMSAwIDAxLTEuNzA3LjcwN0w0LjU4NiAxM0gyYTEgMSAwIDAxLTEtMVY4YTEgMSAwIDAxMS0xaDIuNTg2bDMuNzA3LTMuNzA3YTEgMSAwIDAxMS4wOS0uMjE3ek0xMi4yOTMgNy4yOTNhMSAxIDAgMDExLjQxNCAwTDE1IDguNTg2bDEuMjkzLTEuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMMTYuNDE0IDEwbDEuMjkzIDEuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDE1IDExLjQxNGwtMS4yOTMgMS4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMMTMuNTg2IDEwbC0xLjI5My0xLjI5M2ExIDEgMCAwMTAtMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVZvbHVtZVVwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk05LjM4MyAzLjA3NkExIDEgMCAwMTEwIDR2MTJhMSAxIDAgMDEtMS43MDcuNzA3TDQuNTg2IDEzSDJhMSAxIDAgMDEtMS0xVjhhMSAxIDAgMDExLTFoMi41ODZsMy43MDctMy43MDdhMSAxIDAgMDExLjA5LS4yMTd6TTE0LjY1NyAyLjkyOWExIDEgMCAwMTEuNDE0IDBBOS45NzIgOS45NzIgMCAwMTE5IDEwYTkuOTcyIDkuOTcyIDAgMDEtMi45MjkgNy4wNzEgMSAxIDAgMDEtMS40MTQtMS40MTRBNy45NzEgNy45NzEgMCAwMDE3IDEwYzAtMi4yMS0uODk0LTQuMjA4LTIuMzQzLTUuNjU3YTEgMSAwIDAxMC0xLjQxNHptLTIuODI5IDIuODI4YTEgMSAwIDAxMS40MTUgMEE1Ljk4MyA1Ljk4MyAwIDAxMTUgMTBhNS45ODQgNS45ODQgMCAwMS0xLjc1NyA0LjI0MyAxIDEgMCAwMS0xLjQxNS0xLjQxNUEzLjk4NCAzLjk4NCAwIDAwMTMgMTBhMy45ODMgMy45ODMgMCAwMC0xLjE3Mi0yLjgyOCAxIDEgMCAwMTAtMS40MTV6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVdpZmkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE3Ljc3OCA4LjIyMmMtNC4yOTYtNC4yOTYtMTEuMjYtNC4yOTYtMTUuNTU2IDBBMSAxIDAgMDEuODA4IDYuODA4YzUuMDc2LTUuMDc3IDEzLjMwOC01LjA3NyAxOC4zODQgMGExIDEgMCAwMS0xLjQxNCAxLjQxNHpNMTQuOTUgMTEuMDVhNyA3IDAgMDAtOS45IDAgMSAxIDAgMDEtMS40MTQtMS40MTQgOSA5IDAgMDExMi43MjggMCAxIDEgMCAwMS0xLjQxNCAxLjQxNHpNMTIuMTIgMTMuODhhMyAzIDAgMDAtNC4yNDIgMCAxIDEgMCAwMS0xLjQxNS0xLjQxNSA1IDUgMCAwMTcuMDcyIDAgMSAxIDAgMDEtMS40MTUgMS40MTV6TTkgMTZhMSAxIDAgMDExLTFoLjAxYTEgMSAwIDExMCAySDEwYTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpWENpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNOC43MDcgNy4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRMOC41ODYgMTBsLTEuMjkzIDEuMjkzYTEgMSAwIDEwMS40MTQgMS40MTRMMTAgMTEuNDE0bDEuMjkzIDEuMjkzYTEgMSAwIDAwMS40MTQtMS40MTRMMTEuNDE0IDEwbDEuMjkzLTEuMjkzYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDEwIDguNTg2IDguNzA3IDcuMjkzelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlYIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVpvb21JbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk01IDhhMSAxIDAgMDExLTFoMVY2YTEgMSAwIDAxMiAwdjFoMWExIDEgMCAxMTAgMkg5djFhMSAxIDAgMTEtMiAwVjlINmExIDEgMCAwMS0xLTF6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTIgOGE2IDYgMCAxMTEwLjg5IDMuNDc2bDQuODE3IDQuODE3YTEgMSAwIDAxLTEuNDE0IDEuNDE0bC00LjgxNi00LjgxNkE2IDYgMCAwMTIgOHptNi00YTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlab29tT3V0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk04IDRhNCA0IDAgMTAwIDggNCA0IDAgMDAwLTh6TTIgOGE2IDYgMCAxMTEwLjg5IDMuNDc2bDQuODE3IDQuODE3YTEgMSAwIDAxLTEuNDE0IDEuNDE0bC00LjgxNi00LjgxNkE2IDYgMCAwMTIgOHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUgOGExIDEgMCAwMTEtMWg0YTEgMSAwIDExMCAySDZhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQWNhZGVtaWNDYXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMiAxNGw5LTUtOS01LTkgNSA5IDV6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTIgMTRsNi4xNi0zLjQyMmExMi4wODMgMTIuMDgzIDAgMDEuNjY1IDYuNDc5QTExLjk1MiAxMS45NTIgMCAwMDEyIDIwLjA1NWExMS45NTIgMTEuOTUyIDAgMDAtNi44MjQtMi45OTggMTIuMDc4IDEyLjA3OCAwIDAxLjY2NS02LjQ3OUwxMiAxNHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgMTRsOS01LTktNS05IDUgOSA1em0wIDBsNi4xNi0zLjQyMmExMi4wODMgMTIuMDgzIDAgMDEuNjY1IDYuNDc5QTExLjk1MiAxMS45NTIgMCAwMDEyIDIwLjA1NWExMS45NTIgMTEuOTUyIDAgMDAtNi44MjQtMi45OTggMTIuMDc4IDEyLjA3OCAwIDAxLjY2NS02LjQ3OUwxMiAxNHptLTQgNnYtNy41bDQtMi4yMjJcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQWRqdXN0bWVudHMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgNlY0bTAgMmEyIDIgMCAxMDAgNG0wLTRhMiAyIDAgMTEwIDRtLTYgOGEyIDIgMCAxMDAtNG0wIDRhMiAyIDAgMTEwLTRtMCA0djJtMC02VjRtNiA2djEwbTYtMmEyIDIgMCAxMDAtNG0wIDRhMiAyIDAgMTEwLTRtMCA0djJtMC02VjRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQW5ub3RhdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk03IDhoMTBNNyAxMmg0bTEgOGwtNC00SDVhMiAyIDAgMDEtMi0yVjZhMiAyIDAgMDEyLTJoMTRhMiAyIDAgMDEyIDJ2OGEyIDIgMCAwMS0yIDJoLTNsLTQgNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJjaGl2ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01IDhoMTRNNSA4YTIgMiAwIDExMC00aDE0YTIgMiAwIDExMCA0TTUgOHYxMGEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMlY4bS05IDRoNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd0NpcmNsZURvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgMTNsLTMgM20wIDBsLTMtM20zIDNWOG0wIDEzYTkgOSAwIDExMC0xOCA5IDkgMCAwMTAgMTh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93Q2lyY2xlTGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMSAxNWwtMy0zbTAgMGwzLTNtLTMgM2g4TTMgMTJhOSA5IDAgMTExOCAwIDkgOSAwIDAxLTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93Q2lyY2xlUmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTMgOWwzIDNtMCAwbC0zIDNtMy0zSDhtMTMgMGE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dDaXJjbGVVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDExbDMtM20wIDBsMyAzbS0zLTN2OG0wLTEzYTkgOSAwIDExMCAxOCA5IDkgMCAwMTAtMTh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93RG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xOSAxNGwtNyA3bTAgMGwtNy03bTcgN1YzXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93TGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMCAxOWwtNy03bTAgMGw3LTdtLTcgN2gxOFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd05hcnJvd0Rvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTYgMTdsLTQgNG0wIDBsLTQtNG00IDRWM1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd05hcnJvd0xlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAxNmwtNC00bTAgMGw0LTRtLTQgNGgxOFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd05hcnJvd1JpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE3IDhsNCA0bTAgMGwtNCA0bTQtNEgzXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93TmFycm93VXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOCA3bDQtNG0wIDBsNCA0bS00LTR2MThcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dSaWdodCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNCA1bDcgN20wIDBsLTcgN203LTdIM1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd1NtRG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNyAxM2wtNSA1bTAgMGwtNS01bTUgNVY2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93U21MZWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDE3bC01LTVtMCAwbDUtNW0tNSA1aDEyXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93U21SaWdodCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMyA3bDUgNW0wIDBsLTUgNW01LTVINlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd1NtVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAxMWw1LTVtMCAwbDUgNW0tNS01djEyXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93VXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNSAxMGw3LTdtMCAwbDcgN20tNy03djE4XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93c0V4cGFuZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDhWNG0wIDBoNE00IDRsNSA1bTExLTFWNG0wIDBoLTRtNCAwbC01IDVNNCAxNnY0bTAgMGg0bS00IDBsNS01bTExIDVsLTUtNW01IDV2LTRtMCA0aC00XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUF0U3ltYm9sIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE2IDEyYTQgNCAwIDEwLTggMCA0IDQgMCAwMDggMHptMCAwdjEuNWEyLjUgMi41IDAgMDA1IDBWMTJhOSA5IDAgMTAtOSA5bTQuNS0xLjIwNmE4Ljk1OSA4Ljk1OSAwIDAxLTQuNSAxLjIwN1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVCYWNrc3BhY2UgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgMTRsMi0ybTAgMGwyLTJtLTIgMmwtMi0ybTIgMmwyIDJNMyAxMmw2LjQxNCA2LjQxNGEyIDIgMCAwMDEuNDE0LjU4NkgxOWEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMmgtOC4xNzJhMiAyIDAgMDAtMS40MTQuNTg2TDMgMTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUJhZGdlQ2hlY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxMmwyIDIgNC00TTcuODM1IDQuNjk3YTMuNDIgMy40MiAwIDAwMS45NDYtLjgwNiAzLjQyIDMuNDIgMCAwMTQuNDM4IDAgMy40MiAzLjQyIDAgMDAxLjk0Ni44MDYgMy40MiAzLjQyIDAgMDEzLjEzOCAzLjEzOCAzLjQyIDMuNDIgMCAwMC44MDYgMS45NDYgMy40MiAzLjQyIDAgMDEwIDQuNDM4IDMuNDIgMy40MiAwIDAwLS44MDYgMS45NDYgMy40MiAzLjQyIDAgMDEtMy4xMzggMy4xMzggMy40MiAzLjQyIDAgMDAtMS45NDYuODA2IDMuNDIgMy40MiAwIDAxLTQuNDM4IDAgMy40MiAzLjQyIDAgMDAtMS45NDYtLjgwNiAzLjQyIDMuNDIgMCAwMS0zLjEzOC0zLjEzOCAzLjQyIDMuNDIgMCAwMC0uODA2LTEuOTQ2IDMuNDIgMy40MiAwIDAxMC00LjQzOCAzLjQyIDMuNDIgMCAwMC44MDYtMS45NDYgMy40MiAzLjQyIDAgMDEzLjEzOC0zLjEzOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQmFuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE4LjM2NCAxOC4zNjRBOSA5IDAgMDA1LjYzNiA1LjYzNm0xMi43MjggMTIuNzI4QTkgOSAwIDAxNS42MzYgNS42MzZtMTIuNzI4IDEyLjcyOEw1LjYzNiA1LjYzNlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVCZWFrZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTkuNDI4IDE1LjQyOGEyIDIgMCAwMC0xLjAyMi0uNTQ3bC0yLjM4Ny0uNDc3YTYgNiAwIDAwLTMuODYuNTE3bC0uMzE4LjE1OGE2IDYgMCAwMS0zLjg2LjUxN0w2LjA1IDE1LjIxYTIgMiAwIDAwLTEuODA2LjU0N004IDRoOGwtMSAxdjUuMTcyYTIgMiAwIDAwLjU4NiAxLjQxNGw1IDVjMS4yNiAxLjI2LjM2NyAzLjQxNC0xLjQxNSAzLjQxNEg0LjgyOGMtMS43ODIgMC0yLjY3NC0yLjE1NC0xLjQxNC0zLjQxNGw1LTVBMiAyIDAgMDA5IDEwLjE3MlY1TDggNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQmVsbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNSAxN2g1bC0xLjQwNS0xLjQwNUEyLjAzMiAyLjAzMiAwIDAxMTggMTQuMTU4VjExYTYuMDAyIDYuMDAyIDAgMDAtNC01LjY1OVY1YTIgMiAwIDEwLTQgMHYuMzQxQzcuNjcgNi4xNjUgNiA4LjM4OCA2IDExdjMuMTU5YzAgLjUzOC0uMjE0IDEuMDU1LS41OTUgMS40MzZMNCAxN2g1bTYgMHYxYTMgMyAwIDExLTYgMHYtMW02IDBIOVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVCb29rT3BlbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA2LjI1M3YxM20wLTEzQzEwLjgzMiA1LjQ3NyA5LjI0NiA1IDcuNSA1UzQuMTY4IDUuNDc3IDMgNi4yNTN2MTNDNC4xNjggMTguNDc3IDUuNzU0IDE4IDcuNSAxOHMzLjMzMi40NzcgNC41IDEuMjUzbTAtMTNDMTMuMTY4IDUuNDc3IDE0Ljc1NCA1IDE2LjUgNWMxLjc0NyAwIDMuMzMyLjQ3NyA0LjUgMS4yNTN2MTNDMTkuODMyIDE4LjQ3NyAxOC4yNDcgMTggMTYuNSAxOGMtMS43NDYgMC0zLjMzMi40NzctNC41IDEuMjUzXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUJvb2ttYXJrQWx0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE2IDR2MTJsLTQtMi00IDJWNE02IDIwaDEyYTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVCb29rbWFyayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01IDVhMiAyIDAgMDEyLTJoMTBhMiAyIDAgMDEyIDJ2MTZsLTctMy41TDUgMjFWNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQnJpZWZjYXNlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIxIDEzLjI1NUEyMy45MzEgMjMuOTMxIDAgMDExMiAxNWMtMy4xODMgMC02LjIyLS42Mi05LTEuNzQ1TTE2IDZWNGEyIDIgMCAwMC0yLTJoLTRhMiAyIDAgMDAtMiAydjJtNCA2aC4wMU01IDIwaDE0YTIgMiAwIDAwMi0yVjhhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDYWtlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIxIDE1LjU0NmMtLjUyMyAwLTEuMDQ2LjE1MS0xLjUuNDU0YTIuNzA0IDIuNzA0IDAgMDEtMyAwIDIuNzA0IDIuNzA0IDAgMDAtMyAwIDIuNzA0IDIuNzA0IDAgMDEtMyAwIDIuNzA0IDIuNzA0IDAgMDAtMyAwIDIuNzA0IDIuNzA0IDAgMDEtMyAwIDIuNzAxIDIuNzAxIDAgMDAtMS41LS40NTRNOSA2djJtMy0ydjJtMy0ydjJNOSAzaC4wMU0xMiAzaC4wMU0xNSAzaC4wMU0yMSAyMXYtN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2N2gxOHptLTMtOXYtMmEyIDIgMCAwMC0yLTJIOGEyIDIgMCAwMC0yIDJ2MmgxMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2FsY3VsYXRvciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDdoNm0wIDEwdi0zbS0zIDNoLjAxTTkgMTdoLjAxTTkgMTRoLjAxTTEyIDE0aC4wMU0xNSAxMWguMDFNMTIgMTFoLjAxTTkgMTFoLjAxTTcgMjFoMTBhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJIN2EyIDIgMCAwMC0yIDJ2MTRhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNhbGVuZGFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggN1YzbTggNFYzbS05IDhoMTBNNSAyMWgxNGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2FtZXJhIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgOWEyIDIgMCAwMTItMmguOTNhMiAyIDAgMDAxLjY2NC0uODlsLjgxMi0xLjIyQTIgMiAwIDAxMTAuMDcgNGgzLjg2YTIgMiAwIDAxMS42NjQuODlsLjgxMiAxLjIyQTIgMiAwIDAwMTguMDcgN0gxOWEyIDIgMCAwMTIgMnY5YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMlY5elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNSAxM2EzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNhc2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcgOVY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyaDJtMiA0aDEwYTIgMiAwIDAwMi0ydi02YTIgMiAwIDAwLTItMkg5YTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyem03LTVhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGFydEJhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDE5di02YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJ6bTAgMFY5YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MTBtLTYgMGEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0ybTAgMFY1YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MTRhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hhcnRQaWUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTEgMy4wNTVBOS4wMDEgOS4wMDEgMCAxMDIwLjk0NSAxM0gxMVYzLjA1NXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMjAuNDg4IDlIMTVWMy41MTJBOS4wMjUgOS4wMjUgMCAwMTIwLjQ4OCA5elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGFydFNxdWFyZUJhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNiA4djhtLTQtNXY1bS00LTJ2Mm0tMiA0aDEyYTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGF0QWx0MiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNyA4aDJhMiAyIDAgMDEyIDJ2NmEyIDIgMCAwMS0yIDJoLTJ2NGwtNC00SDlhMS45OTQgMS45OTQgMCAwMS0xLjQxNC0uNTg2bTAgMEwxMSAxNGg0YTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjZhMiAyIDAgMDAyIDJoMnY0bC41ODYtLjU4NnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hhdEFsdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDEwaC4wMU0xMiAxMGguMDFNMTYgMTBoLjAxTTkgMTZINWEyIDIgMCAwMS0yLTJWNmEyIDIgMCAwMTItMmgxNGEyIDIgMCAwMTIgMnY4YTIgMiAwIDAxLTIgMmgtNWwtNSA1di01elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGF0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTJoLjAxTTEyIDEyaC4wMU0xNiAxMmguMDFNMjEgMTJjMCA0LjQxOC00LjAzIDgtOSA4YTkuODYzIDkuODYzIDAgMDEtNC4yNTUtLjk0OUwzIDIwbDEuMzk1LTMuNzJDMy41MTIgMTUuMDQyIDMgMTMuNTc0IDMgMTJjMC00LjQxOCA0LjAzLTggOS04czkgMy41ODIgOSA4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGVja0NpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDEybDIgMiA0LTRtNiAyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGVjayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01IDEzbDQgNEwxOSA3XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoZXZyb25Eb3VibGVEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE5IDEzbC03IDctNy03bTE0LThsLTcgNy03LTdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hldnJvbkRvdWJsZUxlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTEgMTlsLTctNyA3LTdtOCAxNGwtNy03IDctN1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGV2cm9uRG91YmxlUmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTMgNWw3IDctNyA3TTUgNWw3IDctNyA3XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoZXZyb25Eb3VibGVVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01IDExbDctNyA3IDdNNSAxOWw3LTcgNyA3XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoZXZyb25Eb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE5IDlsLTcgNy03LTdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hldnJvbkxlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgMTlsLTctNyA3LTdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hldnJvblJpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgNWw3IDctNyA3XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoZXZyb25VcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01IDE1bDctNyA3IDdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hpcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDN2Mm02LTJ2Mk05IDE5djJtNi0ydjJNNSA5SDNtMiA2SDNtMTgtNmgtMm0yIDZoLTJNNyAxOWgxMGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg3YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMnpNOSA5aDZ2Nkg5Vjl6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNsaXBib2FyZENoZWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgNUg3YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMmgtMk05IDVhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMk05IDVhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMm0tNiA5bDIgMiA0LTRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2xpcGJvYXJkQ29weSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDVINmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJ2LTFNOCA1YTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJNOCA1YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJtMCAwaDJhMiAyIDAgMDEyIDJ2M20yIDRIMTBtMCAwbDMtM20tMyAzbDMgM1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDbGlwYm9hcmRMaXN0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgNUg3YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMmgtMk05IDVhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMk05IDVhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMm0tMyA3aDNtLTMgNGgzbS02LTRoLjAxTTkgMTZoLjAxXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNsaXBib2FyZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDVIN2EyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJoLTJNOSA1YTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJNOSA1YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2xvY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgOHY0bDMgM202LTNhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNsb3VkRG93bmxvYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAxNmE0IDQgMCAwMS0uODgtNy45MDNBNSA1IDAgMTExNS45IDZMMTYgNmE1IDUgMCAwMTEgOS45TTkgMTlsMyAzbTAgMGwzLTNtLTMgM1YxMFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDbG91ZFVwbG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk03IDE2YTQgNCAwIDAxLS44OC03LjkwM0E1IDUgMCAxMTE1LjkgNkwxNiA2YTUgNSAwIDAxMSA5LjlNMTUgMTNsLTMtM20wIDBsLTMgM20zLTN2MTJcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2xvdWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyAxNWE0IDQgMCAwMDQgNGg5YTUgNSAwIDEwLS4xLTkuOTk5IDUuMDAyIDUuMDAyIDAgMTAtOS43OCAyLjA5NkE0LjAwMSA0LjAwMSAwIDAwMyAxNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ29kZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMCAyMGw0LTE2bTQgNGw0IDQtNCA0TTYgMTZsLTQtNCA0LTRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ29nIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEwLjMyNSA0LjMxN2MuNDI2LTEuNzU2IDIuOTI0LTEuNzU2IDMuMzUgMGExLjcyNCAxLjcyNCAwIDAwMi41NzMgMS4wNjZjMS41NDMtLjk0IDMuMzEuODI2IDIuMzcgMi4zN2ExLjcyNCAxLjcyNCAwIDAwMS4wNjUgMi41NzJjMS43NTYuNDI2IDEuNzU2IDIuOTI0IDAgMy4zNWExLjcyNCAxLjcyNCAwIDAwLTEuMDY2IDIuNTczYy45NCAxLjU0My0uODI2IDMuMzEtMi4zNyAyLjM3YTEuNzI0IDEuNzI0IDAgMDAtMi41NzIgMS4wNjVjLS40MjYgMS43NTYtMi45MjQgMS43NTYtMy4zNSAwYTEuNzI0IDEuNzI0IDAgMDAtMi41NzMtMS4wNjZjLTEuNTQzLjk0LTMuMzEtLjgyNi0yLjM3LTIuMzdhMS43MjQgMS43MjQgMCAwMC0xLjA2NS0yLjU3MmMtMS43NTYtLjQyNi0xLjc1Ni0yLjkyNCAwLTMuMzVhMS43MjQgMS43MjQgMCAwMDEuMDY2LTIuNTczYy0uOTQtMS41NDMuODI2LTMuMzEgMi4zNy0yLjM3Ljk5Ni42MDggMi4yOTYuMDcgMi41NzItMS4wNjV6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDEyYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ29sbGVjdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xOSAxMUg1bTE0IDBhMiAyIDAgMDEyIDJ2NmEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ2LTZhMiAyIDAgMDEyLTJtMTQgMFY5YTIgMiAwIDAwLTItMk01IDExVjlhMiAyIDAgMDEyLTJtMCAwVjVhMiAyIDAgMDEyLTJoNmEyIDIgMCAwMTIgMnYyTTcgN2gxMFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDb2xvclN3YXRjaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk03IDIxYTQgNCAwIDAxLTQtNFY1YTIgMiAwIDAxMi0yaDRhMiAyIDAgMDEyIDJ2MTJhNCA0IDAgMDEtNCA0em0wIDBoMTJhMiAyIDAgMDAyLTJ2LTRhMiAyIDAgMDAtMi0yaC0yLjM0M00xMSA3LjM0M2wxLjY1Ny0xLjY1N2EyIDIgMCAwMTIuODI4IDBsMi44MjkgMi44MjlhMiAyIDAgMDEwIDIuODI4bC04LjQ4NiA4LjQ4NU03IDE3aC4wMVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDcmVkaXRDYXJkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgMTBoMThNNyAxNWgxbTQgMGgxbS03IDRoMTJhMyAzIDAgMDAzLTNWOGEzIDMgMCAwMC0zLTNINmEzIDMgMCAwMC0zIDN2OGEzIDMgMCAwMDMgM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ3ViZVRyYW5zcGFyZW50IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE0IDEwbC0yIDFtMCAwbC0yLTFtMiAxdjIuNU0yMCA3bC0yIDFtMi0xbC0yLTFtMiAxdjIuNU0xNCA0bC0yLTEtMiAxTTQgN2wyLTFNNCA3bDIgMU00IDd2Mi41TTEyIDIxbC0yLTFtMiAxbDItMW0tMiAxdi0yLjVNNiAxOGwtMi0xdi0yLjVNMTggMThsMi0xdi0yLjVcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ3ViZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMCA3bC04LTQtOCA0bTE2IDBsLTggNG04LTR2MTBsLTggNG0wLTEwTDQgN204IDR2MTBNNCA3djEwbDggNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDdXJyZW5jeUJhbmdsYWRlc2hpIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDExVjlhMiAyIDAgMDAtMi0ybTIgNHY0YTIgMiAwIDEwNCAwdi0xbS00LTNIOW0yIDBoNG02IDFhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUN1cnJlbmN5RG9sbGFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDhjLTEuNjU3IDAtMyAuODk1LTMgMnMxLjM0MyAyIDMgMiAzIC44OTUgMyAyLTEuMzQzIDItMyAybTAtOGMxLjExIDAgMi4wOC40MDIgMi41OTkgMU0xMiA4VjdtMCAxdjhtMCAwdjFtMC0xYy0xLjExIDAtMi4wOC0uNDAyLTIuNTk5LTFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUN1cnJlbmN5RXVybyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNC4xMjEgMTUuNTM2Yy0xLjE3MSAxLjk1Mi0zLjA3IDEuOTUyLTQuMjQyIDAtMS4xNzItMS45NTMtMS4xNzItNS4xMTkgMC03LjA3MiAxLjE3MS0xLjk1MiAzLjA3LTEuOTUyIDQuMjQyIDBNOCAxMC41aDRtLTQgM2g0bTktMS41YTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDdXJyZW5jeVBvdW5kIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDlhMiAyIDAgMTAtNCAwdjVhMiAyIDAgMDEtMiAyaDZtLTYtNGg0bTggMGE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ3VycmVuY3lSdXBlZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDhoNm0tNSAwYTMgMyAwIDExMCA2SDlsMyAzbS0zLTZoNm02IDFhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUN1cnJlbmN5WWVuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgOGwzIDVtMCAwbDMtNW0tMyA1djRtLTMtNWg2bS02IDNoNm02LTNhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUN1cnNvckNsaWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDE1bC0yIDVMOSA5bDExIDQtNSAyem0wIDBsNSA1TTcuMTg4IDIuMjM5bC43NzcgMi44OTdNNS4xMzYgNy45NjVsLTIuODk4LS43NzdNMTMuOTUgNC4wNWwtMi4xMjIgMi4xMjJtLTUuNjU3IDUuNjU2bC0yLjEyIDIuMTIyXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURhdGFiYXNlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgN3YxMGMwIDIuMjEgMy41ODIgNCA4IDRzOC0xLjc5IDgtNFY3TTQgN2MwIDIuMjEgMy41ODIgNCA4IDRzOC0xLjc5IDgtNE00IDdjMC0yLjIxIDMuNTgyLTQgOC00czggMS43OSA4IDRtMCA1YzAgMi4yMS0zLjU4MiA0LTggNHMtOC0xLjc5LTgtNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEZXNrdG9wQ29tcHV0ZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOS43NSAxN0w5IDIwbC0xIDFoOGwtMS0xLS43NS0zTTMgMTNoMThNNSAxN2gxNGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRGV2aWNlTW9iaWxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDE4aC4wMU04IDIxaDhhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJIOGEyIDIgMCAwMC0yIDJ2MTRhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURldmljZVRhYmxldCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiAxOGguMDFNNyAyMWgxMGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg3YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG9jdW1lbnRBZGQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxM2g2bS0zLTN2Nm01IDVIN2EyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMmg1LjU4NmExIDEgMCAwMS43MDcuMjkzbDUuNDE0IDUuNDE0YTEgMSAwIDAxLjI5My43MDdWMTlhMiAyIDAgMDEtMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEb2N1bWVudERvd25sb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDEwdjZtMCAwbC0zLTNtMyAzbDMtM20yIDhIN2EyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMmg1LjU4NmExIDEgMCAwMS43MDcuMjkzbDUuNDE0IDUuNDE0YTEgMSAwIDAxLjI5My43MDdWMTlhMiAyIDAgMDEtMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEb2N1bWVudER1cGxpY2F0ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDd2OGEyIDIgMCAwMDIgMmg2TTggN1Y1YTIgMiAwIDAxMi0yaDQuNTg2YTEgMSAwIDAxLjcwNy4yOTNsNC40MTQgNC40MTRhMSAxIDAgMDEuMjkzLjcwN1YxNWEyIDIgMCAwMS0yIDJoLTJNOCA3SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJ2LTJcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG9jdW1lbnRSZW1vdmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxM2g2bTIgOEg3YTIgMiAwIDAxLTItMlY1YTIgMiAwIDAxMi0yaDUuNTg2YTEgMSAwIDAxLjcwNy4yOTNsNS40MTQgNS40MTRhMSAxIDAgMDEuMjkzLjcwN1YxOWEyIDIgMCAwMS0yIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURvY3VtZW50UmVwb3J0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTd2LTJtMyAydi00bTMgNHYtNm0yIDEwSDdhMiAyIDAgMDEtMi0yVjVhMiAyIDAgMDEyLTJoNS41ODZhMSAxIDAgMDEuNzA3LjI5M2w1LjQxNCA1LjQxNGExIDEgMCAwMS4yOTMuNzA3VjE5YTIgMiAwIDAxLTIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG9jdW1lbnRTZWFyY2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTAgMjFoN2EyIDIgMCAwMDItMlY5LjQxNGExIDEgMCAwMC0uMjkzLS43MDdsLTUuNDE0LTUuNDE0QTEgMSAwIDAwMTIuNTg2IDNIN2EyIDIgMCAwMC0yIDJ2MTFtMCA1bDQuODc5LTQuODc5bTAgMGEzIDMgMCAxMDQuMjQzLTQuMjQyIDMgMyAwIDAwLTQuMjQzIDQuMjQyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEb2N1bWVudFRleHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxMmg2bS02IDRoNm0yIDVIN2EyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMmg1LjU4NmExIDEgMCAwMS43MDcuMjkzbDUuNDE0IDUuNDE0YTEgMSAwIDAxLjI5My43MDdWMTlhMiAyIDAgMDEtMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEb2N1bWVudCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk03IDIxaDEwYTIgMiAwIDAwMi0yVjkuNDE0YTEgMSAwIDAwLS4yOTMtLjcwN2wtNS40MTQtNS40MTRBMSAxIDAgMDAxMi41ODYgM0g3YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG90c0NpcmNsZUhvcml6b250YWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOCAxMmguMDFNMTIgMTJoLjAxTTE2IDEyaC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG90c0hvcml6b250YWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNSAxMmguMDFNMTIgMTJoLjAxTTE5IDEyaC4wMU02IDEyYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptNyAwYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptNyAwYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG90c1ZlcnRpY2FsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDV2LjAxTTEyIDEydi4wMU0xMiAxOXYuMDFNMTIgNmExIDEgMCAxMTAtMiAxIDEgMCAwMTAgMnptMCA3YTEgMSAwIDExMC0yIDEgMSAwIDAxMCAyem0wIDdhMSAxIDAgMTEwLTIgMSAxIDAgMDEwIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURvd25sb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgMTZ2MWEzIDMgMCAwMDMgM2gxMGEzIDMgMCAwMDMtM3YtMW0tNC00bC00IDRtMCAwbC00LTRtNCA0VjRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRHVwbGljYXRlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTZINmEyIDIgMCAwMS0yLTJWNmEyIDIgMCAwMTItMmg4YTIgMiAwIDAxMiAydjJtLTYgMTJoOGEyIDIgMCAwMDItMnYtOGEyIDIgMCAwMC0yLTJoLThhMiAyIDAgMDAtMiAydjhhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUVtb2ppSGFwcHkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTQuODI4IDE0LjgyOGE0IDQgMCAwMS01LjY1NiAwTTkgMTBoLjAxTTE1IDEwaC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRW1vamlTYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOS4xNzIgMTYuMTcyYTQgNCAwIDAxNS42NTYgME05IDEwaC4wMU0xNSAxMGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDh2NG0wIDRoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVFeGNsYW1hdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA5djJtMCA0aC4wMW0tNi45MzggNGgxMy44NTZjMS41NCAwIDIuNTAyLTEuNjY3IDEuNzMyLTNMMTMuNzMyIDRjLS43Ny0xLjMzMy0yLjY5NC0xLjMzMy0zLjQ2NCAwTDMuMzQgMTZjLS43NyAxLjMzMy4xOTIgMyAxLjczMiAzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVFeHRlcm5hbExpbmsgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTAgNkg2YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMnYtNE0xNCA0aDZtMCAwdjZtMC02TDEwIDE0XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUV5ZU9mZiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMy44NzUgMTguODI1QTEwLjA1IDEwLjA1IDAgMDExMiAxOWMtNC40NzggMC04LjI2OC0yLjk0My05LjU0My03YTkuOTcgOS45NyAwIDAxMS41NjMtMy4wMjltNS44NTguOTA4YTMgMyAwIDExNC4yNDMgNC4yNDNNOS44NzggOS44NzhsNC4yNDIgNC4yNDJNOS44OCA5Ljg4bC0zLjI5LTMuMjltNy41MzIgNy41MzJsMy4yOSAzLjI5TTMgM2wzLjU5IDMuNTltMCAwQTkuOTUzIDkuOTUzIDAgMDExMiA1YzQuNDc4IDAgOC4yNjggMi45NDMgOS41NDMgN2ExMC4wMjUgMTAuMDI1IDAgMDEtNC4xMzIgNS40MTFtMCAwTDIxIDIxXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUV5ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNSAxMmEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIuNDU4IDEyQzMuNzMyIDcuOTQzIDcuNTIzIDUgMTIgNWM0LjQ3OCAwIDguMjY4IDIuOTQzIDkuNTQyIDctMS4yNzQgNC4wNTctNS4wNjQgNy05LjU0MiA3LTQuNDc3IDAtOC4yNjgtMi45NDMtOS41NDItN3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRmFzdEZvcndhcmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTEuOTMzIDEyLjhhMSAxIDAgMDAwLTEuNkw2LjYgNy4yQTEgMSAwIDAwNSA4djhhMSAxIDAgMDAxLjYuOGw1LjMzMy00ek0xOS45MzMgMTIuOGExIDEgMCAwMDAtMS42bC01LjMzMy00QTEgMSAwIDAwMTMgOHY4YTEgMSAwIDAwMS42LjhsNS4zMzMtNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRmlsbSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk03IDR2MTZNMTcgNHYxNk0zIDhoNG0xMCAwaDRNMyAxMmgxOE0zIDE2aDRtMTAgMGg0TTQgMjBoMTZhMSAxIDAgMDAxLTFWNWExIDEgMCAwMC0xLTFINGExIDEgMCAwMC0xIDF2MTRhMSAxIDAgMDAxIDF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZpbHRlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0zIDRhMSAxIDAgMDExLTFoMTZhMSAxIDAgMDExIDF2Mi41ODZhMSAxIDAgMDEtLjI5My43MDdsLTYuNDE0IDYuNDE0YTEgMSAwIDAwLS4yOTMuNzA3VjE3bC00IDR2LTYuNTg2YTEgMSAwIDAwLS4yOTMtLjcwN0wzLjI5MyA3LjI5M0ExIDEgMCAwMTMgNi41ODZWNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRmluZ2VyUHJpbnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgMTFjMCAzLjUxNy0xLjAwOSA2Ljc5OS0yLjc1MyA5LjU3MW0tMy40NC0yLjA0bC4wNTQtLjA5QTEzLjkxNiAxMy45MTYgMCAwMDggMTFhNCA0IDAgMTE4IDBjMCAxLjAxNy0uMDcgMi4wMTktLjIwMyAzbS0yLjExOCA2Ljg0NEEyMS44OCAyMS44OCAwIDAwMTUuMTcxIDE3bTMuODM5IDEuMTMyYy42NDUtMi4yNjYuOTktNC42NTkuOTktNy4xMzJBOCA4IDAgMDA4IDQuMDdNMyAxNS4zNjRjLjY0LTEuMzE5IDEtMi44IDEtNC4zNjQgMC0xLjQ1Ny4zOS0yLjgyMyAxLjA3LTRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRmlyZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNy42NTcgMTguNjU3QTggOCAwIDAxNi4zNDMgNy4zNDNTNyA5IDkgMTBjMC0yIC41LTUgMi45ODYtN0MxNCA1IDE2LjA5IDUuNzc3IDE3LjY1NiA3LjM0M0E3Ljk3NSA3Ljk3NSAwIDAxMjAgMTNhNy45NzUgNy45NzUgMCAwMS0yLjM0MyA1LjY1N3pcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOS44NzkgMTYuMTIxQTMgMyAwIDEwMTIuMDE1IDExTDExIDE0SDljMCAuNzY4LjI5MyAxLjUzNi44NzkgMi4xMjF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZsYWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyAyMXYtNG0wIDBWNWEyIDIgMCAwMTItMmg2LjVsMSAxSDIxbC0zIDYgMyA2aC04LjVsLTEtMUg1YTIgMiAwIDAwLTIgMnptOS0xMy41VjlcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRm9sZGVyQWRkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTNoNm0tMy0zdjZtLTkgMVY3YTIgMiAwIDAxMi0yaDZsMiAyaDZhMiAyIDAgMDEyIDJ2OGEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZvbGRlckRvd25sb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDEwdjZtMCAwbC0zLTNtMyAzbDMtM00zIDE3VjdhMiAyIDAgMDEyLTJoNmwyIDJoNmEyIDIgMCAwMTIgMnY4YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRm9sZGVyT3BlbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01IDE5YTIgMiAwIDAxLTItMlY3YTIgMiAwIDAxMi0yaDRsMiAyaDRhMiAyIDAgMDEyIDJ2MU01IDE5aDE0YTIgMiAwIDAwMi0ydi01YTIgMiAwIDAwLTItMkg5YTIgMiAwIDAwLTIgMnY1YTIgMiAwIDAxLTIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRm9sZGVyUmVtb3ZlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTNoNk0zIDE3VjdhMiAyIDAgMDEyLTJoNmwyIDJoNmEyIDIgMCAwMTIgMnY4YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRm9sZGVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgN3YxMGEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY5YTIgMiAwIDAwLTItMmgtNmwtMi0ySDVhMiAyIDAgMDAtMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVHaWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDh2MTNtMC0xM1Y2YTIgMiAwIDExMiAyaC0yem0wIDBWNS41QTIuNSAyLjUgMCAxMDkuNSA4SDEyem0tNyA0aDE0TTUgMTJhMiAyIDAgMTEwLTRoMTRhMiAyIDAgMTEwIDRNNSAxMnY3YTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi03XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUdsb2JlQWx0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIxIDEyYTkgOSAwIDAxLTkgOW05LTlhOSA5IDAgMDAtOS05bTkgOUgzbTkgOWE5IDkgMCAwMS05LTltOSA5YzEuNjU3IDAgMy00LjAzIDMtOXMtMS4zNDMtOS0zLTltMCAxOGMtMS42NTcgMC0zLTQuMDMtMy05czEuMzQzLTkgMy05bS05IDlhOSA5IDAgMDE5LTlcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lR2xvYmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMy4wNTUgMTFINWEyIDIgMCAwMTIgMnYxYTIgMiAwIDAwMiAyIDIgMiAwIDAxMiAydjIuOTQ1TTggMy45MzVWNS41QTIuNSAyLjUgMCAwMDEwLjUgOGguNWEyIDIgMCAwMTIgMiAyIDIgMCAxMDQgMCAyIDIgMCAwMTItMmgxLjA2NE0xNSAyMC40ODhWMThhMiAyIDAgMDEyLTJoMy4wNjRNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUhhbmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAxMS41VjE0bTAtMi41di02YTEuNSAxLjUgMCAxMTMgMG0tMyA2YTEuNSAxLjUgMCAwMC0zIDB2MmE3LjUgNy41IDAgMDAxNSAwdi01YTEuNSAxLjUgMCAwMC0zIDBtLTYtM1YxMW0wLTUuNXYtMWExLjUgMS41IDAgMDEzIDB2MW0wIDBWMTFtMC01LjVhMS41IDEuNSAwIDAxMyAwdjNtMCAwVjExXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUhhc2h0YWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAyMGw0LTE2bTIgMTZsNC0xNk02IDloMTRNNCAxNWgxNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVIZWFydCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00LjMxOCA2LjMxOGE0LjUgNC41IDAgMDAwIDYuMzY0TDEyIDIwLjM2NGw3LjY4Mi03LjY4MmE0LjUgNC41IDAgMDAtNi4zNjQtNi4zNjRMMTIgNy42MzZsLTEuMzE4LTEuMzE4YTQuNSA0LjUgMCAwMC02LjM2NCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVIb21lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgMTJsMi0ybTAgMGw3LTcgNyA3TTUgMTB2MTBhMSAxIDAgMDAxIDFoM20xMC0xMWwyIDJtLTItMnYxMGExIDEgMCAwMS0xIDFoLTNtLTYgMGExIDEgMCAwMDEtMXYtNGExIDEgMCAwMTEtMWgyYTEgMSAwIDAxMSAxdjRhMSAxIDAgMDAxIDFtLTYgMGg2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUlkZW50aWZpY2F0aW9uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEwIDZINWEyIDIgMCAwMC0yIDJ2OWEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY4YTIgMiAwIDAwLTItMmgtNW0tNCAwVjVhMiAyIDAgMTE0IDB2MW0tNCAwYTIgMiAwIDEwNCAwbS01IDhhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6bTAgMGMxLjMwNiAwIDIuNDE3LjgzNSAyLjgzIDJNOSAxNGEzLjAwMSAzLjAwMSAwIDAwLTIuODMgMk0xNSAxMWgzbS0zIDRoMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVJbmJveEluIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggNEg2YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMmgtMm0tNC0xdjhtMCAwbDMtM20tMyAzTDkgOG0tNSA1aDIuNTg2YTEgMSAwIDAxLjcwNy4yOTNsMi40MTQgMi40MTRhMSAxIDAgMDAuNzA3LjI5M2gzLjE3MmExIDEgMCAwMC43MDctLjI5M2wyLjQxNC0yLjQxNGExIDEgMCAwMS43MDctLjI5M0gyMFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVJbmJveCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMCAxM1Y2YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnY3bTE2IDB2NWEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJ2LTVtMTYgMGgtMi41ODZhMSAxIDAgMDAtLjcwNy4yOTNsLTIuNDE0IDIuNDE0YTEgMSAwIDAxLS43MDcuMjkzaC0zLjE3MmExIDEgMCAwMS0uNzA3LS4yOTNsLTIuNDE0LTIuNDE0QTEgMSAwIDAwNi41ODYgMTNINFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVJbmZvcm1hdGlvbkNpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMyAxNmgtMXYtNGgtMW0xLTRoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVLZXkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgN2EyIDIgMCAwMTIgMm00IDBhNiA2IDAgMDEtNy43NDMgNS43NDNMMTEgMTdIOXYySDd2Mkg0YTEgMSAwIDAxLTEtMXYtMi41ODZhMSAxIDAgMDEuMjkzLS43MDdsNS45NjQtNS45NjRBNiA2IDAgMTEyMSA5elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMaWJyYXJ5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTR2M200LTN2M200LTN2M00zIDIxaDE4TTMgMTBoMThNMyA3bDktNCA5IDRNNCAxMGgxNnYxMUg0VjEwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMaWdodEJ1bGIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOS42NjMgMTdoNC42NzNNMTIgM3YxbTYuMzY0IDEuNjM2bC0uNzA3LjcwN00yMSAxMmgtMU00IDEySDNtMy4zNDMtNS42NTdsLS43MDctLjcwN20yLjgyOCA5LjlhNSA1IDAgMTE3LjA3MiAwbC0uNTQ4LjU0N0EzLjM3NCAzLjM3NCAwIDAwMTQgMTguNDY5VjE5YTIgMiAwIDExLTQgMHYtLjUzMWMwLS44OTUtLjM1Ni0xLjc1NC0uOTg4LTIuMzg2bC0uNTQ4LS41NDd6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUxpZ2h0bmluZ0JvbHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTMgMTBWM0w0IDE0aDd2N2w5LTExaC03elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMaW5rIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEzLjgyOCAxMC4xNzJhNCA0IDAgMDAtNS42NTYgMGwtNCA0YTQgNCAwIDEwNS42NTYgNS42NTZsMS4xMDItMS4xMDFtLS43NTgtNC44OTlhNCA0IDAgMDA1LjY1NiAwbDQtNGE0IDQgMCAwMC01LjY1Ni01LjY1NmwtMS4xIDEuMVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMb2NhdGlvbk1hcmtlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNy42NTcgMTYuNjU3TDEzLjQxNCAyMC45YTEuOTk4IDEuOTk4IDAgMDEtMi44MjcgMGwtNC4yNDQtNC4yNDNhOCA4IDAgMTExMS4zMTQgMHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgMTFhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMb2NrQ2xvc2VkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDE1djJtLTYgNGgxMmEyIDIgMCAwMDItMnYtNmEyIDIgMCAwMC0yLTJINmEyIDIgMCAwMC0yIDJ2NmEyIDIgMCAwMDIgMnptMTAtMTBWN2E0IDQgMCAwMC04IDB2NGg4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMb2NrT3BlbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDExVjdhNCA0IDAgMTE4IDBtLTQgOHYybS02IDRoMTJhMiAyIDAgMDAyLTJ2LTZhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjZhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUxvZ2luIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDE2bC00LTRtMCAwbDQtNG0tNCA0aDE0bS01IDR2MWEzIDMgMCAwMS0zIDNINmEzIDMgMCAwMS0zLTNWN2EzIDMgMCAwMTMtM2g3YTMgMyAwIDAxMyAzdjFcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTG9nb3V0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE3IDE2bDQtNG0wIDBsLTQtNG00IDRIN202IDR2MWEzIDMgMCAwMS0zIDNINmEzIDMgMCAwMS0zLTNWN2EzIDMgMCAwMTMtM2g0YTMgMyAwIDAxMyAzdjFcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWFpbE9wZW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyAxOXYtOC45M2EyIDIgMCAwMS44OS0xLjY2NGw3LTQuNjY2YTIgMiAwIDAxMi4yMiAwbDcgNC42NjZBMiAyIDAgMDEyMSAxMC4wN1YxOU0zIDE5YTIgMiAwIDAwMiAyaDE0YTIgMiAwIDAwMi0yTTMgMTlsNi43NS00LjVNMjEgMTlsLTYuNzUtNC41TTMgMTBsNi43NSA0LjVNMjEgMTBsLTYuNzUgNC41bTAgMGwtMS4xNC43NmEyIDIgMCAwMS0yLjIyIDBsLTEuMTQtLjc2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1haWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyA4bDcuODkgNS4yNmEyIDIgMCAwMDIuMjIgMEwyMSA4TTUgMTloMTRhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1hcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDIwbC01LjQ0Ny0yLjcyNEExIDEgMCAwMTMgMTYuMzgyVjUuNjE4YTEgMSAwIDAxMS40NDctLjg5NEw5IDdtMCAxM2w2LTNtLTYgM1Y3bTYgMTBsNC41NTMgMi4yNzZBMSAxIDAgMDAyMSAxOC4zODJWNy42MThhMSAxIDAgMDAtLjU1My0uODk0TDE1IDRtMCAxM1Y0bTAgMEw5IDdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWVudUFsdDEgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNCA2aDE2TTQgMTJoOG0tOCA2aDE2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1lbnVBbHQyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgNmgxNk00IDEyaDE2TTQgMThoN1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVNZW51QWx0MyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDZoMTZNNCAxMmgxNm0tNyA2aDdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWVudUFsdDQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNCA4aDE2TTQgMTZoMTZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWVudSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1pY3JvcGhvbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTkgMTFhNyA3IDAgMDEtNyA3bTAgMGE3IDcgMCAwMS03LTdtNyA3djRtMCAwSDhtNCAwaDRtLTQtOGEzIDMgMCAwMS0zLTNWNWEzIDMgMCAxMTYgMHY2YTMgMyAwIDAxLTMgM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWludXNDaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgMTJIOW0xMiAwYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVNaW51c1NtIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE4IDEySDZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWludXMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMjAgMTJINFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVNb29uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIwLjM1NCAxNS4zNTRBOSA5IDAgMDE4LjY0NiAzLjY0NiA5LjAwMyA5LjAwMyAwIDAwMTIgMjFhOS4wMDMgOS4wMDMgMCAwMDguMzU0LTUuNjQ2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVNdXNpY05vdGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxOVY2bDEyLTN2MTNNOSAxOWMwIDEuMTA1LTEuMzQzIDItMyAycy0zLS44OTUtMy0yIDEuMzQzLTIgMy0yIDMgLjg5NSAzIDJ6bTEyLTNjMCAxLjEwNS0xLjM0MyAyLTMgMnMtMy0uODk1LTMtMiAxLjM0My0yIDMtMiAzIC44OTUgMyAyek05IDEwbDEyLTNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTmV3c3BhcGVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE5IDIwSDVhMiAyIDAgMDEtMi0yVjZhMiAyIDAgMDEyLTJoMTBhMiAyIDAgMDEyIDJ2MW0yIDEzYTIgMiAwIDAxLTItMlY3bTIgMTNhMiAyIDAgMDAyLTJWOWEyIDIgMCAwMC0yLTJoLTJtLTQtM0g5TTcgMTZoNk03IDhoNnY0SDdWOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lT2ZmaWNlQnVpbGRpbmcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTkgMjFWNWEyIDIgMCAwMC0yLTJIN2EyIDIgMCAwMC0yIDJ2MTZtMTQgMGgybS0yIDBoLTVtLTkgMEgzbTIgMGg1TTkgN2gxbS0xIDRoMW00LTRoMW0tMSA0aDFtLTUgMTB2LTVhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXY1bS00IDBoNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVQYXBlckFpcnBsYW5lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDE5bDkgMi05LTE4LTkgMTggOS0yem0wIDB2LThcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGFwZXJDbGlwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1LjE3MiA3bC02LjU4NiA2LjU4NmEyIDIgMCAxMDIuODI4IDIuODI4bDYuNDE0LTYuNTg2YTQgNCAwIDAwLTUuNjU2LTUuNjU2bC02LjQxNSA2LjU4NWE2IDYgMCAxMDguNDg2IDguNDg2TDIwLjUgMTNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGF1c2UgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTAgOXY2bTQtNnY2bTctM2E5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGVuY2lsQWx0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDVINmEyIDIgMCAwMC0yIDJ2MTFhMiAyIDAgMDAyIDJoMTFhMiAyIDAgMDAyLTJ2LTVtLTEuNDE0LTkuNDE0YTIgMiAwIDExMi44MjggMi44MjhMMTEuODI4IDE1SDl2LTIuODI4bDguNTg2LTguNTg2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVQZW5jaWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUuMjMyIDUuMjMybDMuNTM2IDMuNTM2bS0yLjAzNi01LjAzNmEyLjUgMi41IDAgMTEzLjUzNiAzLjUzNkw2LjUgMjEuMDM2SDN2LTMuNTcyTDE2LjczMiAzLjczMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGhvbmVJbmNvbWluZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMSAzbC02IDZtMCAwVjRtMCA1aDVNNSAzYTIgMiAwIDAwLTIgMnYxYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoMWEyIDIgMCAwMDItMnYtMy4yOGExIDEgMCAwMC0uNjg0LS45NDhsLTQuNDkzLTEuNDk4YTEgMSAwIDAwLTEuMjEuNTAybC0xLjEzIDIuMjU3YTExLjA0MiAxMS4wNDIgMCAwMS01LjUxNi01LjUxN2wyLjI1Ny0xLjEyOGExIDEgMCAwMC41MDItMS4yMUw5LjIyOCAzLjY4M0ExIDEgMCAwMDguMjc5IDNINXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGhvbmVNaXNzZWRDYWxsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE2IDhsMi0ybTAgMGwyLTJtLTIgMmwtMi0ybTIgMmwyIDJNNSAzYTIgMiAwIDAwLTIgMnYxYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoMWEyIDIgMCAwMDItMnYtMy4yOGExIDEgMCAwMC0uNjg0LS45NDhsLTQuNDkzLTEuNDk4YTEgMSAwIDAwLTEuMjEuNTAybC0xLjEzIDIuMjU3YTExLjA0MiAxMS4wNDIgMCAwMS01LjUxNi01LjUxN2wyLjI1Ny0xLjEyOGExIDEgMCAwMC41MDItMS4yMUw5LjIyOCAzLjY4M0ExIDEgMCAwMDguMjc5IDNINXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGhvbmVPdXRnb2luZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNiAzaDVtMCAwdjVtMC01bC02IDZNNSAzYTIgMiAwIDAwLTIgMnYxYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoMWEyIDIgMCAwMDItMnYtMy4yOGExIDEgMCAwMC0uNjg0LS45NDhsLTQuNDkzLTEuNDk4YTEgMSAwIDAwLTEuMjEuNTAybC0xLjEzIDIuMjU3YTExLjA0MiAxMS4wNDIgMCAwMS01LjUxNi01LjUxN2wyLjI1Ny0xLjEyOGExIDEgMCAwMC41MDItMS4yMUw5LjIyOCAzLjY4M0ExIDEgMCAwMDguMjc5IDNINXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGhvbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyA1YTIgMiAwIDAxMi0yaDMuMjhhMSAxIDAgMDEuOTQ4LjY4NGwxLjQ5OCA0LjQ5M2ExIDEgMCAwMS0uNTAyIDEuMjFsLTIuMjU3IDEuMTNhMTEuMDQyIDExLjA0MiAwIDAwNS41MTYgNS41MTZsMS4xMy0yLjI1N2ExIDEgMCAwMTEuMjEtLjUwMmw0LjQ5MyAxLjQ5OGExIDEgMCAwMS42ODQuOTQ5VjE5YTIgMiAwIDAxLTIgMmgtMUM5LjcxNiAyMSAzIDE0LjI4NCAzIDZWNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGhvdG9ncmFwaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDE2bDQuNTg2LTQuNTg2YTIgMiAwIDAxMi44MjggMEwxNiAxNm0tMi0ybDEuNTg2LTEuNTg2YTIgMiAwIDAxMi44MjggMEwyMCAxNG0tNi02aC4wMU02IDIwaDEyYTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVQbGF5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE0Ljc1MiAxMS4xNjhsLTMuMTk3LTIuMTMyQTEgMSAwIDAwMTAgOS44N3Y0LjI2M2ExIDEgMCAwMDEuNTU1LjgzMmwzLjE5Ny0yLjEzMmExIDEgMCAwMDAtMS42NjR6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVQbHVzQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDl2M20wIDB2M20wLTNoM20tMyAwSDltMTIgMGE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGx1c1NtIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDZ2Nm0wIDB2Nm0wLTZoNm0tNiAwSDZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGx1cyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA0djE2bTgtOEg0XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVByZXNlbnRhdGlvbkNoYXJ0QmFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTN2LTFtNCAxdi0zbTQgM1Y4TTggMjFsNC00IDQgNE0zIDRoMThNNCA0aDE2djEyYTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMVY0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVQcmVzZW50YXRpb25DaGFydExpbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAxMmwzLTMgMyAzIDQtNE04IDIxbDQtNCA0IDRNMyA0aDE4TTQgNGgxNnYxMmExIDEgMCAwMS0xIDFINWExIDEgMCAwMS0xLTFWNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUHJpbnRlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNyAxN2gyYTIgMiAwIDAwMi0ydi00YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY0YTIgMiAwIDAwMiAyaDJtMiA0aDZhMiAyIDAgMDAyLTJ2LTRhMiAyIDAgMDAtMi0ySDlhMiAyIDAgMDAtMiAydjRhMiAyIDAgMDAyIDJ6bTgtMTJWNWEyIDIgMCAwMC0yLTJIOWEyIDIgMCAwMC0yIDJ2NGgxMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUHV6emxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDRhMiAyIDAgMTE0IDB2MWExIDEgMCAwMDEgMWgzYTEgMSAwIDAxMSAxdjNhMSAxIDAgMDEtMSAxaC0xYTIgMiAwIDEwMCA0aDFhMSAxIDAgMDExIDF2M2ExIDEgMCAwMS0xIDFoLTNhMSAxIDAgMDEtMS0xdi0xYTIgMiAwIDEwLTQgMHYxYTEgMSAwIDAxLTEgMUg3YTEgMSAwIDAxLTEtMXYtM2ExIDEgMCAwMC0xLTFINGEyIDIgMCAxMTAtNGgxYTEgMSAwIDAwMS0xVjdhMSAxIDAgMDExLTFoM2ExIDEgMCAwMDEtMVY0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVRcmNvZGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgNHYxbTYgMTFoMm0tNiAwaC0ydjRtMC0xMXYzbTAgMGguMDFNMTIgMTJoNC4wMU0xNiAyMGg0TTQgMTJoNG0xMiAwaC4wMU01IDhoMmExIDEgMCAwMDEtMVY1YTEgMSAwIDAwLTEtMUg1YTEgMSAwIDAwLTEgMXYyYTEgMSAwIDAwMSAxem0xMiAwaDJhMSAxIDAgMDAxLTFWNWExIDEgMCAwMC0xLTFoLTJhMSAxIDAgMDAtMSAxdjJhMSAxIDAgMDAxIDF6TTUgMjBoMmExIDEgMCAwMDEtMXYtMmExIDEgMCAwMC0xLTFINWExIDEgMCAwMC0xIDF2MmExIDEgMCAwMDEgMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUXVlc3Rpb25NYXJrQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTguMjI4IDljLjU0OS0xLjE2NSAyLjAzLTIgMy43NzItMiAyLjIxIDAgNCAxLjM0MyA0IDMgMCAxLjQtMS4yNzggMi41NzUtMy4wMDYgMi45MDctLjU0Mi4xMDQtLjk5NC41NC0uOTk0IDEuMDkzbTAgM2guMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVJlY2VpcHRSZWZ1bmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTYgMTV2LTFhNCA0IDAgMDAtNC00SDhtMCAwbDMgM20tMy0zbDMtM205IDE0VjVhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjE2bDQtMiA0IDIgNC0yIDQgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUmVjZWlwdFRheCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDE0bDYtNm0tNS41LjVoLjAxbTQuOTkgNWguMDFNMTkgMjFWNWEyIDIgMCAwMC0yLTJIN2EyIDIgMCAwMC0yIDJ2MTZsMy41LTIgMy41IDIgMy41LTIgMy41IDJ6TTEwIDguNWEuNS41IDAgMTEtMSAwIC41LjUgMCAwMTEgMHptNSA1YS41LjUgMCAxMS0xIDAgLjUuNSAwIDAxMSAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVSZWZyZXNoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgNHY1aC41ODJtMTUuMzU2IDJBOC4wMDEgOC4wMDEgMCAwMDQuNTgyIDltMCAwSDltMTEgMTF2LTVoLS41ODFtMCAwYTguMDAzIDguMDAzIDAgMDEtMTUuMzU3LTJtMTUuMzU3IDJIMTVcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUmVwbHkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyAxMGgxMGE4IDggMCAwMTggOHYyTTMgMTBsNiA2bS02LTZsNi02XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVJld2luZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMi4wNjYgMTEuMmExIDEgMCAwMDAgMS42bDUuMzM0IDRBMSAxIDAgMDAxOSAxNlY4YTEgMSAwIDAwLTEuNi0uOGwtNS4zMzMgNHpNNC4wNjYgMTEuMmExIDEgMCAwMDAgMS42bDUuMzM0IDRBMSAxIDAgMDAxMSAxNlY4YTEgMSAwIDAwLTEuNi0uOGwtNS4zMzQgNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUnNzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTYgNWM3LjE4IDAgMTMgNS44MiAxMyAxM002IDExYTcgNyAwIDAxNyA3bS02IDBhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTYXZlQXMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcgMTZ2MmEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ2LTdhMiAyIDAgMDEyLTJoMm0zLTRIOWEyIDIgMCAwMC0yIDJ2N2EyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMmgtMW0tMSA0bC0zIDNtMCAwbC0zLTNtMyAzVjNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2F2ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDdINWEyIDIgMCAwMC0yIDJ2OWEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY5YTIgMiAwIDAwLTItMmgtM20tMSA0bC0zIDNtMCAwbC0zLTNtMyAzVjRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2NhbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyA2bDMgMW0wIDBsLTMgOWE1LjAwMiA1LjAwMiAwIDAwNi4wMDEgME02IDdsMyA5TTYgN2w2LTJtNiAybDMtMW0tMyAxbC0zIDlhNS4wMDIgNS4wMDIgMCAwMDYuMDAxIDBNMTggN2wzIDltLTMtOWwtNi0ybTAtMnYybTAgMTZWNW0wIDE2SDltMyAwaDNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2Npc3NvcnMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTQuMTIxIDE0LjEyMUwxOSAxOW0tNy03bDctN20tNyA3bC0yLjg3OSAyLjg3OU0xMiAxMkw5LjEyMSA5LjEyMW0wIDUuNzU4YTMgMyAwIDEwLTQuMjQzIDQuMjQzIDMgMyAwIDAwNC4yNDMtNC4yNDN6bTAtNS43NThhMyAzIDAgMTAtNC4yNDMtNC4yNDMgMyAzIDAgMDA0LjI0MyA0LjI0M3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2VhcmNoQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTZsMi44NzktMi44NzltMCAwYTMgMyAwIDEwNC4yNDMtNC4yNDIgMyAzIDAgMDAtNC4yNDMgNC4yNDJ6TTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTZWFyY2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNlbGVjdG9yIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggOWw0LTQgNCA0bTAgNmwtNCA0LTQtNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTZXJ2ZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNSAxMmgxNE01IDEyYTIgMiAwIDAxLTItMlY2YTIgMiAwIDAxMi0yaDE0YTIgMiAwIDAxMiAydjRhMiAyIDAgMDEtMiAyTTUgMTJhMiAyIDAgMDAtMiAydjRhMiAyIDAgMDAyIDJoMTRhMiAyIDAgMDAyLTJ2LTRhMiAyIDAgMDAtMi0ybS0yLTRoLjAxTTE3IDE2aC4wMVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTaGFyZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04LjY4NCAxMy4zNDJDOC44ODYgMTIuOTM4IDkgMTIuNDgyIDkgMTJjMC0uNDgyLS4xMTQtLjkzOC0uMzE2LTEuMzQybTAgMi42ODRhMyAzIDAgMTEwLTIuNjg0bTAgMi42ODRsNi42MzIgMy4zMTZtLTYuNjMyLTZsNi42MzItMy4zMTZtMCAwYTMgMyAwIDEwNS4zNjctMi42ODQgMyAzIDAgMDAtNS4zNjcgMi42ODR6bTAgOS4zMTZhMyAzIDAgMTA1LjM2OCAyLjY4NCAzIDMgMCAwMC01LjM2OC0yLjY4NHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2hpZWxkQ2hlY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxMmwyIDIgNC00bTUuNjE4LTQuMDE2QTExLjk1NSAxMS45NTUgMCAwMTEyIDIuOTQ0YTExLjk1NSAxMS45NTUgMCAwMS04LjYxOCAzLjA0QTEyLjAyIDEyLjAyIDAgMDAzIDljMCA1LjU5MSAzLjgyNCAxMC4yOSA5IDExLjYyMiA1LjE3Ni0xLjMzMiA5LTYuMDMgOS0xMS42MjIgMC0xLjA0Mi0uMTMzLTIuMDUyLS4zODItMy4wMTZ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNoaWVsZEV4Y2xhbWF0aW9uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIwLjYxOCA1Ljk4NEExMS45NTUgMTEuOTU1IDAgMDExMiAyLjk0NGExMS45NTUgMTEuOTU1IDAgMDEtOC42MTggMy4wNEExMi4wMiAxMi4wMiAwIDAwMyA5YzAgNS41OTEgMy44MjQgMTAuMjkgOSAxMS42MjIgNS4xNzYtMS4zMzIgOS02LjAzIDktMTEuNjIyIDAtMS4wNDItLjEzMy0yLjA1Mi0uMzgyLTMuMDE2ek0xMiA5djJtMCA0aC4wMVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTaG9wcGluZ0JhZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNiAxMVY3YTQgNCAwIDAwLTggMHY0TTUgOWgxNGwxIDEySDRMNSA5elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTaG9wcGluZ0NhcnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyAzaDJsLjQgMk03IDEzaDEwbDQtOEg1LjRNNyAxM0w1LjQgNU03IDEzbC0yLjI5MyAyLjI5M2MtLjYzLjYzLS4xODQgMS43MDcuNzA3IDEuNzA3SDE3bTAgMGEyIDIgMCAxMDAgNCAyIDIgMCAwMDAtNHptLTggMmEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNvcnRBc2NlbmRpbmcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyA0aDEzTTMgOGg5bS05IDRoNm00IDBsNC00bTAgMGw0IDRtLTQtNHYxMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTb3J0RGVzY2VuZGluZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0zIDRoMTNNMyA4aDltLTkgNGg5bTUtNHYxMm0wIDBsLTQtNG00IDRsNC00XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNwYXJrbGVzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTUgM3Y0TTMgNWg0TTYgMTd2NG0tMi0yaDRtNS0xNmwyLjI4NiA2Ljg1N0wyMSAxMmwtNS43MTQgMi4xNDNMMTMgMjFsLTIuMjg2LTYuODU3TDUgMTJsNS43MTQtMi4xNDNMMTMgM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU3BlYWtlcnBob25lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDUuODgyVjE5LjI0YTEuNzYgMS43NiAwIDAxLTMuNDE3LjU5MmwtMi4xNDctNi4xNU0xOCAxM2EzIDMgMCAxMDAtNk01LjQzNiAxMy42ODNBNC4wMDEgNC4wMDEgMCAwMTcgNmgxLjgzMmM0LjEgMCA3LjYyNS0xLjIzNCA5LjE2OC0zdjE0Yy0xLjU0My0xLjc2Ni01LjA2Ny0zLTkuMTY4LTNIN2EzLjk4OCAzLjk4OCAwIDAxLTEuNTY0LS4zMTd6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVN0YXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTEuMDQ5IDIuOTI3Yy4zLS45MjEgMS42MDMtLjkyMSAxLjkwMiAwbDEuNTE5IDQuNjc0YTEgMSAwIDAwLjk1LjY5aDQuOTE1Yy45NjkgMCAxLjM3MSAxLjI0LjU4OCAxLjgxbC0zLjk3NiAyLjg4OGExIDEgMCAwMC0uMzYzIDEuMTE4bDEuNTE4IDQuNjc0Yy4zLjkyMi0uNzU1IDEuNjg4LTEuNTM4IDEuMTE4bC0zLjk3Ni0yLjg4OGExIDEgMCAwMC0xLjE3NiAwbC0zLjk3NiAyLjg4OGMtLjc4My41Ny0xLjgzOC0uMTk3LTEuNTM4LTEuMTE4bDEuNTE4LTQuNjc0YTEgMSAwIDAwLS4zNjMtMS4xMThsLTMuOTc2LTIuODg4Yy0uNzg0LS41Ny0uMzgtMS44MS41ODgtMS44MWg0LjkxNGExIDEgMCAwMC45NTEtLjY5bDEuNTE5LTQuNjc0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTdGF0dXNPZmZsaW5lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE4LjM2NCA1LjYzNmE5IDkgMCAwMTAgMTIuNzI4bTAgMGwtMi44MjktMi44MjltMi44MjkgMi44MjlMMjEgMjFNMTUuNTM2IDguNDY0YTUgNSAwIDAxMCA3LjA3Mm0wIDBsLTIuODI5LTIuODI5bS00LjI0MyAyLjgyOWE0Ljk3OCA0Ljk3OCAwIDAxLTEuNDE0LTIuODNtLTEuNDE0IDUuNjU4YTkgOSAwIDAxLTIuMTY3LTkuMjM4bTcuODI0IDIuMTY3YTEgMSAwIDExMS40MTQgMS40MTRtLTEuNDE0LTEuNDE0TDMgM204LjI5MyA4LjI5M2wxLjQxNCAxLjQxNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTdGF0dXNPbmxpbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNS42MzYgMTguMzY0YTkgOSAwIDAxMC0xMi43MjhtMTIuNzI4IDBhOSA5IDAgMDEwIDEyLjcyOG0tOS45LTIuODI5YTUgNSAwIDAxMC03LjA3bTcuMDcyIDBhNSA1IDAgMDEwIDcuMDdNMTMgMTJhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTdG9wIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDEwYTEgMSAwIDAxMS0xaDRhMSAxIDAgMDExIDF2NGExIDEgMCAwMS0xIDFoLTRhMSAxIDAgMDEtMS0xdi00elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTdW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgM3YxbTAgMTZ2MW05LTloLTFNNCAxMkgzbTE1LjM2NCA2LjM2NGwtLjcwNy0uNzA3TTYuMzQzIDYuMzQzbC0uNzA3LS43MDdtMTIuNzI4IDBsLS43MDcuNzA3TTYuMzQzIDE3LjY1N2wtLjcwNy43MDdNMTYgMTJhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTdXBwb3J0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE4LjM2NCA1LjYzNmwtMy41MzYgMy41MzZtMCA1LjY1NmwzLjUzNiAzLjUzNk05LjE3MiA5LjE3Mkw1LjYzNiA1LjYzNm0zLjUzNiA5LjE5MmwtMy41MzYgMy41MzZNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6bS01IDBhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTd2l0Y2hIb3Jpem9udGFsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggN2gxMm0wIDBsLTQtNG00IDRsLTQgNG0wIDZING0wIDBsNCA0bS00LTRsNC00XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVN3aXRjaFZlcnRpY2FsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTcgMTZWNG0wIDBMMyA4bTQtNGw0IDRtNiAwdjEybTAgMGw0LTRtLTQgNGwtNC00XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVRhYmxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgMTBoMThNMyAxNGgxOG0tOS00djhtLTcgMGgxNGEyIDIgMCAwMDItMlY4YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY4YTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUYWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyA3aC4wMU03IDNoNWMuNTEyIDAgMS4wMjQuMTk1IDEuNDE0LjU4Nmw3IDdhMiAyIDAgMDEwIDIuODI4bC03IDdhMiAyIDAgMDEtMi44MjggMGwtNy03QTEuOTk0IDEuOTk0IDAgMDEzIDEyVjdhNCA0IDAgMDE0LTR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVRlbXBsYXRlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgNWExIDEgMCAwMTEtMWgxNGExIDEgMCAwMTEgMXYyYTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMVY1ek00IDEzYTEgMSAwIDAxMS0xaDZhMSAxIDAgMDExIDF2NmExIDEgMCAwMS0xIDFINWExIDEgMCAwMS0xLTF2LTZ6TTE2IDEzYTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2NmExIDEgMCAwMS0xIDFoLTJhMSAxIDAgMDEtMS0xdi02elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUZXJtaW5hbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDlsMyAzLTMgM201IDBoM001IDIwaDE0YTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUaHVtYkRvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTAgMTRINS4yMzZhMiAyIDAgMDEtMS43ODktMi44OTRsMy41LTdBMiAyIDAgMDE4LjczNiAzaDQuMDE4YTIgMiAwIDAxLjQ4NS4wNmwzLjc2Ljk0bS03IDEwdjVhMiAyIDAgMDAyIDJoLjA5NmMuNSAwIC45MDUtLjQwNS45MDUtLjkwNCAwLS43MTUuMjExLTEuNDEzLjYwOC0yLjAwOEwxNyAxM1Y0bS03IDEwaDJtNS0xMGgyYTIgMiAwIDAxMiAydjZhMiAyIDAgMDEtMiAyaC0yLjVcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVGh1bWJVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNCAxMGg0Ljc2NGEyIDIgMCAwMTEuNzg5IDIuODk0bC0zLjUgN0EyIDIgMCAwMTE1LjI2MyAyMWgtNC4wMTdjLS4xNjMgMC0uMzI2LS4wMi0uNDg1LS4wNkw3IDIwbTctMTBWNWEyIDIgMCAwMC0yLTJoLS4wOTVjLS41IDAtLjkwNS40MDUtLjkwNS45MDUgMCAuNzE0LS4yMTEgMS40MTItLjYwOCAyLjAwNkw3IDExdjltNy0xMGgtMk03IDIwSDVhMiAyIDAgMDEtMi0ydi02YTIgMiAwIDAxMi0yaDIuNVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUaWNrZXQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgNXYybTAgNHYybTAgNHYyTTUgNWEyIDIgMCAwMC0yIDJ2M2EyIDIgMCAxMTAgNHYzYTIgMiAwIDAwMiAyaDE0YTIgMiAwIDAwMi0ydi0zYTIgMiAwIDExMC00VjdhMiAyIDAgMDAtMi0ySDV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVRyYW5zbGF0ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0zIDVoMTJNOSAzdjJtMS4wNDggOS41QTE4LjAyMiAxOC4wMjIgMCAwMTYuNDEyIDltNi4wODggOWg3TTExIDIxbDUtMTAgNSAxME0xMi43NTEgNUMxMS43ODMgMTAuNzcgOC4wNyAxNS42MSAzIDE4LjEyOVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUcmFzaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xOSA3bC0uODY3IDEyLjE0MkEyIDIgMCAwMTE2LjEzOCAyMUg3Ljg2MmEyIDIgMCAwMS0xLjk5NS0xLjg1OEw1IDdtNSA0djZtNC02djZtMS0xMFY0YTEgMSAwIDAwLTEtMWgtNGExIDEgMCAwMC0xIDF2M000IDdoMTZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVHJlbmRpbmdEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEzIDE3aDhtMCAwVjltMCA4bC04LTgtNCA0LTYtNlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUcmVuZGluZ1VwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEzIDdoOG0wIDB2OG0wLThsLTggOC00LTQtNiA2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVRydWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOSAxN2EyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6TTE5IDE3YTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTMgMTZWNmExIDEgMCAwMC0xLTFINGExIDEgMCAwMC0xIDF2MTBhMSAxIDAgMDAxIDFoMW04LTFhMSAxIDAgMDEtMSAxSDltNC0xVjhhMSAxIDAgMDExLTFoMi41ODZhMSAxIDAgMDEuNzA3LjI5M2wzLjQxNCAzLjQxNGExIDEgMCAwMS4yOTMuNzA3VjE2YTEgMSAwIDAxLTEgMWgtMW0tNi0xYTEgMSAwIDAwMSAxaDFNNSAxN2EyIDIgMCAxMDQgMG0tNCAwYTIgMiAwIDExNCAwbTYgMGEyIDIgMCAxMDQgMG0tNCAwYTIgMiAwIDExNCAwXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVVwbG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDE2djFhMyAzIDAgMDAzIDNoMTBhMyAzIDAgMDAzLTN2LTFtLTQtOGwtNC00bTAgMEw4IDhtNC00djEyXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVVzZXJBZGQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTggOXYzbTAgMHYzbTAtM2gzbS0zIDBoLTNtLTItNWE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6TTMgMjBhNiA2IDAgMDExMiAwdjFIM3YtMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVXNlckNpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01LjEyMSAxNy44MDRBMTMuOTM3IDEzLjkzNyAwIDAxMTIgMTZjMi41IDAgNC44NDcuNjU1IDYuODc5IDEuODA0TTE1IDEwYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHptNiAyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVVc2VyR3JvdXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcgMjBoNXYtMmEzIDMgMCAwMC01LjM1Ni0xLjg1N00xNyAyMEg3bTEwIDB2LTJjMC0uNjU2LS4xMjYtMS4yODMtLjM1Ni0xLjg1N003IDIwSDJ2LTJhMyAzIDAgMDE1LjM1Ni0xLjg1N003IDIwdi0yYzAtLjY1Ni4xMjYtMS4yODMuMzU2LTEuODU3bTAgMGE1LjAwMiA1LjAwMiAwIDAxOS4yODggME0xNSA3YTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHptNiAzYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpNNyAxMGEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVVzZXJSZW1vdmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTMgN2E0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6TTkgMTRhNiA2IDAgMDAtNiA2djFoMTJ2LTFhNiA2IDAgMDAtNi02ek0yMSAxMmgtNlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVVc2VyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE2IDdhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwek0xMiAxNGE3IDcgMCAwMC03IDdoMTRhNyA3IDAgMDAtNy03elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVVc2VycyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA0LjM1NGE0IDQgMCAxMTAgNS4yOTJNMTUgMjFIM3YtMWE2IDYgMCAwMTEyIDB2MXptMCAwaDZ2LTFhNiA2IDAgMDAtOS01LjE5N00xMyA3YTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVmFyaWFibGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNC44NzEgNEExNy45MjYgMTcuOTI2IDAgMDAzIDEyYzAgMi44NzQuNjczIDUuNTkgMS44NzEgOG0xNC4xMyAwYTE3LjkyNiAxNy45MjYgMCAwMDEuODctOGMwLTIuODc0LS42NzMtNS41OS0xLjg3LThNOSA5aDEuMjQ2YTEgMSAwIDAxLjk2MS43MjVsMS41ODYgNS41NWExIDEgMCAwMC45NjEuNzI1SDE1bTEtN2gtLjA4YTIgMiAwIDAwLTEuNTE5LjY5OEw5LjYgMTUuMzAyQTIgMiAwIDAxOC4wOCAxNkg4XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVZpZGVvQ2FtZXJhIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDEwbDQuNTUzLTIuMjc2QTEgMSAwIDAxMjEgOC42MTh2Ni43NjRhMSAxIDAgMDEtMS40NDcuODk0TDE1IDE0TTUgMThoOGEyIDIgMCAwMDItMlY4YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY4YTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVWaWV3Qm9hcmRzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTdWN20wIDEwYTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMlY3YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJtMCAxMGEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0yTTkgN2EyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAybTAgMTBWN20wIDEwYTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJoLTJhMiAyIDAgMDAtMiAyXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVZpZXdHcmlkQWRkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE3IDE0djZtLTMtM2g2TTYgMTBoMmEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnYyYTIgMiAwIDAwMiAyem0xMCAwaDJhMiAyIDAgMDAyLTJWNmEyIDIgMCAwMC0yLTJoLTJhMiAyIDAgMDAtMiAydjJhMiAyIDAgMDAyIDJ6TTYgMjBoMmEyIDIgMCAwMDItMnYtMmEyIDIgMCAwMC0yLTJINmEyIDIgMCAwMC0yIDJ2MmEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVmlld0dyaWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNCA2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJWNnpNMTQgNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMlY2ek00IDE2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJ2LTJ6TTE0IDE2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJoLTJhMiAyIDAgMDEtMi0ydi0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVWaWV3TGlzdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDZoMTZNNCAxMGgxNk00IDE0aDE2TTQgMThoMTZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVm9sdW1lT2ZmIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTUuNTg2IDE1SDRhMSAxIDAgMDEtMS0xdi00YTEgMSAwIDAxMS0xaDEuNTg2bDQuNzA3LTQuNzA3QzEwLjkyMyAzLjY2MyAxMiA0LjEwOSAxMiA1djE0YzAgLjg5MS0xLjA3NyAxLjMzNy0xLjcwNy43MDdMNS41ODYgMTV6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNyAxNGwyLTJtMCAwbDItMm0tMiAybC0yLTJtMiAybDIgMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVWb2x1bWVVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNS41MzYgOC40NjRhNSA1IDAgMDEwIDcuMDcybTIuODI4LTkuOWE5IDkgMCAwMTAgMTIuNzI4TTUuNTg2IDE1SDRhMSAxIDAgMDEtMS0xdi00YTEgMSAwIDAxMS0xaDEuNTg2bDQuNzA3LTQuNzA3QzEwLjkyMyAzLjY2MyAxMiA0LjEwOSAxMiA1djE0YzAgLjg5MS0xLjA3NyAxLjMzNy0xLjcwNy43MDdMNS41ODYgMTV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVdpZmkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOC4xMTEgMTYuNDA0YTUuNSA1LjUgMCAwMTcuNzc4IDBNMTIgMjBoLjAxbS03LjA4LTcuMDcxYzMuOTA0LTMuOTA1IDEwLjIzNi0zLjkwNSAxNC4xNDEgME0xLjM5NCA5LjM5M2M1Ljg1Ny01Ljg1NyAxNS4zNTUtNS44NTcgMjEuMjEzIDBcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lWENpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMCAxNGwyLTJtMCAwbDItMm0tMiAybC0yLTJtMiAybDIgMm03LTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVab29tSW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6TTEwIDd2M20wIDB2M20wLTNoM20tMyAwSDdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lWm9vbU91dCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHpNMTMgMTBIN1wifX1dfSkocHJvcHMpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSWNvbkJhc2UgPSBleHBvcnRzLkdlbkljb24gPSB2b2lkIDA7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgaWNvbkNvbnRleHRfMSA9IHJlcXVpcmUoXCIuL2ljb25Db250ZXh0XCIpO1xuZnVuY3Rpb24gVHJlZTJFbGVtZW50KHRyZWUpIHtcbiAgICByZXR1cm4gdHJlZSAmJiB0cmVlLm1hcChmdW5jdGlvbiAobm9kZSwgaSkgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChub2RlLnRhZywgX19hc3NpZ24oeyBrZXk6IGkgfSwgbm9kZS5hdHRyKSwgVHJlZTJFbGVtZW50KG5vZGUuY2hpbGQpKTsgfSk7XG59XG5mdW5jdGlvbiBHZW5JY29uKGRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgX19hc3NpZ24oeyBhdHRyOiBfX2Fzc2lnbih7fSwgZGF0YS5hdHRyKSB9LCBwcm9wcyksIFRyZWUyRWxlbWVudChkYXRhLmNoaWxkKSkpOyB9O1xufVxuZXhwb3J0cy5HZW5JY29uID0gR2VuSWNvbjtcbmZ1bmN0aW9uIEljb25CYXNlKHByb3BzKSB7XG4gICAgdmFyIGVsZW0gPSBmdW5jdGlvbiAoY29uZikge1xuICAgICAgICB2YXIgYXR0ciA9IHByb3BzLmF0dHIsIHNpemUgPSBwcm9wcy5zaXplLCB0aXRsZSA9IHByb3BzLnRpdGxlLCBzdmdQcm9wcyA9IF9fcmVzdChwcm9wcywgW1wiYXR0clwiLCBcInNpemVcIiwgXCJ0aXRsZVwiXSk7XG4gICAgICAgIHZhciBjb21wdXRlZFNpemUgPSBzaXplIHx8IGNvbmYuc2l6ZSB8fCBcIjFlbVwiO1xuICAgICAgICB2YXIgY2xhc3NOYW1lO1xuICAgICAgICBpZiAoY29uZi5jbGFzc05hbWUpXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjb25mLmNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHByb3BzLmNsYXNzTmFtZSlcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IChjbGFzc05hbWUgPyBjbGFzc05hbWUgKyAnICcgOiAnJykgKyBwcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfX2Fzc2lnbih7IHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIiwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgc3Ryb2tlV2lkdGg6IFwiMFwiIH0sIGNvbmYuYXR0ciwgYXR0ciwgc3ZnUHJvcHMsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7IGNvbG9yOiBwcm9wcy5jb2xvciB8fCBjb25mLmNvbG9yIH0sIGNvbmYuc3R5bGUpLCBwcm9wcy5zdHlsZSksIGhlaWdodDogY29tcHV0ZWRTaXplLCB3aWR0aDogY29tcHV0ZWRTaXplLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0pLFxuICAgICAgICAgICAgdGl0bGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHRpdGxlKSxcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuKSk7XG4gICAgfTtcbiAgICByZXR1cm4gaWNvbkNvbnRleHRfMS5JY29uQ29udGV4dCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gUmVhY3QuY3JlYXRlRWxlbWVudChpY29uQ29udGV4dF8xLkljb25Db250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29uZikgeyByZXR1cm4gZWxlbShjb25mKTsgfSlcbiAgICAgICAgOiBlbGVtKGljb25Db250ZXh0XzEuRGVmYXVsdENvbnRleHQpO1xufVxuZXhwb3J0cy5JY29uQmFzZSA9IEljb25CYXNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkljb25Db250ZXh0ID0gZXhwb3J0cy5EZWZhdWx0Q29udGV4dCA9IHZvaWQgMDtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmV4cG9ydHMuRGVmYXVsdENvbnRleHQgPSB7XG4gICAgY29sb3I6IHVuZGVmaW5lZCxcbiAgICBzaXplOiB1bmRlZmluZWQsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgc3R5bGU6IHVuZGVmaW5lZCxcbiAgICBhdHRyOiB1bmRlZmluZWQsXG59O1xuZXhwb3J0cy5JY29uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQgJiYgUmVhY3QuY3JlYXRlQ29udGV4dChleHBvcnRzLkRlZmF1bHRDb250ZXh0KTtcbiIsIm1vZHVsZS5leHBvcnRzLkljb25zTWFuaWZlc3QgPSBbXG4gIHtcbiAgICBcImlkXCI6IFwiZmFcIixcbiAgICBcIm5hbWVcIjogXCJGb250IEF3ZXNvbWVcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjAgTGljZW5zZVwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJpb1wiLFxuICAgIFwibmFtZVwiOiBcIklvbmljb25zIDRcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2lvbmljb25zLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJpbzVcIixcbiAgICBcIm5hbWVcIjogXCJJb25pY29ucyA1XCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9pb25pY29ucy5jb20vXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWNvbnMvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwibWRcIixcbiAgICBcIm5hbWVcIjogXCJNYXRlcmlhbCBEZXNpZ24gaWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwOi8vZ29vZ2xlLmdpdGh1Yi5pby9tYXRlcmlhbC1kZXNpZ24taWNvbnMvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1pY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJ0aVwiLFxuICAgIFwibmFtZVwiOiBcIlR5cGljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cDovL3MtaW5ncy5jb20vdHlwaWNvbnMvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlktU0EgMy4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImdvXCIsXG4gICAgXCJuYW1lXCI6IFwiR2l0aHViIE9jdGljb25zIGljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9vY3RpY29ucy5naXRodWIuY29tL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmltZXIvb2N0aWNvbnMvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZmlcIixcbiAgICBcIm5hbWVcIjogXCJGZWF0aGVyXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9mZWF0aGVyaWNvbnMuY29tL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9mZWF0aGVyaWNvbnMvZmVhdGhlci9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJnaVwiLFxuICAgIFwibmFtZVwiOiBcIkdhbWUgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dhbWUtaWNvbnMubmV0L1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDIEJZIDMuMFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS8zLjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJ3aVwiLFxuICAgIFwibmFtZVwiOiBcIldlYXRoZXIgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2VyaWtmbG93ZXJzLmdpdGh1Yi5pby93ZWF0aGVyLWljb25zL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIlNJTCBPRkwgMS4xXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkxcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImRpXCIsXG4gICAgXCJuYW1lXCI6IFwiRGV2aWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL3ZvcmlsbGF6LmdpdGh1Yi5pby9kZXZpY29ucy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiYWlcIixcbiAgICBcIm5hbWVcIjogXCJBbnQgRGVzaWduIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi1pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJic1wiLFxuICAgIFwibmFtZVwiOiBcIkJvb3RzdHJhcCBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2ljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcInJpXCIsXG4gICAgXCJuYW1lXCI6IFwiUmVtaXggSWNvblwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9SZW1peC1EZXNpZ24vUmVtaXhJY29uXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJmY1wiLFxuICAgIFwibmFtZVwiOiBcIkZsYXQgQ29sb3IgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaWNvbnM4L2ZsYXQtY29sb3ItaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZ3JcIixcbiAgICBcIm5hbWVcIjogXCJHcm9tbWV0LUljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyb21tZXQvZ3JvbW1ldC1pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiaGlcIixcbiAgICBcIm5hbWVcIjogXCJIZXJvaWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL2hlcm9pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJzaVwiLFxuICAgIFwibmFtZVwiOiBcIlNpbXBsZSBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vc2ltcGxlaWNvbnMub3JnL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDMCAxLjAgVW5pdmVyc2FsXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL3B1YmxpY2RvbWFpbi96ZXJvLzEuMC9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImltXCIsXG4gICAgXCJuYW1lXCI6IFwiSWNvTW9vbiBGcmVlXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0tleWFtb29uL0ljb01vb24tRnJlZVwiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDIEJZIDQuMCBMaWNlbnNlXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJiaVwiLFxuICAgIFwibmFtZVwiOiBcIkJveEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2F0aXNhd2QvYm94aWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjAgTGljZW5zZVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiY2dcIixcbiAgICBcIm5hbWVcIjogXCJjc3MuZ2dcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYXN0cml0L2Nzcy5nZ1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJ2c2NcIixcbiAgICBcIm5hbWVcIjogXCJWUyBDb2RlIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC92c2NvZGUtY29kaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvNC4wL1wiXG4gIH1cbl0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pY29uc01hbmlmZXN0XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pY29uQmFzZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaWNvbkNvbnRleHRcIiksIGV4cG9ydHMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9zY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIkhlYWRlciIsInRpdGxlIiwiU3ViSGVhZGVyIiwiRGl2aWRlciIsImxhYmVsIiwidXNlUm91dGVyIiwiTGluayIsIk5hdkl0ZW0iLCJocmVmIiwiY2hpbGRyZW4iLCJhc1BhdGgiLCJIaUJhZGdlQ2hlY2siLCJIaUNsb2NrIiwiSGlUcmVuZGluZ1VwIiwiQWlGaWxsRGFzaGJvYXJkIiwiU2lkZWJhciIsInVzZVNlc3Npb24iLCJIZWFkIiwiU2NyaXB0IiwiTGF5b3V0Iiwic2Vzc2lvbiIsImxvYWRpbmciLCJzaWduT3V0IiwibG9nb3V0SGFuZGxlciIsInJlZGlyZWN0IiwiY2FsbGJhY2tVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfVVJMIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJfdXNlSW50ZXJzZWN0aW9uIiwib2JqIiwiX19lc01vZHVsZSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJjb25zb2xlIiwid2FybiIsInAiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJtYXAiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJmaW5hbGx5IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiZW51bWVyYWJsZSIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwicHVzaCIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJsZW5ndGgiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsIm1hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImdldFNlc3Npb24iLCJheGlvcyIsIk51bWJlckZvcm1hdCIsImluZGV4IiwidHJhbnNhY3Rpb25zIiwidCIsImkiLCJjb2RlIiwidXNlciIsImVtYWlsIiwic2hvdWxkUGF5QW1vdW50IiwicGF5bWVudE1ldGhvZCIsInBheW1lbnRTdGF0dXMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiZ2V0VXNlciIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImp3dCIsImNvdXBvbnMiXSwic291cmNlUm9vdCI6IiJ9