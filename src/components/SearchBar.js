import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};
    onFormSubmit = (event) =>{

        event.preventDefault(); 
        this.props.trySearch(this.state.term); 
        
    }

    onInputChange = (event) =>{
         this.setState({term: event.target.value});
    }


    render(){
        return(
            <div className = "search-bar ui segment">
                <form className = "ui form" onSubmit = {this.onFormSubmit}>
                    <div className = "field">
                        <label> Video search </label>
                        <input type="text" value = {this.state.term}  onChange = {this.onInputChange} placeholder="Search..."/>    
                        <button className ="ui button">Search</button>
    
                    </div>

                </form>


            </div>

        );

    }

}


export default SearchBar;
