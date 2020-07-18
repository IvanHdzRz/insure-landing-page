import React from 'react'
import Styles from './ButtonAction.module.css'
const ButtonAction =(props)=>{
    const {message}=props
    return (
        <button className={Styles.btnAction}>
            {message}
        </button>
    );
}

export default ButtonAction