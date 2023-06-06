import React from 'react'
import css from './MainNavigation.module.css'

import { Link } from 'react-router-dom'

const MainNavigation = () => {
    return (
        <header className={css.header}>
            <div className={css.logo}> React Meetups    </div>
            <nav className=''>
                <ul>
                    <li>
                        <Link to='/'> All Meetups</Link></li>
                    <li><Link to='/new-meetups'> New Meetups</Link></li>
                    <li><Link to='/favourite'>  Favourite</Link></li></ul>
            </nav>

        </header>
    )
}

export default MainNavigation