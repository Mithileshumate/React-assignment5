import React, { /*Component*/ PureComponent } from 'react'

export default class App extends /*Component*/ PureComponent {
    constructor() {
        super();
        this.state = { count: 1 }
    }
    render() {

        console.log("render");

        return (
            <div>
                <h1>Pure Components</h1>
                <br />
                <p>1.Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values.
                    <br /><br />
                    2.PureComponent is Primarily Used for Performance Optimization.
                    <br /><br />
                    3.Extending React Class Components with Pure Components ensures the higher performance of the Component and ultimately makes your application faster, While in the case of Regular Component, it will always re-render either value of State and Props changes or not.</p>
                <h2 className='pure'>Pure Component in React {this.state.count}</h2>
                <button onClick={() => { this.setState({ count: 5 }) }}>Update Value</button>
            </div>
        )
    }
}
