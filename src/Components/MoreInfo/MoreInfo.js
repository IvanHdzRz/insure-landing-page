import React from 'react'
import Title from '../Title'
import Styles from './MoreInfo.module.css'
const MoreInfo=()=>{
    return(
        <div className={Styles.MoreInfo}>
            <Title type='big' title='Find out more about how we work'/>
            <button>How we work</button>
            
        </div>
    );
}

export default MoreInfo