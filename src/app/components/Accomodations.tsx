import React from 'react'

import Link from 'next/link'

import { accomodations } from '../../../data'

interface Trip {
    id: number;
    title: string,
    country: string,
    adress: string,
    facilities: string[],
    accomodation_type: string,
    ratings: [
        Array<{
            id: number,
            firstName: string,
            lastName: string,
            rating: number
        }>
    ],
}

async function Accomodations() {
    return (
        <ul className='flex flex-col gap-2 w-full'>
            {
                accomodations.map((item: Trip) => {
                    return <li key={item.id} className='p-2 rounded-md border border-gray-300'>
                        <Link href={`/accomodations/${item.id}`}>
                            <h2 className='text-2xl font-bold text-blue-500'>{item.title}</h2>
                        </Link>
                        <p>{item.adress}</p>
                    </li>
                })
            }
        </ul>
    )
}

export default Accomodations