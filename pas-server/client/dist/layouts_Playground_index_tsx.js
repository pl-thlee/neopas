"use strict";
(self["webpackChunkpas_client"] = self["webpackChunkpas_client"] || []).push([["layouts_Playground_index_tsx"],{

/***/ "./components/Chat/index.tsx":
/*!***********************************!*\
  !*** ./components/Chat/index.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);



const Chat = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      flex: '0.3',
      background: 'lightgray',
      height: 'calc(100vh - 4rem)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://via.placeholder.com/194.png?text=Chat%20component",
    style: {
      width: '100%',
      height: 'calc(100vh - 4rem)'
    }
  }));
};

_c = Chat;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);

var _c;

__webpack_require__.$Refresh$.register(_c, "Chat");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./components/Editor/editorAddons.ts":
/*!*******************************************!*\
  !*** ./components/Editor/editorAddons.ts ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_theme_darcula_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror/theme/darcula.css */ "./node_modules/codemirror/theme/darcula.css");
/* harmony import */ var codemirror_theme_elegant_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/theme/elegant.css */ "./node_modules/codemirror/theme/elegant.css");
/* harmony import */ var codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/mode/clike/clike */ "./node_modules/codemirror/mode/clike/clike.js");
/* harmony import */ var codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/mode/python/python */ "./node_modules/codemirror/mode/python/python.js");
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_mode_php_php__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/mode/php/php */ "./node_modules/codemirror/mode/php/php.js");
/* harmony import */ var codemirror_mode_php_php__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_php_php__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_mode_r_r__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/mode/r/r */ "./node_modules/codemirror/mode/r/r.js");
/* harmony import */ var codemirror_mode_r_r__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_r_r__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var codemirror_mode_sql_sql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codemirror/mode/sql/sql */ "./node_modules/codemirror/mode/sql/sql.js");
/* harmony import */ var codemirror_mode_sql_sql__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_sql_sql__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var codemirror_mode_jsx_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codemirror/mode/jsx/jsx */ "./node_modules/codemirror/mode/jsx/jsx.js");
/* harmony import */ var codemirror_mode_jsx_jsx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_jsx_jsx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! codemirror/addon/edit/closebrackets */ "./node_modules/codemirror/addon/edit/closebrackets.js");
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var codemirror_addon_edit_closetag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! codemirror/addon/edit/closetag */ "./node_modules/codemirror/addon/edit/closetag.js");
/* harmony import */ var codemirror_addon_edit_closetag__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_closetag__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var codemirror_addon_fold_foldcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! codemirror/addon/fold/foldcode */ "./node_modules/codemirror/addon/fold/foldcode.js");
/* harmony import */ var codemirror_addon_fold_foldcode__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldcode__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var codemirror_addon_fold_foldgutter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! codemirror/addon/fold/foldgutter */ "./node_modules/codemirror/addon/fold/foldgutter.js");
/* harmony import */ var codemirror_addon_fold_foldgutter__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldgutter__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var codemirror_addon_fold_brace_fold__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! codemirror/addon/fold/brace-fold */ "./node_modules/codemirror/addon/fold/brace-fold.js");
/* harmony import */ var codemirror_addon_fold_brace_fold__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_brace_fold__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var codemirror_addon_fold_comment_fold__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! codemirror/addon/fold/comment-fold */ "./node_modules/codemirror/addon/fold/comment-fold.js");
/* harmony import */ var codemirror_addon_fold_comment_fold__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_comment_fold__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! codemirror/addon/fold/foldgutter.css */ "./node_modules/codemirror/addon/fold/foldgutter.css");
/* harmony import */ var codemirror_addon_hint_show_hint__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! codemirror/addon/hint/show-hint */ "./node_modules/codemirror/addon/hint/show-hint.js");
/* harmony import */ var codemirror_addon_hint_show_hint__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_show_hint__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var codemirror_addon_hint_show_hint_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! codemirror/addon/hint/show-hint.css */ "./node_modules/codemirror/addon/hint/show-hint.css");
/* harmony import */ var codemirror_addon_hint_javascript_hint__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! codemirror/addon/hint/javascript-hint */ "./node_modules/codemirror/addon/hint/javascript-hint.js");
/* harmony import */ var codemirror_addon_hint_javascript_hint__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_javascript_hint__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var codemirror_addon_hint_xml_hint__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! codemirror/addon/hint/xml-hint */ "./node_modules/codemirror/addon/hint/xml-hint.js");
/* harmony import */ var codemirror_addon_hint_xml_hint__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_xml_hint__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var codemirror_addon_hint_html_hint__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! codemirror/addon/hint/html-hint */ "./node_modules/codemirror/addon/hint/html-hint.js");
/* harmony import */ var codemirror_addon_hint_html_hint__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_html_hint__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var codemirror_addon_hint_css_hint__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! codemirror/addon/hint/css-hint */ "./node_modules/codemirror/addon/hint/css-hint.js");
/* harmony import */ var codemirror_addon_hint_css_hint__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_css_hint__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var codemirror_addon_hint_anyword_hint__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! codemirror/addon/hint/anyword-hint */ "./node_modules/codemirror/addon/hint/anyword-hint.js");
/* harmony import */ var codemirror_addon_hint_anyword_hint__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_anyword_hint__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var codemirror_addon_hint_sql_hint__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! codemirror/addon/hint/sql-hint */ "./node_modules/codemirror/addon/hint/sql-hint.js");
/* harmony import */ var codemirror_addon_hint_sql_hint__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_sql_hint__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var codemirror_addon_search_match_highlighter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! codemirror/addon/search/match-highlighter */ "./node_modules/codemirror/addon/search/match-highlighter.js");
/* harmony import */ var codemirror_addon_search_match_highlighter__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_match_highlighter__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var codemirror_addon_selection_active_line__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! codemirror/addon/selection/active-line */ "./node_modules/codemirror/addon/selection/active-line.js");
/* harmony import */ var codemirror_addon_selection_active_line__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_selection_active_line__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var codemirror_addon_comment_continuecomment__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! codemirror/addon/comment/continuecomment */ "./node_modules/codemirror/addon/comment/continuecomment.js");
/* harmony import */ var codemirror_addon_comment_continuecomment__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_comment_continuecomment__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var codemirror_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! codemirror/addon/display/placeholder */ "./node_modules/codemirror/addon/display/placeholder.js");
/* harmony import */ var codemirror_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_display_placeholder__WEBPACK_IMPORTED_MODULE_28__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


