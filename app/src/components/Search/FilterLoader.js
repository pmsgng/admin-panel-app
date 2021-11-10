import React from "react";

export const FilterLoader = () => {
    return (
        <div className="filter-row__loader">
            <svg className="filter-row__icon-loader">
                <use xlinkHref="#refresh"></use>
            </svg>
            <span className="filter-row__text-loader">Загрузка</span>
        </div>
    )
}