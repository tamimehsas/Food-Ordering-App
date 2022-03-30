import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import styles from './Model.module.css'

const Backdrop = (props) => {
    return (
        <div className={styles.backdrop}></div>
    )
}


const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>

    )
}

const portalElement  = document.getElementById('overlays')
export default function Modal(props) {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.childre}</ModalOverlay>,portalElement)}

    </Fragment>
}
