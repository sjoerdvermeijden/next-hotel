import React from 'react'

import { Trip } from '../types/accomodations'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Link from 'next/link'

import { accomodations } from '../../../data'

async function Accomodations() {

    return (
        <div className='flex flex-col w-full'>
            <div className='mb-3 flex items-center w-full'>
                <div className='mr-auto'>
                    <h3>accommodaties gevonden</h3>
                </div>
                <Tabs defaultValue="account">
                    <TabsList>
                        <TabsTrigger value="account">Lijst</TabsTrigger>
                        <TabsTrigger value="password">Raster</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <ul className='flex flex-col gap-3 w-full'>
                {
                    accomodations.map((item: Trip) => {
                        return <li key={item.id} className='p-2 rounded-md border border-gray-300 flex items-start'>
                            <div className="grow">
                                <Link href={`/accomodations/${item.id}`}>
                                    <h2 className='text-2xl font-bold text-blue-500'>{item.title}</h2>
                                </Link>
                                <p className='text-sm underline text-blue-500 font-bold'>Stad</p>
                                <p className='text-sm'>Centraal gelegen</p>
                            </div>
                            <div className='flex flex-col items-end'>
                                <p className='text-md mr-2 mb-0.5 leading-none font-semibold'>Beoordeling</p>
                                <p className='text-xs mr-2'>{item.ratings.length} beoordeling</p>
                            </div>
                            <span className='inline-block py-1 px-1.5 bg-blue-800 text-white rounded-t-md rounded-br-md font-bold'>9,2</span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Accomodations