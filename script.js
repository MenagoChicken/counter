const buttons = Array.from(document.querySelectorAll(".btn"));

let counter = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.getAttribute("id");
    console.log(type);

    switch (type) {
      case "increase":
        counter++;
        break;
      case "decrease":
        counter--;
        break;
      case "reset":
        counter = 0;
        break;
    }
    document.querySelector(".counter-value").innerText = counter;
    console.log(document.querySelector(".counter-value").innerText);
  });
});
