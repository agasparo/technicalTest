import { UserForm } from 'types/form'
import { useContext, useState } from 'react'
import { UserContext } from 'constants/context'
import { toast, ToastContainer } from 'react-toastify'
import { UserMenuFormView } from './UserMenuForm.view'
import { addNewUserFetcher } from 'fetcher/userFetcher'
import { useForm, SubmitHandler } from 'react-hook-form'

export const UserMenuFormContainer = () => {
  const { setUserList, userList } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserForm>({
    shouldUseNativeValidation: true,
    defaultValues: {
      firstname: '',
      lastname: '',
    },
  })

  const onSubmit: SubmitHandler<UserForm> = async (data: UserForm) => {
    try {
      setIsLoading(true)
      const response = await addNewUserFetcher(data.firstname, data.lastname)
      setUserList([...userList, response.data])
      reset()
      toast.success(`User ${response.data.firstname} created with success`)
    } catch (e) {
      toast.error('Cant create user')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <ToastContainer pauseOnHover />
      <UserMenuFormView
        isLoading={isLoading}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />
    </>
  )
}
