import React from 'react'
import CurrentColoriesWidget from '../components/Widgets/CurrentColoriesWidget'
import AnalyseDayWidget from '../components/Widgets/AnalyseDayWidget'
import MacrosLinesWidget from '../components/Widgets/MacrosLinesWidget'
import ChartWidget from '../components/Widgets/ChartWidget'


function Dashboard() {
    return (
        <div className='main-view'>
            <div className='grid'>
                {/* <div className='one'> </div> */}

                <div className='top'>
                    <CurrentColoriesWidget />
                    <AnalyseDayWidget />
                    <MacrosLinesWidget />
                </div>
                <ChartWidget />

            </div>
        </div>
    )
}

export default Dashboard
