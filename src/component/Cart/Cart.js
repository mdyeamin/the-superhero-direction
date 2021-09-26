import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { team } = props;
    let total = 0;
    for (const addTeam of team) {
        total = total + addTeam.salary;
    }

    return (
        <div>
            <h3> Developer Added : {props.team.length}</h3>
            <h3>Total Cost : ${total} </h3>
            <h3>{ }</h3>

        </div>
    );
};

export default Cart;