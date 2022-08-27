import React from 'react'

export default function Navbar(props){
    return(
        <nav className='navbar navbar-light bg-dark  m-2'>
            <a className='navbar-brand text-white m-2' href="#">
                Navbar <span className='nav-badge'>{props.totalSelection}</span>
            </a>
        </nav>
    )
}