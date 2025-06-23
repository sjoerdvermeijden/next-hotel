'use client';

import React, { useState } from 'react'

import { accomodation_type } from '../../../filters'

function Filters() {
    const [isActive, setIsActive] = useState<number[]>([]);

    return (
        <div className='flex flex-col shrink-0 mr-3 border border-gray-300 rounded w-[264px] text-sm'>
            <div className="border-b p-2">
                <p className='font-bold'>Filter op:</p>
            </div>
            <div className="border-b p-2">
                <h3 className="font-bold mb-2">Type accomodatie</h3>
                <ul>
                    {
                        accomodation_type.map((item) => {
                            return <li key={item.id} className='mb-3 flex items-center hover:cursor-pointer'>
                                <span className='inline-block w-5 h-5 border border-gray-500 mr-2 rounded-[3px]'></span>
                                <p className='mr-auto'>{item.label}</p>
                                <p>28</p>
                            </li>
                        })
                    }
                </ul>
            </div >
            <div className="border-b p-2">
                <h3 className="font-bold mb-2">Faciliteiten</h3>
                <ul>
                    {
                        accomodation_type.map((item, index) => {
                            return <li key={item.id} className='mb-3 flex items-center hover:cursor-pointer' onClick={() => setIsActive([...isActive, index])}>
                                <span className={`${(isActive.indexOf(index) > -1) ? 'bg-blue-500' : 'border-gray-500'} inline-block w-5 h-5 border  mr-2 rounded-[3px]`}></span>
                                <p className='mr-auto'>{item.label}</p>
                                <p>28</p>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="border-b p-2">
                <h3 className="font-bold mb-2">Sterren</h3>
                <ul>
                    {
                        accomodation_type.map((item) => {
                            return <li key={item.id} className='mb-3 flex items-center hover:cursor-pointer'>
                                <span className='inline-block w-5 h-5 border border-gray-500 mr-2 rounded-[3px]'></span>
                                <p className='mr-auto'>{item.label}</p>
                                <p>28</p>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="p-2">
                <h3 className="font-bold mb-2">Beoordeling</h3>
                <ul>
                    {
                        accomodation_type.map((item) => {
                            return <li key={item.id} className='mb-3 flex items-center hover:cursor-pointer'>
                                <span className='inline-block w-5 h-5 border border-gray-500 mr-2 rounded-[3px]'></span>
                                <p className='mr-auto'>{item.label}</p>
                                <p>28</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div >
    )
}

export default Filters