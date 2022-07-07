const buttons = Array.from(document.querySelectorAll(".btn"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.getAttribute("id");
    console.log(type);
  });
});
