import React from 'react';

const Home = ()  => {
    return (
        <div>
            <div className="div">I am Home best 1 component</div>
            <button onClick={() => console.log("11")}>Click me!</button>
        </div>
    )
}

export default {
    component: Home
};