import React from 'react'
import css from './Layout.module.css'
import MainNavigation from './MainNavigation'
const Layout = (props) => {
    return (
        <div>
            <MainNavigation />
            <main className={css.main}>{props.children}</main></div>
    )
}

export default Layout