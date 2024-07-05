function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: [
      "Every night it’s the same dark dream. And it always ends with a scream",
    ],
    autoStart: true,
    delay: "natural",
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
