webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostsList.tsx":
/*!**********************************!*\
  !*** ./components/PostsList.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post */ "./components/Post.tsx");


var _this = undefined,
    _jsxFileName = "E:\\TIMA\\Projects\\DevelopsToday\\next-blog-app\\components\\PostsList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var PostsList = function PostsList(_ref) {
  var posts = _ref.posts;
  return __jsx(StyledDiv, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, posts.map(function (post) {
    return __jsx(_Post__WEBPACK_IMPORTED_MODULE_3__["default"], {
      post: post,
      key: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    });
  }));
};

var StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (PostsList);

/***/ })

})
//# sourceMappingURL=index.js.d289a60e2334fb4234aa.hot-update.js.map