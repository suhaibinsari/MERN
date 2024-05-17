import React, { useState } from 'react'
import { useAuth } from '../../store/auth'
import Button from '../../components/Button'
import { NavLink, useNavigate } from 'react-router-dom'
// alert tostify
import { toast } from 'react-toastify'




export default function page() {

  const URL = "http://localhost:3000/api/auth/login"
  const Navigate = useNavigate()

  // local stroage
  const { storeTokenInLs } = useAuth();

  const [userLogin, setuserLogin] = useState({
    email: "",
    password: ""
  })


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    let name = e.target.name
    let value = e.target.value
    setuserLogin({
      ...userLogin,
      [name]: value
    })

  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    // alert(userLogin)
    console.log(userLogin)

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userLogin)
      })
      console.log(response)

      const res_data = await response.json()
      console.log('Response from server', res_data)

      if (response.ok) {

        // JWT Local storage
        // Not necessaryy these two lines just to show outpuut
        //

        // coming from store => auth
        storeTokenInLs(res_data.token);
        // localStorage.setItem("token", res_data)

        // JWT end
        setuserLogin({
          email: "",
          password: ""
        })
        toast.success("Login-Sucess")
        Navigate('/')
      }
      else {
        setuserLogin({
          email: "",
          password: ""
        })
        toast.error(res_data.extraError ? res_data.extraError : res_data.message)
      }

    } catch (error) {
      console.log('Login Form Error', error)
    }

  }




  return (
    <div className='container border mx-auto'>
      {/* absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  this code will help you place content in center of the page*/}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

        <div className='border rounded-xl flex flex-col items-center justify-center w-[18rem] space-y-6 p-4'>
          <div className='w-full'>
            <p>Log in to your account</p>
            <p>Don't have an account?
              <span className='text-blue-500'>
                <NavLink to="/sign-up">
                  <span className=" transition-colors duration-300 hover:text-[#D94A2C] cursor-pointer"> Sign Up</span>
                </NavLink>
              </span>
            </p>
          </div>
          <Button text='Google' width="255px" height="50px" backgroundColor="#D94A2C" img={""} />
          <Button text='Github' width="255px" height="50px" backgroundColor="#D94A2C" img={""} />
          <div className='flex items-center justify-center gap-1'>
            <hr className=' w-5 border-gray-400' />
            Or with email and password
            <hr className=' w-5 border-gray-400' />
          </div>
          <form action='' onSubmit={handleSubmit} className='space-y-3'>
            <div>
              <label htmlFor='email'>Email Address</label>
              <input value={userLogin.email} onChange={handleInput} type="email" name='email' required autoComplete='on' placeholder='Enter your email.....' className='border p-1 rounded-lg' />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input value={userLogin.password} onChange={handleInput} type="password" name='password' required autoComplete='on' placeholder='Enter your password.....' className='border p-1 rounded-lg' />
            </div>
            <button type='submit' className='border rounded-md p-1 px-2'>Login</button>
          </form>


        </div>
      </div>
    </div>
  )
}
