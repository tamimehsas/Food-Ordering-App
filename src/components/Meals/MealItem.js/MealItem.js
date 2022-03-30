import React from 'react'

export default function MealItem(props) {
    const price = `$${props.price.toFixed(2)}`
    return (
        <li>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div>{price}</div>
            </div>
            <div>
                meal item form
            </div>
        </li>
    )
}
