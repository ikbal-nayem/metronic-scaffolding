type DrawerHeaderProps = {
  title: string
  closeIconAction?: () => void
  backIconAction?: () => void
}

const DrawerHeader = ({title, closeIconAction, backIconAction}: DrawerHeaderProps) => {
  return (
    <div className='bg-white border-bottom position-sticky sticky-top d-flex align-items-center justify-content-between p-6'>
      <div className='d-flex align-items-center'>
        {backIconAction ? (
          <span className='material-icons-outlined me-2' role='button' onClick={backIconAction}>
            arrow_back
          </span>
        ) : null}
        <h3 className='mb-0'>{title}</h3>
      </div>
      {closeIconAction ? (
        <i className='fa-solid fa-xmark fs-3' role='button' onClick={closeIconAction}></i>
      ) : null}
    </div>
  )
}

export default DrawerHeader
