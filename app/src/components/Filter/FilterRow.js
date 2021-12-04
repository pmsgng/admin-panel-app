import React from "react";
import { FilterDropdown } from "./FilterDropdown";

export const FilterRow = () => {
    return (
        <div className="filter-row__row-inputs">
            <form className="filter-row__form">

                <div className="filter-row__inputs">
                    <label for="date" className="filter-row__input-title-text">Дата оформления</label>
                    <div className="filter-row__inputs-wrap">
                        <div className="filter-row__input-wrap">
                            <span className="filter-row__from-to-text">с</span>
                            <input id="date" className="filter-row__input" type="text" placeholder="dd.mm.dddd" value="20.01.2021" />
                            <button className="filter-row__input-button">
                                <svg className="filter-row__input-icon">
                                    <use xlinkHref="#incorrect"></use>
                                </svg>
                            </button>
                        </div>
                        <div className="filter-row__input-wrap">
                            <span className="filter-row__from-to-text">по</span>
                            <input className="filter-row__input" type="text" placeholder="dd.mm.dddd" />
                            <button className="filter-row__input-button filter-row__input-button_disabled">
                                <svg className="filter-row__input-icon">
                                    <use xlinkHref="#incorrect"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="filter-row__inputs">
                    <label for="status" className="filter-row__input-title-text">Статус заказа</label>
                    <div className="filter-row__input-wrap">
                        <input id="status" className="filter-row__input filter-row__input_dropdown" type="text" placeholder="Выберите статус" value="Любой" />
                        <button className="filter-row__input-button">
                            <svg className="filter-row__input-icon">
                                <use xlinkHref="#v_arrow"></use>
                            </svg>
                        </button>

                        <FilterDropdown />

                    </div>
                </div>

                <div className="filter-row__inputs">
                    <label for="sum" className="filter-row__input-title-text">Сумма заказа</label>
                    <div className="filter-row__inputs-wrap">
                        <div className="filter-row__input-wrap">
                            <span className="filter-row__from-to-text">от</span>
                            <input id="sum" className="filter-row__input" type="text" value="5000" />
                            <button className="filter-row__input-button">
                                <svg className="filter-row__input-icon">
                                    <use xlinkHref="#incorrect"></use>
                                </svg>
                            </button>
                        </div>
                        <div className="filter-row__input-wrap">
                            <span className="filter-row__from-to-text">до</span>
                            <input className="filter-row__input" type="text" />
                            <button className="filter-row__input-button filter-row__input-button_disabled">
                                <svg className="filter-row__input-icon">
                                    <use xlinkHref="#incorrect"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="filter-row__form-button">
                    <button type="button" className="filter-row__button">
                        <span className="filter-row__text-button">Применить</span>
                    </button>
                </div>
            </form>
        </div>
    )
}