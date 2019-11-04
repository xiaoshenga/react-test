import React from 'react'
import {Link,Route} from 'react-router-dom'
import A  from "./skill/a";
import B from "./skill/B";

function Skill(){
    return(
        <div className="voidNav">
            <ul>
                <li><Link to="/skill/a">程序员加薪秘籍</Link></li>
                <li><Link to="/skill/b">程序员早起攻略</Link></li>
            </ul>

            <div>
                <Route path="/skill/a"  component={A}/>
                <Route path="/skill/b"  component={B}/>
            </div>
        </div>
    )
}

export default Skill