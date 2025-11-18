function Button({text}) {
  return (
    <button className='bg-blue-200 cursor-pointer text-neutral-700 hover:bg-blue-300 hover:text-white px-3 py-1 shadow inset-shadow-black rounded-lg ms-3 transition'>
      {text}
    </button>
  )
}

export default Button
