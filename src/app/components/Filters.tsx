'use client';

import React, { useState } from 'react'

import { IconCheck } from '@tabler/icons-react';

import { accomodation_type, accomodation_stars, accomodation_facilities } from '../../../filters'

function Filters() {
    const [activeFacility, setActiveFacility] = useState<number[]>([]);
    const [activeAccomodation, setActiveAccomodation] = useState<number[]>([]);
    const [activeStars, setActiveStars] = useState<number[]>([]);

    const facilityFilter = (index: number) => {
        if (activeFacility.indexOf(index) === -1) {
            setActiveFacility([...activeFacility, index])
        } else {
            const newArray = activeFacility.filter(function (item) {
                return item !== index
            })

            setActiveFacility(newArray);
        };
    }

    const accomodationFilter = (index: number) => {
        if (activeAccomodation.indexOf(index) === -1) {
            setActiveAccomodation([...activeAccomodation, index])
        } else {
            const newArray = activeAccomodation.filter(function (item) {
                return item !== index
            })

            setActiveAccomodation(newArray);
        };
    }

    const starFilter = (index: number) => {
        if (activeStars.indexOf(index) === -1) {
            setActiveStars([...activeStars, index])
        } else {
            const newArray = activeStars.filter(function (item) {
                return item !== index
            })

            setActiveStars(newArray);
        };
    }

    return (
        <div className='flex flex-col shrink-0 mr-4 border border-gray-300 rounded w-[264px] text-sm'>
            <div className="border-b p-2">
                <p className='font-bold'>Filter op:</p>
            </div>
            <div className="border-b p-2">
                <h3 className="font-bold mb-2">Type accomodatie</h3>
                <ul>
                    {
                        accomodation_type.map((item, index) => {
                            return <li key={item.id} className='mb-3 flex items-center hover:cursor-pointer' onClick={() => accomodationFilter(index)}>
                                <span className={`${(activeAccomodation.indexOf(index) > -1) ? 'bg-blue-500' : 'border-gray-500'} w-5 h-5 border flex items-center justify-center mr-2 rounded-[3px]`}>
                                    <span className='text-white text-xs'>
                                        <IconCheck stroke={2} size={14} />
                                    </span>
                                </span>
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
                        accomodation_facilities.map((item, index) => {
                            return <li key={item.id} className='mb-3 flex items-center hover:cursor-pointer' onClick={() => facilityFilter(index)}>
                                <span className={`${(activeFacility.indexOf(index) > -1) ? 'bg-blue-500' : 'border-gray-500'} w-5 h-5 border flex items-center justify-center mr-2 rounded-[3px]`}>
                                    <span className='text-white text-xs'>
                                        <IconCheck stroke={2} size={14} />
                                    </span>
                                </span>
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
                        accomodation_stars.map((item, index) => {
                            return <li key={item.id} className='mb-3 flex items-center hover:cursor-pointer' onClick={() => starFilter(index)}>
                                <span className={`${(activeStars.indexOf(index) > -1) ? 'bg-blue-500' : 'border-gray-500'} w-5 h-5 border flex items-center justify-center mr-2 rounded-[3px]`}>
                                    <span className='text-white text-xs'>
                                        <IconCheck stroke={2} size={14} />
                                    </span>
                                </span>
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
                        accomodation_type.map((item, index) => {
                            return <li key={item.id} className='mb-3 flex items-center hover:cursor-pointer'>
                                <span className='inline-block w-5 h-5 border border-gray-500 mr-2 rounded-[3px]'>
                                    <span className='text-white text-xs'>
                                        <IconCheck stroke={2} size={14} />
                                    </span>
                                </span>
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