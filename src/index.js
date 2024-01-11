import startPage from "./dom-starter";
import tabSwitching from "./tab-switching";
const content = document.querySelector("#content");
document.body.style.cssText = "font-family: roboto, system-ui; padding: 0; margin: 0;"

startPage(content);
tabSwitching(content);