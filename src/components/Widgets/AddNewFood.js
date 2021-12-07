import React from 'react'





function AddNewFood() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <form
            className='new-food-form'
            onSubmit={handleSubmit}
        >
            <div className='meal-header'>
                <div className='meal-header__item'>
                    <label className='food-label' htmlFor="name">Name</label>
                    <input className='food-input' id='name' type="text" />
                </div>
                <div className='meal-header__item'>
                    <label className='food-label' htmlFor="amount">How much consumed</label>
                    <input className='food-input grams' id='amount' type="number" step='0.01' /><span className='grams'></span>
                </div>
            </div> {/* /meal-header */}

            <div className='nutrition-facts'>
                <div className='nutrition-facts__header'>Nutrition Facts, 100g:</div>
                <div className='nutrition-facts__item'>
                    <label className='food-label nutrients' htmlFor="calories">Calories</label>
                    <input className='food-input' id='calories' type="number" step='0.01' /> <span>kcal</span>
                </div>
                <div className='nutrition-facts__item'>
                    <label className='food-label nutrients' htmlFor="protein">Protein</label>
                    <input className='food-input' id='protein' type="number" step='0.01' /> <span>g</span>
                </div>
                <div className='nutrition-facts__item'>
                    <label className='food-label nutrients' htmlFor="fat">Fat</label>
                    <input className='food-input' id='fat' type="number" step='0.01' /> <span>g</span>
                </div>
                <div className='nutrition-facts__item'>
                    <label className='food-label nutrients' htmlFor="carbs">Carbs</label>
                    <input className='food-input' id='carbs' type="number" step='0.01' /> <span>g</span>
                </div>
            </div>
            <button
                className='add-meal-button green'

            >Save</button>
        </form>

    )
}

export default AddNewFood
