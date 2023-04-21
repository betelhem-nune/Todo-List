export const Task = (props) => {
    
    return (
        <div className="task" style={{backgroundColor:props.complete ? 'green' : 'orange'}}> 
       <h1>{props.taskName}</h1>
       <button onClick={() => props.deleteTask(props.id)}>Delete </button>
       <button onClick={() => props.completed(props.id)}>Completed</button>
       </div>
      ); 
}