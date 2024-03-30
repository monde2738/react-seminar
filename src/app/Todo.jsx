import { useEffect, useRef, useState } from "react";

export const Todo = () => {
  const addTextRef=useRef(null);
  const [list,setList]=useState({});

  const listItem={
    id:"",
    value:""
  };

  const ListItem = (id, value) => {
    return (
    <>
        {/* <input id={id} name= "value" type="text" value={listItem.value} /> */}
        <p>value</p>
        {/* 여기에 수정 권한 추가 안할거임 */}
        <button name="delete" onClick={(curState) => {
          // delete list[id];
          const {[id]:tmp, ...rest}=curState;
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
      <input type="addText" name="value" ref={addTextRef} />
      <button name="add" onClick={() => {
        const x=Date.now();
        const id=String(x);
        listItem.id=id;
        listItem.value=addTextRef.current.value;

        console.log(id);
        console.log(listItem.value);
        setList((curState) => {
          return {...curState, [id]:addTextRef.current.value};
        })
        console.log(list);
        console.log(localStorage);
      }}>추가</button>
      <ul>
          {list && Object.keys(list).map((key) => {
            <li key={key}>
              <ListItem id={key} value={list[key]} />
            </li>
          })
        }
      </ul>
    </>
  );
};
