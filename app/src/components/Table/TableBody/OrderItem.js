import React from "react";
import { Checkbox } from "../../Checkbox/Checkbox";

export const OrderItem = ({
    orderNum,
    orderDate,
    orderStatus,
    orderSum,
    orderCoast,
    customer,
}) => {


    return (
        <label className="table-body__order-row">
            <Checkbox />
            <div className="table-body__order-num-wrap">
                <span className="table-body__cell-text">{orderNum}</span>
            </div>
            <div className="table-body__date-wrap">
                <span className="table-body__cell-text">{orderDate}</span>
            </div>
            <div className="table-body__order-status-wrap">
                <svg className="table-body__icon-status">
                    <use xlinkHref="#dot"></use>
                </svg>
                <span className="table-body__cell-text">{orderStatus}</span>
            </div>
            <div className="table-body__positions-sum">
                <span className="table-body__cell-text">{orderSum}</span>
            </div>
            <div className="table-body__order-sum">
                <span className="table-body__cell-text">{orderCoast}</span>
            </div>
            <div className="table-body__customer-name">
                <span className="table-body__cell-text">{customer}</span>
            </div>

        </label>
    )
}