/**
 * @see https://codemirror.net/demo/theme.html
 */



/**
 * @see https://stackoverflow.com/questions/53469681/how-to-configure-codemirror-for-c-like-language
 * @see https://codemirror.net/mode/
 */








/**
 * @see https://codemirror.net/doc/manual.html#addons
 */
















/**
 * @prop {boolean} highlightSelectionMatches.showToken
 */


/**
 * @todo lint
 * @see https://github.com/felixhao28/JSCPP
 */
// import 'codemirror/addon/lint/lint';

/**
 * @prop {boolean} styleActiveLine.nonEmpty
 */


/**
 * @prop {string | boolean | { key: string; continueLineComment?: boolean | undefined; } | undefined} continueComments
 */


/**
 * @prop {string | Node | undefined} placeholder
 */



const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./components/Editor/editorConfig.ts":
/*!*******************************************!*\
  !*** ./components/Editor/editorConfig.ts ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editorConfig": () => (/* binding */ editorConfig)
/* harmony export */ });
/* harmony import */ var _libs_languageMapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/languageMapper */ "./libs/languageMapper.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


const editorConfig = {
  mode: (0,_libs_languageMapper__WEBPACK_IMPORTED_MODULE_0__.default)('tsx'),
  theme: 'darcula',
  smartIndent: true,
  tabSize: 4,
  indentWithTabs: false,
  lineWrapping: true,
  lineNumbers: true,
  scrollbarStyle: 'null',
  // readOnly: 'nocursor',
  autofocus: true,
  autoCloseTags: true,
  autoCloseBrackets: {
    override: true
  },
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  showHint: true,
  highlightSelectionMatches: {
    showToken: true
  },
  styleActiveLine: {
    nonEmpty: true
  },
  continueComments: true,
  placeholder: 'Source code goes here!'
};

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./components/Editor/index.tsx":
/*!*************************************!*\
  !*** ./components/Editor/index.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-codemirror2 */ "./node_modules/react-codemirror2/index.js");
