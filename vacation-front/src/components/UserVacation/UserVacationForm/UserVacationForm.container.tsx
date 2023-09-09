import { VacationForm } from 'types/form'
import { UserContext } from 'constants/context'
import { ToastContainer, toast } from 'react-toastify'
import { useContext, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { getUserListFetcher } from 'fetcher/userFetcher'
import { addVacationByUserId } from 'fetcher/vacationFetcher'
import { UserVacationFormView } from './UserVacationForm.view'

type UserVacationFormContainerProps = {
  userId: string
}

export const UserVacationFormContainer = ({ userId }: UserVacationFormContainerProps) => {
  const { setUserList, setSelectedUser, selectedUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VacationForm>({
    shouldUseNativeValidation: true,
    defaultValues: {
      start: undefined,
      end: undefined,
      comment: '',
    },
  })

  useEffect(() => {
    reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  const onSubmit: SubmitHandler<VacationForm> = async (data: VacationForm) => {
    try {
      setIsLoading(true)
      await addVacationByUserId(data, userId)
      reset()

      const userListResponse = await getUserListFetcher()
      setUserList(userListResponse.data)

      if (selectedUser) {
        setSelectedUser({
          ...selectedUser,
          userId,
        })
      }
      toast.success(`Vacation created with success`)
    } catch (e) {
      toast.error('Cant create vacation')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <ToastContainer pauseOnHover />
      <UserVacationFormView
        isLoading={isLoading}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />
    </>
  )
}
