export const Error = ({children}) => {
  return (
    <div>
        <p className='bg-red-800 p-3 uppercase , text-white  font-semibold mb-3 text-center rounded-md'>
            {children}
        </p>
    </div>
  )
}
