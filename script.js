let sideLength = 100;
const container = document.querySelector(".container");

const makePixels = () => {
  const pixel = document.createElement("div");
  pixel.setAttribute(
    "style",
    `height:${800 / sideLength}px; width: ${
      800 / sideLength
    }px; background-color: black;`
  );
  pixel.setAttribute("class", "pixels");
  return pixel
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

const dimensionButton = document.querySelector("#dimension-button");

// const handleDimensionButtonClick = () =>{
//   sideLength= Number(prompt("Enter length of side in pixels (max 100)"))
//   if (sideLength>100){
//     return handleDimensionButtonClick
//   }

//   return makeSquares(sideLength)
// }
