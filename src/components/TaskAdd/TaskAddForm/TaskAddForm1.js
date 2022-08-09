import React, {useState} from "react";
import { useTasks } from "../../TaskContext"

const [task, setTask] = useState({
    name: '',
    text: ''
});

const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setTask({
        [name]: value
    });
    console.log(task)
}

const value = useTasks()

export const TaskAddForm = () => {
    return (
        <div>
            <form>
                <label>
                    Task Name:
                    <input
                        name="name"
                        type="text"
                        value={task.name}
                        onChange={handleChange} />
                </label>
                <label>
                    Task Text
                    <input
                        name="text"
                        type="text"
                        value={task.text}
                        onChange={handleChange} />
                </label>
            </form>
            <button onClick={value.addTask(task)}>Add</button>
        </div>
    );
}