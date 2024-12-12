import React from 'react';
import { Link } from 'react-router-dom';
import quizPageStyle from '../QuizPageStyle';
import questions from '../data/basic_questions.json';
import my_state from './my_state'; // Import the global state instance

class Quiz extends React.Component {
  state = {
    selectedAnswers: {}, // Tracks selected answers
  };

  handleAnswer = (questionId, isCorrect) => {
    this.setState((prevState) => {
      const updatedAnswers = { ...prevState.selectedAnswers, [questionId]: isCorrect };

      // Update global state
      my_state.my_score = Object.values(updatedAnswers).filter(Boolean).length;
      my_state.my_count = Object.keys(updatedAnswers).length;

      return {
        selectedAnswers: updatedAnswers,
      };
    });
  };

  render() {
    return (
      <div style={quizPageStyle}>
        <h1>{'Quiz Time!'}</h1>
        <h2>Answer the questions below:</h2>
        {questions.map((question) => (
          <div key={question.id}>
            <h3>{question.question}</h3>
            {question.answers.map((answer, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    onChange={() => this.handleAnswer(question.id, Object.values(answer)[0])}
                  />
                  {Object.keys(answer)[0]}
                </label>
              </div>
            ))}
          </div>
        ))}
        <br />
        <Link to="/Score">
          <button>View Score</button>
        </Link>
      </div>
    );
  }
}

export default Quiz;
