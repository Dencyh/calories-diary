import React from 'react'
import CurrentColoriesWidget from '../components/Widgets/CurrentColoriesWidget'
import AnalyseDayWidget from '../components/Widgets/AnalyseDayWidget'
import MacrosLinesWidget from '../components/Widgets/MacrosLinesWidget'

function Food() {
    return (
        <div className='main-view'>
            <div className='grid'>
                <div className='row'>
                    <CurrentColoriesWidget />
                    <AnalyseDayWidget />
                    <MacrosLinesWidget />
                </div>
                <div className='row'>
                    <CurrentColoriesWidget />
                    <AnalyseDayWidget />
                    <MacrosLinesWidget />
                </div>

            </div>
        </div>
    )
}

export default Food
