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
function contactRemover() {
    contacts.innerHTML = "";
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
function startPageRemover() {
    mainPage.innerHTML = "";
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
function menuRemover() {
    menus.innerHTML = "";
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
    /*if ( clicked == 1 ) {
        clicked = 11;
        //mainPage.remove();
        //menus.remove();
        //startPage(content);
        menuRemover(content);
        contactRemover(content);
        startPage(content);
    }
    else if ( clicked == 2 ) {
        clicked = 22;
        //menu(content);
        startPageRemover(content);
        contactRemover(content);
        //content.appendChild(menus);
        menu(content);
    }
    else if ( clicked == 3 ) {
        clicked = 33;
        //contact(content);
        startPageRemover(content);
        menuRemover(content);
        contact(content);
        
    }*/
    //else if ( clicked == 0 ) {
        (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPage)(content);
        clicked = 11;
    //}
}

function tabSwitching(content) {
    const tabs = document.createElement("div");

    let homeTab = document.createElement("div");
    let menuTab = document.createElement("div");
    let contactTab = document.createElement("div");

    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";

    tabs.style.cssText = "display: flex; justify-content: center; gap: 100px; font-size: 35px; padding: 10px; font-weight: bold;";
    homeTab.style.cssText = "padding: 20px 30px; border: 2px solid black; border-radius: 20px;";
    menuTab.style.cssText = "padding: 20px 30px; border: 2px solid black; border-radius: 20px;";
    contactTab.style.cssText = "padding: 20px 30px; border: 2px solid black; border-radius: 20px;";

    content.appendChild(tabs);
    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);

    homeTab.addEventListener("click", () => {
        if ( clicked == 11 ) {
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)();(0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemover)();contactRemoverRemover();
            clicked = 11;
        }
        else if ( clicked == 22 ) {
            clicked = 22;
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemover)();
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPage)(content);
        }
        else if ( clicked == 33) {
            clicked = 33;
            (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactRemover)();
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPage)(content);
        }
        /*else {
            clicked = 1;
            tabUpdater();
        }*/
    });
    menuTab.addEventListener("click", () => {
        /*if ( clicked == 22) {

        }
        else if ( clicked == 11) {

        }
        else {
            clicked = 2;
            tabUpdater();
        }*/
        if ( clicked == 11 ) {
            clicked = 11;
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)();
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)(content);
        }
        else if ( clicked == 22 ) {
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)();(0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactRemover)();(0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemover)();
            clicked = 22;
        }
        else if ( clicked == 33) {
            clicked = 33;
            (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactRemover)();
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)(content);
        }
        /*else {
            clicked = 2;
            tabUpdater();
        }*/
    });
    contactTab.addEventListener("click", () => {
        if ( clicked == 11 ) {
            clicked = 11;
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)();
            (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)(content);
        }
        else if ( clicked == 22 ) {
            clicked = 22;
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemover)();
            (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)(content);
        }
        else if ( clicked == 33) {
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)();(0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemover)();(0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactRemover)();
            clicked = 33;
        }
        /*else {
            clicked = 3;
            tabUpdater();
        }*/
    });
}

tabSwitching(content);

