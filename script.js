// Search Function

const searchBox = document.getElementById("searchBox");

if (searchBox) {
  searchBox.addEventListener("keyup", function () {
    let value = searchBox.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
      let text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Welcome Message

window.onload = function () {
  console.log("Welcome to Mechanical Notes Hub");
};
