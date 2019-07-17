import * as React from "react"
import { ButtonGroup, Button, Progress, Label } from "reactstrap"
import Pet from './Pet';
require('./Login.scss')
require('./Home.scss')



const con = require('electron').remote.getGlobal('console')
const icon = require('../resources/loginIcon.jpg');

type Props = {}
type State = {
    // felling : string

}


class Home extends React.PureComponent<Props, State> {
    state: State = {}



    render() {
        return (<>
            <div >

                {/* {this.renderActions} */}

                <Pet />

            </div>
        </>)
    }


    renderActions() {

        return (<>
            <div >

                <ButtonGroup vertical >
                    <Button size="sm" color="secondary">Play Pet</Button>
                    <span style={{ height: "10px" }}></span>
                    <Button size="sm" color="secondary">New Pet</Button>
                    <span style={{ height: "10px" }}></span>
                    <Button size="sm" color="secondary">Delete Pet</Button>
                </ButtonGroup>

            </div>
        </>)
    }

}

export default Home
