import { Label, Select, TextInput } from '@/components/flowbite-react'
import UpdateUserDto from '@/dtos/users/update-user-dto'
import educationLevels from '@/utils/education-levels'
import { UseFormReturn } from 'react-hook-form'

type PersonalInformationFormProps = {
  /**
   * An instance of `useForm<UpdateUserDto>`
   */
  hookForm: UseFormReturn<UpdateUserDto>
}

/**
 * Form to fill in the personal information of a user
 */
export default function PersonalInformationForm({
  hookForm,
}: PersonalInformationFormProps) {
  const {
    formState: { errors },
    register,
  } = hookForm
  return (
    <div className="mb-24">
      <h5 className="my-2 text-center font-bold">Personal Details</h5>
      <p className="my-2 text-center text-slate-500 text-sm">
        Have questions about the application? Want some more info? Call us!
        65170024
      </p>
      <form>
        <div className="my-4 grid grid-cols-2 gap-x-4">
          <div>
            <Label htmlFor="birthdate" value="Date of birth" />
            <TextInput
              required
              id="birthdate"
              type="date"
              autoComplete="bday"
              placeholder="Enter your date of birth"
              color={errors.birthdate && 'failure'}
              {...register('birthdate', { required: true })}
            />
          </div>
          <div>
            <Label htmlFor="gender" value="Gender" />
            <TextInput
              required
              id="gender"
              type="text"
              autoComplete="sex"
              placeholder="Enter your gender"
              color={errors.gender && 'failure'}
              {...register('gender', { required: true })}
            />
          </div>
        </div>
        <div className="my-4">
          <Label htmlFor="address" value="Address" />
          <TextInput
            required
            id="address"
            type="text"
            autoComplete="street-address"
            placeholder="Enter your address"
            color={errors.address && 'failure'}
            {...register('address', { required: true })}
          />
        </div>
        <div className="my-4">
          <Label htmlFor="phoneNumber" value="Phone number" />
          <TextInput
            required
            id="phoneNumber"
            type="tel"
            autoComplete="tel"
            placeholder="Enter your phone number"
            color={errors.phoneNumber && 'failure'}
            {...register('phoneNumber', { required: true })}
          />
        </div>
        <div className="my-4 grid grid-cols-2 gap-x-4">
          <div>
            <Label htmlFor="preferredLanguage" value="Preferred language" />
            <TextInput
              required
              id="preferredLanguage"
              type="text"
              autoComplete="language"
              placeholder="Enter your preferred language"
              color={errors.preferredLanguage && 'failure'}
              {...register('preferredLanguage', { required: true })}
            />
          </div>
          <div>
            <Label htmlFor="educationLevel" value="Education level" />
            <Select
              required
              id="educationLevel"
              color={errors.educationLevel && 'failure'}
              {...register('educationLevel', { required: true })}
            >
              {educationLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.title}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </form>
    </div>
  )
}
