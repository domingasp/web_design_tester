var selectedElement = document.getElementsByClassName("div-main__div-output__header__menu__li__a--company")[0];

document.getElementById("ulID").addEventListener("keyup", function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        getEventTarget();
    }
});

document.getElementById("companyAID").addEventListener("keyup", function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        getEventTarget();
    }
});

document.getElementById("item1AID").addEventListener("keyup", function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        getEventTarget();
    }
});

document.getElementById("item2AID").addEventListener("keyup", function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        getEventTarget();
    }
});

document.getElementById("headerH1ID").addEventListener("keyup", function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        getEventTarget();
    }
});

document.getElementById("textPID").addEventListener("keyup", function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        getEventTarget();
    }
});

document.getElementById("labelID").addEventListener("keyup", function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        getEventTarget();
    }
});

document.getElementById("inputID").addEventListener("keyup", function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        getEventTarget();
    }
});

document.getElementById("buttonID").addEventListener("keyup", function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        getEventTarget();
    }
});

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

function alterParametersDisplayed(currentElement) {
    document.getElementById("mainBgColorDiv").style.display = "block";
    document.getElementById("currentContentDiv").style.display = "block";
    document.getElementById("fontFamilyDiv").style.display = "block";
    document.getElementById("normalBgColorDiv").style.display = "block";
    document.getElementById("normalFgColorDiv").style.display = "block";
    document.getElementById("normalTextDecorDiv").style.display = "block";

    document.getElementById("hoverH2").style.display = "none";
    document.getElementById("hoverBgColorDiv").style.display = "none";
    document.getElementById("hoverFgColorDiv").style.display = "none";
    document.getElementById("hoverTextDecorDiv").style.display = "none";

    document.getElementById("focusH2").style.display = "none";
    document.getElementById("focusBgColorDiv").style.display = "none";
    document.getElementById("focusFgColorDiv").style.display = "none";
    document.getElementById("focusTextDecorDiv").style.display = "none";
    document.getElementById("outlineColorDiv").style.display = "none";
    document.getElementById("outlineWidthDiv").style.display = "none";
    document.getElementById("outlineBlurDiv").style.display = "none";

    if (currentElement.tagName == "UL") {
        document.getElementById("fontFamilyDiv").style.display = "none";
        document.getElementById("currentContentDiv").style.display = "none";
        document.getElementById("normalFgColorDiv").style.display = "none";
        document.getElementById("normalTextDecorDiv").style.display = "none";
    } else if (currentElement.tagName == "INPUT") {
        document.getElementById("currentContentDiv").style.display = "none";

        document.getElementById("focusH2").style.display = "block";
        document.getElementById("focusBgColorDiv").style.display = "block";
        document.getElementById("focusFgColorDiv").style.display = "block";
        document.getElementById("focusTextDecorDiv").style.display = "block";

        document.getElementById("outlineColorDiv").style.display = "block";
        document.getElementById("outlineWidthDiv").style.display = "block";
        document.getElementById("outlineBlurDiv").style.display = "block";
    } else {
        document.getElementById("contentTextarea").value = currentElement.innerHTML;

        if (currentElement.tagName == "BUTTON" || currentElement.tagName == "A") {
            document.getElementById("hoverH2").style.display = "block";
            document.getElementById("hoverBgColorDiv").style.display = "block";
            document.getElementById("hoverFgColorDiv").style.display = "block";
            document.getElementById("hoverTextDecorDiv").style.display = "block";

            document.getElementById("focusH2").style.display = "block";
            document.getElementById("focusBgColorDiv").style.display = "block";
            document.getElementById("focusFgColorDiv").style.display = "block";
            document.getElementById("focusTextDecorDiv").style.display = "block";

            document.getElementById("outlineColorDiv").style.display = "block";
            document.getElementById("outlineWidthDiv").style.display = "block";
            document.getElementById("outlineBlurDiv").style.display = "block";
        }
    }
}

function matchColorToTextInput(inputChanged, inputToBeChanged) {
    inputToBeChanged.value = inputChanged.value;
}

function updatePixelLabel(inputChanged, labelToBeUpdated) {
    labelToBeUpdated.innerHTML = inputChanged.value + "px";
}

function applyChanges() {
    bodyColor = document.getElementById("bodyBgColorInput").value;
    fontFamily = document.getElementById("fontFamilySelect").value;
    currentContent = document.getElementById("contentTextarea").value;

    normalBgColor = document.getElementById("normalBgColorInput").value;
    normalFgColor = document.getElementById("normalFgColorInput").value;
    normalTextDecor = document.getElementById("normalTextDecorSelect").value;

    hoverBgColor = document.getElementById("hoverBgColorInput").value;
    hoverFgColor = document.getElementById("hoverFgColorInput").value;
    hoverTextDecor = document.getElementById("hoverTextDecorSelect").value;

    focusBgColor = document.getElementById("focusBgColorInput").value;
    focusFgColor = document.getElementById("focusFgColorInput").value;
    focusTextDecor = document.getElementById("focusTextDecorSelect").value;

    outlineColor = document.getElementById("outlineColorInput").value;
    outlineWidth = document.getElementById("outlineWidthInput").value;
    outlineBlur = document.getElementById("outlineBlurInput").value;

    makeChanges(this.selectedElement, bodyColor, fontFamily, currentContent, normalBgColor, normalFgColor, normalTextDecor, hoverBgColor, hoverFgColor, hoverTextDecor, focusBgColor, focusFgColor, focusTextDecor, outlineColor, outlineWidth, outlineBlur);
}

function makeChanges(element, bodyColor, fontFamily, currentContent, normalBgColor, normalFgColor, normalTextDecor, hoverBgColor, hoverFgColor, hoverTextDecor, focusBgColor, focusFgColor, focusTextDecor, outlineColor, outlineWidth, outlineBlur) {
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

    if (element.tagName == "BUTTON" || element.tagName == "A" || element.tagName == "INPUT") {
        if (element.tagName != "INPUT") {
            element.addEventListener("mouseover", function() {
                if (document.activeElement !== element) {
                    element.style.backgroundColor = hoverBgColor;
                    element.style.color = hoverFgColor;
                    element.style.textDecoration = hoverTextDecor;
                }
            });

            element.addEventListener("mouseout", function() {
                if (document.activeElement !== element) {
                    element.style.backgroundColor = normalBgColor;
                    element.style.color = normalFgColor;
                    element.style.textDecoration = normalTextDecor;
                }
            });
        }

        element.addEventListener("focus", function() {
            element.style.backgroundColor = focusBgColor;
            element.style.color = focusFgColor;
            element.style.textDecoration = focusTextDecor;

            element.style.boxShadow = "0 0 " + outlineBlur/16.0 + "rem " + outlineWidth /16.0 + "rem " + outlineColor;
        });

        element.addEventListener("blur", function() {
            element.style.backgroundColor = normalBgColor;
            element.style.color = normalFgColor;
            element.style.textDecoration = normalTextDecor;

            element.style.boxShadow = "none";
        });
    }
}