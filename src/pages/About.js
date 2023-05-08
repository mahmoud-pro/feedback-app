import React from 'react';
import Card from '../components/Card/Card';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This a React app to leave a feedback for a product service.</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
