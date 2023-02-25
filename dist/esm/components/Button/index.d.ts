import React from 'react';
import './styles.scss';
interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    background?: string;
    color?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
