import { Page } from 'common'
import React from 'react'
import ReactDOM from 'react-dom'
import { Comp, x } from './file'
import './file.css'
import json from './file.json'
import css from './file.module.css'

ReactDOM.render(
    <React.StrictMode>
        <Comp />
        {x}
        <Page />
        <pre>{JSON.stringify({ json, css })}</pre>
    </React.StrictMode>,
    document.getElementById('root'),
)