/* harmony import */ var _editorConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editorConfig */ "./components/Editor/editorConfig.ts");
/* harmony import */ var yjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yjs */ "./node_modules/yjs/dist/yjs.mjs");
/* harmony import */ var y_webrtc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! y-webrtc */ "./node_modules/y-webrtc/src/y-webrtc.js");
/* harmony import */ var y_codemirror__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! y-codemirror */ "./node_modules/y-codemirror/src/y-codemirror.js");
/* harmony import */ var _editorAddons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editorAddons */ "./components/Editor/editorAddons.ts");
/* harmony import */ var _remote_caret_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remote-caret.css */ "./components/Editor/remote-caret.css");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();












const Editor = () => {
  _s();

  const [doc, setDoc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [editor, setEditor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  if (editor) {
    // setEditor(undefined);
    // editor.refresh();
    editor.setSize('70vw', 'calc(100vh - 4rem)');
  }

  const token = localStorage.getItem('user');
  const currentUserId = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_6__.default)(token).userId;
  const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // const codemirrorRef = useRef(doc?.getEditor());

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (editor) {
      // Create a Yjs document that holds shared data
      const ydoc = new yjs__WEBPACK_IMPORTED_MODULE_7__.Doc();
      let provider = null;

      try {
        // Syncs the ydoc throught WebRTC connection
        provider = new y_webrtc__WEBPACK_IMPORTED_MODULE_8__.WebrtcProvider('pas-room', ydoc); // Define a shared text type on the document

        const yText = ydoc.getText('codemirror'); // UndoManager used for stacking the undo and redo operation for yjs

        const yUndoManager = new yjs__WEBPACK_IMPORTED_MODULE_7__.UndoManager(yText);
        const awareness = provider.awareness;
        const color = randomcolor__WEBPACK_IMPORTED_MODULE_5___default()();
        awareness.setLocalStateField('user', {
          name: currentUserId,
          color: color
        });
        new y_codemirror__WEBPACK_IMPORTED_MODULE_9__.CodemirrorBinding(yText, editor, awareness, {
          yUndoManager
        });
      } catch (err) {
        console.error(err);
      }

      return () => {
        // Releasing the resources used and destroying the document
        if (provider) {
          provider.disconnect();
          ydoc.destroy();
        }
      };
    }
  }, [editor]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      flex: '0.7',
      width: '100%',
      background: 'lightgray',
      // marginTop: '0.3rem',
      height: 'calc(100vh - 4rem)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_codemirror2__WEBPACK_IMPORTED_MODULE_1__.UnControlled // value={code}
  , {
    options: _editorConfig__WEBPACK_IMPORTED_MODULE_2__.editorConfig,
    editorDidMount: editor => {
      setEditor(editor);
    },
    onChange: (editor, data, Code) => {
      setCode(code);
    },
    autoScroll: true // ref={(c: any) => setEditorRef(c)}

  }));
};

_s(Editor, "Y2jL9xqpjrcdUX7kkqGOckaks8o=");

_c = Editor;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

var _c;

__webpack_require__.$Refresh$.register(_c, "Editor");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Header/styles.tsx");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);






// interface Props {
//   user: IUser;
// }
const Header = () => {
  const token = localStorage.getItem('user');
  const currentUserId = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.default)(token).userId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.HeaderWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "logo"
  }, "NeoPAS (Programming Assistant System)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.ProfileImg, {
    src: gravatar__WEBPACK_IMPORTED_MODULE_2___default().url(currentUserId, {
      size: '28px',
      default: 'retro'
    })
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Spacer, null));
};

