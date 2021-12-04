import React from "react";

export const DropdownItem = ({itemText}) => {
    return (
        <li className="dropdowns__item">
            <label className="dropdowns__control">
                <div className="dropdowns__checkbox-pair">
                    <input type="checkbox" className="dropdowns__checkbox" />
                    <svg className="dropdowns__checkbox-icon">
                        <use xlinkHref="#checkmark"></use>
                    </svg>
                </div>
                <span className="dropdowns__item-text">{itemText}</span>
            </label>
        </li>
    )
}