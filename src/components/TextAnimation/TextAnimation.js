import "./TextAnimation.scss";

const TextAnimation = ({ letterClass, strArray, idx }) => (
  <span>
    {strArray.map((char, i) => (
      <span></span>
    ))}
  </span>
);

export default TextAnimation;
