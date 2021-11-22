import React from 'react';
import {images} from '../assets/imagebundle/images'


class Background  extends React.Component{
    constructor(props){
        super(props)
        this.state={arrnumber:0 }
    }


    componentDidMount(){
        window.onload= setInterval(()=>
             this.setState({  arrnumber: Math.floor(Math.random() * 18)})
        , 7000)
      }
      
    render(){

        const{arrnumber}=this.state;
        console.log(images.length)

    return(
        <div className="background" style={{backgroundImage: `url(${images[arrnumber]}`, transition: arrnumber ? 'background 2.5s ease-in 1s' : 'none'  }}>    </div>
    )
}
}
export default Background;