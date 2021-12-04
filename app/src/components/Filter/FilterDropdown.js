import React from "react";
import { DropdownItem } from "./DropdownItem";

export const FilterDropdown = () => {
    return (
        <div className="dropdowns__column">
            <form className="dropdowns__form">
                <ul className="dropdowns__list">

                    <DropdownItem itemText="Новый" />
                    <DropdownItem itemText="Расчёт" />
                    <DropdownItem itemText="Подтверждён" />
                    <DropdownItem itemText="Отложен" />
                    <DropdownItem itemText="Выполнен" />
                    <DropdownItem itemText="Отменен" />

                </ul>

            </form>
        </div>
    )
}