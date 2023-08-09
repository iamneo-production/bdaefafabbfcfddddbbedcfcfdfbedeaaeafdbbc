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

  const cardStyle = {
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#FFDAB9", 
    borderRadius: "10px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    width: "500px",
  };

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
    <div style = {cardStyle}>
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
