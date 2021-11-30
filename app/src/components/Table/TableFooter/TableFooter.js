import React from "react";

export const TableFooter = () => {
    return (
        <div className="table__footer table-footer">
            <div className="table-footer__buttons-status">
                <form className="table-footer__action">
                    <span className="table-footer__text">Выбрано записей: 5</span>
                    <button className="table-footer__button">
                        <svg className="table-footer__icon">
                            <use xlinkHref="#pencil"></use>
                        </svg>
                        <span className="table-footer__button-text">Изменить статус</span>
                    </button>
                    <button className="table-footer__button table-footer__button_red">
                        <svg className="table-footer__icon">
                            <use xlinkHref="#bin"></use>
                        </svg>
                        <span className="table-footer__button-text">Удалить</span>
                    </button>
                </form>
                <form className="table-footer__dropdown">
                    <span className="table-footer__dropdown-title">Удалить n записей?</span>
                    <button className="table-footer__dropdown-button table-footer__dropdown-button_transparent">
                        <span className="table-footer__dropdown-button-text">Удалить</span>
                    </button>
                    <button className="table-footer__dropdown-button">
                        <span className="table-footer__dropdown-button-text">Отмена</span>
                    </button>
                </form>
            </div>
            <div className="table-footer__pagination">
                <form className="table-footer__pagination-form">
                    <button className="table-footer__button">
                        <span className="table-footer__button-text">1</span>
                    </button>
                    <button className="table-footer__button">
                        <span className="table-footer__button-text">2</span>
                    </button>
                    <button className="table-footer__button">
                        <span className="table-footer__button-text">3</span>
                    </button>
                    <span className="table-footer__pagination-continue">…</span>
                    <button className="table-footer__button">
                        <span className="table-footer__button-text">18</span>
                    </button>
                </form>
                <button className="table-footer__button">
                    <span className="table-footer__button-text">#</span>
                </button>
            </div>
        </div>
    )
}