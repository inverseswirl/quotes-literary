
import React from 'react';
import './App.css';
import Quotes from './components/quotes';



const images= [
  'https://images.pexels.com/photos/668353/pexels-photo-668353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

 'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
 'https://images.pexels.com/photos/1431464/pexels-photo-1431464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
 'https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
 'https://images.pexels.com/photos/5028845/pexels-photo-5028845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
 'https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
 'https://images.pexels.com/photos/2364633/pexels-photo-2364633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
 'https://cdn.pixabay.com/photo/2019/03/17/07/24/pollination-4060404_1280.jpg',
 'https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg',
 'https://cdn.pixabay.com/photo/2017/04/19/13/03/coffee-2242213_1280.jpg',
 'https://images.pexels.com/photos/3686216/pexels-photo-3686216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
 'https://cdn.pixabay.com/photo/2018/05/08/20/27/pink-3383825_1280.jpg',
 'https://cdn.pixabay.com/photo/2016/11/21/14/47/kitten-1845789_1280.jpg',
 'https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_1280.jpg',
 "https://images.pexels.com/photos/2131856/pexels-photo-2131856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

]

class App extends React.Component {
   constructor(props){
     super(props)
     this.state={arrnumber:0 }
   }

  
componentDidMount(){
  setInterval(()=>
       this.setState({  arrnumber: Math.floor(Math.random() * 15)})
  , 8000)
}





render(){

  
console.log(images.length)
  return (
    <div className="App" style={{backgroundImage: `url(${images[this.state.arrnumber]}`  }} >

   <Quotes />
     
    </div>
  );
}
}

export default App;
