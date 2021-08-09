import React from 'react';
import {images} from '../assets/imagebundle/images'


class Background  extends React.Component{
    constructor(props){
        super(props)
        this.state={arrnumber:0 }
    }


    componentDidMount(){
        window.onload= setInterval(()=>
             this.setState({  arrnumber: Math.floor(Math.random() * 21)})
        , 15000)
      }
      
    render(){

        const{arrnumber}=this.state;
        console.log(images.length)

    return(
        <div className="background" style={{backgroundImage: `url(${images[arrnumber]}`  }}>    </div>
    )
}
}
export default Background;