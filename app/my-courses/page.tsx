'use client'
import MyCoursesPanel from '@/components/courses/MyCoursesPanel'
import { useAuth } from '@/contexts/AuthProvider'
import User from '@/entities/user'
import useSWR from 'swr'

/**
 * The My Courses page (/my-courses).
 */
export default function MyCourses() {
  const { isAuth } = useAuth()
  if (isAuth) {
    const userId = '1'
    const { data: user } = useSWR<User>(`/api/users/${userId}`)
    return user ? (
      <MyCoursesPanel courses={user.courses} />
    ) : (
      <span>Loading</span>
    )
  } else {
    return (
      <h1 className="font-bold text-lg text-center">
        You are not authorized to see this page. Please login to your account.
      </h1>
    )
  }
}
