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

window.addEventListener("DOMContentLoaded", () => {
  console.error(
    `%c
███████╗████████╗ ██████╗ ██████╗ ██╗
██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██║
███████╗   ██║   ██║   ██║██████╔╝██║
╚════██║   ██║   ██║   ██║██╔═══╝ ╚═╝
███████║   ██║   ╚██████╔╝██║     ██╗
╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝`,
    "color: #ff4a4a;"
  );
  console.warn(
    "Warning: With great power comes great responsibility. Please proceed cautiously and ensure that no suspicious or unauthorized code is being executed. Always verify the source of any scripts and avoid injecting untrusted content into the application to maintain its security and integrity."
  );
});

window.addEventListener("DOMContentLoaded", () => {
  const spliceDataInp =
    "10 95 95 95 95 95 95 95 95 32 32 32 32 32 32 32 32 32 32 32 32 32 32 95 95 95 95 95 95 32 32 32 32 32 32 32 32 32 13 10 95 95 95 32 32 95 95 32 92 92 95 95 95 95 95 95 95 95 95 95 32 32 95 95 95 95 32 32 47 95 95 95 95 95 95 95 32 95 13 10 95 95 32 32 47 32 47 32 47 95 32 32 95 95 95 47 32 32 47 32 47 32 47 95 32 32 95 95 32 92 92 32 32 95 95 32 92 96 47 13 10 95 32 32 47 95 47 32 47 95 32 32 47 32 32 32 47 32 47 95 47 32 47 95 32 32 47 95 47 32 47 32 47 95 47 32 47 32 13 10 47 95 95 95 95 95 47 32 47 95 47 32 32 32 32 92 92 95 95 44 95 47 32 47 95 46 95 95 95 47 92 92 95 95 44 95 47 32 10 10 42 32 65 117 116 104 111 114 58 32 68 114 117 98 97 106 121 111 116 105 32 68 101 98 110 97 116 104 13 10 42 32 67 114 101 97 116 101 100 32 79 110 58 32 50 48 50 53 45 48 49 45 50 52 13 10 42 32 76 97 115 116 32 77 111 100 105 102 105 101 100 32 66 121 58 32 83 97 109 101 32 97 115 32 97 117 116 104 111 114 13 10 42 32 76 97 115 116 32 77 111 100 105 102 105 101 100 32 79 110 58 32 50 48 50 53 45 48 49 45 50 55 13 10 42 32 68 101 115 99 114 105 112 116 105 111 110 58 32 73 39 109 32 97 32 102 105 110 97 108 32 121 101 97 114 32 115 116 117 100 101 110 116 32 111 102 32 77 82 73 73 82 83 32 115 101 101 107 105 110 103 32 106 111 98 32 97 115 32 97 32 83 111 102 116 119 97 114 101 32 69 110 103 105 110 101 101 114 44 32 73 32 104 97 118 101 32 98 101 101 110 32 119 111 114 107 105 110 103 32 111 110 32 119 101 98 32 100 101 118 101 108 111 112 109 101 110 116 32 115 105 110 99 101 32 50 48 49 57 46 32 84 104 105 115 32 112 114 111 106 101 99 116 32 105 115 32 99 114 101 97 116 101 100 32 116 111 32 115 104 111 119 99 97 115 101 32 116 104 101 32 107 110 111 119 108 101 100 103 101 115 32 116 104 97 116 32 73 32 104 97 118 101 32 97 110 100 32 116 104 105 115 32 102 105 108 101 32 109 105 103 104 116 32 98 101 32 99 111 112 105 101 100 32 97 110 100 32 97 108 116 101 114 101 100 32 116 104 117 115 32 116 104 105 115 32 99 114 121 112 116 105 99 32 109 101 115 115 97 103 101 32 105 115 32 98 101 105 110 103 32 119 114 105 116 116 101 110 46 32 80 108 101 97 115 101 32 102 101 101 108 32 102 114 101 101 32 116 111 32 114 101 97 99 104 32 109 101 32 111 117 116 32 105 110 32 109 121 32 119 101 98 115 105 116 101 46 13 10 42 32 86 101 114 115 105 111 110 58 32 68 101 118 101 108 111 112 109 101 110 116 32 86 101 114 115 105 111 110 32 49 46 48 13 10 42 32 76 105 99 101 110 115 101 58 32 70 114 101 101 32 111 102 32 99 111 112 121 114 105 103 104 116 115 13 10 42 32 67 111 110 116 97 99 116 58 32 104 116 116 112 115 58 47 47 117 110 107 110 111 119 110 48 48 57 100 46 103 105 116 104 117 98 46 105 111 32 124 32 43 57 49 32 55 48 56 53 55 53 57 53 56 50 10";
  const outputBuffer = spliceDataInp
    .split(" ")
    .map((hex) => String.fromCharCode(parseInt(hex)))
    .join("");
  const metaNode = document.createComment(outputBuffer);
  const rootNode = document.documentElement;
  setTimeout(() => {
    rootNode.insertBefore(metaNode, rootNode.firstChild);
  }, 5000);
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const color = isDarkMode ? "#252529" : "#FFFFFF";
  setTimeout(() => {
    console.log(
      "%c" + outputBuffer,
      `font-family: monospace; color: ${color};`
    );
  }, 10000);
});
