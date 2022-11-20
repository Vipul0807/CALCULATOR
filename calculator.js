let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "clear") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "answer") {
      screen.value = eval(screenValue);
    } else if (buttonText == "sqrt") {
      screen.value = screenValue ** 0.5;
    } else if (buttonText == "del") {
      screen.value = screenValue.slice(0, -1);
    } else if (buttonText == "^") {
      sccreen.value = screenValue ** 2;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
