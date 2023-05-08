import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import FeedbackList from './components/Feedback/FeedbackList';
import FeedbackStats from './components/Feedback/FeedbackStats';
import FeedbackForm from './components/Feedback/FeedbackForm';
import About from './pages/About';
import AboutIcon from './components/AboutIcon/AboutIcon';
import FeedbackProvider from './context/FeedbackProvider';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
