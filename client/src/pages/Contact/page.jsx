import { useState } from 'react'

import { useAuth } from '../../store/auth'
// import Contact from '../../../../server/models/contact-model';
import { toast } from 'react-toastify';


export default function Contact() {

  const URL = "http://localhost:3000/api/form/contact"


  const defaultContactForm = {
    username: "",
    email: "",
    message: "",
    subject: ""
  }

  const [message, setMessage] = useState(defaultContactForm)

  const [userData, setuserData] = useState(true)

  const { user } = useAuth();

  if (userData && user) {
    setMessage({
      username: user.username,
      email: user.email,
      message: "",
      subject: ""
    })
    setuserData(false)
  }

  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value
    console.log(e)
    setMessage({
      ...message,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // alert(message)
    console.log(message)

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
      })
      console.log(response)
      const res_data = await response.json()
      // console.log('Response from Contact Frontend', res_data)

      if(response.ok){
        setMessage(defaultContactForm)
        // Not necessaryy these two lines just to show outpuut
        //
        toast.success('Message Send Sucessful')
      }else{
        toast.error(res_data.extraError ?  res_data.extraError : res_data.message)
      }

    } catch (error) {
      console.log('Contact Form Error', error)
    }

  }

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
          <form action="#" className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input onChange={handleInput} value={message.username} type="text" name="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@xyz.com" required />
            </div>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
              <input onChange={handleInput} value={message.email} type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your name..." required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input onChange={handleInput} value={message.subject} type="text" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you..." required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea onChange={handleInput} value={message.message} id="message" name="message" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className=" py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
        </div>
      </section>
    </>
  )
}
