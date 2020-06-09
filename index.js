class Increment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    handleClick = () => {
        // alert('Button clicked');
        this.setState({
            value: this.state.value + 1
        });
    }

    render = () => {
        return <div>
            <button type="button" onClick={this.handleClick}>Increment</button>
            <h1>{this.state.value}</h1>
        </div>
    }
}

ReactDOM.render(<Increment />, document.getElementById('root'))