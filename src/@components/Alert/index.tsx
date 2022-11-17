import {IColors} from '@interface/common.interface'

type IAlertProps = {
  children: JSX.Element | JSX.Element[] | string | number | any
  type?: IColors
  className?: string
}

const Alert = ({children, type = 'info', className}: IAlertProps) => (
  <div className={`alert alert-${type} ${className || ''}`}>
    <div className='alert-text font-weight-bold'>{children}</div>
  </div>
)

export default Alert
