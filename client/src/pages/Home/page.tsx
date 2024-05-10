import React from 'react'
import Button from '../../components/Button'

export default function page() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Homepage</h1>
        <p className="text-lg text-gray-700 mb-8">
          This is a simple homepage created using ReactJS and Tailwind CSS.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>

    </>
  )
}
