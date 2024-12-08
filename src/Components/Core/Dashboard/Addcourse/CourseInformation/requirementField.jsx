import React, { useState, useEffect } from 'react'

const RequirementField = ({name, label, register, errors, setValue, getValues}) => {
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);
  const handleAddRequirement = ()=> {
    if(requirement){
      setRequirementList([...requirementList,requirement]);
      setRequirement("");
    }
  }
  useEffect(()=> {
        register(name, {
            required:true,
            // validate: (value) => value.length > 0
        })
    },[])

    useEffect(()=> {
        setValue(name, requirementList);
    },[requirementList])
  const handleRemoveRequirement = (clearIndex)=> {
    setRequirementList(requirementList.filter((item, index)=> index !== clearIndex));
  }
  return (
    <div className='text-richblack-600'>
      <label htmlFor={name}>{label}<sup>*</sup></label>
        <div>
            <input
                type='text'
                id={name}
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                className='w-full rounded-[0.5rem] bg-richblack-700 p-[12px] text-richblack-5'
            />
            <button
            type='button'
            onClick={handleAddRequirement}
            className='font-semibold text-yellow-50 my-2 bg-richblack-900 rounded-lg px-2'>
                Add
            </button>
        </div>
        {
            requirementList.length > 0 && (
                <ul>
                    {
                        requirementList.map((requirement, index) => (
                            <li key={index} className='flex items-center text-richblack-5 mt-2 justify-between'>
                                <span className='text-lg text-richblack-5'>{requirement}</span>
                                <button
                                type='button'
                                onClick={() => handleRemoveRequirement(index)}
                                className='text-sm text-yellow-50 bg-richblack-900 mr-8 px-1 rounded-lg '>
                                    clear
                                </button>
                            </li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default RequirementField