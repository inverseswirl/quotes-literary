import React from 'react';


class  Timer extends React.Component{
    constructor(props){
        super(props)
        this.state={hours: 0,minutes:0, date:"01/01/2021"}
        this.timer=this.timer.bind(this)
    }

    componentDidMount(){
       setInterval(this.timer ,1000)
      
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
   timer(){
      const date =new Date();
      this.setState({
          hours: date.getHours(),
          minutes: date.getMinutes(),
          date: date.toLocaleDateString()
       
        })
    }

   

  render(){
      const{hours,minutes,date}=this.state


    return(
        <div className="timer">
        
            <span>{date}<hr/>{hours >= 0 && hours <10 ? `0${hours}` : hours}:{minutes  >= 0 && minutes < 10 ? `0${minutes}`: minutes } {hours <24 && hours >12 ? "p.m" : "a.m"} </span>
        </div>

    )
}
}

export default Timer;