import { startPage, startPageRemover } from "./dom-starter";
import { menu, menuRemover } from "./menu";
import {contact, contactRemover } from "./contact";
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
        startPage(content);
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
            menuRemover();
            startPage(content);
        }
        else if ( clicked == 33) {
            clicked = 33;
            contactRemover();
            startPage(content);
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
            startPageRemover();
            menu(content);
        }
        else if ( clicked == 22 ) {
            clicked = 22;
        }
        else if ( clicked == 33) {
            clicked = 33;
            contactRemover();
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
            startPageRemover();
            contact(content);
        }
        else if ( clicked == 22 ) {
            clicked = 22;
            menuRemover();
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