/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom-starter.js":
/*!****************************!*\
  !*** ./src/dom-starter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restaurant_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-image.jpg */ "./src/restaurant-image.jpg");
/*<h1 class="title">The Finest Restaurant</h1>
<img class="restaurantFoto" src="../src/restaurant-image.jpg" width="500px">
<p class="restaurantDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae adipisci inventore veniam necessitatibus fugiat, eos eligendi a officiis non magni molestiae incidunt rem illo, sapiente maiores dolores neque possimus exercitationem.
At, ea sit rem commodi, repellendus corporis omnis maxime dignissimos repellat sed laborum quis ipsam ipsa ut vel pariatur est quidem harum adipisci accusamus voluptas? Obcaecati ea voluptate veritatis et?
</p>
*/


function startPage(content) {
    const mainPage = document.createElement("div");
    mainPage.setAttribute("id", "mainPage");

    let title = document.createElement("h1");
    title.innerText = "The Finest Restaurant";
    title.classList.add("title");

    let image = new Image();
    image.src = _restaurant_image_jpg__WEBPACK_IMPORTED_MODULE_0__;
    image.classList.add("restaurantFoto");

    let restaurantDescription = document.createElement("p");
    restaurantDescription.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae adipisci inventore veniam necessitatibus fugiat, eos eligendi a officiis non magni molestiae incidunt rem illo, sapiente maiores dolores neque possimus exercitationem. At, ea sit rem commodi, repellendus corporis omnis maxime dignissimos repellat sed laborum quis ipsam ipsa ut vel pariatur est quidem harum adipisci accusamus voluptas?";
    restaurantDescription.classList.add("restaurantDescription");

    mainPage.style.cssText = "display: grid; grid-template: 150px 500px / 1fr 2fr; grid-template-areas: 'title text' '. image'; padding: 10px; margin-top: 20px;";
    title.style.cssText = "font-weight: bold; grid-area: title;";
    image.style.cssText = "height: 500px; grid-area: image; justify-self: center;";
    restaurantDescription.style.cssText = "font-size: 15px + 0.1em; font-style: italic; grid-area: text; padding: 15px 15px 0 15px;";

    content.appendChild(mainPage);

    mainPage.appendChild(title);
    mainPage.appendChild(image);
    mainPage.appendChild(restaurantDescription);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startPage);

/***/ }),

/***/ "./src/tab-switching.js":
/*!******************************!*\
  !*** ./src/tab-switching.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabSwitching(content) {
    const tabs = document.createElement("div");

    let home = document.createElement("div");
    let menu = document.createElement("div");
    let contact = document.createElement("div");
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabSwitching);

/***/ }),

/***/ "./src/restaurant-image.jpg":
/*!**********************************!*\
  !*** ./src/restaurant-image.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "822ea866f25463115ed4.jpg";

/***/ })

/******/ 	});
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
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-starter */ "./src/dom-starter.js");
/* harmony import */ var _tab_switching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-switching */ "./src/tab-switching.js");


const content = document.querySelector("#content");
document.body.style.cssText = "font-family: roboto, system-ui; padding: 0; margin: 0;"

