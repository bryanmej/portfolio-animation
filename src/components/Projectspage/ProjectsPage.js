import "./ProjectsPage.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import TextAnimation from "../TextAnimation/TextAnimation";

const ProjectsPage = () => {
  const [cellWidth, setCellWidth] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [radius, setRadius] = useState();

  const carousel = useRef();

  const cellsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const projectsArr = ["P", "r", "o", "j", "e", "c", "t", "s"];

  const rotateCarousel = useCallback(() => {
    const theta = 360 / 9;
    let angle = theta * selectedIndex * -1;

    carousel.current.style.transform =
      "translateZ(" + -radius + "px) rotateY(" + angle + "deg)";
  }, [selectedIndex, radius]);

  const changeCarousel = useCallback(() => {
    const cellCount = 9;
    setRadius(Math.round(cellWidth / 2 / Math.tan(Math.PI / cellCount)));

    rotateCarousel();
  }, [rotateCarousel, cellWidth]);

  useEffect(() => {
    setCellWidth(carousel.current.offsetWidth);

    changeCarousel();
  }, [cellWidth, changeCarousel]);

  return (
    <div className="container">
      <div className="text-zone">
        <h2>
          <TextAnimation
            letterClass={"text-animate"}
            idx={15}
            strArray={projectsArr}
          />
        </h2>
      </div>

      <div className="scene">
        <div ref={carousel} className="carousel">
          {cellsArr.map((el) => (
            <div key={el} className="carousel__cell">
              {el}
            </div>
          ))}
        </div>
      </div>
      <p>
        <button
          onClick={() => setSelectedIndex(selectedIndex - 1, rotateCarousel())}
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
  );
};

export default ProjectsPage;
