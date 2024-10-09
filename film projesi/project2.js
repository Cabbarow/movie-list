const filmisimelement = document.getElementById("title");
const yonetmenelement = document.getElementById("director");
const gorselelement = document.getElementById("url");
const form = document.getElementById("film-form");
const temizle = document.querySelectorAll(".btn")[0];

class Film {
  constructor(isim, yonetmen, gorsel) {
    this.isim = isim;
    this.yonetmen = yonetmen;
    this.gorsel = gorsel;
  }
}

class UI {
  constructor() {}
  arayuzeekle(yenifilm) {
    const filmlistesi = document.getElementById("films");
    filmlistesi.innerHTML += `<tr>
  <td><img src="${yenifilm.gorsel}" class="img-fluid img-thumbnail"></td>
  <td>${yenifilm.isim}</td>
  <td>${yenifilm.yonetmen}</td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>`;
  }
  //input temizleme
  inputTemizle(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }
}
const arayuz = new UI();
//event listeners
eventListeners();
function eventListeners() {
  form.addEventListener("submit", calistir);
}

function calistir(e) {
  const isim = filmisimelement.value;
  const yonetmen = yonetmenelement.value;
  const gorsel = gorselelement.value;

  if (isim === "" || yonetmen === "" || gorsel === "") {
    //hata
  } else {
    //işlem
    const yenifilm = new Film(isim, yonetmen, gorsel);
    arayuz.arayuzeekle(yenifilm);
  }
  arayuz.inputTemizle(filmisimelement, yonetmenelement, gorselelement);
  e.preventDefault();
}
