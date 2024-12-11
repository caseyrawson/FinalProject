import React from 'react';


import "../index.css";
import MyComponent from './MyComponent';

class Contact extends React.Component {

    greeting(name) {
        alert("Greeting " + name);
    };

    hello(name) {
        alert("Hello " + name);
    }

    render() {
        return(
            <>
            <div>
                <br />
                <div>
                    <h1  className="text-3xl font-bold underline">Greetings!</h1>
                    <button onClick={() => this.greeting('CSE 2102 Class')}>Say hello</button>
                    <br />
                </div>
            </div>
            <MyComponent />
            </>
        );
    }
}

export default Contact;