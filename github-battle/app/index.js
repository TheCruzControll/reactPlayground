import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/**
 * Component:
 *   -  State
 *   -  Lifecycle
 *   -  UI
 */

class App extends React.Component {
    render() {
        return (
            <div>
                Hello Niko Cruz!
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)