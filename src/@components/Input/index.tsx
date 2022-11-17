import {ISizes} from '@interface/common.interface'

type IInputProps = {
  name?: string
  size?: ISizes
  variant?: 'solid' | 'outline'
  label?: string
  autoFocus?: boolean
  type?:
    | 'button'
    | 'text'
    | 'color'
    | 'date'
    | 'email'
    | 'datetime-local'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'time'
    | 'url'
    | 'week'
    | 'file'
  isRequired?: boolean
  hasInfo?: boolean
  infoText?: string
  placeholder?: string
  defaultValue?: string | number
  value?: string | number
  onChange?: (event) => void
  max?: string | number
  isError?: boolean
  isValid?: boolean
  errorMessage?: string
  noMargin?: boolean
  registerProperty?: any
}

const Input = ({
  name,
  size = 'sm',
  autoFocus,
  variant = 'outline',
  label,
  type = 'text',
  placeholder,
  defaultValue,
  value,
  isRequired,
  onChange,
  max,
  hasInfo,
  infoText,
  isError,
  isValid,
  errorMessage,
  noMargin,
  registerProperty,
}: IInputProps) => (
  <div className={`w-100 fv-row ${noMargin ? '' : 'mb-8'}`}>
    {label ? (
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
    ) : null}
    <input
      type={type}
      autoFocus={autoFocus}
      className={`form-control form-control-${size} form-control-${variant} ${
        isError ? 'is-invalid' : ''
      } ${isValid ? 'is-valid' : ''}`}
      name={name}
      required={isRequired}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      max={max}
      {...registerProperty}
    />
    {isError && <div className='invalid-feedback'>{errorMessage}</div>}
  </div>
)


export default Input
