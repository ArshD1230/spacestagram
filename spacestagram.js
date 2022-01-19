fetch(
  "https://api.nasa.gov/planetary/apod?count=25&api_key=daXh6fmK816WHCdfWAhh6LggzhFJnn1uOe2h3iJL",
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((data) => {
    let card = "";
    let id = 0;
    data.forEach((image) => {
      card = `
            <div id=${"image" + id} class="card" style="width: 25rem">
                <img src="${image.url}" class="card-img-top" alt="${image.title}" />
                <div class="card-body">
                    <h5 class="card-title">${image.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${image.date}</h6>
                </div>
                <img class="like-button" src="heart.png" />
            </div>`;
      document
        .querySelector(".image-cards")
        .insertAdjacentHTML("beforeend", card);
      id++;
    });
    document.querySelector(".text-center").style.display = "none";
  });


document.addEventListener("dblclick", function (e) {
  if (e.target.matches("img.card-img-top")) {
    const id = e.target.parentElement.id;
    let likeButton = document.querySelector("#" + id + " .like-button");
    if (likeButton.style.display === "none") {
      likeButton.style.display = "block";
    } else {
      likeButton.style.display = "none";
    }
  }
});
