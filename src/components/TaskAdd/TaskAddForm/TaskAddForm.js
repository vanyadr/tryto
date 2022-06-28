export class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
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
        );
    }
}