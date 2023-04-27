import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className, reverse }) => {
  return (
    <div className={`card ${className} ${reverse && 'reverse'}`}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;
