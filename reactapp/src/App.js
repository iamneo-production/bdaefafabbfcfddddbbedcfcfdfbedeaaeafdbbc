import { useState } from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import Banner from "./components/UI/Banner/Banner";
import "./style.css"

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

  const specialOpt = {
    option1: "Mahatma Gandhi",
    option2: "Jawarharlal Nehru",
    option3: "Donald Trump",
    option4: "Barack Obama",
  };

  const regularOpt = {
    option1: "Blue",
    option2: "Red",
    option3: "Yellow",
    option4: "Green",
  };

  const questions = [
    {
      question: "Who is the father of our nation?",
      answer: "Mahatma Gandhi",
      options: specialOpt,
    },
    {
      question: "What color is the leaves?",
      answer: "Green",
      options: regularOpt,
    },
    {
      question: "What color is the sky?",
      answer: "Blue",
      options: regularOpt,
    },
    {
      question: "What color is the sky?",
      answer: "Blue",
      options: regularOpt,
    },
    {
      question: "What color is the fire?",
      answer: "Red",
      options: regularOpt,
    },
  ];

  const handleResult = () => {
    setStart(true);
    setBanner(true);
    setCard(false);
    setResult(false);
  };

  return (
    <div className = "container">
      <div>
        <div className = "container">
          <h1>Quizz App</h1>
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
                options={q.options}
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

