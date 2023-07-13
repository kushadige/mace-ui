import React from "react";
import "./styles.scss";
type option = {
    value: string;
    label: string;
};
interface SelectProps {
    label?: boolean;
    background?: string;
    labelColor?: string;
    textColor?: string;
    borderColor?: string;
    borderRadius?: string;
    selectedOptionColor?: string;
    optionBackground?: string;
    optionBackgroundOnHover?: string;
    optionBackgroundOnSelected?: string;
    optionTextColor?: string;
    width?: string;
    options?: Array<option>;
    onChange?: (currentOption: string) => {};
}
declare const Select: React.FC<SelectProps>;
export default Select;
