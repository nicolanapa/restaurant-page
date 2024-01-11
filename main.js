/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact),
/* harmony export */   contactRemover: () => (/* binding */ contactRemover)
/* harmony export */ });
function contact(content) {
    let contacts = document.createElement("div");
    contacts.setAttribute("div", "menus");
    
    let manager = document.createElement("div");
    let vice = document.createElement("div");
    let waiter = document.createElement("div");
    
    manager.innerText = "Aldo";
    vice.innerText = "Franco"
    waiter.innerText = "Giovabbu";

    content.appendChild(contacts);
    contacts.appendChild(manager);
    contacts.appendChild(vice);
    contacts.appendChild(waiter);
}
function contactRemover(content) {
    content.removeChild(contacts);
}


/***/ }),

/***/ "./src/dom-starter.js":
/*!****************************!*\
  !*** ./src/dom-starter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startPage: () => (/* binding */ startPage),
/* harmony export */   startPageRemover: () => (/* binding */ startPageRemover)
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

    mainPage.style.cssText = "display: grid; grid-template: 150px 500px / 1fr 2fr; grid-template-areas: 'title text' '. image'; padding: 10px; margin-top: -10px;";
    title.style.cssText = "font-weight: bold; grid-area: title;";
    image.style.cssText = "height: 500px; grid-area: image; justify-self: center;";
    restaurantDescription.style.cssText = "font-size: 15px + 0.1em; font-style: italic; grid-area: text; padding: 15px 15px 0 15px;";

    content.appendChild(mainPage);

    mainPage.appendChild(title);
    mainPage.appendChild(image);
    mainPage.appendChild(restaurantDescription);
}
function startPageRemover(content) {
    content.removeChild(mainPage);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu),
/* harmony export */   menuRemover: () => (/* binding */ menuRemover)
/* harmony export */ });
function menu(content) {
    let menus = document.createElement("div");
    menus.setAttribute("div", "menus");
    
    let pizza0 = document.createElement("div");
    let pizza1 = document.createElement("div");
    let pizza2 = document.createElement("div");
    
    pizza0.innerText = "Pizza";
    pizza1.innerText = "Lorem ipsum ipsum lorem, lorem."
    pizza2.innerText = "€5";

    content.appendChild(menus);
    menus.appendChild(pizza0);
    menus.appendChild(pizza1);
    menus.appendChild(pizza2);
}
function menuRemover(content) {
    content.removeChild(menus);
}



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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");



const content = document.querySelector("#content");
document.body.style.cssText = "font-family: roboto, system-ui; padding: 0; margin: 0;"

let clicked = 0;


function tabUpdater() {
    if ( clicked == 1 ) {
        clicked = 1;
        //mainPage.remove();
        //menus.remove();
        (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)(content);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemover)(content);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactRemover)(content);
        (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPage)(content);
    }
    else if ( clicked == 2 ) {
        clicked = 2;
        (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)(content);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemover)(content);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactRemover)(content);
        //content.appendChild(menus);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)(content);
    }
    else if ( clicked == 3 ) {
        clicked = 3;
        (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)(content);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemover)(content);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactRemover)(content);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)(content);
        
    }
    else if ( clicked == 0 ) {
        (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPage)(content);
        clicked = -1;
    }
}

function tabSwitching(content) {
    const tabs = document.createElement("div");

    let home = document.createElement("div");
    let menu = document.createElement("div");
    let contact = document.createElement("div");

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    tabs.style.cssText = "display: flex; justify-content: center; gap: 100px; font-size: 35px; padding: 10px; font-weight: bold;";
    home.style.cssText = "padding: 20px 30px; border: 2px solid black; border-radius: 20px;";
    menu.style.cssText = "padding: 20px 30px; border: 2px solid black; border-radius: 20px;";
    contact.style.cssText = "padding: 20px 30px; border: 2px solid black; border-radius: 20px;";

    content.appendChild(tabs);
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

    home.addEventListener("click", () => {
        if ( clicked == -1 ) {

        }
        else {
            clicked = 1;
            tabUpdater();
        }
        
    });
    menu.addEventListener("click", () => {
        clicked = 2;
        tabUpdater();
    });
    contact.addEventListener("click", () => {
        clicked = 3
        tabUpdater();
    });
}

tabSwitching(content);

