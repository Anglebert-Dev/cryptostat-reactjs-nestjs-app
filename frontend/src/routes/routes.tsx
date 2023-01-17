import React from 'react'
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'
import { LoginPage } from '../Pages/login.page'
import { SignUpPage } from '../Pages/signup.page'
const Routes: React.FC = () => {
    return (
        <ReactRouterRoutes>
            <Route path='login' element={<LoginPage />} />
            <Route path='signup' element={<SignUpPage />} />
        </ReactRouterRoutes>
    )
}

export { Routes }