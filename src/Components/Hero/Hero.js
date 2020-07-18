import React from 'react'
import imgFamily from '../../assets/images/image-intro-desktop.jpg'
import Title from '../Title'
import Styles from './Hero.module.css'
import ButtonAction from '../ButtonAction'
const Hero =()=>{
    return(
        <div className={Styles.hero}>
            <img src={imgFamily} alt='Family'/>
            <div className={Styles.quote}>
                <Title 
                    type={'big'} 
                    title={'Humanazing your insurance.'} 
                />
                <p>Get yor life insurance coverage easier and faster.
                    We blend our expertise and technology to
                    help you find the plan that's righgt for you.
                    Ensure you and loved ones are protected.
                </p>
                <ButtonAction message='View plans'/>
            </div>
        </div>
    );
}

export default Hero;