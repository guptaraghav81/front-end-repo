import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { deleteProfile } from "../../../../services/operations/settingsAPI"
import { useState } from "react"
import ConfirmationModal from "../../../common/ConfirmationModal"

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth)
  const [confirmationModal, setconfirmationModal] = useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <>
      <div className="my-10 flex flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-8 px-12">
        <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
          <FiTrash2 className="text-3xl text-pink-200" />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-richblack-5">
            Delete Account
          </h2>
          <div className="w-3/5 text-pink-25">
            <p>Would you like to delete account?</p>
            <p>
              This account may contain Paid Courses. Deleting your account is
              permanent and will remove all the contain associated with it.
            </p>
          </div>
          <button 
                        onClick={ () => setconfirmationModal({
                            text1: "Are You Sure ?",
                            text2: "Your Account will be deleted permanently",
                            btn1Text: "Delete",
                            btn2Text:"Cancel",
                            btn1Handler: handleDeleteAccount,
                            btn2Handler: () => setconfirmationModal(null),
                        })}
                        className="w-fit cursor-pointer italic text-white py-2 bg-pink-800 px-2 rounded-br-xl rounded-tl-xl "
                        >
                            <div className='flex items-center gap-x-2'>
                            {/* <VscSignOut className='text-lg'/> */}
                            <span>I want to delete my Account</span>
                        </div>

                    </button>
        </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}

      </div>
    </>
  )
}