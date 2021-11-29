import React from 'react'
import './DummyCalendar.scss'

function DummyCalendar() {


    return (
        <div className="dummy-calendar">
            <div className='calendar-grid'>
                <div className='col-1'>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                </div>
                <div className='col-2'>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                </div>
                <div className='col-3'>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                </div>
                <div className='col-4'>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                </div>

                <div className='col-5'>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                </div>
                <div className='col-6'>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                </div>
                <div className='col-7'>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                    <div className='calendar-grid__day'></div>
                </div>

            </div> {/* /calendar grid */}
            <div className="calendar__days-row">
                <div className='calendar__day'>M</div>
                <div className='calendar__day'>T</div>
                <div className='calendar__day'>W</div>
                <div className='calendar__day'>T</div>
                <div className='calendar__day'>F</div>
                <div className='calendar__day'>S</div>
                <div className='calendar__day'>S</div>
            </div>
        </div> /* /calendar */
    )
}

export default DummyCalendar
