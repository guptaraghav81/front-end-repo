import React from 'react'
import ModalBtn from './ModalBtn'

const ConfirmationModal = ({modalData}) => {
  return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] bg-richblack-900 border-2 border-richblack-600 text-richblack-5 rounded-tl-lg rounded-br-lg p-1'>
        <div className='flex flex-col gap-2 px-5 py-4 '>
            <p className='text-xl'>{modalData.text1}</p>
            <p className='text-richblack-300'>{modalData.text2}</p>
            <div className='flex gap-4'>
                <ModalBtn
                         onclick={modalData?.btn1Handler}
                         text={modalData?.btn1Text}/>
                <button onClick={modalData?.btn2Handler}>
                    {modalData?.btn2Text}
                </button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationModal