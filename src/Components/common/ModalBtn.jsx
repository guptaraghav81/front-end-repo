import React from 'react'

const ModalBtn = ({
    text,
    onclick,
    children,
    disable,
    outline=false,
    customClasses,
    type,
    properties,
}) => {
  return (
    <button
    disabled={disable}
    onClick={onclick}
    type={type} className={`${properties} ${customClasses}  font-semibold rounded-lg py-1 px-1`}>
        {
            children ? (
                <>
                <span>{text}</span>
                {children}
                </>
            ) : (text)
        }
    </button>
  )
}

export default ModalBtn