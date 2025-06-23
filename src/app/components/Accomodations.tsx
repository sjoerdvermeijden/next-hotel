'use client'

import React, { useContext } from 'react'

import { Trip } from '../types/accomodations'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Accomodation from './Accomodation'

import { accomodations } from '../../../data'

import { GridContext } from '../context/GridContext'

function Accomodations() {
    const { grid, setGrid } = useContext(GridContext)

    return (
        <div className='flex flex-col w-full'>
            <div className='mb-3 flex items-center w-full'>
                <div className='mr-auto'>
                    <h3 className='text-2xl font-bold'>accommodaties gevonden</h3>
                </div>
                <div>
                    <div>Lijst</div>
                    <div>Raster</div>
                </div>
            </div>
            <ul className={`${(grid ? 'grid grid-cols-3' : 'flex flex-col')} gap-3 w-full`}>
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