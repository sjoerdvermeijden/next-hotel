import React from 'react'

import Link from 'next/link'

type Props = {}

function Header({ }: Props) {
    return (
        <div className='bg-red-400 p-2'>
            <div className='container mx-auto'>
                <Link href="/"><h3 className="text-3xl">Header</h3></Link>
            </div>
        </div>
    )
}

export default Header