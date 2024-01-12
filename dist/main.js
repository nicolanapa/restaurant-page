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
function startPageRemover(content) {
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
function menuRemover(content) {
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
        if ( clicked == 11 ) {
            clicked = 11;
        }
        else if ( clicked == 22 ) {
            clicked = 22;
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemover)(content);
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPage)(content);
        }
        else if ( clicked == 33) {
            clicked = 33;
            (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactRemover)(remover);
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPage)(content);
        }
        else {
            clicked = 1;
            tabUpdater();
        }
        
    });
    menu.addEventListener("click", () => {
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
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)(content);
            menu(content);
        }
        else if ( clicked == 22 ) {
            clicked = 22;
        }
        else if ( clicked == 33) {
            clicked = 33;
            (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contactRemover)(remover);
            menu(content);
        }
        else {
            clicked = 2;
            tabUpdater();
        }
    });
    contact.addEventListener("click", () => {
        if ( clicked == 11 ) {
            clicked = 11;
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)(content);
            contact(content);
        }
        else if ( clicked == 22 ) {
            clicked = 22;
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuRemover)(content);
            contact(content);
        }
        else if ( clicked == 33) {
            clicked = 33;
        }
        else {
            clicked = 3;
            tabUpdater();
        }
        
    });
}

tabSwitching(content);

