import React from 'react'
import MealWidget from '../components/Widgets/MealWidget'
import WeightWidget from '../components/Widgets/WeightWidget'
import NotesWidget from '../components/Widgets/NotesWidget'
import Calendar from '../components/calendar/Calendar'


function Today() {


    return (
        <div className='main-view'>
            <div className='grid'>
                <div className='row'>
                    <MealWidget widgetTitle='breakfast' />
                    <MealWidget widgetTitle='lunch' />
                    <Calendar widgetTitle='calendar' />
                </div>
                <div className='row'>
                    <MealWidget widgetTitle='snacks' />
                    <MealWidget widgetTitle='dinner' />
                    <div className='widget small background-none'>
                        <WeightWidget widgetTitle='weight' />
                        <NotesWidget widgetTitle='notes' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Today
