import React, { useEffect, useState } from "react";
import "./styles.scss";

type option = {
    value: string;
    label: string;
}

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

interface CSSPropertiesWithVars extends React.CSSProperties {
    "--background"?: string;
    "--labelColor"?: string;
    "--textColor"?: string;
    "--borderColor"?: string;
    "--borderRadius"?: string;
    "--selectedOptionColor"?: string;
    "--optionBackground"?: string;
    "--optionBackgroundOnHover"?: string;
    "--optionBackgroundOnSelected"?: string;
    "--optionTextColor"?: string;
    "--width"?: string;
}

const Select: React.FC<SelectProps> = (props) => {
    const {
        label = "",
        background = "transparent",
        labelColor = "#F6F6F6",
        textColor = "#FFFFFF",
        borderColor = "#3A3A3A",
        borderRadius = "0px",
        optionBackground = "#333333",
        optionBackgroundOnHover = "#444444",
        optionBackgroundOnSelected = "#3366FF",
        optionTextColor = "#FFFFFF",
        width = "100px",
        options = [],
        onChange
    } = props;

    let _style: CSSPropertiesWithVars = {};

    if (background)                 _style["--background"]                 = background;
    if (labelColor)                 _style["--labelColor"]                 = labelColor;
    if (textColor)                  _style["--textColor"]                  = textColor;
    if (borderColor)                _style["--borderColor"]                = borderColor;
    if (borderRadius)               _style["--borderRadius"]               = borderRadius;
    if (optionBackground)           _style["--optionBackground"]           = optionBackground;
    if (optionBackgroundOnHover)    _style["--optionBackgroundOnHover"]    = optionBackgroundOnHover;
    if (optionBackgroundOnSelected) _style["--optionBackgroundOnSelected"] = optionBackgroundOnSelected;
    if (optionTextColor)            _style["--optionTextColor"]            = optionTextColor;
    if (width)                      _style["--width"]                      = width;

    const [selectedOption, setSelectedOption] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    useEffect(() => {
        if(onChange) {
            onChange(selectedOption);
        }
      }, [selectedOption]);

    const handleDropdownClick = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleOptionClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement;
        setSelectedOption(target.dataset.value!);
    };

    return (
        <fieldset onClick={handleDropdownClick} className='fieldset' style={_style}>
            {/* LEGEND */}
            {label && (
                <legend className={`legend ${selectedOption ? "legend--active" : ""}`}>{label}</legend>
            )}
            {/* SELECTED OPTION */}
            <div className="selected-option">
                <span>{selectedOption}</span>
            </div>
            {/* DROPDOWN OPTIONS */}
            <div className={`dropdown ${isDropdownOpen ? "dropdown--active" : ""}`}>
                {options.length > 0 && (
                    <div
                        className={`option ${!selectedOption ? "option--selected" : ""}`}
                        data-value=''
                        onClick={handleOptionClick}
                    >
                        <span>-</span>
                    </div>
                )}
                {options.map((option, idx) => (
                    <div
                        key={idx}
                        className={`option ${selectedOption === option.value ? "option--selected" : ""}`}
                        data-value={option.value}
                        onClick={handleOptionClick}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </fieldset>
    );
};

export default Select;
