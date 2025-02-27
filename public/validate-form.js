(() => {
  const userInputField = document.querySelector("#username");
  const messageInputField = document.querySelector("#text");

  document.querySelector("form").addEventListener("submit", (event) => {
    if (!userInputField.value.trim() || !messageInputField.value.trim()) {
      event.preventDefault();

      if (!userInputField.value.trim()) {
        document.querySelector(".r1").style.visibility = "visible";
      }

      if (!messageInputField.value.trim()) {
        document.querySelector(".r2").style.visibility = "visible";
      }
    }
  });
})();
