import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <>
      
      <h1 className='text-4xl m-6 p-6 text-white'>Coffee Stored: {coffees.length}</h1>
      {

        coffees.map(coffee => <CoffeeCard 
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></CoffeeCard>)
      }
      
    </>
  )
}

export default App
