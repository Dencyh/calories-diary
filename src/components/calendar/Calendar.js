import React from 'react'
import moment from 'moment'
import './Calendar.scss'

function Calendar(props) {

    const value = moment()
    const startDay = value.clone().startOf('month').startOf('isoWeek')
    const endDay = value.clone().endOf('month').endOf('isoWeek')

    const day = startDay.clone().subtract(1, 'day')
    const calendar = []

    while (day.isBefore(endDay, 'day')) {
        calendar.push(
            Array(7)
                .fill(0)
                .map(() => day.add(1, 'day').clone())
        )
    }

    return (
        <div className='widget small'>
            <div className='widget__main-info'>
                <div className="widget__header">{props.widgetTitle}</div>

                {startDay.format('DD/MM/YYYY')} -
                {endDay.format('DD/MM/YYYY')}

                <div className='calendar'>
                    {
                        calendar.map((week) => <div className='week'>
                            {
                                week.map(day => <div className='day'>
                                    {day.format('D').toString()}
                                </div>)
                            }
                        </div>)
                    }
                </div> {/* /calendar */}
            </div>
        </div>
    )
}

export default Calendar