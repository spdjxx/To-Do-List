console.log("Connected");

//inputTextAndStuff //camel case
// input_text_goes_here //snake case
// input-text-goes-here //kebab case

const addItem = (event) => {
    // console.log("Button clicked");
    const inputBox = document.getElementById("inputtedText");
    const value = inputBox.value;

    const listUl = document.getElementById("listItems");
    listUl.innerHTML = listUl.innerHTML + "<li>" + value + "</li>";

    inputBox.value = "";
    inputBox.focus();
};

const keyPressed = (event) => {
    console.log(event);
    if (event.key === "Enter") {
        addItem();
    }
};
