import React from 'react'

import { IconBed, IconPlane, IconCar, IconBuildingSkyscraper, IconBuildingCarousel, IconBuildingAirport } from '@tabler/icons-react';
import Link from 'next/link'

function Header() {
    return (
        <div className='bg-blue-800 p-4'>
            <div className='container max-w-[1075px] mx-auto flex mb-2'>
                <div className="flex w-full">
                    <Link href="/" className='mr-auto'><h3 className="text-2xl text-white font-bold">Booking.com</h3></Link>
                    <div className='flex items-center'>
                        <div className='text-white font-bold mr-[10px] px-[9px] py-[7px] rounded-[3px] hover:bg-blue-900 cursor-pointer'>EUR</div>
                        <div className="flex items-center justify-center mr-[10px] px-[9px] py-[7px] rounded-[3px] hover:bg-blue-900 cursor-pointer">
                            <span className="inline-flex items-center justify-center text-center text-white w-5 h-5 border border-white text-xs rounded-[50%]">?</span>
                        </div>
                        <span className='font-bold text-white mr-2 transition-colors hover:bg-blue-900 px-4 py-2 rounded cursor-pointer'>Registreer je accommodatie</span>
                        <div className='flex text-blue-500 font-bold text-sm'>
                            <div className='bg-white mr-[10px] px-[9px] py-[7px] rounded-[3px] hover:bg-blue-50 cursor-pointer'>Registreren</div>
                            <div className='bg-white px-[9px] py-[7px] rounded-[3px] hover:bg-blue-50 cursor-pointer'>Inloggen</div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='flex lg:mx-auto lg:container'>
                <ul className="flex no-wrap text-white font-bold text-sm overflow-y-scroll">
                    <li className="mr-1">
                        <a className="flex border border-color-white py-3 pl-4 pr-3 rounded-3xl hover:bg-blue-700 transition-colors hover:cursor-pointer">
                            <span className="inline-block mr-2">
                                <IconBed size={20} />
                            </span>
                            <span>Verblijven</span>
                        </a>
                    </li>
                    <li className="mr-1">
                        <a className="flex py-3 pl-4 pr-3 rounded-3xl hover:bg-blue-700 transition-colors hover:cursor-pointer">
                            <span className="inline-block mr-2">
                                <IconPlane size={20} />
                            </span>
                            <span>Vluchten</span>
                        </a>
                    </li>
                    <li className="mr-1">
                        <a className="flex py-3 pl-4 pr-3 rounded-3xl hover:bg-blue-700 transition-colors hover:cursor-pointer">
                            <span className="inline-block mr-2">
                                <IconBuildingSkyscraper size={20} />
                            </span>
                            <span>Vlucht + Hotel</span>
                        </a>
                    </li>
                    <li className="mr-1">
                        <a className="flex py-3 pl-4 pr-3 rounded-3xl hover:bg-blue-700 transition-colors hover:cursor-pointer">
                            <span className="inline-block mr-2">
                                <IconCar size={20} />
                            </span>
                            <span>Autoverhuur</span>
                        </a>
                    </li>
                    <li className="mr-1">
                        <a className="flex py-3 pl-4 pr-3 rounded-3xl hover:bg-blue-700 transition-colors hover:cursor-pointer">
                            <span className="inline-block mr-2">
                                <IconBuildingCarousel size={20} />
                            </span>
                            <span>Attracties</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex py-3 pl-4 pr-3 rounded-3xl hover:bg-blue-700 transition-colors hover:cursor-pointer">
                            <span className="inline-block mr-2">
                                <IconBuildingAirport size={20} />
                            </span>
                            <span>Luchthaventaxi&apos;s </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header