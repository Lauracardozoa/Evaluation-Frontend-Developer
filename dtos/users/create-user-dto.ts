/**
 * Represents the Data Transfer Object to create a user
 */
type CreateUserDto = {
  fullName: string
  email: string
  password: string
  confirmationPassword: string
  country: string
}

export default CreateUserDto
