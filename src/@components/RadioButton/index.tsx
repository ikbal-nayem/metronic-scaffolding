import {ISizes} from '@interface/common.interface'

type IRadioButton = {
  name?: string
  label?: string
  subLabel?: string
  onChange?: (event) => void
  checked?: boolean
  defaultChecked?: boolean
  noMargin?: boolean
  size?: ISizes
}

const RadioButton = ({
  name,
  label,
  subLabel,
  onChange,
  checked,
  defaultChecked,
  noMargin,
  size = 'md',
}: IRadioButton) => {
  return (
    <label className={`d-flex align-items-center gap-3 cursor-pointer ${noMargin ? '' : 'mb-8'}`}>
      <span className={`form-check form-check-custom form-check-${size} form-check-outline`}>
        <input
          className='form-check-input'
          role='button'
          name={name}
          type='radio'
          value={label}
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={onChange}
        />
      </span>
      <span className='d-flex flex-column'>
        <span className='fs-6'>{label}</span>
        {subLabel ? <span className='fs-7 text-muted'>{subLabel}</span> : null}
      </span>
    </label>
  )
}

export default RadioButton
