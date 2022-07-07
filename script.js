//create table of all elements with class button
const buttons = Array.from(document.querySelectorAll(".btn"));

let counter = localStorage.getItem("counter") || 0; //if there is null in the local storage set it as 0
document.querySelector(".counter-value").innerText = counter;

//for each element of the table
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //ned to read about eventListener
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
      case "save":
        localStorage.setItem("counter", counter);
        break;
      case "load":
        counter = localStorage.getItem("counter") || 0;
        break;
      case "clear":
        localStorage.clear();
        counter = 0;
        break;
    }
    //send value to HTML
    document.querySelector(".counter-value").innerText = counter;

    console.log(document.querySelector(".counter-value").innerText);
  });
});
