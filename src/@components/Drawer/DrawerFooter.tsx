type DrawerFooterProps = {
  children: JSX.Element | JSX.Element[] | string
}

const DrawerFooter = ({children}: DrawerFooterProps) => {
  return <div className='bg-white border-top position-sticky sticky-bottom p-5'>{children}</div>
}

export default DrawerFooter
