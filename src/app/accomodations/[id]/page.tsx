'use client'

import React from 'react'
import { accomodations } from '../../../../data'

import { Trip } from '@/app/types/accomodations'

export default async function AccomodationPage({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params

    return (
        <>
            <div className='container mx-auto flex flex-col py-4'>
                <h3 className='text-3xl text-blue-500 font-bold'>{user.name}</h3>
                <div>AccomodationPage</div>
            </div>
        </>
    )
}