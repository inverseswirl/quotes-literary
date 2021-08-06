import React from 'react';


class  Timer extends React.Component{
    constructor(props){
        super(props)
        this.state={dates: "",hours: 0,minutes:0, seconds: 0}
        this.timer=this.timer.bind(this)
    }

    componentDidMount(){
       window.onload= setInterval(this.timer ,1000)
      
    }
   timer(){
      const date =new Date();
      this.setState({
          dates: date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds()
        })
    }

   

  render(){
      const{dates,hours,minutes}=this.state


    return(
        <div className="timer">
            <span>{dates}<hr />{hours >= 0 && hours <10 ? `0${hours}` : hours}:{minutes  >= 0 && minutes < 10 ? `0${minutes}`: minutes } {hours <24 && hours >12 ? "p.m" : "a.m"} </span>
        </div>
    )
}
}

export default Timer;