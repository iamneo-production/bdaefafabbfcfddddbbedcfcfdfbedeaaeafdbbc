import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import Banner from "./components/UI/Banner/Banner";

function App() {
  const [quizStarted, setQuizStarted] = useState(true);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [questionAttemptCount, setQuestionAttemptCount] = useState(0);
  const [isCardVisible, setCardVisible] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isBannerVisible, setBannerVisible] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(false);
    setCardVisible(true);
    setCorrectAnswerCount(0);
    setQuestionAttemptCount(0);
    setBannerVisible(false);
  };

  const options = {
    option1: "Blue",
    option2: "Red",
    option3: "Yellow",
    option4: "Green",
  };

  const quizQuestions = [
    { question: "Who is the father of our nation?", answer: "Green" },
    { question: "What color are the leaves?", answer: "Green" },
    { question: "What color is the sky?", answer: "Blue" },
    { question: "What color is the sky?", answer: "Blue" },
    { question: "What color is fire?", answer: "Red" },
  ];

  const handleShowResults = () => {
    setQuizStarted(true);
    setBannerVisible(true);
    setCardVisible(false);
    setShowResults(false);
  };

  return (
    <div>
      <div>
        <div>
          <h1>Quiz App</h1>
          <i>learn react</i>
        </div>

        {isBannerVisible && <Banner score={correctAnswerCount} />}
        {isCardVisible && (
          <div>
            {quizQuestions.map((question, index) => (
              <Card
                key={index}
                question={question.question}
                correctAnswerMarkUpdate={setCorrectAnswerCount}
                correctAnswerCount={correctAnswerCount}
                options={options}
                correctAnswer={question.answer}
                setQuestionAttemptCount={setQuestionAttemptCount}
                questionAttemptCount={questionAttemptCount}
                setShowResults={setShowResults}
                isQuestionAttempted={questionAttemptCount}
              />
            ))}
          </div>
        )}
        {showResults && <Button onClick={handleShowResults}>Show Results</Button>}
        {quizStarted && <Button onClick={handleStartQuiz}>Start Quiz</Button>}
      </div>
    </div>
  );
}

export default App;
