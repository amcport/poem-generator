function displayPoem(response) {
  console.log("Poem Generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  //build the API url
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "125tac3dbf039f4792fboc362eea73ef";
  let context =
    "You are a dark romance poet and love to write short poems- Your mission is to generate a 4 line poem in basic html format. make sure the contnt of the poem is always black in color. Include a title for the poem and always put it in a <strong> element and has a text size of 22px. Sign the poem with ' - your romantic AI poet' and always put the signature inside an <italic> element and the signature is pink in color. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}. Please behave.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  //make the call to the API
  console.log("Generating Poem");
  //Display generated poem
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
