const AllFruit = (props) => {

    return (
        <div className='grid'>
            {
                props.fruit.map((fruit) => (
                    <div key={fruit.name} className='card'>
                    <h3>{fruit.name}</h3>
                    <button onClick={()=> props.selectFruit(fruit.name)}>Taxonomy</button>
                    <button onClick={()=> props.selectNutrition(fruit.name)}>Nutrition</button>
                    </div>
                ))
            }
        </div>
    )
}

export default AllFruit
