(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_atoms_content_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/atoms/content/Header */ "./components/atoms/content/Header.jsx");
/* harmony import */ var _components_atoms_content_SubHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/atoms/content/SubHeader */ "./components/atoms/content/SubHeader.jsx");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout/Layout */ "./components/layout/Layout.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\lokaloka-mitra\\pages\\index.jsx";









const index = () => {
  const [session, loading] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_6__.useSession)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    !session && router.push('/account/login');
    return () => {};
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "flex flex-col space-y-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_atoms_content_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
        title: "Dashboard"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_atoms_content_SubHeader__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: "Summary of your sales"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9jb21wb25lbnRzL2F0b21zL2NvbnRlbnQvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0Ly4vY29tcG9uZW50cy9hdG9tcy9jb250ZW50L1N1YkhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL2NvbXBvbmVudHMvYXRvbXMvc2lkZWJhci9EaXZpZGVyLmpzeCIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0Ly4vY29tcG9uZW50cy9hdG9tcy9zaWRlYmFyL05hdkl0ZW0uanN4Iiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanN4Iiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9jb21wb25lbnRzL21vbGVjdWxlcy9zaWRlYmFyL1NpZGViYXIuanN4Iiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0Ly4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvaGkvaW5kZXguZXNtLmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2Nqcy9pY29uQmFzZS5qcyIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9janMvaWNvbkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvY2pzL2ljb25zTWFuaWZlc3QuanMiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvY2pzL2luZGV4LmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbG9rYWxva2EtbWl0cmEtbmV4dC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJuZXh0L3NjcmlwdFwiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2lnbm9yZWR8QzpcXFVzZXJzXFxBZG1pblxcRG9jdW1lbnRzXFxHaXRIdWJcXGxva2Fsb2thLW1pdHJhXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWRlciA9ICh7IHRpdGxlIH0pID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ib2xkJz57dGl0bGV9PC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJjb25zdCBTdWJIZWFkZXIgPSAoeyB0aXRsZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3RleHQtc20gZm9udC1ib2xkIHRleHQtYmx1ZUdyYXktNDAwJz57dGl0bGV9PC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YkhlYWRlclxyXG4iLCJjb25zdCBEaXZpZGVyID0gKHsgbGFiZWwgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtYmx1ZUdyYXktNDAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgcHktMiBweC00Jz57bGFiZWx9PC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpdmlkZXJcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IE5hdkl0ZW0gPSAoeyBocmVmLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0gcGFzc0hyZWY9e3RydWV9PlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgcHktMi41IHB4LTQgcm91bmRlZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBob3ZlcjpiZy1ibHVlR3JheS03MDAgY2FwaXRhbGl6ZSBob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwICR7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoID09IGhyZWYgPyAnYmctYmx1ZUdyYXktNzAwJyA6ICcnXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZJdGVtXHJcbiIsImltcG9ydCB7IEhpQmFkZ2VDaGVjaywgSGlDbG9jaywgSGlUcmVuZGluZ1VwIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XHJcbmltcG9ydCB7IEFpRmlsbERhc2hib2FyZCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiLi4vYXRvbXMvc2lkZWJhci9EaXZpZGVyXCI7XHJcbmltcG9ydCBOYXZJdGVtIGZyb20gXCIuLi9hdG9tcy9zaWRlYmFyL05hdkl0ZW1cIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL21vbGVjdWxlcy9zaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TWl0cmEgeCBMb2thbG9rYSB8IEFkbWluIFBhbmVsPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQWRtaW4gcGFuZWwgZm9yIE1pdHJhXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7LyogU2lkZWJhciAqL31cclxuICAgICAgPFNpZGViYXI+XHJcbiAgICAgICAgey8qIDxOYXZJdGVtIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBaUZpbGxEYXNoYm9hcmQgY2xhc3NOYW1lPSd3LTUgaC01JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkRhc2hib2FyZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT4gKi99XHJcbiAgICAgICAgPERpdmlkZXIgbGFiZWw9XCJvcmRlcnNcIiAvPlxyXG5cclxuICAgICAgICA8TmF2SXRlbSBocmVmPVwiL3RyYW5zYWN0aW9uc1wiPlxyXG4gICAgICAgICAgPEhpQmFkZ2VDaGVjayBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cclxuICAgICAgICAgIDxzcGFuPlRyYW5zYWN0aW9uczwvc3Bhbj5cclxuICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgIDwvU2lkZWJhcj5cclxuXHJcbiAgICAgIHsvKiBNYWluIENvbnRlbnQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTggcHgtMTAgYmctYmx1ZUdyYXktODAwIG1heC1oLXNjcmVlbiBoLXNjcmVlbiBvdmVyZmxvdy15LWF1dG9cIj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IHsgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcblxyXG5jb25zdCBTaWRlYmFyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpXHJcbiAgICBjb25zdCBsb2dvdXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzaWduT3V0KHtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tVcmw6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyJz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgcHgtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J3ctOCBoLTgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nbm9uZScgdmlld0JveD0nMCAwIDI0IDI0JyBzdHJva2U9J2N1cnJlbnRDb2xvcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTkgMTJsMiAyIDQtNE03LjgzNSA0LjY5N2EzLjQyIDMuNDIgMCAwMDEuOTQ2LS44MDYgMy40MiAzLjQyIDAgMDE0LjQzOCAwIDMuNDIgMy40MiAwIDAwMS45NDYuODA2IDMuNDIgMy40MiAwIDAxMy4xMzggMy4xMzggMy40MiAzLjQyIDAgMDAuODA2IDEuOTQ2IDMuNDIgMy40MiAwIDAxMCA0LjQzOCAzLjQyIDMuNDIgMCAwMC0uODA2IDEuOTQ2IDMuNDIgMy40MiAwIDAxLTMuMTM4IDMuMTM4IDMuNDIgMy40MiAwIDAwLTEuOTQ2LjgwNiAzLjQyIDMuNDIgMCAwMS00LjQzOCAwIDMuNDIgMy40MiAwIDAwLTEuOTQ2LS44MDYgMy40MiAzLjQyIDAgMDEtMy4xMzgtMy4xMzggMy40MiAzLjQyIDAgMDAtLjgwNi0xLjk0NiAzLjQyIDMuNDIgMCAwMTAtNC40MzggMy40MiAzLjQyIDAgMDAuODA2LTEuOTQ2IDMuNDIgMy40MiAwIDAxMy4xMzgtMy4xMzh6J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1leHRyYWJvbGQnPkxva2Fsb2thPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS0xJz57Y2hpbGRyZW59PC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0ncHgtNCBweS0yIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXIgYmctcmVkLTUwMCB3LWZ1bGwnIG9uQ2xpY2s9eygpID0+IGxvZ291dEhhbmRsZXIoKX0+XHJcbiAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9hdG9tcy9jb250ZW50L0hlYWRlcidcclxuaW1wb3J0IFN1YkhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvYXRvbXMvY29udGVudC9TdWJIZWFkZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgIXNlc3Npb24gJiYgcm91dGVyLnB1c2goJy9hY2NvdW50L2xvZ2luJylcclxuICAgICAgICByZXR1cm4gKCkgPT4ge31cclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBzcGFjZS15LTInPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciB0aXRsZT0nRGFzaGJvYXJkJyAvPlxyXG4gICAgICAgICAgICAgICAgPFN1YkhlYWRlciB0aXRsZT0nU3VtbWFyeSBvZiB5b3VyIHNhbGVzJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLy8gVEhJUyBGSUxFIElTIEFVVE8gR0VORVJBVEVEXG5pbXBvcnQgeyBHZW5JY29uIH0gZnJvbSAnLi4vbGliJztcbmV4cG9ydCBmdW5jdGlvbiBIaUFjYWRlbWljQ2FwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEwLjM5NCAyLjA4YTEgMSAwIDAwLS43ODggMGwtNyAzYTEgMSAwIDAwMCAxLjg0TDUuMjUgOC4wNTFhLjk5OS45OTkgMCAwMS4zNTYtLjI1N2w0LTEuNzE0YTEgMSAwIDExLjc4OCAxLjgzOEw3LjY2NyA5LjA4OGwxLjk0LjgzMWExIDEgMCAwMC43ODcgMGw3LTNhMSAxIDAgMDAwLTEuODM4bC03LTN6TTMuMzEgOS4zOTdMNSAxMC4xMnY0LjEwMmE4Ljk2OSA4Ljk2OSAwIDAwLTEuMDUtLjE3NCAxIDEgMCAwMS0uODktLjg5IDExLjExNSAxMS4xMTUgMCAwMS4yNS0zLjc2MnpNOS4zIDE2LjU3M0E5LjAyNiA5LjAyNiAwIDAwNyAxNC45MzV2LTMuOTU3bDEuODE4Ljc4YTMgMyAwIDAwMi4zNjQgMGw1LjUwOC0yLjM2MWExMS4wMjYgMTEuMDI2IDAgMDEuMjUgMy43NjIgMSAxIDAgMDEtLjg5Ljg5IDguOTY4IDguOTY4IDAgMDAtNS4zNSAyLjUyNCAxIDEgMCAwMS0xLjQgMHpNNiAxOGExIDEgMCAwMDEtMXYtMi4wNjVhOC45MzUgOC45MzUgMCAwMC0yLS43MTJWMTdhMSAxIDAgMDAxIDF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQWRqdXN0bWVudHMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNSA0YTEgMSAwIDAwLTIgMHY3LjI2OGEyIDIgMCAwMDAgMy40NjRWMTZhMSAxIDAgMTAyIDB2LTEuMjY4YTIgMiAwIDAwMC0zLjQ2NFY0ek0xMSA0YTEgMSAwIDEwLTIgMHYxLjI2OGEyIDIgMCAwMDAgMy40NjRWMTZhMSAxIDAgMTAyIDBWOC43MzJhMiAyIDAgMDAwLTMuNDY0VjR6TTE2IDNhMSAxIDAgMDExIDF2Ny4yNjhhMiAyIDAgMDEwIDMuNDY0VjE2YTEgMSAwIDExLTIgMHYtMS4yNjhhMiAyIDAgMDEwLTMuNDY0VjRhMSAxIDAgMDExLTF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQW5ub3RhdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTggMTNWNWEyIDIgMCAwMC0yLTJINGEyIDIgMCAwMC0yIDJ2OGEyIDIgMCAwMDIgMmgzbDMgMyAzLTNoM2EyIDIgMCAwMDItMnpNNSA3YTEgMSAwIDAxMS0xaDhhMSAxIDAgMTEwIDJINmExIDEgMCAwMS0xLTF6bTEgM2ExIDEgMCAxMDAgMmgzYTEgMSAwIDEwMC0ySDZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFyY2hpdmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNCAzYTIgMiAwIDEwMCA0aDEyYTIgMiAwIDEwMC00SDR6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgOGgxNHY3YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMlY4em01IDNhMSAxIDAgMDExLTFoMmExIDEgMCAxMTAgMkg5YTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXJyb3dDaXJjbGVEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2em0xLTExYTEgMSAwIDEwLTIgMHYzLjU4Nkw3LjcwNyA5LjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwzIDNhMSAxIDAgMDAxLjQxNCAwbDMtM2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxMSAxMC41ODZWN3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXJyb3dDaXJjbGVMZWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2em0uNzA3LTEwLjI5M2ExIDEgMCAwMC0xLjQxNC0xLjQxNGwtMyAzYTEgMSAwIDAwMCAxLjQxNGwzIDNhMSAxIDAgMDAxLjQxNC0xLjQxNEw5LjQxNCAxMUgxM2ExIDEgMCAxMDAtMkg5LjQxNGwxLjI5My0xLjI5M3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXJyb3dDaXJjbGVSaWdodCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMy43MDctOC43MDdsLTMtM2ExIDEgMCAwMC0xLjQxNCAxLjQxNEwxMC41ODYgOUg3YTEgMSAwIDEwMCAyaDMuNTg2bC0xLjI5MyAxLjI5M2ExIDEgMCAxMDEuNDE0IDEuNDE0bDMtM2ExIDEgMCAwMDAtMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93Q2lyY2xlVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6bTMuNzA3LTguNzA3bC0zLTNhMSAxIDAgMDAtMS40MTQgMGwtMyAzYTEgMSAwIDAwMS40MTQgMS40MTRMOSA5LjQxNFYxM2ExIDEgMCAxMDIgMFY5LjQxNGwxLjI5MyAxLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd0Rvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE2LjcwNyAxMC4yOTNhMSAxIDAgMDEwIDEuNDE0bC02IDZhMSAxIDAgMDEtMS40MTQgMGwtNi02YTEgMSAwIDExMS40MTQtMS40MTRMOSAxNC41ODZWM2ExIDEgMCAwMTIgMHYxMS41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMDExLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd0xlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkuNzA3IDE2LjcwN2ExIDEgMCAwMS0xLjQxNCAwbC02LTZhMSAxIDAgMDEwLTEuNDE0bDYtNmExIDEgMCAwMTEuNDE0IDEuNDE0TDUuNDE0IDlIMTdhMSAxIDAgMTEwIDJINS40MTRsNC4yOTMgNC4yOTNhMSAxIDAgMDEwIDEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd05hcnJvd0Rvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE0LjcwNyAxMi4yOTNhMSAxIDAgMDEwIDEuNDE0bC00IDRhMSAxIDAgMDEtMS40MTQgMGwtNC00YTEgMSAwIDExMS40MTQtMS40MTRMOSAxNC41ODZWM2ExIDEgMCAwMTIgMHYxMS41ODZsMi4yOTMtMi4yOTNhMSAxIDAgMDExLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd05hcnJvd0xlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcuNzA3IDE0LjcwN2ExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMDEwLTEuNDE0bDQtNGExIDEgMCAwMTEuNDE0IDEuNDE0TDUuNDE0IDlIMTdhMSAxIDAgMTEwIDJINS40MTRsMi4yOTMgMi4yOTNhMSAxIDAgMDEwIDEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd05hcnJvd1JpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMi4yOTMgNS4yOTNhMSAxIDAgMDExLjQxNCAwbDQgNGExIDEgMCAwMTAgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNC0xLjQxNEwxNC41ODYgMTFIM2ExIDEgMCAxMTAtMmgxMS41ODZsLTIuMjkzLTIuMjkzYTEgMSAwIDAxMC0xLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXJyb3dOYXJyb3dVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNS4yOTMgNy43MDdhMSAxIDAgMDEwLTEuNDE0bDQtNGExIDEgMCAwMTEuNDE0IDBsNCA0YTEgMSAwIDAxLTEuNDE0IDEuNDE0TDExIDUuNDE0VjE3YTEgMSAwIDExLTIgMFY1LjQxNEw2LjcwNyA3LjcwN2ExIDEgMCAwMS0xLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd1JpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMC4yOTMgMy4yOTNhMSAxIDAgMDExLjQxNCAwbDYgNmExIDEgMCAwMTAgMS40MTRsLTYgNmExIDEgMCAwMS0xLjQxNC0xLjQxNEwxNC41ODYgMTFIM2ExIDEgMCAxMTAtMmgxMS41ODZsLTQuMjkzLTQuMjkzYTEgMSAwIDAxMC0xLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXJyb3dTbURvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE0LjcwNyAxMC4yOTNhMSAxIDAgMDEwIDEuNDE0bC00IDRhMSAxIDAgMDEtMS40MTQgMGwtNC00YTEgMSAwIDExMS40MTQtMS40MTRMOSAxMi41ODZWNWExIDEgMCAwMTIgMHY3LjU4NmwyLjI5My0yLjI5M2ExIDEgMCAwMTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93U21MZWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk05LjcwNyAxNC43MDdhMSAxIDAgMDEtMS40MTQgMGwtNC00YTEgMSAwIDAxMC0xLjQxNGw0LTRhMSAxIDAgMDExLjQxNCAxLjQxNEw3LjQxNCA5SDE1YTEgMSAwIDExMCAySDcuNDE0bDIuMjkzIDIuMjkzYTEgMSAwIDAxMCAxLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXJyb3dTbVJpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMC4yOTMgNS4yOTNhMSAxIDAgMDExLjQxNCAwbDQgNGExIDEgMCAwMTAgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNC0xLjQxNEwxMi41ODYgMTFINWExIDEgMCAxMTAtMmg3LjU4NmwtMi4yOTMtMi4yOTNhMSAxIDAgMDEwLTEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd1NtVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUuMjkzIDkuNzA3YTEgMSAwIDAxMC0xLjQxNGw0LTRhMSAxIDAgMDExLjQxNCAwbDQgNGExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMSA3LjQxNFYxNWExIDEgMCAxMS0yIDBWNy40MTRMNi43MDcgOS43MDdhMSAxIDAgMDEtMS40MTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXJyb3dVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMy4yOTMgOS43MDdhMSAxIDAgMDEwLTEuNDE0bDYtNmExIDEgMCAwMTEuNDE0IDBsNiA2YTEgMSAwIDAxLTEuNDE0IDEuNDE0TDExIDUuNDE0VjE3YTEgMSAwIDExLTIgMFY1LjQxNEw0LjcwNyA5LjcwN2ExIDEgMCAwMS0xLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd3NFeHBhbmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDE5IDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgOFY0bTAgMGg0TTMgNGw0IDRtOCAwVjRtMCAwaC00bTQgMGwtNCA0bS04IDR2NG0wIDBoNG0tNCAwbDQtNG04IDRsLTQtNG00IDR2LTRtMCA0aC00XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXRTeW1ib2wgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE0LjI0MyA1Ljc1N2E2IDYgMCAxMC0uOTg2IDkuMjg0IDEgMSAwIDExMS4wODcgMS42NzhBOCA4IDAgMTExOCAxMGEzIDMgMCAwMS00LjggMi40MDFBNCA0IDAgMTExNCAxMGExIDEgMCAxMDIgMGMwLTEuNTM3LS41ODYtMy4wNy0xLjc1Ny00LjI0M3pNMTIgMTBhMiAyIDAgMTAtNCAwIDIgMiAwIDAwNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlCYWNrc3BhY2UgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYuNzA3IDQuODc5QTMgMyAwIDAxOC44MjggNEgxNWEzIDMgMCAwMTMgM3Y2YTMgMyAwIDAxLTMgM0g4LjgyOGEzIDMgMCAwMS0yLjEyLS44NzlsLTQuNDE1LTQuNDE0YTEgMSAwIDAxMC0xLjQxNGw0LjQxNC00LjQxNHptNCAyLjQxNGExIDEgMCAwMC0xLjQxNCAxLjQxNEwxMC41ODYgMTBsLTEuMjkzIDEuMjkzYTEgMSAwIDEwMS40MTQgMS40MTRMMTIgMTEuNDE0bDEuMjkzIDEuMjkzYTEgMSAwIDAwMS40MTQtMS40MTRMMTMuNDE0IDEwbDEuMjkzLTEuMjkzYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDEyIDguNTg2bC0xLjI5My0xLjI5M3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQmFkZ2VDaGVjayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNi4yNjcgMy40NTVhMy4wNjYgMy4wNjYgMCAwMDEuNzQ1LS43MjMgMy4wNjYgMy4wNjYgMCAwMTMuOTc2IDAgMy4wNjYgMy4wNjYgMCAwMDEuNzQ1LjcyMyAzLjA2NiAzLjA2NiAwIDAxMi44MTIgMi44MTJjLjA1MS42NDMuMzA0IDEuMjU0LjcyMyAxLjc0NWEzLjA2NiAzLjA2NiAwIDAxMCAzLjk3NiAzLjA2NiAzLjA2NiAwIDAwLS43MjMgMS43NDUgMy4wNjYgMy4wNjYgMCAwMS0yLjgxMiAyLjgxMiAzLjA2NiAzLjA2NiAwIDAwLTEuNzQ1LjcyMyAzLjA2NiAzLjA2NiAwIDAxLTMuOTc2IDAgMy4wNjYgMy4wNjYgMCAwMC0xLjc0NS0uNzIzIDMuMDY2IDMuMDY2IDAgMDEtMi44MTItMi44MTIgMy4wNjYgMy4wNjYgMCAwMC0uNzIzLTEuNzQ1IDMuMDY2IDMuMDY2IDAgMDEwLTMuOTc2IDMuMDY2IDMuMDY2IDAgMDAuNzIzLTEuNzQ1IDMuMDY2IDMuMDY2IDAgMDEyLjgxMi0yLjgxMnptNy40NCA1LjI1MmExIDEgMCAwMC0xLjQxNC0xLjQxNEw5IDEwLjU4NiA3LjcwNyA5LjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwyIDJhMSAxIDAgMDAxLjQxNCAwbDQtNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQmFuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMy40NzcgMTQuODlBNiA2IDAgMDE1LjExIDYuNTI0bDguMzY3IDguMzY4em0xLjQxNC0xLjQxNEw2LjUyNCA1LjExYTYgNiAwIDAxOC4zNjcgOC4zNjd6TTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlCZWFrZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcgMmExIDEgMCAwMC0uNzA3IDEuNzA3TDcgNC40MTR2My43NThhMSAxIDAgMDEtLjI5My43MDdsLTQgNEMuODE3IDE0Ljc2OSAyLjE1NiAxOCA0LjgyOCAxOGgxMC4zNDNjMi42NzMgMCA0LjAxMi0zLjIzMSAyLjEyMi01LjEyMWwtNC00QTEgMSAwIDAxMTMgOC4xNzJWNC40MTRsLjcwNy0uNzA3QTEgMSAwIDAwMTMgMkg3em0yIDYuMTcyVjRoMnY0LjE3MmEzIDMgMCAwMC44NzkgMi4xMmwxLjAyNyAxLjAyOGE0IDQgMCAwMC0yLjE3MS4xMDJsLS40Ny4xNTZhNCA0IDAgMDEtMi41MyAwbC0uNTYzLS4xODdhMS45OTMgMS45OTMgMCAwMC0uMTE0LS4wMzVsMS4wNjMtMS4wNjNBMyAzIDAgMDA5IDguMTcyelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlCZWxsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEwIDJhNiA2IDAgMDAtNiA2djMuNTg2bC0uNzA3LjcwN0ExIDEgMCAwMDQgMTRoMTJhMSAxIDAgMDAuNzA3LTEuNzA3TDE2IDExLjU4NlY4YTYgNiAwIDAwLTYtNnpNMTAgMThhMyAzIDAgMDEtMy0zaDZhMyAzIDAgMDEtMyAzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUJvb2tPcGVuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTkgNC44MDRBNy45NjggNy45NjggMCAwMDUuNSA0Yy0xLjI1NSAwLTIuNDQzLjI5LTMuNS44MDR2MTBBNy45NjkgNy45NjkgMCAwMTUuNSAxNGMxLjY2OSAwIDMuMjE4LjUxIDQuNSAxLjM4NUE3Ljk2MiA3Ljk2MiAwIDAxMTQuNSAxNGMxLjI1NSAwIDIuNDQzLjI5IDMuNS44MDR2LTEwQTcuOTY4IDcuOTY4IDAgMDAxNC41IDRjLTEuMjU1IDAtMi40NDMuMjktMy41LjgwNFYxMmExIDEgMCAxMS0yIDBWNC44MDR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQm9va21hcmtBbHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgNWEyIDIgMCAwMTItMmgxMGEyIDIgMCAwMTIgMnYxMGEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJWNXptMTEgMUg2djhsNC0yIDQgMlY2elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlCb29rbWFyayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk01IDRhMiAyIDAgMDEyLTJoNmEyIDIgMCAwMTIgMnYxNGwtNS0yLjVMNSAxOFY0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUJyaWVmY2FzZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiA2VjVhMyAzIDAgMDEzLTNoMmEzIDMgMCAwMTMgM3YxaDJhMiAyIDAgMDEyIDJ2My41N0EyMi45NTIgMjIuOTUyIDAgMDExMCAxM2EyMi45NSAyMi45NSAwIDAxLTgtMS40M1Y4YTIgMiAwIDAxMi0yaDJ6bTItMWExIDEgMCAwMTEtMWgyYTEgMSAwIDAxMSAxdjFIOFY1em0xIDVhMSAxIDAgMDExLTFoLjAxYTEgMSAwIDExMCAySDEwYTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiAxMy42OTJWMTZhMiAyIDAgMDAyIDJoMTJhMiAyIDAgMDAyLTJ2LTIuMzA4QTI0Ljk3NCAyNC45NzQgMCAwMTEwIDE1Yy0yLjc5NiAwLTUuNDg3LS40Ni04LTEuMzA4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNha2UgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgM2ExIDEgMCAwMTEtMWguMDFhMSAxIDAgMDEwIDJIN2ExIDEgMCAwMS0xLTF6bTIgM2ExIDEgMCAwMC0yIDB2MWEyIDIgMCAwMC0yIDJ2MWEyIDIgMCAwMC0yIDJ2LjY4M2EzLjcgMy43IDAgMDExLjA1NS40ODUgMS43MDQgMS43MDQgMCAwMDEuODkgMCAzLjcwNCAzLjcwNCAwIDAxNC4xMSAwIDEuNzA0IDEuNzA0IDAgMDAxLjg5IDAgMy43MDQgMy43MDQgMCAwMTQuMTEgMCAxLjcwNCAxLjcwNCAwIDAwMS44OSAwQTMuNyAzLjcgMCAwMTE4IDEyLjY4M1YxMmEyIDIgMCAwMC0yLTJWOWEyIDIgMCAwMC0yLTJWNmExIDEgMCAxMC0yIDB2MWgtMVY2YTEgMSAwIDEwLTIgMHYxSDhWNnptMTAgOC44NjhhMy43MDQgMy43MDQgMCAwMS00LjA1NS0uMDM2IDEuNzA0IDEuNzA0IDAgMDAtMS44OSAwIDMuNzA0IDMuNzA0IDAgMDEtNC4xMSAwIDEuNzA0IDEuNzA0IDAgMDAtMS44OSAwQTMuNzA0IDMuNzA0IDAgMDEyIDE0Ljg2OFYxN2ExIDEgMCAwMDEgMWgxNGExIDEgMCAwMDEtMXYtMi4xMzJ6TTkgM2ExIDEgMCAwMTEtMWguMDFhMSAxIDAgMTEwIDJIMTBhMSAxIDAgMDEtMS0xem0zIDBhMSAxIDAgMDExLTFoLjAxYTEgMSAwIDExMCAySDEzYTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2FsY3VsYXRvciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiAyYTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0yVjRhMiAyIDAgMDAtMi0ySDZ6bTEgMmExIDEgMCAwMDAgMmg2YTEgMSAwIDEwMC0ySDd6bTYgN2ExIDEgMCAwMTEgMXYzYTEgMSAwIDExLTIgMHYtM2ExIDEgMCAwMTEtMXptLTMgM2ExIDEgMCAxMDAgMmguMDFhMSAxIDAgMTAwLTJIMTB6bS00IDFhMSAxIDAgMDExLTFoLjAxYTEgMSAwIDExMCAySDdhMSAxIDAgMDEtMS0xem0xLTRhMSAxIDAgMTAwIDJoLjAxYTEgMSAwIDEwMC0ySDd6bTIgMWExIDEgMCAwMTEtMWguMDFhMSAxIDAgMTEwIDJIMTBhMSAxIDAgMDEtMS0xem00LTRhMSAxIDAgMTAwIDJoLjAxYTEgMSAwIDEwMC0ySDEzek05IDlhMSAxIDAgMDExLTFoLjAxYTEgMSAwIDExMCAySDEwYTEgMSAwIDAxLTEtMXpNNyA4YTEgMSAwIDAwMCAyaC4wMWExIDEgMCAwMDAtMkg3elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDYWxlbmRhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiAyYTEgMSAwIDAwLTEgMXYxSDRhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDEyYTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0yaC0xVjNhMSAxIDAgMTAtMiAwdjFIN1YzYTEgMSAwIDAwLTEtMXptMCA1YTEgMSAwIDAwMCAyaDhhMSAxIDAgMTAwLTJINnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2FtZXJhIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDVhMiAyIDAgMDAtMiAydjhhMiAyIDAgMDAyIDJoMTJhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJoLTEuNTg2YTEgMSAwIDAxLS43MDctLjI5M2wtMS4xMjEtMS4xMjFBMiAyIDAgMDAxMS4xNzIgM0g4LjgyOGEyIDIgMCAwMC0xLjQxNC41ODZMNi4yOTMgNC43MDdBMSAxIDAgMDE1LjU4NiA1SDR6bTYgOWEzIDMgMCAxMDAtNiAzIDMgMCAwMDAgNnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2FzaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCA0YTIgMiAwIDAwLTIgMnY0YTIgMiAwIDAwMiAyVjZoMTBhMiAyIDAgMDAtMi0ySDR6bTIgNmEyIDIgMCAwMTItMmg4YTIgMiAwIDAxMiAydjRhMiAyIDAgMDEtMiAySDhhMiAyIDAgMDEtMi0ydi00em02IDRhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoYXJ0QmFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgMTFhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXY1YTEgMSAwIDAxLTEgMUgzYTEgMSAwIDAxLTEtMXYtNXpNOCA3YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2OWExIDEgMCAwMS0xIDFIOWExIDEgMCAwMS0xLTFWN3pNMTQgNGExIDEgMCAwMTEtMWgyYTEgMSAwIDAxMSAxdjEyYTEgMSAwIDAxLTEgMWgtMmExIDEgMCAwMS0xLTFWNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGFydFBpZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDEwYTggOCAwIDAxOC04djhoOGE4IDggMCAxMS0xNiAwelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEyIDIuMjUyQTguMDE0IDguMDE0IDAgMDExNy43NDggOEgxMlYyLjI1MnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGFydFNxdWFyZUJhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNSAzYTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg1em05IDRhMSAxIDAgMTAtMiAwdjZhMSAxIDAgMTAyIDBWN3ptLTMgMmExIDEgMCAxMC0yIDB2NGExIDEgMCAxMDIgMFY5em0tMyAzYTEgMSAwIDEwLTIgMHYxYTEgMSAwIDEwMiAwdi0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGF0QWx0MiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDVhMiAyIDAgMDEyLTJoN2EyIDIgMCAwMTIgMnY0YTIgMiAwIDAxLTIgMkg5bC0zIDN2LTNINGEyIDIgMCAwMS0yLTJWNXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xNSA3djJhNCA0IDAgMDEtNCA0SDkuODI4bC0xLjc2NiAxLjc2N2MuMjguMTQ5LjU5OS4yMzMuOTM4LjIzM2gybDMgM3YtM2gyYTIgMiAwIDAwMi0yVjlhMiAyIDAgMDAtMi0yaC0xelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoYXRBbHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE4IDV2OGEyIDIgMCAwMS0yIDJoLTVsLTUgNHYtNEg0YTIgMiAwIDAxLTItMlY1YTIgMiAwIDAxMi0yaDEyYTIgMiAwIDAxMiAyek03IDhINXYyaDJWOHptMiAwaDJ2Mkg5Vjh6bTYgMGgtMnYyaDJWOHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hhdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTggMTBjMCAzLjg2Ni0zLjU4MiA3LTggN2E4Ljg0MSA4Ljg0MSAwIDAxLTQuMDgzLS45OEwyIDE3bDEuMzM4LTMuMTIzQzIuNDkzIDEyLjc2NyAyIDExLjQzNCAyIDEwYzAtMy44NjYgMy41ODItNyA4LTdzOCAzLjEzNCA4IDd6TTcgOUg1djJoMlY5em04IDBoLTJ2MmgyVjl6TTkgOWgydjJIOVY5elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGVja0NpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMy43MDctOS4yOTNhMSAxIDAgMDAtMS40MTQtMS40MTRMOSAxMC41ODYgNy43MDcgOS4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMiAyYTEgMSAwIDAwMS40MTQgMGw0LTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoZWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNi43MDcgNS4yOTNhMSAxIDAgMDEwIDEuNDE0bC04IDhhMSAxIDAgMDEtMS40MTQgMGwtNC00YTEgMSAwIDAxMS40MTQtMS40MTRMOCAxMi41ODZsNy4yOTMtNy4yOTNhMSAxIDAgMDExLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGV2cm9uRG91YmxlRG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTUuNzA3IDQuMjkzYTEgMSAwIDAxMCAxLjQxNGwtNSA1YTEgMSAwIDAxLTEuNDE0IDBsLTUtNWExIDEgMCAwMTEuNDE0LTEuNDE0TDEwIDguNTg2bDQuMjkzLTQuMjkzYTEgMSAwIDAxMS40MTQgMHptMCA2YTEgMSAwIDAxMCAxLjQxNGwtNSA1YTEgMSAwIDAxLTEuNDE0IDBsLTUtNWExIDEgMCAxMTEuNDE0LTEuNDE0TDEwIDE0LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAwMTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoZXZyb25Eb3VibGVMZWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNS43MDcgMTUuNzA3YTEgMSAwIDAxLTEuNDE0IDBsLTUtNWExIDEgMCAwMTAtMS40MTRsNS01YTEgMSAwIDExMS40MTQgMS40MTRMMTEuNDE0IDEwbDQuMjkzIDQuMjkzYTEgMSAwIDAxMCAxLjQxNHptLTYgMGExIDEgMCAwMS0xLjQxNCAwbC01LTVhMSAxIDAgMDEwLTEuNDE0bDUtNWExIDEgMCAwMTEuNDE0IDEuNDE0TDUuNDE0IDEwbDQuMjkzIDQuMjkzYTEgMSAwIDAxMCAxLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hldnJvbkRvdWJsZVJpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMC4yOTMgMTUuNzA3YTEgMSAwIDAxMC0xLjQxNEwxNC41ODYgMTBsLTQuMjkzLTQuMjkzYTEgMSAwIDExMS40MTQtMS40MTRsNSA1YTEgMSAwIDAxMCAxLjQxNGwtNSA1YTEgMSAwIDAxLTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00LjI5MyAxNS43MDdhMSAxIDAgMDEwLTEuNDE0TDguNTg2IDEwIDQuMjkzIDUuNzA3YTEgMSAwIDAxMS40MTQtMS40MTRsNSA1YTEgMSAwIDAxMCAxLjQxNGwtNSA1YTEgMSAwIDAxLTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoZXZyb25Eb3VibGVVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNC4yOTMgMTUuNzA3YTEgMSAwIDAxMC0xLjQxNGw1LTVhMSAxIDAgMDExLjQxNCAwbDUgNWExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCAxMS40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0IDB6bTAtNmExIDEgMCAwMTAtMS40MTRsNS01YTEgMSAwIDAxMS40MTQgMGw1IDVhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgNS40MTQgNS43MDcgOS43MDdhMSAxIDAgMDEtMS40MTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hldnJvbkRvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUuMjkzIDcuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCAxMC41ODZsMy4yOTMtMy4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0IDBsLTQtNGExIDEgMCAwMTAtMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoZXZyb25MZWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMi43MDcgNS4yOTNhMSAxIDAgMDEwIDEuNDE0TDkuNDE0IDEwbDMuMjkzIDMuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0bC00LTRhMSAxIDAgMDEwLTEuNDE0bDQtNGExIDEgMCAwMTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoZXZyb25SaWdodCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNy4yOTMgMTQuNzA3YTEgMSAwIDAxMC0xLjQxNEwxMC41ODYgMTAgNy4yOTMgNi43MDdhMSAxIDAgMDExLjQxNC0xLjQxNGw0IDRhMSAxIDAgMDEwIDEuNDE0bC00IDRhMSAxIDAgMDEtMS40MTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hldnJvblVwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNC43MDcgMTIuNzA3YTEgMSAwIDAxLTEuNDE0IDBMMTAgOS40MTRsLTMuMjkzIDMuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0bDQtNGExIDEgMCAwMTEuNDE0IDBsNCA0YTEgMSAwIDAxMCAxLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hpcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMyA3SDd2Nmg2Vjd6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcgMmExIDEgMCAwMTIgMHYxaDJWMmExIDEgMCAxMTIgMHYxaDJhMiAyIDAgMDEyIDJ2MmgxYTEgMSAwIDExMCAyaC0xdjJoMWExIDEgMCAxMTAgMmgtMXYyYTIgMiAwIDAxLTIgMmgtMnYxYTEgMSAwIDExLTIgMHYtMUg5djFhMSAxIDAgMTEtMiAwdi0xSDVhMiAyIDAgMDEtMi0ydi0ySDJhMSAxIDAgMTEwLTJoMVY5SDJhMSAxIDAgMDEwLTJoMVY1YTIgMiAwIDAxMi0yaDJWMnpNNSA1aDEwdjEwSDVWNXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2xpcGJvYXJkQ2hlY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOSAyYTEgMSAwIDAwMCAyaDJhMSAxIDAgMTAwLTJIOXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCA1YTIgMiAwIDAxMi0yIDMgMyAwIDAwMyAzaDJhMyAzIDAgMDAzLTMgMiAyIDAgMDEyIDJ2MTFhMiAyIDAgMDEtMiAySDZhMiAyIDAgMDEtMi0yVjV6bTkuNzA3IDUuNzA3YTEgMSAwIDAwLTEuNDE0LTEuNDE0TDkgMTIuNTg2bC0xLjI5My0xLjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwyIDJhMSAxIDAgMDAxLjQxNCAwbDQtNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2xpcGJvYXJkQ29weSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk04IDJhMSAxIDAgMDAwIDJoMmExIDEgMCAxMDAtMkg4elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTMgNWEyIDIgMCAwMTItMiAzIDMgMCAwMDMgM2gyYTMgMyAwIDAwMy0zIDIgMiAwIDAxMiAydjZoLTQuNTg2bDEuMjkzLTEuMjkzYTEgMSAwIDAwLTEuNDE0LTEuNDE0bC0zIDNhMSAxIDAgMDAwIDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0LTEuNDE0TDEwLjQxNCAxM0gxNXYzYTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMlY1ek0xNSAxMWgyYTEgMSAwIDExMCAyaC0ydi0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNsaXBib2FyZExpc3QgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOSAyYTEgMSAwIDAwMCAyaDJhMSAxIDAgMTAwLTJIOXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCA1YTIgMiAwIDAxMi0yIDMgMyAwIDAwMyAzaDJhMyAzIDAgMDAzLTMgMiAyIDAgMDEyIDJ2MTFhMiAyIDAgMDEtMiAySDZhMiAyIDAgMDEtMi0yVjV6bTMgNGExIDEgMCAwMDAgMmguMDFhMSAxIDAgMTAwLTJIN3ptMyAwYTEgMSAwIDAwMCAyaDNhMSAxIDAgMTAwLTJoLTN6bS0zIDRhMSAxIDAgMTAwIDJoLjAxYTEgMSAwIDEwMC0ySDd6bTMgMGExIDEgMCAxMDAgMmgzYTEgMSAwIDEwMC0yaC0zelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDbGlwYm9hcmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOCAzYTEgMSAwIDAxMS0xaDJhMSAxIDAgMTEwIDJIOWExIDEgMCAwMS0xLTF6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNiAzYTIgMiAwIDAwLTIgMnYxMWEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0yIDMgMyAwIDAxLTMgM0g5YTMgMyAwIDAxLTMtM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDbG9jayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMS0xMmExIDEgMCAxMC0yIDB2NGExIDEgMCAwMC4yOTMuNzA3bDIuODI4IDIuODI5YTEgMSAwIDEwMS40MTUtMS40MTVMMTEgOS41ODZWNnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2xvdWREb3dubG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMiA5LjVBMy41IDMuNSAwIDAwNS41IDEzSDl2Mi41ODZsLTEuMjkzLTEuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0IDBsMy0zYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDExIDE1LjU4NlYxM2gyLjVhNC41IDQuNSAwIDEwLS42MTYtOC45NTggNC4wMDIgNC4wMDIgMCAxMC03Ljc1MyAxLjk3N0EzLjUgMy41IDAgMDAyIDkuNXptOSAzLjVIOVY4YTEgMSAwIDAxMiAwdjV6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNsb3VkVXBsb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTUuNSAxM2EzLjUgMy41IDAgMDEtLjM2OS02Ljk4IDQgNCAwIDExNy43NTMtMS45NzdBNC41IDQuNSAwIDExMTMuNSAxM0gxMVY5LjQxM2wxLjI5MyAxLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0bC0zLTNhMSAxIDAgMDAtMS40MTQgMGwtMyAzYTEgMSAwIDAwMS40MTQgMS40MTRMOSA5LjQxNFYxM0g1LjV6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOSAxM2gydjVhMSAxIDAgMTEtMiAwdi01elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNsb3VkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTUuNSAxNmEzLjUgMy41IDAgMDEtLjM2OS02Ljk4IDQgNCAwIDExNy43NTMtMS45NzdBNC41IDQuNSAwIDExMTMuNSAxNmgtOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDb2RlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMi4zMTYgMy4wNTFhMSAxIDAgMDEuNjMzIDEuMjY1bC00IDEyYTEgMSAwIDExLTEuODk4LS42MzJsNC0xMmExIDEgMCAwMTEuMjY1LS42MzN6TTUuNzA3IDYuMjkzYTEgMSAwIDAxMCAxLjQxNEwzLjQxNCAxMGwyLjI5MyAyLjI5M2ExIDEgMCAxMS0xLjQxNCAxLjQxNGwtMy0zYTEgMSAwIDAxMC0xLjQxNGwzLTNhMSAxIDAgMDExLjQxNCAwem04LjU4NiAwYTEgMSAwIDAxMS40MTQgMGwzIDNhMSAxIDAgMDEwIDEuNDE0bC0zIDNhMSAxIDAgMTEtMS40MTQtMS40MTRMMTYuNTg2IDEwbC0yLjI5My0yLjI5M2ExIDEgMCAwMTAtMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNvZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTEuNDkgMy4xN2MtLjM4LTEuNTYtMi42LTEuNTYtMi45OCAwYTEuNTMyIDEuNTMyIDAgMDEtMi4yODYuOTQ4Yy0xLjM3Mi0uODM2LTIuOTQyLjczNC0yLjEwNiAyLjEwNi41NC44ODYuMDYxIDIuMDQyLS45NDcgMi4yODctMS41NjEuMzc5LTEuNTYxIDIuNiAwIDIuOTc4YTEuNTMyIDEuNTMyIDAgMDEuOTQ3IDIuMjg3Yy0uODM2IDEuMzcyLjczNCAyLjk0MiAyLjEwNiAyLjEwNmExLjUzMiAxLjUzMiAwIDAxMi4yODcuOTQ3Yy4zNzkgMS41NjEgMi42IDEuNTYxIDIuOTc4IDBhMS41MzMgMS41MzMgMCAwMTIuMjg3LS45NDdjMS4zNzIuODM2IDIuOTQyLS43MzQgMi4xMDYtMi4xMDZhMS41MzMgMS41MzMgMCAwMS45NDctMi4yODdjMS41NjEtLjM3OSAxLjU2MS0yLjYgMC0yLjk3OGExLjUzMiAxLjUzMiAwIDAxLS45NDctMi4yODdjLjgzNi0xLjM3Mi0uNzM0LTIuOTQyLTIuMTA2LTIuMTA2YTEuNTMyIDEuNTMyIDAgMDEtMi4yODctLjk0N3pNMTAgMTNhMyAzIDAgMTAwLTYgMyAzIDAgMDAwIDZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNvbGxlY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNyAzYTEgMSAwIDAwMCAyaDZhMSAxIDAgMTAwLTJIN3pNNCA3YTEgMSAwIDAxMS0xaDEwYTEgMSAwIDExMCAySDVhMSAxIDAgMDEtMS0xek0yIDExYTIgMiAwIDAxMi0yaDEyYTIgMiAwIDAxMiAydjRhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0ydi00elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNvbG9yU3dhdGNoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDJhMiAyIDAgMDAtMiAydjExYTMgMyAwIDEwNiAwVjRhMiAyIDAgMDAtMi0ySDR6bTEgMTRhMSAxIDAgMTAwLTIgMSAxIDAgMDAwIDJ6bTUtMS43NTdsNC45LTQuOWEyIDIgMCAwMDAtMi44MjhMMTMuNDg1IDUuMWEyIDIgMCAwMC0yLjgyOCAwTDEwIDUuNzU3djguNDg2ek0xNiAxOEg5LjA3MWw2LTZIMTZhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNyZWRpdENhcmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNCA0YTIgMiAwIDAwLTIgMnYxaDE2VjZhMiAyIDAgMDAtMi0ySDR6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE4IDlIMnY1YTIgMiAwIDAwMiAyaDEyYTIgMiAwIDAwMi0yVjl6TTQgMTNhMSAxIDAgMDExLTFoMWExIDEgMCAxMTAgMkg1YTEgMSAwIDAxLTEtMXptNS0xYTEgMSAwIDEwMCAyaDFhMSAxIDAgMTAwLTJIOXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ3ViZVRyYW5zcGFyZW50IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk05LjUwNCAxLjEzMmExIDEgMCAwMS45OTIgMGwxLjc1IDFhMSAxIDAgMTEtLjk5MiAxLjczNkwxMCAzLjE1MmwtMS4yNTQuNzE2YTEgMSAwIDExLS45OTItMS43MzZsMS43NS0xek01LjYxOCA0LjUwNGExIDEgMCAwMS0uMzcyIDEuMzY0TDUuMDE2IDZsLjIzLjEzMmExIDEgMCAxMS0uOTkyIDEuNzM2TDQgNy43MjNWOGExIDEgMCAwMS0yIDBWNmEuOTk2Ljk5NiAwIDAxLjUyLS44NzhsMS43MzQtLjk5YTEgMSAwIDAxMS4zNjQuMzcyem04Ljc2NCAwYTEgMSAwIDAxMS4zNjQtLjM3MmwxLjczMy45OUExLjAwMiAxLjAwMiAwIDAxMTggNnYyYTEgMSAwIDExLTIgMHYtLjI3N2wtLjI1NC4xNDVhMSAxIDAgMTEtLjk5Mi0xLjczNmwuMjMtLjEzMi0uMjMtLjEzMmExIDEgMCAwMS0uMzcyLTEuMzY0em0tNyA0YTEgMSAwIDAxMS4zNjQtLjM3MkwxMCA4Ljg0OGwxLjI1NC0uNzE2YTEgMSAwIDExLjk5MiAxLjczNkwxMSAxMC41OFYxMmExIDEgMCAxMS0yIDB2LTEuNDJsLTEuMjQ2LS43MTJhMSAxIDAgMDEtLjM3Mi0xLjM2NHpNMyAxMWExIDEgMCAwMTEgMXYxLjQybDEuMjQ2LjcxMmExIDEgMCAxMS0uOTkyIDEuNzM2bC0xLjc1LTFBMSAxIDAgMDEyIDE0di0yYTEgMSAwIDAxMS0xem0xNCAwYTEgMSAwIDAxMSAxdjJhMSAxIDAgMDEtLjUwNC44NjhsLTEuNzUgMWExIDEgMCAxMS0uOTkyLTEuNzM2TDE2IDEzLjQyVjEyYTEgMSAwIDAxMS0xem0tOS42MTggNS41MDRhMSAxIDAgMDExLjM2NC0uMzcybC4yNTQuMTQ1VjE2YTEgMSAwIDExMiAwdi4yNzdsLjI1NC0uMTQ1YTEgMSAwIDExLjk5MiAxLjczNmwtMS43MzUuOTkyYS45OTUuOTk1IDAgMDEtMS4wMjIgMGwtMS43MzUtLjk5MmExIDEgMCAwMS0uMzcyLTEuMzY0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDdWJlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTExIDE3YTEgMSAwIDAwMS40NDcuODk0bDQtMkExIDEgMCAwMDE3IDE1VjkuMjM2YTEgMSAwIDAwLTEuNDQ3LS44OTRsLTQgMmExIDEgMCAwMC0uNTUzLjg5NFYxN3pNMTUuMjExIDYuMjc2YTEgMSAwIDAwMC0xLjc4OGwtNC43NjQtMi4zODJhMSAxIDAgMDAtLjg5NCAwTDQuNzg5IDQuNDg4YTEgMSAwIDAwMCAxLjc4OGw0Ljc2NCAyLjM4MmExIDEgMCAwMC44OTQgMGw0Ljc2NC0yLjM4MnpNNC40NDcgOC4zNDJBMSAxIDAgMDAzIDkuMjM2VjE1YTEgMSAwIDAwLjU1My44OTRsNCAyQTEgMSAwIDAwOSAxN3YtNS43NjRhMSAxIDAgMDAtLjU1My0uODk0bC00LTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ3VycmVuY3lCYW5nbGFkZXNoaSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNNyA0YTEgMSAwIDAwMCAyIDEgMSAwIDAxMSAxdjFIN2ExIDEgMCAwMDAgMmgxdjNhMyAzIDAgMTA2IDB2LTFhMSAxIDAgMTAtMiAwdjFhMSAxIDAgMTEtMiAwdi0zaDNhMSAxIDAgMTAwLTJoLTNWN2EzIDMgMCAwMC0zLTN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUN1cnJlbmN5RG9sbGFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTguNDMzIDcuNDE4Yy4xNTUtLjEwMy4zNDYtLjE5Ni41NjctLjI2N3YxLjY5OGEyLjMwNSAyLjMwNSAwIDAxLS41NjctLjI2N0M4LjA3IDguMzQgOCA4LjExNCA4IDhjMC0uMTE0LjA3LS4zNC40MzMtLjU4MnpNMTEgMTIuODQ5di0xLjY5OGMuMjIuMDcxLjQxMi4xNjQuNTY3LjI2Ny4zNjQuMjQzLjQzMy40NjguNDMzLjU4MiAwIC4xMTQtLjA3LjM0LS40MzMuNTgyYTIuMzA1IDIuMzA1IDAgMDEtLjU2Ny4yNjd6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6bTEtMTNhMSAxIDAgMTAtMiAwdi4wOTJhNC41MzUgNC41MzUgMCAwMC0xLjY3Ni42NjJDNi42MDIgNi4yMzQgNiA3LjAwOSA2IDhjMCAuOTkuNjAyIDEuNzY1IDEuMzI0IDIuMjQ2LjQ4LjMyIDEuMDU0LjU0NSAxLjY3Ni42NjJ2MS45NDFjLS4zOTEtLjEyNy0uNjgtLjMxNy0uODQzLS41MDRhMSAxIDAgMTAtMS41MSAxLjMxYy41NjIuNjQ5IDEuNDEzIDEuMDc2IDIuMzUzIDEuMjUzVjE1YTEgMSAwIDEwMiAwdi0uMDkyYTQuNTM1IDQuNTM1IDAgMDAxLjY3Ni0uNjYyQzEzLjM5OCAxMy43NjYgMTQgMTIuOTkxIDE0IDEyYzAtLjk5LS42MDItMS43NjUtMS4zMjQtMi4yNDZBNC41MzUgNC41MzUgMCAwMDExIDkuMDkyVjcuMTUxYy4zOTEuMTI3LjY4LjMxNy44NDMuNTA0YTEgMSAwIDEwMS41MTEtMS4zMWMtLjU2My0uNjQ5LTEuNDEzLTEuMDc2LTIuMzU0LTEuMjUzVjV6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUN1cnJlbmN5RXVybyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNOC43MzYgNi45NzlDOS4yMDggNi4xOTMgOS42OTYgNiAxMCA2Yy4zMDQgMCAuNzkyLjE5MyAxLjI2NC45NzlhMSAxIDAgMDAxLjcxNS0xLjAyOUMxMi4yNzkgNC43ODQgMTEuMjMyIDQgMTAgNHMtMi4yNzkuNzg0LTIuOTc5IDEuOTVjLS4yODUuNDc1LS41MDcgMS0uNjcgMS41NUg2YTEgMSAwIDAwMCAyaC4wMTNhOS4zNTggOS4zNTggMCAwMDAgMUg2YTEgMSAwIDEwMCAyaC4zNTFjLjE2My41NS4zODUgMS4wNzUuNjcgMS41NUM3LjcyMSAxNS4yMTYgOC43NjggMTYgMTAgMTZzMi4yNzktLjc4NCAyLjk3OS0xLjk1YTEgMSAwIDEwLTEuNzE1LTEuMDI5Yy0uNDcyLjc4Ni0uOTYuOTc5LTEuMjY0Ljk3OS0uMzA0IDAtLjc5Mi0uMTkzLTEuMjY0LS45NzlhNC4yNjUgNC4yNjUgMCAwMS0uMjY0LS41MjFIMTBhMSAxIDAgMTAwLTJIOC4wMTdhNy4zNiA3LjM2IDAgMDEwLTFIMTBhMSAxIDAgMTAwLTJIOC40NzJjLjA4LS4xODUuMTY3LS4zNi4yNjQtLjUyMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ3VycmVuY3lQb3VuZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMS0xNGEzIDMgMCAwMC0zIDN2Mkg3YTEgMSAwIDAwMCAyaDF2MWExIDEgMCAwMS0xIDEgMSAxIDAgMTAwIDJoNmExIDEgMCAxMDAtMkg5LjgzYy4xMS0uMzEzLjE3LS42NS4xNy0xdi0xaDFhMSAxIDAgMTAwLTJoLTFWN2ExIDEgMCAxMTIgMCAxIDEgMCAxMDIgMCAzIDMgMCAwMC0zLTN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUN1cnJlbmN5UnVwZWUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTcgNWExIDEgMCAxMDAgMmgxYTIgMiAwIDAxMS43MzIgMUg3YTEgMSAwIDEwMCAyaDIuNzMyQTIgMiAwIDAxOCAxMUg3YTEgMSAwIDAwLS43MDcgMS43MDdsMyAzYTEgMSAwIDAwMS40MTQtMS40MTRsLTEuNDgzLTEuNDg0QTQuMDA4IDQuMDA4IDAgMDAxMS44NzQgMTBIMTNhMSAxIDAgMTAwLTJoLTEuMTI2YTMuOTc2IDMuOTc2IDAgMDAtLjQxLTFIMTNhMSAxIDAgMTAwLTJIN3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ3VycmVuY3lZZW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTcuODU4IDUuNDg1YTEgMSAwIDAwLTEuNzE1IDEuMDNMNy42MzMgOUg3YTEgMSAwIDEwMCAyaDEuODM0bC4xNjYuMjc3VjEySDdhMSAxIDAgMTAwIDJoMnYxYTEgMSAwIDEwMiAwdi0xaDJhMSAxIDAgMTAwLTJoLTJ2LS43MjNsLjE2Ni0uMjc3SDEzYTEgMSAwIDEwMC0yaC0uNjM0bDEuNDkyLTIuNDg2YTEgMSAwIDEwLTEuNzE2LTEuMDI5TDEwLjAzNCA5aC0uMDY4TDcuODU4IDUuNDg1elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDdXJzb3JDbGljayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNi42NzIgMS45MTFhMSAxIDAgMTAtMS45MzIuNTE4bC4yNTkuOTY2YTEgMSAwIDAwMS45MzItLjUxOGwtLjI2LS45NjZ6TTIuNDI5IDQuNzRhMSAxIDAgMTAtLjUxNyAxLjkzMmwuOTY2LjI1OWExIDEgMCAwMC41MTctMS45MzJsLS45NjYtLjI2em04LjgxNC0uNTY5YTEgMSAwIDAwLTEuNDE1LTEuNDE0bC0uNzA3LjcwN2ExIDEgMCAxMDEuNDE1IDEuNDE1bC43MDctLjcwOHptLTcuMDcxIDcuMDcybC43MDctLjcwN0ExIDEgMCAwMDMuNDY1IDkuMTJsLS43MDguNzA3YTEgMSAwIDAwMS40MTUgMS40MTV6bTMuMi01LjE3MWExIDEgMCAwMC0xLjMgMS4zbDQgMTBhMSAxIDAgMDAxLjgyMy4wNzVsMS4zOC0yLjc1OSAzLjAxOCAzLjAyYTEgMSAwIDAwMS40MTQtMS40MTVsLTMuMDE5LTMuMDIgMi43Ni0xLjM3OWExIDEgMCAwMC0uMDc2LTEuODIybC0xMC00elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEYXRhYmFzZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0zIDEydjNjMCAxLjY1NyAzLjEzNCAzIDcgM3M3LTEuMzQzIDctM3YtM2MwIDEuNjU3LTMuMTM0IDMtNyAzcy03LTEuMzQzLTctM3pcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0zIDd2M2MwIDEuNjU3IDMuMTM0IDMgNyAzczctMS4zNDMgNy0zVjdjMCAxLjY1Ny0zLjEzNCAzLTcgM1MzIDguNjU3IDMgN3pcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xNyA1YzAgMS42NTctMy4xMzQgMy03IDNTMyA2LjY1NyAzIDVzMy4xMzQtMyA3LTMgNyAxLjM0MyA3IDN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRGVza3RvcENvbXB1dGVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDVhMiAyIDAgMDEyLTJoMTBhMiAyIDAgMDEyIDJ2OGEyIDIgMCAwMS0yIDJoLTIuMjJsLjEyMy40ODkuODA0LjgwNEExIDEgMCAwMTEzIDE4SDdhMSAxIDAgMDEtLjcwNy0xLjcwN2wuODA0LS44MDRMNy4yMiAxNUg1YTIgMiAwIDAxLTItMlY1em01Ljc3MSA3SDVWNWgxMHY3SDguNzcxelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEZXZpY2VNb2JpbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcgMmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoNmEyIDIgMCAwMDItMlY0YTIgMiAwIDAwLTItMkg3em0zIDE0YTEgMSAwIDEwMC0yIDEgMSAwIDAwMCAyelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEZXZpY2VUYWJsZXQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgMmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMlY0YTIgMiAwIDAwLTItMkg2em00IDE0YTEgMSAwIDEwMC0yIDEgMSAwIDAwMCAyelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEb2N1bWVudEFkZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiAyYTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0yVjcuNDE0QTIgMiAwIDAwMTUuNDE0IDZMMTIgMi41ODZBMiAyIDAgMDAxMC41ODYgMkg2em01IDZhMSAxIDAgMTAtMiAwdjJIN2ExIDEgMCAxMDAgMmgydjJhMSAxIDAgMTAyIDB2LTJoMmExIDEgMCAxMDAtMmgtMlY4elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEb2N1bWVudERvd25sb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02IDJhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJWNy40MTRBMiAyIDAgMDAxNS40MTQgNkwxMiAyLjU4NkEyIDIgMCAwMDEwLjU4NiAySDZ6bTUgNmExIDEgMCAxMC0yIDB2My41ODZsLTEuMjkzLTEuMjkzYTEgMSAwIDEwLTEuNDE0IDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0IDBsMy0zYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDExIDExLjU4NlY4elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEb2N1bWVudER1cGxpY2F0ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk05IDJhMiAyIDAgMDAtMiAydjhhMiAyIDAgMDAyIDJoNmEyIDIgMCAwMDItMlY2LjQxNEEyIDIgMCAwMDE2LjQxNCA1TDE0IDIuNTg2QTIgMiAwIDAwMTIuNTg2IDJIOXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0zIDhhMiAyIDAgMDEyLTJ2MTBoOGEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJWOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEb2N1bWVudFJlbW92ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiAyYTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0yVjcuNDE0QTIgMiAwIDAwMTUuNDE0IDZMMTIgMi41ODZBMiAyIDAgMDAxMC41ODYgMkg2em0xIDhhMSAxIDAgMTAwIDJoNmExIDEgMCAxMDAtMkg3elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEb2N1bWVudFJlcG9ydCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiAyYTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0yVjcuNDE0QTIgMiAwIDAwMTUuNDE0IDZMMTIgMi41ODZBMiAyIDAgMDAxMC41ODYgMkg2em0yIDEwYTEgMSAwIDEwLTIgMHYzYTEgMSAwIDEwMiAwdi0zem0yLTNhMSAxIDAgMDExIDF2NWExIDEgMCAxMS0yIDB2LTVhMSAxIDAgMDExLTF6bTQtMWExIDEgMCAxMC0yIDB2N2ExIDEgMCAxMDIgMFY4elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEb2N1bWVudFNlYXJjaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk00IDRhMiAyIDAgMDEyLTJoNC41ODZBMiAyIDAgMDExMiAyLjU4NkwxNS40MTQgNkEyIDIgMCAwMTE2IDcuNDE0VjE2YTIgMiAwIDAxLTIgMmgtMS41MjhBNiA2IDAgMDA0IDkuNTI4VjR6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTggMTBhNCA0IDAgMDAtMy40NDYgNi4wMzJsLTEuMjYxIDEuMjZhMSAxIDAgMTAxLjQxNCAxLjQxNWwxLjI2MS0xLjI2MUE0IDQgMCAxMDggMTB6bS0yIDRhMiAyIDAgMTE0IDAgMiAyIDAgMDEtNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEb2N1bWVudFRleHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgNGEyIDIgMCAwMTItMmg0LjU4NkEyIDIgMCAwMTEyIDIuNTg2TDE1LjQxNCA2QTIgMiAwIDAxMTYgNy40MTRWMTZhMiAyIDAgMDEtMiAySDZhMiAyIDAgMDEtMi0yVjR6bTIgNmExIDEgMCAwMTEtMWg2YTEgMSAwIDExMCAySDdhMSAxIDAgMDEtMS0xem0xIDNhMSAxIDAgMTAwIDJoNmExIDEgMCAxMDAtMkg3elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEb2N1bWVudCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCA0YTIgMiAwIDAxMi0yaDQuNTg2QTIgMiAwIDAxMTIgMi41ODZMMTUuNDE0IDZBMiAyIDAgMDExNiA3LjQxNFYxNmEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJWNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRG90c0NpcmNsZUhvcml6b250YWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTcgOUg1djJoMlY5em04IDBoLTJ2MmgyVjl6TTkgOWgydjJIOVY5elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEb3RzSG9yaXpvbnRhbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk02IDEwYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpNMTIgMTBhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwek0xNiAxMmEyIDIgMCAxMDAtNCAyIDIgMCAwMDAgNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEb3RzVmVydGljYWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTAgNmEyIDIgMCAxMTAtNCAyIDIgMCAwMTAgNHpNMTAgMTJhMiAyIDAgMTEwLTQgMiAyIDAgMDEwIDR6TTEwIDE4YTIgMiAwIDExMC00IDIgMiAwIDAxMCA0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURvd25sb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDE3YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xem0zLjI5My03LjcwN2ExIDEgMCAwMTEuNDE0IDBMOSAxMC41ODZWM2ExIDEgMCAxMTIgMHY3LjU4NmwxLjI5My0xLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0bC0zIDNhMSAxIDAgMDEtMS40MTQgMGwtMy0zYTEgMSAwIDAxMC0xLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRHVwbGljYXRlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTcgOWEyIDIgMCAwMTItMmg2YTIgMiAwIDAxMiAydjZhMiAyIDAgMDEtMiAySDlhMiAyIDAgMDEtMi0yVjl6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNSAzYTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyVjVoOGEyIDIgMCAwMC0yLTJINXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlFbW9qaUhhcHB5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek03IDlhMSAxIDAgMTAwLTIgMSAxIDAgMDAwIDJ6bTctMWExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bS0uNDY0IDUuNTM1YTEgMSAwIDEwLTEuNDE1LTEuNDE0IDMgMyAwIDAxLTQuMjQyIDAgMSAxIDAgMDAtMS40MTUgMS40MTQgNSA1IDAgMDA3LjA3MiAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlFbW9qaVNhZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNNyA5YTEgMSAwIDEwMC0yIDEgMSAwIDAwMCAyem03LTFhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0tNy41MzYgNS44NzlhMSAxIDAgMDAxLjQxNSAwIDMgMyAwIDAxNC4yNDIgMCAxIDEgMCAwMDEuNDE1LTEuNDE1IDUgNSAwIDAwLTcuMDcyIDAgMSAxIDAgMDAwIDEuNDE1elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlFeGNsYW1hdGlvbkNpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS03IDRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0tMS05YTEgMSAwIDAwLTEgMXY0YTEgMSAwIDEwMiAwVjZhMSAxIDAgMDAtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlFeGNsYW1hdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOC4yNTcgMy4wOTljLjc2NS0xLjM2IDIuNzIyLTEuMzYgMy40ODYgMGw1LjU4IDkuOTJjLjc1IDEuMzM0LS4yMTMgMi45OC0xLjc0MiAyLjk4SDQuNDJjLTEuNTMgMC0yLjQ5My0xLjY0Ni0xLjc0My0yLjk4bDUuNTgtOS45MnpNMTEgMTNhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0tMS04YTEgMSAwIDAwLTEgMXYzYTEgMSAwIDAwMiAwVjZhMSAxIDAgMDAtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlFeHRlcm5hbExpbmsgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTEgM2ExIDEgMCAxMDAgMmgyLjU4NmwtNi4yOTMgNi4yOTNhMSAxIDAgMTAxLjQxNCAxLjQxNEwxNSA2LjQxNFY5YTEgMSAwIDEwMiAwVjRhMSAxIDAgMDAtMS0xaC01elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTUgNWEyIDIgMCAwMC0yIDJ2OGEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0ydi0zYTEgMSAwIDEwLTIgMHYzSDVWN2gzYTEgMSAwIDAwMC0ySDV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRXllT2ZmIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zLjcwNyAyLjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwxNCAxNGExIDEgMCAwMDEuNDE0LTEuNDE0bC0xLjQ3My0xLjQ3M0ExMC4wMTQgMTAuMDE0IDAgMDAxOS41NDIgMTBDMTguMjY4IDUuOTQzIDE0LjQ3OCAzIDEwIDNhOS45NTggOS45NTggMCAwMC00LjUxMiAxLjA3NGwtMS43OC0xLjc4MXptNC4yNjEgNC4yNmwxLjUxNCAxLjUxNWEyLjAwMyAyLjAwMyAwIDAxMi40NSAyLjQ1bDEuNTE0IDEuNTE0YTQgNCAwIDAwLTUuNDc4LTUuNDc4elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMi40NTQgMTYuNjk3TDkuNzUgMTMuOTkyYTQgNCAwIDAxLTMuNzQyLTMuNzQxTDIuMzM1IDYuNTc4QTkuOTggOS45OCAwIDAwLjQ1OCAxMGMxLjI3NCA0LjA1NyA1LjA2NSA3IDkuNTQyIDcgLjg0NyAwIDEuNjY5LS4xMDUgMi40NTQtLjMwM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlFeWUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTAgMTJhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTS40NTggMTBDMS43MzIgNS45NDMgNS41MjIgMyAxMCAzczguMjY4IDIuOTQzIDkuNTQyIDdjLTEuMjc0IDQuMDU3LTUuMDY0IDctOS41NDIgN1MxLjczMiAxNC4wNTcuNDU4IDEwek0xNCAxMGE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUZhc3RGb3J3YXJkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTQuNTU1IDUuMTY4QTEgMSAwIDAwMyA2djhhMSAxIDAgMDAxLjU1NS44MzJMMTAgMTEuMjAyVjE0YTEgMSAwIDAwMS41NTUuODMybDYtNGExIDEgMCAwMDAtMS42NjRsLTYtNEExIDEgMCAwMDEwIDZ2Mi43OThsLTUuNDQ1LTMuNjN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRmlsbSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCAzYTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg0em0zIDJoNnY0SDdWNXptOCA4djJoMXYtMmgtMXptLTItMkg3djRoNnYtNHptMiAwaDFWOWgtMXYyem0xLTRWNWgtMXYyaDF6TTUgNXYySDRWNWgxem0wIDRINHYyaDFWOXptLTEgNGgxdjJINHYtMnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRmlsdGVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDNhMSAxIDAgMDExLTFoMTJhMSAxIDAgMDExIDF2M2ExIDEgMCAwMS0uMjkzLjcwN0wxMiAxMS40MTRWMTVhMSAxIDAgMDEtLjI5My43MDdsLTIgMkExIDEgMCAwMTggMTd2LTUuNTg2TDMuMjkzIDYuNzA3QTEgMSAwIDAxMyA2VjN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUZpbmdlclByaW50IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02LjYyNSAyLjY1NUE5IDkgMCAwMTE5IDExYTEgMSAwIDExLTIgMCA3IDcgMCAwMC05LjYyNS02LjQ5MiAxIDEgMCAxMS0uNzUtMS44NTN6TTQuNjYyIDQuOTU5QTEgMSAwIDAxNC43NSA2LjM3IDYuOTcgNi45NyAwIDAwMyAxMWExIDEgMCAxMS0yIDAgOC45NyA4Ljk3IDAgMDEyLjI1LTUuOTUzIDEgMSAwIDAxMS40MTItLjA4OHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUgMTFhNSA1IDAgMTExMCAwIDEgMSAwIDExLTIgMCAzIDMgMCAxMC02IDBjMCAxLjY3Ny0uMzQ1IDMuMjc2LS45NjggNC43MjlhMSAxIDAgMTEtMS44MzgtLjc4OUE5Ljk2NCA5Ljk2NCAwIDAwNSAxMXptOC45MjEgMi4wMTJhMSAxIDAgMDEuODMxIDEuMTQ1IDE5Ljg2IDE5Ljg2IDAgMDEtLjU0NSAyLjQzNiAxIDEgMCAxMS0xLjkyLS41NThjLjIwNy0uNzEzLjM3MS0xLjQ0NS40OS0yLjE5MmExIDEgMCAwMTEuMTQ0LS44M3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDEwYTEgMSAwIDAxMSAxYzAgMi4yMzYtLjQ2IDQuMzY4LTEuMjkgNi4zMDRhMSAxIDAgMDEtMS44MzgtLjc4OUExMy45NTIgMTMuOTUyIDAgMDA5IDExYTEgMSAwIDAxMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlGaXJlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMi4zOTUgMi41NTNhMSAxIDAgMDAtMS40NS0uMzg1Yy0uMzQ1LjIzLS42MTQuNTU4LS44MjIuODgtLjIxNC4zMy0uNDAzLjcxMy0uNTcgMS4xMTYtLjMzNC44MDQtLjYxNCAxLjc2OC0uODQgMi43MzRhMzEuMzY1IDMxLjM2NSAwIDAwLS42MTMgMy41OCAyLjY0IDIuNjQgMCAwMS0uOTQ1LTEuMDY3Yy0uMzI4LS42OC0uMzk4LTEuNTM0LS4zOTgtMi42NTRBMSAxIDAgMDA1LjA1IDYuMDUgNi45ODEgNi45ODEgMCAwMDMgMTFhNyA3IDAgMTAxMS45NS00Ljk1Yy0uNTkyLS41OTEtLjk4LS45ODUtMS4zNDgtMS40NjctLjM2My0uNDc2LS43MjQtMS4wNjMtMS4yMDctMi4wM3pNMTIuMTIgMTUuMTJBMyAzIDAgMDE3IDEzcy44NzkuNSAyLjUuNWMwLTEgLjUtNCAxLjI1LTQuNS41IDEgLjc4NiAxLjI5MyAxLjM3MSAxLjg3OUEyLjk5IDIuOTkgMCAwMTEzIDEzYTIuOTkgMi45OSAwIDAxLS44NzkgMi4xMjF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUZsYWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgNmEzIDMgMCAwMTMtM2gxMGExIDEgMCAwMS44IDEuNkwxNC4yNSA4bDIuNTUgMy40QTEgMSAwIDAxMTYgMTNINmExIDEgMCAwMC0xIDF2M2ExIDEgMCAxMS0yIDBWNnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRm9sZGVyQWRkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgNmEyIDIgMCAwMTItMmg1bDIgMmg1YTIgMiAwIDAxMiAydjZhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0yVjZ6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VcIjpcIiNmZmZcIixcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOCAxMWg0bS0yLTJ2NFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUZvbGRlckRvd25sb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgNmEyIDIgMCAwMTItMmg1bDIgMmg1YTIgMiAwIDAxMiAydjZhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0yVjZ6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VcIjpcIiNmZmZcIixcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTAgOXY0bTAgMGwtMi0ybTIgMmwyLTJcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlGb2xkZXJPcGVuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0yIDZhMiAyIDAgMDEyLTJoNGwyIDJoNGEyIDIgMCAwMTIgMnYxSDhhMyAzIDAgMDAtMyAzdjEuNWExLjUgMS41IDAgMDEtMyAwVjZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTYgMTJhMiAyIDAgMDEyLTJoOGEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMkgyaDJhMiAyIDAgMDAyLTJ2LTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRm9sZGVyUmVtb3ZlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgNmEyIDIgMCAwMTItMmg1bDIgMmg1YTIgMiAwIDAxMiAydjZhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0yVjZ6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VcIjpcIiNmZmZcIixcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOCAxMWg0XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRm9sZGVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgNmEyIDIgMCAwMTItMmg1bDIgMmg1YTIgMiAwIDAxMiAydjZhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0yVjZ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpR2lmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNSA1YTMgMyAwIDAxNS0yLjIzNkEzIDMgMCAwMTE0LjgzIDZIMTZhMiAyIDAgMTEwIDRoLTVWOWExIDEgMCAxMC0yIDB2MUg0YTIgMiAwIDExMC00aDEuMTdDNS4wNiA1LjY4NyA1IDUuMzUgNSA1em00IDFWNWExIDEgMCAxMC0xIDFoMXptMyAwYTEgMSAwIDEwLTEtMXYxaDF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTkgMTFIM3Y1YTIgMiAwIDAwMiAyaDR2LTd6TTExIDE4aDRhMiAyIDAgMDAyLTJ2LTVoLTZ2N3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlHbG9iZUFsdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNC4wODMgOWgxLjk0NmMuMDg5LTEuNTQ2LjM4My0yLjk3LjgzNy00LjExOEE2LjAwNCA2LjAwNCAwIDAwNC4wODMgOXpNMTAgMmE4IDggMCAxMDAgMTYgOCA4IDAgMDAwLTE2em0wIDJjLS4wNzYgMC0uMjMyLjAzMi0uNDY1LjI2Mi0uMjM4LjIzNC0uNDk3LjYyMy0uNzM3IDEuMTgyLS4zODkuOTA3LS42NzMgMi4xNDItLjc2NiAzLjU1NmgzLjkzNmMtLjA5My0xLjQxNC0uMzc3LTIuNjQ5LS43NjYtMy41NTYtLjI0LS41Ni0uNS0uOTQ4LS43MzctMS4xODJDMTAuMjMyIDQuMDMyIDEwLjA3NiA0IDEwIDR6bTMuOTcxIDVjLS4wODktMS41NDYtLjM4My0yLjk3LS44MzctNC4xMThBNi4wMDQgNi4wMDQgMCAwMTE1LjkxNyA5aC0xLjk0NnptLTIuMDAzIDJIOC4wMzJjLjA5MyAxLjQxNC4zNzcgMi42NDkuNzY2IDMuNTU2LjI0LjU2LjUuOTQ4LjczNyAxLjE4Mi4yMzMuMjMuMzg5LjI2Mi40NjUuMjYyLjA3NiAwIC4yMzItLjAzMi40NjUtLjI2Mi4yMzgtLjIzNC40OTgtLjYyMy43MzctMS4xODIuMzg5LS45MDcuNjczLTIuMTQyLjc2Ni0zLjU1NnptMS4xNjYgNC4xMThjLjQ1NC0xLjE0Ny43NDgtMi41NzIuODM3LTQuMTE4aDEuOTQ2YTYuMDA0IDYuMDA0IDAgMDEtMi43ODMgNC4xMTh6bS02LjI2OCAwQzYuNDEyIDEzLjk3IDYuMTE4IDEyLjU0NiA2LjAzIDExSDQuMDgzYTYuMDA0IDYuMDA0IDAgMDAyLjc4MyA0LjExOHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpR2xvYmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTQuMzMyIDguMDI3YTYuMDEyIDYuMDEyIDAgMDExLjkxMi0yLjcwNkM2LjUxMiA1LjczIDYuOTc0IDYgNy41IDZBMS41IDEuNSAwIDAxOSA3LjVWOGEyIDIgMCAwMDQgMCAyIDIgMCAwMTEuNTIzLTEuOTQzQTUuOTc3IDUuOTc3IDAgMDExNiAxMGMwIC4zNC0uMDI4LjY3NS0uMDgzIDFIMTVhMiAyIDAgMDAtMiAydjIuMTk3QTUuOTczIDUuOTczIDAgMDExMCAxNnYtMmEyIDIgMCAwMC0yLTIgMiAyIDAgMDEtMi0yIDIgMiAwIDAwLTEuNjY4LTEuOTczelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlIYW5kIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk05IDNhMSAxIDAgMDEyIDB2NS41YS41LjUgMCAwMDEgMFY0YTEgMSAwIDExMiAwdjQuNWEuNS41IDAgMDAxIDBWNmExIDEgMCAxMTIgMHY1YTcgNyAwIDExLTE0IDBWOWExIDEgMCAwMTIgMHYyLjVhLjUuNSAwIDAwMSAwVjRhMSAxIDAgMDEyIDB2NC41YS41LjUgMCAwMDEgMFYzelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlIYXNodGFnIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk05LjI0MyAzLjAzYTEgMSAwIDAxLjcyNyAxLjIxM0w5LjUzIDZoMi45NGwuNTYtMi4yNDNhMSAxIDAgMTExLjk0LjQ4NkwxNC41MyA2SDE3YTEgMSAwIDExMCAyaC0yLjk3bC0xIDRIMTVhMSAxIDAgMTEwIDJoLTIuNDdsLS41NiAyLjI0MmExIDEgMCAxMS0xLjk0LS40ODVMMTAuNDcgMTRINy41M2wtLjU2IDIuMjQyYTEgMSAwIDExLTEuOTQtLjQ4NUw1LjQ3IDE0SDNhMSAxIDAgMTEwLTJoMi45N2wxLTRINWExIDEgMCAxMTAtMmgyLjQ3bC41Ni0yLjI0M2ExIDEgMCAwMTEuMjEzLS43Mjd6TTkuMDMgOGwtMSA0aDIuOTM4bDEtNEg5LjAzMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpSGVhcnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMuMTcyIDUuMTcyYTQgNCAwIDAxNS42NTYgMEwxMCA2LjM0M2wxLjE3Mi0xLjE3MWE0IDQgMCAxMTUuNjU2IDUuNjU2TDEwIDE3LjY1N2wtNi44MjgtNi44MjlhNCA0IDAgMDEwLTUuNjU2elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlIb21lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEwLjcwNyAyLjI5M2ExIDEgMCAwMC0xLjQxNCAwbC03IDdhMSAxIDAgMDAxLjQxNCAxLjQxNEw0IDEwLjQxNFYxN2ExIDEgMCAwMDEgMWgyYTEgMSAwIDAwMS0xdi0yYTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2MmExIDEgMCAwMDEgMWgyYTEgMSAwIDAwMS0xdi02LjU4NmwuMjkzLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0bC03LTd6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpSWRlbnRpZmljYXRpb24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDJhMSAxIDAgMDAtMSAxdjFhMSAxIDAgMDAyIDBWM2ExIDEgMCAwMC0xLTF6TTQgNGgzYTMgMyAwIDAwNiAwaDNhMiAyIDAgMDEyIDJ2OWEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJWNmEyIDIgMCAwMTItMnptMi41IDdhMS41IDEuNSAwIDEwMC0zIDEuNSAxLjUgMCAwMDAgM3ptMi40NSA0YTIuNSAyLjUgMCAxMC00LjkgMGg0Ljl6TTEyIDlhMSAxIDAgMTAwIDJoM2ExIDEgMCAxMDAtMmgtM3ptLTEgNGExIDEgMCAwMTEtMWgyYTEgMSAwIDExMCAyaC0yYTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpSW5ib3hJbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk04LjcwNyA3LjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwyIDJhMSAxIDAgMDAxLjQxNCAwbDItMmExIDEgMCAwMC0xLjQxNC0xLjQxNEwxMSA3LjU4NlYzYTEgMSAwIDEwLTIgMHY0LjU4NmwtLjI5My0uMjkzelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTMgNWEyIDIgMCAwMTItMmgxYTEgMSAwIDAxMCAySDV2N2gybDEgMmg0bDEtMmgyVjVoLTFhMSAxIDAgMTEwLTJoMWEyIDIgMCAwMTIgMnYxMGEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJWNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlJbmJveCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNSAzYTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg1em0wIDJoMTB2N2gtMmwtMSAySDhsLTEtMkg1VjV6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUluZm9ybWF0aW9uQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTctNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6TTkgOWExIDEgMCAwMDAgMnYzYTEgMSAwIDAwMSAxaDFhMSAxIDAgMTAwLTJ2LTNhMSAxIDAgMDAtMS0xSDl6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUtleSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTggOGE2IDYgMCAwMS03Ljc0MyA1Ljc0M0wxMCAxNGwtMSAxLTEgMUg2djJIMnYtNGw0LjI1Ny00LjI1N0E2IDYgMCAxMTE4IDh6bS02LTRhMSAxIDAgMTAwIDIgMiAyIDAgMDEyIDIgMSAxIDAgMTAyIDAgNCA0IDAgMDAtNC00elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlMaWJyYXJ5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMC40OTYgMi4xMzJhMSAxIDAgMDAtLjk5MiAwbC03IDRBMSAxIDAgMDAzIDh2N2ExIDEgMCAxMDAgMmgxNGExIDEgMCAxMDAtMlY4YTEgMSAwIDAwLjQ5Ni0xLjg2OGwtNy00ek02IDlhMSAxIDAgMDAtMSAxdjNhMSAxIDAgMTAyIDB2LTNhMSAxIDAgMDAtMS0xem0zIDFhMSAxIDAgMDEyIDB2M2ExIDEgMCAxMS0yIDB2LTN6bTUtMWExIDEgMCAwMC0xIDF2M2ExIDEgMCAxMDIgMHYtM2ExIDEgMCAwMC0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUxpZ2h0QnVsYiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMSAzYTEgMSAwIDEwLTIgMHYxYTEgMSAwIDEwMiAwVjN6TTE1LjY1NyA1Ljc1N2ExIDEgMCAwMC0xLjQxNC0xLjQxNGwtLjcwNy43MDdhMSAxIDAgMDAxLjQxNCAxLjQxNGwuNzA3LS43MDd6TTE4IDEwYTEgMSAwIDAxLTEgMWgtMWExIDEgMCAxMTAtMmgxYTEgMSAwIDAxMSAxek01LjA1IDYuNDY0QTEgMSAwIDEwNi40NjQgNS4wNWwtLjcwNy0uNzA3YTEgMSAwIDAwLTEuNDE0IDEuNDE0bC43MDcuNzA3ek01IDEwYTEgMSAwIDAxLTEgMUgzYTEgMSAwIDExMC0yaDFhMSAxIDAgMDExIDF6TTggMTZ2LTFoNHYxYTIgMiAwIDExLTQgMHpNMTIgMTRjLjAxNS0uMzQuMjA4LS42NDYuNDc3LS44NTlhNCA0IDAgMTAtNC45NTQgMGMuMjcuMjEzLjQ2Mi41MTkuNDc2Ljg1OWg0LjAwMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlMaWdodG5pbmdCb2x0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMS4zIDEuMDQ2QTEgMSAwIDAxMTIgMnY1aDRhMSAxIDAgMDEuODIgMS41NzNsLTcgMTBBMSAxIDAgMDE4IDE4di01SDRhMSAxIDAgMDEtLjgyLTEuNTczbDctMTBhMSAxIDAgMDExLjEyLS4zOHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTGluayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTIuNTg2IDQuNTg2YTIgMiAwIDExMi44MjggMi44MjhsLTMgM2EyIDIgMCAwMS0yLjgyOCAwIDEgMSAwIDAwLTEuNDE0IDEuNDE0IDQgNCAwIDAwNS42NTYgMGwzLTNhNCA0IDAgMDAtNS42NTYtNS42NTZsLTEuNSAxLjVhMSAxIDAgMTAxLjQxNCAxLjQxNGwxLjUtMS41em0tNSA1YTIgMiAwIDAxMi44MjggMCAxIDEgMCAxMDEuNDE0LTEuNDE0IDQgNCAwIDAwLTUuNjU2IDBsLTMgM2E0IDQgMCAxMDUuNjU2IDUuNjU2bDEuNS0xLjVhMSAxIDAgMTAtMS40MTQtMS40MTRsLTEuNSAxLjVhMiAyIDAgMTEtMi44MjgtMi44MjhsMy0zelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlMb2NhdGlvbk1hcmtlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNS4wNSA0LjA1YTcgNyAwIDExOS45IDkuOUwxMCAxOC45bC00Ljk1LTQuOTVhNyA3IDAgMDEwLTkuOXpNMTAgMTFhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUxvY2tDbG9zZWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUgOVY3YTUgNSAwIDAxMTAgMHYyYTIgMiAwIDAxMiAydjVhMiAyIDAgMDEtMiAySDVhMiAyIDAgMDEtMi0ydi01YTIgMiAwIDAxMi0yem04LTJ2Mkg3VjdhMyAzIDAgMDE2IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUxvY2tPcGVuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEwIDJhNSA1IDAgMDAtNSA1djJhMiAyIDAgMDAtMiAydjVhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJ2LTVhMiAyIDAgMDAtMi0ySDdWN2EzIDMgMCAwMTUuOTA1LS43NSAxIDEgMCAwMDEuOTM3LS41QTUuMDAyIDUuMDAyIDAgMDAxMCAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUxvZ2luIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDNhMSAxIDAgMDExIDF2MTJhMSAxIDAgMTEtMiAwVjRhMSAxIDAgMDExLTF6bTcuNzA3IDMuMjkzYTEgMSAwIDAxMCAxLjQxNEw5LjQxNCA5SDE3YTEgMSAwIDExMCAySDkuNDE0bDEuMjkzIDEuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0bC0zLTNhMSAxIDAgMDEwLTEuNDE0bDMtM2ExIDEgMCAwMTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUxvZ291dCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyAzYTEgMSAwIDAwLTEgMXYxMmExIDEgMCAxMDIgMFY0YTEgMSAwIDAwLTEtMXptMTAuMjkzIDkuMjkzYTEgMSAwIDAwMS40MTQgMS40MTRsMy0zYTEgMSAwIDAwMC0xLjQxNGwtMy0zYTEgMSAwIDEwLTEuNDE0IDEuNDE0TDE0LjU4NiA5SDdhMSAxIDAgMTAwIDJoNy41ODZsLTEuMjkzIDEuMjkzelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNYWlsT3BlbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMi45NCA2LjQxMkEyIDIgMCAwMDIgOC4xMDhWMTZhMiAyIDAgMDAyIDJoMTJhMiAyIDAgMDAyLTJWOC4xMDhhMiAyIDAgMDAtLjk0LTEuNjk2bC02LTMuNzVhMiAyIDAgMDAtMi4xMiAwbC02IDMuNzV6bTIuNjE1IDIuNDIzYTEgMSAwIDEwLTEuMTEgMS42NjRsNSAzLjMzM2ExIDEgMCAwMDEuMTEgMGw1LTMuMzMzYTEgMSAwIDAwLTEuMTEtMS42NjRMMTAgMTEuNzk4IDUuNTU1IDguODM1elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNYWlsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIuMDAzIDUuODg0TDEwIDkuODgybDcuOTk3LTMuOTk4QTIgMiAwIDAwMTYgNEg0YTIgMiAwIDAwLTEuOTk3IDEuODg0elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTE4IDguMTE4bC04IDQtOC00VjE0YTIgMiAwIDAwMiAyaDEyYTIgMiAwIDAwMi0yVjguMTE4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1hcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTIgMS41ODZsLTQgNHYxMi44MjhsNC00VjEuNTg2ek0zLjcwNyAzLjI5M0ExIDEgMCAwMDIgNHYxMGExIDEgMCAwMC4yOTMuNzA3TDYgMTguNDE0VjUuNTg2TDMuNzA3IDMuMjkzek0xNy43MDcgNS4yOTNMMTQgMS41ODZ2MTIuODI4bDIuMjkzIDIuMjkzQTEgMSAwIDAwMTggMTZWNmExIDEgMCAwMC0uMjkzLS43MDd6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1lbnVBbHQxIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTBhMSAxIDAgMDExLTFoNmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTWVudUFsdDIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxNWExIDEgMCAwMTEtMWg2YTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNZW51QWx0MyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDEwYTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek05IDE1YTEgMSAwIDAxMS0xaDZhMSAxIDAgMTEwIDJoLTZhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNZW51QWx0NCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA3YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDEzYTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNZW51IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTBhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1pY3JvcGhvbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcgNGEzIDMgMCAwMTYgMHY0YTMgMyAwIDExLTYgMFY0em00IDEwLjkzQTcuMDAxIDcuMDAxIDAgMDAxNyA4YTEgMSAwIDEwLTIgMEE1IDUgMCAwMTUgOGExIDEgMCAwMC0yIDAgNy4wMDEgNy4wMDEgMCAwMDYgNi45M1YxN0g2YTEgMSAwIDEwMCAyaDhhMSAxIDAgMTAwLTJoLTN2LTIuMDd6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1pbnVzQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek03IDlhMSAxIDAgMDAwIDJoNmExIDEgMCAxMDAtMkg3elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNaW51c1NtIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDEwYTEgMSAwIDAxMS0xaDhhMSAxIDAgMTEwIDJINmExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1pbnVzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDEwYTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNb29uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTE3LjI5MyAxMy4yOTNBOCA4IDAgMDE2LjcwNyAyLjcwN2E4LjAwMSA4LjAwMSAwIDEwMTAuNTg2IDEwLjU4NnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNdXNpY05vdGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTggM2ExIDEgMCAwMC0xLjE5Ni0uOThsLTEwIDJBMSAxIDAgMDA2IDV2OS4xMTRBNC4zNjkgNC4zNjkgMCAwMDUgMTRjLTEuNjU3IDAtMyAuODk1LTMgMnMxLjM0MyAyIDMgMiAzLS44OTUgMy0yVjcuODJsOC0xLjZ2NS44OTRBNC4zNyA0LjM3IDAgMDAxNSAxMmMtMS42NTcgMC0zIC44OTUtMyAyczEuMzQzIDIgMyAyIDMtLjg5NSAzLTJWM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlOZXdzcGFwZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTIgNWEyIDIgMCAwMTItMmg4YTIgMiAwIDAxMiAydjEwYTIgMiAwIDAwMiAySDRhMiAyIDAgMDEtMi0yVjV6bTMgMWg2djRINVY2em02IDZINXYyaDZ2LTJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTE1IDdoMWEyIDIgMCAwMTIgMnY1LjVhMS41IDEuNSAwIDAxLTMgMFY3elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU9mZmljZUJ1aWxkaW5nIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDRhMiAyIDAgMDEyLTJoOGEyIDIgMCAwMTIgMnYxMmExIDEgMCAxMTAgMmgtM2ExIDEgMCAwMS0xLTF2LTJhMSAxIDAgMDAtMS0xSDlhMSAxIDAgMDAtMSAxdjJhMSAxIDAgMDEtMSAxSDRhMSAxIDAgMTEwLTJWNHptMyAxaDJ2Mkg3VjV6bTIgNEg3djJoMlY5em0yLTRoMnYyaC0yVjV6bTIgNGgtMnYyaDJWOXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGFwZXJBaXJwbGFuZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMC44OTQgMi41NTNhMSAxIDAgMDAtMS43ODggMGwtNyAxNGExIDEgMCAwMDEuMTY5IDEuNDA5bDUtMS40MjlBMSAxIDAgMDA5IDE1LjU3MVYxMWExIDEgMCAxMTIgMHY0LjU3MWExIDEgMCAwMC43MjUuOTYybDUgMS40MjhhMSAxIDAgMDAxLjE3LTEuNDA4bC03LTE0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBhcGVyQ2xpcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOCA0YTMgMyAwIDAwLTMgM3Y0YTUgNSAwIDAwMTAgMFY3YTEgMSAwIDExMiAwdjRhNyA3IDAgMTEtMTQgMFY3YTUgNSAwIDAxMTAgMHY0YTMgMyAwIDExLTYgMFY3YTEgMSAwIDAxMiAwdjRhMSAxIDAgMTAyIDBWN2EzIDMgMCAwMC0zLTN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBhdXNlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHpNNyA4YTEgMSAwIDAxMiAwdjRhMSAxIDAgMTEtMiAwVjh6bTUtMWExIDEgMCAwMC0xIDF2NGExIDEgMCAxMDIgMFY4YTEgMSAwIDAwLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGVuY2lsQWx0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTE3LjQxNCAyLjU4NmEyIDIgMCAwMC0yLjgyOCAwTDcgMTAuMTcyVjEzaDIuODI4bDcuNTg2LTcuNTg2YTIgMiAwIDAwMC0yLjgyOHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMiA2YTIgMiAwIDAxMi0yaDRhMSAxIDAgMDEwIDJINHYxMGgxMHYtNGExIDEgMCAxMTIgMHY0YTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMlY2elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQZW5jaWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTMuNTg2IDMuNTg2YTIgMiAwIDExMi44MjggMi44MjhsLS43OTMuNzkzLTIuODI4LTIuODI4Ljc5My0uNzkzek0xMS4zNzkgNS43OTNMMyAxNC4xNzJWMTdoMi44MjhsOC4zOC04LjM3OS0yLjgzLTIuODI4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBob25lSW5jb21pbmcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTQuNDE0IDdsMy4yOTMtMy4yOTNhMSAxIDAgMDAtMS40MTQtMS40MTRMMTMgNS41ODZWNGExIDEgMCAxMC0yIDB2NC4wMDNhLjk5Ni45OTYgMCAwMC42MTcuOTIxQS45OTcuOTk3IDAgMDAxMiA5aDRhMSAxIDAgMTAwLTJoLTEuNTg2elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgM2ExIDEgMCAwMTEtMWgyLjE1M2ExIDEgMCAwMS45ODYuODM2bC43NCA0LjQzNWExIDEgMCAwMS0uNTQgMS4wNmwtMS41NDguNzczYTExLjAzNyAxMS4wMzcgMCAwMDYuMTA1IDYuMTA1bC43NzQtMS41NDhhMSAxIDAgMDExLjA1OS0uNTRsNC40MzUuNzRhMSAxIDAgMDEuODM2Ljk4NlYxN2ExIDEgMCAwMS0xIDFoLTJDNy44MiAxOCAyIDEyLjE4IDIgNVYzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBob25lTWlzc2VkQ2FsbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDNhMSAxIDAgMDExLTFoMi4xNTNhMSAxIDAgMDEuOTg2LjgzNmwuNzQgNC40MzVhMSAxIDAgMDEtLjU0IDEuMDZsLTEuNTQ4Ljc3M2ExMS4wMzcgMTEuMDM3IDAgMDA2LjEwNSA2LjEwNWwuNzc0LTEuNTQ4YTEgMSAwIDAxMS4wNTktLjU0bDQuNDM1Ljc0YTEgMSAwIDAxLjgzNi45ODZWMTdhMSAxIDAgMDEtMSAxaC0yQzcuODIgMTggMiAxMi4xOCAyIDVWM3pcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xNi43MDcgMy4yOTNhMSAxIDAgMDEwIDEuNDE0TDE1LjQxNCA2bDEuMjkzIDEuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDE0IDcuNDE0bC0xLjI5MyAxLjI5M2ExIDEgMCAxMS0xLjQxNC0xLjQxNEwxMi41ODYgNmwtMS4yOTMtMS4yOTNhMSAxIDAgMDExLjQxNC0xLjQxNEwxNCA0LjU4NmwxLjI5My0xLjI5M2ExIDEgMCAwMTEuNDE0IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGhvbmVPdXRnb2luZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xNy45MjQgMi42MTdhLjk5Ny45OTcgMCAwMC0uMjE1LS4zMjJsLS4wMDQtLjAwNEEuOTk3Ljk5NyAwIDAwMTcgMmgtNGExIDEgMCAxMDAgMmgxLjU4NmwtMy4yOTMgMy4yOTNhMSAxIDAgMDAxLjQxNCAxLjQxNEwxNiA1LjQxNFY3YTEgMSAwIDEwMiAwVjNhLjk5Ny45OTcgMCAwMC0uMDc2LS4zODN6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiAzYTEgMSAwIDAxMS0xaDIuMTUzYTEgMSAwIDAxLjk4Ni44MzZsLjc0IDQuNDM1YTEgMSAwIDAxLS41NCAxLjA2bC0xLjU0OC43NzNhMTEuMDM3IDExLjAzNyAwIDAwNi4xMDUgNi4xMDVsLjc3NC0xLjU0OGExIDEgMCAwMTEuMDU5LS41NGw0LjQzNS43NGExIDEgMCAwMS44MzYuOTg2VjE3YTEgMSAwIDAxLTEgMWgtMkM3LjgyIDE4IDIgMTIuMTggMiA1VjN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGhvbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiAzYTEgMSAwIDAxMS0xaDIuMTUzYTEgMSAwIDAxLjk4Ni44MzZsLjc0IDQuNDM1YTEgMSAwIDAxLS41NCAxLjA2bC0xLjU0OC43NzNhMTEuMDM3IDExLjAzNyAwIDAwNi4xMDUgNi4xMDVsLjc3NC0xLjU0OGExIDEgMCAwMTEuMDU5LS41NGw0LjQzNS43NGExIDEgMCAwMS44MzYuOTg2VjE3YTEgMSAwIDAxLTEgMWgtMkM3LjgyIDE4IDIgMTIuMTggMiA1VjN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGhvdG9ncmFwaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCAzYTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg0em0xMiAxMkg0bDQtOCAzIDYgMi00IDMgNnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGxheSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNOS41NTUgNy4xNjhBMSAxIDAgMDA4IDh2NGExIDEgMCAwMDEuNTU1LjgzMmwzLTJhMSAxIDAgMDAwLTEuNjY0bC0zLTJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBsdXNDaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6bTEtMTFhMSAxIDAgMTAtMiAwdjJIN2ExIDEgMCAxMDAgMmgydjJhMSAxIDAgMTAyIDB2LTJoMmExIDEgMCAxMDAtMmgtMlY3elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQbHVzU20gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDVhMSAxIDAgMDExIDF2M2gzYTEgMSAwIDExMCAyaC0zdjNhMSAxIDAgMTEtMiAwdi0zSDZhMSAxIDAgMTEwLTJoM1Y2YTEgMSAwIDAxMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQbHVzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAzYTEgMSAwIDAxMSAxdjVoNWExIDEgMCAxMTAgMmgtNXY1YTEgMSAwIDExLTIgMHYtNUg0YTEgMSAwIDExMC0yaDVWNGExIDEgMCAwMTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUHJlc2VudGF0aW9uQ2hhcnRCYXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgM2ExIDEgMCAwMDAgMnY4YTIgMiAwIDAwMiAyaDIuNTg2bC0xLjI5MyAxLjI5M2ExIDEgMCAxMDEuNDE0IDEuNDE0TDEwIDE1LjQxNGwyLjI5MyAyLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0TDEyLjQxNCAxNUgxNWEyIDIgMCAwMDItMlY1YTEgMSAwIDEwMC0ySDN6bTExIDRhMSAxIDAgMTAtMiAwdjRhMSAxIDAgMTAyIDBWN3ptLTMgMWExIDEgMCAxMC0yIDB2M2ExIDEgMCAxMDIgMFY4ek04IDlhMSAxIDAgMDAtMiAwdjJhMSAxIDAgMTAyIDBWOXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUHJlc2VudGF0aW9uQ2hhcnRMaW5lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDNhMSAxIDAgMDAwIDJ2OGEyIDIgMCAwMDIgMmgyLjU4NmwtMS4yOTMgMS4yOTNhMSAxIDAgMTAxLjQxNCAxLjQxNEwxMCAxNS40MTRsMi4yOTMgMi4yOTNhMSAxIDAgMDAxLjQxNC0xLjQxNEwxMi40MTQgMTVIMTVhMiAyIDAgMDAyLTJWNWExIDEgMCAxMDAtMkgzem0xMS43MDcgNC43MDdhMSAxIDAgMDAtMS40MTQtMS40MTRMMTAgOS41ODYgOC43MDcgOC4yOTNhMSAxIDAgMDAtMS40MTQgMGwtMiAyYTEgMSAwIDEwMS40MTQgMS40MTRMOCAxMC40MTRsMS4yOTMgMS4yOTNhMSAxIDAgMDAxLjQxNCAwbDQtNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUHJpbnRlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNSA0djNINGEyIDIgMCAwMC0yIDJ2M2EyIDIgMCAwMDIgMmgxdjJhMiAyIDAgMDAyIDJoNmEyIDIgMCAwMDItMnYtMmgxYTIgMiAwIDAwMi0yVjlhMiAyIDAgMDAtMi0yaC0xVjRhMiAyIDAgMDAtMi0ySDdhMiAyIDAgMDAtMiAyem04IDBIN3YzaDZWNHptMCA4SDd2NGg2di00elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQdXp6bGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTAgMy41YTEuNSAxLjUgMCAwMTMgMFY0YTEgMSAwIDAwMSAxaDNhMSAxIDAgMDExIDF2M2ExIDEgMCAwMS0xIDFoLS41YTEuNSAxLjUgMCAwMDAgM2guNWExIDEgMCAwMTEgMXYzYTEgMSAwIDAxLTEgMWgtM2ExIDEgMCAwMS0xLTF2LS41YTEuNSAxLjUgMCAwMC0zIDB2LjVhMSAxIDAgMDEtMSAxSDZhMSAxIDAgMDEtMS0xdi0zYTEgMSAwIDAwLTEtMWgtLjVhMS41IDEuNSAwIDAxMC0zSDRhMSAxIDAgMDAxLTFWNmExIDEgMCAwMTEtMWgzYTEgMSAwIDAwMS0xdi0uNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlRcmNvZGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgNGExIDEgMCAwMTEtMWgzYTEgMSAwIDAxMSAxdjNhMSAxIDAgMDEtMSAxSDRhMSAxIDAgMDEtMS0xVjR6bTIgMlY1aDF2MUg1ek0zIDEzYTEgMSAwIDAxMS0xaDNhMSAxIDAgMDExIDF2M2ExIDEgMCAwMS0xIDFINGExIDEgMCAwMS0xLTF2LTN6bTIgMnYtMWgxdjFINXpNMTMgM2ExIDEgMCAwMC0xIDF2M2ExIDEgMCAwMDEgMWgzYTEgMSAwIDAwMS0xVjRhMSAxIDAgMDAtMS0xaC0zem0xIDJ2MWgxVjVoLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTExIDRhMSAxIDAgMTAtMiAwdjFhMSAxIDAgMDAyIDBWNHpNMTAgN2ExIDEgMCAwMTEgMXYxaDJhMSAxIDAgMTEwIDJoLTNhMSAxIDAgMDEtMS0xVjhhMSAxIDAgMDExLTF6TTE2IDlhMSAxIDAgMTAwIDIgMSAxIDAgMDAwLTJ6TTkgMTNhMSAxIDAgMDExLTFoMWExIDEgMCAxMTAgMnYyYTEgMSAwIDExLTIgMHYtM3pNNyAxMWExIDEgMCAxMDAtMkg0YTEgMSAwIDEwMCAyaDN6TTE3IDEzYTEgMSAwIDAxLTEgMWgtMmExIDEgMCAxMTAtMmgyYTEgMSAwIDAxMSAxek0xNiAxN2ExIDEgMCAxMDAtMmgtM2ExIDEgMCAxMDAgMmgzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVF1ZXN0aW9uTWFya0NpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS04LTNhMSAxIDAgMDAtLjg2Ny41IDEgMSAwIDExLTEuNzMxLTFBMyAzIDAgMDExMyA4YTMuMDAxIDMuMDAxIDAgMDEtMiAyLjgzVjExYTEgMSAwIDExLTIgMHYtMWExIDEgMCAwMTEtMSAxIDEgMCAxMDAtMnptMCA4YTEgMSAwIDEwMC0yIDEgMSAwIDAwMCAyelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlSZWNlaXB0UmVmdW5kIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDJhMiAyIDAgMDAtMiAydjE0bDMuNS0yIDMuNSAyIDMuNS0yIDMuNSAyVjRhMiAyIDAgMDAtMi0ySDV6bTQuNzA3IDMuNzA3YTEgMSAwIDAwLTEuNDE0LTEuNDE0bC0zIDNhMSAxIDAgMDAwIDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0LTEuNDE0TDguNDE0IDlIMTBhMyAzIDAgMDEzIDN2MWExIDEgMCAxMDIgMHYtMWE1IDUgMCAwMC01LTVIOC40MTRsMS4yOTMtMS4yOTN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVJlY2VpcHRUYXggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUgMmEyIDIgMCAwMC0yIDJ2MTRsMy41LTIgMy41IDIgMy41LTIgMy41IDJWNGEyIDIgMCAwMC0yLTJINXptMi41IDNhMS41IDEuNSAwIDEwMCAzIDEuNSAxLjUgMCAwMDAtM3ptNi4yMDcuMjkzYTEgMSAwIDAwLTEuNDE0IDBsLTYgNmExIDEgMCAxMDEuNDE0IDEuNDE0bDYtNmExIDEgMCAwMDAtMS40MTR6TTEyLjUgMTBhMS41IDEuNSAwIDEwMCAzIDEuNSAxLjUgMCAwMDAtM3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUmVmcmVzaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCAyYTEgMSAwIDAxMSAxdjIuMTAxYTcuMDAyIDcuMDAyIDAgMDExMS42MDEgMi41NjYgMSAxIDAgMTEtMS44ODUuNjY2QTUuMDAyIDUuMDAyIDAgMDA1Ljk5OSA3SDlhMSAxIDAgMDEwIDJINGExIDEgMCAwMS0xLTFWM2ExIDEgMCAwMTEtMXptLjAwOCA5LjA1N2ExIDEgMCAwMTEuMjc2LjYxQTUuMDAyIDUuMDAyIDAgMDAxNC4wMDEgMTNIMTFhMSAxIDAgMTEwLTJoNWExIDEgMCAwMTEgMXY1YTEgMSAwIDExLTIgMHYtMi4xMDFhNy4wMDIgNy4wMDIgMCAwMS0xMS42MDEtMi41NjYgMSAxIDAgMDEuNjEtMS4yNzZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVJlcGx5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03LjcwNyAzLjI5M2ExIDEgMCAwMTAgMS40MTRMNS40MTQgN0gxMWE3IDcgMCAwMTcgN3YyYTEgMSAwIDExLTIgMHYtMmE1IDUgMCAwMC01LTVINS40MTRsMi4yOTMgMi4yOTNhMSAxIDAgMTEtMS40MTQgMS40MTRsLTQtNGExIDEgMCAwMTAtMS40MTRsNC00YTEgMSAwIDAxMS40MTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUmV3aW5kIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTguNDQ1IDE0LjgzMkExIDEgMCAwMDEwIDE0di0yLjc5OGw1LjQ0NSAzLjYzQTEgMSAwIDAwMTcgMTRWNmExIDEgMCAwMC0xLjU1NS0uODMyTDEwIDguNzk4VjZhMSAxIDAgMDAtMS41NTUtLjgzMmwtNiA0YTEgMSAwIDAwMCAxLjY2NGw2IDR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUnNzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTUgM2ExIDEgMCAwMDAgMmM1LjUyMyAwIDEwIDQuNDc3IDEwIDEwYTEgMSAwIDEwMiAwQzE3IDguMzczIDExLjYyNyAzIDUgM3pcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk00IDlhMSAxIDAgMDExLTEgNyA3IDAgMDE3IDcgMSAxIDAgMTEtMiAwIDUgNSAwIDAwLTUtNSAxIDEgMCAwMS0xLTF6TTMgMTVhMiAyIDAgMTE0IDAgMiAyIDAgMDEtNCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNhdmVBcyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk05LjcwNyA3LjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwzIDNhMSAxIDAgMDAxLjQxNCAwbDMtM2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxMyA4LjU4NlY1aDNhMiAyIDAgMDEyIDJ2NWEyIDIgMCAwMS0yIDJIOGEyIDIgMCAwMS0yLTJWN2EyIDIgMCAwMTItMmgzdjMuNTg2TDkuNzA3IDcuMjkzek0xMSAzYTEgMSAwIDExMiAwdjJoLTJWM3pcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk00IDlhMiAyIDAgMDAtMiAydjVhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMkg0Vjl6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2F2ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk03LjcwNyAxMC4yOTNhMSAxIDAgMTAtMS40MTQgMS40MTRsMyAzYTEgMSAwIDAwMS40MTQgMGwzLTNhMSAxIDAgMDAtMS40MTQtMS40MTRMMTEgMTEuNTg2VjZoNWEyIDIgMCAwMTIgMnY3YTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMlY4YTIgMiAwIDAxMi0yaDV2NS41ODZsLTEuMjkzLTEuMjkzek05IDRhMSAxIDAgMDEyIDB2Mkg5VjR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2NhbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDJhMSAxIDAgMDExIDF2MS4zMjNsMy45NTQgMS41ODIgMS41OTktLjhhMSAxIDAgMDEuODk0IDEuNzlsLTEuMjMzLjYxNiAxLjczOCA1LjQyYTEgMSAwIDAxLS4yODUgMS4wNUEzLjk4OSAzLjk4OSAwIDAxMTUgMTVhMy45ODkgMy45ODkgMCAwMS0yLjY2Ny0xLjAxOSAxIDEgMCAwMS0uMjg1LTEuMDVsMS43MTUtNS4zNDlMMTEgNi40NzdWMTZoMmExIDEgMCAxMTAgMkg3YTEgMSAwIDExMC0yaDJWNi40NzdMNi4yMzcgNy41ODJsMS43MTUgNS4zNDlhMSAxIDAgMDEtLjI4NSAxLjA1QTMuOTg5IDMuOTg5IDAgMDE1IDE1YTMuOTg5IDMuOTg5IDAgMDEtMi42NjctMS4wMTkgMSAxIDAgMDEtLjI4NS0xLjA1bDEuNzM4LTUuNDItMS4yMzMtLjYxN2ExIDEgMCAwMS44OTQtMS43ODhsMS41OTkuNzk5TDkgNC4zMjNWM2ExIDEgMCAwMTEtMXptLTUgOC4yNzRsLS44MTggMi41NTJjLjI1LjExMi41MjYuMTc0LjgxOC4xNzQuMjkyIDAgLjU2OS0uMDYyLjgxOC0uMTc0TDUgMTAuMjc0em0xMCAwbC0uODE4IDIuNTUyYy4yNS4xMTIuNTI2LjE3NC44MTguMTc0LjI5MiAwIC41NjktLjA2Mi44MTgtLjE3NEwxNSAxMC4yNzR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNjaXNzb3JzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01LjUgMmEzLjUgMy41IDAgMTAxLjY2NSA2LjU4TDguNTg1IDEwbC0xLjQyIDEuNDJhMy41IDMuNSAwIDEwMS40MTQgMS40MTRsOC4xMjgtOC4xMjdhMSAxIDAgMDAtMS40MTQtMS40MTRMMTAgOC41ODZsLTEuNDItMS40MkEzLjUgMy41IDAgMDA1LjUgMnpNNCA1LjVhMS41IDEuNSAwIDExMyAwIDEuNSAxLjUgMCAwMS0zIDB6bTAgOWExLjUgMS41IDAgMTEzIDAgMS41IDEuNSAwIDAxLTMgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTIuODI4IDExLjQxNGExIDEgMCAwMC0xLjQxNCAxLjQxNGwzLjg3OSAzLjg4YTEgMSAwIDAwMS40MTQtMS40MTVsLTMuODc5LTMuODc5elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNlYXJjaENpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk05IDlhMiAyIDAgMTE0IDAgMiAyIDAgMDEtNCAwelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2em0xLTEzYTQgNCAwIDAwLTMuNDQ2IDYuMDMybC0yLjI2MSAyLjI2YTEgMSAwIDEwMS40MTQgMS40MTVsMi4yNjEtMi4yNjFBNCA0IDAgMTAxMSA1elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTZWFyY2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTggNGE0IDQgMCAxMDAgOCA0IDQgMCAwMDAtOHpNMiA4YTYgNiAwIDExMTAuODkgMy40NzZsNC44MTcgNC44MTdhMSAxIDAgMDEtMS40MTQgMS40MTRsLTQuODE2LTQuODE2QTYgNiAwIDAxMiA4elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTZWxlY3RvciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgM2ExIDEgMCAwMS43MDcuMjkzbDMgM2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCA1LjQxNCA3LjcwNyA3LjcwN2ExIDEgMCAwMS0xLjQxNC0xLjQxNGwzLTNBMSAxIDAgMDExMCAzem0tMy43MDcgOS4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDE0LjU4NmwyLjI5My0yLjI5M2ExIDEgMCAwMTEuNDE0IDEuNDE0bC0zIDNhMSAxIDAgMDEtMS40MTQgMGwtMy0zYTEgMSAwIDAxMC0xLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2VydmVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0yIDVhMiAyIDAgMDEyLTJoMTJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJWNXptMTQgMWExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6TTIgMTNhMiAyIDAgMDEyLTJoMTJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJ2LTJ6bTE0IDFhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTaGFyZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xNSA4YTMgMyAwIDEwLTIuOTc3LTIuNjNsLTQuOTQgMi40N2EzIDMgMCAxMDAgNC4zMTlsNC45NCAyLjQ3YTMgMyAwIDEwLjg5NS0xLjc4OWwtNC45NC0yLjQ3YTMuMDI3IDMuMDI3IDAgMDAwLS43NGw0Ljk0LTIuNDdDMTMuNDU2IDcuNjggMTQuMTkgOCAxNSA4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNoaWVsZENoZWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0yLjE2NiA0Ljk5OUExMS45NTQgMTEuOTU0IDAgMDAxMCAxLjk0NCAxMS45NTQgMTEuOTU0IDAgMDAxNy44MzQgNWMuMTEuNjUuMTY2IDEuMzIuMTY2IDIuMDAxIDAgNS4yMjUtMy4zNCA5LjY3LTggMTEuMzE3QzUuMzQgMTYuNjcgMiAxMi4yMjUgMiA3YzAtLjY4Mi4wNTctMS4zNS4xNjYtMi4wMDF6bTExLjU0MSAzLjcwOGExIDEgMCAwMC0xLjQxNC0xLjQxNEw5IDEwLjU4NiA3LjcwNyA5LjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwyIDJhMSAxIDAgMDAxLjQxNCAwbDQtNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2hpZWxkRXhjbGFtYXRpb24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDEuOTQ0QTExLjk1NCAxMS45NTQgMCAwMTIuMTY2IDVDMi4wNTYgNS42NDkgMiA2LjMxOSAyIDdjMCA1LjIyNSAzLjM0IDkuNjcgOCAxMS4zMTdDMTQuNjYgMTYuNjcgMTggMTIuMjI1IDE4IDdjMC0uNjgyLS4wNTctMS4zNS0uMTY2LTIuMDAxQTExLjk1NCAxMS45NTQgMCAwMTEwIDEuOTQ0ek0xMSAxNGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTAtN2ExIDEgMCAxMC0yIDB2M2ExIDEgMCAxMDIgMFY3elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTaG9wcGluZ0JhZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMmE0IDQgMCAwMC00IDR2MUg1YTEgMSAwIDAwLS45OTQuODlsLTEgOUExIDEgMCAwMDQgMThoMTJhMSAxIDAgMDAuOTk0LTEuMTFsLTEtOUExIDEgMCAwMDE1IDdoLTFWNmE0IDQgMCAwMC00LTR6bTIgNVY2YTIgMiAwIDEwLTQgMHYxaDR6bS02IDNhMSAxIDAgMTEyIDAgMSAxIDAgMDEtMiAwem03LTFhMSAxIDAgMTAwIDIgMSAxIDAgMDAwLTJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNob3BwaW5nQ2FydCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0zIDFhMSAxIDAgMDAwIDJoMS4yMmwuMzA1IDEuMjIyYS45OTcuOTk3IDAgMDAuMDEuMDQybDEuMzU4IDUuNDMtLjg5My44OTJDMy43NCAxMS44NDYgNC42MzIgMTQgNi40MTQgMTRIMTVhMSAxIDAgMDAwLTJINi40MTRsMS0xSDE0YTEgMSAwIDAwLjg5NC0uNTUzbDMtNkExIDEgMCAwMDE3IDNINi4yOGwtLjMxLTEuMjQzQTEgMSAwIDAwNSAxSDN6TTE2IDE2LjVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6TTYuNSAxOGExLjUgMS41IDAgMTAwLTMgMS41IDEuNSAwIDAwMCAzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNvcnRBc2NlbmRpbmcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMyAzYTEgMSAwIDAwMCAyaDExYTEgMSAwIDEwMC0ySDN6TTMgN2ExIDEgMCAwMDAgMmg1YTEgMSAwIDAwMC0ySDN6TTMgMTFhMSAxIDAgMTAwIDJoNGExIDEgMCAxMDAtMkgzek0xMyAxNmExIDEgMCAxMDIgMHYtNS41ODZsMS4yOTMgMS4yOTNhMSAxIDAgMDAxLjQxNC0xLjQxNGwtMy0zYTEgMSAwIDAwLTEuNDE0IDBsLTMgM2ExIDEgMCAxMDEuNDE0IDEuNDE0TDEzIDEwLjQxNFYxNnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTb3J0RGVzY2VuZGluZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0zIDNhMSAxIDAgMDAwIDJoMTFhMSAxIDAgMTAwLTJIM3pNMyA3YTEgMSAwIDAwMCAyaDdhMSAxIDAgMTAwLTJIM3pNMyAxMWExIDEgMCAxMDAgMmg0YTEgMSAwIDEwMC0ySDN6TTE1IDhhMSAxIDAgMTAtMiAwdjUuNTg2bC0xLjI5My0xLjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwzIDNhMSAxIDAgMDAxLjQxNCAwbDMtM2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxNSAxMy41ODZWOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTcGFya2xlcyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNSAyYTEgMSAwIDAxMSAxdjFoMWExIDEgMCAwMTAgMkg2djFhMSAxIDAgMDEtMiAwVjZIM2ExIDEgMCAwMTAtMmgxVjNhMSAxIDAgMDExLTF6bTAgMTBhMSAxIDAgMDExIDF2MWgxYTEgMSAwIDExMCAySDZ2MWExIDEgMCAxMS0yIDB2LTFIM2ExIDEgMCAxMTAtMmgxdi0xYTEgMSAwIDAxMS0xek0xMiAyYTEgMSAwIDAxLjk2Ny43NDRMMTQuMTQ2IDcuMiAxNy41IDkuMTM0YTEgMSAwIDAxMCAxLjczMmwtMy4zNTQgMS45MzUtMS4xOCA0LjQ1NWExIDEgMCAwMS0xLjkzMyAwTDkuODU0IDEyLjggNi41IDEwLjg2NmExIDEgMCAwMTAtMS43MzJsMy4zNTQtMS45MzUgMS4xOC00LjQ1NUExIDEgMCAwMTEyIDJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNwZWFrZXJwaG9uZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTggM2ExIDEgMCAwMC0xLjQ0Ny0uODk0TDguNzYzIDZINWEzIDMgMCAwMDAgNmguMjhsMS43NzEgNS4zMTZBMSAxIDAgMDA4IDE4aDFhMSAxIDAgMDAxLTF2LTQuMzgybDYuNTUzIDMuMjc2QTEgMSAwIDAwMTggMTVWM3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU3RhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk05LjA0OSAyLjkyN2MuMy0uOTIxIDEuNjAzLS45MjEgMS45MDIgMGwxLjA3IDMuMjkyYTEgMSAwIDAwLjk1LjY5aDMuNDYyYy45NjkgMCAxLjM3MSAxLjI0LjU4OCAxLjgxbC0yLjggMi4wMzRhMSAxIDAgMDAtLjM2NCAxLjExOGwxLjA3IDMuMjkyYy4zLjkyMS0uNzU1IDEuNjg4LTEuNTQgMS4xMThsLTIuOC0yLjAzNGExIDEgMCAwMC0xLjE3NSAwbC0yLjggMi4wMzRjLS43ODQuNTctMS44MzgtLjE5Ny0xLjUzOS0xLjExOGwxLjA3LTMuMjkyYTEgMSAwIDAwLS4zNjQtMS4xMThMMi45OCA4LjcyYy0uNzgzLS41Ny0uMzgtMS44MS41ODgtMS44MWgzLjQ2MWExIDEgMCAwMC45NTEtLjY5bDEuMDctMy4yOTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU3RhdHVzT2ZmbGluZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0zLjcwNyAyLjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGw2LjkyMSA2LjkyMmMuMDUuMDYyLjEwNS4xMTguMTY4LjE2N2w2LjkxIDYuOTExYTEgMSAwIDAwMS40MTUtMS40MTRsLS42NzUtLjY3NWE5LjAwMSA5LjAwMSAwIDAwLS42NjgtMTEuOTgyQTEgMSAwIDEwMTQuOTUgNS4wNWE3LjAwMiA3LjAwMiAwIDAxLjY1NyA5LjE0M2wtMS40MzUtMS40MzVhNS4wMDIgNS4wMDIgMCAwMC0uNjM2LTYuMjk0QTEgMSAwIDAwMTIuMTIgNy44OGMuOTI0LjkyMyAxLjEyIDIuMy41ODcgMy40MTVsLTEuOTkyLTEuOTkyYS45MjIuOTIyIDAgMDAtLjAxOC0uMDE4bC02Ljk5LTYuOTkxek0zLjIzOCA4LjE4N2ExIDEgMCAwMC0xLjkzMy0uNTE2Yy0uOCAzLS4wMjUgNi4zMzYgMi4zMzEgOC42OTNhMSAxIDAgMDAxLjQxNC0xLjQxNSA2Ljk5NyA2Ljk5NyAwIDAxLTEuODEyLTYuNzYyek03LjQgMTEuNWExIDEgMCAxMC0xLjczIDFjLjIxNC4zNzEuNDguNzIuNzk1IDEuMDM1YTEgMSAwIDAwMS40MTQtMS40MTRjLS4xOTEtLjE5MS0uMzUtLjQtLjQ3OC0uNjIyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVN0YXR1c09ubGluZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNS4wNSAzLjYzNmExIDEgMCAwMTAgMS40MTQgNyA3IDAgMDAwIDkuOSAxIDEgMCAxMS0xLjQxNCAxLjQxNCA5IDkgMCAwMTAtMTIuNzI4IDEgMSAwIDAxMS40MTQgMHptOS45IDBhMSAxIDAgMDExLjQxNCAwIDkgOSAwIDAxMCAxMi43MjggMSAxIDAgMTEtMS40MTQtMS40MTQgNyA3IDAgMDAwLTkuOSAxIDEgMCAwMTAtMS40MTR6TTcuODc5IDYuNDY0YTEgMSAwIDAxMCAxLjQxNCAzIDMgMCAwMDAgNC4yNDMgMSAxIDAgMTEtMS40MTUgMS40MTQgNSA1IDAgMDEwLTcuMDcgMSAxIDAgMDExLjQxNSAwem00LjI0MiAwYTEgMSAwIDAxMS40MTUgMCA1IDUgMCAwMTAgNy4wNzIgMSAxIDAgMDEtMS40MTUtMS40MTUgMyAzIDAgMDAwLTQuMjQyIDEgMSAwIDAxMC0xLjQxNXpNMTAgOWExIDEgMCAwMTEgMXYuMDFhMSAxIDAgMTEtMiAwVjEwYTEgMSAwIDAxMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTdG9wIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek04IDdhMSAxIDAgMDAtMSAxdjRhMSAxIDAgMDAxIDFoNGExIDEgMCAwMDEtMVY4YTEgMSAwIDAwLTEtMUg4elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTdW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDJhMSAxIDAgMDExIDF2MWExIDEgMCAxMS0yIDBWM2ExIDEgMCAwMTEtMXptNCA4YTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHptLS40NjQgNC45NWwuNzA3LjcwN2ExIDEgMCAwMDEuNDE0LTEuNDE0bC0uNzA3LS43MDdhMSAxIDAgMDAtMS40MTQgMS40MTR6bTIuMTItMTAuNjA3YTEgMSAwIDAxMCAxLjQxNGwtLjcwNi43MDdhMSAxIDAgMTEtMS40MTQtMS40MTRsLjcwNy0uNzA3YTEgMSAwIDAxMS40MTQgMHpNMTcgMTFhMSAxIDAgMTAwLTJoLTFhMSAxIDAgMTAwIDJoMXptLTcgNGExIDEgMCAwMTEgMXYxYTEgMSAwIDExLTIgMHYtMWExIDEgMCAwMTEtMXpNNS4wNSA2LjQ2NEExIDEgMCAxMDYuNDY1IDUuMDVsLS43MDgtLjcwN2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwuNzA3LjcwN3ptMS40MTQgOC40ODZsLS43MDcuNzA3YTEgMSAwIDAxLTEuNDE0LTEuNDE0bC43MDctLjcwN2ExIDEgMCAwMTEuNDE0IDEuNDE0ek00IDExYTEgMSAwIDEwMC0ySDNhMSAxIDAgMDAwIDJoMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU3VwcG9ydCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS0yIDBjMCAuOTkzLS4yNDEgMS45MjktLjY2OCAyLjc1NGwtMS41MjQtMS41MjVhMy45OTcgMy45OTcgMCAwMC4wNzgtMi4xODNsMS41NjItMS41NjJDMTUuODAyIDguMjQ5IDE2IDkuMSAxNiAxMHptLTUuMTY1IDMuOTEzbDEuNTggMS41OEE1Ljk4IDUuOTggMCAwMTEwIDE2YTUuOTc2IDUuOTc2IDAgMDEtMi41MTYtLjU1MmwxLjU2Mi0xLjU2MmE0LjAwNiA0LjAwNiAwIDAwMS43ODkuMDI3em0tNC42NzctMi43OTZhNC4wMDIgNC4wMDIgMCAwMS0uMDQxLTIuMDhsLS4wOC4wOC0xLjUzLTEuNTMzQTUuOTggNS45OCAwIDAwNCAxMGMwIC45NTQuMjIzIDEuODU2LjYxOSAyLjY1N2wxLjU0LTEuNTR6bTEuMDg4LTYuNDVBNS45NzQgNS45NzQgMCAwMTEwIDRjLjk1NCAwIDEuODU2LjIyMyAyLjY1Ny42MTlsLTEuNTQgMS41NGE0LjAwMiA0LjAwMiAwIDAwLTIuMzQ2LjAzM0w3LjI0NiA0LjY2OHpNMTIgMTBhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTd2l0Y2hIb3Jpem9udGFsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTggNWExIDEgMCAxMDAgMmg1LjU4NmwtMS4yOTMgMS4yOTNhMSAxIDAgMDAxLjQxNCAxLjQxNGwzLTNhMSAxIDAgMDAwLTEuNDE0bC0zLTNhMSAxIDAgMTAtMS40MTQgMS40MTRMMTMuNTg2IDVIOHpNMTIgMTVhMSAxIDAgMTAwLTJINi40MTRsMS4yOTMtMS4yOTNhMSAxIDAgMTAtMS40MTQtMS40MTRsLTMgM2ExIDEgMCAwMDAgMS40MTRsMyAzYTEgMSAwIDAwMS40MTQtMS40MTRMNi40MTQgMTVIMTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU3dpdGNoVmVydGljYWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNSAxMmExIDEgMCAxMDIgMFY2LjQxNGwxLjI5MyAxLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0bC0zLTNhMSAxIDAgMDAtMS40MTQgMGwtMyAzYTEgMSAwIDAwMS40MTQgMS40MTRMNSA2LjQxNFYxMnpNMTUgOGExIDEgMCAxMC0yIDB2NS41ODZsLTEuMjkzLTEuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0IDBsMy0zYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDE1IDEzLjU4NlY4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVRhYmxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDRhMyAzIDAgMDAtMyAzdjZhMyAzIDAgMDAzIDNoMTBhMyAzIDAgMDAzLTNWN2EzIDMgMCAwMC0zLTNINXptLTEgOXYtMWg1djJINWExIDEgMCAwMS0xLTF6bTcgMWg0YTEgMSAwIDAwMS0xdi0xaC01djJ6bTAtNGg1VjhoLTV2MnpNOSA4SDR2Mmg1Vjh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVRhZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTcuNzA3IDkuMjkzYTEgMSAwIDAxMCAxLjQxNGwtNyA3YTEgMSAwIDAxLTEuNDE0IDBsLTctN0EuOTk3Ljk5NyAwIDAxMiAxMFY1YTMgMyAwIDAxMy0zaDVjLjI1NiAwIC41MTIuMDk4LjcwNy4yOTNsNyA3ek01IDZhMSAxIDAgMTAwLTIgMSAxIDAgMDAwIDJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVRlbXBsYXRlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTMgNGExIDEgMCAwMTEtMWgxMmExIDEgMCAwMTEgMXYyYTEgMSAwIDAxLTEgMUg0YTEgMSAwIDAxLTEtMVY0ek0zIDEwYTEgMSAwIDAxMS0xaDZhMSAxIDAgMDExIDF2NmExIDEgMCAwMS0xIDFINGExIDEgMCAwMS0xLTF2LTZ6TTE0IDlhMSAxIDAgMDAtMSAxdjZhMSAxIDAgMDAxIDFoMmExIDEgMCAwMDEtMXYtNmExIDEgMCAwMC0xLTFoLTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVGVybWluYWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTIgNWEyIDIgMCAwMTItMmgxMmEyIDIgMCAwMTIgMnYxMGEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJWNXptMy4yOTMgMS4yOTNhMSAxIDAgMDExLjQxNCAwbDMgM2ExIDEgMCAwMTAgMS40MTRsLTMgM2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw3LjU4NiAxMCA1LjI5MyA3LjcwN2ExIDEgMCAwMTAtMS40MTR6TTExIDEyYTEgMSAwIDEwMCAyaDNhMSAxIDAgMTAwLTJoLTN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVRodW1iRG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xOCA5LjVhMS41IDEuNSAwIDExLTMgMHYtNmExLjUgMS41IDAgMDEzIDB2NnpNMTQgOS42Njd2LTUuNDNhMiAyIDAgMDAtMS4xMDUtMS43OWwtLjA1LS4wMjVBNCA0IDAgMDAxMS4wNTUgMkg1LjY0YTIgMiAwIDAwLTEuOTYyIDEuNjA4bC0xLjIgNkEyIDIgMCAwMDQuNDQgMTJIOHY0YTIgMiAwIDAwMiAyIDEgMSAwIDAwMS0xdi0uNjY3YTQgNCAwIDAxLjgtMi40bDEuNC0xLjg2NmE0IDQgMCAwMC44LTIuNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlUaHVtYlVwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgMTAuNWExLjUgMS41IDAgMTEzIDB2NmExLjUgMS41IDAgMDEtMyAwdi02ek02IDEwLjMzM3Y1LjQzYTIgMiAwIDAwMS4xMDYgMS43OWwuMDUuMDI1QTQgNCAwIDAwOC45NDMgMThoNS40MTZhMiAyIDAgMDAxLjk2Mi0xLjYwOGwxLjItNkEyIDIgMCAwMDE1LjU2IDhIMTJWNGEyIDIgMCAwMC0yLTIgMSAxIDAgMDAtMSAxdi42NjdhNCA0IDAgMDEtLjggMi40TDYuOCA3LjkzM2E0IDQgMCAwMC0uOCAyLjR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVGlja2V0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgNmEyIDIgMCAwMTItMmgxMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDEwMCA0djJhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0ydi0yYTIgMiAwIDEwMC00VjZ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVHJhbnNsYXRlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03IDJhMSAxIDAgMDExIDF2MWgzYTEgMSAwIDExMCAySDkuNTc4YTE4Ljg3IDE4Ljg3IDAgMDEtMS43MjQgNC43OGMuMjkuMzU0LjU5Ni42OTYuOTE0IDEuMDI2YTEgMSAwIDExLTEuNDQgMS4zODljLS4xODgtLjE5Ni0uMzczLS4zOTYtLjU1NC0uNmExOS4wOTggMTkuMDk4IDAgMDEtMy4xMDcgMy41NjcgMSAxIDAgMDEtMS4zMzQtMS40OSAxNy4wODcgMTcuMDg3IDAgMDAzLjEzLTMuNzMzIDE4Ljk5MiAxOC45OTIgMCAwMS0xLjQ4Ny0yLjQ5NCAxIDEgMCAxMTEuNzktLjg5Yy4yMzQuNDcuNDg5LjkyOC43NjQgMS4zNzIuNDE3LS45MzQuNzUyLTEuOTEzLjk5Ny0yLjkyN0gzYTEgMSAwIDExMC0yaDNWM2ExIDEgMCAwMTEtMXptNiA2YTEgMSAwIDAxLjg5NC41NTNsMi45OTEgNS45ODJhLjg2OS44NjkgMCAwMS4wMi4wMzdsLjk5IDEuOThhMSAxIDAgMTEtMS43OS44OTVMMTUuMzgzIDE2aC00Ljc2NGwtLjcyNCAxLjQ0N2ExIDEgMCAxMS0xLjc4OC0uODk0bC45OS0xLjk4LjAxOS0uMDM4IDIuOTktNS45ODJBMSAxIDAgMDExMyA4em0tMS4zODIgNmgyLjc2NEwxMyAxMS4yMzYgMTEuNjE4IDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlUcmFzaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOSAyYTEgMSAwIDAwLS44OTQuNTUzTDcuMzgyIDRINGExIDEgMCAwMDAgMnYxMGEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0yVjZhMSAxIDAgMTAwLTJoLTMuMzgybC0uNzI0LTEuNDQ3QTEgMSAwIDAwMTEgMkg5ek03IDhhMSAxIDAgMDEyIDB2NmExIDEgMCAxMS0yIDBWOHptNS0xYTEgMSAwIDAwLTEgMXY2YTEgMSAwIDEwMiAwVjhhMSAxIDAgMDAtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlUcmVuZGluZ0Rvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEyIDEzYTEgMSAwIDEwMCAyaDVhMSAxIDAgMDAxLTFWOWExIDEgMCAxMC0yIDB2Mi41ODZsLTQuMjkzLTQuMjkzYTEgMSAwIDAwLTEuNDE0IDBMOCA5LjU4NiAzLjcwNyA1LjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGw1IDVhMSAxIDAgMDAxLjQxNCAwTDExIDkuNDE0IDE0LjU4NiAxM0gxMnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVHJlbmRpbmdVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTIgN2ExIDEgMCAxMTAtMmg1YTEgMSAwIDAxMSAxdjVhMSAxIDAgMTEtMiAwVjguNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAwTDggMTAuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNGw1LTVhMSAxIDAgMDExLjQxNCAwTDExIDEwLjU4NiAxNC41ODYgN0gxMnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVHJ1Y2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOCAxNi41YTEuNSAxLjUgMCAxMS0zIDAgMS41IDEuNSAwIDAxMyAwek0xNSAxNi41YTEuNSAxLjUgMCAxMS0zIDAgMS41IDEuNSAwIDAxMyAwelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTMgNGExIDEgMCAwMC0xIDF2MTBhMSAxIDAgMDAxIDFoMS4wNWEyLjUgMi41IDAgMDE0LjkgMEgxMGExIDEgMCAwMDEtMVY1YTEgMSAwIDAwLTEtMUgzek0xNCA3YTEgMSAwIDAwLTEgMXY2LjA1QTIuNSAyLjUgMCAwMTE1Ljk1IDE2SDE3YTEgMSAwIDAwMS0xdi01YTEgMSAwIDAwLS4yOTMtLjcwN2wtMi0yQTEgMSAwIDAwMTUgN2gtMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlVcGxvYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgMTdhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTYuMjkzIDYuNzA3YTEgMSAwIDAxMC0xLjQxNGwzLTNhMSAxIDAgMDExLjQxNCAwbDMgM2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMSA1LjQxNFYxM2ExIDEgMCAxMS0yIDBWNS40MTRMNy43MDcgNi43MDdhMSAxIDAgMDEtMS40MTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVXNlckFkZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk04IDlhMyAzIDAgMTAwLTYgMyAzIDAgMDAwIDZ6TTggMTFhNiA2IDAgMDE2IDZIMmE2IDYgMCAwMTYtNnpNMTYgN2ExIDEgMCAxMC0yIDB2MWgtMWExIDEgMCAxMDAgMmgxdjFhMSAxIDAgMTAyIDB2LTFoMWExIDEgMCAxMDAtMmgtMVY3elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVVzZXJDaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNi0zYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHptLTIgNGE1IDUgMCAwMC00LjU0NiAyLjkxNkE1Ljk4NiA1Ljk4NiAwIDAwMTAgMTZhNS45ODYgNS45ODYgMCAwMDQuNTQ2LTIuMDg0QTUgNSAwIDAwMTAgMTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVVzZXJHcm91cCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMyA2YTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpNMTggOGEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6TTE0IDE1YTQgNCAwIDAwLTggMHYzaDh2LTN6TTYgOGEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6TTE2IDE4di0zYTUuOTcyIDUuOTcyIDAgMDAtLjc1LTIuOTA2QTMuMDA1IDMuMDA1IDAgMDExOSAxNXYzaC0zek00Ljc1IDEyLjA5NEE1Ljk3MyA1Ljk3MyAwIDAwNCAxNXYzSDF2LTNhMyAzIDAgMDEzLjc1LTIuOTA2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVVzZXJSZW1vdmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTEgNmEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6TTE0IDE3YTYgNiAwIDAwLTEyIDBoMTJ6TTEzIDhhMSAxIDAgMTAwIDJoNGExIDEgMCAxMDAtMmgtNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlVc2VyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCA5YTMgMyAwIDEwMC02IDMgMyAwIDAwMCA2em0tNyA5YTcgNyAwIDExMTQgMEgzelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlVc2VycyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk05IDZhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwek0xNyA2YTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpNMTIuOTMgMTdjLjA0Ni0uMzI3LjA3LS42Ni4wNy0xYTYuOTcgNi45NyAwIDAwLTEuNS00LjMzQTUgNSAwIDAxMTkgMTZ2MWgtNi4wN3pNNiAxMWE1IDUgMCAwMTUgNXYxSDF2LTFhNSA1IDAgMDE1LTV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVmFyaWFibGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQuNjQ5IDMuMDg0QTEgMSAwIDAxNS4xNjMgNC40IDEzLjk1IDEzLjk1IDAgMDA0IDEwYzAgMS45OTMuNDE2IDMuODg2IDEuMTY0IDUuNmExIDEgMCAwMS0xLjgzMi44QTE1Ljk1IDE1Ljk1IDAgMDEyIDEwYzAtMi4yNzQuNDc1LTQuNDQgMS4zMzItNi40YTEgMSAwIDAxMS4zMTctLjUxNnpNMTIuOTYgN2EzIDMgMCAwMC0yLjM0MiAxLjEyNmwtLjMyOC40MS0uMTExLS4yNzlBMiAyIDAgMDA4LjMyMyA3SDhhMSAxIDAgMDAwIDJoLjMyM2wuNTMyIDEuMzMtMS4wMzUgMS4yOTVhMSAxIDAgMDEtLjc4MS4zNzVIN2ExIDEgMCAxMDAgMmguMDM5YTMgMyAwIDAwMi4zNDItMS4xMjZsLjMyOC0uNDEuMTExLjI3OUEyIDIgMCAwMDExLjY3NyAxNEgxMmExIDEgMCAxMDAtMmgtLjMyM2wtLjUzMi0xLjMzIDEuMDM1LTEuMjk1QTEgMSAwIDAxMTIuOTYxIDlIMTNhMSAxIDAgMTAwLTJoLS4wMzl6bTEuODc0LTIuNmExIDEgMCAwMTEuODMzLS44QTE1Ljk1IDE1Ljk1IDAgMDExOCAxMGMwIDIuMjc0LS40NzUgNC40NC0xLjMzMiA2LjRhMSAxIDAgMTEtMS44MzItLjhBMTMuOTQ5IDEzLjk0OSAwIDAwMTYgMTBjMC0xLjk5My0uNDE2LTMuODg2LTEuMTY1LTUuNnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVmlkZW9DYW1lcmEgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiA2YTIgMiAwIDAxMi0yaDZhMiAyIDAgMDEyIDJ2OGEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJWNnpNMTQuNTUzIDcuMTA2QTEgMSAwIDAwMTQgOHY0YTEgMSAwIDAwLjU1My44OTRsMiAxQTEgMSAwIDAwMTggMTNWN2ExIDEgMCAwMC0xLjQ0Ny0uODk0bC0yIDF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVmlld0JvYXJkcyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDRhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXYxMmExIDEgMCAwMS0xIDFIM2ExIDEgMCAwMS0xLTFWNHpNOCA0YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2MTJhMSAxIDAgMDEtMSAxSDlhMSAxIDAgMDEtMS0xVjR6TTE1IDNhMSAxIDAgMDAtMSAxdjEyYTEgMSAwIDAwMSAxaDJhMSAxIDAgMDAxLTFWNGExIDEgMCAwMC0xLTFoLTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVmlld0dyaWRBZGQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNSAzYTIgMiAwIDAwLTIgMnYyYTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJINXpNNSAxMWEyIDIgMCAwMC0yIDJ2MmEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0ydi0yYTIgMiAwIDAwLTItMkg1ek0xMSA1YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJoLTJhMiAyIDAgMDEtMi0yVjV6TTE0IDExYTEgMSAwIDAxMSAxdjFoMWExIDEgMCAxMTAgMmgtMXYxYTEgMSAwIDExLTIgMHYtMWgtMWExIDEgMCAxMTAtMmgxdi0xYTEgMSAwIDAxMS0xelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVZpZXdHcmlkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTUgM2EyIDIgMCAwMC0yIDJ2MmEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0ySDV6TTUgMTFhMiAyIDAgMDAtMiAydjJhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMnYtMmEyIDIgMCAwMC0yLTJINXpNMTEgNWEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMlY1ek0xMSAxM2EyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMnYtMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlWaWV3TGlzdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA0YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xem0wIDRhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6bTAgNGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXptMCA0YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlWb2x1bWVPZmYgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkuMzgzIDMuMDc2QTEgMSAwIDAxMTAgNHYxMmExIDEgMCAwMS0xLjcwNy43MDdMNC41ODYgMTNIMmExIDEgMCAwMS0xLTFWOGExIDEgMCAwMTEtMWgyLjU4NmwzLjcwNy0zLjcwN2ExIDEgMCAwMTEuMDktLjIxN3pNMTIuMjkzIDcuMjkzYTEgMSAwIDAxMS40MTQgMEwxNSA4LjU4NmwxLjI5My0xLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDE2LjQxNCAxMGwxLjI5MyAxLjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxNSAxMS40MTRsLTEuMjkzIDEuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDEzLjU4NiAxMGwtMS4yOTMtMS4yOTNhMSAxIDAgMDEwLTEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlWb2x1bWVVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOS4zODMgMy4wNzZBMSAxIDAgMDExMCA0djEyYTEgMSAwIDAxLTEuNzA3LjcwN0w0LjU4NiAxM0gyYTEgMSAwIDAxLTEtMVY4YTEgMSAwIDAxMS0xaDIuNTg2bDMuNzA3LTMuNzA3YTEgMSAwIDAxMS4wOS0uMjE3ek0xNC42NTcgMi45MjlhMSAxIDAgMDExLjQxNCAwQTkuOTcyIDkuOTcyIDAgMDExOSAxMGE5Ljk3MiA5Ljk3MiAwIDAxLTIuOTI5IDcuMDcxIDEgMSAwIDAxLTEuNDE0LTEuNDE0QTcuOTcxIDcuOTcxIDAgMDAxNyAxMGMwLTIuMjEtLjg5NC00LjIwOC0yLjM0My01LjY1N2ExIDEgMCAwMTAtMS40MTR6bS0yLjgyOSAyLjgyOGExIDEgMCAwMTEuNDE1IDBBNS45ODMgNS45ODMgMCAwMTE1IDEwYTUuOTg0IDUuOTg0IDAgMDEtMS43NTcgNC4yNDMgMSAxIDAgMDEtMS40MTUtMS40MTVBMy45ODQgMy45ODQgMCAwMDEzIDEwYTMuOTgzIDMuOTgzIDAgMDAtMS4xNzItMi44MjggMSAxIDAgMDEwLTEuNDE1elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlXaWZpIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNy43NzggOC4yMjJjLTQuMjk2LTQuMjk2LTExLjI2LTQuMjk2LTE1LjU1NiAwQTEgMSAwIDAxLjgwOCA2LjgwOGM1LjA3Ni01LjA3NyAxMy4zMDgtNS4wNzcgMTguMzg0IDBhMSAxIDAgMDEtMS40MTQgMS40MTR6TTE0Ljk1IDExLjA1YTcgNyAwIDAwLTkuOSAwIDEgMSAwIDAxLTEuNDE0LTEuNDE0IDkgOSAwIDAxMTIuNzI4IDAgMSAxIDAgMDEtMS40MTQgMS40MTR6TTEyLjEyIDEzLjg4YTMgMyAwIDAwLTQuMjQyIDAgMSAxIDAgMDEtMS40MTUtMS40MTUgNSA1IDAgMDE3LjA3MiAwIDEgMSAwIDAxLTEuNDE1IDEuNDE1ek05IDE2YTEgMSAwIDAxMS0xaC4wMWExIDEgMCAxMTAgMkgxMGExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVhDaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTguNzA3IDcuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0TDguNTg2IDEwbC0xLjI5MyAxLjI5M2ExIDEgMCAxMDEuNDE0IDEuNDE0TDEwIDExLjQxNGwxLjI5MyAxLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0TDExLjQxNCAxMGwxLjI5My0xLjI5M2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxMCA4LjU4NiA4LjcwNyA3LjI5M3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpWCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNC4yOTMgNC4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDguNTg2bDQuMjkzLTQuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMMTEuNDE0IDEwbDQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMOC41ODYgMTAgNC4yOTMgNS43MDdhMSAxIDAgMDEwLTEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlab29tSW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNSA4YTEgMSAwIDAxMS0xaDFWNmExIDEgMCAwMTIgMHYxaDFhMSAxIDAgMTEwIDJIOXYxYTEgMSAwIDExLTIgMFY5SDZhMSAxIDAgMDEtMS0xelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0yIDhhNiA2IDAgMTExMC44OSAzLjQ3Nmw0LjgxNyA0LjgxN2ExIDEgMCAwMS0xLjQxNCAxLjQxNGwtNC44MTYtNC44MTZBNiA2IDAgMDEyIDh6bTYtNGE0IDQgMCAxMDAgOCA0IDQgMCAwMDAtOHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpWm9vbU91dCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOCA0YTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04ek0yIDhhNiA2IDAgMTExMC44OSAzLjQ3Nmw0LjgxNyA0LjgxN2ExIDEgMCAwMS0xLjQxNCAxLjQxNGwtNC44MTYtNC44MTZBNiA2IDAgMDEyIDh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDhhMSAxIDAgMDExLTFoNGExIDEgMCAxMTAgMkg2YTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFjYWRlbWljQ2FwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTIgMTRsOS01LTktNS05IDUgOSA1elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEyIDE0bDYuMTYtMy40MjJhMTIuMDgzIDEyLjA4MyAwIDAxLjY2NSA2LjQ3OUExMS45NTIgMTEuOTUyIDAgMDAxMiAyMC4wNTVhMTEuOTUyIDExLjk1MiAwIDAwLTYuODI0LTIuOTk4IDEyLjA3OCAxMi4wNzggMCAwMS42NjUtNi40NzlMMTIgMTR6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDE0bDktNS05LTUtOSA1IDkgNXptMCAwbDYuMTYtMy40MjJhMTIuMDgzIDEyLjA4MyAwIDAxLjY2NSA2LjQ3OUExMS45NTIgMTEuOTUyIDAgMDAxMiAyMC4wNTVhMTEuOTUyIDExLjk1MiAwIDAwLTYuODI0LTIuOTk4IDEyLjA3OCAxMi4wNzggMCAwMS42NjUtNi40NzlMMTIgMTR6bS00IDZ2LTcuNWw0LTIuMjIyXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFkanVzdG1lbnRzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDZWNG0wIDJhMiAyIDAgMTAwIDRtMC00YTIgMiAwIDExMCA0bS02IDhhMiAyIDAgMTAwLTRtMCA0YTIgMiAwIDExMC00bTAgNHYybTAtNlY0bTYgNnYxMG02LTJhMiAyIDAgMTAwLTRtMCA0YTIgMiAwIDExMC00bTAgNHYybTAtNlY0XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFubm90YXRpb24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyA4aDEwTTcgMTJoNG0xIDhsLTQtNEg1YTIgMiAwIDAxLTItMlY2YTIgMiAwIDAxMi0yaDE0YTIgMiAwIDAxMiAydjhhMiAyIDAgMDEtMiAyaC0zbC00IDR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFyY2hpdmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNSA4aDE0TTUgOGEyIDIgMCAxMTAtNGgxNGEyIDIgMCAxMTAgNE01IDh2MTBhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJWOG0tOSA0aDRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dDaXJjbGVEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDEzbC0zIDNtMCAwbC0zLTNtMyAzVjhtMCAxM2E5IDkgMCAxMTAtMTggOSA5IDAgMDEwIDE4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd0NpcmNsZUxlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTEgMTVsLTMtM20wIDBsMy0zbS0zIDNoOE0zIDEyYTkgOSAwIDExMTggMCA5IDkgMCAwMS0xOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd0NpcmNsZVJpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEzIDlsMyAzbTAgMGwtMyAzbTMtM0g4bTEzIDBhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93Q2lyY2xlVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxMWwzLTNtMCAwbDMgM20tMy0zdjhtMC0xM2E5IDkgMCAxMTAgMTggOSA5IDAgMDEwLTE4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd0Rvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTkgMTRsLTcgN20wIDBsLTctN203IDdWM1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd0xlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTAgMTlsLTctN20wIDBsNy03bS03IDdoMThcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dOYXJyb3dEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE2IDE3bC00IDRtMCAwbC00LTRtNCA0VjNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dOYXJyb3dMZWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTcgMTZsLTQtNG0wIDBsNC00bS00IDRoMThcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dOYXJyb3dSaWdodCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNyA4bDQgNG0wIDBsLTQgNG00LTRIM1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd05hcnJvd1VwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggN2w0LTRtMCAwbDQgNG0tNC00djE4XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93UmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTQgNWw3IDdtMCAwbC03IDdtNy03SDNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dTbURvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcgMTNsLTUgNW0wIDBsLTUtNW01IDVWNlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd1NtTGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMSAxN2wtNS01bTAgMGw1LTVtLTUgNWgxMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd1NtUmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTMgN2w1IDVtMCAwbC01IDVtNS01SDZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dTbVVwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTcgMTFsNS01bTAgMGw1IDVtLTUtNXYxMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd1VwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTUgMTBsNy03bTAgMGw3IDdtLTctN3YxOFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd3NFeHBhbmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNCA4VjRtMCAwaDRNNCA0bDUgNW0xMS0xVjRtMCAwaC00bTQgMGwtNSA1TTQgMTZ2NG0wIDBoNG0tNCAwbDUtNW0xMSA1bC01LTVtNSA1di00bTAgNGgtNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBdFN5bWJvbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNiAxMmE0IDQgMCAxMC04IDAgNCA0IDAgMDA4IDB6bTAgMHYxLjVhMi41IDIuNSAwIDAwNSAwVjEyYTkgOSAwIDEwLTkgOW00LjUtMS4yMDZhOC45NTkgOC45NTkgMCAwMS00LjUgMS4yMDdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQmFja3NwYWNlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDE0bDItMm0wIDBsMi0ybS0yIDJsLTItMm0yIDJsMiAyTTMgMTJsNi40MTQgNi40MTRhMiAyIDAgMDAxLjQxNC41ODZIMTlhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJoLTguMTcyYTIgMiAwIDAwLTEuNDE0LjU4NkwzIDEyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVCYWRnZUNoZWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTJsMiAyIDQtNE03LjgzNSA0LjY5N2EzLjQyIDMuNDIgMCAwMDEuOTQ2LS44MDYgMy40MiAzLjQyIDAgMDE0LjQzOCAwIDMuNDIgMy40MiAwIDAwMS45NDYuODA2IDMuNDIgMy40MiAwIDAxMy4xMzggMy4xMzggMy40MiAzLjQyIDAgMDAuODA2IDEuOTQ2IDMuNDIgMy40MiAwIDAxMCA0LjQzOCAzLjQyIDMuNDIgMCAwMC0uODA2IDEuOTQ2IDMuNDIgMy40MiAwIDAxLTMuMTM4IDMuMTM4IDMuNDIgMy40MiAwIDAwLTEuOTQ2LjgwNiAzLjQyIDMuNDIgMCAwMS00LjQzOCAwIDMuNDIgMy40MiAwIDAwLTEuOTQ2LS44MDYgMy40MiAzLjQyIDAgMDEtMy4xMzgtMy4xMzggMy40MiAzLjQyIDAgMDAtLjgwNi0xLjk0NiAzLjQyIDMuNDIgMCAwMTAtNC40MzggMy40MiAzLjQyIDAgMDAuODA2LTEuOTQ2IDMuNDIgMy40MiAwIDAxMy4xMzgtMy4xMzh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUJhbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xOC4zNjQgMTguMzY0QTkgOSAwIDAwNS42MzYgNS42MzZtMTIuNzI4IDEyLjcyOEE5IDkgMCAwMTUuNjM2IDUuNjM2bTEyLjcyOCAxMi43MjhMNS42MzYgNS42MzZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQmVha2VyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE5LjQyOCAxNS40MjhhMiAyIDAgMDAtMS4wMjItLjU0N2wtMi4zODctLjQ3N2E2IDYgMCAwMC0zLjg2LjUxN2wtLjMxOC4xNThhNiA2IDAgMDEtMy44Ni41MTdMNi4wNSAxNS4yMWEyIDIgMCAwMC0xLjgwNi41NDdNOCA0aDhsLTEgMXY1LjE3MmEyIDIgMCAwMC41ODYgMS40MTRsNSA1YzEuMjYgMS4yNi4zNjcgMy40MTQtMS40MTUgMy40MTRINC44MjhjLTEuNzgyIDAtMi42NzQtMi4xNTQtMS40MTQtMy40MTRsNS01QTIgMiAwIDAwOSAxMC4xNzJWNUw4IDR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUJlbGwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgMTdoNWwtMS40MDUtMS40MDVBMi4wMzIgMi4wMzIgMCAwMTE4IDE0LjE1OFYxMWE2LjAwMiA2LjAwMiAwIDAwLTQtNS42NTlWNWEyIDIgMCAxMC00IDB2LjM0MUM3LjY3IDYuMTY1IDYgOC4zODggNiAxMXYzLjE1OWMwIC41MzgtLjIxNCAxLjA1NS0uNTk1IDEuNDM2TDQgMTdoNW02IDB2MWEzIDMgMCAxMS02IDB2LTFtNiAwSDlcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQm9va09wZW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgNi4yNTN2MTNtMC0xM0MxMC44MzIgNS40NzcgOS4yNDYgNSA3LjUgNVM0LjE2OCA1LjQ3NyAzIDYuMjUzdjEzQzQuMTY4IDE4LjQ3NyA1Ljc1NCAxOCA3LjUgMThzMy4zMzIuNDc3IDQuNSAxLjI1M20wLTEzQzEzLjE2OCA1LjQ3NyAxNC43NTQgNSAxNi41IDVjMS43NDcgMCAzLjMzMi40NzcgNC41IDEuMjUzdjEzQzE5LjgzMiAxOC40NzcgMTguMjQ3IDE4IDE2LjUgMThjLTEuNzQ2IDAtMy4zMzIuNDc3LTQuNSAxLjI1M1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVCb29rbWFya0FsdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNiA0djEybC00LTItNCAyVjRNNiAyMGgxMmEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQm9va21hcmsgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNSA1YTIgMiAwIDAxMi0yaDEwYTIgMiAwIDAxMiAydjE2bC03LTMuNUw1IDIxVjV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUJyaWVmY2FzZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMSAxMy4yNTVBMjMuOTMxIDIzLjkzMSAwIDAxMTIgMTVjLTMuMTgzIDAtNi4yMi0uNjItOS0xLjc0NU0xNiA2VjRhMiAyIDAgMDAtMi0yaC00YTIgMiAwIDAwLTIgMnYybTQgNmguMDFNNSAyMGgxNGEyIDIgMCAwMDItMlY4YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2FrZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMSAxNS41NDZjLS41MjMgMC0xLjA0Ni4xNTEtMS41LjQ1NGEyLjcwNCAyLjcwNCAwIDAxLTMgMCAyLjcwNCAyLjcwNCAwIDAwLTMgMCAyLjcwNCAyLjcwNCAwIDAxLTMgMCAyLjcwNCAyLjcwNCAwIDAwLTMgMCAyLjcwNCAyLjcwNCAwIDAxLTMgMCAyLjcwMSAyLjcwMSAwIDAwLTEuNS0uNDU0TTkgNnYybTMtMnYybTMtMnYyTTkgM2guMDFNMTIgM2guMDFNMTUgM2guMDFNMjEgMjF2LTdhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjdoMTh6bS0zLTl2LTJhMiAyIDAgMDAtMi0ySDhhMiAyIDAgMDAtMiAydjJoMTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNhbGN1bGF0b3IgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSA3aDZtMCAxMHYtM20tMyAzaC4wMU05IDE3aC4wMU05IDE0aC4wMU0xMiAxNGguMDFNMTUgMTFoLjAxTTEyIDExaC4wMU05IDExaC4wMU03IDIxaDEwYTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0ySDdhMiAyIDAgMDAtMiAydjE0YTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDYWxlbmRhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDdWM204IDRWM20tOSA4aDEwTTUgMjFoMTRhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNhbWVyYSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0zIDlhMiAyIDAgMDEyLTJoLjkzYTIgMiAwIDAwMS42NjQtLjg5bC44MTItMS4yMkEyIDIgMCAwMTEwLjA3IDRoMy44NmEyIDIgMCAwMTEuNjY0Ljg5bC44MTIgMS4yMkEyIDIgMCAwMDE4LjA3IDdIMTlhMiAyIDAgMDEyIDJ2OWEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJWOXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgMTNhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDYXNoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE3IDlWN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2NmEyIDIgMCAwMDIgMmgybTIgNGgxMGEyIDIgMCAwMDItMnYtNmEyIDIgMCAwMC0yLTJIOWEyIDIgMCAwMC0yIDJ2NmEyIDIgMCAwMDIgMnptNy01YTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hhcnRCYXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxOXYtNmEyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2NmEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0yem0wIDBWOWEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjEwbS02IDBhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMm0wIDBWNWEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjE0YTIgMiAwIDAxLTIgMmgtMmEyIDIgMCAwMS0yLTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoYXJ0UGllIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDMuMDU1QTkuMDAxIDkuMDAxIDAgMTAyMC45NDUgMTNIMTFWMy4wNTV6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIwLjQ4OCA5SDE1VjMuNTEyQTkuMDI1IDkuMDI1IDAgMDEyMC40ODggOXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hhcnRTcXVhcmVCYXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTYgOHY4bS00LTV2NW0tNC0ydjJtLTIgNGgxMmEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hhdEFsdDIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcgOGgyYTIgMiAwIDAxMiAydjZhMiAyIDAgMDEtMiAyaC0ydjRsLTQtNEg5YTEuOTk0IDEuOTk0IDAgMDEtMS40MTQtLjU4Nm0wIDBMMTEgMTRoNGEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyaDJ2NGwuNTg2LS41ODZ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoYXRBbHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOCAxMGguMDFNMTIgMTBoLjAxTTE2IDEwaC4wMU05IDE2SDVhMiAyIDAgMDEtMi0yVjZhMiAyIDAgMDEyLTJoMTRhMiAyIDAgMDEyIDJ2OGEyIDIgMCAwMS0yIDJoLTVsLTUgNXYtNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hhdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDEyaC4wMU0xMiAxMmguMDFNMTYgMTJoLjAxTTIxIDEyYzAgNC40MTgtNC4wMyA4LTkgOGE5Ljg2MyA5Ljg2MyAwIDAxLTQuMjU1LS45NDlMMyAyMGwxLjM5NS0zLjcyQzMuNTEyIDE1LjA0MiAzIDEzLjU3NCAzIDEyYzAtNC40MTggNC4wMy04IDktOHM5IDMuNTgyIDkgOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hlY2tDaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxMmwyIDIgNC00bTYgMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hlY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNSAxM2w0IDRMMTkgN1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGV2cm9uRG91YmxlRG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xOSAxM2wtNyA3LTctN20xNC04bC03IDctNy03XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoZXZyb25Eb3VibGVMZWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDE5bC03LTcgNy03bTggMTRsLTctNyA3LTdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hldnJvbkRvdWJsZVJpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEzIDVsNyA3LTcgN001IDVsNyA3LTcgN1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGV2cm9uRG91YmxlVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNSAxMWw3LTcgNyA3TTUgMTlsNy03IDcgN1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGV2cm9uRG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xOSA5bC03IDctNy03XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoZXZyb25MZWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDE5bC03LTcgNy03XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoZXZyb25SaWdodCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDVsNyA3LTcgN1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGV2cm9uVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNSAxNWw3LTcgNyA3XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoaXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAzdjJtNi0ydjJNOSAxOXYybTYtMnYyTTUgOUgzbTIgNkgzbTE4LTZoLTJtMiA2aC0yTTcgMTloMTBhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJIN2EyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJ6TTkgOWg2djZIOVY5elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDbGlwYm9hcmRDaGVjayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDVIN2EyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJoLTJNOSA1YTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJNOSA1YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJtLTYgOWwyIDIgNC00XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNsaXBib2FyZENvcHkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOCA1SDZhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi0xTTggNWEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0yTTggNWEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAybTAgMGgyYTIgMiAwIDAxMiAydjNtMiA0SDEwbTAgMGwzLTNtLTMgM2wzIDNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2xpcGJvYXJkTGlzdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDVIN2EyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJoLTJNOSA1YTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJNOSA1YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJtLTMgN2gzbS0zIDRoM20tNi00aC4wMU05IDE2aC4wMVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDbGlwYm9hcmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSA1SDdhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0yaC0yTTkgNWEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0yTTkgNWEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAyXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNsb2NrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDh2NGwzIDNtNi0zYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDbG91ZERvd25sb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTcgMTZhNCA0IDAgMDEtLjg4LTcuOTAzQTUgNSAwIDExMTUuOSA2TDE2IDZhNSA1IDAgMDExIDkuOU05IDE5bDMgM20wIDBsMy0zbS0zIDNWMTBcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2xvdWRVcGxvYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAxNmE0IDQgMCAwMS0uODgtNy45MDNBNSA1IDAgMTExNS45IDZMMTYgNmE1IDUgMCAwMTEgOS45TTE1IDEzbC0zLTNtMCAwbC0zIDNtMy0zdjEyXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNsb3VkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgMTVhNCA0IDAgMDA0IDRoOWE1IDUgMCAxMC0uMS05Ljk5OSA1LjAwMiA1LjAwMiAwIDEwLTkuNzggMi4wOTZBNC4wMDEgNC4wMDEgMCAwMDMgMTV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNvZGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTAgMjBsNC0xNm00IDRsNCA0LTQgNE02IDE2bC00LTQgNC00XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNvZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMC4zMjUgNC4zMTdjLjQyNi0xLjc1NiAyLjkyNC0xLjc1NiAzLjM1IDBhMS43MjQgMS43MjQgMCAwMDIuNTczIDEuMDY2YzEuNTQzLS45NCAzLjMxLjgyNiAyLjM3IDIuMzdhMS43MjQgMS43MjQgMCAwMDEuMDY1IDIuNTcyYzEuNzU2LjQyNiAxLjc1NiAyLjkyNCAwIDMuMzVhMS43MjQgMS43MjQgMCAwMC0xLjA2NiAyLjU3M2MuOTQgMS41NDMtLjgyNiAzLjMxLTIuMzcgMi4zN2ExLjcyNCAxLjcyNCAwIDAwLTIuNTcyIDEuMDY1Yy0uNDI2IDEuNzU2LTIuOTI0IDEuNzU2LTMuMzUgMGExLjcyNCAxLjcyNCAwIDAwLTIuNTczLTEuMDY2Yy0xLjU0My45NC0zLjMxLS44MjYtMi4zNy0yLjM3YTEuNzI0IDEuNzI0IDAgMDAtMS4wNjUtMi41NzJjLTEuNzU2LS40MjYtMS43NTYtMi45MjQgMC0zLjM1YTEuNzI0IDEuNzI0IDAgMDAxLjA2Ni0yLjU3M2MtLjk0LTEuNTQzLjgyNi0zLjMxIDIuMzctMi4zNy45OTYuNjA4IDIuMjk2LjA3IDIuNTcyLTEuMDY1elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNSAxMmEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNvbGxlY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTkgMTFINW0xNCAwYTIgMiAwIDAxMiAydjZhMiAyIDAgMDEtMiAySDVhMiAyIDAgMDEtMi0ydi02YTIgMiAwIDAxMi0ybTE0IDBWOWEyIDIgMCAwMC0yLTJNNSAxMVY5YTIgMiAwIDAxMi0ybTAgMFY1YTIgMiAwIDAxMi0yaDZhMiAyIDAgMDEyIDJ2Mk03IDdoMTBcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ29sb3JTd2F0Y2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAyMWE0IDQgMCAwMS00LTRWNWEyIDIgMCAwMTItMmg0YTIgMiAwIDAxMiAydjEyYTQgNCAwIDAxLTQgNHptMCAwaDEyYTIgMiAwIDAwMi0ydi00YTIgMiAwIDAwLTItMmgtMi4zNDNNMTEgNy4zNDNsMS42NTctMS42NTdhMiAyIDAgMDEyLjgyOCAwbDIuODI5IDIuODI5YTIgMiAwIDAxMCAyLjgyOGwtOC40ODYgOC40ODVNNyAxN2guMDFcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ3JlZGl0Q2FyZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0zIDEwaDE4TTcgMTVoMW00IDBoMW0tNyA0aDEyYTMgMyAwIDAwMy0zVjhhMyAzIDAgMDAtMy0zSDZhMyAzIDAgMDAtMyAzdjhhMyAzIDAgMDAzIDN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUN1YmVUcmFuc3BhcmVudCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNCAxMGwtMiAxbTAgMGwtMi0xbTIgMXYyLjVNMjAgN2wtMiAxbTItMWwtMi0xbTIgMXYyLjVNMTQgNGwtMi0xLTIgMU00IDdsMi0xTTQgN2wyIDFNNCA3djIuNU0xMiAyMWwtMi0xbTIgMWwyLTFtLTIgMXYtMi41TTYgMThsLTItMXYtMi41TTE4IDE4bDItMXYtMi41XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUN1YmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMjAgN2wtOC00LTggNG0xNiAwbC04IDRtOC00djEwbC04IDRtMC0xMEw0IDdtOCA0djEwTTQgN3YxMGw4IDRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ3VycmVuY3lCYW5nbGFkZXNoaSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMSAxMVY5YTIgMiAwIDAwLTItMm0yIDR2NGEyIDIgMCAxMDQgMHYtMW0tNC0zSDltMiAwaDRtNiAxYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDdXJyZW5jeURvbGxhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA4Yy0xLjY1NyAwLTMgLjg5NS0zIDJzMS4zNDMgMiAzIDIgMyAuODk1IDMgMi0xLjM0MyAyLTMgMm0wLThjMS4xMSAwIDIuMDguNDAyIDIuNTk5IDFNMTIgOFY3bTAgMXY4bTAgMHYxbTAtMWMtMS4xMSAwLTIuMDgtLjQwMi0yLjU5OS0xTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDdXJyZW5jeUV1cm8gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTQuMTIxIDE1LjUzNmMtMS4xNzEgMS45NTItMy4wNyAxLjk1Mi00LjI0MiAwLTEuMTcyLTEuOTUzLTEuMTcyLTUuMTE5IDAtNy4wNzIgMS4xNzEtMS45NTIgMy4wNy0xLjk1MiA0LjI0MiAwTTggMTAuNWg0bS00IDNoNG05LTEuNWE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ3VycmVuY3lQb3VuZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNSA5YTIgMiAwIDEwLTQgMHY1YTIgMiAwIDAxLTIgMmg2bS02LTRoNG04IDBhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUN1cnJlbmN5UnVwZWUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSA4aDZtLTUgMGEzIDMgMCAxMTAgNkg5bDMgM20tMy02aDZtNiAxYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDdXJyZW5jeVllbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDhsMyA1bTAgMGwzLTVtLTMgNXY0bS0zLTVoNm0tNiAzaDZtNi0zYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDdXJzb3JDbGljayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNSAxNWwtMiA1TDkgOWwxMSA0LTUgMnptMCAwbDUgNU03LjE4OCAyLjIzOWwuNzc3IDIuODk3TTUuMTM2IDcuOTY1bC0yLjg5OC0uNzc3TTEzLjk1IDQuMDVsLTIuMTIyIDIuMTIybS01LjY1NyA1LjY1NmwtMi4xMiAyLjEyMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEYXRhYmFzZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDd2MTBjMCAyLjIxIDMuNTgyIDQgOCA0czgtMS43OSA4LTRWN000IDdjMCAyLjIxIDMuNTgyIDQgOCA0czgtMS43OSA4LTRNNCA3YzAtMi4yMSAzLjU4Mi00IDgtNHM4IDEuNzkgOCA0bTAgNWMwIDIuMjEtMy41ODIgNC04IDRzLTgtMS43OS04LTRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRGVza3RvcENvbXB1dGVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkuNzUgMTdMOSAyMGwtMSAxaDhsLTEtMS0uNzUtM00zIDEzaDE4TTUgMTdoMTRhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURldmljZU1vYmlsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiAxOGguMDFNOCAyMWg4YTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0ySDhhMiAyIDAgMDAtMiAydjE0YTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEZXZpY2VUYWJsZXQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgMThoLjAxTTcgMjFoMTBhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJIN2EyIDIgMCAwMC0yIDJ2MTRhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURvY3VtZW50QWRkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTNoNm0tMy0zdjZtNSA1SDdhMiAyIDAgMDEtMi0yVjVhMiAyIDAgMDEyLTJoNS41ODZhMSAxIDAgMDEuNzA3LjI5M2w1LjQxNCA1LjQxNGExIDEgMCAwMS4yOTMuNzA3VjE5YTIgMiAwIDAxLTIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG9jdW1lbnREb3dubG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiAxMHY2bTAgMGwtMy0zbTMgM2wzLTNtMiA4SDdhMiAyIDAgMDEtMi0yVjVhMiAyIDAgMDEyLTJoNS41ODZhMSAxIDAgMDEuNzA3LjI5M2w1LjQxNCA1LjQxNGExIDEgMCAwMS4yOTMuNzA3VjE5YTIgMiAwIDAxLTIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG9jdW1lbnREdXBsaWNhdGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOCA3djhhMiAyIDAgMDAyIDJoNk04IDdWNWEyIDIgMCAwMTItMmg0LjU4NmExIDEgMCAwMS43MDcuMjkzbDQuNDE0IDQuNDE0YTEgMSAwIDAxLjI5My43MDdWMTVhMiAyIDAgMDEtMiAyaC0yTTggN0g2YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0ydi0yXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURvY3VtZW50UmVtb3ZlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTNoNm0yIDhIN2EyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMmg1LjU4NmExIDEgMCAwMS43MDcuMjkzbDUuNDE0IDUuNDE0YTEgMSAwIDAxLjI5My43MDdWMTlhMiAyIDAgMDEtMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEb2N1bWVudFJlcG9ydCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDE3di0ybTMgMnYtNG0zIDR2LTZtMiAxMEg3YTIgMiAwIDAxLTItMlY1YTIgMiAwIDAxMi0yaDUuNTg2YTEgMSAwIDAxLjcwNy4yOTNsNS40MTQgNS40MTRhMSAxIDAgMDEuMjkzLjcwN1YxOWEyIDIgMCAwMS0yIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURvY3VtZW50U2VhcmNoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEwIDIxaDdhMiAyIDAgMDAyLTJWOS40MTRhMSAxIDAgMDAtLjI5My0uNzA3bC01LjQxNC01LjQxNEExIDEgMCAwMDEyLjU4NiAzSDdhMiAyIDAgMDAtMiAydjExbTAgNWw0Ljg3OS00Ljg3OW0wIDBhMyAzIDAgMTA0LjI0My00LjI0MiAzIDMgMCAwMC00LjI0MyA0LjI0MnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG9jdW1lbnRUZXh0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTJoNm0tNiA0aDZtMiA1SDdhMiAyIDAgMDEtMi0yVjVhMiAyIDAgMDEyLTJoNS41ODZhMSAxIDAgMDEuNzA3LjI5M2w1LjQxNCA1LjQxNGExIDEgMCAwMS4yOTMuNzA3VjE5YTIgMiAwIDAxLTIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG9jdW1lbnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAyMWgxMGEyIDIgMCAwMDItMlY5LjQxNGExIDEgMCAwMC0uMjkzLS43MDdsLTUuNDE0LTUuNDE0QTEgMSAwIDAwMTIuNTg2IDNIN2EyIDIgMCAwMC0yIDJ2MTRhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURvdHNDaXJjbGVIb3Jpem9udGFsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTJoLjAxTTEyIDEyaC4wMU0xNiAxMmguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURvdHNIb3Jpem9udGFsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTUgMTJoLjAxTTEyIDEyaC4wMU0xOSAxMmguMDFNNiAxMmExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTcgMGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6bTcgMGExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURvdHNWZXJ0aWNhbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA1di4wMU0xMiAxMnYuMDFNMTIgMTl2LjAxTTEyIDZhMSAxIDAgMTEwLTIgMSAxIDAgMDEwIDJ6bTAgN2ExIDEgMCAxMTAtMiAxIDEgMCAwMTAgMnptMCA3YTEgMSAwIDExMC0yIDEgMSAwIDAxMCAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEb3dubG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDE2djFhMyAzIDAgMDAzIDNoMTBhMyAzIDAgMDAzLTN2LTFtLTQtNGwtNCA0bTAgMGwtNC00bTQgNFY0XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUR1cGxpY2F0ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDE2SDZhMiAyIDAgMDEtMi0yVjZhMiAyIDAgMDEyLTJoOGEyIDIgMCAwMTIgMnYybS02IDEyaDhhMiAyIDAgMDAyLTJ2LThhMiAyIDAgMDAtMi0yaC04YTIgMiAwIDAwLTIgMnY4YTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVFbW9qaUhhcHB5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE0LjgyOCAxNC44MjhhNCA0IDAgMDEtNS42NTYgME05IDEwaC4wMU0xNSAxMGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUVtb2ppU2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkuMTcyIDE2LjE3MmE0IDQgMCAwMTUuNjU2IDBNOSAxMGguMDFNMTUgMTBoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVFeGNsYW1hdGlvbkNpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA4djRtMCA0aC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRXhjbGFtYXRpb24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgOXYybTAgNGguMDFtLTYuOTM4IDRoMTMuODU2YzEuNTQgMCAyLjUwMi0xLjY2NyAxLjczMi0zTDEzLjczMiA0Yy0uNzctMS4zMzMtMi42OTQtMS4zMzMtMy40NjQgMEwzLjM0IDE2Yy0uNzcgMS4zMzMuMTkyIDMgMS43MzIgM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRXh0ZXJuYWxMaW5rIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEwIDZINmEyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJ2LTRNMTQgNGg2bTAgMHY2bTAtNkwxMCAxNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVFeWVPZmYgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTMuODc1IDE4LjgyNUExMC4wNSAxMC4wNSAwIDAxMTIgMTljLTQuNDc4IDAtOC4yNjgtMi45NDMtOS41NDMtN2E5Ljk3IDkuOTcgMCAwMTEuNTYzLTMuMDI5bTUuODU4LjkwOGEzIDMgMCAxMTQuMjQzIDQuMjQzTTkuODc4IDkuODc4bDQuMjQyIDQuMjQyTTkuODggOS44OGwtMy4yOS0zLjI5bTcuNTMyIDcuNTMybDMuMjkgMy4yOU0zIDNsMy41OSAzLjU5bTAgMEE5Ljk1MyA5Ljk1MyAwIDAxMTIgNWM0LjQ3OCAwIDguMjY4IDIuOTQzIDkuNTQzIDdhMTAuMDI1IDEwLjAyNSAwIDAxLTQuMTMyIDUuNDExbTAgMEwyMSAyMVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVFeWUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgMTJhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yLjQ1OCAxMkMzLjczMiA3Ljk0MyA3LjUyMyA1IDEyIDVjNC40NzggMCA4LjI2OCAyLjk0MyA5LjU0MiA3LTEuMjc0IDQuMDU3LTUuMDY0IDctOS41NDIgNy00LjQ3NyAwLTguMjY4LTIuOTQzLTkuNTQyLTd6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZhc3RGb3J3YXJkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExLjkzMyAxMi44YTEgMSAwIDAwMC0xLjZMNi42IDcuMkExIDEgMCAwMDUgOHY4YTEgMSAwIDAwMS42LjhsNS4zMzMtNHpNMTkuOTMzIDEyLjhhMSAxIDAgMDAwLTEuNmwtNS4zMzMtNEExIDEgMCAwMDEzIDh2OGExIDEgMCAwMDEuNi44bDUuMzMzLTR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZpbG0gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyA0djE2TTE3IDR2MTZNMyA4aDRtMTAgMGg0TTMgMTJoMThNMyAxNmg0bTEwIDBoNE00IDIwaDE2YTEgMSAwIDAwMS0xVjVhMSAxIDAgMDAtMS0xSDRhMSAxIDAgMDAtMSAxdjE0YTEgMSAwIDAwMSAxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVGaWx0ZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyA0YTEgMSAwIDAxMS0xaDE2YTEgMSAwIDAxMSAxdjIuNTg2YTEgMSAwIDAxLS4yOTMuNzA3bC02LjQxNCA2LjQxNGExIDEgMCAwMC0uMjkzLjcwN1YxN2wtNCA0di02LjU4NmExIDEgMCAwMC0uMjkzLS43MDdMMy4yOTMgNy4yOTNBMSAxIDAgMDEzIDYuNTg2VjR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZpbmdlclByaW50IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDExYzAgMy41MTctMS4wMDkgNi43OTktMi43NTMgOS41NzFtLTMuNDQtMi4wNGwuMDU0LS4wOUExMy45MTYgMTMuOTE2IDAgMDA4IDExYTQgNCAwIDExOCAwYzAgMS4wMTctLjA3IDIuMDE5LS4yMDMgM20tMi4xMTggNi44NDRBMjEuODggMjEuODggMCAwMDE1LjE3MSAxN20zLjgzOSAxLjEzMmMuNjQ1LTIuMjY2Ljk5LTQuNjU5Ljk5LTcuMTMyQTggOCAwIDAwOCA0LjA3TTMgMTUuMzY0Yy42NC0xLjMxOSAxLTIuOCAxLTQuMzY0IDAtMS40NTcuMzktMi44MjMgMS4wNy00XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZpcmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcuNjU3IDE4LjY1N0E4IDggMCAwMTYuMzQzIDcuMzQzUzcgOSA5IDEwYzAtMiAuNS01IDIuOTg2LTdDMTQgNSAxNi4wOSA1Ljc3NyAxNy42NTYgNy4zNDNBNy45NzUgNy45NzUgMCAwMTIwIDEzYTcuOTc1IDcuOTc1IDAgMDEtMi4zNDMgNS42NTd6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkuODc5IDE2LjEyMUEzIDMgMCAxMDEyLjAxNSAxMUwxMSAxNEg5YzAgLjc2OC4yOTMgMS41MzYuODc5IDIuMTIxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVGbGFnIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgMjF2LTRtMCAwVjVhMiAyIDAgMDEyLTJoNi41bDEgMUgyMWwtMyA2IDMgNmgtOC41bC0xLTFINWEyIDIgMCAwMC0yIDJ6bTktMTMuNVY5XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZvbGRlckFkZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDEzaDZtLTMtM3Y2bS05IDFWN2EyIDIgMCAwMTItMmg2bDIgMmg2YTIgMiAwIDAxMiAydjhhMiAyIDAgMDEtMiAySDVhMiAyIDAgMDEtMi0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVGb2xkZXJEb3dubG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiAxMHY2bTAgMGwtMy0zbTMgM2wzLTNNMyAxN1Y3YTIgMiAwIDAxMi0yaDZsMiAyaDZhMiAyIDAgMDEyIDJ2OGEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZvbGRlck9wZW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNSAxOWEyIDIgMCAwMS0yLTJWN2EyIDIgMCAwMTItMmg0bDIgMmg0YTIgMiAwIDAxMiAydjFNNSAxOWgxNGEyIDIgMCAwMDItMnYtNWEyIDIgMCAwMC0yLTJIOWEyIDIgMCAwMC0yIDJ2NWEyIDIgMCAwMS0yIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZvbGRlclJlbW92ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDEzaDZNMyAxN1Y3YTIgMiAwIDAxMi0yaDZsMiAyaDZhMiAyIDAgMDEyIDJ2OGEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZvbGRlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0zIDd2MTBhMiAyIDAgMDAyIDJoMTRhMiAyIDAgMDAyLTJWOWEyIDIgMCAwMC0yLTJoLTZsLTItMkg1YTIgMiAwIDAwLTIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lR2lmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA4djEzbTAtMTNWNmEyIDIgMCAxMTIgMmgtMnptMCAwVjUuNUEyLjUgMi41IDAgMTA5LjUgOEgxMnptLTcgNGgxNE01IDEyYTIgMiAwIDExMC00aDE0YTIgMiAwIDExMCA0TTUgMTJ2N2EyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMnYtN1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVHbG9iZUFsdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMSAxMmE5IDkgMCAwMS05IDltOS05YTkgOSAwIDAwLTktOW05IDlIM205IDlhOSA5IDAgMDEtOS05bTkgOWMxLjY1NyAwIDMtNC4wMyAzLTlzLTEuMzQzLTktMy05bTAgMThjLTEuNjU3IDAtMy00LjAzLTMtOXMxLjM0My05IDMtOW0tOSA5YTkgOSAwIDAxOS05XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUdsb2JlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMuMDU1IDExSDVhMiAyIDAgMDEyIDJ2MWEyIDIgMCAwMDIgMiAyIDIgMCAwMTIgMnYyLjk0NU04IDMuOTM1VjUuNUEyLjUgMi41IDAgMDAxMC41IDhoLjVhMiAyIDAgMDEyIDIgMiAyIDAgMTA0IDAgMiAyIDAgMDEyLTJoMS4wNjRNMTUgMjAuNDg4VjE4YTIgMiAwIDAxMi0yaDMuMDY0TTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVIYW5kIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTcgMTEuNVYxNG0wLTIuNXYtNmExLjUgMS41IDAgMTEzIDBtLTMgNmExLjUgMS41IDAgMDAtMyAwdjJhNy41IDcuNSAwIDAwMTUgMHYtNWExLjUgMS41IDAgMDAtMyAwbS02LTNWMTFtMC01LjV2LTFhMS41IDEuNSAwIDAxMyAwdjFtMCAwVjExbTAtNS41YTEuNSAxLjUgMCAwMTMgMHYzbTAgMFYxMVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVIYXNodGFnIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTcgMjBsNC0xNm0yIDE2bDQtMTZNNiA5aDE0TTQgMTVoMTRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lSGVhcnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNC4zMTggNi4zMThhNC41IDQuNSAwIDAwMCA2LjM2NEwxMiAyMC4zNjRsNy42ODItNy42ODJhNC41IDQuNSAwIDAwLTYuMzY0LTYuMzY0TDEyIDcuNjM2bC0xLjMxOC0xLjMxOGE0LjUgNC41IDAgMDAtNi4zNjQgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lSG9tZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0zIDEybDItMm0wIDBsNy03IDcgN001IDEwdjEwYTEgMSAwIDAwMSAxaDNtMTAtMTFsMiAybS0yLTJ2MTBhMSAxIDAgMDEtMSAxaC0zbS02IDBhMSAxIDAgMDAxLTF2LTRhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXY0YTEgMSAwIDAwMSAxbS02IDBoNlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVJZGVudGlmaWNhdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMCA2SDVhMiAyIDAgMDAtMiAydjlhMiAyIDAgMDAyIDJoMTRhMiAyIDAgMDAyLTJWOGEyIDIgMCAwMC0yLTJoLTVtLTQgMFY1YTIgMiAwIDExNCAwdjFtLTQgMGEyIDIgMCAxMDQgMG0tNSA4YTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0em0wIDBjMS4zMDYgMCAyLjQxNy44MzUgMi44MyAyTTkgMTRhMy4wMDEgMy4wMDEgMCAwMC0yLjgzIDJNMTUgMTFoM20tMyA0aDJcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lSW5ib3hJbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDRINmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoMTJhMiAyIDAgMDAyLTJWNmEyIDIgMCAwMC0yLTJoLTJtLTQtMXY4bTAgMGwzLTNtLTMgM0w5IDhtLTUgNWgyLjU4NmExIDEgMCAwMS43MDcuMjkzbDIuNDE0IDIuNDE0YTEgMSAwIDAwLjcwNy4yOTNoMy4xNzJhMSAxIDAgMDAuNzA3LS4yOTNsMi40MTQtMi40MTRhMSAxIDAgMDEuNzA3LS4yOTNIMjBcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lSW5ib3ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMjAgMTNWNmEyIDIgMCAwMC0yLTJINmEyIDIgMCAwMC0yIDJ2N20xNiAwdjVhMiAyIDAgMDEtMiAySDZhMiAyIDAgMDEtMi0ydi01bTE2IDBoLTIuNTg2YTEgMSAwIDAwLS43MDcuMjkzbC0yLjQxNCAyLjQxNGExIDEgMCAwMS0uNzA3LjI5M2gtMy4xNzJhMSAxIDAgMDEtLjcwNy0uMjkzbC0yLjQxNC0yLjQxNEExIDEgMCAwMDYuNTg2IDEzSDRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lSW5mb3JtYXRpb25DaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTMgMTZoLTF2LTRoLTFtMS00aC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lS2V5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDdhMiAyIDAgMDEyIDJtNCAwYTYgNiAwIDAxLTcuNzQzIDUuNzQzTDExIDE3SDl2Mkg3djJINGExIDEgMCAwMS0xLTF2LTIuNTg2YTEgMSAwIDAxLjI5My0uNzA3bDUuOTY0LTUuOTY0QTYgNiAwIDExMjEgOXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTGlicmFyeSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDE0djNtNC0zdjNtNC0zdjNNMyAyMWgxOE0zIDEwaDE4TTMgN2w5LTQgOSA0TTQgMTBoMTZ2MTFINFYxMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTGlnaHRCdWxiIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkuNjYzIDE3aDQuNjczTTEyIDN2MW02LjM2NCAxLjYzNmwtLjcwNy43MDdNMjEgMTJoLTFNNCAxMkgzbTMuMzQzLTUuNjU3bC0uNzA3LS43MDdtMi44MjggOS45YTUgNSAwIDExNy4wNzIgMGwtLjU0OC41NDdBMy4zNzQgMy4zNzQgMCAwMDE0IDE4LjQ2OVYxOWEyIDIgMCAxMS00IDB2LS41MzFjMC0uODk1LS4zNTYtMS43NTQtLjk4OC0yLjM4NmwtLjU0OC0uNTQ3elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMaWdodG5pbmdCb2x0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEzIDEwVjNMNCAxNGg3djdsOS0xMWgtN3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTGluayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMy44MjggMTAuMTcyYTQgNCAwIDAwLTUuNjU2IDBsLTQgNGE0IDQgMCAxMDUuNjU2IDUuNjU2bDEuMTAyLTEuMTAxbS0uNzU4LTQuODk5YTQgNCAwIDAwNS42NTYgMGw0LTRhNCA0IDAgMDAtNS42NTYtNS42NTZsLTEuMSAxLjFcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTG9jYXRpb25NYXJrZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcuNjU3IDE2LjY1N0wxMy40MTQgMjAuOWExLjk5OCAxLjk5OCAwIDAxLTIuODI3IDBsLTQuMjQ0LTQuMjQzYTggOCAwIDExMTEuMzE0IDB6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDExYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTG9ja0Nsb3NlZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiAxNXYybS02IDRoMTJhMiAyIDAgMDAyLTJ2LTZhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjZhMiAyIDAgMDAyIDJ6bTEwLTEwVjdhNCA0IDAgMDAtOCAwdjRoOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTG9ja09wZW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOCAxMVY3YTQgNCAwIDExOCAwbS00IDh2Mm0tNiA0aDEyYTIgMiAwIDAwMi0ydi02YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMb2dpbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMSAxNmwtNC00bTAgMGw0LTRtLTQgNGgxNG0tNSA0djFhMyAzIDAgMDEtMyAzSDZhMyAzIDAgMDEtMy0zVjdhMyAzIDAgMDEzLTNoN2EzIDMgMCAwMTMgM3YxXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUxvZ291dCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNyAxNmw0LTRtMCAwbC00LTRtNCA0SDdtNiA0djFhMyAzIDAgMDEtMyAzSDZhMyAzIDAgMDEtMy0zVjdhMyAzIDAgMDEzLTNoNGEzIDMgMCAwMTMgM3YxXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1haWxPcGVuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgMTl2LTguOTNhMiAyIDAgMDEuODktMS42NjRsNy00LjY2NmEyIDIgMCAwMTIuMjIgMGw3IDQuNjY2QTIgMiAwIDAxMjEgMTAuMDdWMTlNMyAxOWEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMk0zIDE5bDYuNzUtNC41TTIxIDE5bC02Ljc1LTQuNU0zIDEwbDYuNzUgNC41TTIxIDEwbC02Ljc1IDQuNW0wIDBsLTEuMTQuNzZhMiAyIDAgMDEtMi4yMiAwbC0xLjE0LS43NlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVNYWlsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgOGw3Ljg5IDUuMjZhMiAyIDAgMDAyLjIyIDBMMjEgOE01IDE5aDE0YTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVNYXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAyMGwtNS40NDctMi43MjRBMSAxIDAgMDEzIDE2LjM4MlY1LjYxOGExIDEgMCAwMTEuNDQ3LS44OTRMOSA3bTAgMTNsNi0zbS02IDNWN202IDEwbDQuNTUzIDIuMjc2QTEgMSAwIDAwMjEgMTguMzgyVjcuNjE4YTEgMSAwIDAwLS41NTMtLjg5NEwxNSA0bTAgMTNWNG0wIDBMOSA3XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1lbnVBbHQxIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgNmgxNk00IDEyaDhtLTggNmgxNlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVNZW51QWx0MiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDZoMTZNNCAxMmgxNk00IDE4aDdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWVudUFsdDMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNCA2aDE2TTQgMTJoMTZtLTcgNmg3XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1lbnVBbHQ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgOGgxNk00IDE2aDE2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1lbnUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVNaWNyb3Bob25lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE5IDExYTcgNyAwIDAxLTcgN20wIDBhNyA3IDAgMDEtNy03bTcgN3Y0bTAgMEg4bTQgMGg0bS00LThhMyAzIDAgMDEtMy0zVjVhMyAzIDAgMTE2IDB2NmEzIDMgMCAwMS0zIDN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1pbnVzQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDEySDltMTIgMGE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWludXNTbSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xOCAxMkg2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1pbnVzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIwIDEySDRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTW9vbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMC4zNTQgMTUuMzU0QTkgOSAwIDAxOC42NDYgMy42NDYgOS4wMDMgOS4wMDMgMCAwMDEyIDIxYTkuMDAzIDkuMDAzIDAgMDA4LjM1NC01LjY0NnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTXVzaWNOb3RlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTlWNmwxMi0zdjEzTTkgMTljMCAxLjEwNS0xLjM0MyAyLTMgMnMtMy0uODk1LTMtMiAxLjM0My0yIDMtMiAzIC44OTUgMyAyem0xMi0zYzAgMS4xMDUtMS4zNDMgMi0zIDJzLTMtLjg5NS0zLTIgMS4zNDMtMiAzLTIgMyAuODk1IDMgMnpNOSAxMGwxMi0zXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU5ld3NwYXBlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xOSAyMEg1YTIgMiAwIDAxLTItMlY2YTIgMiAwIDAxMi0yaDEwYTIgMiAwIDAxMiAydjFtMiAxM2EyIDIgMCAwMS0yLTJWN20yIDEzYTIgMiAwIDAwMi0yVjlhMiAyIDAgMDAtMi0yaC0ybS00LTNIOU03IDE2aDZNNyA4aDZ2NEg3Vjh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU9mZmljZUJ1aWxkaW5nIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE5IDIxVjVhMiAyIDAgMDAtMi0ySDdhMiAyIDAgMDAtMiAydjE2bTE0IDBoMm0tMiAwaC01bS05IDBIM20yIDBoNU05IDdoMW0tMSA0aDFtNC00aDFtLTEgNGgxbS01IDEwdi01YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2NW0tNCAwaDRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGFwZXJBaXJwbGFuZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiAxOWw5IDItOS0xOC05IDE4IDktMnptMCAwdi04XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVBhcGVyQ2xpcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNS4xNzIgN2wtNi41ODYgNi41ODZhMiAyIDAgMTAyLjgyOCAyLjgyOGw2LjQxNC02LjU4NmE0IDQgMCAwMC01LjY1Ni01LjY1NmwtNi40MTUgNi41ODVhNiA2IDAgMTA4LjQ4NiA4LjQ4NkwyMC41IDEzXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVBhdXNlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEwIDl2Nm00LTZ2Nm03LTNhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVBlbmNpbEFsdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMSA1SDZhMiAyIDAgMDAtMiAydjExYTIgMiAwIDAwMiAyaDExYTIgMiAwIDAwMi0ydi01bS0xLjQxNC05LjQxNGEyIDIgMCAxMTIuODI4IDIuODI4TDExLjgyOCAxNUg5di0yLjgyOGw4LjU4Ni04LjU4NnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGVuY2lsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1LjIzMiA1LjIzMmwzLjUzNiAzLjUzNm0tMi4wMzYtNS4wMzZhMi41IDIuNSAwIDExMy41MzYgMy41MzZMNi41IDIxLjAzNkgzdi0zLjU3MkwxNi43MzIgMy43MzJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVBob25lSW5jb21pbmcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMjEgM2wtNiA2bTAgMFY0bTAgNWg1TTUgM2EyIDIgMCAwMC0yIDJ2MWMwIDguMjg0IDYuNzE2IDE1IDE1IDE1aDFhMiAyIDAgMDAyLTJ2LTMuMjhhMSAxIDAgMDAtLjY4NC0uOTQ4bC00LjQ5My0xLjQ5OGExIDEgMCAwMC0xLjIxLjUwMmwtMS4xMyAyLjI1N2ExMS4wNDIgMTEuMDQyIDAgMDEtNS41MTYtNS41MTdsMi4yNTctMS4xMjhhMSAxIDAgMDAuNTAyLTEuMjFMOS4yMjggMy42ODNBMSAxIDAgMDA4LjI3OSAzSDV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVBob25lTWlzc2VkQ2FsbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNiA4bDItMm0wIDBsMi0ybS0yIDJsLTItMm0yIDJsMiAyTTUgM2EyIDIgMCAwMC0yIDJ2MWMwIDguMjg0IDYuNzE2IDE1IDE1IDE1aDFhMiAyIDAgMDAyLTJ2LTMuMjhhMSAxIDAgMDAtLjY4NC0uOTQ4bC00LjQ5My0xLjQ5OGExIDEgMCAwMC0xLjIxLjUwMmwtMS4xMyAyLjI1N2ExMS4wNDIgMTEuMDQyIDAgMDEtNS41MTYtNS41MTdsMi4yNTctMS4xMjhhMSAxIDAgMDAuNTAyLTEuMjFMOS4yMjggMy42ODNBMSAxIDAgMDA4LjI3OSAzSDV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVBob25lT3V0Z29pbmcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTYgM2g1bTAgMHY1bTAtNWwtNiA2TTUgM2EyIDIgMCAwMC0yIDJ2MWMwIDguMjg0IDYuNzE2IDE1IDE1IDE1aDFhMiAyIDAgMDAyLTJ2LTMuMjhhMSAxIDAgMDAtLjY4NC0uOTQ4bC00LjQ5My0xLjQ5OGExIDEgMCAwMC0xLjIxLjUwMmwtMS4xMyAyLjI1N2ExMS4wNDIgMTEuMDQyIDAgMDEtNS41MTYtNS41MTdsMi4yNTctMS4xMjhhMSAxIDAgMDAuNTAyLTEuMjFMOS4yMjggMy42ODNBMSAxIDAgMDA4LjI3OSAzSDV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVBob25lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgNWEyIDIgMCAwMTItMmgzLjI4YTEgMSAwIDAxLjk0OC42ODRsMS40OTggNC40OTNhMSAxIDAgMDEtLjUwMiAxLjIxbC0yLjI1NyAxLjEzYTExLjA0MiAxMS4wNDIgMCAwMDUuNTE2IDUuNTE2bDEuMTMtMi4yNTdhMSAxIDAgMDExLjIxLS41MDJsNC40OTMgMS40OThhMSAxIDAgMDEuNjg0Ljk0OVYxOWEyIDIgMCAwMS0yIDJoLTFDOS43MTYgMjEgMyAxNC4yODQgMyA2VjV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVBob3RvZ3JhcGggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNCAxNmw0LjU4Ni00LjU4NmEyIDIgMCAwMTIuODI4IDBMMTYgMTZtLTItMmwxLjU4Ni0xLjU4NmEyIDIgMCAwMTIuODI4IDBMMjAgMTRtLTYtNmguMDFNNiAyMGgxMmEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGxheSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNC43NTIgMTEuMTY4bC0zLjE5Ny0yLjEzMkExIDEgMCAwMDEwIDkuODd2NC4yNjNhMSAxIDAgMDAxLjU1NS44MzJsMy4xOTctMi4xMzJhMSAxIDAgMDAwLTEuNjY0elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGx1c0NpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA5djNtMCAwdjNtMC0zaDNtLTMgMEg5bTEyIDBhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVBsdXNTbSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA2djZtMCAwdjZtMC02aDZtLTYgMEg2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVBsdXMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgNHYxNm04LThINFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVQcmVzZW50YXRpb25DaGFydEJhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDEzdi0xbTQgMXYtM200IDNWOE04IDIxbDQtNCA0IDRNMyA0aDE4TTQgNGgxNnYxMmExIDEgMCAwMS0xIDFINWExIDEgMCAwMS0xLTFWNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUHJlc2VudGF0aW9uQ2hhcnRMaW5lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTcgMTJsMy0zIDMgMyA0LTRNOCAyMWw0LTQgNCA0TTMgNGgxOE00IDRoMTZ2MTJhMSAxIDAgMDEtMSAxSDVhMSAxIDAgMDEtMS0xVjR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVByaW50ZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcgMTdoMmEyIDIgMCAwMDItMnYtNGEyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2NGEyIDIgMCAwMDIgMmgybTIgNGg2YTIgMiAwIDAwMi0ydi00YTIgMiAwIDAwLTItMkg5YTIgMiAwIDAwLTIgMnY0YTIgMiAwIDAwMiAyem04LTEyVjVhMiAyIDAgMDAtMi0ySDlhMiAyIDAgMDAtMiAydjRoMTB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVB1enpsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMSA0YTIgMiAwIDExNCAwdjFhMSAxIDAgMDAxIDFoM2ExIDEgMCAwMTEgMXYzYTEgMSAwIDAxLTEgMWgtMWEyIDIgMCAxMDAgNGgxYTEgMSAwIDAxMSAxdjNhMSAxIDAgMDEtMSAxaC0zYTEgMSAwIDAxLTEtMXYtMWEyIDIgMCAxMC00IDB2MWExIDEgMCAwMS0xIDFIN2ExIDEgMCAwMS0xLTF2LTNhMSAxIDAgMDAtMS0xSDRhMiAyIDAgMTEwLTRoMWExIDEgMCAwMDEtMVY3YTEgMSAwIDAxMS0xaDNhMSAxIDAgMDAxLTFWNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUXJjb2RlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDR2MW02IDExaDJtLTYgMGgtMnY0bTAtMTF2M20wIDBoLjAxTTEyIDEyaDQuMDFNMTYgMjBoNE00IDEyaDRtMTIgMGguMDFNNSA4aDJhMSAxIDAgMDAxLTFWNWExIDEgMCAwMC0xLTFINWExIDEgMCAwMC0xIDF2MmExIDEgMCAwMDEgMXptMTIgMGgyYTEgMSAwIDAwMS0xVjVhMSAxIDAgMDAtMS0xaC0yYTEgMSAwIDAwLTEgMXYyYTEgMSAwIDAwMSAxek01IDIwaDJhMSAxIDAgMDAxLTF2LTJhMSAxIDAgMDAtMS0xSDVhMSAxIDAgMDAtMSAxdjJhMSAxIDAgMDAxIDF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVF1ZXN0aW9uTWFya0NpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04LjIyOCA5Yy41NDktMS4xNjUgMi4wMy0yIDMuNzcyLTIgMi4yMSAwIDQgMS4zNDMgNCAzIDAgMS40LTEuMjc4IDIuNTc1LTMuMDA2IDIuOTA3LS41NDIuMTA0LS45OTQuNTQtLjk5NCAxLjA5M20wIDNoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVSZWNlaXB0UmVmdW5kIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE2IDE1di0xYTQgNCAwIDAwLTQtNEg4bTAgMGwzIDNtLTMtM2wzLTNtOSAxNFY1YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnYxNmw0LTIgNCAyIDQtMiA0IDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVJlY2VpcHRUYXggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxNGw2LTZtLTUuNS41aC4wMW00Ljk5IDVoLjAxTTE5IDIxVjVhMiAyIDAgMDAtMi0ySDdhMiAyIDAgMDAtMiAydjE2bDMuNS0yIDMuNSAyIDMuNS0yIDMuNSAyek0xMCA4LjVhLjUuNSAwIDExLTEgMCAuNS41IDAgMDExIDB6bTUgNWEuNS41IDAgMTEtMSAwIC41LjUgMCAwMTEgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUmVmcmVzaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDR2NWguNTgybTE1LjM1NiAyQTguMDAxIDguMDAxIDAgMDA0LjU4MiA5bTAgMEg5bTExIDExdi01aC0uNTgxbTAgMGE4LjAwMyA4LjAwMyAwIDAxLTE1LjM1Ny0ybTE1LjM1NyAySDE1XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVJlcGx5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgMTBoMTBhOCA4IDAgMDE4IDh2Mk0zIDEwbDYgNm0tNi02bDYtNlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVSZXdpbmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIuMDY2IDExLjJhMSAxIDAgMDAwIDEuNmw1LjMzNCA0QTEgMSAwIDAwMTkgMTZWOGExIDEgMCAwMC0xLjYtLjhsLTUuMzMzIDR6TTQuMDY2IDExLjJhMSAxIDAgMDAwIDEuNmw1LjMzNCA0QTEgMSAwIDAwMTEgMTZWOGExIDEgMCAwMC0xLjYtLjhsLTUuMzM0IDR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVJzcyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk02IDVjNy4xOCAwIDEzIDUuODIgMTMgMTNNNiAxMWE3IDcgMCAwMTcgN20tNiAwYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2F2ZUFzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE3IDE2djJhMiAyIDAgMDEtMiAySDVhMiAyIDAgMDEtMi0ydi03YTIgMiAwIDAxMi0yaDJtMy00SDlhMiAyIDAgMDAtMiAydjdhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJoLTFtLTEgNGwtMyAzbTAgMGwtMy0zbTMgM1YzXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNhdmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOCA3SDVhMiAyIDAgMDAtMiAydjlhMiAyIDAgMDAyIDJoMTRhMiAyIDAgMDAyLTJWOWEyIDIgMCAwMC0yLTJoLTNtLTEgNGwtMyAzbTAgMGwtMy0zbTMgM1Y0XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNjYWxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgNmwzIDFtMCAwbC0zIDlhNS4wMDIgNS4wMDIgMCAwMDYuMDAxIDBNNiA3bDMgOU02IDdsNi0ybTYgMmwzLTFtLTMgMWwtMyA5YTUuMDAyIDUuMDAyIDAgMDA2LjAwMSAwTTE4IDdsMyA5bS0zLTlsLTYtMm0wLTJ2Mm0wIDE2VjVtMCAxNkg5bTMgMGgzXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNjaXNzb3JzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE0LjEyMSAxNC4xMjFMMTkgMTltLTctN2w3LTdtLTcgN2wtMi44NzkgMi44NzlNMTIgMTJMOS4xMjEgOS4xMjFtMCA1Ljc1OGEzIDMgMCAxMC00LjI0MyA0LjI0MyAzIDMgMCAwMDQuMjQzLTQuMjQzem0wLTUuNzU4YTMgMyAwIDEwLTQuMjQzLTQuMjQzIDMgMyAwIDAwNC4yNDMgNC4yNDN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNlYXJjaENpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDE2bDIuODc5LTIuODc5bTAgMGEzIDMgMCAxMDQuMjQzLTQuMjQyIDMgMyAwIDAwLTQuMjQzIDQuMjQyek0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2VhcmNoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTZWxlY3RvciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDlsNC00IDQgNG0wIDZsLTQgNC00LTRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2VydmVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTUgMTJoMTRNNSAxMmEyIDIgMCAwMS0yLTJWNmEyIDIgMCAwMTItMmgxNGEyIDIgMCAwMTIgMnY0YTIgMiAwIDAxLTIgMk01IDEyYTIgMiAwIDAwLTIgMnY0YTIgMiAwIDAwMiAyaDE0YTIgMiAwIDAwMi0ydi00YTIgMiAwIDAwLTItMm0tMi00aC4wMU0xNyAxNmguMDFcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2hhcmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOC42ODQgMTMuMzQyQzguODg2IDEyLjkzOCA5IDEyLjQ4MiA5IDEyYzAtLjQ4Mi0uMTE0LS45MzgtLjMxNi0xLjM0Mm0wIDIuNjg0YTMgMyAwIDExMC0yLjY4NG0wIDIuNjg0bDYuNjMyIDMuMzE2bS02LjYzMi02bDYuNjMyLTMuMzE2bTAgMGEzIDMgMCAxMDUuMzY3LTIuNjg0IDMgMyAwIDAwLTUuMzY3IDIuNjg0em0wIDkuMzE2YTMgMyAwIDEwNS4zNjggMi42ODQgMyAzIDAgMDAtNS4zNjgtMi42ODR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNoaWVsZENoZWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTJsMiAyIDQtNG01LjYxOC00LjAxNkExMS45NTUgMTEuOTU1IDAgMDExMiAyLjk0NGExMS45NTUgMTEuOTU1IDAgMDEtOC42MTggMy4wNEExMi4wMiAxMi4wMiAwIDAwMyA5YzAgNS41OTEgMy44MjQgMTAuMjkgOSAxMS42MjIgNS4xNzYtMS4zMzIgOS02LjAzIDktMTEuNjIyIDAtMS4wNDItLjEzMy0yLjA1Mi0uMzgyLTMuMDE2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTaGllbGRFeGNsYW1hdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMC42MTggNS45ODRBMTEuOTU1IDExLjk1NSAwIDAxMTIgMi45NDRhMTEuOTU1IDExLjk1NSAwIDAxLTguNjE4IDMuMDRBMTIuMDIgMTIuMDIgMCAwMDMgOWMwIDUuNTkxIDMuODI0IDEwLjI5IDkgMTEuNjIyIDUuMTc2LTEuMzMyIDktNi4wMyA5LTExLjYyMiAwLTEuMDQyLS4xMzMtMi4wNTItLjM4Mi0zLjAxNnpNMTIgOXYybTAgNGguMDFcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2hvcHBpbmdCYWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTYgMTFWN2E0IDQgMCAwMC04IDB2NE01IDloMTRsMSAxMkg0TDUgOXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2hvcHBpbmdDYXJ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgM2gybC40IDJNNyAxM2gxMGw0LThINS40TTcgMTNMNS40IDVNNyAxM2wtMi4yOTMgMi4yOTNjLS42My42My0uMTg0IDEuNzA3LjcwNyAxLjcwN0gxN20wIDBhMiAyIDAgMTAwIDQgMiAyIDAgMDAwLTR6bS04IDJhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTb3J0QXNjZW5kaW5nIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgNGgxM00zIDhoOW0tOSA0aDZtNCAwbDQtNG0wIDBsNCA0bS00LTR2MTJcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU29ydERlc2NlbmRpbmcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyA0aDEzTTMgOGg5bS05IDRoOW01LTR2MTJtMCAwbC00LTRtNCA0bDQtNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTcGFya2xlcyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01IDN2NE0zIDVoNE02IDE3djRtLTItMmg0bTUtMTZsMi4yODYgNi44NTdMMjEgMTJsLTUuNzE0IDIuMTQzTDEzIDIxbC0yLjI4Ni02Ljg1N0w1IDEybDUuNzE0LTIuMTQzTDEzIDN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNwZWFrZXJwaG9uZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMSA1Ljg4MlYxOS4yNGExLjc2IDEuNzYgMCAwMS0zLjQxNy41OTJsLTIuMTQ3LTYuMTVNMTggMTNhMyAzIDAgMTAwLTZNNS40MzYgMTMuNjgzQTQuMDAxIDQuMDAxIDAgMDE3IDZoMS44MzJjNC4xIDAgNy42MjUtMS4yMzQgOS4xNjgtM3YxNGMtMS41NDMtMS43NjYtNS4wNjctMy05LjE2OC0zSDdhMy45ODggMy45ODggMCAwMS0xLjU2NC0uMzE3elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTdGFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExLjA0OSAyLjkyN2MuMy0uOTIxIDEuNjAzLS45MjEgMS45MDIgMGwxLjUxOSA0LjY3NGExIDEgMCAwMC45NS42OWg0LjkxNWMuOTY5IDAgMS4zNzEgMS4yNC41ODggMS44MWwtMy45NzYgMi44ODhhMSAxIDAgMDAtLjM2MyAxLjExOGwxLjUxOCA0LjY3NGMuMy45MjItLjc1NSAxLjY4OC0xLjUzOCAxLjExOGwtMy45NzYtMi44ODhhMSAxIDAgMDAtMS4xNzYgMGwtMy45NzYgMi44ODhjLS43ODMuNTctMS44MzgtLjE5Ny0xLjUzOC0xLjExOGwxLjUxOC00LjY3NGExIDEgMCAwMC0uMzYzLTEuMTE4bC0zLjk3Ni0yLjg4OGMtLjc4NC0uNTctLjM4LTEuODEuNTg4LTEuODFoNC45MTRhMSAxIDAgMDAuOTUxLS42OWwxLjUxOS00LjY3NHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU3RhdHVzT2ZmbGluZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xOC4zNjQgNS42MzZhOSA5IDAgMDEwIDEyLjcyOG0wIDBsLTIuODI5LTIuODI5bTIuODI5IDIuODI5TDIxIDIxTTE1LjUzNiA4LjQ2NGE1IDUgMCAwMTAgNy4wNzJtMCAwbC0yLjgyOS0yLjgyOW0tNC4yNDMgMi44MjlhNC45NzggNC45NzggMCAwMS0xLjQxNC0yLjgzbS0xLjQxNCA1LjY1OGE5IDkgMCAwMS0yLjE2Ny05LjIzOG03LjgyNCAyLjE2N2ExIDEgMCAxMTEuNDE0IDEuNDE0bS0xLjQxNC0xLjQxNEwzIDNtOC4yOTMgOC4yOTNsMS40MTQgMS40MTRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU3RhdHVzT25saW5lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTUuNjM2IDE4LjM2NGE5IDkgMCAwMTAtMTIuNzI4bTEyLjcyOCAwYTkgOSAwIDAxMCAxMi43MjhtLTkuOS0yLjgyOWE1IDUgMCAwMTAtNy4wN203LjA3MiAwYTUgNSAwIDAxMCA3LjA3TTEzIDEyYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU3RvcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxMGExIDEgMCAwMTEtMWg0YTEgMSAwIDAxMSAxdjRhMSAxIDAgMDEtMSAxaC00YTEgMSAwIDAxLTEtMXYtNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU3VuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDN2MW0wIDE2djFtOS05aC0xTTQgMTJIM20xNS4zNjQgNi4zNjRsLS43MDctLjcwN002LjM0MyA2LjM0M2wtLjcwNy0uNzA3bTEyLjcyOCAwbC0uNzA3LjcwN002LjM0MyAxNy42NTdsLS43MDcuNzA3TTE2IDEyYTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU3VwcG9ydCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xOC4zNjQgNS42MzZsLTMuNTM2IDMuNTM2bTAgNS42NTZsMy41MzYgMy41MzZNOS4xNzIgOS4xNzJMNS42MzYgNS42MzZtMy41MzYgOS4xOTJsLTMuNTM2IDMuNTM2TTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwem0tNSAwYTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU3dpdGNoSG9yaXpvbnRhbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDdoMTJtMCAwbC00LTRtNCA0bC00IDRtMCA2SDRtMCAwbDQgNG0tNC00bDQtNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTd2l0Y2hWZXJ0aWNhbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk03IDE2VjRtMCAwTDMgOG00LTRsNCA0bTYgMHYxMm0wIDBsNC00bS00IDRsLTQtNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUYWJsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0zIDEwaDE4TTMgMTRoMThtLTktNHY4bS03IDBoMTRhMiAyIDAgMDAyLTJWOGEyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2OGEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVGFnIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTcgN2guMDFNNyAzaDVjLjUxMiAwIDEuMDI0LjE5NSAxLjQxNC41ODZsNyA3YTIgMiAwIDAxMCAyLjgyOGwtNyA3YTIgMiAwIDAxLTIuODI4IDBsLTctN0ExLjk5NCAxLjk5NCAwIDAxMyAxMlY3YTQgNCAwIDAxNC00elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUZW1wbGF0ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDVhMSAxIDAgMDExLTFoMTRhMSAxIDAgMDExIDF2MmExIDEgMCAwMS0xIDFINWExIDEgMCAwMS0xLTFWNXpNNCAxM2ExIDEgMCAwMTEtMWg2YTEgMSAwIDAxMSAxdjZhMSAxIDAgMDEtMSAxSDVhMSAxIDAgMDEtMS0xdi02ek0xNiAxM2ExIDEgMCAwMTEtMWgyYTEgMSAwIDAxMSAxdjZhMSAxIDAgMDEtMSAxaC0yYTEgMSAwIDAxLTEtMXYtNnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVGVybWluYWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOCA5bDMgMy0zIDNtNSAwaDNNNSAyMGgxNGEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVGh1bWJEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEwIDE0SDUuMjM2YTIgMiAwIDAxLTEuNzg5LTIuODk0bDMuNS03QTIgMiAwIDAxOC43MzYgM2g0LjAxOGEyIDIgMCAwMS40ODUuMDZsMy43Ni45NG0tNyAxMHY1YTIgMiAwIDAwMiAyaC4wOTZjLjUgMCAuOTA1LS40MDUuOTA1LS45MDQgMC0uNzE1LjIxMS0xLjQxMy42MDgtMi4wMDhMMTcgMTNWNG0tNyAxMGgybTUtMTBoMmEyIDIgMCAwMTIgMnY2YTIgMiAwIDAxLTIgMmgtMi41XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVRodW1iVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTQgMTBoNC43NjRhMiAyIDAgMDExLjc4OSAyLjg5NGwtMy41IDdBMiAyIDAgMDExNS4yNjMgMjFoLTQuMDE3Yy0uMTYzIDAtLjMyNi0uMDItLjQ4NS0uMDZMNyAyMG03LTEwVjVhMiAyIDAgMDAtMi0yaC0uMDk1Yy0uNSAwLS45MDUuNDA1LS45MDUuOTA1IDAgLjcxNC0uMjExIDEuNDEyLS42MDggMi4wMDZMNyAxMXY5bTctMTBoLTJNNyAyMEg1YTIgMiAwIDAxLTItMnYtNmEyIDIgMCAwMTItMmgyLjVcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVGlja2V0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDV2Mm0wIDR2Mm0wIDR2Mk01IDVhMiAyIDAgMDAtMiAydjNhMiAyIDAgMTEwIDR2M2EyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMnYtM2EyIDIgMCAxMTAtNFY3YTIgMiAwIDAwLTItMkg1elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUcmFuc2xhdGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyA1aDEyTTkgM3YybTEuMDQ4IDkuNUExOC4wMjIgMTguMDIyIDAgMDE2LjQxMiA5bTYuMDg4IDloN00xMSAyMWw1LTEwIDUgMTBNMTIuNzUxIDVDMTEuNzgzIDEwLjc3IDguMDcgMTUuNjEgMyAxOC4xMjlcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVHJhc2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTkgN2wtLjg2NyAxMi4xNDJBMiAyIDAgMDExNi4xMzggMjFINy44NjJhMiAyIDAgMDEtMS45OTUtMS44NThMNSA3bTUgNHY2bTQtNnY2bTEtMTBWNGExIDEgMCAwMC0xLTFoLTRhMSAxIDAgMDAtMSAxdjNNNCA3aDE2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVRyZW5kaW5nRG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMyAxN2g4bTAgMFY5bTAgOGwtOC04LTQgNC02LTZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVHJlbmRpbmdVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMyA3aDhtMCAwdjhtMC04bC04IDgtNC00LTYgNlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUcnVjayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTkgMTdhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwek0xOSAxN2EyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEzIDE2VjZhMSAxIDAgMDAtMS0xSDRhMSAxIDAgMDAtMSAxdjEwYTEgMSAwIDAwMSAxaDFtOC0xYTEgMSAwIDAxLTEgMUg5bTQtMVY4YTEgMSAwIDAxMS0xaDIuNTg2YTEgMSAwIDAxLjcwNy4yOTNsMy40MTQgMy40MTRhMSAxIDAgMDEuMjkzLjcwN1YxNmExIDEgMCAwMS0xIDFoLTFtLTYtMWExIDEgMCAwMDEgMWgxTTUgMTdhMiAyIDAgMTA0IDBtLTQgMGEyIDIgMCAxMTQgMG02IDBhMiAyIDAgMTA0IDBtLTQgMGEyIDIgMCAxMTQgMFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVVcGxvYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNCAxNnYxYTMgMyAwIDAwMyAzaDEwYTMgMyAwIDAwMy0zdi0xbS00LThsLTQtNG0wIDBMOCA4bTQtNHYxMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVVc2VyQWRkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE4IDl2M20wIDB2M20wLTNoM20tMyAwaC0zbS0yLTVhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwek0zIDIwYTYgNiAwIDAxMTIgMHYxSDN2LTF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVVzZXJDaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNS4xMjEgMTcuODA0QTEzLjkzNyAxMy45MzcgMCAwMTEyIDE2YzIuNSAwIDQuODQ3LjY1NSA2Ljg3OSAxLjgwNE0xNSAxMGEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6bTYgMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVXNlckdyb3VwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE3IDIwaDV2LTJhMyAzIDAgMDAtNS4zNTYtMS44NTdNMTcgMjBIN20xMCAwdi0yYzAtLjY1Ni0uMTI2LTEuMjgzLS4zNTYtMS44NTdNNyAyMEgydi0yYTMgMyAwIDAxNS4zNTYtMS44NTdNNyAyMHYtMmMwLS42NTYuMTI2LTEuMjgzLjM1Ni0xLjg1N20wIDBhNS4wMDIgNS4wMDIgMCAwMTkuMjg4IDBNMTUgN2EzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6bTYgM2EyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6TTcgMTBhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVVc2VyUmVtb3ZlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEzIDdhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwek05IDE0YTYgNiAwIDAwLTYgNnYxaDEydi0xYTYgNiAwIDAwLTYtNnpNMjEgMTJoLTZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVXNlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNiA3YTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpNMTIgMTRhNyA3IDAgMDAtNyA3aDE0YTcgNyAwIDAwLTctN3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVXNlcnMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgNC4zNTRhNCA0IDAgMTEwIDUuMjkyTTE1IDIxSDN2LTFhNiA2IDAgMDExMiAwdjF6bTAgMGg2di0xYTYgNiAwIDAwLTktNS4xOTdNMTMgN2E0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVZhcmlhYmxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQuODcxIDRBMTcuOTI2IDE3LjkyNiAwIDAwMyAxMmMwIDIuODc0LjY3MyA1LjU5IDEuODcxIDhtMTQuMTMgMGExNy45MjYgMTcuOTI2IDAgMDAxLjg3LThjMC0yLjg3NC0uNjczLTUuNTktMS44Ny04TTkgOWgxLjI0NmExIDEgMCAwMS45NjEuNzI1bDEuNTg2IDUuNTVhMSAxIDAgMDAuOTYxLjcyNUgxNW0xLTdoLS4wOGEyIDIgMCAwMC0xLjUxOS42OThMOS42IDE1LjMwMkEyIDIgMCAwMTguMDggMTZIOFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVWaWRlb0NhbWVyYSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNSAxMGw0LjU1My0yLjI3NkExIDEgMCAwMTIxIDguNjE4djYuNzY0YTEgMSAwIDAxLTEuNDQ3Ljg5NEwxNSAxNE01IDE4aDhhMiAyIDAgMDAyLTJWOGEyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2OGEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVmlld0JvYXJkcyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDE3VjdtMCAxMGEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJWN2EyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAybTAgMTBhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMk05IDdhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMm0wIDEwVjdtMCAxMGEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0yaC0yYTIgMiAwIDAwLTIgMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVWaWV3R3JpZEFkZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNyAxNHY2bS0zLTNoNk02IDEwaDJhMiAyIDAgMDAyLTJWNmEyIDIgMCAwMC0yLTJINmEyIDIgMCAwMC0yIDJ2MmEyIDIgMCAwMDIgMnptMTAgMGgyYTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0yaC0yYTIgMiAwIDAwLTIgMnYyYTIgMiAwIDAwMiAyek02IDIwaDJhMiAyIDAgMDAyLTJ2LTJhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjJhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVZpZXdHcmlkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAySDZhMiAyIDAgMDEtMi0yVjZ6TTE0IDZhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMmgtMmEyIDIgMCAwMS0yLTJWNnpNNCAxNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAySDZhMiAyIDAgMDEtMi0ydi0yek0xNCAxNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMnYtMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVmlld0xpc3QgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNCA2aDE2TTQgMTBoMTZNNCAxNGgxNk00IDE4aDE2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVZvbHVtZU9mZiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01LjU4NiAxNUg0YTEgMSAwIDAxLTEtMXYtNGExIDEgMCAwMTEtMWgxLjU4Nmw0LjcwNy00LjcwN0MxMC45MjMgMy42NjMgMTIgNC4xMDkgMTIgNXYxNGMwIC44OTEtMS4wNzcgMS4zMzctMS43MDcuNzA3TDUuNTg2IDE1elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcgMTRsMi0ybTAgMGwyLTJtLTIgMmwtMi0ybTIgMmwyIDJcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVm9sdW1lVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUuNTM2IDguNDY0YTUgNSAwIDAxMCA3LjA3Mm0yLjgyOC05LjlhOSA5IDAgMDEwIDEyLjcyOE01LjU4NiAxNUg0YTEgMSAwIDAxLTEtMXYtNGExIDEgMCAwMTEtMWgxLjU4Nmw0LjcwNy00LjcwN0MxMC45MjMgMy42NjMgMTIgNC4xMDkgMTIgNXYxNGMwIC44OTEtMS4wNzcgMS4zMzctMS43MDcuNzA3TDUuNTg2IDE1elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVXaWZpIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTguMTExIDE2LjQwNGE1LjUgNS41IDAgMDE3Ljc3OCAwTTEyIDIwaC4wMW0tNy4wOC03LjA3MWMzLjkwNC0zLjkwNSAxMC4yMzYtMy45MDUgMTQuMTQxIDBNMS4zOTQgOS4zOTNjNS44NTctNS44NTcgMTUuMzU1LTUuODU3IDIxLjIxMyAwXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVhDaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTAgMTRsMi0ybTAgMGwyLTJtLTIgMmwtMi0ybTIgMmwyIDJtNy0yYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVYIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTYgMThMMTggNk02IDZsMTIgMTJcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lWm9vbUluIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwek0xMCA3djNtMCAwdjNtMC0zaDNtLTMgMEg3XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVpvb21PdXQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6TTEzIDEwSDdcIn19XX0pKHByb3BzKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkljb25CYXNlID0gZXhwb3J0cy5HZW5JY29uID0gdm9pZCAwO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIGljb25Db250ZXh0XzEgPSByZXF1aXJlKFwiLi9pY29uQ29udGV4dFwiKTtcbmZ1bmN0aW9uIFRyZWUyRWxlbWVudCh0cmVlKSB7XG4gICAgcmV0dXJuIHRyZWUgJiYgdHJlZS5tYXAoZnVuY3Rpb24gKG5vZGUsIGkpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobm9kZS50YWcsIF9fYXNzaWduKHsga2V5OiBpIH0sIG5vZGUuYXR0ciksIFRyZWUyRWxlbWVudChub2RlLmNoaWxkKSk7IH0pO1xufVxuZnVuY3Rpb24gR2VuSWNvbihkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJhc2UsIF9fYXNzaWduKHsgYXR0cjogX19hc3NpZ24oe30sIGRhdGEuYXR0cikgfSwgcHJvcHMpLCBUcmVlMkVsZW1lbnQoZGF0YS5jaGlsZCkpKTsgfTtcbn1cbmV4cG9ydHMuR2VuSWNvbiA9IEdlbkljb247XG5mdW5jdGlvbiBJY29uQmFzZShwcm9wcykge1xuICAgIHZhciBlbGVtID0gZnVuY3Rpb24gKGNvbmYpIHtcbiAgICAgICAgdmFyIGF0dHIgPSBwcm9wcy5hdHRyLCBzaXplID0gcHJvcHMuc2l6ZSwgdGl0bGUgPSBwcm9wcy50aXRsZSwgc3ZnUHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImF0dHJcIiwgXCJzaXplXCIsIFwidGl0bGVcIl0pO1xuICAgICAgICB2YXIgY29tcHV0ZWRTaXplID0gc2l6ZSB8fCBjb25mLnNpemUgfHwgXCIxZW1cIjtcbiAgICAgICAgdmFyIGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKGNvbmYuY2xhc3NOYW1lKVxuICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uZi5jbGFzc05hbWU7XG4gICAgICAgIGlmIChwcm9wcy5jbGFzc05hbWUpXG4gICAgICAgICAgICBjbGFzc05hbWUgPSAoY2xhc3NOYW1lID8gY2xhc3NOYW1lICsgJyAnIDogJycpICsgcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX19hc3NpZ24oeyBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsIGZpbGw6IFwiY3VycmVudENvbG9yXCIsIHN0cm9rZVdpZHRoOiBcIjBcIiB9LCBjb25mLmF0dHIsIGF0dHIsIHN2Z1Byb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oeyBjb2xvcjogcHJvcHMuY29sb3IgfHwgY29uZi5jb2xvciB9LCBjb25mLnN0eWxlKSwgcHJvcHMuc3R5bGUpLCBoZWlnaHQ6IGNvbXB1dGVkU2l6ZSwgd2lkdGg6IGNvbXB1dGVkU2l6ZSwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9KSxcbiAgICAgICAgICAgIHRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCB0aXRsZSksXG4gICAgICAgICAgICBwcm9wcy5jaGlsZHJlbikpO1xuICAgIH07XG4gICAgcmV0dXJuIGljb25Db250ZXh0XzEuSWNvbkNvbnRleHQgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoaWNvbkNvbnRleHRfMS5JY29uQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbmYpIHsgcmV0dXJuIGVsZW0oY29uZik7IH0pXG4gICAgICAgIDogZWxlbShpY29uQ29udGV4dF8xLkRlZmF1bHRDb250ZXh0KTtcbn1cbmV4cG9ydHMuSWNvbkJhc2UgPSBJY29uQmFzZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JY29uQ29udGV4dCA9IGV4cG9ydHMuRGVmYXVsdENvbnRleHQgPSB2b2lkIDA7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5leHBvcnRzLkRlZmF1bHRDb250ZXh0ID0ge1xuICAgIGNvbG9yOiB1bmRlZmluZWQsXG4gICAgc2l6ZTogdW5kZWZpbmVkLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIHN0eWxlOiB1bmRlZmluZWQsXG4gICAgYXR0cjogdW5kZWZpbmVkLFxufTtcbmV4cG9ydHMuSWNvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0ICYmIFJlYWN0LmNyZWF0ZUNvbnRleHQoZXhwb3J0cy5EZWZhdWx0Q29udGV4dCk7XG4iLCJtb2R1bGUuZXhwb3J0cy5JY29uc01hbmlmZXN0ID0gW1xuICB7XG4gICAgXCJpZFwiOiBcImZhXCIsXG4gICAgXCJuYW1lXCI6IFwiRm9udCBBd2Vzb21lXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9mb250YXdlc29tZS5jb20vXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlkgNC4wIExpY2Vuc2VcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvNC4wL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiaW9cIixcbiAgICBcIm5hbWVcIjogXCJJb25pY29ucyA0XCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9pb25pY29ucy5jb20vXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWNvbnMvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiaW81XCIsXG4gICAgXCJuYW1lXCI6IFwiSW9uaWNvbnMgNVwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vaW9uaWNvbnMuY29tL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljb25zL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIm1kXCIsXG4gICAgXCJuYW1lXCI6IFwiTWF0ZXJpYWwgRGVzaWduIGljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cDovL2dvb2dsZS5naXRodWIuaW8vbWF0ZXJpYWwtZGVzaWduLWljb25zL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9tYXRlcmlhbC1kZXNpZ24taWNvbnMvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwidGlcIixcbiAgICBcIm5hbWVcIjogXCJUeXBpY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHA6Ly9zLWluZ3MuY29tL3R5cGljb25zL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDIEJZLVNBIDMuMFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJnb1wiLFxuICAgIFwibmFtZVwiOiBcIkdpdGh1YiBPY3RpY29ucyBpY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vb2N0aWNvbnMuZ2l0aHViLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJpbWVyL29jdGljb25zL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImZpXCIsXG4gICAgXCJuYW1lXCI6IFwiRmVhdGhlclwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZmVhdGhlcmljb25zLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZmVhdGhlcmljb25zL2ZlYXRoZXIvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZ2lcIixcbiAgICBcIm5hbWVcIjogXCJHYW1lIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9nYW1lLWljb25zLm5ldC9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSAzLjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwid2lcIixcbiAgICBcIm5hbWVcIjogXCJXZWF0aGVyIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9lcmlrZmxvd2Vycy5naXRodWIuaW8vd2VhdGhlci1pY29ucy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJTSUwgT0ZMIDEuMVwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHA6Ly9zY3JpcHRzLnNpbC5vcmcvT0ZMXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJkaVwiLFxuICAgIFwibmFtZVwiOiBcIkRldmljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly92b3JpbGxhei5naXRodWIuaW8vZGV2aWNvbnMvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImFpXCIsXG4gICAgXCJuYW1lXCI6IFwiQW50IERlc2lnbiBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24taWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiYnNcIixcbiAgICBcIm5hbWVcIjogXCJCb290c3RyYXAgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdHdicy9pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJyaVwiLFxuICAgIFwibmFtZVwiOiBcIlJlbWl4IEljb25cIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vUmVtaXgtRGVzaWduL1JlbWl4SWNvblwiLFxuICAgIFwibGljZW5zZVwiOiBcIkFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZmNcIixcbiAgICBcIm5hbWVcIjogXCJGbGF0IENvbG9yIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ljb25zOC9mbGF0LWNvbG9yLWljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImdyXCIsXG4gICAgXCJuYW1lXCI6IFwiR3JvbW1ldC1JY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ncm9tbWV0L2dyb21tZXQtaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImhpXCIsXG4gICAgXCJuYW1lXCI6IFwiSGVyb2ljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy9oZXJvaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwic2lcIixcbiAgICBcIm5hbWVcIjogXCJTaW1wbGUgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL3NpbXBsZWljb25zLm9yZy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQzAgMS4wIFVuaXZlcnNhbFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJpbVwiLFxuICAgIFwibmFtZVwiOiBcIkljb01vb24gRnJlZVwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9LZXlhbW9vbi9JY29Nb29uLUZyZWVcIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjAgTGljZW5zZVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiYmlcIixcbiAgICBcIm5hbWVcIjogXCJCb3hJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hdGlzYXdkL2JveGljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlkgNC4wIExpY2Vuc2VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImNnXCIsXG4gICAgXCJuYW1lXCI6IFwiY3NzLmdnXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FzdHJpdC9jc3MuZ2dcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwidnNjXCIsXG4gICAgXCJuYW1lXCI6IFwiVlMgQ29kZSBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvdnNjb2RlLWNvZGljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlkgNC4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMC9cIlxuICB9XG5dIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaWNvbnNNYW5pZmVzdFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaWNvbkJhc2VcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ljb25Db250ZXh0XCIpLCBleHBvcnRzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiSGVhZGVyIiwidGl0bGUiLCJTdWJIZWFkZXIiLCJEaXZpZGVyIiwibGFiZWwiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiTmF2SXRlbSIsImhyZWYiLCJjaGlsZHJlbiIsImFzUGF0aCIsIkhpQmFkZ2VDaGVjayIsIkhpQ2xvY2siLCJIaVRyZW5kaW5nVXAiLCJBaUZpbGxEYXNoYm9hcmQiLCJTaWRlYmFyIiwidXNlU2Vzc2lvbiIsIkhlYWQiLCJTY3JpcHQiLCJMYXlvdXQiLCJzZXNzaW9uIiwibG9hZGluZyIsInNpZ25PdXQiLCJsb2dvdXRIYW5kbGVyIiwicmVkaXJlY3QiLCJjYWxsYmFja1VybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9VUkwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsImNvbnNvbGUiLCJ3YXJuIiwicCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsIm1hcCIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsImxlbmd0aCIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwibWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsInNwbGl0Iiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJKU09OIiwic3RyaW5naWZ5IiwieCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9