tabUpdater();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tLXN0YXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb250YWN0KGNvbnRlbnQpIHtcclxuICAgIGxldCBjb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWN0cy5zZXRBdHRyaWJ1dGUoXCJkaXZcIiwgXCJtZW51c1wiKTtcclxuICAgIFxyXG4gICAgbGV0IG1hbmFnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHZpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHdhaXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBcclxuICAgIG1hbmFnZXIuaW5uZXJUZXh0ID0gXCJBbGRvXCI7XHJcbiAgICB2aWNlLmlubmVyVGV4dCA9IFwiRnJhbmNvXCJcclxuICAgIHdhaXRlci5pbm5lclRleHQgPSBcIkdpb3ZhYmJ1XCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0cyk7XHJcbiAgICBjb250YWN0cy5hcHBlbmRDaGlsZChtYW5hZ2VyKTtcclxuICAgIGNvbnRhY3RzLmFwcGVuZENoaWxkKHZpY2UpO1xyXG4gICAgY29udGFjdHMuYXBwZW5kQ2hpbGQod2FpdGVyKTtcclxufVxyXG5mdW5jdGlvbiBjb250YWN0UmVtb3Zlcihjb250ZW50KSB7XHJcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRhY3RzKTtcclxufVxyXG5leHBvcnQgeyBjb250YWN0LCBjb250YWN0UmVtb3ZlciB9OyIsIi8qPGgxIGNsYXNzPVwidGl0bGVcIj5UaGUgRmluZXN0IFJlc3RhdXJhbnQ8L2gxPlxyXG48aW1nIGNsYXNzPVwicmVzdGF1cmFudEZvdG9cIiBzcmM9XCIuLi9zcmMvcmVzdGF1cmFudC1pbWFnZS5qcGdcIiB3aWR0aD1cIjUwMHB4XCI+XHJcbjxwIGNsYXNzPVwicmVzdGF1cmFudERlc2NyaXB0aW9uXCI+TG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEJlYXRhZSBhZGlwaXNjaSBpbnZlbnRvcmUgdmVuaWFtIG5lY2Vzc2l0YXRpYnVzIGZ1Z2lhdCwgZW9zIGVsaWdlbmRpIGEgb2ZmaWNpaXMgbm9uIG1hZ25pIG1vbGVzdGlhZSBpbmNpZHVudCByZW0gaWxsbywgc2FwaWVudGUgbWFpb3JlcyBkb2xvcmVzIG5lcXVlIHBvc3NpbXVzIGV4ZXJjaXRhdGlvbmVtLlxyXG5BdCwgZWEgc2l0IHJlbSBjb21tb2RpLCByZXBlbGxlbmR1cyBjb3Jwb3JpcyBvbW5pcyBtYXhpbWUgZGlnbmlzc2ltb3MgcmVwZWxsYXQgc2VkIGxhYm9ydW0gcXVpcyBpcHNhbSBpcHNhIHV0IHZlbCBwYXJpYXR1ciBlc3QgcXVpZGVtIGhhcnVtIGFkaXBpc2NpIGFjY3VzYW11cyB2b2x1cHRhcz8gT2JjYWVjYXRpIGVhIHZvbHVwdGF0ZSB2ZXJpdGF0aXMgZXQ/XHJcbjwvcD5cclxuKi9cclxuaW1wb3J0IGltbWFnaW5lIGZyb20gXCIuL3Jlc3RhdXJhbnQtaW1hZ2UuanBnXCI7XHJcblxyXG5mdW5jdGlvbiBzdGFydFBhZ2UoY29udGVudCkge1xyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFpblBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluUGFnZVwiKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIlRoZSBGaW5lc3QgUmVzdGF1cmFudFwiO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG5cclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1tYWdpbmU7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudEZvdG9cIik7XHJcblxyXG4gICAgbGV0IHJlc3RhdXJhbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEJlYXRhZSBhZGlwaXNjaSBpbnZlbnRvcmUgdmVuaWFtIG5lY2Vzc2l0YXRpYnVzIGZ1Z2lhdCwgZW9zIGVsaWdlbmRpIGEgb2ZmaWNpaXMgbm9uIG1hZ25pIG1vbGVzdGlhZSBpbmNpZHVudCByZW0gaWxsbywgc2FwaWVudGUgbWFpb3JlcyBkb2xvcmVzIG5lcXVlIHBvc3NpbXVzIGV4ZXJjaXRhdGlvbmVtLiBBdCwgZWEgc2l0IHJlbSBjb21tb2RpLCByZXBlbGxlbmR1cyBjb3Jwb3JpcyBvbW5pcyBtYXhpbWUgZGlnbmlzc2ltb3MgcmVwZWxsYXQgc2VkIGxhYm9ydW0gcXVpcyBpcHNhbSBpcHNhIHV0IHZlbCBwYXJpYXR1ciBlc3QgcXVpZGVtIGhhcnVtIGFkaXBpc2NpIGFjY3VzYW11cyB2b2x1cHRhcz9cIjtcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudERlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgIG1haW5QYWdlLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGU6IDE1MHB4IDUwMHB4IC8gMWZyIDJmcjsgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RpdGxlIHRleHQnICcuIGltYWdlJzsgcGFkZGluZzogMTBweDsgbWFyZ2luLXRvcDogLTEwcHg7XCI7XHJcbiAgICB0aXRsZS5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXdlaWdodDogYm9sZDsgZ3JpZC1hcmVhOiB0aXRsZTtcIjtcclxuICAgIGltYWdlLnN0eWxlLmNzc1RleHQgPSBcImhlaWdodDogNTAwcHg7IGdyaWQtYXJlYTogaW1hZ2U7IGp1c3RpZnktc2VsZjogY2VudGVyO1wiO1xyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLnN0eWxlLmNzc1RleHQgPSBcImZvbnQtc2l6ZTogMTVweCArIDAuMWVtOyBmb250LXN0eWxlOiBpdGFsaWM7IGdyaWQtYXJlYTogdGV4dDsgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcIjtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5QYWdlKTtcclxuXHJcbiAgICBtYWluUGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBtYWluUGFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICBtYWluUGFnZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb24pO1xyXG59XHJcbmZ1bmN0aW9uIHN0YXJ0UGFnZVJlbW92ZXIoY29udGVudCkge1xyXG4gICAgY29udGVudC5yZW1vdmVDaGlsZChtYWluUGFnZSk7XHJcbn1cclxuZXhwb3J0IHsgc3RhcnRQYWdlLCBzdGFydFBhZ2VSZW1vdmVyIH07IiwiZnVuY3Rpb24gbWVudShjb250ZW50KSB7XHJcbiAgICBsZXQgbWVudXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVudXMuc2V0QXR0cmlidXRlKFwiZGl2XCIsIFwibWVudXNcIik7XHJcbiAgICBcclxuICAgIGxldCBwaXp6YTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHBpenphMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgcGl6emEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgcGl6emEwLmlubmVyVGV4dCA9IFwiUGl6emFcIjtcclxuICAgIHBpenphMS5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGlwc3VtIGxvcmVtLCBsb3JlbS5cIlxyXG4gICAgcGl6emEyLmlubmVyVGV4dCA9IFwi4oKsNVwiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudXMpO1xyXG4gICAgbWVudXMuYXBwZW5kQ2hpbGQocGl6emEwKTtcclxuICAgIG1lbnVzLmFwcGVuZENoaWxkKHBpenphMSk7XHJcbiAgICBtZW51cy5hcHBlbmRDaGlsZChwaXp6YTIpO1xyXG59XHJcbmZ1bmN0aW9uIG1lbnVSZW1vdmVyKGNvbnRlbnQpIHtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobWVudXMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBtZW51LCBtZW51UmVtb3ZlciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBzdGFydFBhZ2UsIHN0YXJ0UGFnZVJlbW92ZXIgfSBmcm9tIFwiLi9kb20tc3RhcnRlclwiO1xyXG5pbXBvcnQgeyBtZW51LCBtZW51UmVtb3ZlciB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHtjb250YWN0LCBjb250YWN0UmVtb3ZlciB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuZG9jdW1lbnQuYm9keS5zdHlsZS5jc3NUZXh0ID0gXCJmb250LWZhbWlseTogcm9ib3RvLCBzeXN0ZW0tdWk7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDtcIlxyXG5cclxubGV0IGNsaWNrZWQgPSAwO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRhYlVwZGF0ZXIoKSB7XHJcbiAgICBpZiAoIGNsaWNrZWQgPT0gMSApIHtcclxuICAgICAgICBjbGlja2VkID0gMTtcclxuICAgICAgICAvL21haW5QYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vbWVudXMucmVtb3ZlKCk7XHJcbiAgICAgICAgc3RhcnRQYWdlUmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBtZW51UmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBjb250YWN0UmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBzdGFydFBhZ2UoY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAyICkge1xyXG4gICAgICAgIGNsaWNrZWQgPSAyO1xyXG4gICAgICAgIHN0YXJ0UGFnZVJlbW92ZXIoY29udGVudCk7XHJcbiAgICAgICAgbWVudVJlbW92ZXIoY29udGVudCk7XHJcbiAgICAgICAgY29udGFjdFJlbW92ZXIoY29udGVudCk7XHJcbiAgICAgICAgLy9jb250ZW50LmFwcGVuZENoaWxkKG1lbnVzKTtcclxuICAgICAgICBtZW51KGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIGNsaWNrZWQgPT0gMyApIHtcclxuICAgICAgICBjbGlja2VkID0gMztcclxuICAgICAgICBzdGFydFBhZ2VSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIG1lbnVSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRhY3RSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRhY3QoY29udGVudCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAwICkge1xyXG4gICAgICAgIHN0YXJ0UGFnZShjb250ZW50KTtcclxuICAgICAgICBjbGlja2VkID0gLTE7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhYlN3aXRjaGluZyhjb250ZW50KSB7XHJcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICAgIHRhYnMuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogMTAwcHg7IGZvbnQtc2l6ZTogMzVweDsgcGFkZGluZzogMTBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI7XHJcbiAgICBob21lLnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDIwcHggMzBweDsgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI7XHJcbiAgICBtZW51LnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDIwcHggMzBweDsgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI7XHJcbiAgICBjb250YWN0LnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDIwcHggMzBweDsgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJzKTtcclxuICAgIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgICB0YWJzLmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgdGFicy5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuXHJcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBjbGlja2VkID09IC0xICkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAxO1xyXG4gICAgICAgICAgICB0YWJVcGRhdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY2xpY2tlZCA9IDI7XHJcbiAgICAgICAgdGFiVXBkYXRlcigpO1xyXG4gICAgfSk7XHJcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY2xpY2tlZCA9IDNcclxuICAgICAgICB0YWJVcGRhdGVyKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxudGFiU3dpdGNoaW5nKGNvbnRlbnQpO1xyXG5cclxudGFiVXBkYXRlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==