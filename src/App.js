
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchBar from './components/search';
import Karakterler from "./components/Karakterler"
import PaginationBar from './components/pagination';


const App = () => {
  
    const [characters, setCharacters] = useState(null);
    const [search, setSearch] = useState(" ");
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(null);
    const totalPage = Math.ceil(count / 10);


   useEffect(() => {
    axios
    .get("https://swapi.dev/api/people/")
    
    .then((res) => {
        console.log(res.data);
        setCharacters(res.data.results);
        setCount(res.data.count);
       
    })
    
}, [search, page]);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <SearchBar setSearch={setSearch} />
      <Karakterler chars={characters}  />
      <PaginationBar 
      count={totalPage}
      setPage={setPage}
     />
      

    </div>
  );
}

export default App;
