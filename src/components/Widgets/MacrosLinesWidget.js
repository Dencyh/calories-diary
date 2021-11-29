import React from 'react'




function MacrosLinesWidget() {

    return (
        <div className='widget small'>
            <div className='widget__main-info'>
                <div className="widget__header">today's marcos</div>
            </div>
            <div className="widget__wrapper">
                <div className="nutrients">
                    <div className="widget__header">52g protein</div>
                    <div className='nutrients__progress-bar'></div>
                    <div className='nutrients__progress protein'></div>
                </div>
                <div className="nutrients">
                    <div className="widget__header">18g fat</div>
                    <div className='nutrients__progress-bar'></div>
                    <div className='nutrients__progress fat'></div>
                </div>
                <div className="nutrients">
                    <div className="widget__header">170g carbohydrate</div>
                    <div className='nutrients__progress-bar'></div>
                    <div className='nutrients__progress carbs'></div>
                </div>
            </div>

            <p className='widget__text' style={{ marginLeft: "40px" }}>Don’t go hard on  <span className='accent-value red'>carbohydate</span></p>


        </div>
    )
}

export default MacrosLinesWidget
