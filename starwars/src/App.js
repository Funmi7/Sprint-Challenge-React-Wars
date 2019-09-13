import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import MainContent from "./components/component.js"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starwarsData, setStarWarsData] = useState([{}]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
      console.log(response)
      setStarWarsData(response.data.results)
    })
    .catch(error => {
      console.log('Error: ', error);
    })
  }, [])
  console.log(starwarsData);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      {starwarsData.map(item => {
        return (
        <MainContent 
          titles={item.name}
          birthYear={item.birth_year}
          mass={item.mass}
          gender={item.gender}
        /> 
        )
      })} 
    </div>
  );
}


export default App;
