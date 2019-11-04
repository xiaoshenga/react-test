import React, { Component } from 'react';

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {myId:''}
    }
    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.id;
        this.setState({
            myId: id
        })
    }
    render() { 
        return ( <div>新闻{this.state.myId}</div> );
    }
}
 
export default New;