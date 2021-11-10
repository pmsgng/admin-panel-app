import React from "react";
import { ButtonMode } from '../Header/ButtonMode'

export const Header = () => {
    return (
        <div className="header">
            <span className="header-title">Список заказов</span>
            <ButtonMode />
        </div>
    )
}