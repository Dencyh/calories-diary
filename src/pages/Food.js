import React, { useState } from 'react'
import Dropdown from '../components/Dropdown'
import countries from '../countiers.json'
import data from '../animals.json'

function Food() {
    const [value, setValue] = useState(null)

    return (
        <div className='main-view'>
            <div style={{ width: 200 }}>
                <Dropdown
                    options={data}
                    prompt='Select...'
                    id='id'
                    label='name'
                    value={value}
                    onChange={val => setValue(val)}

                />
            </div>
        </div>
    )
}

export default Food
