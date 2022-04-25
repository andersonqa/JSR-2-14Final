import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import AllFruit from './components/AllFruit'
import FruitDetails from './components/FruitDetails'
// import Nutrition from './components/Nutrition'

const App = () => {
    const [fruit, setFruit] = useState ([])
    const [selectedFruit, setSelectedFruit] = useState(null)
    // const [selectedNutrition, setSelectedNutrition] = useState(null)

const selectFruit = (name) => {
    setSelectedFruit(name)
  }

// const selectNutrition = (name) => {
//     setSelectedNutrition (name)
// }

  const goBack = () => {
    setSelectedFruit(null)
  }

  useEffect(() => {
    const getFruit = async () => {
      const response = await axios.get(`${BASE_URL}all`)
      setFruit(response.data)
    }
    getFruit()
  }, [])

return (
  <div>
    <h1 className='title'>Wonderful Fruit</h1>
    {selectedFruit ? (
      <FruitDetails selectedFruit={selectedFruit} goBack={goBack}/>
    ) : (
      <AllFruit fruit={fruit} selectFruit={selectFruit}/>
    )}
  </div>
  )
  }
export default App
