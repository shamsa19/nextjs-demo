"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constants'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '../../sheet';
import { NavLinks } from './NavLinks'
import ROUTES from '@/constants/routes';
import { Button } from '../../button';


const LeftSidebar = () => {
     const pathname = usePathname();
     const userId = 1; 

    const isLoggedIn = pathname === ROUTES.SIGN_IN || pathname === ROUTES.SIGN_UP;

    return (
        <div className='flex pt-16 background-light900_dark200 border-none no-scrollbar sticky px-3 '>
            <Link
                href='/'
                className='flex items-center gap-1'
            >
            </Link>
            <div className='no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between  overflow-y-auto'>
                <div>
                    <section className='flex flex-col justify-between gap-6 pt-16'>
                        <NavLinks />
                    </section>
                </div>

                <div className='flex flex-col gap-3 '>
                    {userId ? (
                        <Link href={ROUTES.SIGN_UP} className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                            Logout
                        </Link>
                    ) : (
                        !isLoggedIn && (
                        <>
                            <Link href={ROUTES.SIGN_IN}>
                                <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                                    <span className='primary-text-gradient'>Log In</span>
                                </Button>
                            </Link>


                            <Link href={ROUTES.SIGN_UP}>
                                <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                                    Sign Up
                                </Button>
                            </Link>



                        </>
                        )
                    )}
               
                </div>
                </div>
                </div>
    )
}

                export default LeftSidebar