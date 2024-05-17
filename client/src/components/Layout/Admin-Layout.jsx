import { NavLink, Outlet } from 'react-router-dom'

export default function AdminLayout() {
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
            <Outlet/>
        </>
    )
}
