const AllFruit = (props) => {

    return (
        <div className='grid'>
            {
                props.fruit.map((fruit) => (
                    <div key={fruit.name} className='card'>
                    <h3>{fruit.name}</h3>
                    <button onClick={()=> props.selectFruit(fruit.name)}>More</button>
                    </div>
                ))
            }
        </div>
    )
}

export default AllFruit
