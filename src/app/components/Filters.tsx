import React from 'react'

import { accomodation_type } from '../../../filters'

function Filters() {
    return (
        <div className='flex flex-col shrink-0 mr-2 border border-gray-300 rounded w-[250px] text-sm'>
            <div className="border-b p-2">
                <p className='font-bold'>Filter op:</p>
            </div>
            <div className="border-b p-2">
                <h3 className="font-bold mb-2">Type accomodatie</h3>
                <ul>
                    {
                        accomodation_type.map((item) => {
                            return <li key={item.id} className='mb-1'>{item.label}</li>
                        })
                    }
                </ul>
            </div>
            <div className="border-b p-2">
                <h3 className="font-bold mb-2">Faciliteiten</h3>
                <ul>
                    {
                        accomodation_type.map((item) => {
                            return <li key={item.id} className='mb-1'>{item.label}</li>
                        })
                    }
                </ul>
            </div>
            <div className="border-b p-2">
                <h3 className="font-bold mb-2">Sterren</h3>
                <ul>
                    {
                        accomodation_type.map((item) => {
                            return <li key={item.id} className='mb-1'>{item.label}</li>
                        })
                    }
                </ul>
            </div>
            <div className="p-2">
                <h3 className="font-bold mb-2">Beoordeling</h3>
                <ul>
                    {
                        accomodation_type.map((item) => {
                            return <li key={item.id} className='mb-1'>{item.label}</li>
                        })
                    }
                </ul>
            </div>
        </div >
    )
}

export default Filters