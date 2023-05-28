'use client'
import { useState } from 'react'
import { Card } from '../../flowbite-react'

type PaymentPlanProps = {
  /**
   * Function to execute when a payment plan is selected.
   *
   * @param paymentPlan Number of the playment plan (0-3).
   */
  onChange?(paymentPlan: number): void
}

/**
 * Displays the payment plans for courses
 */
export default function PaymentPlan({ onChange }: PaymentPlanProps) {
  const [selectedCard, setSelectedCard] = useState<number>()
  return (
    <div className="mb-24">
      <h5 className="my-2 text-center font-bold">Payment Plan</h5>
      <p className="my-2 text-center text-slate-500 text-sm">
        Have questions about the application? Want some more info? Call us!
        65170024
      </p>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div
          className={`rounded-lg ${
            selectedCard === 0 ? 'border-2 border-blue-500' : ''
          }`}
        >
          <Card
            className="h-full"
            onClick={() => {
              setSelectedCard(0)
              onChange?.(0)
            }}
          >
            <div>
              <h5 className="font-bold">PIF (pay in Full)</h5>
              <p className="text-sm text-slate-400 my-2">$6,795</p>
              <p className="font-bold">$4,795</p>
            </div>
            <div className="border border-slate-200" />
            <div>
              <p>Save $1500 in tuition</p>
              <p>No processing fees</p>
            </div>
          </Card>
        </div>
        <div
          className={`rounded-lg ${
            selectedCard === 1 ? 'border-2 border-blue-500' : ''
          }`}
        >
          <Card
            className="h-full"
            onClick={() => {
              setSelectedCard(1)
              onChange?.(1)
            }}
          >
            <div>
              <h5 className="font-bold">16 installments</h5>
              <p className="text-sm text-slate-400 mt-2">of $399 / Month</p>
            </div>
            <div className="border border-slate-200" />
            <div>
              <p>Save $500 in tuition</p>
              <p>No processing fees</p>
              <p>0% interest rate</p>
            </div>
          </Card>
        </div>
        <div
          className={`rounded-lg ${
            selectedCard === 2 ? 'border-2 border-blue-500' : ''
          }`}
        >
          <Card
            className="h-full"
            onClick={() => {
              setSelectedCard(2)
              onChange?.(2)
            }}
          >
            <div>
              <h5 className="font-bold">24 installments</h5>
              <p className="text-sm text-slate-400 mt-2">of $299 / Month</p>
            </div>
            <div className="border border-slate-200" />
            <div>
              <p>Save $250 in tuition</p>
              <p>No processing fees</p>
              <p>5.99% interest rate</p>
            </div>
          </Card>
        </div>
        <div
          className={`rounded-lg ${
            selectedCard === 3 ? 'border-2 border-blue-500' : ''
          }`}
        >
          <Card
            className="h-full"
            onClick={() => {
              setSelectedCard(3)
              onChange?.(3)
            }}
          >
            <div>
              <h5 className="font-bold">48 installments</h5>
              <p className="text-sm text-slate-400 mt-2">of $199 / Month</p>
            </div>
            <div className="border border-slate-200" />
            <div>
              <p>No processing fees</p>
              <p>11.99% interest rate</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
