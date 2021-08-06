import React from 'react';
import {quotesarray} from '../components/array';



class Quotes extends React.Component{
   constructor(props){
       super(props)
       this.state={ num: 0 }
   }

  componentDidMount(){
    setInterval(()=>
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
        <p className="quote">" {quotesarray[num].quote} " - {quotesarray[num].author}</p>
       )  
     }

    { num !== 0 && (
              <p   className="quote">" {quotesarray[num].quote} " - {quotesarray[num].author}</p> 
          ) 
    } 



                
            </div>
        )
    }

}

export default Quotes;
   
   
    
 
  



        
        




                   
                    
                
                
                
                
                
                