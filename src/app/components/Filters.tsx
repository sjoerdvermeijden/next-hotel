import React from 'react'

type Props = {}

function Filters({ }: Props) {
    return (
        <div className='flex flex-col shrink-0 mr-2 border border-gray-300 rounded w-[250px]'>
            <div className="border-b p-2">
                <p className='font-bold'>Filter op</p>
            </div>
            <div className="border-b p-2">
                <h3 className="font-bold">Type accomodatie</h3>
            </div>
            <div className="border-b p-2">
                <h3 className="font-bold">Faciliteiten</h3>
            </div>
            <div className="p-2">
                <h3 className="font-bold">Sterren</h3>
            </div>
        </div >
    )
}

export default Filters