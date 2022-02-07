import React from 'react'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { Routes, Route, Navigate } from "react-router-dom";


export const AuthRouter = () => {
    return (
        <div className="auth__main">
            
            <img className='auth__maintitle'
                        src={"https://media-exp1.licdn.com/dms/image/C5616AQEQt08C6nd3tg/profile-displaybackgroundimage-shrink_200_800/0/1617647076632?e=1648684800&v=beta&t=Ydkepsctf5wf_xnGnu-UW5r_St9ORleYepReLRafkvI"}
                        alt='Image'
            />
            <div className='auth__box-contanier'>
                <Routes>
                    <Route path="login" element={<LoginScreen />} />
                    <Route path="register" element={<RegisterScreen />} />

                    <Route path='*' element={<Navigate to='/auth/login'/>} />

                </Routes>
            </div>
        </div>
    )
}
