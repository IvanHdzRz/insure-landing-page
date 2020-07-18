import React from 'react'
import Reason from '../Reason'
import listOfReasons from './listOfReasons'
const SectionReason=()=>{
    
    return(
        <div className='reasons'>
            <h2>We're diffent</h2>
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
    );
    
}
export default SectionReason