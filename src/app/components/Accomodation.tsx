'use client'

import React, { useContext } from 'react'

import { Trip } from '../types/accomodations'

import Link from 'next/link'
import Image from 'next/image'

import { IconChevronRight } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';

import { GridContext } from '../context/GridContext'

function Accomodation({ id, title, ratings, images, short_description }: Trip) {
    const { grid } = useContext(GridContext)

    return (
        <>
            <div className={`${grid ? 'flex-col' : ''} flex`}>
                <div className={`${grid ? '' : 'mr-4'} relative`}>
                    <div style={{ borderRadius: '5px', overflow: 'hidden' }} className={`${grid ? 'w-full' : 'w-[240px]'}`}>
                        <Image
                            priority
                            src={images[0]}
                            width={240}
                            height={240}
                            style={{ objectFit: "cover", height: '240px', width: '240px' }}
                            quality={80}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='w-9 h-9 bg-white transition-colors rounded-[50%] absolute right-[10px] top-[10px] flex items-center justify-center hover:bg-gray-100 cursor-pointer'>
                        <IconHeart stroke={1} />
                    </div>
                </div>
                <div className={` ${grid ? 'p-2 flex-col' : ''} flex w-full`}>
                    <div className='grow'>
                        <Link href={`/accomodations/${id}`}>
                            <h2 className={`${grid ? 'text-base' : 'text-2xl'}  font-bold text-blue-500 mb-1.5`}>{title}</h2>
                        </Link>
                        <div className='text-xs mb-2'>
                            <p className='underline text-blue-500 font-bold mb-1'>Stad</p>
                            <p className='mb-1'>Centraal gelegen</p>
                            <p>{short_description}</p>
                        </div>
                    </div>
                    <div>
                        <div className={`${grid ? '-order-1' : 'items-end'} flex flex-col`}>
                            <div className={`${grid ? 'items-center' : ''} flex mb-2`}>
                                <div className={`${grid ? '' : 'flex-col'} flex items-end `}>
                                    <p className={`${grid ? 'text-xs' : 'font-semibold text-md'} mr-2 mb-0.5 leading-none`}>Beoordeling</p>
                                    <p className='text-xs mr-2'>{ratings.length} beoordeling</p>
                                </div>
                                <span className={`${grid ? 'text-xs' : ''} inline-block py-1 px-1.5 bg-blue-800 text-white rounded-t-md rounded-br-md font-bold`}>9,2</span>
                            </div>
                        </div>
                        <button className={`${grid ? 'self-end' : ''} bg-blue-500 font-bold text-sm text-white p-2 rounded-sm flex items-center`}>Bekijk beschikbaarheid <IconChevronRight stroke={2} /></button>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Accomodation