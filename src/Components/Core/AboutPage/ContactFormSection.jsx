import React from 'react'
import ContactUsForm from '../../ContactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='w-[100%] mt-20 flex flex-col gap-3 mb-20'>
      <div className='mx-auto p-6 border rounded-lg border-richblack-200'>
        <h1 className='text-3xl font-semibold text-center'>Get in Touch</h1>
        <p className='text-richblack-200 text-center'>We'd love to here for you, Please fill out this form.</p>
        <div>
            <ContactUsForm/>
        </div>
        </div>
    </div>
  )
}

export default ContactFormSection