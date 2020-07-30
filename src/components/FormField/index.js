import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, type, value, name, onChange,
}) {
  return (
    <div>
      <label>
        {label}
        :
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.prototype = {
  label: PropTypes.string,
};
export default FormField;
