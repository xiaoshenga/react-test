import React,{Component} from 'react'
import axios from 'axios'
import '../style.css'

 export default class Test extends Component{
    constructor(props){
        super(props);
        this.state={
            num : 0,
            falg:false
        }
        this.myRefs = React.createRef();
        this.myClick = this.myClick.bind(this);
    }
    static getDerivedStateFromProps(nextProps, prevState){
        // console.log(nextProps,prevState)
        console.log('组件挂载前，或state，props发生更新')

        if(prevState.num === 10)return null
        return {
            num:2,
            msg:'hello'
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('更新数据',nextProps,nextState)
        return true
    }
    componentDidUpdate(){
        console.log('数据更新完成')
    }
    // componentWillMount(){
    //     console.log('组件挂在前')
    // }
    componentDidMount(){
        axios.get('https://api.apiopen.top/getJoke?count=4&type=video&page=1')
            .then(res=>{
                console.log(res);
            })
            .catch(error=>{
                console.log('请求失败',error)
            })
        console.log('组件挂在完成   ')
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        return null
    }
    myClick(){
        this.setState({
            falg : !this.state.falg
        })
        // console.log(this.div);
    }
    render(){
        console.log("render");
        return(
            <div>
                <Test2 num={this.state.num } 
                />
                <div ref={div=>{this.div=div}}></div>
                <div ref={div=>{this.div=div}} className={this.state.falg?'hid':'show'} style={{fontSize:'30px',color:'blue'}}>二</div>
                <button onClick ={this.myClick}>show||hidden</button>
            </div>
        )
    }
}


function Test2(props){
    return(
        <div><h1>{props.num}</h1></div>
    )
}