tabUpdater();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNDQUFzQyw2Q0FBNkMsZUFBZSxrQkFBa0I7QUFDakssOENBQThDLGlCQUFpQjtBQUMvRCwwQ0FBMEMsa0JBQWtCLHFCQUFxQjtBQUNqRixvRUFBb0Usb0JBQW9CLGlCQUFpQiwwQkFBMEI7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQjREO0FBQ2pCO0FBQ1E7QUFDbkQ7QUFDQSwrREFBK0QsWUFBWSxVQUFVO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxRQUFRLHVEQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx5QkFBeUIsWUFBWSxpQkFBaUIsZUFBZSxrQkFBa0I7QUFDaEksaURBQWlELHlCQUF5QixvQkFBb0I7QUFDOUYsaURBQWlELHlCQUF5QixvQkFBb0I7QUFDOUYsb0RBQW9ELHlCQUF5QixvQkFBb0I7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQWdCLEdBQUcsa0RBQVcsR0FBRztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVc7QUFDdkIsWUFBWSx1REFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjO0FBQzFCLFlBQVksdURBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxZQUFZLDhEQUFnQjtBQUM1QixZQUFZLDJDQUFJO0FBQ2hCO0FBQ0E7QUFDQSxZQUFZLDhEQUFnQixHQUFHLHdEQUFjLEdBQUcsa0RBQVc7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFjO0FBQzFCLFlBQVksMkNBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQWdCO0FBQzVCLFlBQVksaURBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBVztBQUN2QixZQUFZLGlEQUFPO0FBQ25CO0FBQ0E7QUFDQSxZQUFZLDhEQUFnQixHQUFHLGtEQUFXLEdBQUcsd0RBQWM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbS1zdGFydGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdChjb250ZW50KSB7XHJcbiAgICBsZXQgY29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdHMuc2V0QXR0cmlidXRlKFwiZGl2XCIsIFwibWVudXNcIik7XHJcbiAgICBcclxuICAgIGxldCBtYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB2aWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB3YWl0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgXHJcbiAgICBtYW5hZ2VyLmlubmVyVGV4dCA9IFwiQWxkb1wiO1xyXG4gICAgdmljZS5pbm5lclRleHQgPSBcIkZyYW5jb1wiXHJcbiAgICB3YWl0ZXIuaW5uZXJUZXh0ID0gXCJHaW92YWJidVwiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdHMpO1xyXG4gICAgY29udGFjdHMuYXBwZW5kQ2hpbGQobWFuYWdlcik7XHJcbiAgICBjb250YWN0cy5hcHBlbmRDaGlsZCh2aWNlKTtcclxuICAgIGNvbnRhY3RzLmFwcGVuZENoaWxkKHdhaXRlcik7XHJcbn1cclxuZnVuY3Rpb24gY29udGFjdFJlbW92ZXIoKSB7XHJcbiAgICBjb250YWN0cy5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcbmV4cG9ydCB7IGNvbnRhY3QsIGNvbnRhY3RSZW1vdmVyIH07IiwiLyo8aDEgY2xhc3M9XCJ0aXRsZVwiPlRoZSBGaW5lc3QgUmVzdGF1cmFudDwvaDE+XHJcbjxpbWcgY2xhc3M9XCJyZXN0YXVyYW50Rm90b1wiIHNyYz1cIi4uL3NyYy9yZXN0YXVyYW50LWltYWdlLmpwZ1wiIHdpZHRoPVwiNTAwcHhcIj5cclxuPHAgY2xhc3M9XCJyZXN0YXVyYW50RGVzY3JpcHRpb25cIj5Mb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQmVhdGFlIGFkaXBpc2NpIGludmVudG9yZSB2ZW5pYW0gbmVjZXNzaXRhdGlidXMgZnVnaWF0LCBlb3MgZWxpZ2VuZGkgYSBvZmZpY2lpcyBub24gbWFnbmkgbW9sZXN0aWFlIGluY2lkdW50IHJlbSBpbGxvLCBzYXBpZW50ZSBtYWlvcmVzIGRvbG9yZXMgbmVxdWUgcG9zc2ltdXMgZXhlcmNpdGF0aW9uZW0uXHJcbkF0LCBlYSBzaXQgcmVtIGNvbW1vZGksIHJlcGVsbGVuZHVzIGNvcnBvcmlzIG9tbmlzIG1heGltZSBkaWduaXNzaW1vcyByZXBlbGxhdCBzZWQgbGFib3J1bSBxdWlzIGlwc2FtIGlwc2EgdXQgdmVsIHBhcmlhdHVyIGVzdCBxdWlkZW0gaGFydW0gYWRpcGlzY2kgYWNjdXNhbXVzIHZvbHVwdGFzPyBPYmNhZWNhdGkgZWEgdm9sdXB0YXRlIHZlcml0YXRpcyBldD9cclxuPC9wPlxyXG4qL1xyXG5pbXBvcnQgaW1tYWdpbmUgZnJvbSBcIi4vcmVzdGF1cmFudC1pbWFnZS5qcGdcIjtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0UGFnZShjb250ZW50KSB7XHJcbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYWluUGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5QYWdlXCIpO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiVGhlIEZpbmVzdCBSZXN0YXVyYW50XCI7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcblxyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5zcmMgPSBpbW1hZ2luZTtcclxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50Rm90b1wiKTtcclxuXHJcbiAgICBsZXQgcmVzdGF1cmFudERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQmVhdGFlIGFkaXBpc2NpIGludmVudG9yZSB2ZW5pYW0gbmVjZXNzaXRhdGlidXMgZnVnaWF0LCBlb3MgZWxpZ2VuZGkgYSBvZmZpY2lpcyBub24gbWFnbmkgbW9sZXN0aWFlIGluY2lkdW50IHJlbSBpbGxvLCBzYXBpZW50ZSBtYWlvcmVzIGRvbG9yZXMgbmVxdWUgcG9zc2ltdXMgZXhlcmNpdGF0aW9uZW0uIEF0LCBlYSBzaXQgcmVtIGNvbW1vZGksIHJlcGVsbGVuZHVzIGNvcnBvcmlzIG9tbmlzIG1heGltZSBkaWduaXNzaW1vcyByZXBlbGxhdCBzZWQgbGFib3J1bSBxdWlzIGlwc2FtIGlwc2EgdXQgdmVsIHBhcmlhdHVyIGVzdCBxdWlkZW0gaGFydW0gYWRpcGlzY2kgYWNjdXNhbXVzIHZvbHVwdGFzP1wiO1xyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50RGVzY3JpcHRpb25cIik7XHJcblxyXG4gICAgbWFpblBhZ2Uuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZTogMTUwcHggNTAwcHggLyAxZnIgMmZyOyBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUgdGV4dCcgJy4gaW1hZ2UnOyBwYWRkaW5nOiAxMHB4OyBtYXJnaW4tdG9wOiAtMTBweDtcIjtcclxuICAgIHRpdGxlLnN0eWxlLmNzc1RleHQgPSBcImZvbnQtd2VpZ2h0OiBib2xkOyBncmlkLWFyZWE6IHRpdGxlO1wiO1xyXG4gICAgaW1hZ2Uuc3R5bGUuY3NzVGV4dCA9IFwiaGVpZ2h0OiA1MDBweDsgZ3JpZC1hcmVhOiBpbWFnZTsganVzdGlmeS1zZWxmOiBjZW50ZXI7XCI7XHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOiAxNXB4ICsgMC4xZW07IGZvbnQtc3R5bGU6IGl0YWxpYzsgZ3JpZC1hcmVhOiB0ZXh0OyBwYWRkaW5nOiAxNXB4IDE1cHggMCAxNXB4O1wiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblBhZ2UpO1xyXG5cclxuICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjcmlwdGlvbik7XHJcbn1cclxuZnVuY3Rpb24gc3RhcnRQYWdlUmVtb3ZlcigpIHtcclxuICAgIG1haW5QYWdlLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuZXhwb3J0IHsgc3RhcnRQYWdlLCBzdGFydFBhZ2VSZW1vdmVyIH07IiwiZnVuY3Rpb24gbWVudShjb250ZW50KSB7XHJcbiAgICBsZXQgbWVudXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVudXMuc2V0QXR0cmlidXRlKFwiZGl2XCIsIFwibWVudXNcIik7XHJcbiAgICBcclxuICAgIGxldCBwaXp6YTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHBpenphMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgcGl6emEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgcGl6emEwLmlubmVyVGV4dCA9IFwiUGl6emFcIjtcclxuICAgIHBpenphMS5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGlwc3VtIGxvcmVtLCBsb3JlbS5cIlxyXG4gICAgcGl6emEyLmlubmVyVGV4dCA9IFwi4oKsNVwiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudXMpO1xyXG4gICAgbWVudXMuYXBwZW5kQ2hpbGQocGl6emEwKTtcclxuICAgIG1lbnVzLmFwcGVuZENoaWxkKHBpenphMSk7XHJcbiAgICBtZW51cy5hcHBlbmRDaGlsZChwaXp6YTIpO1xyXG59XHJcbmZ1bmN0aW9uIG1lbnVSZW1vdmVyKCkge1xyXG4gICAgbWVudXMuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IHsgbWVudSwgbWVudVJlbW92ZXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgc3RhcnRQYWdlLCBzdGFydFBhZ2VSZW1vdmVyIH0gZnJvbSBcIi4vZG9tLXN0YXJ0ZXJcIjtcclxuaW1wb3J0IHsgbWVudSwgbWVudVJlbW92ZXIgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7Y29udGFjdCwgY29udGFjdFJlbW92ZXIgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbmRvY3VtZW50LmJvZHkuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1mYW1pbHk6IHJvYm90bywgc3lzdGVtLXVpOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7XCJcclxuXHJcbmxldCBjbGlja2VkID0gMDtcclxuXHJcblxyXG5mdW5jdGlvbiB0YWJVcGRhdGVyKCkge1xyXG4gICAgLyppZiAoIGNsaWNrZWQgPT0gMSApIHtcclxuICAgICAgICBjbGlja2VkID0gMTE7XHJcbiAgICAgICAgLy9tYWluUGFnZS5yZW1vdmUoKTtcclxuICAgICAgICAvL21lbnVzLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vc3RhcnRQYWdlKGNvbnRlbnQpO1xyXG4gICAgICAgIG1lbnVSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRhY3RSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIHN0YXJ0UGFnZShjb250ZW50KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDIgKSB7XHJcbiAgICAgICAgY2xpY2tlZCA9IDIyO1xyXG4gICAgICAgIC8vbWVudShjb250ZW50KTtcclxuICAgICAgICBzdGFydFBhZ2VSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRhY3RSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIC8vY29udGVudC5hcHBlbmRDaGlsZChtZW51cyk7XHJcbiAgICAgICAgbWVudShjb250ZW50KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDMgKSB7XHJcbiAgICAgICAgY2xpY2tlZCA9IDMzO1xyXG4gICAgICAgIC8vY29udGFjdChjb250ZW50KTtcclxuICAgICAgICBzdGFydFBhZ2VSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIG1lbnVSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRhY3QoY29udGVudCk7XHJcbiAgICAgICAgXHJcbiAgICB9Ki9cclxuICAgIC8vZWxzZSBpZiAoIGNsaWNrZWQgPT0gMCApIHtcclxuICAgICAgICBzdGFydFBhZ2UoY29udGVudCk7XHJcbiAgICAgICAgY2xpY2tlZCA9IDExO1xyXG4gICAgLy99XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhYlN3aXRjaGluZyhjb250ZW50KSB7XHJcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBsZXQgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgaG9tZVRhYi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgbWVudVRhYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgY29udGFjdFRhYi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICAgIHRhYnMuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogMTAwcHg7IGZvbnQtc2l6ZTogMzVweDsgcGFkZGluZzogMTBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI7XHJcbiAgICBob21lVGFiLnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDIwcHggMzBweDsgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI7XHJcbiAgICBtZW51VGFiLnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDIwcHggMzBweDsgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI7XHJcbiAgICBjb250YWN0VGFiLnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDIwcHggMzBweDsgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJzKTtcclxuICAgIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XHJcbiAgICB0YWJzLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xyXG4gICAgdGFicy5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcclxuXHJcbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBjbGlja2VkID09IDExICkge1xyXG4gICAgICAgICAgICBzdGFydFBhZ2VSZW1vdmVyKCk7bWVudVJlbW92ZXIoKTtjb250YWN0UmVtb3ZlclJlbW92ZXIoKTtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDExO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAyMiApIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDIyO1xyXG4gICAgICAgICAgICBtZW51UmVtb3ZlcigpO1xyXG4gICAgICAgICAgICBzdGFydFBhZ2UoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDMzKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAzMztcclxuICAgICAgICAgICAgY29udGFjdFJlbW92ZXIoKTtcclxuICAgICAgICAgICAgc3RhcnRQYWdlKGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKmVsc2Uge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMTtcclxuICAgICAgICAgICAgdGFiVXBkYXRlcigpO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfSk7XHJcbiAgICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLyppZiAoIGNsaWNrZWQgPT0gMjIpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDExKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDI7XHJcbiAgICAgICAgICAgIHRhYlVwZGF0ZXIoKTtcclxuICAgICAgICB9Ki9cclxuICAgICAgICBpZiAoIGNsaWNrZWQgPT0gMTEgKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAxMTtcclxuICAgICAgICAgICAgc3RhcnRQYWdlUmVtb3ZlcigpO1xyXG4gICAgICAgICAgICBtZW51KGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAyMiApIHtcclxuICAgICAgICAgICAgc3RhcnRQYWdlUmVtb3ZlcigpO2NvbnRhY3RSZW1vdmVyKCk7bWVudVJlbW92ZXIoKTtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDIyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAzMykge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMzM7XHJcbiAgICAgICAgICAgIGNvbnRhY3RSZW1vdmVyKCk7XHJcbiAgICAgICAgICAgIG1lbnUoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qZWxzZSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAyO1xyXG4gICAgICAgICAgICB0YWJVcGRhdGVyKCk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9KTtcclxuICAgIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoIGNsaWNrZWQgPT0gMTEgKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAxMTtcclxuICAgICAgICAgICAgc3RhcnRQYWdlUmVtb3ZlcigpO1xyXG4gICAgICAgICAgICBjb250YWN0KGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAyMiApIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDIyO1xyXG4gICAgICAgICAgICBtZW51UmVtb3ZlcigpO1xyXG4gICAgICAgICAgICBjb250YWN0KGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAzMykge1xyXG4gICAgICAgICAgICBzdGFydFBhZ2VSZW1vdmVyKCk7bWVudVJlbW92ZXIoKTtjb250YWN0UmVtb3ZlcigpO1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qZWxzZSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAzO1xyXG4gICAgICAgICAgICB0YWJVcGRhdGVyKCk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9KTtcclxufVxyXG5cclxudGFiU3dpdGNoaW5nKGNvbnRlbnQpO1xyXG5cclxudGFiVXBkYXRlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==