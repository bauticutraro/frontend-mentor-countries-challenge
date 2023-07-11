import React from 'react';
import { IconType } from 'react-icons';
import './styles.scss';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconType;
};

const Input: React.FC<Props> = ({ icon: Icon, ...inputProps }) => {
  return (
    <label className='label'>
      {Icon && <Icon size={20} className='input-icon' />}
      <input
        className={`input ${Icon ? 'input-with-icon' : ''}`}
        {...inputProps}
      />
    </label>
  );
};

export default Input;
