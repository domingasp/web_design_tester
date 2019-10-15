var selectedElement = document.getElementsByClassName("div-main__div-output__header__menu__li__a--company")[0];

function getEventTarget(e) {
    e = e || window.event;

    selectedElement = e.target || e.srcElement;
    document.getElementById("currentlySelectedP").innerHTML = "Currently Selected: " + selectedElement.id;
    document.getElementById("currentTextInput").value = selectedElement.innerText;
}

function applyChanges(elem, bgColor, fgColor, bgHoverColor, fgHoverColor, bgFocusColor, fgFocusColor, textDecor, textDecorHover, textDecorFocus, focusOutlineColor, focusOutlineWidth, focusOutlineBlur, newFontFamily, newText) {
    elem.style.backgroundColor = bgColor;
    elem.style.color = fgColor;
    elem.style.textDecoration = textDecor;

    elem.style.fontFamily = newFontFamily;

    if (elem.tagName != "INPUT" && elem.tagName != "UL") {
        if (newText.length > 0) {
            elem.innerHTML = newText;
        }
    }

    if (elem.tagName == "BUTTON" || elem.tagName == "A" || elem.tagName == "INPUT") {

        document.getElementById(document.getElementById("currentlySelectedP").innerHTML.substring(20)).addEventListener("mouseover", function() {

            if (this !== document.activeElement) {
                this.style.backgroundColor = bgHoverColor;
                this.style.color = fgHoverColor;
                this.style.textDecoration = textDecorHover;
            }
        });

        document.getElementById(document.getElementById("currentlySelectedP").innerHTML.substring(20)).addEventListener("mouseout", function() {
            if (this !== document.activeElement) {
                this.style.backgroundColor = bgColor;
                this.style.color = fgColor;
                this.style.textDecoration = textDecor;
            }
        });

        document.getElementById(document.getElementById("currentlySelectedP").innerHTML.substring(20)).addEventListener("focus", function() {
            this.style.backgroundColor = bgFocusColor;
            this.style.color = fgFocusColor;
            this.style.textDecoration = textDecorFocus;

            this.style["boxShadow"] = "0 0 " + focusOutlineBlur + "rem " + focusOutlineWidth + "rem " + focusOutlineColor;
            this.style["outline"] = "none";
        });

        document.getElementById(document.getElementById("currentlySelectedP").innerHTML.substring(20)).addEventListener("blur", function() {
            this.style.backgroundColor = bgColor;
            this.style.color = fgColor;
            this.style.textDecoration = textDecor;

            this.style["boxShadow"] = "none";
        });
    }
}

function changeBgColorTextField(inputField) {
    colorInput = document.getElementById("bgColorInput");
    colorTextInput = document.getElementById("bgColorTextInput");

    colorInput.value = inputField.value;
    colorTextInput.value = inputField.value;
}

function changeFgColorTextField(inputField) {
    colorInput = document.getElementById("fgColorInput");
    colorTextInput = document.getElementById("fgColorTextInput");

    colorInput.value = inputField.value;
    colorTextInput.value = inputField.value;
}

function changeBgHoverColorTextField(inputField) {
    colorInput = document.getElementById("bgHoverColorInput");
    colorTextInput = document.getElementById("bgHoverColorTextInput");

    colorInput.value = inputField.value;
    colorTextInput.value = inputField.value;
}

function changeFgHoverColorTextField(inputField) {
    colorInput = document.getElementById("fgHoverColorInput");
    colorTextInput = document.getElementById("fgHoverColorTextInput");

    colorInput.value = inputField.value;
    colorTextInput.value = inputField.value;
}

function changeBgFocusColorTextField(inputField) {
    colorInput = document.getElementById("bgFocusColorInput");
    colorTextInput = document.getElementById("bgFocusColorTextInput");

    colorInput.value = inputField.value;
    colorTextInput.value = inputField.value;
}

function changeFgFocusColorTextField(inputField) {
    colorInput = document.getElementById("fgFocusColorInput");
    colorTextInput = document.getElementById("fgFocusColorTextInput");

    colorInput.value = inputField.value;
    colorTextInput.value = inputField.value;
}

function changeFocusOutlineColorTextField(inputField) {
    colorInput = document.getElementById("focusOutlineColorInput");
    colorTextInput = document.getElementById("focusOutlineColorTextInput");

    colorInput.value = inputField.value;
    colorTextInput.value = inputField.value;
}