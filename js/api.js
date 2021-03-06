
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
          <a id="myBtn" class="btn btn-outline-primary mt-4">En savoir plus</a>
        </div>
      </div>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>${array[i].Title}</p>
        </div>
      </div>
    `;
  }
}

const getModal = () => {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  btn.addEventListener("click", event => {
    modal.style.display = "block";
  })
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

const retrieveMovies = () => {
  wrapper = document.getElementById('moviesWrapper')
  count = document.getElementById('moviesCount')
  wrapper.classList.remove("border", "rounded")
  wrapper.innerHTML = "";
  count.innerHTML = "";
  let movie = document.getElementById('movieTitle').value
  fetch(`http://www.omdbapi.com/?s=${movie}&apikey=ae02254d`)
  .then((response) => response.json())
  .then((response2) => populateHTML(response2.Search))
  .then((response3) => getModal())
}

const button = document.getElementsByClassName('btn-primary')[0]
button.addEventListener("click", retrieveMovies)
