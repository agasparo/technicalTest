import { VacationForm } from 'types/form'
import { Spinner } from 'components/Spinner'
import { DatePickerView } from 'components/DatePicker'
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form'

type UserVacationFormViewProps = {
  isLoading: boolean
  onSubmit: SubmitHandler<VacationForm>
  handleSubmit: UseFormHandleSubmit<VacationForm, undefined>
  register: UseFormRegister<VacationForm>
  errors: FieldErrors<VacationForm>
}

export const UserVacationFormView = ({
  isLoading,
  onSubmit,
  handleSubmit,
  register,
  errors,
}: UserVacationFormViewProps) => {
  return (
    <div className="w-5/6">
      <p className="mb-5 mt-5 text-base text-left">Add Vacation</p>
      <div className="relative shadow-md sm:rounded-lg bg-white">
        <form className="flex flex-row" onSubmit={handleSubmit(onSubmit)}>
          <DatePickerView
            currentDate={undefined}
            label="Begin date"
            register={register}
            registerName="start"
          />
          <DatePickerView
            currentDate={undefined}
            label="end Date"
            register={register}
            registerName="end"
          />
          <div className="mb-6 ml-5 mt-6 w-1/4">
            <label
              htmlFor="comment-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Comment
            </label>
            <input
              type="text"
              id="comment-input"
              placeholder="your comment"
              className="h-11 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              {...register('comment', {
                required: true,
                maxLength: 50,
                minLength: 1,
              })}
            />
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="w-1/5 mb-6 ml-5 mt-[3.2rem] h-11 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            {isLoading ? <Spinner /> : 'Add'}
          </button>
        </form>
        {(errors.comment || errors.start || errors.end) && (
          <span className="text-red-500 ml-5">Inputs must be completed</span>
        )}
      </div>
    </div>
  )
}
