
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { startLogout } from '../../actions/auth'

const logoImage = require.context('../images',true);

export const Navbar = () => {

    const {name} = useSelector(state => state.auth);

    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-lg fixed-top">
            <div className='container'>
            <Link 
                className="navbar-brand ml-1 mb-3 mt-3" 
                to="/"
            >
                <img className='d-inline-block align-top mr-1'
                        src={logoImage(`./kavak2.jpg`)}
                        alt='LOGO'
                        width="110" height="30"
                />
                

            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    
                    <NavLink 
                        className={ ({isActive}) => "nav-item nav-link " +(isActive? 'active':'')} 
                        to="/buy"
                    >
                        Buy
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => "nav-item nav-link " +(isActive? 'active':'')} 
                        to="/sell"
                    >
                        Sell
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link account'>
                        <i className="fas fa-user"></i>{" "+name}
                    </span>
                    <button 
                        className="nav-item nav-link btn mr-2"
                        onClick={handleLogout}
                    >
                        <i className="fas fa-sign-out-alt fa-2x mt-1" ></i>
                    </button>
                </ul>
            </div>
            </div>
        </nav>
    )
}