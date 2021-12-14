import React, { useRef } from 'react'
import { useState } from 'react/cjs/react.development'
import { v4 as uuid } from 'uuid'





function AddNewFood({ setAddButtonDisplay, setCancelButtonDisplay, mealNumber }) {
    const [entry, setEntry] = useState(({
        id: uuid(),
        name: '',
        amount: 0,
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
    }))

    const meal = {
        id: uuid(),
        time: new Date(),
        mealNumber: mealNumber,
    }

    const [dropdownClassName, setDropdownClassName] = useState('dropdown-datalist hidden')


    let foodLibrary = JSON.parse(localStorage.getItem('food')) || []
    let mealLibrary = JSON.parse(localStorage.getItem('meal')) || []



    const handleSubmit = (e) => {
        e.preventDefault()
        let alreadyExists = foodLibrary.filter((food) => food.name === nameRef.current.value)

        entry.name = nameRef.current.value
        entry.amount = amountRef.current.value
        entry.calories = caloriesRef.current.value
        entry.protein = proteinRef.current.value
        entry.fat = fatRef.current.value
        entry.carbs = carbsRef.current.value


        meal.food = entry

        console.log('entry', entry)
        console.log('meal ', meal)



        if (alreadyExists[0]) {
            mealLibrary.push(meal)
            localStorage.setItem('meal', JSON.stringify(mealLibrary))

        } else {

            foodLibrary.push(entry)
            mealLibrary.push(meal)
            localStorage.setItem('food', JSON.stringify(foodLibrary))
            localStorage.setItem('meal', JSON.stringify(mealLibrary))
        }

        setAddButtonDisplay(true)
        setCancelButtonDisplay(false)
    }

    const inputHandler = (e) => {
        const key = e.target.name
        const value = e.target.value
        setEntry({
            ...entry,
            [key]: value
        })
    }


    const handleFocus = () => {
        setDropdownClassName('dropdown-datalist')
    }

    const handleBlur = () => {
        setDropdownClassName('dropdown-datalist hidden')
    }


    const nameRef = useRef(null)
    const amountRef = useRef(null)
    const caloriesRef = useRef(null)
    const proteinRef = useRef(null)
    const fatRef = useRef(null)
    const carbsRef = useRef(null)
    const handleOptions = (e) => {
        nameRef.current.value = e.target.innerText

        let food = foodLibrary.filter((food) => food.name === e.target.innerText)
        food = food[0]

        caloriesRef.current.value = food.calories
        proteinRef.current.value = food.protein
        fatRef.current.value = food.fat
        carbsRef.current.value = food.carbs
        handleBlur()
    }



    return (
        <form
            className='new-food-form'
            onSubmit={handleSubmit}
        >


            <div className='meal-header'>
                <div className='meal-header__item'>
                    <label className='value-label' htmlFor="name">Name</label>
                    <input
                        className='value-input'
                        name='name'
                        id='name'
                        type="text"
                        onChange={inputHandler}
                        required="required"
                        onFocus={handleFocus}
                        ref={nameRef}

                    />
                    <ul
                        className={dropdownClassName}
                        tabIndex="0"
                        onBlur={handleBlur}
                    >
                        {foodLibrary.map((food, index) =>
                            <li
                                key={index} className='dropdown-datalist__item'
                                onClick={handleOptions}
                            >
                                {food.name}</li>
                        )}
                    </ul>
                </div>
                <div className='meal-header__item'>
                    <label className='value-label' htmlFor="amount">How much consumed</label>
                    <input className='value-input grams' name='amount' id='amount' type="number" step='0.01'
                        onChange={inputHandler}
                        required="required"
                        ref={amountRef}
                    /><span className='grams'></span>
                </div>
            </div>

            <div className='nutrition-facts'>
                <div className='nutrition-facts__header'>Nutrition Facts, 100g:</div>
                <div className='nutrition-facts__item'>
                    <label className='value-label nutrients' htmlFor="calories">Calories</label>
                    <input
                        className='value-input'
                        name='calories'
                        id='calories'
                        type="number"
                        step='0.01'
                        onChange={inputHandler}
                        required="required"
                        ref={caloriesRef}
                    /> <span style={{ marginLeft: '8px' }}>kcal</span>
                </div>
                <div className='nutrition-facts__item'>
                    <label className='value-label nutrients' htmlFor="protein">Protein</label>
                    <input
                        className='value-input'
                        name='protein'
                        id='protein'
                        type="number"
                        step='0.01'
                        onChange={inputHandler}
                        required="required"
                        ref={proteinRef}

                    /> <span className='grams'></span>
                </div>
                <div className='nutrition-facts__item'>
                    <label className='value-label nutrients' htmlFor="fat">Fat</label>
                    <input
                        className='value-input'
                        name='fat'
                        id='fat'
                        type="number"
                        step='0.01'
                        onChange={inputHandler}
                        required="required"
                        ref={fatRef}
                    /> <span className='grams'></span>
                </div>
                <div className='nutrition-facts__item'>
                    <label className='value-label nutrients' htmlFor="carbs">Carbs</label>
                    <input
                        className='value-input'
                        name='carbs'
                        id='carbs'
                        type="number"
                        step='0.01'
                        onChange={inputHandler}
                        required="required"
                        ref={carbsRef}
                    /> <span className='grams'></span>
                </div>
            </div>
            <button
                className='new-entry-button green'

            >Save</button>
        </form>



    )
}

export default AddNewFood
