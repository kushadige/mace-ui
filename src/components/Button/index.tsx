import React from 'react';
import './styles.scss';

interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    background?: string;
    color?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { children, background, color, style } = props;

    let _style: React.CSSProperties = style || {};

    if (background) _style.backgroundColor = background;
    if (color) _style.color = color;

    return (
        <button
            className="btn btn__primary"
            style={_style}
            {...props}>
            {children}
        </button>
    );
};

export default Button;
