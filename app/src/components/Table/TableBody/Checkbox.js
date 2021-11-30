import React from "react";

export const Checkbox = () => {
    return (
        <div className="table-body__checkbox-wrap">
            <div className="table-body__checkbox-pair">
                <input type="checkbox" className="table-body__checkbox" />
                <svg className="table-body__icon">
                    <use xlinkHref="#checkmark"></use>
                </svg>
            </div>
        </div>
    )
}