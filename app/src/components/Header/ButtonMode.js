import React from "react";

export const ButtonMode = () => {
    return (
        <button className="header__button">
            <svg className="page-header__icon">
                <use xlinkHref="#sun"></use>
            </svg>
            <span className="header__button__text">Светлая тема</span>
        </button>
    )
}