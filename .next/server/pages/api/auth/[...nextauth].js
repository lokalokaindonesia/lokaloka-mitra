"use strict";
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);



const options = {
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().Credentials({
    name: 'Credentials',
    authorize: async (credentials, req) => {
      const {
        email,
        password
      } = req.body;
      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"https://seal-app-92qnm.ondigitalocean.app"}/auth/local`, {
        identifier: email,
        password
      });
      const user = res.data;

      if (user) {
        return user;
      }

      return null;
    }
  })],
  database: "mongodb+srv://amdinlokaloka:iChemistry01@lokaloka.qvvan.mongodb.net/lokaloka?retryWrites=true&w=majority",
  session: {
    jwt: true
  },
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        if (account.id === 'credentials') {
          try {
            const {
              data
            } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"https://seal-app-92qnm.ondigitalocean.app"}/users/me`, {
              headers: {
                Authorization: `Bearer ${user.jwt}`
              }
            });

            if (data) {
              token.jwt = user.jwt;
              token.id = user.user.id;
              token.name = user.user.name;
              token.email = user.user.email;
              return token;
            }
          } catch (error) {
            return console.log({
              message: error
            });
          }
        }
      }

      return Promise.resolve(token);
    },
    session: async (session, user) => {
      session.jwt = user.jwt;
      session.id = user.id;
      return Promise.resolve(session);
    }
  },
  pages: {
    error: '/account/login',
    // Error code passed in query string as ?error=
    verifyRequest: '/account/verify-request',
    // (used for check email message)
    newUser: null // If set, new users will be directed here on first sign in

  }
};

const Auth = (req, res) => next_auth__WEBPACK_IMPORTED_MODULE_1___default()(req, res, options);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekJPLElBQUFBLGFBQWEsRUFBRSx5QkFGWjtBQUV1QztBQUMxQ0MsSUFBQUEsT0FBTyxFQUFFLElBSE4sQ0FHVzs7QUFIWDtBQTFESyxDQUFoQjs7QUFpRUEsTUFBTUMsSUFBSSxHQUFHLENBQUNuQyxHQUFELEVBQU1JLEdBQU4sS0FBY1osZ0RBQVEsQ0FBQ1EsR0FBRCxFQUFNSSxHQUFOLEVBQVdWLE9BQVgsQ0FBbkM7O0FBRUEsaUVBQWV5QyxJQUFmOzs7Ozs7Ozs7O0FDdkVBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2xva2Fsb2thLW1pdHJhLW5leHQvZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIiIsIndlYnBhY2s6Ly9sb2thbG9rYS1taXRyYS1uZXh0L2V4dGVybmFsIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFByb3ZpZGVycy5DcmVkZW50aWFscyh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXHJcblxyXG4gICAgICAgICAgICBhdXRob3JpemU6IGFzeW5jIChjcmVkZW50aWFscywgcmVxKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYXV0aC9sb2NhbGAsIHtcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gcmVzLmRhdGFcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RBVEFCQVNFX1VSTCxcclxuICAgIHNlc3Npb246IHtcclxuICAgICAgICBqd3Q6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgand0OiBhc3luYyAodG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1NpZ25JbiA9IHVzZXIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChpc1NpZ25Jbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjY291bnQuaWQgPT09ICdjcmVkZW50aWFscycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS91c2Vycy9tZWAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci5qd3R9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLmp3dCA9IHVzZXIuand0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5pZCA9IHVzZXIudXNlci5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4ubmFtZSA9IHVzZXIudXNlci5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5lbWFpbCA9IHVzZXIudXNlci5lbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coeyBtZXNzYWdlOiBlcnJvciB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRva2VuKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlc3Npb246IGFzeW5jIChzZXNzaW9uLCB1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgIHNlc3Npb24uand0ID0gdXNlci5qd3RcclxuICAgICAgICAgICAgc2Vzc2lvbi5pZCA9IHVzZXIuaWRcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXNzaW9uKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBhZ2VzOiB7XHJcbiAgICAgICAgZXJyb3I6ICcvYWNjb3VudC9sb2dpbicsIC8vIEVycm9yIGNvZGUgcGFzc2VkIGluIHF1ZXJ5IHN0cmluZyBhcyA/ZXJyb3I9XHJcbiAgICAgICAgdmVyaWZ5UmVxdWVzdDogJy9hY2NvdW50L3ZlcmlmeS1yZXF1ZXN0JywgLy8gKHVzZWQgZm9yIGNoZWNrIGVtYWlsIG1lc3NhZ2UpXHJcbiAgICAgICAgbmV3VXNlcjogbnVsbCAvLyBJZiBzZXQsIG5ldyB1c2VycyB3aWxsIGJlIGRpcmVjdGVkIGhlcmUgb24gZmlyc3Qgc2lnbiBpblxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgQXV0aCA9IChyZXEsIHJlcykgPT4gTmV4dEF1dGgocmVxLCByZXMsIG9wdGlvbnMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIpOyJdLCJuYW1lcyI6WyJheGlvcyIsIk5leHRBdXRoIiwiUHJvdmlkZXJzIiwib3B0aW9ucyIsInByb3ZpZGVycyIsIkNyZWRlbnRpYWxzIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwicmVxIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJyZXMiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJpZGVudGlmaWVyIiwidXNlciIsImRhdGEiLCJkYXRhYmFzZSIsIk5FWFRfUFVCTElDX0RBVEFCQVNFX1VSTCIsInNlc3Npb24iLCJqd3QiLCJjYWxsYmFja3MiLCJ0b2tlbiIsImFjY291bnQiLCJwcm9maWxlIiwiaXNOZXdVc2VyIiwiaXNTaWduSW4iLCJpZCIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicGFnZXMiLCJ2ZXJpZnlSZXF1ZXN0IiwibmV3VXNlciIsIkF1dGgiXSwic291cmNlUm9vdCI6IiJ9