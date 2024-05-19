import { useEffect, useState } from 'react'

import { useAuth } from '../../store/auth'
import { useParams } from 'react-router-dom'

import { toast } from 'react-toastify'

export default function UpdateUser() {


  const [userData, setUserData] = useState({

    username: "",
    email: "",
    phone: ""

  })

  const params = useParams()
  console.log('params', params)
  const { authorizationToken } = useAuth()


  const updateUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          "Authorization": authorizationToken
        }
      })
      const data = await response.json()
      console.log(`SINGLE USER DATA: ${data}`)
      setUserData(data)

      // if (response.ok) {
      //   updateUser()
      // }

    } catch (error) {
      console.log('Admin Contact Delete Error', error)
    }
  }

  useEffect(() => {
    updateUser()
  }, [])



  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value
    setUserData({
      ...userData,
      [name]: value
    })
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": authorizationToken
        },
        body: JSON.stringify(userData)
      })

      if (response.ok) {
        toast.success('Updated Successfully')

      } else {
        toast.error('Updated Successfully')

      }

    } catch (error) {
      console.log('Admin Contact Delete Error', error)
    }
  }





  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Update User Data</h2>
          <form action="#" className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input onChange={handleInput} value={userData.username} type="text" name="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@xyz.com" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
              <input onChange={handleInput} value={userData.email} type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your name..." required />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
              <input onChange={handleInput} value={userData.phone} type="phone" name="phone" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you..." required />
            </div>

            <button type="submit" className=" py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
        </div>
      </section>
    </>
  )
}



// export default function page() {
//   return (
//     <div>
//       asdasdasd
//     </div>
//   )
// }
