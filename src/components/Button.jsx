import React from 'react'

const Button = ({ children, className }) => {
  return (
    <button className={`px-5 py-3 rounded-md text-white ${className}`}>
      {children}
    </button>
  )
}

export default Button
