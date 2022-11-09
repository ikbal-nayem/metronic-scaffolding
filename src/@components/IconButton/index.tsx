import Icon from '@components/Icon/Icon'
import {IColors} from '@interface/common.interface'

type IButtonProps = {
  color?: IColors
  variant?: 'fill' | 'outline' | 'light'
  type?: 'submit' | 'button' | 'reset'
  isDisabled?: boolean
  className?: string
  onClick?: () => void
  hoverTitle?: string
  iconName: string
  iconColor?: IColors
  iconSize?: number
  iconVariant?: 'outlined' | 'filled' | 'round' | 'sharp' | 'two-tone'
  rounded?: 'circle' | 'pill'
}

const IconButton = ({
  color = 'secondary',
  variant = 'light',
  type = 'button',
  isDisabled,
  className,
  onClick,
  hoverTitle,
  iconName,
  iconColor,
  iconSize = 16,
  iconVariant,
  rounded,
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={`btn btn-sm btn${variant ? '-' + variant : ''}${color ? '-' + color : ''} ${
        className || ''
      } px-3 py-1 ${rounded ? ' rounded-' + rounded : ''}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      <Icon
        icon={iconName}
        className='pt-2'
        hoverTitle={hoverTitle || ''}
        size={iconSize}
        variants={iconVariant}
        color={iconColor}
      />
    </button>
  )
}

export default IconButton
