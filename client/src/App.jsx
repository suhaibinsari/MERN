import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/page"
import About from "./pages/About/page"
import Contact from "./pages//Contact/page.jsx"
import Service from "./pages/Service/page.jsx"
import Login from "./pages/Login/page.jsx"
import Signup from "./pages/Signup/page.jsx"
import Error from "./pages/Error//page.jsx"
import Logout from "./pages/Logout/page.jsx"
import AdminUser from "./pages/AdminUser/page.jsx"
import AdminContacts from "./pages/AdminContacts/page.jsx"
import Navbar from "./components/Navbar.jsx"
import AdminLayout from "./components/Layout/Admin-Layout.jsx"




export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/log-out" element={<Logout />} />
          <Route path="*" element={<Error />} />
          {/* Nexted Rouute */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUser />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
          {/* End */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
