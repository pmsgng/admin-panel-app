import React from "react";
import { OrderItem } from "./OrderItem";
import userList from '../../../data-mock/usersList.json'

export const TableBody = () => {
    const orderRow = userList.map((user) => {
        return( 
            <OrderItem orderNum = {user.id}
            orderDate={user.creationDate}
            orderStatus={user.status}
            orderSum={user.positionsCount}
            orderCoast={user.sum}
            customer={user.name} />
        )
    });
    return (
        <div className="table__body table-body">
            <div className="table-body__customer-list">

                {orderRow}

            </div>
        </div>
    )
}