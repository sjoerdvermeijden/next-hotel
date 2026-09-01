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
                    <h2 className='text-[20px] font-extrabold'>Spanje: 1039 accommodaties gevonden</h2>
                </div>
                <div className='flex items-center bg-gray-100 border border-color-200 px-1 py-1 rounded-2xl text-sm'>
                    <div className={`${(grid ? '' : 'bg-white border rounded-xl')} px-2 py-1 border-gray-400 hover:cursor-pointer`} onClick={() => setGrid(false)}>Lijst</div>
                    <div className={`${(grid ? 'bg-white border rounded-xl' : '')} px-2 py-1 border-gray-400 hover:cursor-pointer`} onClick={() => setGrid(true)}>Raster</div>
                </div>
            </div>
            <ul className={`${(grid ? 'grid grid-cols-3' : 'flex flex-col')} gap-3 w-full`}>
                {
                    accomodations.map((item: Trip) => {
                        return <li key={item.id} className={`${grid ? 'flex-col' : 'items-start p-4'} rounded-lg border border-gray-200 flex`}>
                            <Accomodation {...item} />
                        </li>
                    })
                }
            </ul>
        </div >
    )
}

export default Accomodations