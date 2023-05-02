import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

export const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet.</p>;
  }
  return (
    <AnimatePresence>
      <div className="feedback-list">
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 1 }}
            animate={{ apacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              deleteHandler={handleDelete}
            />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
