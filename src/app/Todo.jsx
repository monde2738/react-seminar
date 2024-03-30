import { useEffect, useRef, useState } from "react";

export const Todo = () => {
  const addTextRef=useRef(null);
  const [list,setList]=useState({});


  const ListItem = ({id, value}) => {
    console.log(value);
    return (
    <>
        <input id={id} name= "value" type="text" value={value} readOnly/>
        <button name="delete" key={"delete"+id} onClick={() => {
          console.log("삭제 "+id);
          const {[id]:_, ...rest}=list;
          setList(rest);
        }}>삭제</button>
    </>);
  }

  useEffect(() => {
    if(localStorage.getItem("list") != "{}"){
      console.log("번지!!")
      setList(() => JSON.parse(localStorage.getItem("list")));
    }
  },[])
  useEffect(() => {
    console.log("업뎃!!")
    localStorage.setItem("list",JSON.stringify(list));
  }, [list])
  


  return (
    <>
      <span>Todo</span>
      <input type="addText" name="value" ref={addTextRef}/>
      <button name="add" onClick={() => {
        const x=Date.now();
        const id=String(x);
        const value=addTextRef.current.value;

        setList((curState) => {
          return {...curState, [id]:value};
        })
        console.log(list);
        console.log(localStorage);
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
