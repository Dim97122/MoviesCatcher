var numSteps = 20.0;

var wrapper;
var prevRatio = 0.0;
var increasingColor = "rgba(40, 40, 190, ratio)";
var decreasingColor = "rgba(190, 40, 40, ratio)";

const buildThresholdList = () => {
  var thresholds = [];
  for (var i=1.0; i<=numSteps; i++) {
    var ratio = i/numSteps;
    thresholds.push(ratio);
  }
  thresholds.push(0);
  return thresholds;
}

const handleIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }
    prevRatio = entry.intersectionRatio;
  });
}

const createObserver = () => {
  var observer;
  var options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  }
  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(wrapper);
}

document.addEventListener("scroll", event => {
  wrapper = document.getElementById('moviesWrapper');
  createObserver();
},
false);
