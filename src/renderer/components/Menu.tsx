import * as React from 'react';
import Pet from './Pet';
import Login from './Login';
import Home from './Home';
require('./Menu.scss');
// const redCubeImg = require('./RedCube.jpg');




const cthulhu = require('../resources/default.gif');

export interface Props {
    // value: number;
    // incrementValue: () => any;
    // changeScreen: () => any;
    // decrementValue: () => any;
}

const Counter: React.FunctionComponent<Props> = ({ }) => (

    <div  style={{border:"solid 2px black"}} className="centerHV">
        <Login />
    </div>
);

export default Counter;
