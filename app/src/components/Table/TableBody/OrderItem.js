import React from "react";
import { Checkbox } from "./Checkbox";

export const OrderItem = () => {
    return (
        <label className="table-body__order-row">
            <Checkbox/>
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
    )
}