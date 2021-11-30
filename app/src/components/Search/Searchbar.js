import React from "react";
import { SearchAreaButton } from "./SearchAreaButton";
import { SearchArea } from "./SearchArea";

export const Searchbar = () => {
    return (
        <label className="filter-row__searchbar">
            <div className="searchbar">
                <SearchArea inputPlaceholder='Номер заказа или ФИО' />
                <SearchAreaButton />
            </div>
        </label>
    )
}