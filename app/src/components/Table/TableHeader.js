import React from "react";

export const TableHeader = () => {
    return (
        <div className="table__header table-header">
            <div className="table-header__checkbox-wrap">
                <label className="table-header__checkbox-pair">
                    <input type="checkbox" className="table-header__checkbox" />
                    <svg className="table-header__icon table-header__icon_checkbox">
                        <use xlinkHref="#checkmark"></use>
                    </svg>
                </label>
            </div>
            <div className="table-header__order-number">
                <span className="table-header__text">#</span>
            </div>
            <div className="table-header__order-date">
                <span className="table-header__text">Дата</span>
                <svg className="table-header__icon">
                    <use xlinkHref="#v_arrow"></use>
                </svg>
            </div>
            <div className="table-header__order-status">
                <span className="table-header__text">Статус</span>
                <svg className="table-header__icon">
                    <use xlinkHref="#v_arrow"></use>
                </svg>
            </div>
            <div className="table-header__order-position">
                <span className="table-header__text">Позиций</span>
                <svg className="table-header__icon">
                    <use xlinkHref="#v_arrow"></use>
                </svg>
            </div>
            <div className="table-header__order-sum">
                <span className="table-header__text">Сумма</span>
                <svg className="table-header__icon">
                    <use xlinkHref="#v_arrow"></use>
                </svg>
            </div>
            <div className="table-header__order-customer">
                <span className="table-header__text">ФИО покупателя</span>
            </div>
        </div>
    )
}