import { useRef } from "react";
import "./ProjectsPage.scss";

const ProjectsPage = () => {
  const carouselElem = useRef(null);
  const cells = window.document.querySelectorAll("carousel__cell");

  console.log(cells);
  return (
    <div>
      <div className="scene">
        <div ref={carouselElem} className="carousel">
          <div className="carousel__cell">1</div>
          <div className="carousel__cell">2</div>
          <div className="carousel__cell">3</div>
          <div className="carousel__cell">4</div>
          <div className="carousel__cell">5</div>
          <div className="carousel__cell">6</div>
          <div className="carousel__cell">7</div>
          <div className="carousel__cell">8</div>
          <div className="carousel__cell">9</div>
        </div>
      </div>
      <p>
        <button className="previous-button">Previous</button>
        <button className="next-button">Next</button>
      </p>
    </div>
  );
};

export default ProjectsPage;
