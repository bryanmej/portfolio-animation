import "./TextAnimation.scss";

const TextAnimation = ({ letterClass, strArray, idx }) => {
  console.log(strArray);
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default TextAnimation;
