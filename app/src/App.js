import React from 'react';
import { Header } from './components/Header/Header'
import { FilterSearchRow } from './components/Search/FilterSearchRow'
import { FilterRow } from './components/Filter/FilterRow';
import { TableHeader } from './components/Table/TableHeader';
import { TableBody } from './components/Table/TableBody';
import { TableFooter } from './components/Table/TableFooter';
import './Reset.css';
import './Body.css';


function App() {
    return (
        <div className="container">
            <svg className="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

                <symbol id="incorrect" viewBox="0 0 16 16">
                    <path fill="none" d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" />
                </symbol>

                <symbol id="search" viewBox="0 0 16 16">
                    <path fill="none" d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5" />
                </symbol>

                <symbol id="filter" viewBox="0 0 16 16">
                    <path d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z" stroke="none" />
                </symbol>

                <symbol id="sun" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="4" stroke="none" />
                    <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
                    <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
                    <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
                    <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
                    <path d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z" stroke="none" />
                    <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
                    <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
                    <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
                </symbol>

                <symbol id="refresh" viewBox="0 0 16 16">
                    <path d="M2.50251 7.5V8.5C2.50251 10.75 4.75251 13.5 8.00251 13.5C10 13.5 11.6187 12.5 12.6 11" fill="none" />
                    <path d="M13.5 8.5V7.5C13.5 5.25 11.25 2.5 7.99997 2.5C6 2.5 4.38135 3.5 3.4 5" fill="none" />
                    <path d="M4.5 9.5L2.50254 7.5L0.752533 9.75" fill="none" />
                    <path d="M11.5 6.5L13.5 8.5L15.25 6.25" fill="none" />
                </symbol>

                <symbol id="v_arrow" viewBox="0 0 16 16">
                    <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none" />
                </symbol>

                <symbol id="checkmark" viewBox="0 0 16 16">
                    <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none" />
                </symbol>

                <symbol id="pencil" viewBox="0 0 16 16">
                    <path d="M6 14.5H15" fill="none" />
                    <path d="M5 13L1.5 14.5L3 11M5 13L3 11M5 13L12 6M3 11L10 4M11 3L12.5 1.5L14.5 3.5L13 5M11 3L13 5M11 3L10 4M13 5L12 6M12 6L10 4" fill="none" />
                </symbol>

                <symbol id="bin" viewBox="0 0 16 16">
                    <path d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5" fill="none" stroke-linecap="round" />
                    <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
                </symbol>

                <symbol id="dot" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="4" stroke="none" />
                </symbol>

                <symbol id="abort" viewBox="0 0 16 16">
                    <path d="M12.5 12.5L3.5 3.5" fill="none" />
                    <circle cx="8" cy="8" r="6.5" fill="none" />
                </symbol>
            </svg>

            <div className="wrapper-content">
                <Header />
                <div className="filter-row">
                    <FilterSearchRow />

                    <FilterRow />
                </div>

                <div className="table">
                    <TableHeader />
                    <TableBody />
                    <TableFooter/>
                </div>

            </div>
        </div>


    );
}

export default App;
