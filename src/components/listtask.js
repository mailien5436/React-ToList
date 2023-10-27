import { UseSelector, UseDispatch, useSelector } from "react-redux/es/hooks/useSelector";
import { dele } from "../reducers/taskSlice";
import { useDispatch } from "react-redux";

function ListTask() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.list);
    const deleTask = (name) => {
        dispatch(dele(name));
    }
    return (
        <>
            <div className="list-tasks">
            <h3 className="mb-5">List of tasks:</h3>
            {
                tasks.map(function(task, idx){
                    return (
                        <div className="task" key={idx}>
                            {task}
                            <button onClick={() => deleTask(task)}>X</button>
                        </div>
                    );
                })
            }
        </div>
        </>
    );
}
export default ListTask;