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
    contact.remove();
}
function contactAdder(contact) {
    content.appendChild(contact);
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
    startPage.remove();
}
function startPageAdder() {
    content.appendChild(startPage());
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
    menu.remove();
}
function menuAdder() {
    content.appendChild(menu);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx5QkFBeUI7QUFDekIsWUFBWSw4REFBZ0I7QUFDNUIsWUFBWSxnREFBUztBQUNyQjtBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLFlBQVksd0RBQWM7QUFDMUIsWUFBWSxnREFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixZQUFZLDhEQUFnQjtBQUM1QixZQUFZLHNEQUFZO0FBQ3hCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsWUFBWSxrREFBVztBQUN2QixZQUFZLHNEQUFZO0FBQ3hCO0FBQ0E7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbS1zdGFydGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdChjb250ZW50KSB7XHJcbiAgICBsZXQgY29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdHMuc2V0QXR0cmlidXRlKFwiZGl2XCIsIFwibWVudXNcIik7XHJcbiAgICBcclxuICAgIGxldCBtYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB2aWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB3YWl0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgXHJcbiAgICBtYW5hZ2VyLmlubmVyVGV4dCA9IFwiQWxkb1wiO1xyXG4gICAgdmljZS5pbm5lclRleHQgPSBcIkZyYW5jb1wiXHJcbiAgICB3YWl0ZXIuaW5uZXJUZXh0ID0gXCJHaW92YWJidVwiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdHMpO1xyXG4gICAgY29udGFjdHMuYXBwZW5kQ2hpbGQobWFuYWdlcik7XHJcbiAgICBjb250YWN0cy5hcHBlbmRDaGlsZCh2aWNlKTtcclxuICAgIGNvbnRhY3RzLmFwcGVuZENoaWxkKHdhaXRlcik7XHJcbiAgICBcclxufVxyXG5mdW5jdGlvbiBjb250YWN0UmVtb3ZlcigpIHtcclxuICAgIGNvbnRhY3QucmVtb3ZlKCk7XHJcbn1cclxuZnVuY3Rpb24gY29udGFjdEFkZGVyKGNvbnRhY3QpIHtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNvbnRhY3QsIGNvbnRhY3RSZW1vdmVyLCBjb250YWN0QWRkZXIgfTsiLCIvKjxoMSBjbGFzcz1cInRpdGxlXCI+VGhlIEZpbmVzdCBSZXN0YXVyYW50PC9oMT5cclxuPGltZyBjbGFzcz1cInJlc3RhdXJhbnRGb3RvXCIgc3JjPVwiLi4vc3JjL3Jlc3RhdXJhbnQtaW1hZ2UuanBnXCIgd2lkdGg9XCI1MDBweFwiPlxyXG48cCBjbGFzcz1cInJlc3RhdXJhbnREZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBCZWF0YWUgYWRpcGlzY2kgaW52ZW50b3JlIHZlbmlhbSBuZWNlc3NpdGF0aWJ1cyBmdWdpYXQsIGVvcyBlbGlnZW5kaSBhIG9mZmljaWlzIG5vbiBtYWduaSBtb2xlc3RpYWUgaW5jaWR1bnQgcmVtIGlsbG8sIHNhcGllbnRlIG1haW9yZXMgZG9sb3JlcyBuZXF1ZSBwb3NzaW11cyBleGVyY2l0YXRpb25lbS5cclxuQXQsIGVhIHNpdCByZW0gY29tbW9kaSwgcmVwZWxsZW5kdXMgY29ycG9yaXMgb21uaXMgbWF4aW1lIGRpZ25pc3NpbW9zIHJlcGVsbGF0IHNlZCBsYWJvcnVtIHF1aXMgaXBzYW0gaXBzYSB1dCB2ZWwgcGFyaWF0dXIgZXN0IHF1aWRlbSBoYXJ1bSBhZGlwaXNjaSBhY2N1c2FtdXMgdm9sdXB0YXM/IE9iY2FlY2F0aSBlYSB2b2x1cHRhdGUgdmVyaXRhdGlzIGV0P1xyXG48L3A+XHJcbiovXHJcbmltcG9ydCBpbW1hZ2luZSBmcm9tIFwiLi9yZXN0YXVyYW50LWltYWdlLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRQYWdlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1haW5QYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblBhZ2VcIik7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJUaGUgRmluZXN0IFJlc3RhdXJhbnRcIjtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuXHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9IGltbWFnaW5lO1xyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnRGb3RvXCIpO1xyXG5cclxuICAgIGxldCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBCZWF0YWUgYWRpcGlzY2kgaW52ZW50b3JlIHZlbmlhbSBuZWNlc3NpdGF0aWJ1cyBmdWdpYXQsIGVvcyBlbGlnZW5kaSBhIG9mZmljaWlzIG5vbiBtYWduaSBtb2xlc3RpYWUgaW5jaWR1bnQgcmVtIGlsbG8sIHNhcGllbnRlIG1haW9yZXMgZG9sb3JlcyBuZXF1ZSBwb3NzaW11cyBleGVyY2l0YXRpb25lbS4gQXQsIGVhIHNpdCByZW0gY29tbW9kaSwgcmVwZWxsZW5kdXMgY29ycG9yaXMgb21uaXMgbWF4aW1lIGRpZ25pc3NpbW9zIHJlcGVsbGF0IHNlZCBsYWJvcnVtIHF1aXMgaXBzYW0gaXBzYSB1dCB2ZWwgcGFyaWF0dXIgZXN0IHF1aWRlbSBoYXJ1bSBhZGlwaXNjaSBhY2N1c2FtdXMgdm9sdXB0YXM/XCI7XHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnREZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgICBtYWluUGFnZS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlOiAxNTBweCA1MDBweCAvIDFmciAyZnI7IGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0aXRsZSB0ZXh0JyAnLiBpbWFnZSc7IHBhZGRpbmc6IDEwcHg7IG1hcmdpbi10b3A6IC0xMHB4O1wiO1xyXG4gICAgdGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGdyaWQtYXJlYTogdGl0bGU7XCI7XHJcbiAgICBpbWFnZS5zdHlsZS5jc3NUZXh0ID0gXCJoZWlnaHQ6IDUwMHB4OyBncmlkLWFyZWE6IGltYWdlOyBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcIjtcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXNpemU6IDE1cHggKyAwLjFlbTsgZm9udC1zdHlsZTogaXRhbGljOyBncmlkLWFyZWE6IHRleHQ7IHBhZGRpbmc6IDE1cHggMTVweCAwIDE1cHg7XCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluUGFnZSk7XHJcblxyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQocmVzdGF1cmFudERlc2NyaXB0aW9uKTtcclxufVxyXG5mdW5jdGlvbiBzdGFydFBhZ2VSZW1vdmVyKCkge1xyXG4gICAgc3RhcnRQYWdlLnJlbW92ZSgpO1xyXG59XHJcbmZ1bmN0aW9uIHN0YXJ0UGFnZUFkZGVyKCkge1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzdGFydFBhZ2UoKSk7XHJcbn1cclxuZXhwb3J0IHsgc3RhcnRQYWdlLCBzdGFydFBhZ2VSZW1vdmVyLCBzdGFydFBhZ2VBZGRlciB9OyIsImZ1bmN0aW9uIG1lbnUoY29udGVudCkge1xyXG4gICAgbGV0IG1lbnVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVzLnNldEF0dHJpYnV0ZShcImRpdlwiLCBcIm1lbnVzXCIpO1xyXG4gICAgXHJcbiAgICBsZXQgcGl6emEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBwaXp6YTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHBpenphMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBcclxuICAgIHBpenphMC5pbm5lclRleHQgPSBcIlBpenphXCI7XHJcbiAgICBwaXp6YTEuaW5uZXJUZXh0ID0gXCJMb3JlbSBpcHN1bSBpcHN1bSBsb3JlbSwgbG9yZW0uXCJcclxuICAgIHBpenphMi5pbm5lclRleHQgPSBcIuKCrDVcIjtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVzKTtcclxuICAgIG1lbnVzLmFwcGVuZENoaWxkKHBpenphMCk7XHJcbiAgICBtZW51cy5hcHBlbmRDaGlsZChwaXp6YTEpO1xyXG4gICAgbWVudXMuYXBwZW5kQ2hpbGQocGl6emEyKTtcclxufVxyXG5mdW5jdGlvbiBtZW51UmVtb3ZlcigpIHtcclxuICAgIG1lbnUucmVtb3ZlKCk7XHJcbn1cclxuZnVuY3Rpb24gbWVudUFkZGVyKCkge1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxufVxyXG5cclxuZXhwb3J0IHsgbWVudSwgbWVudVJlbW92ZXIsIG1lbnVBZGRlciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBzdGFydFBhZ2UsIHN0YXJ0UGFnZVJlbW92ZXIsIHN0YXJ0UGFnZUFkZGVyIH0gZnJvbSBcIi4vZG9tLXN0YXJ0ZXJcIjtcclxuaW1wb3J0IHsgbWVudSwgbWVudVJlbW92ZXIsIG1lbnVBZGRlciB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHtjb250YWN0LCBjb250YWN0UmVtb3ZlciwgY29udGFjdEFkZGVyIH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmNzc1RleHQgPSBcImZvbnQtZmFtaWx5OiByb2JvdG8sIHN5c3RlbS11aTsgcGFkZGluZzogMDsgbWFyZ2luOiAwO1wiXHJcblxyXG5sZXQgY2xpY2tlZCA9IDA7XHJcblxyXG5cclxuZnVuY3Rpb24gdGFiVXBkYXRlcigpIHtcclxuICAgIC8qaWYgKCBjbGlja2VkID09IDEgKSB7XHJcbiAgICAgICAgY2xpY2tlZCA9IDExO1xyXG4gICAgICAgIC8vbWFpblBhZ2UucmVtb3ZlKCk7XHJcbiAgICAgICAgLy9tZW51cy5yZW1vdmUoKTtcclxuICAgICAgICAvL3N0YXJ0UGFnZShjb250ZW50KTtcclxuICAgICAgICBtZW51UmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBjb250YWN0UmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBzdGFydFBhZ2UoY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAyICkge1xyXG4gICAgICAgIGNsaWNrZWQgPSAyMjtcclxuICAgICAgICAvL21lbnUoY29udGVudCk7XHJcbiAgICAgICAgc3RhcnRQYWdlUmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBjb250YWN0UmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICAvL2NvbnRlbnQuYXBwZW5kQ2hpbGQobWVudXMpO1xyXG4gICAgICAgIG1lbnUoY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAzICkge1xyXG4gICAgICAgIGNsaWNrZWQgPSAzMztcclxuICAgICAgICAvL2NvbnRhY3QoY29udGVudCk7XHJcbiAgICAgICAgc3RhcnRQYWdlUmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBtZW51UmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBjb250YWN0KGNvbnRlbnQpO1xyXG4gICAgICAgIFxyXG4gICAgfSovXHJcbiAgICAvL2Vsc2UgaWYgKCBjbGlja2VkID09IDAgKSB7XHJcbiAgICAgICAgc3RhcnRQYWdlKGNvbnRlbnQpO1xyXG4gICAgICAgIHN0YXJ0UGFnZUFkZGVyKCk7XHJcbiAgICAgICAgbWVudShjb250ZW50KTtcclxuICAgICAgICBjb250YWN0KGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRhY3RBZGRlcihjb250YWN0cyk7XHJcbiAgICAgICAgY29udGFjdFJlbW92ZXIoKTtcclxuICAgICAgICBjbGlja2VkID0gMTE7Y29uc29sZS5sb2coY2xpY2tlZCk7XHJcbiAgICAgICAgXHJcbiAgICAvL31cclxufVxyXG5cclxuZnVuY3Rpb24gdGFiU3dpdGNoaW5nKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGxldCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBob21lVGFiLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBtZW51VGFiLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gICAgdGFicy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiAxMDBweDsgZm9udC1zaXplOiAzNXB4OyBwYWRkaW5nOiAxMHB4OyBmb250LXdlaWdodDogYm9sZDtcIjtcclxuICAgIGhvbWVUYWIuc3R5bGUuY3NzVGV4dCA9IFwicGFkZGluZzogMjBweCAzMHB4OyBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgYm9yZGVyLXJhZGl1czogMjBweDtcIjtcclxuICAgIG1lbnVUYWIuc3R5bGUuY3NzVGV4dCA9IFwicGFkZGluZzogMjBweCAzMHB4OyBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgYm9yZGVyLXJhZGl1czogMjBweDtcIjtcclxuICAgIGNvbnRhY3RUYWIuc3R5bGUuY3NzVGV4dCA9IFwicGFkZGluZzogMjBweCAzMHB4OyBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgYm9yZGVyLXJhZGl1czogMjBweDtcIjtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYnMpO1xyXG4gICAgdGFicy5hcHBlbmRDaGlsZChob21lVGFiKTtcclxuICAgIHRhYnMuYXBwZW5kQ2hpbGQobWVudVRhYik7XHJcbiAgICB0YWJzLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xyXG5cclxuICAgIGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoIGNsaWNrZWQgPT0gMTEgKSB7XHJcbiAgICAgICAgICAgIC8vc3RhcnRQYWdlUmVtb3ZlcigpO21lbnVSZW1vdmVyKCk7Y29udGFjdFJlbW92ZXIoKTtcclxuICAgICAgICAgICAgLy9zdGFydFBhZ2VBZGRlcigpO1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMTE7Y29uc29sZS5sb2coY2xpY2tlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDIyICkge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMjI7Y29uc29sZS5sb2coY2xpY2tlZCk7XHJcbiAgICAgICAgICAgIG1lbnVSZW1vdmVyKCk7XHJcbiAgICAgICAgICAgIHN0YXJ0UGFnZUFkZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDMzKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAzMztjb25zb2xlLmxvZyhjbGlja2VkKTtcclxuICAgICAgICAgICAgY29udGFjdFJlbW92ZXIoKTtcclxuICAgICAgICAgICAgc3RhcnRQYWdlQWRkZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyplbHNlIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDE7XHJcbiAgICAgICAgICAgIHRhYlVwZGF0ZXIoKTtcclxuICAgICAgICB9Ki9cclxuICAgIH0pO1xyXG4gICAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8qaWYgKCBjbGlja2VkID09IDIyKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAxMSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAyO1xyXG4gICAgICAgICAgICB0YWJVcGRhdGVyKCk7XHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgaWYgKCBjbGlja2VkID09IDExICkge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMTE7Y29uc29sZS5sb2coY2xpY2tlZCk7XHJcbiAgICAgICAgICAgIHN0YXJ0UGFnZVJlbW92ZXIoKTtcclxuICAgICAgICAgICAgbWVudUFkZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDIyICkge1xyXG4gICAgICAgICAgICAvL3N0YXJ0UGFnZVJlbW92ZXIoKTtjb250YWN0UmVtb3ZlcigpO21lbnVSZW1vdmVyKCk7XHJcbiAgICAgICAgICAgIC8vbWVudUFkZGVyKCk7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAyMjtjb25zb2xlLmxvZyhjbGlja2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIGNsaWNrZWQgPT0gMzMpIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDMzO2NvbnNvbGUubG9nKGNsaWNrZWQpO1xyXG4gICAgICAgICAgICBjb250YWN0UmVtb3ZlcigpO1xyXG4gICAgICAgICAgICBtZW51QWRkZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyplbHNlIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDI7XHJcbiAgICAgICAgICAgIHRhYlVwZGF0ZXIoKTtcclxuICAgICAgICB9Ki9cclxuICAgIH0pO1xyXG4gICAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICggY2xpY2tlZCA9PSAxMSApIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDExO2NvbnNvbGUubG9nKGNsaWNrZWQpO1xyXG4gICAgICAgICAgICBzdGFydFBhZ2VSZW1vdmVyKCk7XHJcbiAgICAgICAgICAgIGNvbnRhY3RBZGRlcihjb250YWN0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDIyICkge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMjI7Y29uc29sZS5sb2coY2xpY2tlZCk7XHJcbiAgICAgICAgICAgIG1lbnVSZW1vdmVyKCk7XHJcbiAgICAgICAgICAgIGNvbnRhY3RBZGRlcihjb250YWN0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDMzKSB7XHJcbiAgICAgICAgICAgIC8vc3RhcnRQYWdlUmVtb3ZlcigpO21lbnVSZW1vdmVyKCk7Y29udGFjdFJlbW92ZXIoKTtcclxuICAgICAgICAgICAgLy9jb250YWN0QWRkZXIoKTtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDMzO2NvbnNvbGUubG9nKGNsaWNrZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKmVsc2Uge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMztcclxuICAgICAgICAgICAgdGFiVXBkYXRlcigpO1xyXG4gICAgICAgIH0qL1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbnRhYlN3aXRjaGluZyhjb250ZW50KTtcclxuXHJcbnRhYlVwZGF0ZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=