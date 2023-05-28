'use client'
import { Button, Modal } from '@/components/flowbite-react'
import UpdateUserDto from '@/dtos/users/update-user-dto'
import Course from '@/entities/course'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import PaymentPlan from './PaymentPlan'
import PersonalInformationForm from './PersonalInformationForm'

type ApplicationProcessModalProps = {
  /**
   * Course for the application process
   */
  course: Course

  /**
   * Function to execute when the modal is closed
   */
  onClose?(): void

  /**
   * Show or hide the modal
   */
  show?: boolean
}

/**
 * Displays a modal with the application process for a course
 */
export default function ApplicationProcessModal({
  course,
  onClose,
  show = false,
}: ApplicationProcessModalProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const [paymentPlan, setPaymentPlan] = useState<number>()
  const currentStepClassname = 'bg-blue-600 text-white'
  const noCurrentStepClassname = 'bg-slate-100'
  const personalDetailsForm = useForm<UpdateUserDto>({ mode: 'onTouched' })

  function handleClose() {
    onClose?.()
    setStep(1)
  }

  useEffect(() => {
    // TODO: set default values
    // personalDetailsForm.reset({})
  }, [])

  return (
    <Modal show={show} onClose={handleClose}>
      <Modal.Header>Application Process - {course.title}</Modal.Header>
      <Modal.Body>
        <div className="flex justify-between">
          <div>
            <span
              className={`inline-block mr-2 h-6 w-6 text-center rounded-full ${
                step === 1 ? currentStepClassname : noCurrentStepClassname
              }`}
            >
              1
            </span>
            Personal Information
          </div>
          <div>
            <span
              className={`inline-block mr-2 h-6 w-6 text-center rounded-full ${
                step === 2 ? currentStepClassname : noCurrentStepClassname
              }`}
            >
              2
            </span>
            Payment Plan
          </div>
        </div>
        <p className="my-4 py-1 text-center bg-slate-100 rounded-md">
          Start: May &apos;21 | Graduation: Dec. &apos;21
        </p>
        {step === 1 ? (
          <PersonalInformationForm hookForm={personalDetailsForm} />
        ) : (
          <PaymentPlan onChange={setPaymentPlan} />
        )}
        <div className="my-2 border border-slate-200" />
        <div className="flex justify-between">
          <Button
            onClick={() => {
              if (step === 1) {
                handleClose()
              } else {
                setStep(1)
              }
            }}
          >
            Back
          </Button>
          <Button
            disabled={step === 2 && paymentPlan === undefined}
            onClick={async () => {
              if (step === 2) {
                handleClose()
                // TODO: Enroll
              } else {
                const isValid = await personalDetailsForm.trigger()
                if (isValid) {
                  setStep(2)
                }
              }
            }}
          >
            Next
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
