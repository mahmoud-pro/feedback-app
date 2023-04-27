import React, { useState } from 'react';
import Card from '../Card/Card';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  return (
    <Card>
      <form>
        <h2>How would you rate service with us?</h2>
        <div className="input-group">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            name="review"
            value={text}
            placeholder="Write a review"
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
