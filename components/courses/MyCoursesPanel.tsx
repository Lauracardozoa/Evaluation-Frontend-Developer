'use client'
import Course from '@/entities/course'
import React, { useState } from 'react'
import CourseCard from './CourseCard'
import UnsubscribeCourseModal from './UnsubscribeCourseModal'
import { Button } from '../flowbite-react'

type MyCoursesPanelProps = {
  /**
   * Enrolled courses
   */
  courses: Course[]
}

/**
 * Displays a list of the enrolled courses
 */
export default function MyCoursesPanel({ courses }: MyCoursesPanelProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course>()
  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false)
  return (
    <>
      <h1 className="text-lg font-bold my-4">My Courses</h1>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard
            {...course}
            key={course.id}
            actions={
              <div className="flex justify-between">
                <Button className="h-12 w-40">View details</Button>
                <Button
                  className="h-12 w-40"
                  color="failure"
                  onClick={() => {
                    setSelectedCourse(course)
                    setShowUnsubscribeModal(true)
                  }}
                >
                  Unsubscribe
                </Button>
              </div>
            }
          />
        ))}
        {selectedCourse && (
          <UnsubscribeCourseModal
            show={showUnsubscribeModal}
            onAccept={() => {
              setShowUnsubscribeModal(false)
              setSelectedCourse(undefined)
            }}
            onCancel={() => {
              setShowUnsubscribeModal(false)
              setSelectedCourse(undefined)
            }}
          />
        )}
      </div>
    </>
  )
}
