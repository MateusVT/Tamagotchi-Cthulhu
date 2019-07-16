import * as React from 'react';
import Pet from './Pet';
import Login from './Login';

require('./Menu.scss');
// const redCubeImg = require('./RedCube.jpg');
const cthulhu = require('../resources/default.gif');

export interface Props {
    value: number;

    incrementValue: () => any;
    decrementValue: () => any;
}

const Counter: React.FunctionComponent<Props> = ({ value, incrementValue, decrementValue }) => (
    <div className="mainFrame">
        {/* <Login/> */}
        {/* <div className="screen"> */}
        <Pet />

    {/* </div> */}
    </div>
);

export default Counter;
