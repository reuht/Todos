import Task from "./Task";


export default function ListTask({todos}){
    
    return (
        <div className="columns">
            <div className="column"> 
              
                    {
                        todos.map((todo, index) => {
                            return (
                                <>
                                 <br/>
                                    <Task key={index} task={todo.task} pending={todo.pending}/>
                                 <br/>
                                </>
                            );
                        })
                    }
           
            </div>
        </div>
    );
}