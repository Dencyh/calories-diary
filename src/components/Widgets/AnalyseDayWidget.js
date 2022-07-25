import React from 'react'
import DummyCalendar from '../dummyCalendar/DummyCalendar'

function AnalyseDayWidget() {
    return (
        <div className='widget small'>
            <div className='widget__main-info'>
                <div className="widget__header">average intake by day</div>
                <h1 className='widget__main-value'>2041</h1>
                <p className='widget__text'>You eat <span className='accent-value red'>8,5%</span> more your daily goal on Fridays</p>
            </div>

            <DummyCalendar />
        </div>
    )
}

export default AnalyseDayWidget
