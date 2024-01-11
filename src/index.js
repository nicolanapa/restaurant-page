import { startPage, startPageRemover } from "./dom-starter";
import { menu, menuRemover } from "./menu";
import {contact, contactRemover } from "./contact";
const content = document.querySelector("#content");
document.body.style.cssText = "font-family: roboto, system-ui; padding: 0; margin: 0;"

let clicked = 0;


function tabUpdater() {
    if ( clicked == 1 ) {
        clicked = 1;
        //mainPage.remove();
        //menus.remove();
        startPageRemover(content);
        menuRemover(content);
        contactRemover(content);
        startPage(content);
    }
    else if ( clicked == 2 ) {
        clicked = 2;
        startPageRemover(content);
        menuRemover(content);
        contactRemover(content);
        //content.appendChild(menus);
        menu(content);
    }
    else if ( clicked == 3 ) {
        clicked = 3;
        startPageRemover(content);
        menuRemover(content);
        contactRemover(content);
        contact(content);
        
    }
    else if ( clicked == 0 ) {
        startPage(content);
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