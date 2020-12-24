import { Page } from 'common/src'
import React from 'react'
import ReactDOM from 'react-dom'
import { Comp } from './file'
import './file.css'

ReactDOM.render(
    <React.StrictMode>
        <Comp />
        {/* {x} */}
        <Page />
    </React.StrictMode>,
    document.getElementById('root'),
)


