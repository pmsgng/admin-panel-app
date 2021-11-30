import React from "react";
import { Searchbar } from './Searchbar';
import { FilterButton } from './FilterButton'
import { FilterButtonReset } from './FilterButtonReset';
import { FilterLoader } from './FilterLoader';

export const FilterSearchRow = () => {
    return (
        <div className="filter-row__search-row">
                <form className="filter-row__form">
                    <Searchbar />
                    <FilterButton buttonText='Фильтры'/>
                    <FilterButtonReset buttonText='Сбросить фильтры'/>
                    
                </form>

                <FilterLoader buttonText='Загрузка'/>
        </div>
    )
}