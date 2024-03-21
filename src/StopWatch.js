import React, {useState, useEffect, useRef } from "react";

function StopWatch() {
    
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  //catch the current.
  const intervalIdRef = useRef(null);

  //start at 0.
  const startTimeRef = useRef(0);

  useEffect(() => {

  },[isRunning])

  function start() {

  }

  function stop() {

  }

  function reset() {

  }

  function formatTime() {
    
  }

    return (
        <></>
    )
}

export default StopWatch;