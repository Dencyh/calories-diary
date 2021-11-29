import React from 'react'
import Excellent from '../../notesWidgetEmoji/Excellent.png'
import Good from '../../notesWidgetEmoji/Good.png'
import Neutral from '../../notesWidgetEmoji/Neutral.png'
import NotGood from '../../notesWidgetEmoji/NotGood.png'
import Bad from '../../notesWidgetEmoji/Bad.png'

function NotesWidget(props) {
    return (
        <div className='widget mini'>
            <div className='widget__main-info'>
                <div className="widget__header">{props.widgetTitle}</div>
            </div>
            <div className='wrap--justify'>
                <img className='note-emoji not-active' src={Excellent} alt="Exellent" />
                <img className='note-emoji' src={Good} alt="Good" />
                <img className='note-emoji not-active' src={Neutral} alt="Neutral" />
                <img className='note-emoji not-active' src={NotGood} alt="NotGood" />
                <img className='note-emoji not-active' src={Bad} alt="Bad" />
            </div>

        </div>
    )
}

export default NotesWidget
