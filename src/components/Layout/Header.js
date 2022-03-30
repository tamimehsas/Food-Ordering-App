import React, { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import styles from './Header.module.css'

export default function Header() {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table full of delicious foods" />
            </div>
        </Fragment>
    )
}
