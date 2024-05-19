import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../../store/auth'

export default function AdminLayout() {
    const { user, loading } = useAuth();

    if(loading){
        return <h1>Loading.....</h1>
    }

    if (!user.isAdmin) {
        return <Navigate to="/" />
    }

    return (
        <>
            <nav className='bg-gray-400 font-Crafty bg-opacity-25 backdrop-filter rounded-b-3xl w-auto p-4 relative'>
                <nav className="container mx-auto flex justify-between text-black items-center">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/admin/users">Users</NavLink></li>
                        <li><NavLink to="/admin/contacts">Contacts</NavLink></li>
                    </ul>
                </nav>
            </nav>
            <Outlet />
        </>
    )
}
