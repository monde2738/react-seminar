// Focus input on button click
import {useRef} from "react";

export const Focus = () => {
  const inputRef = useRef(null);


  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={() => {
        console.log(inputRef.current);
        inputRef.current.focus();
      }}>Focus the input</button>
    </>
  );
};
