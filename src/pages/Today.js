import React, { useState } from 'react'
import AddMealWidget from '../components/Widgets/AddMealWidget'
import WeightWidget from '../components/Widgets/WeightWidget'
import NotesWidget from '../components/Widgets/NotesWidget'
import Calendar from '../components/calendar/Calendar'
import AddNewFood from '../components/Widgets/AddNewFood'

function Today() {


    return (
        <div className='main-view'>
            <div className='grid'>
                <div className='row'>
                    <AddMealWidget widgetTitle='breakfast' />
                    <AddMealWidget widgetTitle='lunch' />
                    <Calendar widgetTitle='calendar' />
                </div>
                <div className='row'>
                    <AddMealWidget widgetTitle='snacks' />
                    <AddMealWidget widgetTitle='dinner' />
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
