const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let screen = "0";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    
    if (value === "AC") {
      screen = "0";
    }


    else if (value === "=") {
      screen = screen
        .replace("x", "*")
        .replace("÷", "/")
        .replace("-", "-");
      screen = eval(screen).toString();
    }

    
    else if (value === "±") {
      screen = (parseFloat(screen) * -1).toString();
    }

    else if (value === "%") {
      screen = (parseFloat(screen) / 100).toString();
    }


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
