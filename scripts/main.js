var selectedElement = document.getElementsByClassName("div-main__div-output__header__menu__li__a--company")[0];

function getEventTarget(e) {
    e = e || window.event;

    selectedElement = e.target || e.srcElement;
    document.getElementById("currentlySelectedP").innerHTML = selectedElement.innerHTML;

    lengthLimmit = '<span class = "div-main__div-input__p__span">Currently Selected:</span> "'.length + 20;
    
    if (selectedElement.tagName != "UL" && selectedElement.tagName != "INPUT") {
        if (document.getElementById("currentlySelectedP").innerHTML.length < lengthLimmit) {
            document.getElementById("currentlySelectedP").innerHTML = '<span class = "div-main__div-input__p__span">Currently Selected:</span> "' + selectedElement.innerHTML + '"';
        } else {
            document.getElementById("currentlySelectedP").innerHTML = '<span class = "div-main__div-input__p__span">Currently Selected:</span> "' + selectedElement.innerHTML.substring(0, 20) + '"...';
        }
    } else {
        document.getElementById("currentlySelectedP").innerHTML = '<span class = "div-main__div-input__p__span">Currently Selected:</span> "' + selectedElement.tagName + '"';
    }

    alterParametersDisplayed(selectedElement);
}

function alterParametersDisplayed(currentElementTag) {
    document.getElementById("mainBgColorDiv").style.display = "block";
    document.getElementById("currentContentDiv").style.display = "block";
    document.getElementById("fontFamilyDiv").style.display = "block";
    document.getElementById("normalBgColorDiv").style.display = "block";
    document.getElementById("normalFgColorDiv").style.display = "block";
    document.getElementById("normalTextDecorDiv").style.display = "block";

    if (currentElementTag.tagName == "UL") {
        document.getElementById("fontFamilyDiv").style.display = "none";
        document.getElementById("currentContentDiv").style.display = "none";
        document.getElementById("normalFgColorDiv").style.display = "none";
        document.getElementById("normalTextDecorDiv").style.display = "none";
    } else if (currentElementTag.tagName == "INPUT") {
        document.getElementById("currentContentDiv").style.display = "none";
    } else {
        document.getElementById("contentTextarea").value = currentElementTag.innerHTML;
    }
}

function matchColorToTextInput(inputChanged, inputToBeChanged) {
    inputToBeChanged.value = inputChanged.value;
}

function applyChanges() {
    bodyColor = document.getElementById("bodyBgColorInput").value;
    fontFamily = document.getElementById("fontFamilySelect").value;
    currentContent = document.getElementById("contentTextarea").value;

    normalBgColor = document.getElementById("normalBgColorInput").value;
    normalFgColor = document.getElementById("normalFgColorInput").value;
    normalTextDecor = document.getElementById("normalTextDecorSelect").value;

    makeChanges(this.selectedElement, bodyColor, fontFamily, currentContent, normalBgColor, normalFgColor, normalTextDecor);
}

function makeChanges(element, bodyColor, fontFamily, currentContent, normalBgColor, normalFgColor, normalTextDecor) {
    outputBody = document.getElementsByClassName("div-main__div-output")[0];
    outputBody.style.backgroundColor = bodyColor;

    element.style.backgroundColor = normalBgColor;

    if (element.tagName != "UL") {
        element.style.fontFamily = fontFamily;
        element.style.color = normalFgColor;
        element.style.textDecoration = normalTextDecor;
    }

    if (element.tagName != "INPUT" && element.tagName != "UL") {
        if (currentContent.trim().length > 0) {
            element.innerHTML = currentContent;
        }
    }
}