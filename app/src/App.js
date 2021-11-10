import React from 'react';
import { Header } from './components/Header/Header'
import { Searchbar } from './components/Search/Searchbar';
import { FilterButton } from './components/Search/FilterButton'
import { FilterButtonReset } from './components/Search/FilterButtonReset';
import { FilterLoader } from './components/Search/FilterLoader';
import './Reset.css';
import './Body.css';


function App() {
  return (
    <div className="container">
        <svg className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

<symbol id="incorrect" viewBox="0 0 16 16">
    <path fill="none" d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"/>
</symbol>

<symbol id="search" viewBox="0 0 16 16">
<path fill="none" d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5" />
</symbol>

<symbol id="filter" viewBox="0 0 16 16">
    <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z" stroke="none"/>
</symbol>

<symbol id="sun" viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="4" stroke="none"/>
    <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none"/>
    <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none"/>
    <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none"/>
    <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none"/>
    <path d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z" stroke="none"/>
    <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none"/>
    <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none"/>
    <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none"/>
</symbol>     

<symbol id="refresh" viewBox="0 0 16 16">
    <path d="M2.50251 7.5V8.5C2.50251 10.75 4.75251 13.5 8.00251 13.5C10 13.5 11.6187 12.5 12.6 11" fill="none"/>
    <path d="M13.5 8.5V7.5C13.5 5.25 11.25 2.5 7.99997 2.5C6 2.5 4.38135 3.5 3.4 5" fill="none"/>
    <path d="M4.5 9.5L2.50254 7.5L0.752533 9.75" fill="none"/>
    <path d="M11.5 6.5L13.5 8.5L15.25 6.25" fill="none"/>
</symbol>

<symbol id="v_arrow" viewBox="0 0 16 16">
    <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none"/>
</symbol>

<symbol id="checkmark" viewBox="0 0 16 16">
    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
</symbol>

<symbol id="pencil" viewBox="0 0 16 16">
    <path d="M6 14.5H15" fill="none"/>
    <path d="M5 13L1.5 14.5L3 11M5 13L3 11M5 13L12 6M3 11L10 4M11 3L12.5 1.5L14.5 3.5L13 5M11 3L13 5M11 3L10 4M13 5L12 6M12 6L10 4" fill="none"/>
</symbol>

<symbol id="bin" viewBox="0 0 16 16">
    <path d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5" fill="none" stroke-linecap="round"/>
    <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round"/>
</symbol>

<symbol id="dot" viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="4" stroke="none"/>
</symbol>

<symbol id="abort" viewBox="0 0 16 16">
    <path d="M12.5 12.5L3.5 3.5" fill="none"/>
    <circle cx="8" cy="8" r="6.5" fill="none"/>
</symbol>
</svg>

        <div className="wrapper-content">
            <Header />
            <div className="filter-row">
                <div className="filter-row__search-row">
                    <form className="filter-row__form">
                        <Searchbar />
                        <FilterButton />
                        <FilterButtonReset />
                       
                    </form>

                    <FilterLoader />
                </div>
            
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
                            <button className="filter-row__button">
                                <span className="filter-row__text-button">Применить</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="table">
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
            </div>

        </div>
    </div>
    

  );
}

export default App;
