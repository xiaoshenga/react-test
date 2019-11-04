import React from 'react'
import {Link,Route} from 'react-router-dom'
import Flutter from './void/Flutter'
import ReactVoid from './void/ReactVoid'
import Vue from './void/Vue'

function Void(){
    return(
        <div className="voidNav">
            <ul>
                <li><Link to="/void/flutter">Fluter.js教程</Link></li>
                <li><Link to="/void/react">React教程</Link></li>
                <li><Link to="/void/vue">vue.js教程</Link></li>
            </ul>

            <div>
                <Route path="/void/" exact component={Flutter} />
                <Route path="/void/flutter"  component={Flutter}/>
                <Route path="/void/react"  component={ReactVoid}/>
                <Route path="/void/vue"  component={Vue}/>

            </div>
        </div>
    )
}

export default Void