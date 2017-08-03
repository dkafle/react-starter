import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({label}) => {
  const sayHello = (event) => {
    console.log(event.target); /* eslint no-console: 0 */
  };

  return (
    <button onClick={sayHello} className="f6 link  br1 ba ph3 pv2 mb2 yellow b--yellow bw1 bg-dark-blue ">
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string
};

export default Button;
