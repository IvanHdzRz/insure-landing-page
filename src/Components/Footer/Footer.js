import React from 'react'
import Styles from './Footer.module.css'
import logo from '../../assets/images/logo.svg'
import iconFace from '../../assets/images/icon-facebook.svg'
import iconInsta from '../../assets/images/icon-instagram.svg'
import iconPinterets from '../../assets/images/icon-pinterest.svg' 
import iconTwitter from '../../assets/images/icon-twitter.svg'
import communQuestions from './CommontQuestions'
import commonQuestions from './CommontQuestions'
const Footer=()=>{
    const mediaIcons=[iconFace,iconTwitter,iconInsta,iconPinterets]
    
    return (
        <footer className={Styles.footer}>
            <div className={Styles.logo}>
                <img src={logo} alt='logo'/>
            </div>
            
            <div className={Styles.socialMedia}>
                {mediaIcons.map((mediaIcon,i)=>{
                   return(
                        <img src={mediaIcon} key={i} alt='media-icon' className={Styles.mediaIcon} />
                    )
                })}
                
            </div>
            <hr></hr>
            <div className={Styles.communQuestions}>
                {commonQuestions.map((question,i)=>{
                    return (
                        <div key={i} className={Styles.question}>
                            <h3>{question.title}</h3>
                            {question.answers.map((answer,i)=>{
                                return(
                                    <li key={i}>{answer}</li>
                                );
                            })}
                        </div>
                    )
                })}
            </div>
        </footer>
    );
}

export default Footer;