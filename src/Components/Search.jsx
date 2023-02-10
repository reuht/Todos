
export default function Search(props){

    const HandlerTask = (event) => {
        props.setTask(event.targe.value);
    }

    return (
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <input className="input is-medium" type="text" placeholder="New task"
              onChange={HandlerTask}
            />
          </div>
        </div>
    )
}