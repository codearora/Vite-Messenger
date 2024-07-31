import { Component } from "react"

const withCounter = (WrappedComponent) => {
    return class NewComponent extends Component {
        render() {
            return <WrappedComponent hello="world" />
        }
    }
}

export default withCounter