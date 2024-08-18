import React from "react";

const QuiseCards = ({
  question,
  options,
  optionLabels,
  onOptionClick,
  questionNumber,
  selectedOption,
  onNext,
}) => {
  const optionImages = [
    "https://plus.unsplash.com/premium_photo-1723741320347-bf8a65518f8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image for option A
    "https://plus.unsplash.com/premium_photo-1723741320347-bf8a65518f8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image for option B
    "https://plus.unsplash.com/premium_photo-1723741320347-bf8a65518f8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image for option C
    "https://plus.unsplash.com/premium_photo-1723741320347-bf8a65518f8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image for option D
    "https://plus.unsplash.com/premium_photo-1723741320347-bf8a65518f8e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image for option E
  ];

  return (
    <div className="flex flex-col items-center justify-between gap-8 p-6 border rounded-lg shadow-lg bg-white w-full max-w-md">
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-xl font-bold mb-2">Question {questionNumber}:</h2>
        <p className="text-md text-gray-700">{question}</p>
      </div>
      <ul className="flex flex-col items-center gap-4 w-full">
        {options && options.length > 0 ? (
          options.map((option, index) => (
            <li key={index} className="w-full">
              <button
                className={`flex items-center w-full p-3 rounded transition duration-300 ${
                  selectedOption === option
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                onClick={() => onOptionClick(option)}
                disabled={!!selectedOption}
              >
                <img
                  src={optionImages[index]}
                  alt={`Option ${optionLabels[index]}`}
                  className="w-8 h-8 mr-3 rounded-full"
                />
                <span>
                  {optionLabels[index]}. {option}
                </span>
              </button>
            </li>
          ))
        ) : (
          <li>No options available</li>
        )}
      </ul>
      {selectedOption && (
        <button
          className="next-button mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          onClick={onNext}
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default QuiseCards;
