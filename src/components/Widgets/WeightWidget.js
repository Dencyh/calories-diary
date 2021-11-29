import React from 'react'

function WeightWidget(props) {
    return (
        <div className='widget mini'>
            <div className='widget__main-info'>
                <div className="widget__header">{props.widgetTitle}</div>
            </div>
            <div className='wrap'>
                <div className='widget__text'>Goal 80,0 kg</div>
                <div className='weight-wrapper'>
                    <button className='weight-button'>-</button>
                    <div className='widget__sub-value'>77.5 kg</div>
                    <button className='weight-button'>+</button>
                </div>
            </div>

        </div>
    )
}

export default WeightWidget
