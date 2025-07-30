import React from 'react'

import Link from 'next/link'

function Header() {
    return (
        <div className='bg-blue-800 p-2'>
            <div className='container mx-auto flex items-center'>
                <Link href="/" className='mr-auto'><h3 className="text-3xl text-white font-bold">Booking.com</h3></Link>
                <div className='flex items-center'>
                    <span className='font-bold text-white mr-4'>Registreer je accomodatie</span>
                    <div className='flex text-blue-500 font-bold text-sm'>
                        <div className='bg-white mr-2 px-2 py-1 rounded-sm'>Registreren</div>
                        <div className='bg-white px-2 py-1 rounded-sm'>Inloggen</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header