import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import ModalBtn from '../../../../common/ModalBtn';
import {MdAddCircleOutline} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import {BiRightArrow} from "react-icons/bi"
import { setCourse, setEditCourse, setStep } from '../../../../../Slices/courseSlice';
import toast from 'react-hot-toast';
import NestedView from './NestedView';
import { createSection, updateSection } from '../../../../../services/operations/courseDetailsAPI';
const CourseBuilder = () => {
    const {register, handleSubmit, setValue, formState:{errors} } = useForm();
    const [editSectionName, setEditSectionName] = useState(false);
    const {course} = useSelector((state) => state.course);
    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    const cancelEdit = () => {
        setEditSectionName(false);
        setValue("sectionName", "");
    }
    const goBack = () => {
      dispatch(setStep(1));
      dispatch(setEditCourse(true));
    }
    const goToNext= () => {
      if(course?.courseContent?.length === 0) {
        toast.error("Please add atleast one Section");
        return;
      }
      //some check every sections its like a map
      if(course.courseContent.some((section) => section.subSection.length === 0)) {
        toast.error("Please add atleast one lecture in each section");
        return;
      }
      //if everything is good
      dispatch(setStep(3));
    }
    const onSubmit = async (data) => {
      setLoading(true);
      let result;
      console.log(data.sectionName);
      if(editSectionName){
        result = await updateSection(
          {
            sectionName: data.sectionName,
            //we're storing id in the editSectionname if it present then true otherwise false,
            sectionId: editSectionName,
            courseId: course._id,
          },
          token
        )
      }
      else{
        console.log(data.sectionName);
        result = await createSection( 
          {
          sectionName: data.sectionName,
          courseId: course._id,
         },token
      )
      }
      console.log(result);
      if(result){
        dispatch(setCourse(result));
        setEditSectionName(null);
        setValue("sectionName", "");
      }
      setLoading(false);
    }
    
    const handleChangeSectionName = (sectionId, sectionName) => {
      if(editSectionName === sectionId){
        cancelEdit();
        return;
      }
        setEditSectionName(sectionId);
        setValue("sectionName", sectionName);
    }
  return (
    <div className='text-white'>
        <p className='text-2xl font-semibold mb-4'>Course Builder</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='sectionName'>Section name <sup>*</sup></label>
          <input 
            id='sectionName'
            placeholder='Add section name'
            {...register("sectionName", {required:true})}
            className='form-style w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5 pl-12s'
          />
          {errors.sectionName && (
            <span className='text-pink-200 text-sm'>Section Name is required*</span>
          )}
        </div>

        <div className='mt-10 flex w-full'>
            <ModalBtn
            type="Submit"
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
            customClasses={"flex gap-2 items-center border border-yellow-50 px-2 py-2 bg-richblack-900 text-yellow-50"}>
                <MdAddCircleOutline className='text-yellow-50' size={20}/>
            </ModalBtn>
            {editSectionName && (
            <button
            type='button'
            onClick={cancelEdit}
            className='text-sm text-richblack-300 underline ml-10'
            >
              Cancel Edit
            </button>
          )}
        </div>
        </form>

        {course?.courseContent?.length > 0 && (
        <NestedView  handleChangeSectionName= {handleChangeSectionName} />
      )}

      <div className='flex justify-end gap-x-3 mt-10'>
        <button
        onClick={goBack}
        className='rounded-md cursor-pointer flex items-center '>
          Back
        </button>
        <ModalBtn text="Next" onclick={goToNext} customClasses={"flex items-center gap-2 text-richblack-900 bg-yellow-50"}>
          <BiRightArrow />
        </ModalBtn>

      </div>

    </div>
  )
}

export default CourseBuilder