;(0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__["default"])(content);
(0,_tab_switching__WEBPACK_IMPORTED_MODULE_1__["default"])(content);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNDQUFzQyw2Q0FBNkMsZUFBZSxpQkFBaUI7QUFDaEssOENBQThDLGlCQUFpQjtBQUMvRCwwQ0FBMEMsa0JBQWtCLHFCQUFxQjtBQUNqRixvRUFBb0Usb0JBQW9CLGlCQUFpQiwwQkFBMEI7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDcEN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O1VDVDNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJzQztBQUNLO0FBQzNDO0FBQ0EsK0RBQStELFlBQVksVUFBVTtBQUNyRjtBQUNBLHlEQUFTO0FBQ1QsMERBQVksVSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb20tc3RhcnRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFiLXN3aXRjaGluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qPGgxIGNsYXNzPVwidGl0bGVcIj5UaGUgRmluZXN0IFJlc3RhdXJhbnQ8L2gxPlxyXG48aW1nIGNsYXNzPVwicmVzdGF1cmFudEZvdG9cIiBzcmM9XCIuLi9zcmMvcmVzdGF1cmFudC1pbWFnZS5qcGdcIiB3aWR0aD1cIjUwMHB4XCI+XHJcbjxwIGNsYXNzPVwicmVzdGF1cmFudERlc2NyaXB0aW9uXCI+TG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEJlYXRhZSBhZGlwaXNjaSBpbnZlbnRvcmUgdmVuaWFtIG5lY2Vzc2l0YXRpYnVzIGZ1Z2lhdCwgZW9zIGVsaWdlbmRpIGEgb2ZmaWNpaXMgbm9uIG1hZ25pIG1vbGVzdGlhZSBpbmNpZHVudCByZW0gaWxsbywgc2FwaWVudGUgbWFpb3JlcyBkb2xvcmVzIG5lcXVlIHBvc3NpbXVzIGV4ZXJjaXRhdGlvbmVtLlxyXG5BdCwgZWEgc2l0IHJlbSBjb21tb2RpLCByZXBlbGxlbmR1cyBjb3Jwb3JpcyBvbW5pcyBtYXhpbWUgZGlnbmlzc2ltb3MgcmVwZWxsYXQgc2VkIGxhYm9ydW0gcXVpcyBpcHNhbSBpcHNhIHV0IHZlbCBwYXJpYXR1ciBlc3QgcXVpZGVtIGhhcnVtIGFkaXBpc2NpIGFjY3VzYW11cyB2b2x1cHRhcz8gT2JjYWVjYXRpIGVhIHZvbHVwdGF0ZSB2ZXJpdGF0aXMgZXQ/XHJcbjwvcD5cclxuKi9cclxuaW1wb3J0IGltbWFnaW5lIGZyb20gXCIuL3Jlc3RhdXJhbnQtaW1hZ2UuanBnXCI7XHJcblxyXG5mdW5jdGlvbiBzdGFydFBhZ2UoY29udGVudCkge1xyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFpblBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluUGFnZVwiKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIlRoZSBGaW5lc3QgUmVzdGF1cmFudFwiO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG5cclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1tYWdpbmU7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudEZvdG9cIik7XHJcblxyXG4gICAgbGV0IHJlc3RhdXJhbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEJlYXRhZSBhZGlwaXNjaSBpbnZlbnRvcmUgdmVuaWFtIG5lY2Vzc2l0YXRpYnVzIGZ1Z2lhdCwgZW9zIGVsaWdlbmRpIGEgb2ZmaWNpaXMgbm9uIG1hZ25pIG1vbGVzdGlhZSBpbmNpZHVudCByZW0gaWxsbywgc2FwaWVudGUgbWFpb3JlcyBkb2xvcmVzIG5lcXVlIHBvc3NpbXVzIGV4ZXJjaXRhdGlvbmVtLiBBdCwgZWEgc2l0IHJlbSBjb21tb2RpLCByZXBlbGxlbmR1cyBjb3Jwb3JpcyBvbW5pcyBtYXhpbWUgZGlnbmlzc2ltb3MgcmVwZWxsYXQgc2VkIGxhYm9ydW0gcXVpcyBpcHNhbSBpcHNhIHV0IHZlbCBwYXJpYXR1ciBlc3QgcXVpZGVtIGhhcnVtIGFkaXBpc2NpIGFjY3VzYW11cyB2b2x1cHRhcz9cIjtcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudERlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgIG1haW5QYWdlLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGU6IDE1MHB4IDUwMHB4IC8gMWZyIDJmcjsgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RpdGxlIHRleHQnICcuIGltYWdlJzsgcGFkZGluZzogMTBweDsgbWFyZ2luLXRvcDogMjBweDtcIjtcclxuICAgIHRpdGxlLnN0eWxlLmNzc1RleHQgPSBcImZvbnQtd2VpZ2h0OiBib2xkOyBncmlkLWFyZWE6IHRpdGxlO1wiO1xyXG4gICAgaW1hZ2Uuc3R5bGUuY3NzVGV4dCA9IFwiaGVpZ2h0OiA1MDBweDsgZ3JpZC1hcmVhOiBpbWFnZTsganVzdGlmeS1zZWxmOiBjZW50ZXI7XCI7XHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOiAxNXB4ICsgMC4xZW07IGZvbnQtc3R5bGU6IGl0YWxpYzsgZ3JpZC1hcmVhOiB0ZXh0OyBwYWRkaW5nOiAxNXB4IDE1cHggMCAxNXB4O1wiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblBhZ2UpO1xyXG5cclxuICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjcmlwdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0UGFnZTsiLCJmdW5jdGlvbiB0YWJTd2l0Y2hpbmcoY29udGVudCkge1xyXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFiU3dpdGNoaW5nOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgc3RhcnRQYWdlIGZyb20gXCIuL2RvbS1zdGFydGVyXCI7XHJcbmltcG9ydCB0YWJTd2l0Y2hpbmcgZnJvbSBcIi4vdGFiLXN3aXRjaGluZ1wiO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmNzc1RleHQgPSBcImZvbnQtZmFtaWx5OiByb2JvdG8sIHN5c3RlbS11aTsgcGFkZGluZzogMDsgbWFyZ2luOiAwO1wiXHJcblxyXG5zdGFydFBhZ2UoY29udGVudCk7XHJcbnRhYlN3aXRjaGluZyhjb250ZW50KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=