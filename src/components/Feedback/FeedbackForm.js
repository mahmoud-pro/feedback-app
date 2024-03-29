import React, { useState, useContext, useEffect } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import SelectRating from '../Rating/SelectRating';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackForm = () => {
  const { addFeedBack, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const textHandler = (event) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 char.');
      setBtnDisabled(true);
    } else {
      setMessage(false);
      setBtnDisabled(false);
    }

    setText(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedBack(newFeedback);
      }
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate service with us?</h2>
        <SelectRating select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={textHandler}
            type="text"
            name="review"
            value={text}
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
