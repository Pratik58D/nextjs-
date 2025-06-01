import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
        {/* <h1 className='text-blue-500'>Navbar</h1> */}
        {children}
        </div>
  )
}

export default layout