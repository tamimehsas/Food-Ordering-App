import React from 'react'
import styles from './MealItemForm.module.css'

export default function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <input type="text" />
      <button>+ Add</button>
    </form>
  )
}
