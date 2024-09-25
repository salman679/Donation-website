// first donation card
document
  .getElementById("donateForNoakhali")
  .addEventListener("click", function () {
    updateToDonationCart(
      "inputDonateForNoakhali",
      "totalDonated",
      "headingForNoakhali"
    );
  });

// second donation card
document.getElementById("donate-button").addEventListener("click", function () {
  updateToDonationCart(
    "donate-input",
    "totalAmountOfDonation",
    "headingForNoakhali"
  );
});

// third donation card
document
  .getElementById("donateForQuota")
  .addEventListener("click", function () {
    updateToDonationCart(
      "inputDonateForQuota",
      "totalDonateForQuota",
      "headingForQuota"
    );
  });
