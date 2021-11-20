import "./Bulbs.css"

function Bulbs(props){
    
     if(props.on){
        return <div className= "bulb on"></div>
    }else{
        return <div className="bulb off"></div>
    }

    
}












export default Bulbs;