// @ts-nocheck
const kits = ["Sanre", "Crash", "Kick", "Tom"];
const containerEl = document.querySelector(".container");
kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = `url('image/${kit}.png'), url('image/${kit}.jpg')`;

  containerEl.appendChild(btnEl);

  const audioEl = document.createElement("audio");
  audioEl.src = "audio/" + kit + ".mp3";
  containerEl.appendChild(audioEl);

  btnEl.addEventListener("click", () => {
    audioEl.play();
  });

  window.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(.9)";

      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
