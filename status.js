document.addEventListener("DOMContentLoaded", function () {
  const navPlaceholder = document.getElementById("placeholder");

  if (!navPlaceholder) {
    console.error("Nav placeholder not found.");
    return;
  }

  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      navPlaceholder.innerHTML = data;
    })
    .catch(error => console.error("Failed to load navigation:", error));
});
