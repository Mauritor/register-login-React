import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import Nav from './Nav';

const LoginHookForm = () => {
    const { register, errors, handleSubmit } = useForm();

    const login = async (data) => {
        try {
            const res = await fetch('http://192.168.0.16:3001/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(data)
            })
            const usuarioDB = await res.json();
            const token = usuarioDB.data.token;
            localStorage.setItem('token', token);
            if (localStorage.getItem('token')) {
                window.location.href = '/'
            }

        } catch (error) {
            console.log('error: ', error)
        }
    }

    const onSubmit = (data) => {
        console.log(data);
        login(data);
    }
    return (
        <Fragment>
            <div className="fondo-login">
                <Nav statusLogin={'bg-dark'} />
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="col-md-5">
                        <div className="card calidad">
                            <h2 className="card-header card-color-login card-title-color">Login</h2>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            ref={register({
                                                required: {
                                                    value: true,
                                                    message: 'Email es requerido'
                                                }
                                            })}
                                        />
                                        <span className="text-danger text-small d-block mb-2">
                                            {errors?.email?.message}
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            ref={register({
                                                required: {
                                                    value: true,
                                                    message: 'Password es requerido'
                                                }
                                            })}
                                        />
                                        <span className="text-danger text-small d-block mb-2">
                                            {errors?.password?.message}
                                        </span>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-outline-secondary btn-block">
                                        Login
                                </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginHookForm
