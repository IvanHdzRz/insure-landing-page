import React from 'react'
import Styles from './Reason.module.css'
import Title from '../Title'
const Reason =(props)=>{
    const {icon , title,reason}=props
    return (
        <div className={Styles.reason}>
            <img src={icon} alt='reason'/>
            <Title type={'medium'} title={title}/>
            <p>{reason}</p>
        </div>
    );
}

export default Reason;