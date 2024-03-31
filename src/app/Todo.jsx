import { useEffect, useRef, useState } from "react";
import '/style.css';

const Horizontal = ({children}) => (
  <div style={{display:"flex"}}>{children}</div>
);

export const Todo = () => {
  const addTextRef=useRef(null);
  const [list,setList]=useState({});



  const ListItem = ({id, value, checked}) => {
    return (
    <>
      <Horizontal>
        <input id={id} type="checkbox" name="taskCompleted" 
        checked={checked} onChange={() => {
          setList((curState) => {
            return {
              ...curState,
              [id]:[value,!checked]
            };
          })
        }}/>
        <p>{value}</p>
        <button name="delete" key={"delete"+id} 
        className="btn lightBlue"
        onClick={() => {
          setList((curState) => {
            const {[id]:_, ...rest}=list;
            return rest;
          })
        }}>삭제</button>
      </Horizontal>
    </>);
  }

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
      <input type="addText" name="value" ref={addTextRef}/>
      <button name="add" 
      className="btn blue"
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
              <ListItem id={key} value={list[key][0]} checked={list[key][1]} />
            </li>
          ))
        }
      </ul>
    </>
  );
};
