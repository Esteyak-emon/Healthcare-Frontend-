import React from 'react'
import { Outlet, NavLink as Link } from 'react-router'
import { Button } from '~/components/ui/button'



function BaseLayout() {
    return (
        <div className='bg-slate-100 min-h-screen overflow-hidden space-y-5'>
            <nav className='max-w-6xl mx-auto shadow-sm border border-gray-400 bg-white my-6 p-5 rounded-sm flex justify-between items-center'>
                <h1 className='font-bold text-xl text-orange-500'>
                    <a href="/">
                        Healthcare
                    </a>
                </h1>
                <ol className='w-full flex justify-center gap-10'>
                    <li className='hover:cursor-pointer transition-all duration-150 ease-in-out hover:text-blue-400'>
                        <Link to={'/hospitals'}>
                            Hospitals
                        </Link>
                    </li>
                    <li className='hover:cursor-pointer transition-all duration-150 ease-in-out hover:text-blue-400'>
                        <Link to={'/doctors'}>
                            Doctors
                        </Link>
                    </li>
                    <li className='hover:cursor-pointer transition-all duration-150 ease-in-out hover:text-blue-400'>
                        <Link to={'/patients'}>
                            Patients
                        </Link>
                    </li>
                    <li className='hover:cursor-pointer transition-all duration-150 ease-in-out hover:text-blue-400'>
                        <Link to={'/appointments'}>
                            Appointments
                        </Link>
                    </li>
                </ol>
                <div>
                    <Link to={'/contact'}>
                        <Button size={'lg'} className='bg-orange-500 hover:bg-orange-700 cursor-pointer'>Contact</Button>
                    </Link>
                </div>
            </nav>
            <main className='max-w-6xl min-h-32 mx-auto shadow-sm bg-white p-5 rounded-sm'>
                {/* {
                    Array.from({ length: 130 }).map((_, index) => (
                        <div key={index} className='h-10 w-32 bg-slate-400 my-10'></div>
                    ))
                } */}
                <Outlet />
            </main>
        </div>
    )
}

export default BaseLayout