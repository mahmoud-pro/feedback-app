import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header';
import FeedbackList from './components/Feedback/FeedbackList';
import FeedbackStats from './components/Feedback/FeedbackStats';
import FeedbackForm from './components/Feedback/FeedbackForm';
import feedbackData from './data/feedbackData';

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedBack = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedBack} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
