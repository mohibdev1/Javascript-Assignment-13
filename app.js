const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let screen = "0";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    // Clear
    if (value === "AC") {
      screen = "0";
    }

    // Equal
    else if (value === "=") {
      screen = screen
        .replace("×", "*")
        .replace("÷", "/")
        .replace("−", "-");
      screen = eval(screen).toString();
    }

    // Plus Minus
    else if (value === "±") {
      screen = (parseFloat(screen) * -1).toString();
    }

    // Percentage
    else if (value === "%") {
      screen = (parseFloat(screen) / 100).toString();
    }

    // Numbers & Operators
    else {
      if (screen === "0") {
        screen = value;
      } else {
        screen += value;
      }
    }

    display.innerText = screen;
  });
});
