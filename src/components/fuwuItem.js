import React,{Component} from 'react'
import propTypes from 'prop-types'

export default class FwItem extends Component{

    render(){
        return(
            <li onClick={this.fn.bind(this)}>{this.props.vaname}为你服务{this.props.content}</li>
        )
    }
    fn(){
        console.log(this.props.index);
        this.props.delect(this.props.index);
    }
}

FwItem.propTypes = {
    content : propTypes.string,
    index: propTypes.number
}
FwItem.defaultProps = {
    vaname: '小姐姐'
}