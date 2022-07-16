import React, {useState} from "react";
import {AddState} from "../TaskAdd"

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

const sendState = () => {
    console.log(task);
    AddState(task)
}

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
            <button onClick={sendState}>Add</button>
        </div>
    );
}