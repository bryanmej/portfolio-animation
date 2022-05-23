import "./ProjectsPage.scss";
import { useCallback, useEffect, useRef, useState } from "react";

const ProjectsPage = () => {
  const [cellWidth, setCellWidth] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [radius, setRadius] = useState();

  const carousel = useRef();
  const theta = 360 / 9;
  const rotateFn = "rotateY";
  const cellsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const cellDivs = cellsArr.map((el) => (
    <div key={el} className="carousel__cell">
      {el}
    </div>
  ));

  const rotateCarousel = useCallback(() => {
    var angle = theta * selectedIndex * -1;

    carousel.current.style.transform =
      "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
  }, [selectedIndex, radius, theta]);

  const changeCarousel = useCallback(() => {
    const cellCount = 9;
    var cellSize = cellWidth;
    setRadius(Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount)));

    rotateCarousel();
  }, [rotateCarousel, cellWidth]);

  useEffect(() => {
    setCellWidth(carousel.current.offsetWidth);

    changeCarousel();
  }, [cellWidth, changeCarousel]);

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
