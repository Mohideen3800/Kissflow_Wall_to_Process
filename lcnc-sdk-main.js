/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseSDK\": () => (/* binding */ BaseSDK)\n/* harmony export */ });\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _BaseSDK_instances, _BaseSDK_listeners, _BaseSDK_addListener, _BaseSDK_onMessage;\nfunction generateId(len) {\n    return Math.floor(Date.now() + len).toString(36);\n}\nfunction postMessage(args) {\n    console.log(\"SDK : @postMessage \", args);\n    if (self.parent && self.parent !== self) {\n        self.parent.postMessage(args, \"*\");\n    }\n    else {\n        self.postMessage(args);\n    }\n}\nclass BaseSDK {\n    constructor(props) {\n        _BaseSDK_instances.add(this);\n        _BaseSDK_listeners.set(this, void 0);\n        console.log(\"SDK : Initializing \", props);\n        __classPrivateFieldSet(this, _BaseSDK_listeners, {}, \"f\");\n        self.addEventListener(\"message\", __classPrivateFieldGet(this, _BaseSDK_instances, \"m\", _BaseSDK_onMessage).bind(this), false);\n    }\n    _postMessageUtil(command, args) {\n        return new Promise((resolve, reject) => {\n            var _a, _b;\n            const _id = generateId((_b = (_a = Object.keys(__classPrivateFieldGet(this, _BaseSDK_listeners, \"f\"))) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 100);\n            postMessage(Object.assign({ _id, command }, args));\n            __classPrivateFieldGet(this, _BaseSDK_instances, \"m\", _BaseSDK_addListener).call(this, _id, (data) => {\n                if (data.errorMessage) {\n                    reject(data);\n                }\n                else {\n                    resolve(data);\n                }\n            });\n        });\n    }\n    _watchMessageUtil(command, func) {\n        var _a, _b;\n        const _id = generateId((_b = (_a = Object.keys(__classPrivateFieldGet(this, _BaseSDK_listeners, \"f\"))) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 100);\n        postMessage({ _id, command });\n        __classPrivateFieldGet(this, _BaseSDK_instances, \"m\", _BaseSDK_addListener).call(this, _id, (data) => func(data));\n    }\n}\n_BaseSDK_listeners = new WeakMap(), _BaseSDK_instances = new WeakSet(), _BaseSDK_addListener = function _BaseSDK_addListener(_id, callback) {\n    __classPrivateFieldGet(this, _BaseSDK_listeners, \"f\")[_id] = __classPrivateFieldGet(this, _BaseSDK_listeners, \"f\")[_id] || [];\n    __classPrivateFieldGet(this, _BaseSDK_listeners, \"f\")[_id].push(callback);\n}, _BaseSDK_onMessage = function _BaseSDK_onMessage(event) {\n    if (event.origin !== self.location.origin) {\n        console.log(\"SDK : @onMessage \", event);\n        const data = event.data;\n        const _req = (data === null || data === void 0 ? void 0 : data._req) || {};\n        let listeners = __classPrivateFieldGet(this, _BaseSDK_listeners, \"f\")[_req === null || _req === void 0 ? void 0 : _req._id] || [];\n        if (listeners) {\n            listeners.forEach((listener) => {\n                try {\n                    listener(data);\n                }\n                catch (err) {\n                    console.error(\"Message callback error: \", err);\n                }\n            });\n        }\n    }\n};\n\n\n//# sourceURL=webpack://@kissflow/lcnc-sdk-js/./src/base.js?");

      /***/
    }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Client\": () => (/* binding */ Client)\n/* harmony export */ });\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ \"./src/base.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n\n\nclass Client extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseSDK {\n    showInfo(message) {\n        return super._postMessageUtil(_constants_js__WEBPACK_IMPORTED_MODULE_1__.LISTENER_CMDS.MESSAGE, { message });\n    }\n    showConfirm(args) {\n        return super._postMessageUtil(_constants_js__WEBPACK_IMPORTED_MODULE_1__.LISTENER_CMDS.CONFIRM, {\n            data: {\n                title: args.title,\n                content: args.content,\n                okText: args.okText || \"Ok\",\n                cancelText: args.cancelText || \"Cancel\"\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://@kissflow/lcnc-sdk-js/./src/client.js?");

      /***/
    }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LISTENER_CMDS\": () => (/* binding */ LISTENER_CMDS)\n/* harmony export */ });\nconst LISTENER_CMDS = {\n    API: \"API\",\n    PARAMS: \"PARAMS\",\n    ACCOUNT_CONTEXT: \"ACCOUNT_CONTEXT\",\n    //Forms SDK Functions\n    GETFORMFIELD: \"GETFORMFIELD\",\n    GETFORMTABLEFIELD: \"GETFORMTABLEFIELD\",\n    UPDATEFORM: \"UPDATEFORM\",\n    UPDATEFORMTABLE: \"UPDATEFORMTABLE\",\n    //Client SDK functions\n    MESSAGE: \"MESSAGE\",\n    CONFIRM: \"CONFIRM\",\n    ALERT: \"ALERT\",\n    REDIRECT: \"REDIRECT\",\n    RETURN: \"RETURN\"\n};\n\n\n//# sourceURL=webpack://@kissflow/lcnc-sdk-js/./src/constants.js?");

      /***/
    }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ \"./src/base.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n\n\nclass Form extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseSDK {\n    // tableId: string;\n    getField(fieldId) {\n        return this._postMessageUtil(_constants_js__WEBPACK_IMPORTED_MODULE_1__.LISTENER_CMDS.GETFORMFIELD, {\n            fieldId\n        });\n    }\n    updateField(args = {}) {\n        return this._postMessageUtil(_constants_js__WEBPACK_IMPORTED_MODULE_1__.LISTENER_CMDS.UPDATEFORM, {\n            data: args\n        });\n    }\n    getTable(tableId) {\n        return new Table(tableId);\n    }\n}\nclass Table extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseSDK {\n    constructor(tableId) {\n        super({});\n        this.tableId = tableId;\n    }\n    getField(rowIndex, fieldId) {\n        return this._postMessageUtil(_constants_js__WEBPACK_IMPORTED_MODULE_1__.LISTENER_CMDS.GETFORMTABLEFIELD, {\n            tableId: this.tableId,\n            rowIndex,\n            fieldId\n        });\n    }\n    updateField(rowIndex, fieldId, fieldValue) {\n        return this._postMessageUtil(_constants_js__WEBPACK_IMPORTED_MODULE_1__.LISTENER_CMDS.UPDATEFORMTABLE, {\n            data: {\n                tableId: this.tableId,\n                rowIndex,\n                fieldId,\n                fieldValue\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://@kissflow/lcnc-sdk-js/./src/form.js?");

      /***/
    }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lcnc_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lcnc-sdk.js */ \"./src/lcnc-sdk.js\");\n\n\nif (true) {\n    window.LCNC = _lcnc_sdk_js__WEBPACK_IMPORTED_MODULE_0__.default;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lcnc_sdk_js__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://@kissflow/lcnc-sdk-js/./src/index.js?");

      /***/
    }),

