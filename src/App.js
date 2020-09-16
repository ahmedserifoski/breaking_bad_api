import React, {useState, useEffect} from 'react';
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header';
import Search from './components/ui/Search';


const App = () => {
  const[characters, setCharacters] = useState([])
  const[isLoading, setIsLoading] = useState(true)
  // const[query, setQuery] = useState("")
  const[query, setQuery] = useState("")

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      const data = await response.json()
      console.log(data)
      setCharacters(data)
      setIsLoading(false)
    }

    fetchItems()

  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid characters={characters} isLoading={isLoading} />
    </div>
  );
}

export default App;
