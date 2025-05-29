import React from 'react'

const layout = ({children} :{children :React.ReactNode}) => {
  return (
    <div>
        <p className='text-red-700'>Dashboard Navbar</p>
        {children}
    </div>
  )
}

export default layout