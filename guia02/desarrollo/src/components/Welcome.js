import React, {Component} from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jeffrey"
        }
    };
    render() {
        return <button onClick={this.props.handleClick}> TO-DO list, {this.props.name}</button>
    }
}

export default Welcome;