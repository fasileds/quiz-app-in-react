import React, { useState, useEffect } from "react";
import QuiseCards from "./components/QuiseCards";

const questions = [
  {
    question: "What is the capital city of Ethiopia?",
    options: ["Addis Ababa", "Asmara", "Nairobi", "Djibouti"],
    answer: "Addis Ababa",
  },
  {
    question:
      "Which ancient civilization is known to have existed in Ethiopia?",
    options: [
      "Roman Empire",
      "Kingdom of Axum",
      "Persian Empire",
      "Byzantine Empire",
    ],
    answer: "Kingdom of Axum",
  },
  {
    question: "What is the official language of Ethiopia?",
    options: ["Amharic", "Oromo", "Tigrinya", "English"],
    answer: "Amharic",
  },
  {
    question:
      "Which famous Ethiopian dish is made from injera and various stews?",
    options: ["Samosa", "Doro Wat", "Tacos", "Sushi"],
    answer: "Doro Wat",
  },
  {
    question: "Which river is the longest river in Ethiopia?",
    options: ["Blue Nile", "Awash", "Omo", "Tekeze"],
    answer: "Blue Nile",
  },
  {
    question: "Ethiopia is the origin of which famous coffee variety?",
    options: ["Arabica", "Robusta", "Liberica", "Excelsa"],
    answer: "Arabica",
  },
  {
    question:
      "In which year did Ethiopia successfully resist colonization by Italy?",
    options: ["1896", "1935", "1941", "1974"],
    answer: "1896",
  },
  {
    question: "What is the name of the traditional Ethiopian clothing?",
    options: ["Kimono", "Kilt", "Habesha Kemis", "Sari"],
    answer: "Habesha Kemis",
  },
  {
    question: "Which mountain range is located in Ethiopia?",
    options: ["Andes", "Himalayas", "Simien Mountains", "Rocky Mountains"],
    answer: "Simien Mountains",
  },
  {
    question: "What is the currency used in Ethiopia?",
    options: ["Birr", "Shilling", "Franc", "Dollar"],
    answer: "Birr",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const optionLabels = ["A", "B", "C", "D"];

  useEffect(() => {
    const startTime = Date.now();
    return () => {
      const endTime = Date.now();
      setTimeTaken(endTime - startTime);
    };
  }, [isFinished]);

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleBackClick = () => {
    setIsFinished(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
  };

  // Calculate minutes, seconds, and microseconds
  const totalMilliseconds = timeTaken;
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const microseconds = Math.floor((totalMilliseconds % 1000) * 1000);

  if (isFinished) {
    return (
      <div className="result-container text-center p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-600">
          Your Score: {score}/{questions.length}
        </h2>
        <p className="text-lg text-gray-700 mt-2">
          Time Taken: {minutes} minutes, {seconds} seconds, and {microseconds}{" "}
          microseconds
        </p>
        <button
          className="back-button mt-6 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleBackClick}
        >
          Back to Questions
        </button>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="quiz-container flex flex-col items-center justify-center w-full h-full p-6 bg-gray-50 rounded-lg shadow-md">
      {currentQuestionData ? (
        <QuiseCards
          question={currentQuestionData.question}
          options={currentQuestionData.options}
          optionLabels={optionLabels}
          onOptionClick={handleAnswerOptionClick}
          questionNumber={currentQuestion + 1}
          selectedOption={selectedOption}
          onNext={handleNextQuestion}
        />
      ) : (
        <div>No question available</div>
      )}
    </div>
  );
};

export default Quiz;
