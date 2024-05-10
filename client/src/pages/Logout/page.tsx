import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';

const { LogoutUser } = useAuth()



// export default function page() {
//     useEffect(() => {
//         LogoutUser();
//     }, [LogoutUser])
//     return <Navigate to="/log-in" />
// }

export const Logout = () => {

    useEffect(() => {
        LogoutUser();
    }, [LogoutUser])

    return (
        <div>
            aaaa
        </div>
    )
}
