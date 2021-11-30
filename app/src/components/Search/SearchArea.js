import React from "react";

export const SearchArea = ({inputPlaceholder}) => {
    return (
        <div className="searchbar__search-area">
            <svg className="searchbar__icon">
                <use xlinkHref="#search"></use>
            </svg>
            <input className="searchbar__input-field" placeholder={inputPlaceholder} />
        </div>
    )
}