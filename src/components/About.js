import React, { Fragment, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import NavRight from './NavRight';
import useLogout from '../hooks/useLogout';

const About = () => {
    if (!localStorage.getItem('token')) {
        window.location.href = '/loginHookForm'
    }
    const [usuario, setUsuario] = useState('');

    const [posts, setPosts] = useState([]);
    //const [titulos, setTitulos ] = useState([]);
    useEffect(() => {
        getPost();
    }, [])

    const getPost = async () => {
        const url = 'http://jsonplaceholder.typicode.com/posts?userId=1'
        const res = await fetch(url);
        const data = await res.json();
        //console.log(data);
        setPosts(data);
    }

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
                <NavRight user={usuario} statusAbout={'bg-dark'} logout={useLogout} />
                <h1 className="text-warning ml-5">Estas en el About</h1>
                <ul>{posts.map(post => (
                    <li className="text-white" key={post.id}>{post.title}</li>
                ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default About
