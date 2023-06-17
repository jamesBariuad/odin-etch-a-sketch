let sideLength = 16;
const container = document.querySelector(".container");
const dimensionButton = document.querySelector("#dimension-button");

const makePixels = () => {
  const pixel = document.createElement("div");
  pixel.setAttribute(
    "style",
    `height:${800 / sideLength}px; width: ${
      800 / sideLength
    }px; background-color: black;`
  );
  pixel.setAttribute("class", "pixels");
  return pixel;
};

const fillContainerWithSquares = (sideLength, makePixels) => {
  for (i = 0; i < sideLength * sideLength; i++) {
    container.appendChild(makePixels.cloneNode());
  }
  addHoverListenerToSquares();
};

const changeColor = (e) => {
  e.target.style.backgroundColor = "purple";
};

const addHoverListenerToSquares = () => {
  const pixels = document.getElementsByClassName("pixels");
  for (item of pixels) {
    item.addEventListener("mouseover", changeColor);
  }
};

const clearContainer = () => {
  container.replaceChildren();
};

const showPrompt = () => {
  sideLength = Number(window.prompt("Enter dimensions (max 100)"));
  if (isNaN(sideLength)) {
    return showPrompt();
  }

  if (sideLength > 100 || sideLength===0) {
    return showPrompt();
  }

  

  changeDimensions();
};

const changeDimensions = () => {
  clearContainer();
  fillContainerWithSquares(sideLength, makePixels());
};

dimensionButton.addEventListener("click", showPrompt);

fillContainerWithSquares(sideLength, makePixels());
