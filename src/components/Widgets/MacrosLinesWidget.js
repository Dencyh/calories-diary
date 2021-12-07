import React, { useState } from 'react'
import AMDR from './AMDR'
import { CSSTransition } from 'react-transition-group'



function MacrosLinesWidget() {
    const [showButton, setShowButton] = useState(false)


    return (
        <div className='widget small'>
            <div className='widget__main-info'>
                <div className="widget__header">today's marcos</div>
            </div>
            <div className="widget__wrapper">
                <div className="nutrients">
                    <div className="widget__header">52g protein</div>
                    <div className='nutrients__progress-bar'>
                        <CSSTransition
                            in={showButton}
                            timeout={400}
                            className='amdr'
                            unmountOnExit
                        >
                            <AMDR
                                min={10}
                                max={35}

                            />
                        </CSSTransition>
                    </div>
                    <div className='nutrients__progress protein'></div>
                </div>
                <div className="nutrients">
                    <div className="widget__header">18g fat</div>
                    <div className='nutrients__progress-bar'>
                        <CSSTransition
                            in={showButton}
                            timeout={400}
                            className='amdr'
                            unmountOnExit
                        >
                            <AMDR
                                min={20}
                                max={35}
                            />
                        </CSSTransition>
                    </div>
                    <div className='nutrients__progress fat'></div>
                </div>
                <div className="nutrients">
                    <div className="widget__header">170g carbohydrate</div>
                    <div className='nutrients__progress-bar'>
                        <CSSTransition
                            in={showButton}
                            timeout={400}
                            className='amdr'
                            unmountOnExit
                        >
                            <AMDR
                                min={45}
                                max={65}
                            />
                        </CSSTransition>
                    </div>
                    <div className='nutrients__progress carbs'></div>
                </div>
            </div>

            <button
                className='show-button'
                onClick={() => {
                    setShowButton(!showButton)
                }}
            >{!showButton ? 'Show' : 'Hide'} AMDR</button>


        </div>
    )
}

export default MacrosLinesWidget
