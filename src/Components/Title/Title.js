import React from 'react'
import Styles from './Title.module.css'
const Title=(props)=>{
    const {type,title}=props
    return(
        <h2 className={`${Styles.title} ${type==='big'?Styles.big:Styles.medium}`}>
            {title}
        </h2>
    );
}
export default Title