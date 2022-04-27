import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../globals'
// import Nutrition from './Nutrition'

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
            const imgResponse = await axios.get('https://api.unsplash.com/photos/random/?client_id=j3RR6Cz3D1jpI66zyMOB0sWQQuTT8kZru1IoOIl0ALM')
            console.log(imgResponse)
            setFruitImage(imgResponse)
        }
        getImage()
    
    return (
        <div>
            {fruitDetails ? (
                <div className='details'>
                    <div className='card'>
                    <h1>{fruitDetails.name}</h1>
                    <img className='photo' src={fruitImage} alt='Selected Fruit'/>
                        {/* <h2>Family: {fruitDetails.family}</h2>
                        <h2>Genus: {fruitDetails.genus}</h2>
                        <h2>Order: {fruitDetails.order}</h2> */}
                            <h2>Taxonomy</h2>
                            <p>Family: {fruitDetails.family}</p>
                            <p>Genus: {fruitDetails.genus}</p>
                            <p>Order: {fruitDetails.order}</p>
                            <h2>Nutrition Information</h2>
                            <p>Protein: {fruitDetails.nutritions.protein}</p>
                        <p>Fat: {fruitDetails.nutritions.fat}</p>
                        <p>Sugar: {fruitDetails.nutritions.calories}</p>
                        <p>{fruitDetails.nutritions.sugar}</p>
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