/***/ "./src/lcnc-sdk.js":
/*!*************************!*\
  !*** ./src/lcnc-sdk.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LcncSDK\": () => (/* binding */ LcncSDK),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ \"./src/base.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.js */ \"./src/client.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n\n\n\n\nclass LcncSDK extends _base_js__WEBPACK_IMPORTED_MODULE_0__.BaseSDK {\n    constructor(props) {\n        super({});\n        this.currentForm = new _form_js__WEBPACK_IMPORTED_MODULE_1__.Form({});\n        this.client = new _client_js__WEBPACK_IMPORTED_MODULE_2__.Client({});\n    }\n    api(url, args = {}) {\n        return this._postMessageUtil(_constants_js__WEBPACK_IMPORTED_MODULE_3__.LISTENER_CMDS.API, { url, args });\n    }\n    watchParams(func) {\n        return this._watchMessageUtil(_constants_js__WEBPACK_IMPORTED_MODULE_3__.LISTENER_CMDS.PARAMS, func);\n    }\n    getAccountContext() {\n        return this._postMessageUtil(_constants_js__WEBPACK_IMPORTED_MODULE_3__.LISTENER_CMDS.ACCOUNT_CONTEXT, {});\n    }\n    redirect(url, shouldConfirm) {\n        return this._postMessageUtil(_constants_js__WEBPACK_IMPORTED_MODULE_3__.LISTENER_CMDS.REDIRECT, { url });\n    }\n}\nfunction initSDK(config = {}) {\n    return new LcncSDK(config);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSDK);\n\n\n//# sourceURL=webpack://@kissflow/lcnc-sdk-js/./src/lcnc-sdk.js?");

    /***/
  })

  /******/
});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
  /******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
  /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
    /******/
  };
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
  }
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
  })();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
/******/
/************************************************************************/
  /******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})()
  ;