var selectedElement = document.getElementsByClassName("div-main__div-output__header__menu__li__a--company")[0];

function getEventTarget(e) {
    e = e || window.event;

    selectedElement = e.target || e.srcElement;
    document.getElementById("currentlySelectedP").innerHTML = "Currently Selected: " + selectedElement.id;
}

function applyChanges() {
    
}