import { UserForm } from 'types/form'
import { Spinner } from 'components/Spinner'
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

type UserMenuFormViewProps = {
  isLoading: boolean
  onSubmit: SubmitHandler<UserForm>
  handleSubmit: UseFormHandleSubmit<UserForm, undefined>
  register: UseFormRegister<UserForm>
  errors: FieldErrors<UserForm>
}

export const UserMenuFormView = ({
  isLoading,
  onSubmit,
  handleSubmit,
  register,
  errors,
}: UserMenuFormViewProps) => {
  return (
    <>
      <form className="flex flex-col border-t-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="ml-[12.5%] mt-3 w-3/4">
          <label
            htmlFor="firstname-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            firstname
          </label>
          <input
            type="text"
            id="firstname-input"
            placeholder="firstname"
            className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register('firstname', {
              required: true,
              maxLength: 10,
              minLength: 1,
            })}
          />
        </div>
        <div className="ml-[12.5%] mt-3 w-3/4">
          <label
            htmlFor="lastname-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            lastname
          </label>
          <input
            type="text"
            id="lastname-input"
            placeholder="lastname"
            className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register('lastname', {
              required: true,
              maxLength: 10,
              minLength: 1,
            })}
          />
        </div>
        <button
          type="submit"
          className="w-3/4 ml-[12.5%] mt-3 h-11 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          {isLoading ? <Spinner /> : 'Add user'}
        </button>
      </form>
      {(errors.firstname || errors.lastname) && (
        <span className="text-red-500 ml-[12.5%]">Inputs must be completed</span>
      )}
    </>
  )
}
