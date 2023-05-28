/**
 * `Course` entity represents the schema stored in the database
 */
type Course = {
  id: string
  portrait: string
  title: string
  description: string
  rating: number
  nReviews: number
  duration: string
}

export default Course
