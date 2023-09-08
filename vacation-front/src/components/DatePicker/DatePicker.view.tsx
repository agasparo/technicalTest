import { UseFormRegister } from 'react-hook-form'
import { VacationForm } from 'types/form'

type DatePickerViewProps = {
  currentDate?: string
  label: string
  register: UseFormRegister<VacationForm>
  registerName: string
}

export const DatePickerView = ({
  currentDate,
  label,
  register,
  registerName,
}: DatePickerViewProps) => {
  return (
    <div className="w-1/4 mb-6 ml-5 mt-6">
      <label
        htmlFor="datePicker-input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        {...register(registerName as any, { required: true })}
        type="date"
        value={currentDate ?? undefined}
        id="datePicker-input"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  )
}
