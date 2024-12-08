import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgotPassword = () => {
    const {loading} = useSelector((state) => state.auth);
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const handleonSubmit = (e) => {
        // just remove the default action
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    }
  return (
    <div className='h-[600px] w-[400px] flex justify-center items-center text-richblack-5 mx-auto'>
        {
            loading ? (
                <div>Loading ...</div>
            ) : (
                <div className='flex flex-col gap-3'>
                    <h2 className='text-3xl font-bold'>
                    {
                        !emailSent ? "Reset Password" : "Check Email"
                    }
                    </h2>
                    <p className=' text-richblack-50 font-semibold'>
                        {
                            !emailSent ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email}`
                        }
                    </p>

                    <form action="" className='flex flex-col gap-6' onSubmit={handleonSubmit}>
                        {
                            !emailSent && (
                                <label className='flex flex-col gap-2'>
                                    <p>Email Address<sup className="text-pink-200">*</sup></p>
                                    <input type="email" name='email' required value={email} onChange={(e) => {
                                        return setEmail(e.target.value)
                                    }} placeholder='Enter Your Email' style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                      }}
                                      className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5" />
                                </label>
                            )
                        }
                        <button className='bg-yellow-50 text-black font-bold h-10 rounded-md' type='submit'>
                            {
                                !emailSent ? "Reset Password" : "Resend Email"
                            }
                        </button>
                    </form>

                    <div>
                        <Link to="/login">
                            <div className='flex items-center gap-1'>
                                <IoArrowBackSharp/>
                                <p>Back to Login</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ForgotPassword