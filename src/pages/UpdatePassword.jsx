import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { resetPassword } from '../services/operations/authAPI';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })
    const {loading} = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {password, confirmPassword} = formData;
    const handleOnChange = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name] : e.target.value,
            }
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token));
    }
  return (
    <div className='flex mx-auto h-[600px] w-[400px] items-center'>
        {
            loading ? (
                <div>Loading...</div>
            ) : (
                <div className='flex flex-col gap-5 text-richblack-5'>
                    <h2 className='text-3xl font-bold'>Choose new Password</h2>
                    <p className='text-richblack-50 font-semibold'>Almost done. Enter your new password and youre all set.</p>
                    <form action="" className='flex flex-col gap-6' onSubmit={handleOnSubmit}>
                    <div className='flex flex-col gap-2'> 
                        <label className="relative">
                             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                                      New Password <sup className="text-pink-200">*</sup>
                             </p>
                <input
                    required
                  type={showPassword ? "text" : "password"}
                 name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className='bg-yellow-50 text-black font-bold h-10 rounded-md' type='submit'>
            Reset Password
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

export default UpdatePassword