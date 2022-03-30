import React from 'react'
import styles from './MealItem.module.css'

export default function MealItem(props) {
    const price = `$${props.price.toFixed(2)}`
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                meal item form
            </div>
        </li>
    )
}
