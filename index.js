const BASE_URL = "https://rickandmortyapi.com/api/";
let pageNumber = 1;

async function getCharacter() {
  let response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageNumber}`
  );

  let data = await response.json();

  const { results } = data;
  const locationElement = document.getElementById("characters");

  results.map((result) => {
    const { gender, image, name, species, status } = result;

    const dataTemplate = `           
        <div class="card">
        <div class="card-container">
            <h4 class="card-heading">${name}</h4>
            <p class="card-info">
                ${gender} - ${species} - ${status}        
                <span class="dot"></span>
            </p>
            </div>
            <img class="card-image" src="${image}" alt="${name}">
        </div>          
    `;

    locationElement.insertAdjacentHTML("beforeend", dataTemplate);
  });

  const cardInfo = document.querySelectorAll(".card-info");
  const cardInfoArr = Array.from(cardInfo);

  cardInfoArr.forEach((element) => {
    const elementText = element.textContent;

    if (elementText.includes("Alive")) {
      element.firstElementChild.classList.add("dot--green");
    } else if (elementText.includes("Dead")) {
      element.firstElementChild.classList.add("dot--red");
    } else {
      return;
    }
  });
}

getCharacter();

const moreButton = document.getElementById("more");

moreButton.addEventListener("click", (e) => {
  e.preventDefault();
  pageNumber++;
  getCharacter();
});
