import React from 'react'
import { Link } from 'react-router-dom'

const NavRight = (props) => {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link to="/" className={props.statusHome + ' nav-link text-success font-weight-bold'} >Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className={props.statusAbout + ' nav-link text-success font-weight-bold'} >About</Link>
            </li>
            <li className="nav-item">
                <button className="btn font-weight-bold text-info ml-5"> {props.user}</button>
                <button className="btn font-weight-bold text-info mr-3" onClick={props.logout}  >LogOut </button>
            </li>
        </ul>
    )
}

export default NavRight
