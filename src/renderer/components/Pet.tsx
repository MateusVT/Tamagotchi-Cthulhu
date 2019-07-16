import * as React from "react"
const def = require('../resources/default.gif');
const dirty = require('../resources/dirty.gif');
const eat = require('../resources/eat.gif');
const guilty = require('../resources/guilty.gif');
const happy = require('../resources/happy.gif');
const mad1 = require('../resources/mad1.gif');
const mad2 = require('../resources/mad2.gif');
const sad = require('../resources/sad.gif');
const sleep = require('../resources/sleep.gif');
const washing = require('../resources/washing.gif');



type Props = {}
type State = {


}


class Pet extends React.PureComponent<Props, State> {
    state: State = {}
    render() {
        return <>
            <img src={def} />
            {/* <img src={dirty} /> */}
        </>
    }
}

export default Pet
