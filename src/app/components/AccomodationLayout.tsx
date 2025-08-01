'use client'

import React, { useState, useEffect } from 'react'

import { IconStarFilled, IconThumbUpFilled, IconMapPinFilled, IconHeart, IconShare, IconTag } from '@tabler/icons-react';

import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

import Image from 'next/image'

import { accomodations } from '../../../data'

import { Trip } from '../types/accomodations'

type Props = {
    id: number
}

function AccomodationLayout({ id }: Props) {
    const [accomodation, setAccomodation] = useState<Trip | undefined>();

    const accomodationId = id;

    useEffect(() => {
        accomodations.map((item) => {
            if (Number(item.id) === Number(accomodationId)) {
                setAccomodation(item);
            }
        })
    }, [])

    useEffect(() => {
        console.log(accomodation?.images[0]);
    }, [accomodation])


    return (
        <div>
            <div className='mb-6 border-b pb-4 text-sm'>
                <p><span className='text-blue-600'>Home</span> - Accomodation</p>
            </div>
            <div className='flex items-center mb-4'>
                <div className='mr-auto'>
                    <div className='flex items-center mb-2'>
                        <ul className='flex text-yellow-500 -mt-1.5 mr-1.5'>
                            <li className='mr-0.5'>
                                <IconStarFilled size={12} />
                            </li>
                            <li className='mr-0.5'>
                                <IconStarFilled size={12} />
                            </li>
                            <li>
                                <IconStarFilled size={12} />
                            </li>
                        </ul>
                        <div className='-mt-1.5 bg-yellow-500 py-0.5 px-1 rounded-sm'>
                            <IconThumbUpFilled color="white" size={14} />
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold mb-2'>{accomodation?.title}</h3>
                    <div className='flex items-center'><span className='inline-block mr-2 text-blue-500'><IconMapPinFilled size={20} /></span>{accomodation?.adress}</div>
                </div>
                <div className='flex flex-col items-end'>
                    <div className='flex items-center text-blue-500 mb-2'>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <span className='inline-block mr-2 rounded hover:bg-blue-50 p-4 cursor-pointer'><IconHeart size={24} /></span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className='font-bold'>Dit item opslaan</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>
                                    <span className='inline-block mr-2 rounded hover:bg-blue-50 p-4 cursor-pointer'><IconShare size={24} /></span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className='font-bold'>Deel deze accomodatie</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <button className='bg-blue-600 text-white rounded px-4 py-2 font-bold text-sm hover:bg-blue-700'>Boek nu</button>
                    </div>
                    <div className='flex items-center hover:bg-blue-50 p-2 rounded cursor-pointer'>
                        <div className='mr-2 text-blue-500'>
                            <IconTag size={18} />
                        </div>
                        <p className='text-sm text-blue-500 font-bold'>Wij matchen de prijs</p>
                    </div>
                </div>
            </div>
            <div className='flex items-start mb-4'>
                <div className='flex'>
                    <div className='mr-2'>
                        {
                            accomodation &&
                            <Image
                                priority
                                src={accomodation.images[0]}
                                width={545}
                                height={361}
                                style={{ objectFit: "cover", height: '361px', width: '545px', borderRadius: '5px' }}
                                quality={80}
                                alt="Picture of the author"
                            />
                        }
                    </div>
                    <div className='flex flex-col mr-2'>
                        <div className='mb-2'>
                            {
                                accomodation &&
                                <Image
                                    priority
                                    src={accomodation.images[0]}
                                    width={275}
                                    height={176}
                                    style={{ objectFit: "cover", height: '176px', width: '275px', borderRadius: '5px' }}
                                    quality={80}
                                    alt="Picture of the author"
                                />
                            }
                        </div>
                        <div>
                            {
                                accomodation &&
                                <Image
                                    priority
                                    src={accomodation.images[0]}
                                    width={275}
                                    height={176}
                                    style={{ objectFit: "cover", height: '176px', width: '275px', borderRadius: '5px' }}
                                    quality={80}
                                    alt="Picture of the author"
                                />
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border rounded-sm w-[265px]">
                    <div className='flex border-b p-2 justify-end'>
                        <div className="flex flex-col">
                            <p className="text-1xl mr-2 mb-0.5 leading-none">Beoordeling</p>
                            <p className='text-xs mr-2'>{accomodation?.ratings.length} beoordeling</p >
                        </div>
                        <span className="inline-block py-1 px-1.5 bg-blue-800 text-white rounded-t-md rounded-br-md font-bold">{7.7}</span>
                    </div>
                    <div className='flex p-2 items-center'>
                        <p className='text-sm font-bold mr-auto'>Uitstekende locatie!</p>
                        <span className="inline-block py-1 px-1.5 border rounded-t-md rounded-br-md font-bold">6.5</span>
                    </div>
                </div>
            </div>
            <div>
                <ul className='flex gap-2'>
                    {
                        accomodation?.facilities.map((item) => {
                            return <li key={item.id}><div className='border p-2 rounded-lg'>{item.label}</div></li>
                        })
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {
                        accomodation?.ratings.map((item) => {

                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default AccomodationLayout