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

                <div className='row'>
                    <CurrentColoriesWidget />
                    <AnalyseDayWidget />
                    <MacrosLinesWidget />
                </div>
                <div className='row'>
                    <ChartWidget />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
