import React from "react";

export const FilterDropdown = () => {
    return (
        <div className="dropdowns__column">
            <form className="dropdowns__form">
                <ul className="dropdowns__list">

                    <li className="dropdowns__item">
                        <label className="dropdowns__control">
                            <div className="dropdowns__checkbox-pair">
                                <input type="checkbox" className="dropdowns__checkbox" />
                                <svg className="dropdowns__checkbox-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>
                            <span className="dropdowns__item-text">Новый</span>
                        </label>
                    </li>

                    <li className="dropdowns__item">
                        <label className="dropdowns__control">
                            <div className="dropdowns__checkbox-pair">
                                <input type="checkbox" className="dropdowns__checkbox" />
                                <svg className="dropdowns__checkbox-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>
                            <span className="dropdowns__item-text">Рассчет</span>
                        </label>
                    </li>

                    <li className="dropdowns__item">
                        <label className="dropdowns__control">
                            <div className="dropdowns__checkbox-pair">
                                <input type="checkbox" className="dropdowns__checkbox" />
                                <svg className="dropdowns__checkbox-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>
                            <span className="dropdowns__item-text">Подтверждён</span>
                        </label>
                    </li>

                    <li className="dropdowns__item">
                        <label className="dropdowns__control">
                            <div className="dropdowns__checkbox-pair">
                                <input type="checkbox" className="dropdowns__checkbox" />
                                <svg className="dropdowns__checkbox-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>
                            <span className="dropdowns__item-text">Отложен</span>
                        </label>
                    </li>



                    <li className="dropdowns__item">
                        <label className="dropdowns__control">
                            <div className="dropdowns__checkbox-pair">
                                <input type="checkbox" className="dropdowns__checkbox" />
                                <svg className="dropdowns__checkbox-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>
                            <span className="dropdowns__item-text">Выполнен</span>
                        </label>
                    </li>


                    <li className="dropdowns__item">
                        <label className="dropdowns__control">
                            <div className="dropdowns__checkbox-pair">
                                <input type="checkbox" className="dropdowns__checkbox" />
                                <svg className="dropdowns__checkbox-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>
                            <span className="dropdowns__item-text">Отменен</span>
                        </label>
                    </li>
                </ul>

            </form>
        </div>
    )
}