import { Vacation } from 'types/vacation'

type UserVacationArrayViewProps = {
  title: string
  vacations: Vacation[]
}

export const UserVacationArrayView = ({
  title,
  vacations,
}: UserVacationArrayViewProps) => {
  return (
    <div className="w-5/6">
      <p className="mb-5 mt-5 text-base">{title}</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="w-1/3 px-6 py-3">
                Begin Date
              </th>
              <th scope="col" className="w-1/3 px-6 py-3">
                End Date
              </th>
              <th scope="col" className="w-1/3 px-6 py-3">
                Comment
              </th>
            </tr>
          </thead>
          <tbody>
            {vacations.map((vacation: Vacation, key: number) => {
              return (
                <tr key={key} className="bg-white border-b">
                  <th
                    scope="row"
                    className="w-1/3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {new Date(vacation.startDate).toLocaleDateString()}
                  </th>
                  <td className="w-1/3 px-6 py-4">
                    {new Date(vacation.endDate).toLocaleDateString()}
                  </td>
                  <td className="w-1/3 px-6 py-4">{vacation.comment}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
