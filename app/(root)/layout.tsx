import React from 'react'
import Navbar from '@/components/ui/navigation/navbar';
import LeftSidebar from '@/components/ui/navigation/navbar/LeftSidebar';

const RootLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <main>
        <Navbar /> 
         <LeftSidebar />
        {children}
    </main>
  )
}

export default RootLayout