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
            (0,_dom_starter__WEBPACK_IMPORTED_MODULE_0__.startPageRemover)(content);
            contact(content);
        }
        else if ( clicked == 22 ) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVksOERBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbS1zdGFydGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdChjb250ZW50KSB7XHJcbiAgICBsZXQgY29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdHMuc2V0QXR0cmlidXRlKFwiZGl2XCIsIFwibWVudXNcIik7XHJcbiAgICBcclxuICAgIGxldCBtYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB2aWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCB3YWl0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgXHJcbiAgICBtYW5hZ2VyLmlubmVyVGV4dCA9IFwiQWxkb1wiO1xyXG4gICAgdmljZS5pbm5lclRleHQgPSBcIkZyYW5jb1wiXHJcbiAgICB3YWl0ZXIuaW5uZXJUZXh0ID0gXCJHaW92YWJidVwiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdHMpO1xyXG4gICAgY29udGFjdHMuYXBwZW5kQ2hpbGQobWFuYWdlcik7XHJcbiAgICBjb250YWN0cy5hcHBlbmRDaGlsZCh2aWNlKTtcclxuICAgIGNvbnRhY3RzLmFwcGVuZENoaWxkKHdhaXRlcik7XHJcbn1cclxuZnVuY3Rpb24gY29udGFjdFJlbW92ZXIoY29udGVudCkge1xyXG4gICAgY29udGFjdHMuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5leHBvcnQgeyBjb250YWN0LCBjb250YWN0UmVtb3ZlciB9OyIsIi8qPGgxIGNsYXNzPVwidGl0bGVcIj5UaGUgRmluZXN0IFJlc3RhdXJhbnQ8L2gxPlxyXG48aW1nIGNsYXNzPVwicmVzdGF1cmFudEZvdG9cIiBzcmM9XCIuLi9zcmMvcmVzdGF1cmFudC1pbWFnZS5qcGdcIiB3aWR0aD1cIjUwMHB4XCI+XHJcbjxwIGNsYXNzPVwicmVzdGF1cmFudERlc2NyaXB0aW9uXCI+TG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEJlYXRhZSBhZGlwaXNjaSBpbnZlbnRvcmUgdmVuaWFtIG5lY2Vzc2l0YXRpYnVzIGZ1Z2lhdCwgZW9zIGVsaWdlbmRpIGEgb2ZmaWNpaXMgbm9uIG1hZ25pIG1vbGVzdGlhZSBpbmNpZHVudCByZW0gaWxsbywgc2FwaWVudGUgbWFpb3JlcyBkb2xvcmVzIG5lcXVlIHBvc3NpbXVzIGV4ZXJjaXRhdGlvbmVtLlxyXG5BdCwgZWEgc2l0IHJlbSBjb21tb2RpLCByZXBlbGxlbmR1cyBjb3Jwb3JpcyBvbW5pcyBtYXhpbWUgZGlnbmlzc2ltb3MgcmVwZWxsYXQgc2VkIGxhYm9ydW0gcXVpcyBpcHNhbSBpcHNhIHV0IHZlbCBwYXJpYXR1ciBlc3QgcXVpZGVtIGhhcnVtIGFkaXBpc2NpIGFjY3VzYW11cyB2b2x1cHRhcz8gT2JjYWVjYXRpIGVhIHZvbHVwdGF0ZSB2ZXJpdGF0aXMgZXQ/XHJcbjwvcD5cclxuKi9cclxuaW1wb3J0IGltbWFnaW5lIGZyb20gXCIuL3Jlc3RhdXJhbnQtaW1hZ2UuanBnXCI7XHJcblxyXG5mdW5jdGlvbiBzdGFydFBhZ2UoY29udGVudCkge1xyXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFpblBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluUGFnZVwiKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIlRoZSBGaW5lc3QgUmVzdGF1cmFudFwiO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG5cclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1tYWdpbmU7XHJcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudEZvdG9cIik7XHJcblxyXG4gICAgbGV0IHJlc3RhdXJhbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEJlYXRhZSBhZGlwaXNjaSBpbnZlbnRvcmUgdmVuaWFtIG5lY2Vzc2l0YXRpYnVzIGZ1Z2lhdCwgZW9zIGVsaWdlbmRpIGEgb2ZmaWNpaXMgbm9uIG1hZ25pIG1vbGVzdGlhZSBpbmNpZHVudCByZW0gaWxsbywgc2FwaWVudGUgbWFpb3JlcyBkb2xvcmVzIG5lcXVlIHBvc3NpbXVzIGV4ZXJjaXRhdGlvbmVtLiBBdCwgZWEgc2l0IHJlbSBjb21tb2RpLCByZXBlbGxlbmR1cyBjb3Jwb3JpcyBvbW5pcyBtYXhpbWUgZGlnbmlzc2ltb3MgcmVwZWxsYXQgc2VkIGxhYm9ydW0gcXVpcyBpcHNhbSBpcHNhIHV0IHZlbCBwYXJpYXR1ciBlc3QgcXVpZGVtIGhhcnVtIGFkaXBpc2NpIGFjY3VzYW11cyB2b2x1cHRhcz9cIjtcclxuICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudERlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgIG1haW5QYWdlLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGU6IDE1MHB4IDUwMHB4IC8gMWZyIDJmcjsgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RpdGxlIHRleHQnICcuIGltYWdlJzsgcGFkZGluZzogMTBweDsgbWFyZ2luLXRvcDogLTEwcHg7XCI7XHJcbiAgICB0aXRsZS5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXdlaWdodDogYm9sZDsgZ3JpZC1hcmVhOiB0aXRsZTtcIjtcclxuICAgIGltYWdlLnN0eWxlLmNzc1RleHQgPSBcImhlaWdodDogNTAwcHg7IGdyaWQtYXJlYTogaW1hZ2U7IGp1c3RpZnktc2VsZjogY2VudGVyO1wiO1xyXG4gICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLnN0eWxlLmNzc1RleHQgPSBcImZvbnQtc2l6ZTogMTVweCArIDAuMWVtOyBmb250LXN0eWxlOiBpdGFsaWM7IGdyaWQtYXJlYTogdGV4dDsgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcIjtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5QYWdlKTtcclxuXHJcbiAgICBtYWluUGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBtYWluUGFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICBtYWluUGFnZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb24pO1xyXG59XHJcbmZ1bmN0aW9uIHN0YXJ0UGFnZVJlbW92ZXIoY29udGVudCkge1xyXG4gICAgbWFpblBhZ2UuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5leHBvcnQgeyBzdGFydFBhZ2UsIHN0YXJ0UGFnZVJlbW92ZXIgfTsiLCJmdW5jdGlvbiBtZW51KGNvbnRlbnQpIHtcclxuICAgIGxldCBtZW51cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51cy5zZXRBdHRyaWJ1dGUoXCJkaXZcIiwgXCJtZW51c1wiKTtcclxuICAgIFxyXG4gICAgbGV0IHBpenphMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgcGl6emExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBwaXp6YTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgXHJcbiAgICBwaXp6YTAuaW5uZXJUZXh0ID0gXCJQaXp6YVwiO1xyXG4gICAgcGl6emExLmlubmVyVGV4dCA9IFwiTG9yZW0gaXBzdW0gaXBzdW0gbG9yZW0sIGxvcmVtLlwiXHJcbiAgICBwaXp6YTIuaW5uZXJUZXh0ID0gXCLigqw1XCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51cyk7XHJcbiAgICBtZW51cy5hcHBlbmRDaGlsZChwaXp6YTApO1xyXG4gICAgbWVudXMuYXBwZW5kQ2hpbGQocGl6emExKTtcclxuICAgIG1lbnVzLmFwcGVuZENoaWxkKHBpenphMik7XHJcbn1cclxuZnVuY3Rpb24gbWVudVJlbW92ZXIoY29udGVudCkge1xyXG4gICAgbWVudXMuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5cclxuZXhwb3J0IHsgbWVudSwgbWVudVJlbW92ZXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgc3RhcnRQYWdlLCBzdGFydFBhZ2VSZW1vdmVyIH0gZnJvbSBcIi4vZG9tLXN0YXJ0ZXJcIjtcclxuaW1wb3J0IHsgbWVudSwgbWVudVJlbW92ZXIgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7Y29udGFjdCwgY29udGFjdFJlbW92ZXIgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbmRvY3VtZW50LmJvZHkuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1mYW1pbHk6IHJvYm90bywgc3lzdGVtLXVpOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7XCJcclxuXHJcbmxldCBjbGlja2VkID0gMDtcclxuXHJcblxyXG5mdW5jdGlvbiB0YWJVcGRhdGVyKCkge1xyXG4gICAgLyppZiAoIGNsaWNrZWQgPT0gMSApIHtcclxuICAgICAgICBjbGlja2VkID0gMTE7XHJcbiAgICAgICAgLy9tYWluUGFnZS5yZW1vdmUoKTtcclxuICAgICAgICAvL21lbnVzLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vc3RhcnRQYWdlKGNvbnRlbnQpO1xyXG4gICAgICAgIG1lbnVSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRhY3RSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIHN0YXJ0UGFnZShjb250ZW50KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDIgKSB7XHJcbiAgICAgICAgY2xpY2tlZCA9IDIyO1xyXG4gICAgICAgIC8vbWVudShjb250ZW50KTtcclxuICAgICAgICBzdGFydFBhZ2VSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRhY3RSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIC8vY29udGVudC5hcHBlbmRDaGlsZChtZW51cyk7XHJcbiAgICAgICAgbWVudShjb250ZW50KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDMgKSB7XHJcbiAgICAgICAgY2xpY2tlZCA9IDMzO1xyXG4gICAgICAgIC8vY29udGFjdChjb250ZW50KTtcclxuICAgICAgICBzdGFydFBhZ2VSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIG1lbnVSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRhY3QoY29udGVudCk7XHJcbiAgICAgICAgXHJcbiAgICB9Ki9cclxuICAgIC8vZWxzZSBpZiAoIGNsaWNrZWQgPT0gMCApIHtcclxuICAgICAgICBzdGFydFBhZ2UoY29udGVudCk7XHJcbiAgICAgICAgY2xpY2tlZCA9IDExO1xyXG4gICAgLy99XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhYlN3aXRjaGluZyhjb250ZW50KSB7XHJcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICAgIHRhYnMuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogMTAwcHg7IGZvbnQtc2l6ZTogMzVweDsgcGFkZGluZzogMTBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI7XHJcbiAgICBob21lLnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDIwcHggMzBweDsgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI7XHJcbiAgICBtZW51LnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDIwcHggMzBweDsgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI7XHJcbiAgICBjb250YWN0LnN0eWxlLmNzc1RleHQgPSBcInBhZGRpbmc6IDIwcHggMzBweDsgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IGJvcmRlci1yYWRpdXM6IDIwcHg7XCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJzKTtcclxuICAgIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgICB0YWJzLmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgdGFicy5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuXHJcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBjbGlja2VkID09IDExICkge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDIyICkge1xyXG4gICAgICAgICAgICBjbGlja2VkID0gMjI7XHJcbiAgICAgICAgICAgIG1lbnVSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBzdGFydFBhZ2UoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDMzKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAzMztcclxuICAgICAgICAgICAgY29udGFjdFJlbW92ZXIocmVtb3Zlcik7XHJcbiAgICAgICAgICAgIHN0YXJ0UGFnZShjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAxO1xyXG4gICAgICAgICAgICB0YWJVcGRhdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLyppZiAoIGNsaWNrZWQgPT0gMjIpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDExKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDI7XHJcbiAgICAgICAgICAgIHRhYlVwZGF0ZXIoKTtcclxuICAgICAgICB9Ki9cclxuICAgICAgICBpZiAoIGNsaWNrZWQgPT0gMTEgKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAxMTtcclxuICAgICAgICAgICAgc3RhcnRQYWdlUmVtb3Zlcihjb250ZW50KTtcclxuICAgICAgICAgICAgbWVudShjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIGNsaWNrZWQgPT0gMjIgKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAyMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIGNsaWNrZWQgPT0gMzMpIHtcclxuICAgICAgICAgICAgY2xpY2tlZCA9IDMzO1xyXG4gICAgICAgICAgICBjb250YWN0UmVtb3ZlcihyZW1vdmVyKTtcclxuICAgICAgICAgICAgbWVudShjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAyO1xyXG4gICAgICAgICAgICB0YWJVcGRhdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBjbGlja2VkID09IDExICkge1xyXG4gICAgICAgICAgICBzdGFydFBhZ2VSZW1vdmVyKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb250YWN0KGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggY2xpY2tlZCA9PSAyMiApIHtcclxuICAgICAgICAgICAgbWVudVJlbW92ZXIoY29udGVudCk7XHJcbiAgICAgICAgICAgIGNvbnRhY3QoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBjbGlja2VkID09IDMzKSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAzMztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNsaWNrZWQgPSAzO1xyXG4gICAgICAgICAgICB0YWJVcGRhdGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbnRhYlN3aXRjaGluZyhjb250ZW50KTtcclxuXHJcbnRhYlVwZGF0ZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=