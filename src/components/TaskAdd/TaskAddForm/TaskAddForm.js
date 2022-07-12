import React from "react";
import {AddState} from "../TaskAdd"

export class TaskAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.sendState = this.sendState.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    sendState() {
        console.log(this.state);
        AddState(this.state)
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Task Name:
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Task Text
                        <input
                            name="text"
                            type="text"
                            value={this.state.text}
                            onChange={this.handleChange} />
                    </label>
                </form>
                <button onClick={this.sendState}>Add</button>
            </div>
        );
    }
}