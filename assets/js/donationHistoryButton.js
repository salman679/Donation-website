// donation-history button
document
  .getElementById("history-button")
  .addEventListener("click", function () {
    getValueById("donation-section", "addClass", "hidden");
    getValueById("donation-button", "addClass", "bg-white");
    getValueById("history-section", "removeClass", "hidden");
    getValueById("history-button", "removeClass", "bg-transparent");
    getValueById("history-button", "addClass", "bg-lime-300");
  });

document
  .getElementById("donation-button")
  .addEventListener("click", function () {
    getValueById("donation-section", "removeClass", "hidden");
    getValueById("donation-button", "removeClass", "bg-white");
    getValueById("donation-button", "addClass", "bg-lime-300");
    getValueById("history-section", "addClass", "hidden");
    getValueById("history-button", "removeClass", "bg-lime-300");
    getValueById("history-button", "addClass", "bg-transparent");
  });
