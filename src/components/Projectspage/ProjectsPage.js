import "./ProjectsPage.scss";
import { useEffect, useRef, useState } from "react";

const ProjectsPage = () => {
  const [cellWidth, setCellWidth] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [radius, setRadius] = useState();
  const [cells, setCells] = useState();
  const carousel = useRef();
  const theta = 360 / 9;
  const rotateFn = "rotateY";
  const cellsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const cellDivs = cellsArr.map((el) => (
    <div key={el} className="carousel__cell">
      {el}
    </div>
  ));

  useEffect(() => {
    setCellWidth(carousel.current.offsetWidth);
    setCells(window.document.querySelectorAll(".carousel__cell"));
    changeCarousel();
  }, [cellWidth, changeCarousel]);

  function rotateCarousel() {
    var angle = theta * selectedIndex * -1;

    carousel.current.style.transform =
      "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
  }

  function changeCarousel() {
    const cellCount = 9;
    var cellSize = cellWidth;
    setRadius(Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount)));
    // for (var i = 0; i < cells.length; i++) {
    //   var cell = cells[i];
    //   if (i < cellCount) {
    //     // visible cell
    //     cell.style.opacity = 1;
    //     var cellAngle = theta * i;
    //     cell.style.transform =
    //       rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
    //   } else {
    //     // hidden cell
    //     cell.style.opacity = 0;
    //     cell.style.transform = "none";
    //   }
    // }

    rotateCarousel();
  }

  return (
    <div>
      <div>
        <div className="scene">
          <div ref={carousel} className="carousel">
            {cellDivs}
          </div>
        </div>
        <p>
          <button
            onClick={() =>
              setSelectedIndex(selectedIndex - 1, rotateCarousel())
            }
            className="previous-button"
          >
            Previous
          </button>
          <button
            onClick={() => {
              setSelectedIndex(selectedIndex + 1);
              rotateCarousel();
            }}
            className="next-button"
          >
            Next
          </button>
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
