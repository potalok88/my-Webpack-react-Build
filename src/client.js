import React from 'react'
import ReactDOM from 'react-dom'
import {Route} from 'react-router'

import Temp from './components/Temp/Temp'
import Main from './components/Main/Main'

const Router = () => (
    <Route>
        <Route path="/" component={Main}/>
        <Route path="/temp" component={Temp}/>
    </Route>
)


ReactDOM.render(<Router/>, document.getElementById('container'))



