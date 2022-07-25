import React, { useState } from 'react'
import Excellent from '../../assets/Images/notesWidgetEmoji/Excellent.png'
import Good from '../../assets/Images/notesWidgetEmoji/Good.png'
import Neutral from '../../assets/Images/notesWidgetEmoji/Neutral.png'
import NotGood from '../../assets/Images/notesWidgetEmoji/NotGood.png'
import Bad from '../../assets/Images/notesWidgetEmoji/Bad.png'

function NotesWidget(props) {
    const [active, setActive] = useState({
        activeObject: null,
        objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },]
    })

    const toggleActive = (index) => {
        setActive({ ...active, activeObject: active.objects[index] })
    }

    const setActiveStyle = (index) => {
        if (active.objects[index] === active.activeObject) {
            return 'note-emoji'
        } else {
            return 'note-emoji not-active'
        }
    }

    return (
        <div className='widget mini'>
            <div className='widget__main-info'>
                <div className="widget__header">{props.widgetTitle}</div>
            </div>
            <div className='wrap--justify'>
                <img
                    onClick={(() => { toggleActive(1) })}
                    className={setActiveStyle(1)}
                    src={Excellent}
                    alt="Exellent" />
                <img
                    onClick={(() => { toggleActive(2) })}
                    className={setActiveStyle(2)}
                    src={Good}
                    alt="Good" />
                <img
                    onClick={(() => { toggleActive(3) })}
                    className={setActiveStyle(3)}
                    src={Neutral}
                    alt="Neutral" />
                <img
                    onClick={(() => { toggleActive(4) })}
                    className={setActiveStyle(4)}
                    src={NotGood}
                    alt="NotGood" />
                <img
                    onClick={(() => { toggleActive(5) })}
                    className={setActiveStyle(5)}
                    src={Bad}
                    alt="Bad" />
            </div>

        </div>
    )
}

export default NotesWidget
