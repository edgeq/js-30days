// Get Elements
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");

// Build Functions
/**
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
 */
function togglePlay() {
  video.paused ? video.play() : video.pause();
}
function updateButton() {
  const icon = video.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;

  // // video.paused ? console.log("Paused") : console.log("Playing");
}

function skip() {
  // console.log(this.dataset);
  const playTime = this.dataset.skip;
  video.currentTime += parseFloat(playTime);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
// Event Listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(btn => btn.addEventListener("click", skip));
ranges.forEach(slider => slider.addEventListener("change", handleRangeUpdate));
video.addEventListener("timeupdate", handleProgress);
// review this stuff again
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", e => {
  mousedown && scrub(e);
});
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
