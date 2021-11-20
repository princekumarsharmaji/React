import './Traffic.css'

function Traffic(props){
    
    if(props.first){
       return <div className= "traffic first"></div>
   }else {
       return <div className="traffic second"></div>
   }
   
       
   
}


       

export default Traffic;
