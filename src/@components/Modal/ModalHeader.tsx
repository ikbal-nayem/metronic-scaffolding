import React from 'react'

type IModalHeaderProps = {
  title: string
  handleClose: () => void
}

const ModalHeader = ({title, handleClose}: IModalHeaderProps) => {
  return (
    <div className='modal-header py-3'>
      <h2>{title}</h2>
      <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
        <i className='fa-solid fa-xmark fs-2'></i>
      </div>
    </div>
  )
}

export default ModalHeader
