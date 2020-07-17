import React from 'react'
import logo from '../../assets/images/logo.svg'
import showMenu from '../../assets/images/icon-hamburger.svg'
import closeMenu from '../../assets/images/icon-close.svg'
import Styles from './Navigation.module.css'
class Navigation extends React.Component{
    state={
        navStatus:'initial'
    }

    changeMenu=()=>{
        const prevState=this.state
        const isShowed=prevState.navStatus==='displayed'
        this.setState({navStatus:isShowed?'closed':'displayed'})
    }
    render(){
        const {navStatus}=this.state
        const isShowing=navStatus==='displayed'
        const menuActioned=isShowing?Styles.displayList:Styles.hideList;
        
        return(
            <nav>
                <div className={Styles.logo}>
                    <img src={logo} alt='logo'/>
                </div>
                
                <button className={Styles.btnMenu} onClick={this.changeMenu}>
                    <img  src={isShowing?closeMenu:showMenu} alt='icon-menu'/>
                </button>

                <ul className={`${Styles.list} ${navStatus==='initial'?Styles.initial:menuActioned}`}>
                    <li><a href='#'>How we work</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Account</a></li>
                    <li><a href='#'> <span  className={Styles.enfasis}> View Plans</span></a></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation