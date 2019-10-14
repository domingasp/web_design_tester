var selectedElement = document.getElementsByClassName("div-main__div-output__header__menu__li__a--company")[0];

function getEventTarget(e) {
    e = e || window.event;

    selectedElement = e.target || e.srcElement;
    document.getElementById("currentlySelectedP").innerHTML = "Currently Selected: " +  "Tag:" + selectedElement.tagName + " Content:" + selectedElement.innerText.substring(0, 8) + "...";
}

function applyChanges() {
    bgColor = document.getElementById("bgColorInput").value;
    fgColor = document.getElementById("fgColorInput").value;

    bgHoverColor = document.getElementById("bgHoverColorInput").value;
    fgHoverColor = document.getElementById("fgHoverColorInput").value;

    bgFocusColor = document.getElementById("bgFocusColorInput").value;
    fgFocusColor = document.getElementById("fgFocusColorInput").value;

    textDecor = document.getElementById("textDecor").value;
    textDecorHover = document.getElementById("textDecorHover").value;
    textDecorFocus = document.getElementById("textDecorFocus").value;

    focusOutlineColor = document.getElementById("focusOutlineColorInput").value;
    focusOutlineWidth = document.getElementById("focusOutlineWidthInput").value + "rem";
    focusOutlineBlur = document.getElementById("focusOutlineBlurInput").value + "rem";

    newFontFamily = document.getElementById("fontFamilySelect").value;

    selectedElement.style.backgroundColor = bgColor;
    selectedElement.style.color = fgColor;
    selectedElement.style.textDecoration = textDecor;

    selectedElement.style.fontFamily = newFontFamily;

    if (selectedElement.tagName == "BUTTON" || selectedElement.tagName == "A" || selectedElement.tagName == "INPUT") {
        elementToApplyFunctionsTo = selectedElement;

        elementToApplyFunctionsTo.addEventListener("mouseover", function() {
            if (this != document.activeElement) {
                this.style.backgroundColor = bgHoverColor;
                this.style.color = fgHoverColor;
                this.style.textDecoration = textDecorHover;
            }
        });

        elementToApplyFunctionsTo.addEventListener("mouseout", function() {
            if (this != document.activeElement) {
                this.style.backgroundColor = bgColor;
                this.style.color = fgColor;
                this.style.textDecoration = textDecor;
            }
        });

        elementToApplyFunctionsTo.addEventListener("focus", function() {
            this.style.backgroundColor = bgFocusColor;
            this.style.color = fgFocusColor;
            this.style.textDecoration = textDecorFocus;

            this.style["boxShadow"] = "0 0 " + focusOutlineBlur + " " + focusOutlineWidth + " " + focusOutlineColor;
            this.style["outline"] = "none";
        });

        elementToApplyFunctionsTo.addEventListener("blur", function() {
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