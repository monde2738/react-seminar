import { useState, useRef } from "react";

const Horizontal = ({children}) => (
    <div style={{display:"flex"}}>{children}</div>
  );

export const ListItem = ({id, value, checked, list, setList}) => {
    const [btnMsg, setBtnMsg]=useState("수정");
    const modifyRef=useRef(null);
    return (
    <>
      <Horizontal>
        <input id={id} type="checkbox" name="taskCompleted" 
        defaultChecked={checked} onChange={() => {
          setList((curState) => {
            return {
              ...curState,
              [id]:[value,!checked]
            };
          })
        }}/>
        {btnMsg=="수정"?<p>{value}</p>:
        <input type="text" ref={modifyRef} defaultValue={value} />}
        <button className="btn orange" key={"modify"+id} 
        onClick={() => {
            if(btnMsg=="수정"){
                setBtnMsg(() => "Ok")
            }
            else{
                const newValue=modifyRef.current.value;
                setList((curState) => {
                    return {
                        ...curState,
                        [id]:[newValue,checked]
                    };
                })
                setBtnMsg(() => "수정");
            }
        }}>{btnMsg}</button>
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