import React from 'react'

type Props = {}

function Filters({ }: Props) {
    return (
        <div className='flex flex-col shrink-0 mr-2 border border-gray-300 rounded w-[250px]'>
            <div className="border-b p-2">
                <h3 className='text-2xl'>Filter op:</h3>
            </div>
            <div className="border-b p-2">
                <h3 className="font-bold">Type accomodatie:</h3>
            </div>
            <div className="border-b p-2">
                <h3 className="font-bold">Type accomodatie:</h3>
            </div>
            <div className="border-b p-2">
                <h3 className="font-bold">Type accomodatie:</h3>
            </div>
        </div >
    )
}

export default Filters