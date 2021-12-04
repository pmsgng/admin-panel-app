import React from "react";

export const FilterButtonReset = ({buttonText}) => {
    return (
        <button type='button' className="filter-row__button-reset">
            <span className="filter-row__text-button">{buttonText}</span>
        </button>
    )
}