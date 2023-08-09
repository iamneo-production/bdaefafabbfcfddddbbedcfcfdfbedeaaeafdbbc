import { useState } from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import Banner from "./components/UI/Banner/Banner";

function App() {
  const [start, setStart] = useState(true);
  const [attempt, correctAnswerMarkUpdate] = useState(0);
  const [qsnAttempt, setqsnAttempt] = useState(0);
  const [card, setCard] = useState(false);
  const [result, setResult] = useState(false);
  const [banner, setBanner] = useState(false);

  const handleStart = () => {
    setStart(false);
    setCard(true);
    correctAnswerMarkUpdate(0);
    setqsnAttempt(0);
    setBanner(false);
  };

  const opt = {
    option1: "Blue",
    option2: "Red",
    option3: "Yellow",
    option4: "Green",
  };

  const questions = [
    { question: "Who is the father of our nation?", answer: "Green" },
    { question: "What color is are the leaves?", answer: "Green" },
    { question: "What color is the sky?", answer: "Blue" },
    { question: "What color is the sky?", answer: "Blue" },
    { question: "What color is the fire?", answer: "Red" },
  ];

  const handleResult = () => {
    setStart(true);
    setBanner(true);
    setCard(false);
    setResult(false);
  };

  return (
    <div>
      <div>
        <div>
          <h1>Quiz App</h1>
        </div>

        {banner && <Banner score={attempt} />}
        {card && (
          <div>
            {" "}
            {questions.map((q, index) => (
              <Card
                key={index}
                question={q.question}
                correctAnswerMarkUpdate={correctAnswerMarkUpdate}
                attempt={attempt}
                options={opt}
                answer={q.answer}
                setQsns={setqsnAttempt}
                qsn={qsnAttempt}
                setCard={setResult}
                qsnAttempt={qsnAttempt}
              />
            ))}
          </div>
        )}
        {result && <Button onClick={handleResult}>Show Results</Button>}
        {start && <Button onClick={handleStart}>Start Quiz</Button>}
      </div>
    </div>
  );
}

export default App;
