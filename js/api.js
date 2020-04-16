
const populateHTML = (array) => {
  wrapper = document.getElementById('moviesWrapper')
  count = document.getElementById('moviesCount')
  if (array == undefined) {
    count.innerHTML += `<div>Aucun film ne semble correspondre au nom que vous avez tapé...</div>`
  }
  count.innerHTML += `<div class= "mb-3">Nous avons trouvé <span class="font-weight-bold text-primary">${array.length}</span> films qui correspondent à votre recherche !</div>`
  for (var i = 0; i < array.length; i++) {
    wrapper.classList.add("border", "rounded")
    wrapper.innerHTML += `
      <div class="card px-0 my-3 mx-2 col-lg-3">
        <img class="card-img-top" src="${array[i].Poster}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${array[i].Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Sorti en ${array[i].Year}</h6>
          <a href="#" class="btn btn-outline-primary mt-4">En savoir plus</a>
        </div>
    </div>
    `;
  }
}

const retrieveMovies = () => {
  wrapper = document.getElementById('moviesWrapper')
  count = document.getElementById('moviesCount')
  wrapper.classList.remove("border", "rounded")
  wrapper.innerHTML = "";
  count.innerHTML = "";
  let movie = document.getElementsByTagName('input')[0].value
  console.log(movie);
  fetch(`http://www.omdbapi.com/?s=${movie}&apikey=ae02254d`)
  .then((response) => response.json())
  .then((response2) => populateHTML(response2.Search))
}

const button = document.getElementsByClassName('btn')[0]
button.addEventListener("click", retrieveMovies)
