import React from 'react'

import Link from 'next/link'

function Header() {
    return (
        <div className='bg-blue-800 p-2'>
            <div className='container mx-auto'>
                <Link href="/"><h3 className="text-3xl text-white font-bold">Booking.com</h3></Link>
            </div>
        </div>
    )
}

export default Header