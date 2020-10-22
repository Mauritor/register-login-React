import React, { Fragment, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import NavRight from './NavRight'
import useLogout from '../hooks/useLogout'

const Home = () => {
    if (!localStorage.getItem('token')) {
        window.location.href = '/loginHookForm'
    }
    const [usuario, setUsuario] = useState('');
    useEffect(() => {
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const user = decoded.name
        console.log(user);
        setUsuario(user);
    }, [])

    return (
        <Fragment>
            <div className="vh-100 fondo-home">
                <NavRight user={usuario} statusHome={'bg-dark'} logout={useLogout}/>
                <h1 className="text-warning ml-5">Estas en el Home</h1>
            </div>
        </Fragment>
    )
}

export default Home
