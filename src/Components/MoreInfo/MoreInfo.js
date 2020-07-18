import React from 'react'
import Title from '../Title'
import Styles from './MoreInfo.module.css'
import ButtonAction from '../ButtonAction'
const MoreInfo=()=>{
    return(
        <div className={Styles.MoreInfo}>
            <Title type='big' title='Find out more about how we work'/>
            <ButtonAction  message='How we work'/>
            
        </div>
    );
}

export default MoreInfo