const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];

// UI Objesini başlatalım
const ui = new UI();

// Storage Objesi Üret
const storage = new Storage();

//Tüm eventleri yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);

  document.addEventListener("DOMContentLoaded", function () {
    let films = storage.getFilmFromStorage();
    ui.loadAllFilms(films);
  });

  cardbody.addEventListener("click", deleteFilm);
}
function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    //Hata
    ui.displayMessages("Tüm Alanları Doldurun...", "danger");
  } else {
    //yeni film
    const newFilm = new Film(title, director, url);

    ui.addFilmToUI(newFilm); //ara yüze film ekleme
    storage.addFilmToStorage(newFilm); //Storage'a film ekleme
    ui.displayMessages("Film Başarıyla Eklendi...", "success");
  }

  ui.clearInputs(titleElement, urlElement, directorElement);

  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    ui.deleteFilmFromUI(e.target);
  }
}
