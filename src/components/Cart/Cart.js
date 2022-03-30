import React from 'react'
import styles from './Cart.module.css'

export default function Cart(props) {
    const cartItems = <ul className={styles['cart-items']}>
        {[{ id: 'c1', name: 'sushi', price: 12.99 }].map(item => <li>{item.name}</li>)}</ul>
    return (
        <div>
            {cartItems}
            <div className={styles.total}>
                <span>Total amount</span>
                <span>35.7</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']}>Close</button>
                <button className={styles.button}>Order</button>

            </div>
        </div>
    )
}
