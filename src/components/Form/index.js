import React from 'react';

const Input = ({
  placeholder, type, name, onChange, value
}) => (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
    />
);

export default Input;
