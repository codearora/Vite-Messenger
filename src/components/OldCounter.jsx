import { Component } from "react"

class OldCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        console.log("constructor method")
    }
    componentDidMount() {
        console.log("component did mount")
    }
    componentDidUpdate() {
        console.log("component did update")
    }
    componentWillUnmount() {
        console.log("component will unmount")
    }
    render() {
        console.log("render method")
        console.log(this);
        const { name } = this.props;
        console.log(name);
        return <>
            <h1>OldCounter</h1>
            <h2>{this.state.count}</h2>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>Button</button>
            {/* <button onClick={function () { this.setState({ count: this.state.count - 1 }) }}>Button to Subtract</button> */}
        </>
    }
}

export default OldCounter