import './App.css'
import CarList from './components/CarList'


function App() {
  
  const cars = [
    {id: 1, name: 'John', km: 23},
    {id: 2, name: 'Tobias', km: 13},
    {id: 3, name: 'Tomas', km: 33},
    {id: 4, name: 'floriano', km: 43},
  ]

  return (
    <>
      {cars.map((car) => (
        <CarList key={car.id} nome={car.name} km={car.km}/>
      ))}
    </>
  )
}

export default App
