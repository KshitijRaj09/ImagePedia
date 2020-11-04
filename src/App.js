import React from 'react';
import SearchBar from './component/SearchBar';
import Image from './component/Image';
import unsplash from './api/unsplash';
import Spinner from './component/Spinner';
import './App.css';


class App extends React.Component{

    state={
        data:[],
        loading:false
    }

    searchItems=async(input)=>{
        //For Unsplash
        this.setState({loading:true})
        const response = await unsplash.get('/search/photos',{
            params:{query:input}           
        });
        this.setState({data: response.data.results, loading:false});    
    }
    render(){
        return(
        <div className='ui container' style={{marginTop:'10px'}}>
            <SearchBar searchItems={this.searchItems}/>
            
            {this.state.loading?<Spinner/>:<Image imageList={this.state.data}/>}
        </div>
        );
    }
}

export default App;
