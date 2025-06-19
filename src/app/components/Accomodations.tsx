import React from 'react'

import { accomodations } from '../../../data'

interface Trip {
    id: number;
    title: string,
    country: string,
    adress: string,
    facilities: string[],
}

async function Accomodations() {
    return (
        <ul className='flex flex-col gap-2'>
            {
                accomodations.map((item: Trip) => {
                    return <li key={item.id} className='p-2 rounded-md border border-gray-300'>
                        <h2 className='text-2xl'>{item.title}</h2>
                        <p>{item.adress}</p>
                    </li>
                })
            }
        </ul>
    )
}

export default Accomodations