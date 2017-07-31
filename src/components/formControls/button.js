import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({message}) => {
  const sayHello = (event) => {
    console.log(event.target); /* eslint no-console: 0 */
  };

  return (
    <a onClick={sayHello} className="f6 link  br1 ba ph3 pv2 mb2 white bg-dark-blue ">
      {message}
    </a>
  );
};

Button.propTypes = {
  message: PropTypes.string
};

export default Button;
