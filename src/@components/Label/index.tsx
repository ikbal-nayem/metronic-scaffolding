interface ILabelProps {
  children?: string
  isRequired?: boolean
  labelRight?: JSX.Element | JSX.Element[] | string
}

function Label({children, isRequired, labelRight}: ILabelProps) {
  return (
    <div className='mb-3'>
      <label className='form-label fw-bold fs-5'>
        {children} {isRequired && <span>*</span>}
      </label>
      {labelRight && <div className='float-end'>{labelRight}</div>}
    </div>
  )
}

export default Label
