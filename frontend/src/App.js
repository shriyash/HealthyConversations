import React, {useState} from 'react';

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [results, setResults] = useState("")

  const handleInputChange = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSearch = (event) => {
    //prevent entire page from reloading
    event.preventDefault()

    //try and do search here using search input
    setResults("You searched for " + searchInput)
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={searchInput} placeholder="Search term" onChange={handleInputChange}/>
        <button type="submit">Search</button>
      </form>
      <textarea readOnly={true} value={results}/>
    </div>
  )
}

export default App;
