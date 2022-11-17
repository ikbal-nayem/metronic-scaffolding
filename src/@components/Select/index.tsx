import {ISizes} from '@interface/common.interface'

type ISelect = {
  name?: string
  label?: string
  size?: ISizes
  valueKey?: string
  textKey?: string
  onChange?: (event) => void
  renderItem?: (op) => void
  value?: string | number
  defaultValue?: string | number
  noMargin?: boolean
  options: {[key: string]: any}[]
  isRequired?: boolean
  isError?: boolean
  hasInfo?: boolean
  palceholder?: string
  infoText?: string
  errorMessage?: string
  acceptNull?: boolean
  registerProperty?: any
}

const Select = ({
  name,
  label,
  size = 'sm',
  valueKey,
  textKey,
  onChange,
  renderItem,
  value,
  defaultValue,
  isRequired,
  noMargin,
  options,
  palceholder,
  hasInfo,
  infoText,
  isError,
  errorMessage,
  acceptNull = true,
  registerProperty,
}: ISelect) => {
  return (
    <div className={noMargin ? '' : 'mb-8'}>
      {label && (
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
      )}

      <select
        className={`form-select form-select-${size} ${isError ? 'is-invalid' : ''}`}
        data-allow-clear='true'
        required={isRequired}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        {...registerProperty}
      >
        {acceptNull && <option value=''>{palceholder || 'Choose one'}</option>}
        {options?.map((val, idx) => (
          <option key={idx} value={valueKey ? val?.[valueKey] : val}>
            {renderItem ? renderItem(val) : val?.[textKey]}
          </option>
        ))}
      </select>
      {isError && <div className='invalid-feedback'>{errorMessage}</div>}
    </div>
  )
}

export default Select
