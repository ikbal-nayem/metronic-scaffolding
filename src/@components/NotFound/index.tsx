import React from 'react'

type NotFoundProps = {
  title?: string
}

function NotFound({title}: NotFoundProps) {
  return (
    <div className='p-7 text-center'>
      <h3 className='text-muted'>{title || 'No data found!'}</h3>
    </div>
  )
}

export default NotFound
