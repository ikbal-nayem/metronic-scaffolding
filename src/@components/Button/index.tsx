import Spinner from '@components/Loader/Spinner'
import {IColors, ISizes} from '@interface/common.interface'

type IButtonProps = {
  children: string | JSX.Element | JSX.Element[] | any
  color?: IColors
  size?: ISizes
  variant?: 'fill' | 'outline' | 'light'
  type?: 'submit' | 'button' | 'reset'
  isDisabled?: boolean
  className?: string
  onClick?: () => void
  isLoading?: boolean
  dropClose?: boolean
}

const Button = ({
  children,
  color,
  size = 'sm',
  variant,
  type = 'button',
  isDisabled,
  className,
  onClick,
  isLoading,
  dropClose,
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={`btn btn-${size} btn${variant ? '-' + variant : ''}${color ? '-' + color : ''} ${
        className || ''
      }`}
      disabled={isDisabled}
      onClick={onClick}
      data-kt-menu-dismiss={dropClose ? 'true' : 'false'}
    >
      {isLoading ? <Spinner text='Processing ...' size='sm' /> : children}
    </button>
  )
}

export default Button
