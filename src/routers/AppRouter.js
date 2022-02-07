
import React, { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { MainScreen } from '../components/main/MainScreen';
import { AuthRouter } from './AuthRouter';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth,(user) => {
            if(user?.uid){
                dispatch(login(user.uid,user.displayName))
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));

            }else{
                setIsLoggedIn(false);
            }

            setChecking(false);
        })
        
    }, [dispatch,setChecking,setIsLoggedIn]) //ponemos dispatch solo para quitar warning porque el authstate es un observable

    if(checking){
        return (
            <h1>Wait...</h1>
        )
    }
    
    return (
        <BrowserRouter>
                <Routes>

                    <Route path="/auth/*" element={
                        <PublicRoute isLoggedIn={isLoggedIn}>
                            <AuthRouter />
                        </PublicRoute>
                    } />
                    
                    
                    <Route path='/*' element={
                        <PrivateRoute isLoggedIn={isLoggedIn}>
                            <DashboardRoutes/>
                        </PrivateRoute>
                    } />

                </Routes>
        </BrowserRouter>
    )
}
