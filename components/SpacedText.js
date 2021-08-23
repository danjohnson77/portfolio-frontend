const SpacedText = ({
  text,
  classes,
  animateClass = "",
  alternateAnimation = null,
}) => {
  const splitText = text.split("");
  const isOdd = (num) => {
    return num % 2;
  };
  return (
    <div className={`flex justify-between w-full ${classes}`}>
      {splitText.map((letter, index) => {
        let output;
        let cssClass = animateClass;
        if (alternateAnimation && isOdd(index)) {
          cssClass = `${animateClass}-alt`;
        }
        letter === " "
          ? (output = String.fromCharCode(160))
          : (output = letter);
        return (
          <span key={index} className={cssClass}>
            {output}
          </span>
        );
      })}
    </div>
  );
};

export default SpacedText;
