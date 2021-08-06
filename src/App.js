
import React from 'react';
import './App.css';
import Quotes from './components/quotes';
import quote from './img/quote.png';


const images= [
  'https://images.pexels.com/photos/668353/pexels-photo-668353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

 'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
 'https://images.pexels.com/photos/1431464/pexels-photo-1431464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
 'https://images.pexels.com/photos/159872/book-open-pages-literature-159872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
 'https://images.pexels.com/photos/5028845/pexels-photo-5028845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
 'https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
 'https://images.pexels.com/photos/2364633/pexels-photo-2364633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

]

class App extends React.Component {
   constructor(props){
     super(props)
     this.state={arrnumber:0 }
   }

  
componentDidMount(){
  setInterval(()=>
       this.setState({  arrnumber: Math.floor(Math.random() * 7)})
  , 15000)
}





render(){

  
console.log(this.state.arrnumber)
  return (
    <div className="App" style={{backgroundImage: `url(${quote}),url(${images[this.state.arrnumber]}`  }} >

   <Quotes />
     
    </div>
  );
}
}

export default App;
