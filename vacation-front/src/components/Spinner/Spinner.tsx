import { ThreeDots } from 'react-loader-spinner'

export const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#A9A9A9"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  )
}
