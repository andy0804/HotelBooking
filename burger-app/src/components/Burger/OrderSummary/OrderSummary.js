import React from 'react'
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: "capitalize" }}>{igKey}</span> : {props.ingredients[igKey]}
                </li>
                )
        });
    return (
        <Aux>
            <h3>Your order</h3>
            <p> A delicious burger with the following ingredienits:</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.price}</strong></p>
            <p>Continue to Checkout ? </p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
        </Aux>
    )

};

export default orderSummary;