// congrats for close
document
  .getElementById("close-congrats")
  .addEventListener("click", function () {
    getValueById("congrats-section", "removeClass", "flex");
    getValueById("congrats-section", "addClass", "hidden");
  });
