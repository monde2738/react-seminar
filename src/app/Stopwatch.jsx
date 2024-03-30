// Create a stopwatch using setInterval and clearInterval.
import {useRef} from "react";
import {useState} from "react";

export const Stopwatch = () => {
  const intervalId = useRef(null);
  
  const [startTime, setStartTime] = useState(null);
  const [currentTime,setCurrentTime] = useState(null);
  const seconds = currentTime && startTime ? (currentTime-startTime) / 1000 : 0;

  return (
    <>
      <span>{seconds.toFixed(2)}seconds</span>
      <div>
        <button onClick={() => {
          const now = Date.now();
          setStartTime(now);
          setCurrentTime(now);

          intervalId.current = setInterval(() => {
            setCurrentTime(Date.now())
          }, 10);
        }}>Start</button>
        <button
          onClick={() => {
            clearInterval(intervalId.current);
          }}
        >Stop
        </button>
      </div>
    </>
  );
};
