import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className='navbar is-transparent' role='navigation' aria-label='main navigation'>
                <div className='container' style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                    <div className='navbar-brand'>
                        <div className='navbar-item'>
                            <img src='logo.png' alt="CCI Dean's Ambassador Program" />
                            &nbsp;&nbsp;&nbsp;CCI Ambassador Portal
                        </div>

                        <button className='button navbar-burger'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div className='navbar-menu'>
                        <div className='navbar-end'>
                            <NavLink to='/' exact className='navbar-item' activeClassName='is-active'>
                                Dashboard
                            </NavLink>
                            <NavLink to='/availability' className='navbar-item' activeClassName='is-active'>
                                Availability
                            </NavLink>
                            <NavLink to='/documentation' className='navbar-item' activeClassName='is-active'>
                                Documentation
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav