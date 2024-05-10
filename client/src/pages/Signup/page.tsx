import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { useAuth } from '../../store/auth'
export default function page() {


const URL = "http://localhost:3000/api/auth/register"

  const Navigate = useNavigate();
  const {storeTokenInLs} = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  })

  // handling input
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    let name = e.target.name
    let value = e.target.value

    setUser({
      // ... is spread operator let suppose i have changed the value in phone it will only change the value in phone and return the previouus data as well
      ...user,

      // we are using brackets to make the name dyynammic "[ ]" otherwise it will not work
      [name]: value
    })
  }

  // handling form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(user)
    console.log(user)

    try {
      // => fetching data from backend
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // stringfy is a method which converts the object into json format
        body: JSON.stringify(user)
      })
      console.log(response)


    if(response.ok){
      const res_data = await response.json()
      console.log("Registration Data", res_data)
      storeTokenInLs(res_data.token);
      setUser({
        username: "",
        email: "",
        password: "",
        phone: ""
      })

      Navigate('/log-in')
      alert("Registration Complete")
    }

    } catch (error) {
      console.log('Register Error Frontend', error)
    }
  }

  return (
    <div className='container border mx-auto'>
      {/* absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  this code will help you place content in center of the page*/}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

        <div className='border rounded-xl flex flex-col items-center justify-center w-[18rem] space-y-6 p-4'>

          <p className='text-2xl font-bold'>Registeration form</p>

          <form action="" onSubmit={handleSubmit} className='space-y-3'>
            <div>
              <label htmlFor="username">User Name</label>
              <input onChange={handleInput} value={user.username} type="text" name='username' required autoComplete='on' placeholder='Enter your username.....' className='border p-1 rounded-lg' />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input onChange={handleInput} value={user.email} type="email" name='email' required autoComplete='on' placeholder='Enter your email.....' className='border p-1 rounded-lg' />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input onChange={handleInput} value={user.phone} type="number" name='phone' required autoComplete='on' placeholder='Enter your number.....' className='border p-1 rounded-lg' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input onChange={handleInput} value={user.password} type="password" name='password' required autoComplete='on' placeholder='Enter your password.....' className='border p-1 rounded-lg' />
            </div>
            <br />
            <button type='submit' className='border rounded-md p-1 px-2'>Register Now</button>
          </form>

        </div>
      </div>
    </div>
  )
}
