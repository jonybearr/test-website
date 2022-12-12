import {useState} from "react"
import './App.css';

function App() {
  const [scrollAmount,setScrollAmount] = useState(0);
  const onWheelEvent = e => {
    
    if(e.deltaY>0 && scrollAmount<100){
      setScrollAmount(scrollAmount+1);
    } else if(e.deltaY<0 && scrollAmount>0){
      setScrollAmount(scrollAmount-1);
    }else{
      console.log("reached limit");
    }
  };
  const imageScrolling = {objectPosition: `50% ${100-scrollAmount}%`}
  return (
    <div className="App" onWheel={e => onWheelEvent(e)}>
      <div className="imageTrack" style={{transform: `translate(-50%,-${scrollAmount}%)`}}>
        <img className="image" style={imageScrolling} src="https://images.unsplash.com/photo-1670782017454-69e7f95fd78a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt=""/>
        <img className="image" style={imageScrolling} src="https://images.unsplash.com/photo-1670786146738-c9d7acdd7226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" alt=""/>
        <img className="image" style={imageScrolling} src="https://images.unsplash.com/photo-1670808542784-d8a43a98f35a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1284&q=80" alt=""/>
        <img className="image" style={imageScrolling} src="https://images.unsplash.com/photo-1670773658685-2cc76359df92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="" />
        <img className="image" style={imageScrolling} src="https://images.unsplash.com/photo-1670782017454-69e7f95fd78a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt=""/>
        <img className="image" style={imageScrolling} src="https://images.unsplash.com/photo-1670786146738-c9d7acdd7226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" alt=""/>
        <img className="image" style={imageScrolling} src="https://images.unsplash.com/photo-1670808542784-d8a43a98f35a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1284&q=80" alt=""/>
        <img className="image" style={imageScrolling} src="https://images.unsplash.com/photo-1670773658685-2cc76359df92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="" />
        
      
      </div>
    </div>
  );
}


export default App;
