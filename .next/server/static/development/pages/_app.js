module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./redux/store.ts");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\TIMA\\Projects\\DevelopsToday\\next-blog-app\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const MyApp = props => {
  const {
    Component,
    pageProps,
    store
  } = props;
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  })));
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  return {
    pageProps: _objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
  };
};

const makeStore = () => _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"];

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(makeStore)(MyApp));

/***/ }),

/***/ "./redux/actions/createPostActions.ts":
/*!********************************************!*\
  !*** ./redux/actions/createPostActions.ts ***!
  \********************************************/
/*! exports provided: actionTypes, sendPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendPost", function() { return sendPost; });
/* harmony import */ var _services_BlogService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/BlogService */ "./services/BlogService.ts");

var actionTypes;

(function (actionTypes) {
  actionTypes["SEND_POST_REQUEST"] = "SEND_POST_REQUEST";
  actionTypes["SEND_POST_SUCCESS"] = "SEND_POST_SUCCESS";
  actionTypes["SEND_POST_FAILURE"] = "SEND_POST_FAILURE";
  actionTypes["TOGGLE_SENT_STATUS"] = "TOGGLE_SENT_STATUS";
})(actionTypes || (actionTypes = {}));

const postSendRequested = () => ({
  type: actionTypes.SEND_POST_REQUEST
});

const postSendError = error => ({
  type: actionTypes.SEND_POST_FAILURE,
  payload: error
});

const postSendSuccess = () => ({
  type: actionTypes.SEND_POST_SUCCESS
});

const toggleSentStatus = () => ({
  type: actionTypes.TOGGLE_SENT_STATUS
});

const sendPost = dispatch => async post => {
  const blogService = new _services_BlogService__WEBPACK_IMPORTED_MODULE_0__["default"]();

  try {
    dispatch(postSendRequested());
    blogService.sendPost(post);
    dispatch(postSendSuccess());
    dispatch(toggleSentStatus());
    setTimeout(() => {
      dispatch(toggleSentStatus());
    }, 800);
  } catch (err) {
    dispatch(postSendError(err));
  }
};



/***/ }),

/***/ "./redux/actions/postActions.ts":
/*!**************************************!*\
  !*** ./redux/actions/postActions.ts ***!
  \**************************************/
/*! exports provided: actionTypes, fetchPostByID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostByID", function() { return fetchPostByID; });
/* harmony import */ var _services_BlogService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/BlogService */ "./services/BlogService.ts");

var actionTypes;

(function (actionTypes) {
  actionTypes["FETCH_POST_REQUEST"] = "FETCH_POST_REQUEST";
  actionTypes["FETCH_POST_SUCCESS"] = "FETCH_POST_SUCCESS";
  actionTypes["FETCH_POST_FAILURE"] = "FETCH_POST_FAILURE";
})(actionTypes || (actionTypes = {}));

const postRequested = () => ({
  type: actionTypes.FETCH_POST_REQUEST
});

const postError = error => ({
  type: actionTypes.FETCH_POST_FAILURE,
  payload: error
});

const postLoaded = post => ({
  type: actionTypes.FETCH_POST_SUCCESS,
  payload: post
});

const fetchPostByID = async (postId, dispatch) => {
  const blogService = new _services_BlogService__WEBPACK_IMPORTED_MODULE_0__["default"]();

  try {
    dispatch(postRequested());
    const post = await blogService.getPostById(postId);
    dispatch(postLoaded(post));
  } catch (err) {
    dispatch(postError(err));
  }
};



/***/ }),

/***/ "./redux/actions/postsListActions.ts":
/*!*******************************************!*\
  !*** ./redux/actions/postsListActions.ts ***!
  \*******************************************/
/*! exports provided: actionTypes, fetchPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony import */ var _services_BlogService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/BlogService */ "./services/BlogService.ts");

var actionTypes;

(function (actionTypes) {
  actionTypes["FETCH_POSTS_LIST_REQUEST"] = "FETCH_AUTHORS_LIST_REQUEST";
  actionTypes["FETCH_POSTS_LIST_SUCCESS"] = "FETCH_AUTHORS_LIST_SUCCESS";
  actionTypes["FETCH_POSTS_LIST_FAILURE"] = "FETCH_AUTHORS_LIST_FAILURE";
})(actionTypes || (actionTypes = {}));

