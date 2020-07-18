import React from 'react'
import Styles from './Reason.module.css'
const Reason =(props)=>{
    const {icon , title,reason}=props
    return (
        <div className={Styles.reason}>
            <img src={icon} alt='reason'/>
            <h3>{title}</h3>
            <p>{reason}</p>
        </div>
    );
}

export default Reason;