import React from "react";
import { ButtonMode } from '../Header/ButtonMode'

export const Header = ({title}) => {
    return (
        <div className="header">
            <span className="header-title">{title}</span>
            <ButtonMode buttonText='Светлая тема'/>
        </div>
    )
}