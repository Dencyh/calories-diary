import React, { useState } from "react"

function WeightWidget(props) {
    const [weight, setWeight] = useState((77.0).toFixed(1))


    return (
        <div className='widget mini'>
            <div className='widget__main-info'>
                <div className="widget__header">{props.widgetTitle}</div>
            </div>
            <div className='wrap'>
                <div className='widget__text'>Goal 80,0 kg</div>
                <div className='weight-wrapper'>
                    <button
                        className='weight-button'
                        onClick={() => setWeight(((parseFloat(weight) - 0.5)).toFixed(1))}
                    >-</button>
                    <div className='widget__sub-value'>{weight} kg</div>
                    <button
                        className='weight-button'
                        onClick={() => setWeight(((parseFloat(weight) + 0.5)).toFixed(1))}
                    >+</button>
                </div>
            </div>

        </div>
    )
}

export default WeightWidget
