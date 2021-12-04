import React from "react";

export const SearchAreaButton = () => {
    return (
        <button type='button' className="searchbar__button searchbar__button_end-line">
            <svg className="searchbar__icon">
                <use xlinkHref="#incorrect"></use>
            </svg>
        </button>
    )
}