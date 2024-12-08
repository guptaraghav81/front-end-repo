import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ModalBtn from '../../common/ModalBtn';
import { BiEdit } from "react-icons/bi";

const MyProfile = () => {
    const {user, loading} = useSelector((state) => state.profile);
    const navigate = useNavigate();

  return (
    <div className='text-richblack-5 flex flex-col gap-8 '>
        <h1 className=' text-4xl font-semibold'>My Profile</h1>
        <div className='flex justify-between bg-richblack-800 py-8 px-8 rounded-tl-xl rounded-br-xl'>
            <div className=' flex items-center gap-6 text-richblack-5 '>
            <img src={user?.image} alt={`profile-${user?.firstName}`} className=' aspect-square w-[70px] rounded-full object-cover' />
            <div className=''>
                <p className='font-semibold text-lg'>{user?.firstName + " " + user?.lastName}</p>
                <p>{user?.email}</p>
            </div>
            </div>
            {/* its work is just a simple button we can do anything don't go on name */}
            <ModalBtn customClasses={"bg-yellow-50 text-richblack-800"} onclick={() => {
                return navigate("/dashboard/settings")
            }}>
                <div className='flex items-center gap-1 text-lg'>
                <p>Edit</p>
                <BiEdit/>
                </div>
                </ModalBtn>
            </div>
        <div className='flex flex-col bg-richblack-800 py-8 px-8 rounded-tl-xl rounded-br-xl gap-4'>
            <div className='flex justify-between'>
                <p className='text-xl font-semibold'>About</p>
                <ModalBtn
                customClasses={"bg-yellow-50 text-richblack-800"}
                 onclick={() => {
                 navigate("/dashboard/settings")
                 }}>
                <div className='flex gap-1 items-center text-lg '>
                <p>Edit</p>
                <BiEdit/>
                </div>
                </ModalBtn>
            </div>
            <p className='text-richblack-300'>{user?.additionalDetails?.about ?? "Write Something about Yourself"}</p>
            <div className='text-lg font-semibold'>Account Type: <span className='text-md text-richblack-300 font-bold'>{user?.accountType}</span></div>
        </div>

        <div className='flex flex-col bg-richblack-800 py-8 px-8 rounded-tl-xl rounded-br-xl gap-6'>
            <div className='flex justify-between'>
                <p className='text-xl font-semibold'>Personal Details</p>
                <ModalBtn customClasses={"bg-yellow-50 text-richblack-800"} onclick={() => {
                return navigate("/dashboard/settings")
            }}>
                <div className='flex gap-1 items-center text-lg'>
                <p>Edit</p>
                <BiEdit/>
                </div>
                </ModalBtn>
            </div>

            <div className=' w-[70%] grid grid-cols-2 gap-x-24 gap-y-6'>
                <div>
                  <p className='text-md text-richblack-200 pb-1'>First Name</p>     
                  <p>{user?.firstName}</p>     
                </div>
                <div>
                  <p className='text-md text-richblack-200 pb-1'>Last Name</p>     
                  <p>{user?.lastName}</p>     
                </div>
                <div>
                  <p className='text-md text-richblack-200 pb-1'>Email</p>     
                  <p>{user?.email}</p>     
                </div>
                <div>
                  <p className='text-md text-richblack-200 pb-1'>Phone Number</p>     
                  <p>{user?.additionalDetails?.contactNumber}</p>     
                </div>
                <div>
                  <p className='text-md text-richblack-200 pb-1'>Gender</p>     
                  <p>{user?.additionalDetails?.gender}</p>     
                </div>
                <div>
                  <p className='text-md text-richblack-200 pb-1'>Date of Birth</p>     
                  <p>{user?.additionalDetails?.dateOfBirth}</p>     
                </div>
            </div>
        </div>

    </div>
  )
}

export default MyProfile