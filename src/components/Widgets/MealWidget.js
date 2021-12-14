import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import AddNewFood from './AddNewFood'
import { cancelButtonImmage } from '../../Images/cancelButtonImmage'

function MealWidget(props) {
    const [addButtonDisplay, setAddButtonDisplay] = useState(true)
    const [cancelButtonDisplay, setCancelButtonDisplay] = useState(false)


    return (
        <div className='widget small'>
            <CSSTransition
                in={cancelButtonDisplay}
                timeout={200}
                className='cancel-button'
                unmountOnExit
            >
                <button
                    onClick={() => {
                        setCancelButtonDisplay(!cancelButtonDisplay)
                        setAddButtonDisplay(!addButtonDisplay)
                    }}
                >
                    {cancelButtonImmage}
                </button>
            </CSSTransition>

            <div className='widget__main-info'>
                <div className="widget__header">{props.widgetTitle}</div>
            </div>
            <div className='wrap'>

                <CSSTransition
                    in={addButtonDisplay}
                    timeout={200}
                    className='new-entry-button'
                    unmountOnExit
                >
                    <button

                        onClick={() => {
                            setAddButtonDisplay(!addButtonDisplay)
                            setCancelButtonDisplay(!cancelButtonDisplay)
                        }}
                    >Add</button>
                </CSSTransition>

                <CSSTransition
                    in={cancelButtonDisplay}
                    timeout={200}
                    className='new-food-form'
                    unmountOnExit
                >
                    <AddNewFood mealNumber={props.widgetTitle} setAddButtonDisplay={setAddButtonDisplay} setCancelButtonDisplay={setCancelButtonDisplay} />
                </CSSTransition>
            </div>
        </div>
    )
}

export default MealWidget
