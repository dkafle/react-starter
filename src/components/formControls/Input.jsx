import React from 'react';
import PropTypes from 'prop-types';

const Input = ({label, name, inputValue, placeholder}) => {
  return(
    <div className="input-group mb2 w-100">
      <div className="label">{label}</div>
      <input className="w-100 h2" name={name} value={inputValue} placeholder={placeholder} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  placeholder: PropTypes.string
};

export default Input;
