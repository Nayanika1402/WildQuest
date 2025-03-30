import React, { useState, useRef } from 'react';
import { data } from '../../assets/data/data';
import bgImage from '../../assets/images/WildLife1.jpg'; // Import your background image

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add('bg-green-500', 'text-white', 'scale-105');
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add('bg-red-500', 'text-white', 'shake');
        option_array[question.ans - 1].current.classList.add('bg-green-500', 'text-white', 'scale-105');
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex(index + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      option_array.forEach((option) => {
        option.current.classList.remove('bg-red-500', 'bg-green-500', 'text-white', 'scale-105', 'shake');
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-lg bg-white text-black shadow-2xl rounded-xl p-8 bg-opacity-95 backdrop-blur-md border-2 border-purple-500">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 drop-shadow-lg">🦁 Jungle Jumble 🦁</h1>
        <hr className="my-4 border-purple-400" />
        
        {result ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-purple-700">You Scored {score} out of {data.length}</h2>
            <button 
              onClick={reset} 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">{index + 1}. {question.question}</h2>
            <ul className="space-y-3">
              <li ref={Option1} onClick={(e) => checkAns(e, 1)} className="bg-gray-200 text-black p-4 rounded-lg cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105 shadow-md">
                {question.option1}
              </li>
              <li ref={Option2} onClick={(e) => checkAns(e, 2)} className="bg-gray-200 text-black p-4 rounded-lg cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105 shadow-md">
                {question.option2}
              </li>
              <li ref={Option3} onClick={(e) => checkAns(e, 3)} className="bg-gray-200 text-black p-4 rounded-lg cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105 shadow-md">
                {question.option3}
              </li>
              <li ref={Option4} onClick={(e) => checkAns(e, 4)} className="bg-gray-200 text-black p-4 rounded-lg cursor-pointer hover:bg-gray-300 transition-transform transform hover:scale-105 shadow-md">
                {question.option4}
              </li>
            </ul>

            <button 
              onClick={next} 
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md w-full"
            >
              Next Question
            </button>

            <div className="mt-3 text-gray-600 text-sm text-center font-semibold">{index + 1} of {data.length} questions</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
