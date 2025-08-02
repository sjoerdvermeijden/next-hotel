'use client'

import React, { useState, useEffect } from 'react'

import { accomodations } from '../../../data'

import { Trip } from '../types/accomodations'

type Props = {
    id: number
}

function AccomodationReviews({ id }: Props) {
    const [accomodation, setAccomodation] = useState<Trip | undefined>();

    const accomodationId = id;

    useEffect(() => {
        accomodations.map((item) => {
            if (Number(item.id) === Number(accomodationId)) {
                setAccomodation(item);
            }
        })
    }, [])

    return (
        <div>
            <h3 className='text-1xl font-bold mb-2'>Gasten die hier verbleven vonden dit het beste</h3>
            <ul className='grid gap-2 grid-cols-3'>
                {
                    accomodation?.reviews.map((item, index) => {
                        return <li key={index}>
                            <div className='rounded border p-4 text-sm'>
                                <div className='flex items-center mb-2'>
                                    <span className='inline-flex font-bold text-white items-center justify-center bg-green-700 w-8 h-8 mr-2 rounded-[50%]'>{item?.firstName.charAt(0)}</span>
                                    <div className='flex flex-col'>
                                        <p className='font-bold'>{item?.firstName}</p>
                                        <p className="text-xs">{item?.country}</p>
                                    </div>
                                </div>
                                <p>&quot;{item?.review}&quot;</p>
                            </div>
                        </li>;
                    })
                }
            </ul>
        </div>
    )
}

export default AccomodationReviews