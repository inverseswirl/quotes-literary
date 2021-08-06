import React from 'react';
import {quotesarray} from '../components/array';
import Timer from './timer';



class Quotes extends React.Component{
   constructor(props){
       super(props)
       this.state={ num: 0 }
   }

  componentDidMount(){
   window.onload= setInterval(()=>
    this.setState({
        num : Math.floor(Math.random() * 15) 
    }) ,15000)

}
 
   

render(){

const{num}=this.state


 return(

    <div className="quotes">
            <h1 className="topline">Literary Quotes </h1>
           
     {
       num === 0 && (
        <p className="quote">" {quotesarray[num].quote} " <br/> - {quotesarray[num].author}</p>
       )  
     }

    { num !== 0 && (
              <p   className="quote">" {quotesarray[num].quote} " <br/> - {quotesarray[num].author}</p> 
          ) 
    } 

     <Timer />

                
            </div>
        )
    }

}

export default Quotes;
   
   
    
 
  



        
        




                   
                    
                
                
                
                
                
                