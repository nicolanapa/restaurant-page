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
/* harmony export */   contactAdder: () => (/* binding */ contactAdder),
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
    contacts.remove();
}
function contactAdder(contacts) {
    content.appendChild(contacts);
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
/* harmony export */   startPageAdder: () => (/* binding */ startPageAdder),
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
    mainPage.remove();
}
function startPageAdder() {
    content.appendChild(mainPage);
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
/* harmony export */   menuAdder: () => (/* binding */ menuAdder),
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
    menus.remove();
}
function menuAdder() {
    content.appendChild(menus);
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
        (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageAdder)();
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)(content);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)(content);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactAdder)(contacts);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactRemover)();
        clicked = 11;console.log(clicked);
        
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
            //startPageRemover();menuRemover();contactRemover();
            //startPageAdder();
            clicked = 11;console.log(clicked);
        }
        else if ( clicked == 22 ) {
            clicked = 22;console.log(clicked);
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemover)();
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageAdder)();
        }
        else if ( clicked == 33) {
            clicked = 33;console.log(clicked);
            (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactRemover)();
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageAdder)();
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
            clicked = 11;console.log(clicked);
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)();
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuAdder)();
        }
        else if ( clicked == 22 ) {
            //startPageRemover();contactRemover();menuRemover();
            //menuAdder();
            clicked = 22;console.log(clicked);
        }
        else if ( clicked == 33) {
            clicked = 33;console.log(clicked);
            (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactRemover)();
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuAdder)();
        }
        /*else {
            clicked = 2;
            tabUpdater();
        }*/
    });
    contactTab.addEventListener("click", () => {
        if ( clicked == 11 ) {
            clicked = 11;console.log(clicked);
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)();
            (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactAdder)(contacts);
        }
        else if ( clicked == 22 ) {
            clicked = 22;console.log(clicked);
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemover)();
            (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactAdder)(contacts);
        }
        else if ( clicked == 33) {
            //startPageRemover();menuRemover();contactRemover();
            //contactAdder();
            clicked = 33;console.log(clicked);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNDQUFzQyw2Q0FBNkMsZUFBZSxrQkFBa0I7QUFDakssOENBQThDLGlCQUFpQjtBQUMvRCwwQ0FBMEMsa0JBQWtCLHFCQUFxQjtBQUNqRixvRUFBb0Usb0JBQW9CLGlCQUFpQiwwQkFBMEI7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEI0RTtBQUN0QjtBQUNXO0FBQ2pFO0FBQ0EsK0RBQStELFlBQVksVUFBVTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsUUFBUSx1REFBUztBQUNqQixRQUFRLDREQUFjO0FBQ3RCLFFBQVEsMkNBQUk7QUFDWixRQUFRLGlEQUFPO0FBQ2YsUUFBUSxzREFBWTtBQUNwQixRQUFRLHdEQUFjO0FBQ3RCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseUJBQXlCLFlBQVksaUJBQWlCLGVBQWUsa0JBQWtCO0FBQ2hJLGlEQUFpRCx5QkFBeUIsb0JBQW9CO0FBQzlGLGlEQUFpRCx5QkFBeUIsb0JBQW9CO0FBQzlGLG9EQUFvRCx5QkFBeUIsb0JBQW9CO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLFlBQVksa0RBQVc7QUFDdkIsWUFBWSw0REFBYztBQUMxQjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLFlBQVksd0RBQWM7QUFDMUIsWUFBWSw0REFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx5QkFBeUI7QUFDekIsWUFBWSw4REFBZ0I7QUFDNUIsWUFBWSxnREFBUztBQUNyQjtBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLFlBQVksd0RBQWM7QUFDMUIsWUFBWSxnREFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixZQUFZLDhEQUFnQjtBQUM1QixZQUFZLHNEQUFZO0FBQ3hCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsWUFBWSxrREFBVztBQUN2QixZQUFZLHNEQUFZO0FBQ3hCO0FBQ0E7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbS1zdGFydGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdChjb250ZW50KSB7XHJcbiAgICBsZXQgY29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdHMuc2V0QXR0cmlidXRlKFwiZGl2XCIsIFwibWVudXNcIik7XHJcbiAgICBcclxuICAgIGxldCBtYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB2aWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB3YWl0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgXHJcbiAgICBtYW5hZ2VyLmlubmVyVGV4dCA9IFwiQWxkb1wiO1xyXG4gICAgdmljZS5pbm5lclRleHQgPSBcIkZyYW5jb1wiXHJcbiAgICB3YWl0ZXIuaW5uZXJUZXh0ID0gXCJHaW92YWJidVwiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdHMpO1xyXG4gICAgY29udGFjdHMuYXBwZW5kQ2hpbGQobWFuYWdlcik7XHJcbiAgICBjb250YWN0cy5hcHBlbmRDaGlsZCh2aWNlKTtcclxuICAgIGNvbnRhY3RzLmFwcGVuZENoaWxkKHdhaXRlcik7XHJcbiAgICBcclxufVxyXG5mdW5jdGlvbiBjb250YWN0UmVtb3ZlcigpIHtcclxuICAgIGNvbnRhY3RzLnJlbW92ZSgpO1xyXG59XHJcbmZ1bmN0aW9uIGNvbnRhY3RBZGRlcihjb250YWN0cykge1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbnRhY3QsIGNvbnRhY3RSZW1vdmVyLCBjb250YWN0QWRkZXIgfTsiLCIvKjxoMSBjbGFzcz1cInRpdGxlXCI+VGhlIEZpbmVzdCBSZXN0YXVyYW50PC9oMT5cclxuPGltZyBjbGFzcz1cInJlc3RhdXJhbnRGb3RvXCIgc3JjPVwiLi4vc3JjL3Jlc3RhdXJhbnQtaW1hZ2UuanBnXCIgd2lkdGg9XCI1MDBweFwiPlxyXG48cCBjbGFzcz1cInJlc3RhdXJhbnREZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBCZWF0YWUgYWRpcGlzY2kgaW52ZW50b3JlIHZlbmlhbSBuZWNlc3NpdGF0aWJ1cyBmdWdpYXQsIGVvcyBlbGlnZW5kaSBhIG9mZmljaWlzIG5vbiBtYWduaSBtb2xlc3RpYWUgaW5jaWR1bnQgcmVtIGlsbG8sIHNhcGllbnRlIG1haW9yZXMgZG9sb3JlcyBuZXF1ZSBwb3NzaW11cyBleGVyY2l0YXRpb25lbS5cclxuQXQsIGVhIHNpdCByZW0gY29tbW9kaSwgcmVwZWxsZW5kdXMgY29ycG9yaXMgb21uaXMgbWF4aW1lIGRpZ25pc3NpbW9zIHJlcGVsbGF0IHNlZCBsYWJvcnVtIHF1aXMgaXBzYW0gaXBzYSB1dCB2ZWwgcGFyaWF0dXIgZXN0IHF1aWRlbSBoYXJ1bSBhZGlwaXNjaSBhY2N1c2FtdXMgdm9sdXB0YXM/IE9iY2FlY2F0aSBlYSB2b2x1cHRhdGUgdmVyaXRhdGlzIGV0P1xyXG48L3A+XHJcbiovXHJcbmltcG9ydCBpbW1hZ2luZSBmcm9tIFwiLi9yZXN0YXVyYW50LWltYWdlLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRQYWdlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1haW5QYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblBhZ2VcIik7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJUaGUgRmluZXN0IFJlc3RhdXJhbnRcIjtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuXHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9IGltbWFnaW5lO1xyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnRGb3RvXCIpO1xyXG5cclxuICAgIGxldCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBCZWF0YWUgYWRpcGlzY2kgaW52ZW50b3JlIHZlbmlhbSBuZWNlc3NpdGF0aWJ1cyBmdWdpYXQsIGVvcyBlbGlnZW5kaSBhIG9mZmljaWlzIG5vbiBtYWduaSBtb2xlc3RpYWUgaW5jaWR1bnQgcmVtIGlsbG8sIHNhcGllbnRlIG1haW9yZXMgZG9sb3JlcyBuZXF1ZSBwb3NzaW11cyBleGVyY2l0YXRpb25lbS4gQXQsIGVhIHNpdCByZW0gY29tbW9kaSwgcmVwZWxsZW5kdXMgY29ycG9yaXMgb21uaXMgbWF4aW1lIGRpZ25pc3NpbW9zIHJlcGVsbGF0IHNlZCBsYWJvcnVtIHF1aXMgaXBzYW0gaXBzYSB1dCB2ZWwgcGFyaWF0dXIgZXN0IHF1aWRlbSBoYXJ1bSBhZGlwaXNjaSBhY2N1c2FtdXMgdm9sdXB0YXM/XCI7XHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnREZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgICBtYWluUGFnZS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlOiAxNTBweCA1MDBweCAvIDFmciAyZnI7IGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0aXRsZSB0ZXh0JyAnLiBpbWFnZSc7IHBhZGRpbmc6IDEwcHg7IG1hcmdpbi10b3A6IC0xMHB4O1wiO1xyXG4gICAgdGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGdyaWQtYXJlYTogdGl0bGU7XCI7XHJcbiAgICBpbWFnZS5zdHlsZS5jc3NUZXh0ID0gXCJoZWlnaHQ6IDUwMHB4OyBncmlkLWFyZWE6IGltYWdlOyBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcIjtcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXNpemU6IDE1cHggKyAwLjFlbTsgZm9udC1zdHlsZTogaXRhbGljOyBncmlkLWFyZWE6IHRleHQ7IHBhZGRpbmc6IDE1cHggMTVweCAwIDE1cHg7XCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluUGFnZSk7XHJcblxyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQocmVzdGF1cmFudERlc2NyaXB0aW9uKTtcclxufVxyXG5mdW5jdGlvbiBzdGFydFBhZ2VSZW1vdmVyKCkge1xyXG4gICAgbWFpblBhZ2UucmVtb3ZlKCk7XHJcbn1cclxuZnVuY3Rpb24gc3RhcnRQYWdlQWRkZXIoKSB7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5QYWdlKTtcclxufVxyXG5leHBvcnQgeyBzdGFydFBhZ2UsIHN0YXJ0UGFnZVJlbW92ZXIsIHN0YXJ0UGFnZUFkZGVyIH07IiwiZnVuY3Rpb24gbWVudShjb250ZW50KSB7XHJcbiAgICBsZXQgbWVudXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVudXMuc2V0QXR0cmlidXRlKFwiZGl2XCIsIFwibWVudXNcIik7XHJcbiAgICBcclxuICAgIGxldCBwaXp6YTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHBpenphMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgcGl6emEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgcGl6emEwLmlubmVyVGV4dCA9IFwiUGl6emFcIjtcclxuICAgIHBpenphMS5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGlwc3VtIGxvcmVtLCBsb3JlbS5cIlxyXG4gICAgcGl6emEyLmlubmVyVGV4dCA9IFwi4oKsNVwiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudXMpO1xyXG4gICAgbWVudXMuYXBwZW5kQ2hpbGQocGl6emEwKTtcclxuICAgIG1lbnVzLmFwcGVuZENoaWxkKHBpenphMSk7XHJcbiAgICBtZW51cy5hcHBlbmRDaGlsZChwaXp6YTIpO1xyXG59XHJcbmZ1bmN0aW9uIG1lbnVSZW1vdmVyKCkge1xyXG4gICAgbWVudXMucmVtb3ZlKCk7XHJcbn1cclxuZnVuY3Rpb24gbWVudUFkZGVyKCkge1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51cyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG1lbnUsIG1lbnVSZW1vdmVyLCBtZW51QWRkZXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgc3RhcnRQYWdlLCBzdGFydFBhZ2VSZW1vdmVyLCBzdGFydFBhZ2VBZGRlciB9IGZyb20gXCIuL2RvbS1zdGFydGVyXCI7XHJcbmltcG9ydCB7IG1lbnUsIG1lbnVSZW1vdmVyLCBtZW51QWRkZXIgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7Y29udGFjdCwgY29udGFjdFJlbW92ZXIsIGNvbnRhY3RBZGRlciB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuZG9jdW1lbnQuYm9keS5zdHlsZS5jc3NUZXh0ID0gXCJmb250LWZhbWlseTogcm9ib3RvLCBzeXN0ZW0tdWk7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDtcIlxyXG5cclxubGV0IGNsaWNrZWQgPSAwO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRhYlVwZGF0ZXIoKSB7XHJcbiAgICAvKmlmICggY2xpY2tlZCA9PSAxICkge1xyXG4gICAgICAgIGNsaWNrZWQgPSAxMTtcclxuICAgICAgICAvL21haW5QYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vbWVudXMucmVtb3ZlKCk7XHJcbiAgICAgICAgLy9zdGFydFBhZ2UoY29udGVudCk7XHJcbiAgICAgICAgbWVudVJlbW92ZXIoY29udGVudCk7XHJcbiAgICAgICAgY29udGFjdFJlbW92ZXIoY29udGVudCk7XHJcbiAgICAgICAgc3RhcnRQYWdlKGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIGNsaWNrZWQgPT0gMiApIHtcclxuICAgICAgICBjbGlja2VkID0gMjI7XHJcbiAgICAgICAgLy9tZW51KGNvbnRlbnQpO1xyXG4gICAgICAgIHN0YXJ0UGFnZVJlbW92ZXIoY29udGVudCk7XHJcbiAgICAgICAgY29udGFjdFJlbW92ZXIoY29udGVudCk7XHJcbiAgICAgICAgLy9jb250ZW50LmFwcGVuZENoaWxkKG1lbnVzKTtcclxuICAgICAgICBtZW51KGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIGNsaWNrZWQgPT0gMyApIHtcclxuICAgICAgICBjbGlja2VkID0gMzM7XHJcbiAgICAgICAgLy9jb250YWN0KGNvbnRlbnQpO1xyXG4gICAgICAgIHN0YXJ0UGFnZVJlbW92ZXIoY29udGVudCk7XHJcbiAgICAgICAgbWVudVJlbW92ZXIoY29udGVudCk7XHJcbiAgICAgICAgY29udGFjdChjb250ZW50KTtcclxuICAgICAgICBcclxuICAgIH0qL1xyXG4gICAgLy9lbHNlIGlmICggY2xpY2tlZCA9PSAwICkge1xyXG4gICAgICAgIHN0YXJ0UGFnZShjb250ZW50KTtcclxuICAgICAgICBzdGFydFBhZ2VBZGRlcigpO1xyXG4gICAgICAgIG1lbnUoY29udGVudCk7XHJcbiAgICAgICAgY29udGFjdChjb250ZW50KTtcclxuICAgICAgICBjb250YWN0QWRkZXIoY29udGFjdHMpO1xyXG4gICAgICAgIGNvbnRhY3RSZW1vdmVyKCk7XHJcbiAgICAgICAgY2xpY2tlZCA9IDExO2NvbnNvbGUubG9nKGNsaWNrZWQpO1xyXG4gICAgICAgIFxyXG4gICAgLy99XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhYlN3aXRjaGluZyhjb250ZW50KSB7XHJcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBsZXQgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgaG9tZVRhYi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgbWVudVRhYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgY29udGFjdFRhYi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICAgIHRhYnMuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogMTAwcHg7IGZvbnQtc2l6ZTogMzVweDsgcGFkZGluZzogMTBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI7XHJcbiAgICBob21lVGFiLnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDIwcHggMzBweDsgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI7XHJcbiAgICBtZW51VGFiLnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDIwcHggMzBweDsgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI7XHJcbiAgICBjb250YWN0VGFiLnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDIwcHggMzBweDsgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJzKTtcclxuICAgIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XHJcbiAgICB0YWJzLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xyXG4gICAgdGFicy5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcclxuXHJcbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBjbGlja2VkID09IDExICkge1xyXG4gICAgICAgICAgICAvL3N0YXJ0UGFnZVJlbW92ZXIoKTttZW51UmVtb3ZlcigpO2NvbnRhY3RSZW1vdmVyKCk7XHJcbiAgICAgICAgICAgIC8vc3RhcnRQYWdlQWRkZXIoKTtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDExO2NvbnNvbGUubG9nKGNsaWNrZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAyMiApIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDIyO2NvbnNvbGUubG9nKGNsaWNrZWQpO1xyXG4gICAgICAgICAgICBtZW51UmVtb3ZlcigpO1xyXG4gICAgICAgICAgICBzdGFydFBhZ2VBZGRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAzMykge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMzM7Y29uc29sZS5sb2coY2xpY2tlZCk7XHJcbiAgICAgICAgICAgIGNvbnRhY3RSZW1vdmVyKCk7XHJcbiAgICAgICAgICAgIHN0YXJ0UGFnZUFkZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qZWxzZSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAxO1xyXG4gICAgICAgICAgICB0YWJVcGRhdGVyKCk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9KTtcclxuICAgIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvKmlmICggY2xpY2tlZCA9PSAyMikge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIGNsaWNrZWQgPT0gMTEpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMjtcclxuICAgICAgICAgICAgdGFiVXBkYXRlcigpO1xyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIGlmICggY2xpY2tlZCA9PSAxMSApIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDExO2NvbnNvbGUubG9nKGNsaWNrZWQpO1xyXG4gICAgICAgICAgICBzdGFydFBhZ2VSZW1vdmVyKCk7XHJcbiAgICAgICAgICAgIG1lbnVBZGRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAyMiApIHtcclxuICAgICAgICAgICAgLy9zdGFydFBhZ2VSZW1vdmVyKCk7Y29udGFjdFJlbW92ZXIoKTttZW51UmVtb3ZlcigpO1xyXG4gICAgICAgICAgICAvL21lbnVBZGRlcigpO1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMjI7Y29uc29sZS5sb2coY2xpY2tlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDMzKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAzMztjb25zb2xlLmxvZyhjbGlja2VkKTtcclxuICAgICAgICAgICAgY29udGFjdFJlbW92ZXIoKTtcclxuICAgICAgICAgICAgbWVudUFkZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qZWxzZSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAyO1xyXG4gICAgICAgICAgICB0YWJVcGRhdGVyKCk7XHJcbiAgICAgICAgfSovXHJcbiAgICB9KTtcclxuICAgIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoIGNsaWNrZWQgPT0gMTEgKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAxMTtjb25zb2xlLmxvZyhjbGlja2VkKTtcclxuICAgICAgICAgICAgc3RhcnRQYWdlUmVtb3ZlcigpO1xyXG4gICAgICAgICAgICBjb250YWN0QWRkZXIoY29udGFjdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAyMiApIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDIyO2NvbnNvbGUubG9nKGNsaWNrZWQpO1xyXG4gICAgICAgICAgICBtZW51UmVtb3ZlcigpO1xyXG4gICAgICAgICAgICBjb250YWN0QWRkZXIoY29udGFjdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAzMykge1xyXG4gICAgICAgICAgICAvL3N0YXJ0UGFnZVJlbW92ZXIoKTttZW51UmVtb3ZlcigpO2NvbnRhY3RSZW1vdmVyKCk7XHJcbiAgICAgICAgICAgIC8vY29udGFjdEFkZGVyKCk7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAzMztjb25zb2xlLmxvZyhjbGlja2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyplbHNlIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDM7XHJcbiAgICAgICAgICAgIHRhYlVwZGF0ZXIoKTtcclxuICAgICAgICB9Ki9cclxuICAgIH0pO1xyXG59XHJcblxyXG50YWJTd2l0Y2hpbmcoY29udGVudCk7XHJcblxyXG50YWJVcGRhdGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9