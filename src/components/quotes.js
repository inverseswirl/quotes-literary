import React from 'react';
import {quotesarray} from '../components/array';



class Quotes extends React.Component{
   constructor(props){
       super(props)
       this.state={load: false}
   }

  componentDidMount(){
    setInterval(()=>
    this.setState({load: true }),15000)


  }


    render(){

const{load}=this.state



        return(

            <div className="quotes">
                <h1>Literary Quotes Hub</h1>
               
                {/* <button onClick={}>Submit</button> */}

         {
             !load && (
                 <p className="quote">" {quotesarray[2][1].quote} "</p>
             )
         }
           { load && (
                  <p   className="quote">" {quotesarray[Math.floor(Math.random() * 3 )][Math.floor(Math.random() * 5)].quote} "</p> 
              ) 
              } 
                  
                    
                
                
                
                
                
                
                
            </div>
        )
    }

}

export default Quotes;