import React from 'react'

import { Trip } from '../types/accomodations'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Accomodation from './Accomodation'

import { accomodations } from '../../../data'

async function Accomodations() {

    return (
        <div className='flex flex-col w-full'>
            <div className='mb-3 flex items-center w-full'>
                <div className='mr-auto'>
                    <h3 className='text-2xl font-bold'>accommodaties gevonden</h3>
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
                        return <li key={item.id} className='p-4 rounded-md border border-gray-300 flex items-start'>
                            <Accomodation {...item} />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Accomodations