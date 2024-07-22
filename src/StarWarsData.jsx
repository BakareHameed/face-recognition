import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'

const StarWarsData = () => {
    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchCharacters = async () =>{
        try{
            const response = await axios.get('https://swapi.dev/api/people/')
            console.log(response)
            setCharacters(response.data.results)
            setPlanets(response.data.results)
        }
        catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
      }
        fetchCharacters()
    }, [])

    if (loading) {
        return <div>Loading...</div>;
      }
    
  return (
    <div>
        <h1>Star Wars Character</h1>
        <ul>
        {characters.map(character => (
          <li key={character.name}>
            {character.name}
          </li>
        ))}
        </ul>
        <span>{planets.map(planets => (
            <li key={characters.name}>
                {planets.genderript}
            </li>
        ))}</span>
    </div>
  )
}

export default StarWarsData