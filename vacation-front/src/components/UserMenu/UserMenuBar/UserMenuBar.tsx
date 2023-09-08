type UserMenuBarProps = {
  setOnlyVacation: () => void
  onlyVacation: boolean
}

export const UserMenuBar = ({ setOnlyVacation, onlyVacation }: UserMenuBarProps) => {
  return (
    <div className="border-b-2 h-12 flex justify-center pt-3">
      <div>
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={setOnlyVacation}
          />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900">
            Only user in vacation
          </span>
        </label>
      </div>
    </div>
  )
}
