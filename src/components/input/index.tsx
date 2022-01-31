import React, { InputHTMLAttributes } from 'react';
import './styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  label: string;
}

const Input: React.FC<Props> = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${otherProps.value ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
