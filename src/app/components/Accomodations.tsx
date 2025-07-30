'use client'

import React, { useContext } from 'react'

import { Trip } from '../types/accomodations'

import Accomodation from './Accomodation'

import { accomodations } from '../../../data'

import { GridContext } from '../context/GridContext'

function Accomodations() {
    const { grid, setGrid } = useContext(GridContext)

    return (
        <div className='flex flex-col w-full'>
            <div className='mb-3 flex items-center w-full'>
                <div className='mr-auto'>
                    <h3 className='text-1xl font-extrabold'>Spanje: 1039 accommodaties gevonden</h3>
                </div>
                <div className='flex items-center bg-gray-100 px-2 py-1 rounded-2xl text-sm'>
                    <div className='mr-2 bg-white px-4 py-2 rounded-xl' onClick={() => setGrid(!grid)}>Lijst</div>
                    <div onClick={() => setGrid(!grid)}>Raster</div>
                </div>
            </div>
            <ul className={`${(grid ? 'grid grid-cols-3' : 'flex flex-col')} gap-3 w-full`}>
                {
                    accomodations.map((item: Trip, index) => {
                        return <li key={item.id} className={`${grid ? 'flex-col' : 'items-start p-4'} rounded-md border border-gray-300 flex`}>
                            <Accomodation {...item} />
                        </li>
                    })
                }
            </ul>
        </div >
    )
}

export default Accomodations