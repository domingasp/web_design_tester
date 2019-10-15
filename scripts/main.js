var selectedElement = document.getElementsByClassName("div-main__div-output__header__menu__li__a--company")[0];

function getEventTarget(e) {
    e = e || window.event;

    selectedElement = e.target || e.srcElement;
    document.getElementById("currentlySelectedP").innerHTML = selectedElement.innerHTML;

    lengthLimmit = '<span class = "div-main__div-input__p__span">Currently Selected:</span> "'.length + 20;
    
    if (document.getElementById("currentlySelectedP").innerHTML.length < lengthLimmit) {
        document.getElementById("currentlySelectedP").innerHTML = '<span class = "div-main__div-input__p__span">Currently Selected:</span> "' + selectedElement.innerHTML + '"';
    } else {
        document.getElementById("currentlySelectedP").innerHTML = '<span class = "div-main__div-input__p__span">Currently Selected:</span> "' + selectedElement.innerHTML.substring(0, 20) + '"...';
    }
}

function applyChanges() {
    
}