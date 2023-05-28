import { HiOutlineExclamationCircle } from 'react-icons/hi2'
import { Button, Modal } from '../flowbite-react'

type UnsubscribeCourseModalProps = {
  /**
   * Show or hide the modal. Default is `false`.
   */
  show?: boolean

  /**
   * Executes a function when the modal is closed or the continue button is clicked
   */
  onAccept(): void

  /**
   * Executes a function when the modal is closed or the cancel button is clicked
   */
  onCancel(): void
}

/**
 * Displays a confirmation modal to unsubscribe from a course
 */
export default function UnsubscribeCourseModal({
  onAccept,
  onCancel,
  show = false,
}: UnsubscribeCourseModalProps) {
  return (
    <Modal popup show={show} onClose={onCancel}>
      <Modal.Header />
      <Modal.Body>
        <HiOutlineExclamationCircle
          size={120}
          className="text-slate-400 mx-auto"
        />

        <h3 className="text-center text-xl text-slate-500">
          Are you sure you want to unsubscribe from this course?
        </h3>
        <div className="flex justify-evenly my-4">
          <Button color="failure" onClick={onAccept}>
            Yes, I&apos;m sure
          </Button>
          <Button color="gray" onClick={onCancel}>
            No, cancel
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
