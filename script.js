let sideLength = 16;
let drawColor = "black";
let mode = "default";
const container = document.querySelector(".container");
const dimensionButton = document.querySelector("#dimension-button");

const makePixels = () => {
  const pixel = document.createElement("div");
  pixel.setAttribute(
    "style",
    `height:${800 / sideLength}px; width: ${
      800 / sideLength
    }px; background-color: whitesmoke;`
  );
  pixel.setAttribute("class", "pixels");
  return pixel;
};

const fillContainerWithPixels = (sideLength, makePixels) => {
  for (i = 0; i < sideLength * sideLength; i++) {
    container.appendChild(makePixels.cloneNode());
  }
  addListenersToPixels();
};

const addListenersToPixels = () => {
  let isDrawing = false;
  const pixels = document.getElementsByClassName("pixels");
  for (item of pixels) {
    item.addEventListener("mousedown", (e) => {
      isDrawing = true;
      if (mode == "default") {
        e.target.style.backgroundColor = drawColor;
      } else if (mode == "rainbow") {
        e.target.style.backgroundColor = `#${Math.floor(
          Math.random() * 16777215
        ).toString(16)}`;
      } else {
        e.target.style.backgroundColor = "whitesmoke";
      }
    });
    item.addEventListener("mouseenter", (e) => {
      if (isDrawing) {
        if (mode == "default") {
          e.target.style.backgroundColor = drawColor;
        } else if (mode == "rainbow") {
          e.target.style.backgroundColor = `#${Math.floor(
            Math.random() * 16777215
          ).toString(16)}`;
        } else {
          e.target.style.backgroundColor = "whitesmoke";
        }
      }
    });
    item.addEventListener("mouseup", () => {
      isDrawing = false;
    });
  }
};

// const changeColor = (e) => {
//   e.target.style.backgroundColor = "purple";
// };

// const addHoverListenerToPixels = () => {
//   const pixels = document.getElementsByClassName("pixels");
//   for (item of pixels) {
//     item.addEventListener("mouseover", changeColor);
//   }
// };

const clearContainer = () => {
  container.replaceChildren();
};

const showPrompt = () => {
  sideLength = Number(window.prompt("Enter dimensions (max 100)"));
  if (isNaN(sideLength)) {
    return showPrompt();
  }

  if (sideLength > 100 || sideLength === 0) {
    return showPrompt();
  }
  changeDimensions();
};

const changeDimensions = () => {
  clearContainer();
  fillContainerWithPixels(sideLength, makePixels());
};

dimensionButton.addEventListener("click", showPrompt);

const input = document.querySelector("input");
const randomColorButton = document.querySelector("#randomColor");
const eraseButton = document.querySelector("#erase");
const clear = document.querySelector("#clear");

randomColorButton.addEventListener("click", () => (mode = "rainbow"));
eraseButton.addEventListener("click", () => (mode = "erase"));
clear.addEventListener("click", () => handleClear());

const handleClear = () => {
  return clearContainer(), fillContainerWithPixels(sideLength, makePixels());
};
input.addEventListener("change", (e) => {
  mode = "default";
  drawColor = e.target.value;
});

fillContainerWithPixels(sideLength, makePixels());
