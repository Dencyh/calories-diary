import React from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.scss'



function Sidebar() {

    return (
        <>
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    <li className='navbar-profile'>
                        <div className="navbar-profile__avatar"><div>R</div></div>
                        <div className="navbar-profile__name"><div>Robert Woods</div></div>

                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link className='navbar__link' to={item.path}>
                                    {item.icon}
                                    <span className='nav-text__link'>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Sidebar
