import { useEffect, useRef, useState } from "react";
import '/style.css';

export const Todo = () => {
  const addTextRef=useRef(null);
  const [list,setList]=useState({});


  const ListItem = ({id, value}) => {
    console.log(value);
    return (
    <>
        <input type="checkbox" name="taskCompleted" />
        <input id={id} name= "value" type="text" value={value} readOnly/>
        <button name="delete" key={"delete"+id} 
        class="button btnFade btnOrange"
        onClick={() => {
          const {[id]:_, ...rest}=list;
          setList(rest);
        }}>삭제</button>
    </>);
  }

  useEffect(() => {
    if(localStorage.getItem("list") != "{}"){
      setList(() => JSON.parse(localStorage.getItem("list")));
    }
  },[])
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  }, [list])
  


  return (
    <>
      <span>Todo</span>
      <br></br>
      <input type="addText" name="value" ref={addTextRef}/>
      <button name="add" 
      class="button btnFade btnLightBlue"
      onClick={() => {
        const x=Date.now();
        const id=String(x);
        const value=addTextRef.current.value;

        setList((curState) => {
          return {...curState, [id]:value};
        })
      }}>추가</button>
      <ul>
          {list && Object.keys(list).map((key) => (<li key={"li"+key}>
              <ListItem id={key} value={list[key]} />
            </li>
          ))
        }
      </ul>
    </>
  );
};
