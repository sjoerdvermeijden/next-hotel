'use client'

import React, { useState, useEffect } from 'react'

import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { accomodations } from '../../../data'

import { Trip } from '../types/accomodations'

type Props = {
    id: number
}

function AccomodationReviews({ id }: Props) {
    const [accomodation, setAccomodation] = useState<Trip | undefined>();

    const navigationPrevRef = React.useRef<HTMLButtonElement | null>(null)
    const navigationNextRef = React.useRef<HTMLButtonElement | null>(null)

    const accomodationId = id;

    useEffect(() => {
        accomodations.map((item) => {
            if (Number(item.id) === Number(accomodationId)) {
                setAccomodation(item);
            }
        })
    }, [])

    return (
        <div>
            <h3 className='text-1xl font-bold mb-2'>Gasten die hier verbleven vonden dit het beste</h3>
            <div className='relative'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.navigation.nextEl = navigationNextRef.current!;
                        swiper.navigation.prevEl = navigationPrevRef.current!;
                    }}
                >
                    {
                        accomodation?.reviews.map((item, index) => {
                            return <li key={index}>
                                <SwiperSlide>
                                    <div className='rounded border p-4 text-sm'>
                                        <div className='flex items-center mb-2'>
                                            <span className='inline-flex font-bold text-white items-center justify-center bg-green-700 w-8 h-8 mr-2 rounded-[50%]'>{item?.firstName.charAt(0)}</span>
                                            <div className='flex flex-col'>
                                                <p className='font-bold'>{item?.firstName}</p>
                                                <p className="text-xs">{item?.country}</p>
                                            </div>
                                        </div>
                                        <p>&quot;{item?.review}&quot;</p>
                                    </div>
                                </SwiperSlide>
                            </li>;
                        })
                    }
                </Swiper>
                <button className='absolute -left-6 top-[50%] w-12 h-12 -translate-y-[50%] rounded-[50%] shadow-lg bg-white z-10 flex items-center justify-center' ref={navigationPrevRef}><IconChevronLeft stroke={2} /></button>
                <button className='absolute -right-6 top-[50%] w-12 h-12 -translate-y-[50%] rounded-[50%] shadow-lg bg-white z-10 flex items-center justify-center' ref={navigationNextRef}><IconChevronRight stroke={2} /></button>
            </div>
            <button className='border border-blue-600 text-blue-600 border-w-2 py-2 px-4 mt-6 rounded font-bold text-sm'>Lees alle beoordelingen</button>
        </div>
    )
}

export default AccomodationReviews