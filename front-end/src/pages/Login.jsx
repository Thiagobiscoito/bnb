import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <section className='flex items-center justify-center h-screen'>
                <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
                    <h1 className='text-center text-3xl font-bold'>Faça seu Login</h1>
                    <form className='flex w-full flex-col gap-2'>
                        <input className='w-full border border-gray-300 rounded-full py-2 px-4'
                            type="text"
                            placeholder="E-mail" />
                        <input className='w-full border border-gray-300 rounded-full py-2 px-4'
                            type="password"
                            placeholder="Senha" />
                        <button className='bg-prymary-400 font-bold text-white rounded-full py-2 px-4 shadow-md gap-2 mt-4'>Login</button>
                    </form>
                    <p className='text-center'>Ainda não tem conta? <Link className='font-semibold underline'>Registre-se aqui</Link></p>
                </div>
            </section>
        </div>
    )
}

export default Login
