const addToCart = (e) => {
  const noi = e.previousElementSibling; // number of items element
  const removeBtn = noi.previousElementSibling; // remove button
  noi.classList.remove("hidden");
  removeBtn.classList.remove("hidden");
  const numofItems = noi.innerText;
  noi.innerText = parseInt(numofItems) + 1;
};
const removeFromCart = (e) => {
  const noi = e.nextElementSibling; // number of items element
  const numofItems = noi.innerText;
  // if the count is 0 then the removefromcart will not be shown
  if (parseInt(numofItems) - 1 == 0) {
    noi.classList.add("hidden");
    e.classList.add("hidden");
  }
  if (parseInt(numofItems) > 0) noi.innerText = parseInt(numofItems) - 1;
};

// For video in about section
const video = document.getElementById("aboutVideo");
const playButton = document.getElementById("playButton");

video.addEventListener("play", () => {
  playButton.classList.add("hidden");
});

video.addEventListener("pause", () => {
  playButton.classList.remove("hidden");
});

video.addEventListener("ended", () => {
  playButton.classList.remove("hidden");
});

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playButton.classList.add("hidden");
  } else {
    video.pause();
    playButton.classList.remove("hidden");
  }
});

document.getElementById("frmSearch").addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target.txtSearch.value.trim();
  window.location.href = `?q=${encodeURIComponent(query)}`;
});

const openModel = (model) => {
  const modelToShow = document.getElementById(model);
  if (modelToShow != undefined) {
    document.querySelector("body").classList.add("model-open");
    modelToShow.classList.add("mshow");
  } else {
    console.error("There exist no model to show...");
    document.querySelector("body").classList.remove("model-open");
  }
};

const closeModel = () => {
  document.querySelector("body").classList.remove("model-open");
  document.getElementById("model-container").childNodes.forEach((d) => {
    if (d.classList != undefined) {
      d.classList.remove("mshow");
    }
  });
};
