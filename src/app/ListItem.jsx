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