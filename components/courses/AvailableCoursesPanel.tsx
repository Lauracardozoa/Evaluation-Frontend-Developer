'use client'
import { useAuth } from '@/contexts/AuthProvider'
import Course from '@/entities/course'
import { useState } from 'react'
import ApplicationProcessModal from './ApplicationProcessModal'
import CourseCard from './CourseCard'
import { Button } from '../flowbite-react'

type AvailableCoursesPanelProps = {
  /**
   * List of courses
   */
  courses: Course[]
}

/**
 * Displays a list of the available courses
 */
export default function AvailableCoursesPanel({
  courses,
}: AvailableCoursesPanelProps) {
  const { isAuth } = useAuth()
  const [course, setCourse] = useState<Course | null>(null)
  const [showAppProcess, setShowAppProcess] = useState(false)
  return (
    <>
      <h1 className="text-lg font-bold my-4">Available Courses</h1>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard
            {...course}
            key={course.id}
            actions={
              <div>
                {isAuth ? (
                  <Button
                    className="h-12 w-40"
                    onClick={() => {
                      setCourse(course)
                      setShowAppProcess(true)
                    }}
                  >
                    Enroll
                  </Button>
                ) : undefined}
              </div>
            }
          />
        ))}
        {course && (
          <ApplicationProcessModal
            course={course}
            show={showAppProcess}
            onClose={() => setShowAppProcess(false)}
          />
        )}
      </div>
    </>
  )
}
