import CreateUserDto from '@/dtos/users/create-user-dto'
import countries from '@/utils/countries'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Button, Label, Select, TextInput } from '../flowbite-react'

/**
 * Form to register a user
 */
export default function RegisterForm() {
  const [error, setError] = useState('')
  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
  } = useForm<CreateUserDto>({ mode: 'onTouched' })
  return (
    <form
      className="px-8"
      onSubmit={handleSubmit((data) => {
        // TODO: Make register
        setError('Email already exists')
      })}
    >
      <div className="my-4">
        <Label htmlFor="fullName" value="Full name" />
        <TextInput
          required
          type="text"
          id="fullName"
          autoComplete="name"
          placeholder="Enter your full name"
          {...register('fullName', {
            required: true,
            onChange() {
              setError('')
            },
          })}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="email" value="Email address" />
        <TextInput
          required
          type="email"
          id="email"
          autoComplete="email"
          placeholder="Enter your email"
          {...register('email', {
            required: true,
            onChange() {
              setError('')
            },
          })}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="password" value="Your password" />
        <TextInput
          required
          minLength={6}
          type="password"
          id="password"
          autoComplete="new-password"
          placeholder="Enter your password"
          helperText="Minimum 6 characters"
          {...register('password', {
            required: true,
            onChange() {
              setError('')
            },
          })}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="confirmationPassword" value="Your password" />
        <TextInput
          required
          minLength={6}
          type="password"
          id="confirmationPassword"
          autoComplete="new-password"
          placeholder="Confirm your password"
          color={errors.confirmationPassword && 'failure'}
          helperText={errors.confirmationPassword?.message}
          {...register('confirmationPassword', {
            required: true,
            onChange() {
              setError('')
            },
            validate(value) {
              const password = getValues('password')
              if (password !== value) {
                return 'Passwords do not match'
              }
            },
          })}
        />
      </div>
      <div className="my-4">
        <Label htmlFor="country" value="Country" />
        <Select
          required
          autoComplete="country-name"
          {...register('country', {
            required: true,
            onChange() {
              setError('')
            },
          })}
        >
          {countries.map((country) => (
            <option key={country.isoCode} value={country.name}>
              {country.flag} {country.name}
            </option>
          ))}
        </Select>
      </div>
      {error && (
        <Alert color="failure" className="my-4">
          {error}
        </Alert>
      )}
      <Button type="submit" className="w-full">
        Continue
      </Button>
    </form>
  )
}
