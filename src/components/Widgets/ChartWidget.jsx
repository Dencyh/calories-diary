import React from 'react'
import Chart from '../Chart'

function CurrentColoriesWidget() {
    return (
        <div className='widget wide'>
            <div className='widget__main-info'>
                <div className="widget__header">average daily calories</div>
            </div>
            <div className='chart-container'>
                <Chart />
            </div>
        </div>
    )
}

export default CurrentColoriesWidget
