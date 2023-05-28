import Course from './course'

/**
 * `User` entity represents the schema stored in the database
 */
type User = {
  id: string
  fullName: string
  email: string
  password: string
  country: string
  birthdate?: Date
  gender?: string
  address?: string
  phoneNumber?: string
  preferredLanguage?: string
  educationLevel?: string
  courses: Course[]
}

export default User
