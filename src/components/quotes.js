import React from 'react';
import {quotesarray} from '../components/array';




class Quotes extends React.Component{
   constructor(props){
       super(props)
       this.state={ num: 0 }
   }

  componentDidMount(){
   window.onload= setInterval(()=>
    this.setState({
        num : Math.floor(Math.random() * 26) 
    }) ,25000)

}
 
   

render(){

const{num}=this.state



 return(

    <div className="quotes">
            <h1 className="topline">Literary Quotes </h1>
           
     {
       num === 0 && (
        <p className="quote">"{quotesarray[num].quote}" <br/><span className="authorname"> - {quotesarray[num].author}</span><br/><span className="bookname"> ({quotesarray[num].bookname})</span></p>
       )  
     }

    { num !== 0 && (
              <p   className="quote">"{quotesarray[num].quote}" <br/><span className="authorname"> - {quotesarray[num].author}</span><br/><span className="bookname"> ({quotesarray[num].bookname})</span></p> 
          ) 
    } 

     

                
            </div>
        )
    }

}

export default Quotes;
   
   
    
 
  



        
        




                   
                    
                
                
                
                
                
                