import React from 'react'

const Layout = ({children}: {children: React.ReactNode }) => {
  return (
    <div>
        <p>Navbar 1</p>
        {children}
    </div>
  )
}

export default Layout