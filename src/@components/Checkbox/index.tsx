type ICheckbox = {
  name?: string
  label?: string
  subLabel?: string
  onChange?: (event) => void
  checked?: boolean
  defaultChecked?: boolean
  noMargin?: boolean
}

const Checkbox = ({
  name,
  label,
  subLabel,
  onChange,
  checked,
  defaultChecked,
  noMargin,
}: ICheckbox) => {
  return (
    <label className={`d-flex align-items-center cursor-pointer gap-3 ${noMargin ? '' : 'mb-8'}`}>
      <div className='form-check form-check-custom'>
        <input
          className='form-check-input cursor-pointer'
          name={name}
          type='checkbox'
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
      </div>
      <div className='flex-grow-1'>
        <strong className='text-gray-800 text-hover-primary fw-bold fs-6'>{label}</strong>
        <span className='text-muted fw-semibold d-block'>{subLabel}</span>
      </div>
    </label>
  )
}

export default Checkbox
