import React from 'react'

import Image from 'next/image'
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
    images: string[]
}

async function Accomodations() {

    return (
        <ul className='flex flex-col gap-2 w-full'>
            {
                accomodations.map((item: Trip) => {
                    return <li key={item.id} className='p-2 rounded-md border border-gray-300 flex'>
                        <Image
                            src={item.images[0]}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                        />
                        <div className="grow">
                            <Link href={`/accomodations/${item.id}`}>
                                <h2 className='text-2xl font-bold text-blue-500'>{item.title}</h2>
                            </Link>
                            <p>{item.adress}</p>
                        </div>
                        <p className='text-xs'>{item.ratings.length} beoordeling</p>
                    </li>
                })
            }
        </ul>
    )
}

export default Accomodations