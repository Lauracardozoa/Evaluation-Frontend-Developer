import Course from '@/entities/course'
import React from 'react'
import CourseCard from './CourseCard'
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
  return (
    <>
      <h1 className="text-lg font-bold my-4">My Courses</h1>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard
            {...course}
            key={course.id}
            actions={<Button>View details</Button>}
          />
        ))}
      </div>
    </>
  )
}
