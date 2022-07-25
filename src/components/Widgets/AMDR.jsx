import React from 'react'

function AMDR({ min, max, className }) {
    const marginRightText = (100 - max - 4) + '%'
    const marginLeftText = (min - 3) + '%'
    const width = (max - min) + '%'


    return (
        <div className={className}>
            <div className='amdr-borders__borders' style={{ width: width, marginLeft: min + '%' }}></div>
            < div className='amdr-borders__text' style={{ marginRight: marginRightText, marginLeft: marginLeftText }}>
                <div>{min}%</div>
                <div>{max}%</div>
            </div >
        </div>
    )
}

export default AMDR
