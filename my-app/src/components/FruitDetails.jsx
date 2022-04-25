import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Nutrition from './Nutrition'

const FruitDetails = (props) => {
    const [fruitDetails, setFruitDetails] = useState(null)
    const [fruitImage, setFruitImage] = useState(null)


    useEffect (() => {
        const getDetails = async () => {
            const response = await axios.get (`${BASE_URL}${props.selectedFruit}`)
            setFruitDetails(response.data)
        }
        getDetails()
    }, [props.selectedFruit])

        const getImage = async () => {
            const imgResponse = await axios.get (`https://imsea.herokuapp.com/api/1?q=${props.selectedFruit}`)
            setFruitImage(imgResponse.data.results[0])
        }
        getImage()
    
    return (
        <div>
            {fruitDetails ? (
                <div className='details'>
                    <div className='card'>
                    <img className='photo' src={fruitImage} alt='Selected Fruit'/>
                        <h2>Family: {fruitDetails.family}</h2>
                        <h2>Genus: {fruitDetails.genus}</h2>
                        <h2>Order: {fruitDetails.order}</h2>
                        </div>
                        <button onClick={props.goBack}>Go Back</button>
                </div>
            ) : (
                <h4>Loading</h4>
            )}
        </div>
    )
}

export default FruitDetails