tabUpdater();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb20tc3RhcnRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnRhY3QoY29udGVudCkge1xyXG4gICAgbGV0IGNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3RzLnNldEF0dHJpYnV0ZShcImRpdlwiLCBcIm1lbnVzXCIpO1xyXG4gICAgXHJcbiAgICBsZXQgbWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgdmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgd2FpdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgbWFuYWdlci5pbm5lclRleHQgPSBcIkFsZG9cIjtcclxuICAgIHZpY2UuaW5uZXJUZXh0ID0gXCJGcmFuY29cIlxyXG4gICAgd2FpdGVyLmlubmVyVGV4dCA9IFwiR2lvdmFiYnVcIjtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RzKTtcclxuICAgIGNvbnRhY3RzLmFwcGVuZENoaWxkKG1hbmFnZXIpO1xyXG4gICAgY29udGFjdHMuYXBwZW5kQ2hpbGQodmljZSk7XHJcbiAgICBjb250YWN0cy5hcHBlbmRDaGlsZCh3YWl0ZXIpO1xyXG59XHJcbmZ1bmN0aW9uIGNvbnRhY3RSZW1vdmVyKGNvbnRlbnQpIHtcclxuICAgIGNvbnRhY3RzLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuZXhwb3J0IHsgY29udGFjdCwgY29udGFjdFJlbW92ZXIgfTsiLCIvKjxoMSBjbGFzcz1cInRpdGxlXCI+VGhlIEZpbmVzdCBSZXN0YXVyYW50PC9oMT5cclxuPGltZyBjbGFzcz1cInJlc3RhdXJhbnRGb3RvXCIgc3JjPVwiLi4vc3JjL3Jlc3RhdXJhbnQtaW1hZ2UuanBnXCIgd2lkdGg9XCI1MDBweFwiPlxyXG48cCBjbGFzcz1cInJlc3RhdXJhbnREZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBCZWF0YWUgYWRpcGlzY2kgaW52ZW50b3JlIHZlbmlhbSBuZWNlc3NpdGF0aWJ1cyBmdWdpYXQsIGVvcyBlbGlnZW5kaSBhIG9mZmljaWlzIG5vbiBtYWduaSBtb2xlc3RpYWUgaW5jaWR1bnQgcmVtIGlsbG8sIHNhcGllbnRlIG1haW9yZXMgZG9sb3JlcyBuZXF1ZSBwb3NzaW11cyBleGVyY2l0YXRpb25lbS5cclxuQXQsIGVhIHNpdCByZW0gY29tbW9kaSwgcmVwZWxsZW5kdXMgY29ycG9yaXMgb21uaXMgbWF4aW1lIGRpZ25pc3NpbW9zIHJlcGVsbGF0IHNlZCBsYWJvcnVtIHF1aXMgaXBzYW0gaXBzYSB1dCB2ZWwgcGFyaWF0dXIgZXN0IHF1aWRlbSBoYXJ1bSBhZGlwaXNjaSBhY2N1c2FtdXMgdm9sdXB0YXM/IE9iY2FlY2F0aSBlYSB2b2x1cHRhdGUgdmVyaXRhdGlzIGV0P1xyXG48L3A+XHJcbiovXHJcbmltcG9ydCBpbW1hZ2luZSBmcm9tIFwiLi9yZXN0YXVyYW50LWltYWdlLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRQYWdlKGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1haW5QYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblBhZ2VcIik7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJUaGUgRmluZXN0IFJlc3RhdXJhbnRcIjtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuXHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9IGltbWFnaW5lO1xyXG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnRGb3RvXCIpO1xyXG5cclxuICAgIGxldCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBCZWF0YWUgYWRpcGlzY2kgaW52ZW50b3JlIHZlbmlhbSBuZWNlc3NpdGF0aWJ1cyBmdWdpYXQsIGVvcyBlbGlnZW5kaSBhIG9mZmljaWlzIG5vbiBtYWduaSBtb2xlc3RpYWUgaW5jaWR1bnQgcmVtIGlsbG8sIHNhcGllbnRlIG1haW9yZXMgZG9sb3JlcyBuZXF1ZSBwb3NzaW11cyBleGVyY2l0YXRpb25lbS4gQXQsIGVhIHNpdCByZW0gY29tbW9kaSwgcmVwZWxsZW5kdXMgY29ycG9yaXMgb21uaXMgbWF4aW1lIGRpZ25pc3NpbW9zIHJlcGVsbGF0IHNlZCBsYWJvcnVtIHF1aXMgaXBzYW0gaXBzYSB1dCB2ZWwgcGFyaWF0dXIgZXN0IHF1aWRlbSBoYXJ1bSBhZGlwaXNjaSBhY2N1c2FtdXMgdm9sdXB0YXM/XCI7XHJcbiAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnREZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgICBtYWluUGFnZS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlOiAxNTBweCA1MDBweCAvIDFmciAyZnI7IGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0aXRsZSB0ZXh0JyAnLiBpbWFnZSc7IHBhZGRpbmc6IDEwcHg7IG1hcmdpbi10b3A6IC0xMHB4O1wiO1xyXG4gICAgdGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGdyaWQtYXJlYTogdGl0bGU7XCI7XHJcbiAgICBpbWFnZS5zdHlsZS5jc3NUZXh0ID0gXCJoZWlnaHQ6IDUwMHB4OyBncmlkLWFyZWE6IGltYWdlOyBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcIjtcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXNpemU6IDE1cHggKyAwLjFlbTsgZm9udC1zdHlsZTogaXRhbGljOyBncmlkLWFyZWE6IHRleHQ7IHBhZGRpbmc6IDE1cHggMTVweCAwIDE1cHg7XCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluUGFnZSk7XHJcblxyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQocmVzdGF1cmFudERlc2NyaXB0aW9uKTtcclxufVxyXG5mdW5jdGlvbiBzdGFydFBhZ2VSZW1vdmVyKGNvbnRlbnQpIHtcclxuICAgIG1haW5QYWdlLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuZXhwb3J0IHsgc3RhcnRQYWdlLCBzdGFydFBhZ2VSZW1vdmVyIH07IiwiZnVuY3Rpb24gbWVudShjb250ZW50KSB7XHJcbiAgICBsZXQgbWVudXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVudXMuc2V0QXR0cmlidXRlKFwiZGl2XCIsIFwibWVudXNcIik7XHJcbiAgICBcclxuICAgIGxldCBwaXp6YTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHBpenphMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgcGl6emEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIFxyXG4gICAgcGl6emEwLmlubmVyVGV4dCA9IFwiUGl6emFcIjtcclxuICAgIHBpenphMS5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGlwc3VtIGxvcmVtLCBsb3JlbS5cIlxyXG4gICAgcGl6emEyLmlubmVyVGV4dCA9IFwi4oKsNVwiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudXMpO1xyXG4gICAgbWVudXMuYXBwZW5kQ2hpbGQocGl6emEwKTtcclxuICAgIG1lbnVzLmFwcGVuZENoaWxkKHBpenphMSk7XHJcbiAgICBtZW51cy5hcHBlbmRDaGlsZChwaXp6YTIpO1xyXG59XHJcbmZ1bmN0aW9uIG1lbnVSZW1vdmVyKGNvbnRlbnQpIHtcclxuICAgIG1lbnVzLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG1lbnUsIG1lbnVSZW1vdmVyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IHN0YXJ0UGFnZSwgc3RhcnRQYWdlUmVtb3ZlciB9IGZyb20gXCIuL2RvbS1zdGFydGVyXCI7XHJcbmltcG9ydCB7IG1lbnUsIG1lbnVSZW1vdmVyIH0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQge2NvbnRhY3QsIGNvbnRhY3RSZW1vdmVyIH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmNzc1RleHQgPSBcImZvbnQtZmFtaWx5OiByb2JvdG8sIHN5c3RlbS11aTsgcGFkZGluZzogMDsgbWFyZ2luOiAwO1wiXHJcblxyXG5sZXQgY2xpY2tlZCA9IDA7XHJcblxyXG5cclxuZnVuY3Rpb24gdGFiVXBkYXRlcigpIHtcclxuICAgIC8qaWYgKCBjbGlja2VkID09IDEgKSB7XHJcbiAgICAgICAgY2xpY2tlZCA9IDExO1xyXG4gICAgICAgIC8vbWFpblBhZ2UucmVtb3ZlKCk7XHJcbiAgICAgICAgLy9tZW51cy5yZW1vdmUoKTtcclxuICAgICAgICAvL3N0YXJ0UGFnZShjb250ZW50KTtcclxuICAgICAgICBtZW51UmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBjb250YWN0UmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBzdGFydFBhZ2UoY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAyICkge1xyXG4gICAgICAgIGNsaWNrZWQgPSAyMjtcclxuICAgICAgICAvL21lbnUoY29udGVudCk7XHJcbiAgICAgICAgc3RhcnRQYWdlUmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBjb250YWN0UmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICAvL2NvbnRlbnQuYXBwZW5kQ2hpbGQobWVudXMpO1xyXG4gICAgICAgIG1lbnUoY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAzICkge1xyXG4gICAgICAgIGNsaWNrZWQgPSAzMztcclxuICAgICAgICAvL2NvbnRhY3QoY29udGVudCk7XHJcbiAgICAgICAgc3RhcnRQYWdlUmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBtZW51UmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICBjb250YWN0KGNvbnRlbnQpO1xyXG4gICAgICAgIFxyXG4gICAgfSovXHJcbiAgICAvL2Vsc2UgaWYgKCBjbGlja2VkID09IDAgKSB7XHJcbiAgICAgICAgc3RhcnRQYWdlKGNvbnRlbnQpO1xyXG4gICAgICAgIGNsaWNrZWQgPSAxMTtcclxuICAgIC8vfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0YWJTd2l0Y2hpbmcoY29udGVudCkge1xyXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuXHJcbiAgICB0YWJzLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDEwMHB4OyBmb250LXNpemU6IDM1cHg7IHBhZGRpbmc6IDEwcHg7IGZvbnQtd2VpZ2h0OiBib2xkO1wiO1xyXG4gICAgaG9tZS5zdHlsZS5jc3NUZXh0ID0gXCJwYWRkaW5nOiAyMHB4IDMwcHg7IGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyBib3JkZXItcmFkaXVzOiAyMHB4O1wiO1xyXG4gICAgbWVudS5zdHlsZS5jc3NUZXh0ID0gXCJwYWRkaW5nOiAyMHB4IDMwcHg7IGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyBib3JkZXItcmFkaXVzOiAyMHB4O1wiO1xyXG4gICAgY29udGFjdC5zdHlsZS5jc3NUZXh0ID0gXCJwYWRkaW5nOiAyMHB4IDMwcHg7IGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyBib3JkZXItcmFkaXVzOiAyMHB4O1wiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFicyk7XHJcbiAgICB0YWJzLmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gICAgdGFicy5hcHBlbmRDaGlsZChtZW51KTtcclxuICAgIHRhYnMuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICggY2xpY2tlZCA9PSAxMSApIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDExO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAyMiApIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDIyO1xyXG4gICAgICAgICAgICBtZW51UmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICAgICAgc3RhcnRQYWdlKGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAzMykge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMzM7XHJcbiAgICAgICAgICAgIGNvbnRhY3RSZW1vdmVyKHJlbW92ZXIpO1xyXG4gICAgICAgICAgICBzdGFydFBhZ2UoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMTtcclxuICAgICAgICAgICAgdGFiVXBkYXRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8qaWYgKCBjbGlja2VkID09IDIyKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAxMSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAyO1xyXG4gICAgICAgICAgICB0YWJVcGRhdGVyKCk7XHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgaWYgKCBjbGlja2VkID09IDExICkge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMTE7XHJcbiAgICAgICAgICAgIHN0YXJ0UGFnZVJlbW92ZXIoY29udGVudCk7XHJcbiAgICAgICAgICAgIG1lbnUoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDIyICkge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMjI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDMzKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAzMztcclxuICAgICAgICAgICAgY29udGFjdFJlbW92ZXIocmVtb3Zlcik7XHJcbiAgICAgICAgICAgIG1lbnUoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMjtcclxuICAgICAgICAgICAgdGFiVXBkYXRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICggY2xpY2tlZCA9PSAxMSApIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDExO1xyXG4gICAgICAgICAgICBzdGFydFBhZ2VSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb250YWN0KGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAyMiApIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDIyO1xyXG4gICAgICAgICAgICBtZW51UmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICAgICAgY29udGFjdChjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIGNsaWNrZWQgPT0gMzMpIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDM7XHJcbiAgICAgICAgICAgIHRhYlVwZGF0ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxufVxyXG5cclxudGFiU3dpdGNoaW5nKGNvbnRlbnQpO1xyXG5cclxudGFiVXBkYXRlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==