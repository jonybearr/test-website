import './App.css';
import { useState } from 'react';

function App() {

  const TRACK_SCROLL_SPEED = 2;
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [mouseDownFlag, setMouseDownFlag] = useState(false);
  const [mouseDownXPos, setMouseDownXPos] = useState(0);
  const [mouseDownScrolPos, setMouseDownScrollPos] = useState(0);

  const handleScroll = (e) => {
    const scrollDirection = e.deltaY;

    if (scrollDirection > 0 && scrollPercentage + TRACK_SCROLL_SPEED <= 100)
      setScrollPercentage(scrollPercentage + TRACK_SCROLL_SPEED);

    if (scrollDirection < 0 && scrollPercentage - TRACK_SCROLL_SPEED >= 0)
      setScrollPercentage(scrollPercentage - TRACK_SCROLL_SPEED);
  }

  const handleMouseEvent = (e) => {
    if (e.type === "mousedown") {
      setMouseDownFlag(true);
      setMouseDownXPos(e.clientX);
      setMouseDownScrollPos(scrollPercentage);
    }
    else
      setMouseDownFlag(false);
  }

  const clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
  }

  const handleMouseMove = (e) => {
    if (mouseDownFlag) {
      let cursorXPos = e.clientX;
      let xOffset = mouseDownXPos - cursorXPos;
      let offsetPercentage = Math.round(clamp(xOffset * 100 / window.innerWidth, -70, 70) * 2/1.4);
      setScrollPercentage(clamp(mouseDownScrolPos + offsetPercentage, 0, 100))
    }
  }

  const imgStyle = {
    objectPosition: `${100 - scrollPercentage}% 50%`
  };

  return (
    <div
      className="App"
      onWheel={e => handleScroll(e)}
      onMouseDown={e => handleMouseEvent(e)}
      onMouseUp={e => handleMouseEvent(e)}
      onMouseMove={e => handleMouseMove(e)}
    >
      <div
        className="image-track"
        onDragStart={e => e.preventDefault()}
        style={{ 'transform': `translate(-${scrollPercentage}%, -50%)` }}
      >
        <img
          className="image"
          style={imgStyle}
          draggable={false}
          src="https://images.unsplash.com/photo-1669920687377-537d98f0d837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="image"
          style={imgStyle}
          draggable={false}
          src="https://images.unsplash.com/photo-1669836053928-5b90afddd893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="image"
          style={imgStyle}
          draggable={false}
          src="https://images.unsplash.com/photo-1669833834611-cce975baff2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="image"
          style={imgStyle}
          draggable={false}
          src="https://images.unsplash.com/photo-1669649265855-7c3f10453f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="image"
          style={imgStyle}
          draggable={false}
          src="https://images.unsplash.com/photo-1669752012473-a12e9a47883d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="image"
          style={imgStyle}
          draggable={false}
          src="https://images.unsplash.com/photo-1669749268241-fd5e780d7f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="image"
          style={imgStyle}
          draggable={false}
          src="https://images.unsplash.com/photo-1669397113508-144240b7479a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOXw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="image"
          style={imgStyle}
          draggable={false}
          src="https://images.unsplash.com/photo-1669327195383-63ba9ab81d8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMnw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
