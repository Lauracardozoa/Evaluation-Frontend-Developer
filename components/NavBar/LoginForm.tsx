import LoginUserDto from '@/dtos/login-user-dto'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Button, Label, TextInput } from '../flowbite-react'

/**
 * Form to login a user
 */
export default function LoginForm() {
  const [error, setError] = useState(false)
  const { handleSubmit, register } = useForm<LoginUserDto>()
  return (
    <form
      className="px-8"
      onSubmit={handleSubmit((data) => {
        // TODO: Make login
        setError(true)
      })}
    >
      <div className="my-4">
        <Label htmlFor="email" value="Email" />
        <TextInput
          required
          type="email"
          id="email"
          autoComplete="email"
          placeholder="Enter your email"
          {...register('email', {
            required: true,
            onChange() {
              if (error) {
                setError(false)
              }
            },
          })}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="password" value="Your password" />
        <TextInput
          required
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          {...register('password', {
            required: true,
            onChange() {
              if (error) {
                setError(false)
              }
            },
          })}
        />
      </div>
      {error && (
        <Alert color="failure" className="my-4">
          Email or password is incorrect
        </Alert>
      )}
      <Button type="submit" className="w-full">
        Continue
      </Button>
    </form>
  )
}
