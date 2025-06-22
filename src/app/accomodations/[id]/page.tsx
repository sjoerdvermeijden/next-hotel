import React from 'react'
import { accomodations } from '../../../../data'

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

export default async function AccomodationPage({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params
    return (
        <>
            <div className='container mx-auto flex flex-col py-4'>
                <h3 className='text-3xl text-blue-500 font-bold'>{id}</h3>
                <div>AccomodationPage</div>
            </div>
        </>
    )
}