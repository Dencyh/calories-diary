import React from 'react'

function CurrentColoriesWidget() {
    return (
        <div className='widget small'>
            <div className='widget__main-info'>
                <div className="widget__header">Current colories</div>
                <h1 className='widget__main-value'>1421</h1>
                <p className='widget__text'>You’ve got <span className='accent-value green'>71,5%</span> of your daily plan</p>
            </div>

            <div className="widget__additional-info">
                <div className='widget__additional-container  border-right'>
                    <p className='widget__text'>To hit the daily goal</p>
                    <div className='widget__sub-value'>579</div>
                </div>

                <div className='widget__additional-container'>
                    <p className='widget__text'>Daily plan</p>
                    <div className='widget__sub-value'>2000</div>
                </div>
            </div>
        </div>
    )
}

export default CurrentColoriesWidget
