import DrawerBody from './DrawerBody'
import DrawerHeader from './DrawerHeader'

type DrawerProps = {
  title?: string
  children: JSX.Element | JSX.Element[] | string
  isOpen: boolean
  handleClose?: () => void
  className?: string
}

export default ({title, className, children, isOpen, handleClose}: DrawerProps) => {
  if (!isOpen) return null

  return (
    <>
      <div
        className={`bg-body drawer drawer-end drawer-on w-100 w-md-50 w-xl-25 ${className || ''}`}
      >
        <div className='w-100'>
          {title ? <DrawerHeader title={title} closeIconAction={handleClose} /> : null}
          {children}
          {/* <DrawerBody>{children}</DrawerBody> */}
        </div>
      </div>
      <div className='drawer-overlay' style={{zIndex: 109}} onClick={handleClose} />
    </>
  )
}
