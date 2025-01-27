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

/* DO NOT TOUCH AFTER THIS LINE. IT WILL BREAK THE ENTIRE CODE IF ALTERED */

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
const _0x1785c5=_0x532a;function _0x532a(_0x213afb,_0x29089f){const _0x149021=_0x1490();return _0x532a=function(_0x532ae8,_0x542a2a){_0x532ae8=_0x532ae8-0x18a;let _0x50238e=_0x149021[_0x532ae8];return _0x50238e;},_0x532a(_0x213afb,_0x29089f);}function _0x1490(){const _0x260eef=['7688978vmXvJJ','11769xPdMfi','1ODFobG','10uoGjNw','1919900AKRBXS','458505orbGcZ','68\x20114\x20117\x2098\x2097','428ksPNTi','91959OEUVIV','755052jjGMUC','innerHTML','12UsAndv','72WCLyJS','DOMContentLoaded','546074MzNAAB','body','addEventListener','\x0a\x20\x20\x20\x20<div\x20style=\x27display:\x20flex;justify-content:center;align-items:center;min-height:\x20100vh;\x27>\x0a\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:#ff4a4a;font-family:\x20monospace;padding:\x202rem;\x22>⚠️\x20The\x20document\x20has\x20been\x20altered.\x20Please\x20restore\x20to\x20visit\x20the\x20site.</p>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20'];_0x1490=function(){return _0x260eef;};return _0x1490();}(function(_0x53324f,_0x2bf7ee){const _0x2a3049=_0x532a,_0x33b112=_0x53324f();while(!![]){try{const _0x815ded=-parseInt(_0x2a3049(0x196))/0x1*(parseInt(_0x2a3049(0x190))/0x2)+parseInt(_0x2a3049(0x195))/0x3*(-parseInt(_0x2a3049(0x19b))/0x4)+parseInt(_0x2a3049(0x197))/0x5*(parseInt(_0x2a3049(0x18b))/0x6)+-parseInt(_0x2a3049(0x18a))/0x7*(-parseInt(_0x2a3049(0x18e))/0x8)+parseInt(_0x2a3049(0x199))/0x9+-parseInt(_0x2a3049(0x198))/0xa+-parseInt(_0x2a3049(0x194))/0xb*(-parseInt(_0x2a3049(0x18d))/0xc);if(_0x815ded===_0x2bf7ee)break;else _0x33b112['push'](_0x33b112['shift']());}catch(_0xef1b0f){_0x33b112['push'](_0x33b112['shift']());}}}(_0x1490,0x39640),window[_0x1785c5(0x192)](_0x1785c5(0x18f),()=>{setTimeout(()=>{const _0x37b78e=_0x532a,_0x56efcd=_0x37b78e(0x193);try{if(_KXIAP!=_0x37b78e(0x19a))document[_0x37b78e(0x191)]['innerHTML']=_0x56efcd;}catch(_0xe649a8){document[_0x37b78e(0x191)][_0x37b78e(0x18c)]=_0x56efcd;}},0x7d0);}));

/* DO NOT TOUCH BEFORE THIS LINE. IT WILL BREAK THE ENTIRE CODE IF ALTERED */
