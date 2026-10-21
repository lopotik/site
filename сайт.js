const nameInput= document.querySelector("#visitor-name");
const joinButton = document.querySelector("#join-button");
const message = document.querySelector("#message");

function showMessage() {
  const name = nameInput.value.trim();
  message.textContent = name + ", рады видеть вас в клубе!";
}

joinButton.addEventListener("click", showMessage);