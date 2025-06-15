
import React, { useState, useEffect } from 'react';
import { Brain, Clock, Trophy, RotateCcw, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  image?: string;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Which monument is known as the 'Symbol of Love'?",
    options: ["Red Fort", "Taj Mahal", "Qutub Minar", "India Gate"],
    correctAnswer: 1,
    explanation: "The Taj Mahal was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal."
  },
  {
    id: 2,
    question: "Which festival is known as the Festival of Lights?",
    options: ["Holi", "Diwali", "Dussehra", "Karva Chauth"],
    correctAnswer: 1,
    explanation: "Diwali celebrates the victory of light over darkness and good over evil."
  },
  {
    id: 3,
    question: "What is the classical dance form from Kerala?",
    options: ["Bharatanatyam", "Kathak", "Kathakali", "Odissi"],
    correctAnswer: 2,
    explanation: "Kathakali is a classical dance-drama from Kerala known for its elaborate costumes and makeup."
  },
  {
    id: 4,
    question: "Which spice is known as 'Black Gold' in Indian cooking?",
    options: ["Cardamom", "Saffron", "Black Pepper", "Cinnamon"],
    correctAnswer: 2,
    explanation: "Black pepper was historically so valuable it was called 'black gold' and used as currency."
  },
  {
    id: 5,
    question: "The Sun Temple is located in which city?",
    options: ["Bhubaneswar", "Konark", "Puri", "Cuttack"],
    correctAnswer: 1,
    explanation: "The Konark Sun Temple in Odisha is a 13th-century temple dedicated to the Sun God."
  }
];

interface HeritageQuizProps {
  onBack: () => void;
  onComplete: (score: number) => void;
}

const HeritageQuiz: React.FC<HeritageQuizProps> = ({ onBack, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    if (timeLeft > 0 && !showExplanation && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showExplanation) {
      handleTimeUp();
    }
  }, [timeLeft, showExplanation, gameOver]);

  const handleTimeUp = () => {
    setShowExplanation(true);
    setAnswers([...answers, -1]);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null || showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    setAnswers([...answers, answerIndex]);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 10);
    }
    
    setTimeout(() => {
      setShowExplanation(true);
    }, 500);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(30);
    } else {
      setGameOver(true);
      onComplete(score);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(30);
    setShowExplanation(false);
    setGameOver(false);
    setAnswers([]);
  };

  if (gameOver) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Trophy className="mx-auto mb-4 text-yellow-500" size={48} />
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-4xl font-bold text-green-600">{score}/50</div>
          <p className="text-gray-600">
            You scored {score} out of 50 points!
            {score >= 40 ? " Excellent knowledge!" : score >= 25 ? " Good job!" : " Keep learning!"}
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleRestart} className="bg-blue-500 hover:bg-blue-600">
              <RotateCcw className="mr-2 h-4 w-4" />
              Play Again
            </Button>
            <Button onClick={onBack} variant="outline">
              Back to Games
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Brain className="text-blue-600" size={24} />
              <span className="font-semibold">Heritage Quiz Master</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Trophy className="text-yellow-500" size={20} />
                <span className="font-bold">{score} pts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-red-500" size={20} />
                <span className={`font-bold ${timeLeft <= 5 ? 'text-red-500' : 'text-gray-700'}`}>
                  {timeLeft}s
                </span>
              </div>
              <div className="text-sm text-gray-500">
                {currentQuestion + 1} of {questions.length}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => {
              let buttonClass = "p-4 text-left border-2 rounded-lg transition-all duration-300 ";
              
              if (showExplanation) {
                if (index === question.correctAnswer) {
                  buttonClass += "border-green-500 bg-green-100 text-green-800";
                } else if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) {
                  buttonClass += "border-red-500 bg-red-100 text-red-800";
                } else {
                  buttonClass += "border-gray-300 bg-gray-50 text-gray-600";
                }
              } else {
                if (selectedAnswer === index) {
                  buttonClass += "border-blue-500 bg-blue-100 text-blue-800";
                } else {
                  buttonClass += "border-gray-300 hover:border-blue-300 hover:bg-blue-50";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={buttonClass}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Explanation:</h4>
              <p className="text-blue-700">{question.explanation}</p>
              <Button 
                onClick={handleNext}
                className="mt-4 bg-blue-600 hover:bg-blue-700"
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Button onClick={onBack} variant="outline">
        Back to Games
      </Button>
    </div>
  );
};

export default HeritageQuiz;
