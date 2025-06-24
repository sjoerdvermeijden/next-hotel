'use client'

import React, { useContext, useState, useEffect } from 'react'

import { Trip } from '../types/accomodations'

import Link from 'next/link'
import Image from 'next/image'

import { IconChevronRight } from '@tabler/icons-react';
import { IconHeart, IconHeartFilled, IconStarFilled } from '@tabler/icons-react';

import { GridContext } from '../context/GridContext'

function Accomodation({ id, title, ratings, images, short_description }: Trip, index: number) {
    const { grid } = useContext(GridContext)
    const [isSaved, setIsSaved] = useState<number[]>([]);
    const [rating, setRating] = useState<number>();

    const toggleSaved = (index: number) => {
        if (isSaved.indexOf(index) === -1) {
            setIsSaved([...isSaved, index])
        } else {
            const newArray = isSaved.filter(function (item) {
                return item !== index
            })

            setIsSaved(newArray);
        };
    }

    useEffect(() => {
        // Returns all the ratings for single accomodation
        const getAllRatings = ratings.map((item) => {
            return item.rating;
        })

        // Reduces all the ratings to one number
        const totalNumber = getAllRatings.reduce((a, v) => a = a + v, 0)

        // Get total amount of ratings
        const totalAmountOfRatings = ratings.length;

        // Devides the total number to amount of ratings
        const getSingleRating = () => {
            return totalNumber / totalAmountOfRatings;
        }

        setRating(getSingleRating());
    }, [])

    return (
        <>
            <div className={`${grid ? 'flex-col' : ''} flex`}>
                <div className={`${grid ? '' : 'mr-4'} relative`}>
                    {
                        grid ? <div style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', overflow: 'hidden' }} className='w-full'>
                            <Image
                                priority
                                src={images[0]}
                                width={268}
                                height={240}
                                style={{ objectFit: "cover", height: '240px', width: '268px' }}
                                quality={80}
                                alt="Picture of the author"
                            />
                        </div> : <div style={{ borderRadius: '5px', overflow: 'hidden' }} className='w-[240px]'>
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
                    }
                    <div className='w-9 h-9 bg-white transition-colors rounded-[50%] absolute right-[10px] top-[10px] flex items-center justify-center hover:bg-gray-100 cursor-pointer' onClick={() => toggleSaved(index)}>
                        {(isSaved.indexOf(index) > -1) ? <div className='text-red-600'><IconHeartFilled /></div> : <IconHeart stroke={1} />}
                    </div>
                </div>
                <div className={` ${grid ? 'p-2 flex-col' : ''} flex w-full`}>
                    <div className='grow'>
                        <div className='flex items-center'>
                            <Link href={`/accomodations/${id}`}>
                                <h2 className={`${grid ? 'text-base' : 'text-2xl'}  font-bold text-blue-500 mr-2 mb-1.5`}>{title}</h2>
                            </Link>

                            {
                                grid ?
                                    <ul className='flex text-yellow-400 -mt-1'>
                                        <li className='mr-1'>
                                            <IconStarFilled size={12} />
                                        </li>
                                        <li className='mr-1'>
                                            <IconStarFilled size={12} />
                                        </li>
                                        <li>
                                            <IconStarFilled size={12} />
                                        </li>
                                    </ul>
                                    :
                                    <ul className='flex text-yellow-400 -mt-1'>
                                        <li className='mr-1'>
                                            <IconStarFilled size={14} />
                                        </li>
                                        <li className='mr-1'>
                                            <IconStarFilled size={14} />
                                        </li>
                                        <li>
                                            <IconStarFilled size={14} />
                                        </li>
                                    </ul>
                            }
                        </div>
                        <div className='text-xs mb-2'>
                            <p className='underline text-blue-500 font-bold mb-1'>Stad</p>
                            <p className='mb-1'>Centraal gelegen</p>
                            <p>{short_description}</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className={`${grid ? '-order-1' : 'items-end'} flex flex-col`}>
                            <div className={`${grid ? 'items-center' : ''} flex mb-2`}>
                                <div className={`${grid ? '' : 'flex-col'} flex items-end `}>
                                    <p className={`${grid ? 'text-xs' : 'font-semibold text-md'} mr-2 mb-0.5 leading-none`}>Beoordeling</p>
                                    <p className='text-xs mr-2'>{ratings.length} beoordeling</p>
                                </div>
                                <span className={`${grid ? 'text-xs -order-1 mr-2' : ''} inline-block py-1 px-1.5 bg-blue-800 text-white rounded-t-md rounded-br-md font-bold`}>{rating?.toFixed(1)}</span>
                            </div>
                        </div>
                        <Link href={`/accomodations/${id}`} className={`${grid ? 'self-end' : ''} bg-blue-500 font-bold text-sm text-white p-2 rounded-sm flex transition-colors items-center hover:bg-blue-600`}>
                            Bekijk beschikbaarheid <IconChevronRight stroke={2} />
                        </Link>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Accomodation