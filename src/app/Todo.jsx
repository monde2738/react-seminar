import { useEffect, useRef } from "react";

export const Todo = () => {
  const addTextRef=useRef(null);
  // const addRef=useRef(null);

  let list={};
  let deleteId="";

  const listItem={
    id:"",
    value:""
  };

  const ListItem = (listItem) => {
    const id=listItem.id;
    return (
    <>
        {/* <input id={id} name= "value" type="text" value={listItem.value} /> */}
        <p>{listItem.value}</p>
        {/* 여기에 수정 권한 추가할거임 */}
        <button name="delete" onClick={() => {
          delete list[id];
          deleteId=id;
        }}>삭제</button>
    </>);
  }

  useEffect(() => {
    if(localStorage != null){
      for(let i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        list[key]=localStorage.getItem(key);
      }
    }
  },[])
  useEffect(() => {
    if(deleteId===""){
      localStorage.setItem(listItem.id, JSON.stringify(ListItem(listItem)));
    }
    else{
      localStorage.removeItem(deleteId);
      deleteId="";
    }
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
        list[id]=JSON.stringify(ListItem(listItem));
        // list[id]=listItem.value;
        console.log(list);
        console.log(localStorage);
        for(let i in list){
          console.log(JSON.parse(list[i]));
        }
      }}>추가</button>
      <ul>
        {
          list && Object.entries(list).map((key,value) => {
            <li key={key}>
              {JSON.parse(value)}
            </li>
          })
        }
      </ul>
    </>
  );
};
