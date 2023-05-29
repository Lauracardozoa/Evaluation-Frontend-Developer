import LoginUserDto from '@/dtos/users/login-user-dto'
import { useForm } from 'react-hook-form'
import { Button, Label, TextInput } from '../flowbite-react'
import { useAuth } from '@/contexts/AuthProvider'

type LoginFormProps = {
  /**
   * Function to execute when the login is successful
   */
  onSuccess?(): void
}

/**
 * Form to login a user
 */
export default function LoginForm({ onSuccess }: LoginFormProps) {
  const { signin } = useAuth()
  const { handleSubmit, register, reset } = useForm<LoginUserDto>()
  return (
    <form
      className="px-8"
      onSubmit={handleSubmit(() => {
        signin()
        onSuccess?.()
        reset()
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
          {...register('email', { required: true })}
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
          {...register('password', { required: true })}
        />
      </div>
      <Button type="submit" className="w-full">
        Continue
      </Button>
    </form>
  )
}
