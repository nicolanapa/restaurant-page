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

export { menu, menuRemover, menuAdder };