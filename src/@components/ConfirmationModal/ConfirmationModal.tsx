import React from 'react'
// import WxButton from '@components/WxButton'
// import WxModal from '@components/WxModal'
// import WxModalBody from '@components/WxModal/WxModalBody'
// import WxModalFooter from '@components/WxModal/WxModalFooter'
// import WxModalHeader from '@components/WxModal/WxModalHeader'
import Button from '@components/Button'
import WxModal from '@components/Modal'
import {Modal} from 'react-bootstrap'
import ModalFooter from '@components/Modal/ModalFooter'
import ModalBody from '@components/Modal/ModalBody'

interface ConfirmationModalProps {
  title?: string
  body?: any
  onConfirm?: any
  onConfirmLabel?: string
  isOpen: boolean
  setIsOpen?: (isOpen: boolean) => void
  onClose?: () => void
  isSubmitting?: boolean
  holdOn?: boolean
}

export const ConfirmationModal = ({
  isOpen,
  isSubmitting,
  setIsOpen,
  title,
  body,
  onClose,
  onConfirm,
  onConfirmLabel,
  holdOn,
}: ConfirmationModalProps) => {
  return (
    <div>
      <WxModal
        isOpen={isOpen}
        holdOn={holdOn}
        title={title || 'Delete Confirmation'}
        handleClose={onClose}
      >
        <ModalBody>
          <p className='text_body text_regular'>
            {body || 'Are your sure you want to delete it? This action wont be reversible!'}
          </p>
        </ModalBody>

        <ModalFooter>
          <div className='d-flex justify-content-end'>
            <Button
              className='me-3 fs-normal'
              variant='outline'
              color='secondary'
              onClick={() => (onClose ? onClose() : setIsOpen(false))}
              isDisabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              className='fs-normal'
              color='danger'
              onClick={() => onConfirm()}
              isDisabled={isSubmitting}
              isLoading={isSubmitting}
            >
              {onConfirmLabel || 'Yes Delete It'}
            </Button>
          </div>
        </ModalFooter>
      </WxModal>
    </div>
  )
}
