import React from 'react';
import './styles.scss';
import { speedMap, speed } from './utils';

type size = 'xsmall' | 'small' | 'medium' | 'large' | 'huge' | 'responsive';

interface SpinnerProps {
    background?: string;
    color?: string;
    size?: size;
    speed?: speed;
    style: React.CSSProperties;
}

interface CSSPropertiesWithVars extends React.CSSProperties {
    '--color'?: string;
    '--speed'?: string;
}

const Spinner: React.FC<SpinnerProps> = (props) => {
    const {
        background,
        color,
        size = 'medium',
        speed = 'normal',
        style,
    } = props;

    let _style: CSSPropertiesWithVars = style || {};

    if (color) _style['--color'] = color;
    if (speed) _style['--speed'] = speedMap(speed);

    return (
        <div
            className={`spinner--${size}`}
            style={{
                backgroundColor: background && background,
                ..._style,
            }}>
            <div className="cross">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
            </div>
            <div className="cross">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
            </div>
        </div>
    );
};

export default Spinner;
