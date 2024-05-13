import React from 'react'
import { useAuth } from '../../store/auth'



export default function page() {
const { user } = useAuth()

  return (
    <div>

      <p>Welcome { user ? `${user.username} to our website` : `to our website` }</p>
    </div>
  )
}
