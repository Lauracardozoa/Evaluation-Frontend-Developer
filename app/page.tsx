import AvailableCoursesPanel from '@/components/courses/AvailableCoursesPanel'
import Course from '@/entities/course'
import fetcher from '@/utils/fetcher'

/**
 * The home page (/).
 */
export default async function Home() {
  const { data: courses } = await fetcher.get<Course[]>('/courses')
  return <AvailableCoursesPanel courses={courses} />
}
