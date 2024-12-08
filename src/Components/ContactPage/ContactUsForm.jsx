import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoIosSend } from "react-icons/io";
import { apiConnector } from '../../services/apiConnector';
import { contactusEndpoint } from '../../services/apis';
import CountryCode from "../../data/countrycode.json";
const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  
  const submitContactForm = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      const response = {status: "OK"};
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }
  useEffect(()=> {
    if(isSubmitSuccessful){
      reset({
        email:"",
        firstname:"",
        lastname:"",
        message:"",
        phoneNumber:"",
      })
    }
  },[reset, isSubmitSuccessful])
  return (
    <form onSubmit={handleSubmit(submitContactForm)} className='w-[500px] mx-auto mt-4'>
      <div className='flex flex-col gap-6'>
      <div className='flex gap-6 justify-between'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="firstname" className='text-richblack-5'>First Name<sup className="text-pink-200">*</sup></label>
          <input type="text" 
          name='firstname'
          id='firstname'
          placeholder='Enter First Name'
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          //register maintains the state
          {...register("firstname", {required:true})}/>
          {
            errors.firstname && <span>
              Please enter your name
            </span>
          }
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="lastname" className='text-richblack-5'>Last Name</label>
          <input type="text" 
          name='lastname'
          id='lastname'
          placeholder='Enter Last Name'
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          {...register("lastname")}/>
        </div>
      </div>

      <div>
        <label htmlFor="email">Email<sup className="text-pink-200">*</sup></label>
        <input type="email"
        name='email'
        id='email'
        placeholder='Enter Email Address'
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        {...register("email", {required:true})}
         />
         {
            errors.email && <span>
              Please enter your email address
            </span>
          }
      </div>

      <div className='w-full'>
        <label htmlFor="phoneNumber">Phone Number</label>
          <div className='flex gap-3 justify-between'>
            <div className='w-[15%] '>
            <select name="dropDown" id="dropDown" {...register("countrycode", {required: true})} style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                    className=" py-3 w-[100%] rounded-[0.5rem] bg-richblack-800 text-richblack-5 ">
              {
                CountryCode.map((element, index)=> {
                  return (
                    <option key={index} value={element.code}>{element.code} -{element.country}</option>
                  )
                })
              }
            </select>
            </div>
            <div className='w-[80%]'>
              <input type="" name="phoneNumber" id="phoneNumber" placeholder='12345 67890' style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                    className=" py-3 w-[100%] rounded-[0.5rem] bg-richblack-800 text-richblack-5 pl-2" 
                    {...register("phoneNumber", {required:{value:true, message:"Please enter Phone Number"} , maxLength: {value:10, message:"Invalid Phone Number"}, minLength: {value:8, message:"Invalid Phone Number"}})}/>
            </div>
          </div>
          {
            errors.phoneNumber && <span>
              {errors.phoneNumber.message}
            </span>
          }
      </div>

      <div>
        <label htmlFor="message">Message<sup className="text-pink-200">*</sup></label>
        <textarea name="message"
         id="message"
        cols="30"
        rows="8"
        placeholder='Enter Your Message Here...'
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        {...register("message", {required:true})}></textarea>
        {
          errors.message && <span>
            Please enter your message
          </span>
        }
      </div>
      <button type='submit'>
        <div className='flex items-center text-richblack-800 font-semibold bg-yellow-50 justify-center py-3 rounded-xl gap-3'>
          Send Message
          <IoIosSend/>
        </div>
      </button>
      </div>
    </form>
  )
}

export default ContactUsForm