import React, { memo } from 'react'
import Styles from './login-header-styles.scss'
import Logo from '../logo/logo'


const LoginHeader: React.FC = () => {
    return (
        <header className={Styles.header}>
            <Logo />
            <h1> 4Devs - Enquetes para programadores </h1>
        </header>
    )
}

export default memo(LoginHeader)