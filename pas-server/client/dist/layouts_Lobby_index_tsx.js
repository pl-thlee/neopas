"use strict";
(self["webpackChunkpas_client"] = self["webpackChunkpas_client"] || []).push([["layouts_Lobby_index_tsx"],{

/***/ "./components/Url/index.tsx":
/*!**********************************!*\
  !*** ./components/Url/index.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Url/styles.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();





const Url = () => {
  _s();

  const [roomID, setRoomID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const handleRoomNameChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setRoomID(e.currentTarget.value);
  }, [roomID]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      height: 'calc(100vh - 4rem)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.EnterRoomBtn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    placeholder: "\uD559\uBC88\uC785\uB825",
    value: roomID,
    onChange: handleRoomNameChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.TextInputField, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: `/${roomID}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Text, null, "Join room")))));
};

_s(Url, "/CksBnUkbA2EWeAxZe1nE9UDM8M=");

_c = Url;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Url);

var _c;

__webpack_require__.$Refresh$.register(_c, "Url");

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

/***/ "./components/Url/styles.tsx":
/*!***********************************!*\
  !*** ./components/Url/styles.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrap": () => (/* binding */ Wrap),
/* harmony export */   "TextInputField": () => (/* binding */ TextInputField),
/* harmony export */   "EnterRoomBtn": () => (/* binding */ EnterRoomBtn),
/* harmony export */   "Text": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const Wrap = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "e1evbxxq3",
  label: "Wrap"
})( false ? 0 : {
  name: "y1f223",
  styles: "margin:auto",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXFVybFxcc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFOEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjb3JvY2tcXERlc2t0b3BcXE5lb1BBU1xccGFzLWNsaWVudFxcY29tcG9uZW50c1xcVXJsXFxzdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXAgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luIDogYXV0bztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0SW5wdXRGaWVsZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAwcHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRjY2NUE7XHJcbiAgICBoZWlnaHQ6IDUwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVudGVyUm9vbUJ0biA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDI0cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLnBgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWNvbG9yOiBiYWxjaztcclxuYDtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const TextInputField = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "e1evbxxq2",
  label: "TextInputField"
})( false ? 0 : {
  name: "n8yuc0",
  styles: "padding:0px 12px;border-radius:7px;font-size:24px;background:#FF665A;height:50",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXFVybFxcc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNd0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxjb3JvY2tcXERlc2t0b3BcXE5lb1BBU1xccGFzLWNsaWVudFxcY29tcG9uZW50c1xcVXJsXFxzdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXAgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luIDogYXV0bztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0SW5wdXRGaWVsZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAwcHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRjY2NUE7XHJcbiAgICBoZWlnaHQ6IDUwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVudGVyUm9vbUJ0biA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDI0cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLnBgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWNvbG9yOiBiYWxjaztcclxuYDtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const EnterRoomBtn = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "e1evbxxq1",
  label: "EnterRoomBtn"
})( false ? 0 : {
  name: "aiiijn",
  styles: "width:300;margin-left:auto;margin-right:auto;margin-top:20px;padding:24px 12px;font-size:20px;background:#ffff;font-weight:600;text-align:center;border-radius:7px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXFVybFxcc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjc0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxjb3JvY2tcXERlc2t0b3BcXE5lb1BBU1xccGFzLWNsaWVudFxcY29tcG9uZW50c1xcVXJsXFxzdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXAgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luIDogYXV0bztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0SW5wdXRGaWVsZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAwcHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRjY2NUE7XHJcbiAgICBoZWlnaHQ6IDUwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVudGVyUm9vbUJ0biA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDI0cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLnBgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWNvbG9yOiBiYWxjaztcclxuYDtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const Text = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("p",  false ? 0 : {
  target: "e1evbxxq0",
  label: "Text"
})( false ? 0 : {
  name: "1q811bb",
  styles: "text-align:center;font-color:balck",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXFVybFxcc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQjRCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXFVybFxcc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbiA6IGF1dG87XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dElucHV0RmllbGQgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogMHB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY2NjVBO1xyXG4gICAgaGVpZ2h0OiA1MDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFbnRlclJvb21CdG4gPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDMwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1jb2xvcjogYmFsY2s7XHJcbmA7XHJcbiJdfQ== */",
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

/***/ "./layouts/Lobby/index.tsx":
/*!*********************************!*\
  !*** ./layouts/Lobby/index.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Url */ "./components/Url/index.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Header */ "./components/Header/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);





const Lobby = () => {
  // JWT 토큰이 있는지 확인하고
  // if (!localStorage.getItem('user')) {
  //   return <Redirect to="/login" />;
  // }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      display: 'flex',
      background: '#292F36'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Url__WEBPACK_IMPORTED_MODULE_0__.default, null)));
};

_c = Lobby;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lobby);

var _c;

__webpack_require__.$Refresh$.register(_c, "Lobby");

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

/***/ })

}]);