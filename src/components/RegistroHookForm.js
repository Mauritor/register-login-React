import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import Nav from './Nav';
import astronautLogo from '../dist/img/astronaut-logo.png'

const RegistroHookForm = (props) => {
    const { register, errors, handleSubmit } = useForm();

    const cargarRegistro = async (data) => {
        try {
            await fetch('http://192.168.0.16:3001/api/user/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(data)
            })
        } catch (error) {
            console.log('error: ', error)
        }
    }

    const onSubmit = async (data) => {
        await cargarRegistro(data);
        console.log('Registro enviado');
        window.location.href = '/loginHookForm'
    }

    return (
        <Fragment>
            <div className="fondo-register">
                <Nav statusRegister={'bg-secondary'} />
                <div className="d-flex justify-content-center align-items-center vh-100 ">
                    <div className="col-md-5">
                        <div className="card calidad">
                            <div className="card-header card-color-register">
                                <h2 className="card-title-color d-flex justify-content-between">Register<img src={astronautLogo} alt="" className="space-logo" /></h2>
                                <p className="card-title-color">Register to Continue</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)} id="formRegister">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            ref={register({
                                                required: {
                                                    value: true,
                                                    message: 'Name es requerido'
                                                },
                                                minLength: {
                                                    value: 4,
                                                    message: 'Más de 4 carácteres'
                                                }
                                            })}
                                        />
                                        <span className="text-danger text-small d-block mb-2">
                                            {errors?.name?.message}
                                        </span>
                                    </div>
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
                                        className="btn btn-outline-primary btn-block"
                                    >Registrar
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

export default RegistroHookForm
