type ISwitch = {
  label?: string
  isRequired?: boolean
  hasInfo?: boolean
  infoText?: string
  value?: string | number
  name?: string
  defaultChecked?: boolean
  switchLabel?: string | number
  onChange?: (event) => void
  registerProperty?: any
  className?: string
}

const Switch = ({
  label,
  isRequired,
  hasInfo,
  infoText,
  value,
  name,
  defaultChecked = true,
  switchLabel,
  onChange,
  registerProperty,
  className,
}: ISwitch) => {
  return (
    <div className={className ? className : 'my-5'}>
      <label className='d-flex align-items-center fs-5 mb-2'>
        <span className={isRequired ? 'required' : ''}>{label}</span>
        {hasInfo && (
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title={infoText}
          />
        )}
      </label>

      <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
        <input
          className='form-check-input'
          required={isRequired}
          type='checkbox'
          value={value || ''}
          name={name || 'switch'}
          onChange={onChange}
          defaultChecked={defaultChecked}
          {...registerProperty}
        />
        <label className='form-check-label'>{switchLabel || null}</label>
      </div>
    </div>
  )
}

export default Switch
