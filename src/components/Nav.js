import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link to="/loginHookForm" className={props.statusLogin + ' nav-link text-info font-weight-bold'} >Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/registerHookForm" className={props.statusRegister + ' nav-link text-info font-weight-bold'} >Register</Link>
            </li>
        </ul>
    )
}

export default Nav