import React from 'react';

class SearchBar extends React.Component{
    state={
        input:''
    }

    onClickSearch=event=>{
        event.preventDefault();
        this.props.searchItems(this.state.input);
    }

    onChangeInput=event=>{
        this.setState({input:event.target.value});
    }

    render(){
        return(
        <div className='ui segment'>
            <form onSubmit={this.onClickSearch}>
            <div className='ui icon input fluid'>
                <input type='text' value={this.state.input} placeholder='Search the beauty...' onChange={this.onChangeInput}/>
                <i className='circular search link icon' onClick={this.onClickSearch}></i>
            </div>
            </form>
        </div>
        );    
    }
}

export default SearchBar;