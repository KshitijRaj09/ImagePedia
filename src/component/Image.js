import React from 'react';
import ImageCard from './ImageCard'

class Image extends React.Component{
    
    imageListMap(imageList){
        const image = imageList.map((imageList)=>{
            return(
                    <ImageCard key={imageList.id} image={imageList} />
            );
        }   
    );
    return <>{image}</>
}
    render(){
        return(
        <div className='image-list'>
            {this.imageListMap(this.props.imageList)}   
        </div>
        );
    }
}

export default Image;