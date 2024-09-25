// blog page
document.getElementById("blog-button").addEventListener("click", function () {
  const bButton = document.getElementById("blog-button");

  if (bButton.innerText === "Home") {
    document.getElementById("donation-section").classList.remove("hidden");
    document.getElementById("history-section").classList.remove("hidden");
    document.getElementById("combine-button").classList.remove("hidden");
    document.getElementById("blog-section").classList.add("hidden");
    document.getElementById("blog-button").innerText = "Blog";
    return;
  }

  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("combine-button").classList.add("hidden");
  document.getElementById("blog-section").classList.remove("hidden");
  document.getElementById("blog-button").innerText = "Home";
});
