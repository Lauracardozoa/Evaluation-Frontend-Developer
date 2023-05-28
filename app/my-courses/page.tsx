import MyCoursesPanel from '@/components/courses/MyCoursesPanel'
import User from '@/entities/user'
import fetcher from '@/utils/fetcher'

/**
 * The My Courses page (/my-courses).
 */
export default async function MyCourses() {
  const userId = '1'
  const { data: user } = await fetcher.get<User>(`/users/${userId}`)
  return <MyCoursesPanel courses={user.courses} />
}
