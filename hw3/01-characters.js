// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

fetch(url);

const characterFlex = document.getElementById("charcter-items");
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((c) => {
        let characterCard = document.createElement("div");
        characterCard.id = "thrones-characters";
        characterCard.classList = "col p-2 bg-transparent border-0 mx-auto";

        let characterImageDiv = document.createElement("div");
        characterImageDiv.classList = "row h-75";

        let characterImage = document.createElement('img');
        characterImage.id = "thrones-img";
        characterImage.classList = "h-100";
        characterImage.alt = "image";
        characterImage.src = c['imageUrl'];

        characterImageDiv.appendChild(characterImage);
        characterCard.appendChild(characterImageDiv);

        let characterDetails = document.createElement("div");
        characterDetails.classList = "row h-25 text-center p-2 mx-auto";

        let characterNameTitleDiv = document.createElement("div");
        characterNameTitleDiv.classList = "col";

        let characterName = document.createElement('p');
        characterName.classList = "fw-bold mx-auto mb-0";
        characterName.style = "font-size: 0.9rem;";
        characterName.textContent(c["fullName"]);
        characterName.id = "character-name";

        characterNameTitleDiv.appendChild(characterName);

        let characterTitle = document.createElement('p');
        characterTitle.id = "character-title";
        characterTitle.classList = "fw-bold mx-auto mb-0";
        characterTitle.style = "font-size: 0.6rem;";
        characterTitle.textContent(c["title"]);

        characterNameTitleDiv.appendChild(characterTitle);

        characterDetails.appendChild(characterNameTitleDiv);

        characterCard.appendChild(characterDetails);

        characterFlex.appendChild(characterCard);
    })
  })
  .catch((error) => console.error(error));