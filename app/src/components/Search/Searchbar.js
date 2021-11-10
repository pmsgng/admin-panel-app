import React from "react";

export const Searchbar = () => {
    return (
        <label className="filter-row__searchbar">
            <div className="searchbar">
                <div className="searchbar__search-area">
                    <svg className="searchbar__icon">
                        <use xlinkHref="#search"></use>
                    </svg>
                    <input className="searchbar__input-field" placeholder="Номер заказа или ФИО" />  
                </div>
                <button className="searchbar__button searchbar__button_end-line">
                    <svg className="searchbar__icon">
                        <use xlinkHref="#incorrect"></use>
                    </svg>
                </button>
            </div>
        </label>
    )
}