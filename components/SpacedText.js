const SpacedText = ({ text, classes }) => {
  const splitText = text.split("");

  return (
    <div className={`flex justify-between w-full  ${classes}`}>
      {splitText.map((letter, index) => {
        let output;
        letter === " "
          ? (output = String.fromCharCode(160))
          : (output = letter);
        return <span key={index}>{output}</span>;
      })}
    </div>
  );
};

export default SpacedText;
