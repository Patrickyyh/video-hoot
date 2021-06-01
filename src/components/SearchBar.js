import React , {useState, useEffect}from 'react';
const SearchBar = ({trySearch}) =>{
  const [term, setTerm] = useState(''); 

  const onFormSubmit = (event) =>{
    event.preventDefault(); 
    trySearch(term); 
}

 return(
    <div className = "search-bar ui segment">
        <form className = "ui form" onSubmit = {onFormSubmit}>
            <div className = "field">
                <label> Video search </label>
                <input type="text" value = {term}  onChange = { (event) => setTerm(event.target.value)} placeholder="Search..."/>    
                <button className ="ui button">Search</button>
            </div>
        </form>
    </div>

);

};

export default SearchBar;
