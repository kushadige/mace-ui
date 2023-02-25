import React from 'react';
import './styles.scss';
import { speed } from './utils';
type size = 'xsmall' | 'small' | 'medium' | 'large' | 'huge' | 'responsive';
interface SpinnerProps {
    background?: string;
    color?: string;
    size?: size;
    speed?: speed;
    style: React.CSSProperties;
}
declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;
