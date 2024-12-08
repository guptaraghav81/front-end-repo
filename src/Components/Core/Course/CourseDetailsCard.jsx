import React from 'react'
import copy from "copy-to-clipboard"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_TYPE } from '../../../utils/constants';
import { addToCart } from '../../../Slices/cartSlice';
import { BsFillCaretRightFill } from "react-icons/bs"
import { FaShareSquare } from "react-icons/fa"
import toast from 'react-hot-toast';

const CourseDetailsCard = ({course, setConfirmationModal, handleBuyCourse}) => {
    const navigate = useNavigate();
    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const {
        thumbnail,
        price: CurrentPrice,

    } = course;
    const handleShare = () => {
        copy(window.location.href)
        toast.success("Link copied to clipboard")
      }
    const handleAddToCart = async ()=>{
        if(user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
            toast.error("You are an Instructor, you cant buy a course");
            return;
        }
        if(token) {
            console.log("dispatching add to cart")
            dispatch(addToCart(course));
            return;
        }
        setConfirmationModal({
            text1:"you are not logged in",
            text2:"Please login to add to cart",
            btn1text:"login",
            btn2Text:"cancel",
            btn1Handler:()=>navigate("/login"),
            btn2Handler: ()=> setConfirmationModal(null),
        })
    }
  return (
    <div className='flex flex-col mr-10 gap-5'>
                    <img 
                src={thumbnail}
                alt='Thumbnail Image'
                className='max-h-[300px] min-h-[180px] w-[400px] rounded-xl'
            />
            <div className='flex flex-col gap-4'>
            <div className='text-richblack-5 text-lg'>
                Rs. {CurrentPrice}
            </div>
            <div className='flex flex-col gap-y-6'>
                <button
                 className='bg-yellow-50 w-fit text-richblack-900 font-semibold px-2 py-1 rounded-lg'
                    onClick={
                        user && course?.studentsEnroled.includes(user?._id)
                        ? ()=> navigate("/dashboard/enrolled-courses")
                        : handleBuyCourse
                    }
                >
                    {
                        user && course?.studentsEnroled.includes(user?._id) ? "Go to Course ": "Buy Now"
                    }
                </button>

                {
                    (!course?.studentsEnroled.includes(user?._id)) && (
                        <button onClick={handleAddToCart}  
                        className='bg-yellow-50 w-fit text-richblack-900 rounded-md font-semibold px-3 py-1'>
                            Add to Cart
                        </button>
                    )
                }
            </div>
            <div>
            <p className="pb-3 pt-6 text-center text-sm text-richblack-25">
              30-Day Money-Back Guarantee
            </p>
          </div>

          <div className={``}>
            <p className={`my-2 text-xl font-semibold text-richblack-5`}>
              This Course Includes :
            </p>
            <div className="flex flex-col gap-3 text-sm text-caribbeangreen-100">
              {course?.instructions?.map((item, i) => {
                return (
                  <p className={`flex gap-2`} key={i}>
                    <BsFillCaretRightFill />
                    <span>{item}</span>
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center">
            <button
              className="mx-auto flex items-center gap-2 py-6 text-yellow-100 "
              onClick={handleShare}
            >
              <FaShareSquare size={15} /> Share
            </button>
          </div>
            </div>

    </div>
  )
}

export default CourseDetailsCard