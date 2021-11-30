import React from "react";

export const FilterButton = ({buttonText}) => {
    return (
        <button className="filter-row__button">
            <svg className="filter-row__icon">
                <use xlinkHref="#filter"></use>
            </svg>
            <span className="filter-row__text-button">{buttonText}</span>
        </button>
    )
}