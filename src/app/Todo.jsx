import { useEffect, useRef, useState } from "react";
import {ListItem} from "./ListItem.jsx";
import '/style.css';

export const Todo = () => {
  const addTextRef=useRef(null);
  const [list,setList]=useState({});

  useEffect(() => {
    if(localStorage.getItem("list") && localStorage.getItem("list") != "{}"){
      setList(() => JSON.parse(localStorage.getItem("list")));
    }
  },[])
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  }, [list])
  

  return (
    <>
      <h1 className="title">Todo</h1>
      <br></br>
      <input type="addText" name="value" ref={addTextRef} />
      <button className="btn blue"
      onClick={() => {
        const x=Date.now();
        const id=String(x);
        const value=addTextRef.current.value;

        if(value){
          setList((curState) => {
            return {...curState, [id]:[value,false]};
        })}
      }}>추가</button>
      <ul>
          {list && Object.keys(list).map((key) => (<li key={"li"+key}>
              <ListItem id={key} value={list[key][0]} checked={list[key][1] }
              list={list} setList={setList} />
            </li>
          ))
        }
      </ul>
    </>
  );
};
