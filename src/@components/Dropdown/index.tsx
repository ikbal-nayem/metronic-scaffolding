import {IColors} from '@interface/common.interface'

type IDropdown = {
  children: string | JSX.Element | any
  btnContent: JSX.Element | string
  btnColor?: IColors
  btnIcon?: boolean
}

const Dropdown = ({children, btnContent, btnColor = 'light', btnIcon}: IDropdown) => {
  return (
    <div className='me-0'>
      <button
        className={`btn btn-sm ${btnIcon ? 'btn-icon' : ''} btn-${btnColor}`}
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
        data-kt-menu-flip='top-end'
      >
        {btnContent}
      </button>
      <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'>
        {children}
      </div>
    </div>
  )
}

export default Dropdown
