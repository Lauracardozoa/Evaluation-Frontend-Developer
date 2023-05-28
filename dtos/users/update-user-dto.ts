import CreateUserDto from './create-user-dto'

/**
 * Represents the Data Transfer Object to update a user
 */
type UpdateUserDto = Partial<CreateUserDto> & {
  birthdate?: Date
  gender?: string
  address?: string
  phoneNumber?: string
  preferredLanguage?: string
  educationLevel?: string
}

export default UpdateUserDto
