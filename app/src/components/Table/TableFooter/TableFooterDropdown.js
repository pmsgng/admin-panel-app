import React from "react";

export const TableFooterDropdown = () => {
    return (
        <form className="table-footer__dropdown">
            <span className="table-footer__dropdown-title">Удалить n записей?</span>
            <button type='button' className="table-footer__dropdown-button table-footer__dropdown-button_transparent">
                <span className="table-footer__dropdown-button-text">Удалить</span>
            </button>
            <button type='button' className="table-footer__dropdown-button">
                <span className="table-footer__dropdown-button-text">Отмена</span>
            </button>
        </form>
    )
}