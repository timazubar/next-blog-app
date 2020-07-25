webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Post.tsx":
/*!*****************************!*\
  !*** ./components/Post.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "E:\\TIMA\\Projects\\DevelopsToday\\next-blog-app\\components\\Post.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Post = function Post(_ref) {
  var post = _ref.post;
  var id = post.id,
      title = post.title,
      body = post.body;
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Link, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts/[id]",
    as: "posts/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Go to post"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, body)));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./components/PostsList.tsx":
/*!**********************************!*\
  !*** ./components/PostsList.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ "./components/Post.tsx");
var _this = undefined,
    _jsxFileName = "E:\\TIMA\\Projects\\DevelopsToday\\next-blog-app\\components\\PostsList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PostsList = function PostsList(_ref) {
  var posts = _ref.posts;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, posts.map(function (post) {
    return __jsx(_Post__WEBPACK_IMPORTED_MODULE_1__["default"], {
      post: post,
      key: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PostsList);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.tsx");
/* harmony import */ var _components_PostsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostsList */ "./components/PostsList.tsx");
/* harmony import */ var _redux_actions_postsListActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/postsListActions */ "./redux/actions/postsListActions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");


var _this = undefined,
    _jsxFileName = "E:\\TIMA\\Projects\\DevelopsToday\\next-blog-app\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Index = function Index(_ref) {
  var postsList = _ref.postsList,
      isError = _ref.isError;
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, isError ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Something went wrong!") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Latest Posts:"), __jsx(_components_PostsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    posts: postsList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })));
};

Index.getInitialProps = function _callee(_ref2) {
  var store, dispatch, postsList;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          store = _ref2.store;
          dispatch = store.dispatch;
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_redux_actions_postsListActions__WEBPACK_IMPORTED_MODULE_4__["fetchPosts"])(dispatch));

        case 4:
          postsList = store.getState().postsList.postsList;
          return _context.abrupt("return", {
            postsList: postsList
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isError: state.postsList.isError
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.a557ab659a1505e40f51.hot-update.js.map