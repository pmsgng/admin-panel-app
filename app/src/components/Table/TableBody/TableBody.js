import React from "react";

export const TableBody = () => {
    return (
        <div className="table__body table-body">
            <div className="table-body__customer-list">
                <label className="table-body__order-row">
                    <div className="table-body__checkbox-wrap">
                        <div className="table-body__checkbox-pair">
                            <input type="checkbox" className="table-body__checkbox" />
                            <svg className="table-body__icon">
                                <use xlinkHref="#checkmark"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="table-body__order-num-wrap">
                        <span className="table-body__cell-text">1270989</span>
                    </div>
                    <div className="table-body__date-wrap">
                        <span className="table-body__cell-text">15.02.2021,18:00</span>
                    </div>
                    <div className="table-body__order-status-wrap">
                        <svg className="table-body__icon-status">
                            <use xlinkHref="#dot"></use>
                        </svg>
                        <span className="table-body__cell-text">Отложен</span>
                    </div>
                    <div className="table-body__positions-sum">
                        <span className="table-body__cell-text">5</span>
                    </div>
                    <div className="table-body__order-sum">
                        <span className="table-body__cell-text">101 907 ₽</span>
                    </div>
                    <div className="table-body__customer-name">
                        <span className="table-body__cell-text">Черышев Филипп Семёнович</span>
                    </div>

                </label>

                <label className="table-body__order-row">
                    <div className="table-body__checkbox-wrap">
                        <div className="table-body__checkbox-pair">
                            <input type="checkbox" className="table-body__checkbox" />
                            <svg className="table-body__icon">
                                <use xlinkHref="#checkmark"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="table-body__order-num-wrap">
                        <span className="table-body__cell-text">2353474</span>
                    </div>
                    <div className="table-body__date-wrap">
                        <span className="table-body__cell-text">12.03.2021,05:15</span>
                    </div>
                    <div className="table-body__order-status-wrap">
                        <svg className="table-body__icon-status">
                            <use xlinkHref="#dot"></use>
                        </svg>
                        <span className="table-body__cell-text">Отложен</span>
                    </div>
                    <div className="table-body__positions-sum">
                        <span className="table-body__cell-text">2</span>
                    </div>
                    <div className="table-body__order-sum">
                        <span className="table-body__cell-text">98 003 ₽</span>
                    </div>
                    <div className="table-body__customer-name">
                        <span className="table-body__cell-text">Филиппов Степан Васильевич</span>
                    </div>

                </label>

                <label className="table-body__order-row">
                    <div className="table-body__checkbox-wrap">
                        <div className="table-body__checkbox-pair">
                            <input type="checkbox" className="table-body__checkbox" />
                            <svg className="table-body__icon">
                                <use xlinkHref="#checkmark"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="table-body__order-num-wrap">
                        <span className="table-body__cell-text">1103397</span>
                    </div>
                    <div className="table-body__date-wrap">
                        <span className="table-body__cell-text">03.02.2021,08:04</span>
                    </div>
                    <div className="table-body__order-status-wrap">
                        <svg className="table-body__icon-status">
                            <use xlinkHref="#dot"></use>
                        </svg>
                        <span className="table-body__cell-text">Отложен</span>
                    </div>
                    <div className="table-body__positions-sum">
                        <span className="table-body__cell-text">5</span>
                    </div>
                    <div className="table-body__order-sum">
                        <span className="table-body__cell-text">3 800 ₽</span>
                    </div>
                    <div className="table-body__customer-name">
                        <span className="table-body__cell-text">Тихонова Алина Давидовна</span>
                    </div>
                </label>


                <label className="table-body__order-row">
                    <div className="table-body__checkbox-wrap">
                        <div className="table-body__checkbox-pair">
                            <input type="checkbox" className="table-body__checkbox" />
                            <svg className="table-body__icon">
                                <use xlinkHref="#checkmark"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="table-body__order-num-wrap">
                        <span className="table-body__cell-text">6924662</span>
                    </div>
                    <div className="table-body__date-wrap">
                        <span className="table-body__cell-text">21.01.2021,13:32</span>
                    </div>
                    <div className="table-body__order-status-wrap">
                        <svg className="table-body__icon-status table-body__icon-status_green">
                            <use xlinkHref="#checkmark"></use>
                        </svg>
                        <span className="table-body__cell-text table-body__cell-text_green">Выполнен</span>
                    </div>
                    <div className="table-body__positions-sum">
                        <span className="table-body__cell-text">1</span>
                    </div>
                    <div className="table-body__order-sum">
                        <span className="table-body__cell-text">5 700 ₽</span>
                    </div>
                    <div className="table-body__customer-name">
                        <span className="table-body__cell-text">Александрова Юлия Никитична</span>
                    </div>
                </label>


                <label className="table-body__order-row">
                    <div className="table-body__checkbox-wrap">
                        <div className="table-body__checkbox-pair">
                            <input type="checkbox" className="table-body__checkbox" />
                            <svg className="table-body__icon">
                                <use xlinkHref="#checkmark"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="table-body__order-num-wrap">
                        <span className="table-body__cell-text">2200086</span>
                    </div>
                    <div className="table-body__date-wrap">
                        <span className="table-body__cell-text">19.01.2021,10:28</span>
                    </div>
                    <div className="table-body__order-status-wrap">
                        <svg className="table-body__icon-status table-body__icon-status_black">
                            <use xlinkHref="#abort"></use>
                        </svg>
                        <span className="table-body__cell-text">Отменен</span>
                    </div>
                    <div className="table-body__positions-sum">
                        <span className="table-body__cell-text">-</span>
                    </div>
                    <div className="table-body__order-sum">
                        <span className="table-body__cell-text">-</span>
                    </div>
                    <div className="table-body__customer-name">
                        <span className="table-body__cell-text">Андрей</span>
                    </div>
                </label>

                <label className="table-body__order-row">
                    <div className="table-body__checkbox-wrap">
                        <div className="table-body__checkbox-pair">
                            <input type="checkbox" className="table-body__checkbox" />
                            <svg className="table-body__icon">
                                <use xlinkHref="#checkmark"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="table-body__order-num-wrap">
                        <span className="table-body__cell-text">2842064</span>
                    </div>
                    <div className="table-body__date-wrap">
                        <span className="table-body__cell-text">01.04.2021,12:12</span>
                    </div>
                    <div className="table-body__order-status-wrap">
                        <svg className="table-body__icon-status">
                            <use xlinkHref="#dot"></use>
                        </svg>
                        <span className="table-body__cell-text">Отложен</span>
                    </div>
                    <div className="table-body__positions-sum">
                        <span className="table-body__cell-text">1</span>
                    </div>
                    <div className="table-body__order-sum">
                        <span className="table-body__cell-text">10 500 ₽</span>
                    </div>
                    <div className="table-body__customer-name">
                        <span className="table-body__cell-text">Судакова Анастасия Ильинична</span>
                    </div>

                </label>

                <label className="table-body__order-row">
                    <div className="table-body__checkbox-wrap">
                        <div className="table-body__checkbox-pair">
                            <input type="checkbox" className="table-body__checkbox" />
                            <svg className="table-body__icon">
                                <use xlinkHref="#checkmark"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="table-body__order-num-wrap">
                        <span className="table-body__cell-text">1730071</span>
                    </div>
                    <div className="table-body__date-wrap">
                        <span className="table-body__cell-text">17.12.2020,22:45</span>
                    </div>
                    <div className="table-body__order-status-wrap">
                        <svg className="table-body__icon-status table-body__icon-status_green">
                            <use xlinkHref="#checkmark"></use>
                        </svg>
                        <span className="table-body__cell-text table-body__cell-text_green">Выполнен</span>
                    </div>
                    <div className="table-body__positions-sum">
                        <span className="table-body__cell-text">1</span>
                    </div>
                    <div className="table-body__order-sum">
                        <span className="table-body__cell-text">1 399 ₽</span>
                    </div>
                    <div className="table-body__customer-name">
                        <span className="table-body__cell-text">Зверева Арина Николаевна</span>
                    </div>
                </label>

                <label className="table-body__order-row">
                    <div className="table-body__checkbox-wrap">
                        <div className="table-body__checkbox-pair">
                            <input type="checkbox" className="table-body__checkbox" />
                            <svg className="table-body__icon">
                                <use xlinkHref="#checkmark"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="table-body__order-num-wrap">
                        <span className="table-body__cell-text">7987376</span>
                    </div>
                    <div className="table-body__date-wrap">
                        <span className="table-body__cell-text">07.12.2020,08:57</span>
                    </div>
                    <div className="table-body__order-status-wrap">
                        <svg className="table-body__icon-status table-body__icon-status_green">
                            <use xlinkHref="#checkmark"></use>
                        </svg>
                        <span className="table-body__cell-text table-body__cell-text_green">Выполнен</span>
                    </div>
                    <div className="table-body__positions-sum">
                        <span className="table-body__cell-text">3</span>
                    </div>
                    <div className="table-body__order-sum">
                        <span className="table-body__cell-text">117 810 ₽</span>
                    </div>
                    <div className="table-body__customer-name">
                        <span className="table-body__cell-text">Карташов Максим Кириллович</span>
                    </div>
                </label>

                <label className="table-body__order-row">
                    <div className="table-body__checkbox-wrap">
                        <div className="table-body__checkbox-pair">
                            <input type="checkbox" className="table-body__checkbox" />
                            <svg className="table-body__icon">
                                <use xlinkHref="#checkmark"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="table-body__order-num-wrap">
                        <span className="table-body__cell-text">1373265</span>
                    </div>
                    <div className="table-body__date-wrap">
                        <span className="table-body__cell-text">15.11.2020,14:26</span>
                    </div>
                    <div className="table-body__order-status-wrap">
                        <svg className="table-body__icon-status table-body__icon-status_green">
                            <use xlinkHref="#checkmark"></use>
                        </svg>
                        <span className="table-body__cell-text table-body__cell-text_green">Выполнен</span>
                    </div>
                    <div className="table-body__positions-sum">
                        <span className="table-body__cell-text">1</span>
                    </div>
                    <div className="table-body__order-sum">
                        <span className="table-body__cell-text">17 008 ₽</span>
                    </div>
                    <div className="table-body__customer-name">
                        <span className="table-body__cell-text">Васильев Вадим Данилович</span>
                    </div>
                </label>

                <label className="table-body__order-row">
                    <div className="table-body__checkbox-wrap">
                        <div className="table-body__checkbox-pair">
                            <input type="checkbox" className="table-body__checkbox" />
                            <svg className="table-body__icon">
                                <use xlinkHref="#checkmark"></use>
                            </svg>
                        </div>
                    </div>
                    <div className="table-body__order-num-wrap">
                        <span className="table-body__cell-text">1373265</span>
                    </div>
                    <div className="table-body__date-wrap">
                        <span className="table-body__cell-text">07.11.2020,14:26</span>
                    </div>
                    <div className="table-body__order-status-wrap">
                        <svg className="table-body__icon-status table-body__icon-status_black">
                            <use xlinkHref="#abort"></use>
                        </svg>
                        <span className="table-body__cell-text">Отменен</span>
                    </div>
                    <div className="table-body__positions-sum">
                        <span className="table-body__cell-text">-</span>
                    </div>
                    <div className="table-body__order-sum">
                        <span className="table-body__cell-text">-</span>
                    </div>
                    <div className="table-body__customer-name">
                        <span className="table-body__cell-text">София</span>
                    </div>
                </label>


            </div>
        </div>
    )
}