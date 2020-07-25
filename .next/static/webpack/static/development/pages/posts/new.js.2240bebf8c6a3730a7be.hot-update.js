webpackHotUpdate("static\\development\\pages\\posts\\new.js",{

/***/ "./pages/posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/posts/new.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.tsx");
/* harmony import */ var _redux_actions_createPostActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/createPostActions */ "./redux/actions/createPostActions.ts");


var _this = undefined,
    _jsxFileName = "E:\\TIMA\\Projects\\DevelopsToday\\next-blog-app\\pages\\posts\\new.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 30%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var CreatePost = function CreatePost(_ref) {
  var sendPost = _ref.sendPost,
      isSent = _ref.isSent,
      isLoading = _ref.isLoading,
      isError = _ref.isError;
  var titleRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "CreatePost"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      var title = titleRef.current.value;
      var body = contentRef.current.value;
      contentRef.current.value = '';
      titleRef.current.value = '';
      sendPost({
        title: title,
        body: body
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(StyledFormGroup, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    htmlFor: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Post title: ", __jsx("input", {
    type: "text",
    name: "title",
    ref: titleRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    htmlFor: "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Contents:", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    as: "textarea",
    name: "body",
    ref: contentRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    disabled: isLoading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Post!"))), isSent && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 18
    }
  }, "Your Post was created!"), isError && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }, "Something went wrong!"));
};

var StyledFormGroup = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group)(_templateObject());

var mapStateToProps = function mapStateToProps(state) {
  return {
    isSent: state.createPost.isSent,
    isLoading: state.createPost.isLoading,
    isError: state.createPost.isError
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    sendPost: Object(_redux_actions_createPostActions__WEBPACK_IMPORTED_MODULE_6__["sendPost"])(dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CreatePost));

/***/ })

})
//# sourceMappingURL=new.js.2240bebf8c6a3730a7be.hot-update.js.map