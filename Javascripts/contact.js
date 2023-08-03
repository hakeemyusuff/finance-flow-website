const buttons = document.querySelectorAll(".btn");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    const extension = document.createElement("p");
    extension.setAttribute("class", "extend");
    extension.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas.";
    const question = button.closest(".question");
    if (question.children.length > 1) {
      button.setAttribute("aria-expanded", false);
      question.removeChild(document.querySelector(".extend"));
      console.log(question);
    } else {
      button.setAttribute("aria-expanded", true);
      question.insertBefore(
        extension,
        question.querySelector(".question-header").nextSibling
      );
    }
  });
}

//redirect all buttons to error page when clicked
const butons = document.querySelectorAll(".button");
for (let button of butons) {
  button.addEventListener("click", () => {
    window.location.href = "error.html";
  });
}
