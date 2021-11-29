import React from 'react'

function AddMealWidget(props) {
    return (
        <div className='widget small'>
            <div className='widget__main-info'>
                <div className="widget__header">{props.widgetTitle}</div>
            </div>
            <div className='wrap'>
                <button className='add-meal-button'>Add</button>
            </div>
        </div>
    )
}

export default AddMealWidget
