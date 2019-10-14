var selectedElement = document.body

function getEventTarget(e) {
    e = e || window.event;

    selectedElement = e.target || e.srcElement;
    document.getElementById("currentlySelectedP").innerHTML = "Currently Selected: " +  "Tag:" + selectedElement.tagName + " Content:" + selectedElement.innerText.substring(0, 8) + "...";
}

function applyChanges() {
    bgColor = document.getElementById("bgColorInput").value;
    fgColor = document.getElementById("fgColorInput").value

    selectedElement.style.backgroundColor = bgColor;
    selectedElement.style.color = fgColor;
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