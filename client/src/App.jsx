import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/page"
import About from "./pages/About/page"
import Contact from "./pages/Contact/page"
import Service from "./pages/Service/page"
import Login from "./pages/Login/page"
import Signup from "./pages/Signup/page"
import Error from "./pages/Error/page"
import {Logout} from "./pages/Logout/page"

import Navbar from "./components/Navbar"




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
        </Routes>
      </BrowserRouter>
    </>
  )
}