_c = Header;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./components/Header/styles.tsx":
/*!**************************************!*\
  !*** ./components/Header/styles.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderWrapper": () => (/* binding */ HeaderWrapper),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper),
/* harmony export */   "Spacer": () => (/* binding */ Spacer),
/* harmony export */   "UserInfo": () => (/* binding */ UserInfo),
/* harmony export */   "ProfileImg": () => (/* binding */ ProfileImg)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var _components_Responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Responsive */ "./components/Responsive/index.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const HeaderWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("header",  false ? 0 : {
  target: "e1necq0t4",
  label: "HeaderWrapper"
})( false ? 0 : {
  name: "q3ckdp",
  styles: "position:fixed;width:100%;box-shadow:0px 2px 4px rgba(0, 0, 0, 0.08);border-bottom:1px rgb(68, 76, 86) solid;z-index:628",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlclxcc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHK0QiLCJmaWxlIjoiQzpcXFVzZXJzXFxjb3JvY2tcXERlc2t0b3BcXE5lb1BBU1xccGFzLWNsaWVudFxcY29tcG9uZW50c1xcSGVhZGVyXFxzdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3BvbnNpdmUgZnJvbSAnQGNvbXBvbmVudHMvUmVzcG9uc2l2ZSc7XHJcbmltcG9ydCBzdHlsZWQsIHsgU3R5bGVkQ29tcG9uZW50IH0gZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJXcmFwcGVyOiBTdHlsZWRDb21wb25lbnQ8e30+ID0gc3R5bGVkLmhlYWRlcmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggcmdiKDY4LCA3NiwgODYpIHNvbGlkO1xyXG4gIHotaW5kZXg6IDYyODtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkKFJlc3BvbnNpdmUpYFxyXG4gIGhlaWdodDogNHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAubG9nbyB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcblxyXG4gIC5yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3BhY2VyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDRyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAyLjVyZW07XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgfVxyXG5gO1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)(_components_Responsive__WEBPACK_IMPORTED_MODULE_1__.default,  false ? 0 : {
  target: "e1necq0t3",
  label: "Wrapper"
})( false ? 0 : {
  name: "voq6rk",
  styles: "height:4rem;display:flex;align-items:center;justify-content:space-between;.logo{font-size:1.5rem;letter-spacing:0.5px;}.right{display:flex;align-items:center;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlclxcc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXeUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxjb3JvY2tcXERlc2t0b3BcXE5lb1BBU1xccGFzLWNsaWVudFxcY29tcG9uZW50c1xcSGVhZGVyXFxzdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3BvbnNpdmUgZnJvbSAnQGNvbXBvbmVudHMvUmVzcG9uc2l2ZSc7XHJcbmltcG9ydCBzdHlsZWQsIHsgU3R5bGVkQ29tcG9uZW50IH0gZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJXcmFwcGVyOiBTdHlsZWRDb21wb25lbnQ8e30+ID0gc3R5bGVkLmhlYWRlcmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggcmdiKDY4LCA3NiwgODYpIHNvbGlkO1xyXG4gIHotaW5kZXg6IDYyODtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkKFJlc3BvbnNpdmUpYFxyXG4gIGhlaWdodDogNHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAubG9nbyB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcblxyXG4gIC5yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3BhY2VyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDRyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckluZm8gPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAyLjVyZW07XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgfVxyXG5gO1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const Spacer = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "e1necq0t2",
  label: "Spacer"
})( false ? 0 : {
  name: "p13mol",
  styles: "height:4rem",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlclxcc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmdDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlclxcc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNwb25zaXZlIGZyb20gJ0Bjb21wb25lbnRzL1Jlc3BvbnNpdmUnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IFN0eWxlZENvbXBvbmVudCB9IGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcHBlcjogU3R5bGVkQ29tcG9uZW50PHt9PiA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYig2OCwgNzYsIDg2KSBzb2xpZDtcclxuICB6LWluZGV4OiA2Mjg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZChSZXNwb25zaXZlKWBcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgfVxyXG5cclxuICAucmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSW1nID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMi41cmVtO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIH1cclxuYDtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const UserInfo = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "e1necq0t1",
  label: "UserInfo"
})( false ? 0 : {
  name: "wqzysi",
  styles: "font-weight:800;margin-right:1rem",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlclxcc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2tDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlclxcc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNwb25zaXZlIGZyb20gJ0Bjb21wb25lbnRzL1Jlc3BvbnNpdmUnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IFN0eWxlZENvbXBvbmVudCB9IGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcHBlcjogU3R5bGVkQ29tcG9uZW50PHt9PiA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYig2OCwgNzYsIDg2KSBzb2xpZDtcclxuICB6LWluZGV4OiA2Mjg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZChSZXNwb25zaXZlKWBcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgfVxyXG5cclxuICAucmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSW1nID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMi41cmVtO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIH1cclxuYDtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const ProfileImg = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("img",  false ? 0 : {
  target: "e1necq0t0",
  label: "ProfileImg"
})( false ? 0 : {
  name: "aqvqka",
  styles: "width:2.5rem;height:2.5rem;border-radius:50%!important;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12),0 1px 2px rgba(0, 0, 0, 0.24);transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);&:hover{box-shadow:0 14px 28px rgba(0, 0, 0, 0.25),0 10px 10px rgba(0, 0, 0, 0.22);}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlclxcc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ29DIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXEhlYWRlclxcc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNwb25zaXZlIGZyb20gJ0Bjb21wb25lbnRzL1Jlc3BvbnNpdmUnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IFN0eWxlZENvbXBvbmVudCB9IGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcHBlcjogU3R5bGVkQ29tcG9uZW50PHt9PiA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYig2OCwgNzYsIDg2KSBzb2xpZDtcclxuICB6LWluZGV4OiA2Mjg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZChSZXNwb25zaXZlKWBcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgfVxyXG5cclxuICAucmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSW1nID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMi41cmVtO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIH1cclxuYDtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./components/Responsive/index.tsx":
/*!*****************************************!*\
  !*** ./components/Responsive/index.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



const ResponsiveWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "e1spaocj0",
  label: "ResponsiveWrapper"
})( false ? 0 : {
  name: "107587t",
  styles: "padding-left:1rem;padding-right:1rem;margin:0 auto;@media (max-width: 1024px){width:768px;}@media (max-width: 768px){width:100%;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXFJlc3BvbnNpdmVcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHb0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxjb3JvY2tcXERlc2t0b3BcXE5lb1BBU1xccGFzLWNsaWVudFxcY29tcG9uZW50c1xcUmVzcG9uc2l2ZVxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBSZXNwb25zaXZlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgLy8gd2lkdGg6IDEwMjQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHdpZHRoOiA3NjhweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSZXNwb25zaXZlID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogUHJvcHNXaXRoQ2hpbGRyZW48e30+KSA9PiB7XHJcbiAgcmV0dXJuIDxSZXNwb25zaXZlV3JhcHBlciB7Li4ucmVzdH0+e2NoaWxkcmVufTwvUmVzcG9uc2l2ZVdyYXBwZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2l2ZTtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

_c = ResponsiveWrapper;

const Responsive = ({
  children,
  ...rest
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ResponsiveWrapper, rest, children);
};

_c2 = Responsive;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Responsive);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ResponsiveWrapper");
__webpack_require__.$Refresh$.register(_c2, "Responsive");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./components/Snb/index.tsx":
/*!**********************************!*\
  !*** ./components/Snb/index.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lib */ "./node_modules/react-icons/lib/esm/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);









const Snb = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_lib__WEBPACK_IMPORTED_MODULE_1__.IconContext.Provider, {
    value: {
      size: '2rem',
      color: 'white'
      /* attr: { display: 'block' } */

    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      background: 'rgb(30, 34, 40)',
      width: '4rem',
      borderRight: '1px rgb(68, 76, 86) solid',
      textAlign: 'center',
      padding: '0.5rem',
      height: 'calc(100vh - 4rem)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      margin: '1rem 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_di__WEBPACK_IMPORTED_MODULE_2__.DiCodeBadge, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      margin: '1rem 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiUpload, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      margin: '1rem 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUnlock, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      margin: '1rem 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaLock, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      margin: '1rem 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineSetting, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      margin: '1rem 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_6__.GiExitDoor, null))));
};

_c = Snb;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snb);

var _c;

__webpack_require__.$Refresh$.register(_c, "Snb");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./layouts/Playground/index.tsx":
/*!**************************************!*\
  !*** ./layouts/Playground/index.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Chat */ "./components/Chat/index.tsx");
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Editor */ "./components/Editor/index.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Header */ "./components/Header/index.tsx");
/* harmony import */ var _components_Snb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Snb */ "./components/Snb/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);








const Playground = () => {
  if (!localStorage.getItem('user')) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__.Redirect, {
      to: "/login"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Snb__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Editor__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Chat__WEBPACK_IMPORTED_MODULE_0__.default, null)));
};

_c = Playground;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Playground);

var _c;

__webpack_require__.$Refresh$.register(_c, "Playground");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./libs/languageMapper.ts":
/*!********************************!*\
  !*** ./libs/languageMapper.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

/**
 * @see https://codemirror.net/doc/manual.html#config
 * @param {string} ext - 확장자
 * @returns {string} 'text/XXX' - 매핑된 language mode
 */
const setMode = ext => {
  switch (ext) {
    case 'c':
      return 'text/x-csrc';

    case 'cpp':
      return 'text/x-c++src';

    case 'css':
      return 'text/css';

    case 'python':
      return 'text/x-python';

    case 'java':
      return 'text/x-java';

    case 'js':
      return 'text/javascript';

    case 'ts':
      return 'text/typescript';

    case 'jsx':
      return 'text/jsx';

    case 'tsx':
      return 'text/typescript-jsx';

    default:
      return 'null';
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setMode);

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./components/Editor/remote-caret.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./components/Editor/remote-caret.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".CodeMirror * {\r\n  font-family: Consolas, 'Courier New';\r\n  font-size: 15px;\r\n}\r\n\r\n.remote-caret {\r\n  position: absolute;\r\n  border-left: black;\r\n  border-left-style: solid;\r\n  border-left-width: 2px;\r\n  height: 1em;\r\n}\r\n\r\n.remote-caret > div {\r\n  position: relative;\r\n  top: -0.4em;\r\n  font-size: 13px;\r\n  background-color: rgb(250, 129, 0);\r\n  font-family: serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  line-height: normal;\r\n  user-select: none;\r\n  color: white;\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n  z-index: 3;\r\n  border-radius: 20%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./components/Editor/remote-caret.css"],"names":[],"mappings":"AAAA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;EACxB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,kCAAkC;EAClC,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,kBAAkB;AACpB","sourcesContent":[".CodeMirror * {\r\n  font-family: Consolas, 'Courier New';\r\n  font-size: 15px;\r\n}\r\n\r\n.remote-caret {\r\n  position: absolute;\r\n  border-left: black;\r\n  border-left-style: solid;\r\n  border-left-width: 2px;\r\n  height: 1em;\r\n}\r\n\r\n.remote-caret > div {\r\n  position: relative;\r\n  top: -0.4em;\r\n  font-size: 13px;\r\n  background-color: rgb(250, 129, 0);\r\n  font-family: serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  line-height: normal;\r\n  user-select: none;\r\n  color: white;\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n  z-index: 3;\r\n  border-radius: 20%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./components/Editor/remote-caret.css":
/*!********************************************!*\
  !*** ./components/Editor/remote-caret.css ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./remote-caret.css */ "./node_modules/css-loader/dist/cjs.js!./components/Editor/remote-caret.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./remote-caret.css */ "./node_modules/css-loader/dist/cjs.js!./components/Editor/remote-caret.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./remote-caret.css */ "./node_modules/css-loader/dist/cjs.js!./components/Editor/remote-caret.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_remote_caret_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ })

}]);