import React from 'react'

import { Trip } from '../types/accomodations'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Link from 'next/link'
import Image from 'next/image'

import { IconChevronRight } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';

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
                            <div className='relative mr-4'>
                                <div style={{ borderRadius: '5px', overflow: 'hidden' }} className='w-[240px]'>
                                    <Image
                                        priority
                                        src={item.images[0]}
                                        width={240}
                                        height={240}
                                        style={{ objectFit: "cover", height: '240px', width: '240px' }}
                                        quality={80}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className='w-9 h-9 bg-white rounded-[50%] absolute right-[10px] top-[10px] flex items-center justify-center'>
                                    <IconHeart stroke={1} />
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className='grow'>
                                    <Link href={`/accomodations/${item.id}`}>
                                        <h2 className='text-2xl font-bold text-blue-500 mb-1.5'>{item.title}</h2>
                                    </Link>
                                    <p className='text-xs underline text-blue-500 font-bold mb-1'>Stad</p>
                                    <p className='text-xs'>Centraal gelegen</p>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <div className='flex mb-2'>
                                        <div className='flex flex-col items-end'>
                                            <p className='text-md mr-2 mb-0.5 leading-none font-semibold'>Beoordeling</p>
                                            <p className='text-xs mr-2'>{item.ratings.length} beoordeling</p>
                                        </div>
                                        <span className='inline-block py-1 px-1.5 bg-blue-800 text-white rounded-t-md rounded-br-md font-bold'>9,2</span>
                                    </div>
                                    <button className='bg-blue-500 font-bold text-sm text-white p-2 rounded-sm flex items-center'>Bekijk beschikbaarheid <IconChevronRight stroke={2} /></button>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Accomodations