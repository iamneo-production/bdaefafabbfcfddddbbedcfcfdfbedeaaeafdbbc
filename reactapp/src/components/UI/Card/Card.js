import { useState } from "react";
import Button from "../Button/Button";

const Card = ({
  question,
  correctAnswerMarkUpdate,
  attempt,
  options,
  answer,
  setQsns,
  qsn,
  setCard,
  qsnAttempt,
}) => {
  const optionsArray = [
    options.option1,
    options.option2,
    options.option3,
    options.option4,
  ];

  const [marked, setMarked] = useState(false);

  const click = (clicked) => {
    setQsns(qsn + 1);

    setMarked(true);
    if (qsnAttempt === 4) {
      setCard(true);
    }
    if (clicked === answer) correctAnswerMarkUpdate(attempt + 1);
  };

  return (
    <div>
      <h4>{question}</h4>
      <div>
        {optionsArray.map((option, index) => (
          <Button key={index} marked={marked} onClick={() => click(option)}>
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Card;