import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import './styles.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: IconType;
  size?: 'md' | 'sm';
};
const Button: React.FC<Props> = ({
  icon: Icon,
  size = 'md',
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`button button-${size} ${Icon ? 'button-with-icon' : ''}`}
    >
      {Icon && <Icon className='button-icon' />}

      {children}
    </button>
  );
};

export default Button;
