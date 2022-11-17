import React from 'react'

type DividerProps = {
  hasText?: boolean
  text?: string
}

const Divider = ({hasText, text}: DividerProps) => {
  return (
    <div className='d-flex align-items-center mb-10'>
      <div className='border-bottom border-gray-300 mw-50 w-100'></div>
      {hasText ? <span className='fw-bold text-gray-400 fs-7 mx-2'>{text || 'OR'}</span> : null}
      <div className='border-bottom border-gray-300 mw-50 w-100'></div>
    </div>
  )
}

export default Divider
