import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";

import { toast } from "react-toastify";


export default function AdmimContacts() {

  const [allContacts, setAllContacts] = useState([])
  const { authorizationToken } = useAuth();

  const URL = 'http://localhost:3000/api/admin/contacts';

  const allContactsData = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Authorization": authorizationToken
        }
      })

      const data = await response.json()
      console.log('adminContact', data)
      setAllContacts(data)

    } catch (error) {
      console.log(error)
    }
  }

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": authorizationToken
        }
      })

      if (response.ok) {
        allContactsData()
        toast.success('Deleted Successfully')

      } else {
        toast.error('Error on deletion')

      }
    } catch (error) {
      console.log('Admin Contact Delete Error', error)
    }
  }


  useEffect(() => {
    allContactsData()
  }, [])


  return (
    <>
      <h2>Admin</h2>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {allContacts.map((curContact, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{curContact.username}</td>
                  <td>{curContact.email}</td>
                  <td>{curContact.message}</td>
                  <td><button onClick={() => deleteContact(curContact._id)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
