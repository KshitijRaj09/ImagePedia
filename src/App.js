import React from 'react';
import SearchBar from './component/SearchBar';
import Image from './component/Image';
import unsplash from './api/unsplash';
import './App.css';


class App extends React.Component{

    state={
        data:[]
    }

    searchItems=async(input)=>{
        //For Unsplash
        const response = await unsplash.get('/search/photos',{
            params:{query:input}           
        });
        this.setState({data: response.data.results});    
    }
    render(){
        return(
        <div className='ui container' style={{marginTop:'10px'}}>
            <SearchBar searchItems={this.searchItems}/>
            <Image imageList={this.state.data}/>
        </div>
        );
    }
}

export default App;
