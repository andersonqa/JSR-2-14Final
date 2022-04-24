import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import FruitDetails from './FruitDetails'

const Nutrition = (props) => {
    const [nutrition, setNutrition] = useState(null)


    useEffect (() => {
        const getNutritionDetails = async () => {
            const response = await axios.get (`${BASE_URL}${props.selectedFruit}`)
            // const imgResponse = await axios.get (`https://imsea.herokuapp.com/api/1q?${props.selectedFruit}`)
            setNutrition(response.data)
        }
        getNutritionDetails()
    }, [props.selectedFruit])
    
    return (
        <div>
            {FruitDetails ? (
                <div className='details'>
                    <div className='card'>
                        <h2>Protein: {nutrition.protein}</h2>
                        <h3>Fat: {nutrition.fat}</h3>
                        <h4>Sugar: {nutrition.calories}</h4>
                        <p>{nutrition.sugar}</p>
                        </div>
                </div>
            ) : (
                <h4>Loading</h4>
            )}
        </div>
    )
}

export default Nutrition