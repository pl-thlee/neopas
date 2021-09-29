"use strict";
(self["webpackChunkpas_client"] = self["webpackChunkpas_client"] || []).push([["layouts_Playground_index_tsx"],{

/***/ "./components/Chat/ChatFeed/styles.tsx":
/*!*********************************************!*\
  !*** ./components/Chat/ChatFeed/styles.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesContainer": () => (/* binding */ MessagesContainer),
/* harmony export */   "MessagesList": () => (/* binding */ MessagesList),
/* harmony export */   "MessagesItem": () => (/* binding */ MessagesItem),
/* harmony export */   "MyMessage": () => (/* binding */ MyMessage),
/* harmony export */   "ReceivedMessage": () => (/* binding */ ReceivedMessage)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const MessagesContainer = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "eax5anp4",
  label: "MessagesContainer"
})( false ? 0 : {
  name: "vms2o3",
  styles: "flex:1;min-height:100px;overflow:auto;border:none;border-radius:7px 7px 0 0",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXENoYXRGZWVkXFxzdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUUyQyIsImZpbGUiOiJDOlxcVXNlcnNcXGNvcm9ja1xcRGVza3RvcFxcTmVvUEFTXFxwYXMtY2xpZW50XFxjb21wb25lbnRzXFxDaGF0XFxDaGF0RmVlZFxcc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwIDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZXNMaXN0ID0gc3R5bGVkLm9sYFxyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZXNJdGVtID0gc3R5bGVkLmxpYFxyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTXlNZXNzYWdlID0gc3R5bGVkLmxpYFxyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIHBhZGRpbmc6IDEycHggOHB4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzIsIDI1NSk7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuYDsgXHJcblxyXG5leHBvcnQgY29uc3QgUmVjZWl2ZWRNZXNzYWdlID0gc3R5bGVkLmxpYCBcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0MDQyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5gOyBcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const MessagesList = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("ol",  false ? 0 : {
  target: "eax5anp3",
  label: "MessagesList"
})( false ? 0 : {
  name: "1qb0mst",
  styles: "list-style-type:none;padding:0",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXENoYXRGZWVkXFxzdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVxQyIsImZpbGUiOiJDOlxcVXNlcnNcXGNvcm9ja1xcRGVza3RvcFxcTmVvUEFTXFxwYXMtY2xpZW50XFxjb21wb25lbnRzXFxDaGF0XFxDaGF0RmVlZFxcc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwIDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZXNMaXN0ID0gc3R5bGVkLm9sYFxyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZXNJdGVtID0gc3R5bGVkLmxpYFxyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTXlNZXNzYWdlID0gc3R5bGVkLmxpYFxyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIHBhZGRpbmc6IDEycHggOHB4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMzIsIDI1NSk7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuYDsgXHJcblxyXG5leHBvcnQgY29uc3QgUmVjZWl2ZWRNZXNzYWdlID0gc3R5bGVkLmxpYCBcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0MDQyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5gOyBcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const MessagesItem = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("li",  false ? 0 : {
  target: "eax5anp2",
  label: "MessagesItem"
})( false ? 0 : {
  name: "jz41e1",
  styles: "margin:8px;padding:12px 8px;word-break:break-word;border-radius:4px;color:white",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXENoYXRGZWVkXFxzdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCcUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxjb3JvY2tcXERlc2t0b3BcXE5lb1BBU1xccGFzLWNsaWVudFxcY29tcG9uZW50c1xcQ2hhdFxcQ2hhdEZlZWRcXHN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VzTGlzdCA9IHN0eWxlZC5vbGBcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VzSXRlbSA9IHN0eWxlZC5saWBcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE15TWVzc2FnZSA9IHN0eWxlZC5saWBcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTMyLCAyNTUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbmA7IFxyXG5cclxuZXhwb3J0IGNvbnN0IFJlY2VpdmVkTWVzc2FnZSA9IHN0eWxlZC5saWAgXHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNDA0MjtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuYDsgXHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const MyMessage = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("li",  false ? 0 : {
  target: "eax5anp1",
  label: "MyMessage"
})( false ? 0 : {
  name: "umw3bj",
  styles: "width:55%;padding:12px 8px;word-break:break-word;border-radius:4px;background-color:rgb(0, 132, 255);margin-left:auto",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXENoYXRGZWVkXFxzdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCa0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxjb3JvY2tcXERlc2t0b3BcXE5lb1BBU1xccGFzLWNsaWVudFxcY29tcG9uZW50c1xcQ2hhdFxcQ2hhdEZlZWRcXHN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VzTGlzdCA9IHN0eWxlZC5vbGBcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VzSXRlbSA9IHN0eWxlZC5saWBcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE15TWVzc2FnZSA9IHN0eWxlZC5saWBcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTMyLCAyNTUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbmA7IFxyXG5cclxuZXhwb3J0IGNvbnN0IFJlY2VpdmVkTWVzc2FnZSA9IHN0eWxlZC5saWAgXHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNDA0MjtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuYDsgXHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const ReceivedMessage = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("li",  false ? 0 : {
  target: "eax5anp0",
  label: "ReceivedMessage"
})( false ? 0 : {
  name: "zwvw01",
  styles: "width:55%;padding:12px 8px;word-break:break-word;border-radius:4px;background-color:#3f4042;margin-right:auto",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXENoYXRGZWVkXFxzdHlsZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDd0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxjb3JvY2tcXERlc2t0b3BcXE5lb1BBU1xccGFzLWNsaWVudFxcY29tcG9uZW50c1xcQ2hhdFxcQ2hhdEZlZWRcXHN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VzTGlzdCA9IHN0eWxlZC5vbGBcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VzSXRlbSA9IHN0eWxlZC5saWBcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE15TWVzc2FnZSA9IHN0eWxlZC5saWBcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTMyLCAyNTUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbmA7IFxyXG5cclxuZXhwb3J0IGNvbnN0IFJlY2VpdmVkTWVzc2FnZSA9IHN0eWxlZC5saWAgXHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgcGFkZGluZzogMTJweCA4cHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNDA0MjtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuYDsgXHJcbiJdfQ== */",
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

/***/ "./components/Chat/ChatHeader/Index.tsx":
/*!**********************************************!*\
  !*** ./components/Chat/ChatHeader/Index.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Chat/ChatHeader/styles.tsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();





const ChatHeader = ({
  match
}) => {
  _s();

  const {
    roomID
  } = match.params; // Gets roomId from URL

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetch(`http://localhost:3000/playgrounds/${roomID}`);
  }, [roomID]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.ChatHeaderWrapper, null, roomID);
};

_s(ChatHeader, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = ChatHeader;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(ChatHeader));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ChatHeader");
__webpack_require__.$Refresh$.register(_c2, "%default%");

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

/***/ "./components/Chat/ChatHeader/styles.tsx":
/*!***********************************************!*\
  !*** ./components/Chat/ChatHeader/styles.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatHeaderWrapper": () => (/* binding */ ChatHeaderWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const ChatHeaderWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "egacaca0",
  label: "ChatHeaderWrapper"
})( false ? 0 : {
  name: "10ojr4g",
  styles: "display:flex;align-items:center;padding:1rem;background:#EF6264;font-weight:bold",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXENoYXRIZWFkZXJcXHN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRTJDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXENoYXRIZWFkZXJcXHN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhdEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6ICNFRjYyNjQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7Il19 */",
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
/* harmony import */ var _hooks_useChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hooks/useChat */ "./hooks/useChat.ts");
/* harmony import */ var _components_Chat_ChatHeader_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Chat/ChatHeader/Index */ "./components/Chat/ChatHeader/Index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");
/* harmony import */ var react_icons_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/lib */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/Chat/styles.tsx");
/* harmony import */ var _components_Chat_ChatFeed_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Chat/ChatFeed/styles */ "./components/Chat/ChatFeed/styles.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();




 //input import




 //feed import



const Chat = ({
  match
}) => {
  _s();

  const {
    roomID
  } = match.params; // Gets roomId from URL

  const {
    messages,
    sendMessage
  } = (0,_hooks_useChat__WEBPACK_IMPORTED_MODULE_1__.default)(roomID);
  const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // Message to be sent

  const handleNewMessageChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    console.log('[handleNewMessageChange]', e.target.value);
    setNewMessage(e.target.value);
  }, [newMessage]);
  const handleSendMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setNewMessage('');
      console.log('handleSendMessage', newMessage);
      sendMessage(newMessage);
    }
  }, [newMessage]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      height: 'calc(100vh - 4rem)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Chat_ChatHeader_Index__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "#chatFeed",
    style: {
      display: 'flex',
      flex: 0.8,
      padding: '1rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Chat_ChatFeed_styles__WEBPACK_IMPORTED_MODULE_5__.MessagesContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Chat_ChatFeed_styles__WEBPACK_IMPORTED_MODULE_5__.MessagesList, null, messages.map((message, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Chat_ChatFeed_styles__WEBPACK_IMPORTED_MODULE_5__.MessagesItem, {
    key: i
  }, message.ownedByCurrentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Chat_ChatFeed_styles__WEBPACK_IMPORTED_MODULE_5__.MyMessage, null, "Me : ", message.body) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Chat_ChatFeed_styles__WEBPACK_IMPORTED_MODULE_5__.ReceivedMessage, null, "You : ", message.body)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.MessageBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.ChatArea, {
    placeholder: "\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694",
    onChange: handleNewMessageChange,
    value: newMessage,
    onKeyPress: handleSendMessage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__.ChatToolbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_lib__WEBPACK_IMPORTED_MODULE_3__.IconContext.Provider, {
    value: {
      size: '1.5rem',
      color: 'black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__.GrEmoji, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiSend, null)))));
};

_s(Chat, "huOQ9ZjrKYo5vWjnYKLH2SjvU9Q=", false, function () {
  return [_hooks_useChat__WEBPACK_IMPORTED_MODULE_1__.default];
});

_c = Chat;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.withRouter)(Chat));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Chat");
__webpack_require__.$Refresh$.register(_c2, "%default%");

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

/***/ "./components/Chat/styles.tsx":
/*!************************************!*\
  !*** ./components/Chat/styles.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBox": () => (/* binding */ MessageBox),
/* harmony export */   "ChatArea": () => (/* binding */ ChatArea),
/* harmony export */   "ChatToolbar": () => (/* binding */ ChatToolbar),
/* harmony export */   "SendButton": () => (/* binding */ SendButton)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const MessageBox = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "e5moqeo3",
  label: "MessageBox"
})( false ? 0 : {
  name: "dcbc6w",
  styles: "display:flex;flex-direction:column;flex:0.2",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXHN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRW9DIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXHN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDAuMjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGF0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYXRUb29sYmFyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlbmRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYGA7Il19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const ChatArea = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("textarea",  false ? 0 : {
  target: "e5moqeo2",
  label: "ChatArea"
})( false ? 0 : {
  name: "14pcyeu",
  styles: "width:100%;height:auto;padding:1rem;resize:none!important;overflow:hidden",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXHN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXVDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXHN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDAuMjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGF0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYXRUb29sYmFyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlbmRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYGA7Il19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const ChatToolbar = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "e5moqeo1",
  label: "ChatToolbar"
})( false ? 0 : {
  name: "1hb62sl",
  styles: "display:flex;justify-content:space-between;align-items:center;padding:1rem;background:rgb(248, 248, 248);height:3rem;border-top:1px solid rgb(221, 221, 221);border-bottom-left-radius:4px;border-bottom-right-radius:4px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXHN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JxQyIsImZpbGUiOiJDOlxcVXNlcnNcXGNvcm9ja1xcRGVza3RvcFxcTmVvUEFTXFxwYXMtY2xpZW50XFxjb21wb25lbnRzXFxDaGF0XFxzdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAwLjI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhdEFyZWEgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGF0VG9vbGJhciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZW5kQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBgOyJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const SendButton = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("button",  false ? 0 : {
  target: "e5moqeo0",
  label: "SendButton"
})( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXENoYXRcXHN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJ1QyIsImZpbGUiOiJDOlxcVXNlcnNcXGNvcm9ja1xcRGVza3RvcFxcTmVvUEFTXFxwYXMtY2xpZW50XFxjb21wb25lbnRzXFxDaGF0XFxzdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAwLjI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhdEFyZWEgPSBzdHlsZWQudGV4dGFyZWFgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGF0VG9vbGJhciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZW5kQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBgOyJdfQ== */");

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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Snb/styles.tsx");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();

 //동작용

 //icons





const Snb = () => {
  _s();

  const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const menuArr = [{
    name: 'Description',
    content: 'Description'
  }, {
    name: 'Editor',
    content: 'Editor'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Side, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons__WEBPACK_IMPORTED_MODULE_2__.IconContext.Provider, {
    value: {
      color: "#ffff"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__.default, {
    button: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
    style: {
      color: "#ffff"
    }
  }, "Descript")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__.default, {
    button: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
    style: {
      color: "#ffff"
    }
  }, "Editor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__.default, {
    button: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
    style: {
      color: "#ffff"
    }
  }, "Setting")));
};

_s(Snb, "7u0Gkg0v2ndXEokaGVtyUM5AeKo=");

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

/***/ "./components/Snb/styles.tsx":
/*!***********************************!*\
  !*** ./components/Snb/styles.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Side": () => (/* binding */ Side),
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const Side = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "eht22261",
  label: "Side"
})( false ? 0 : {
  name: "nzm27a",
  styles: "display:flex;border-right:1px solid #e0e0e0;flex-direction:column;align-items:center;justify-content:center;width:5%;background:#292F36;.item{font-size:1.125rem;color:#ffff;font-weight:400;letter-spacing:2px;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXFNuYlxcc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFOEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjb3JvY2tcXERlc2t0b3BcXE5lb1BBU1xccGFzLWNsaWVudFxcY29tcG9uZW50c1xcU25iXFxzdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgYmFja2dyb3VuZDogIzI5MkYzNjtcclxuXHJcbiAgICAuaXRlbSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4OyAgICAgICAgXHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWVudSA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7Il19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const Menu = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "eht22260",
  label: "Menu"
})( false ? 0 : {
  name: "jp89nk",
  styles: "margin-top:30px;width:200px;display:flex;flex-direction:column",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXFNuYlxcc3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQjhCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY29yb2NrXFxEZXNrdG9wXFxOZW9QQVNcXHBhcy1jbGllbnRcXGNvbXBvbmVudHNcXFNuYlxcc3R5bGVzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIGJhY2tncm91bmQ6ICMyOTJGMzY7XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDsgICAgICAgIFxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gOyJdfQ== */",
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

/***/ "./hooks/useChat.ts":
/*!**************************!*\
  !*** ./hooks/useChat.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/wrapper.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _s = __webpack_require__.$Refresh$.signature();



const NEW_CHAT_MESSAGE_EVENT = 'message'; // Name of the event

const SOCKET_SERVER_URL = 'http://localhost:4000';

const useChat = roomID => {
  _s();

  const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // Sent and received messages

  const socketRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Creates a WebSocket connection
    socketRef.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.default)(SOCKET_SERVER_URL, {
      query: {
        roomID
      }
    }); // Listens for incoming messages

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, message => {
      const incomingMessage = { ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id
      };
      setMessages(messages => [...messages, incomingMessage]);
      console.log('ownedByCurrentUser : ', incomingMessage.ownedByCurrentUser);
    }); // Destroys the socket reference
    // when the connection is closed

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomID]); // Sends a message to the server that
  // forwards it to all users in the same room

  const sendMessage = messageBody => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id // 함부로 가져온 거 쓰지말자.. id 속성값이 없다.

    });
    console.log('messageBody : ', messageBody);
  };

  return {
    messages,
    sendMessage
  };
};

_s(useChat, "rJUxOyV7d92WYkbiDZQ/Q3CnO+M=");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useChat);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Chat */ "./components/Chat/index.tsx");
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Editor */ "./components/Editor/index.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Header */ "./components/Header/index.tsx");
/* harmony import */ var _components_Snb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Snb */ "./components/Snb/index.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);







const Playground = () => {
  // if (!localStorage.getItem('user')) {
  //   return <Redirect to="/login" />;
  // }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Snb__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Editor__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Chat__WEBPACK_IMPORTED_MODULE_1__.default, null)));
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