import React from 'react'
import logo from '../../assets/images/logo.svg'
import showMenu from '../../assets/images/icon-hamburger.svg'
import closeMenu from '../../assets/images/icon-close.svg'
import Styles from './Navigation.module.css'
class Navigation extends React.Component{
    state={
        collapse:true
    }

    changeMenu=()=>{
        const prevState=this.state
        const isShowed=prevState.collapse===false
        this.setState({collapse:isShowed?true:false})
    }
    render(){
        const {collapse}=this.state
        const isShowing=collapse===false
        const menuDisplayed=isShowing?Styles.menuDisplayed:'';
        return(
            <nav className={menuDisplayed}>
                <div className={Styles.logo}>
                    <img src={logo} alt='logo'/>
                </div>
                
                    <ul className={Styles.list}>
                        <li><a href='#'>How we work</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Account</a></li>
                        <li><a href='#'> <span  className={Styles.enfasis}> View Plans</span></a></li>
                    </ul>
                
                <button className={Styles.btnMenu} onClick={this.changeMenu}>
                    <img  src={isShowing?closeMenu:showMenu} alt='icon-menu'/>
                </button>
            </nav>
        )
    }
}

export default Navigation