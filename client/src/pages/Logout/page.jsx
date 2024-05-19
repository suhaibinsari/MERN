import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';

export default function page() {
    const { LogoutUser } = useAuth()
    useEffect(() => {
        LogoutUser();
    }, [LogoutUser])

    return (
        <Navigate to="/log-in" />

    )
}

