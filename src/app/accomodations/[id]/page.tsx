import React from 'react'

import AccomodationLayout from "@/app/components/AccomodationLayout"

export default async function AccomodationPage({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params

    return (
        <>
            <div className='container mx-auto flex flex-col py-4'>
                <AccomodationLayout id={id} />
            </div>
        </>
    )
}