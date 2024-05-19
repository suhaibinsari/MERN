import { useEffect, useState } from 'react'
import { useAuth } from '../../store/auth'


export default function AdminUser() {

  const [allUsers, setAllUsers] = useState([])

  const { authorizationToken } = useAuth()

  const URL = "http://localhost:3000/api/admin/users"
  // const delUserURL =
  const allUsersData = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Authorization": authorizationToken
        }
      })
      const data = await response.json()
      console.log(`users ${data}`)
      setAllUsers(data)

    } catch (error) {
      console.log('adminUser', error)
    }
  }
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": authorizationToken
        }
      })
      const data = await response.json()
      console.log(`users after delete: ${data}`)

      if (response.ok) {
        allUsersData()
      }

    } catch (error) {
      console.log('Admin Contact Delete Error', error)
    }
  }

  useEffect(() => {
    allUsersData()
  }, [])


  return (
    <>
      <div>
        <h2>Admin User Data</h2>
        <div className='container'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td>Edit</td>
                    {/* <td>Delete</td> */}
                    <td><button onClick={() => deleteUser(curUser._id)}>a</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
