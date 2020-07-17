import React from 'react'
import imgFamily from '../../assets/images/image-intro-desktop.jpg'
const Hero =()=>{
    return(
        <div className='hero'>
            <img src={imgFamily} alt='Family'/>
            <div className='quote'>
                <h1>Humanizing your insurance</h1>
                <p>Get yor life insurance coverage easier and faster.
                    We blend our expertise and technology to
                    help you find the plan that's righgt for you.
                    Ensure you and loved ones are protected.
                </p>
                <button>View plans</button>
            </div>
        </div>
    );
}

export default Hero;