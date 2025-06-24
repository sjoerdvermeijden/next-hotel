import React from 'react'

type Props = {
    value: string
}

function Tabs({ value }: Props) {
    return (
        <div>
            <div value="Test">Raster</div>
            <div value="Best">Lijst</div>
        </div>
    )
}

export default Tabs