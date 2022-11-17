import {IColors} from '@interface/common.interface'
import React from 'react'

interface IProgressBar {
  title?: string
  percentage: number
  color?: IColors
}

const ProgressBar = ({title, percentage, color = 'primary'}: IProgressBar) => {
  return (
    <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
      <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
        <span className='fw-bold fs-6 text-gray-400'>{title || ''}</span>
        <span className='fw-bolder fs-6'>{percentage || 0}%</span>
      </div>
      <div className='h-5px mx-3 w-100 bg-light mb-3'>
        <div
          className={`bg-${color} rounded h-5px`}
          role='progressbar'
          style={{width: `${percentage || 0}%`}}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
