import React from 'react'

import Link from 'next/link'

function Header() {
    return (
        <div className='bg-blue-800 p-4'>
            <div className='container max-w-[1075px] mx-auto flex items-center'>
                <Link href="/" className='mr-auto'><h3 className="text-2xl text-white font-bold">Booking.com</h3></Link>
                <div className='flex items-center'>
                    <span className='font-bold text-white mr-2 transition-colors hover:bg-blue-900 px-4 py-2 rounded cursor-pointer'>Registreer je accomodatie</span>
                    <div className='flex text-blue-500 font-bold text-sm'>
                        <div className='bg-white mr-[10px] px-[10px] py-[7px] rounded-[3px] hover:bg-blue-50 cursor-pointer'>Registreren</div>
                        <div className='bg-white px-[10px] py-[7px] rounded-[3px] hover:bg-blue-50 cursor-pointer'>Inloggen</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header