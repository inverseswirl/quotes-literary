import React from 'react';


class  Timer extends React.Component{
    constructor(props){
        super(props)
        this.state={hours: 0,minutes:0, seconds: 0}
        this.timer=this.timer.bind(this)
    }

    componentDidMount(){
       window.onload= setInterval(this.timer ,1000)
      
    }
   timer(){
      const date =new Date();
      this.setState({
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds()
        })
    }

   

  render(){
      const{hours,minutes}=this.state


    return(
        <div className="timer">
            <span>{hours >= 0 && hours <10 ? `0${hours}` : hours}:{minutes  >= 0 && minutes < 10 ? `0${minutes}`: minutes } {hours < 24 && hours >12 ? "p.m" : "a.m"}</span>
        </div>
    )
}
}

export default Timer;