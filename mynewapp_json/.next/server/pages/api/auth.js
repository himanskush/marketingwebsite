module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth.js":
/*!***************************!*\
  !*** ./pages/api/auth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


/* JWT secret key */

const KEY = process.env.JWT_KEY;
console.log(`KEY`, KEY);
/* Users collection sample */

const USERS = [{
  id: 1,
  email: 'example1@example.com',
  password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq',
  // password
  createdAt: '2021-03-29 18:23:45'
}, {
  id: 2,
  email: 'example2@example.com',
  password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq',
  // password
  createdAt: '2021-03-29 18:23:45'
}, {
  id: 3,
  email: 'example3@example.com',
  password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq',
  // password
  createdAt: '2021-03-29 18:23:45'
}, {
  id: 4,
  email: 'example4@example.com',
  password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq',
  // password
  createdAt: '2021-03-29 18:23:45'
}];
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  return new Promise(resolve => {
    const {
      method
    } = req;

    try {
      switch (method) {
        case 'POST':
          /* Get Post Data */
          const {
            email,
            password
          } = req.body;
          /* Any how email or password is blank */

          if (!email || !password) {
            return res.status(400).json({
              status: 'error',
              error: 'Request missing username or password'
            });
          }
          /* Check user email in database */


          const user = USERS.find(user => {
            return user.email === email;
          });
          /* Check if exists */

          if (!user) {
            /* Send error with message */
            res.status(400).json({
              status: 'error',
              error: 'User Not Found'
            });
          }
          /* Variables checking */


          if (user) {
            const userId = user.id,
                  userEmail = user.email,
                  userPassword = user.password,
                  userCreated = user.createdAt;
            /* Check and compare password */

            bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.compare(password, userPassword).then(isMatch => {
              /* User matched */
              if (isMatch) {
                /* Create JWT Payload */
                const payload = {
                  id: userId,
                  email: userEmail,
                  createdAt: userCreated
                };
                /* Sign token */

                jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign(payload, KEY, {
                  expiresIn: 31556926 // 1 year in seconds

                }, (err, token) => {
                  /* Send succes with token */
                  res.status(200).json({
                    success: true,
                    token: 'Bearer ' + token
                  });
                });
              } else {
                /* Send error with message */
                res.status(400).json({
                  status: 'error',
                  error: 'Password incorrect'
                });
              }
            });
          }

          break;

        case 'PUT':
          break;

        case 'PATCH':
          break;

        default:
          break;
      }
    } catch (error) {
      throw error;
    }

    return resolve();
  });
});

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiJdLCJuYW1lcyI6WyJLRVkiLCJwcm9jZXNzIiwiZW52IiwiSldUX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJVU0VSUyIsImlkIiwiZW1haWwiLCJwYXNzd29yZCIsImNyZWF0ZWRBdCIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwibWV0aG9kIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInVzZXIiLCJmaW5kIiwidXNlcklkIiwidXNlckVtYWlsIiwidXNlclBhc3N3b3JkIiwidXNlckNyZWF0ZWQiLCJiY3J5cHQiLCJjb21wYXJlIiwidGhlbiIsImlzTWF0Y2giLCJwYXlsb2FkIiwiand0Iiwic2lnbiIsImV4cGlyZXNJbiIsImVyciIsInRva2VuIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7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QUNFRixPQURGLEVBRUU5QixHQUZGLEVBR0U7QUFDRWlDLDJCQUFTLEVBQUUsUUFEYixDQUN1Qjs7QUFEdkIsaUJBSEYsRUFNRSxDQUFDQyxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDZDtBQUNBdkIscUJBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25Ca0IsMkJBQU8sRUFBRSxJQURVO0FBRW5CRCx5QkFBSyxFQUFFLFlBQVlBO0FBRkEsbUJBQXJCO0FBSUQsaUJBWkg7QUFjRCxlQXRCRCxNQXNCTztBQUNMO0FBQ0F2QixtQkFBRyxDQUNBSyxNQURILENBQ1UsR0FEVixFQUVHQyxJQUZILENBRVE7QUFBRUQsd0JBQU0sRUFBRSxPQUFWO0FBQW1CRSx1QkFBSyxFQUFFO0FBQTFCLGlCQUZSO0FBR0Q7QUFDRixhQTlCRDtBQStCRDs7QUFDRDs7QUFDRixhQUFLLEtBQUw7QUFDRTs7QUFDRixhQUFLLE9BQUw7QUFDRTs7QUFDRjtBQUNFO0FBakVKO0FBbUVELEtBcEVELENBb0VFLE9BQU9BLEtBQVAsRUFBYztBQUNkLFlBQU1BLEtBQU47QUFDRDs7QUFDRCxXQUFPTCxPQUFPLEVBQWQ7QUFDRCxHQTFFTSxDQUFQO0FBMkVELENBNUVELEU7Ozs7Ozs7Ozs7O0FDbENBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYXV0aC5qc1wiKTtcbiIsImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG4vKiBKV1Qgc2VjcmV0IGtleSAqL1xuY29uc3QgS0VZID0gcHJvY2Vzcy5lbnYuSldUX0tFWTtcbmNvbnNvbGUubG9nKGBLRVlgLCBLRVkpO1xuLyogVXNlcnMgY29sbGVjdGlvbiBzYW1wbGUgKi9cbmNvbnN0IFVTRVJTID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgZW1haWw6ICdleGFtcGxlMUBleGFtcGxlLmNvbScsXG4gICAgcGFzc3dvcmQ6ICckMnkkMTAkbWoxT01GdlZtR0FSNGdFRVhaR3RBLlI1d1lXQlpUaXM3MmhTWHpweEVzLlFvWFQzaWZLU3EnLCAvLyBwYXNzd29yZFxuICAgIGNyZWF0ZWRBdDogJzIwMjEtMDMtMjkgMTg6MjM6NDUnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgZW1haWw6ICdleGFtcGxlMkBleGFtcGxlLmNvbScsXG4gICAgcGFzc3dvcmQ6ICckMnkkMTAkbWoxT01GdlZtR0FSNGdFRVhaR3RBLlI1d1lXQlpUaXM3MmhTWHpweEVzLlFvWFQzaWZLU3EnLCAvLyBwYXNzd29yZFxuICAgIGNyZWF0ZWRBdDogJzIwMjEtMDMtMjkgMTg6MjM6NDUnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgZW1haWw6ICdleGFtcGxlM0BleGFtcGxlLmNvbScsXG4gICAgcGFzc3dvcmQ6ICckMnkkMTAkbWoxT01GdlZtR0FSNGdFRVhaR3RBLlI1d1lXQlpUaXM3MmhTWHpweEVzLlFvWFQzaWZLU3EnLCAvLyBwYXNzd29yZFxuICAgIGNyZWF0ZWRBdDogJzIwMjEtMDMtMjkgMTg6MjM6NDUnLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgZW1haWw6ICdleGFtcGxlNEBleGFtcGxlLmNvbScsXG4gICAgcGFzc3dvcmQ6ICckMnkkMTAkbWoxT01GdlZtR0FSNGdFRVhaR3RBLlI1d1lXQlpUaXM3MmhTWHpweEVzLlFvWFQzaWZLU3EnLCAvLyBwYXNzd29yZFxuICAgIGNyZWF0ZWRBdDogJzIwMjEtMDMtMjkgMTg6MjM6NDUnLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuICAgIHRyeSB7XG4gICAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICBjYXNlICdQT1NUJzpcbiAgICAgICAgICAvKiBHZXQgUG9zdCBEYXRhICovXG4gICAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgICAgICAgIC8qIEFueSBob3cgZW1haWwgb3IgcGFzc3dvcmQgaXMgYmxhbmsgKi9cbiAgICAgICAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgICBlcnJvcjogJ1JlcXVlc3QgbWlzc2luZyB1c2VybmFtZSBvciBwYXNzd29yZCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogQ2hlY2sgdXNlciBlbWFpbCBpbiBkYXRhYmFzZSAqL1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBVU0VSUy5maW5kKHVzZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXIuZW1haWwgPT09IGVtYWlsO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8qIENoZWNrIGlmIGV4aXN0cyAqL1xuICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgLyogU2VuZCBlcnJvciB3aXRoIG1lc3NhZ2UgKi9cbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3RhdHVzOiAnZXJyb3InLCBlcnJvcjogJ1VzZXIgTm90IEZvdW5kJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogVmFyaWFibGVzIGNoZWNraW5nICovXG4gICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IHVzZXIuaWQsXG4gICAgICAgICAgICAgIHVzZXJFbWFpbCA9IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgIHVzZXJQYXNzd29yZCA9IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgIHVzZXJDcmVhdGVkID0gdXNlci5jcmVhdGVkQXQ7XG4gICAgICAgICAgICAvKiBDaGVjayBhbmQgY29tcGFyZSBwYXNzd29yZCAqL1xuICAgICAgICAgICAgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXJQYXNzd29yZCkudGhlbihpc01hdGNoID0+IHtcbiAgICAgICAgICAgICAgLyogVXNlciBtYXRjaGVkICovXG4gICAgICAgICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgLyogQ3JlYXRlIEpXVCBQYXlsb2FkICovXG4gICAgICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgICAgIGlkOiB1c2VySWQsXG4gICAgICAgICAgICAgICAgICBlbWFpbDogdXNlckVtYWlsLFxuICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiB1c2VyQ3JlYXRlZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8qIFNpZ24gdG9rZW4gKi9cbiAgICAgICAgICAgICAgICBqd3Quc2lnbihcbiAgICAgICAgICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAgICAgICAgICBLRVksXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXNJbjogMzE1NTY5MjYsIC8vIDEgeWVhciBpbiBzZWNvbmRzXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGVyciwgdG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLyogU2VuZCBzdWNjZXMgd2l0aCB0b2tlbiAqL1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0JlYXJlciAnICsgdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qIFNlbmQgZXJyb3Igd2l0aCBtZXNzYWdlICovXG4gICAgICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgICAgICAuc3RhdHVzKDQwMClcbiAgICAgICAgICAgICAgICAgIC5qc29uKHsgc3RhdHVzOiAnZXJyb3InLCBlcnJvcjogJ1Bhc3N3b3JkIGluY29ycmVjdCcgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUFVUJzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUEFUQ0gnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=