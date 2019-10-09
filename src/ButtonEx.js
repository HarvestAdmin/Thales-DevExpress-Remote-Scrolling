import React from 'react';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import Button from 'devextreme-react/button';

const sayHelloWorld = () => {
    alert('Hello world! from ButtonEx');
    // this.setState({ id : 5});
}


export default class ButtonEx extends React.Component {

    constructor() {

        super();

        this.state = {
            id: 2
        };
    }

    render() {
        return (
            <React.Fragment>
                <label>{this.state.id}</label>
                <Button
                    text="Click me"
                    onClick={sayHelloWorld}
                />
            </React.Fragment>
        );
    }

    // sayHelloWorld = () => {
    //     alert('Hello world! from ButtonEx');
    //     this.setState({ id : 5});
    // }
}
