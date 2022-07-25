import React from 'react'

function Settings() {
    return (
        <div className='main-view grey-bg'>
            <div className='widget full'>
                <div className="settings">
                    <div className='setting'>
                        <label className='value-label' htmlFor='goal'>Daily calories goal</label>
                        <input className='value-input' id='goal' type="text" />
                    </div>
                    <div className='setting'>
                        <label className='value-label' htmlFor="">Weight goal</label>
                        <input className='value-input' type="text" />
                    </div>

                    <button className='new-entry-button green'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Settings
