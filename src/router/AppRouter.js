import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Index from './Index'
import Void from './void'
import Skill from './skill'
import '../style.css'


class AppRouter extends Component {

    render() { 
        return ( 
            <Router>
                <div className="wrapper">
                    <div className="left">
                        <h1>一级导航</h1>
                        <ul>
                            <li><Link to="/" >博客系统</Link></li>
                            <li><Link to="/void">视频教程</Link></li>
                            <li><Link to="/skill">职场技能</Link></li>
                        </ul>
                    </div>
                    <div className="right">
                        <Route path="/" exact component={Index}/>
                        <Route path="/void" component={Void} />
                        <Route path="/skill" component={Skill} />
                    </div>
                </div>
            </Router>
         );
    }
}

export default AppRouter