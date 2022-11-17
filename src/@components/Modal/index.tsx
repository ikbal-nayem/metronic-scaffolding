import {ISizes} from '@interface/common.interface'
import {Modal} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import ModalHeader from './ModalHeader'

type IWxModal = {
  title?: string
  noHeader?: boolean
  children: string | JSX.Element | any
  isOpen: boolean
  handleClose?: () => void
  size?: ISizes
  holdOn?: boolean
}

const modalsRoot = document.getElementById('root-modals') || document.body

const WxModal = ({
  title,
  noHeader,
  children,
  holdOn,
  isOpen,
  handleClose,
  size = 'md',
}: IWxModal) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <Modal
      tabIndex={-1}
      aria-hidden='true'
      dialogClassName='modal-dialog modal-dialog-centered'
      show={isOpen}
      onHide={handleClose}
      backdrop={holdOn ? 'static' : true}
    >
      {!noHeader && <ModalHeader title={title} handleClose={handleClose} />}
      {children}
    </Modal>,
    modalsRoot
  )
}
export default WxModal
