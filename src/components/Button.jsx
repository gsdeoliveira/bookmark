import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        'px-10 py-3 rounded-md  flex justify-center items-center text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
