// for get Value By ID
function getValueById(id, type, className) {
  const element = document.getElementById(id);

  if (type === "innerText") {
    return parseFloat(element.innerText);
  } else if (type === "value") {
    return parseFloat(element.value);
  } else if (type === "removeClass") {
    element.classList.remove(className);
  } else if (type === "addClass") {
    element.classList.add(className);
  } else {
    return element;
  }
}

// for donation card
function updateToDonationCart(inputID, totalID, headingID) {
  const total = getValueById(totalID, "innerText");
  let input = getValueById(inputID, "value");

  const selfAmount = getValueById("myAmount", "innerText");

  if (selfAmount < input) {
    return alert("Please, add money. and try again.");
  }

  if (input > 0) {
    const updatedDonationAmount = input + total;

    getValueById(totalID).innerText = updatedDonationAmount;

    getValueById(inputID).value = "";
    getValueById("congrats-section", "removeClass", "hidden");
    getValueById("congrats-section", "addClass", "flex");

    const myAmount = getValueById("myAmount", "innerText");

    const currentBalance = myAmount - input;

    getValueById("myAmount").innerText = currentBalance;

    const history = document.createElement("div");
    history.innerHTML = `
  <div class="p-7 mb-5 border rounded-xl">
    <h4 class="font-bold text-lg mb-2 text-neutral-900">
      ${input} Taka is Donated for ${
      document.getElementById(headingID).innerText
    }
    </h4>
    <p class="font-light text-gray-500">
      Date : ${new Date()}
    </p>
  </div>
`;

    document.getElementById("history-section").prepend(history);
  } else {
    return alert("input invalid");
  }
}
