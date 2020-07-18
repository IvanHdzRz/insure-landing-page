import React from 'react'
import Reason from '../Reason'
import listOfReasons from './listOfReasons'
import Title from '../Title'
import Styles from './SectionReasons.module.css'
const SectionReason=()=>{
    
    return(
        <div className={Styles.sectionReasons}>
            <Title  type={'big'} title={"We're different"}/>
            <div className={Styles.listOfReasons}>
                {listOfReasons.map((reason,i)=>{
                    return (
                        <Reason 
                            key={i}
                            title={reason.title}
                            icon={reason.icon}
                            reason={reason.reason}
                        />
                    )
                })}
            </div>
        </div>
    );
    
}
export default SectionReason