
var wrapper;

const handleIntersect = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.opacity = entry.intersectionRatio;
  });
}

const createObserver = () => {
  var observer;
  var options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
  }
  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(wrapper);
}

window.addEventListener("load", event => {
  wrapper = document.getElementById('moviesWrapper');
  createObserver();
},
false);
