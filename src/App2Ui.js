import React from 'react';
import { Input, Button, List } from 'antd/dist/antd.js'
import 'antd/dist/antd.css'


function App2Ui (props){
    return (
        <div style={{width: '350px',margin:'10px'}}>
        <Input
            placeholder={props.inputValue}
            style={{ width: '250px',marginRight:'10px' }}
            onInput={props.inputChange}
            value = {props.inputValue}
        />
        <Button type="primary" onClick={props.add}>添加服务</Button>
        <List
            style={{margin:'10px 0'}}
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (
                <List.Item onClick = {()=>{props.remove(index)}} >
                    {item}
                </List.Item>
            )}
        />
    </div>
    )
}


 
export default App2Ui;