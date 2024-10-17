const botonPelicula = document.querySelector("#botonPelicula");
const url = "https://private.omdbapi.com/?apikey=bef9c583&t=";

botonPelicula.addEventListener("click", function () {
  const inputPelicula = document.querySelector("input").value;
  fetch(url + inputPelicula)
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (infoPelicula) {
      document.querySelector("#ocultar").style.display = "block";
      document.querySelector("#principal").style.display = "none";
      document.querySelector("#title").textContent = infoPelicula.Title;
      document.querySelector("#director").textContent =
        "Director: " + infoPelicula.Director;
      document.querySelector("#plot").textContent = infoPelicula.Plot;
      document.querySelector("#actors").textContent = infoPelicula.Actors;
      document.querySelector("#country").textContent = infoPelicula.Country;
      document.querySelector("#awards").textContent = infoPelicula.Awards;

      const listaRatings = document.querySelector("ul");
      let liRating = "";
      for (const rating of infoPelicula.Ratings) {
        liRating += "<li>" + rating.Source + " - " + rating.Value + "</li>";
      }
      listaRatings.innerHTML = "";
      listaRatings.insertAdjacentHTML("beforeend", `${liRating}`);
      const imagen = document.querySelector("#imagen");
      imagen.innerHTML = "";
      imagen.insertAdjacentHTML(
        "beforeend",
        `<img src="${infoPelicula.Poster}" alt="Foto">`
      );
    });
});