const postsRequested = () => ({
  type: actionTypes.FETCH_POSTS_LIST_REQUEST
});

const postsError = error => ({
  type: actionTypes.FETCH_POSTS_LIST_FAILURE,
  payload: error
});

const postsLoaded = postsList => ({
  type: actionTypes.FETCH_POSTS_LIST_SUCCESS,
  payload: postsList
});

const fetchPosts = async dispatch => {
  const blogService = new _services_BlogService__WEBPACK_IMPORTED_MODULE_0__["default"]();

  try {
    dispatch(postsRequested());
    const postsList = await (await blogService.getPosts()).reverse();
    dispatch(postsLoaded(postsList));
  } catch (err) {
    dispatch(postsError(err));
  }
};



/***/ }),

/***/ "./redux/reducers/createPostReducer.ts":
/*!*********************************************!*\
  !*** ./redux/reducers/createPostReducer.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_createPostActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/createPostActions */ "./redux/actions/createPostActions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isLoading: false,
  isError: false,
  isSent: false
};

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_createPostActions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SEND_POST_REQUEST:
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case _actions_createPostActions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SEND_POST_SUCCESS:
      return _objectSpread({}, state, {
        isLoading: false
      });

    case _actions_createPostActions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SEND_POST_FAILURE:
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true
      });

    case _actions_createPostActions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].TOGGLE_SENT_STATUS:
      return _objectSpread({}, state, {
        isSent: !state.isSent
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (createPostReducer);

/***/ }),

/***/ "./redux/reducers/postReducer.ts":
/*!***************************************!*\
  !*** ./redux/reducers/postReducer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_postActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/postActions */ "./redux/actions/postActions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  post: null,
  isLoading: true,
  isError: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_postActions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].FETCH_POST_REQUEST:
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case _actions_postActions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].FETCH_POST_SUCCESS:
      return _objectSpread({}, state, {
        post: action.payload,
        isLoading: false
      });

    case _actions_postActions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].FETCH_POST_FAILURE:
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (postReducer);

/***/ }),

/***/ "./redux/reducers/postsListReducer.ts":
/*!********************************************!*\
  !*** ./redux/reducers/postsListReducer.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_postsListActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/postsListActions */ "./redux/actions/postsListActions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  postsList: [],
  isLoading: true,
  isError: false
};

const postsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_postsListActions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].FETCH_POSTS_LIST_REQUEST:
      return _objectSpread({}, state, {
        isLoading: true,
        isError: false
      });

    case _actions_postsListActions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].FETCH_POSTS_LIST_SUCCESS:
      return _objectSpread({}, state, {
        postsList: action.payload,
        isLoading: false
      });

    case _actions_postsListActions__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].FETCH_POSTS_LIST_FAILURE:
      return _objectSpread({}, state, {
        isLoading: false,
        isError: true
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (postsListReducer);

/***/ }),

/***/ "./redux/reducers/rootReducer.ts":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _postsListReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postsListReducer */ "./redux/reducers/postsListReducer.ts");
/* harmony import */ var _postReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postReducer */ "./redux/reducers/postReducer.ts");
/* harmony import */ var _createPostReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPostReducer */ "./redux/reducers/createPostReducer.ts");




const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  postsList: _postsListReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  post: _postReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  createPost: _createPostReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/rootReducer */ "./redux/reducers/rootReducer.ts");


const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./services/BlogService.ts":
/*!*********************************!*\
  !*** ./services/BlogService.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostsService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class PostsService {
  constructor() {
    _defineProperty(this, "apiBase", 'https://simple-blog-api.crew.red');
  }

  async getPosts() {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.apiBase}/posts`);
    return data;
  }

  async getPostById(id) {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${this.apiBase}/posts/${id}`);
    return data;
  }

  sendPost(post) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${this.apiBase}/posts`, post);
  }

}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map