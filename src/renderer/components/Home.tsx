import * as React from "react"
import { ButtonGroup, Button, Progress, Label, ListGroup, ListGroupItem } from "reactstrap"

import Pet from './Pet';
import { user } from "./Login";
require('./Login.scss')
require('./Home.scss')

export type screen = "actions" | "pets" | "playing" | "newPet" | "deletePet";

const con = require('electron').remote.getGlobal('console')
const icon = require('../resources/loginIcon.jpg');

type Props = {
    user: user | null
}
type State = {
    screen: screen
    // felling : string

}


class Home extends React.PureComponent<Props, State> {
    state: State = {
        screen: "playing"
    }




    render() {
        const { screen } = this.state
        const { user } = this.props
        return (<>
            <div >
                {con.log(user)}
                {/* {this.renderActions} */}
                {screen == "actions" && this.renderActions}
                {screen == "pets" && this.renderPets}
                {screen == "playing" && (<Pet />)}

            </div>
        </>)
    }

    renderPets() {
        const { user } = this.props
        return (<>
            <div >

                <ListGroup>
                    {user && user.pets.forEach(pet =>
                        <ListGroupItem active tag="a" href="#" action>{pet.name}</ListGroupItem>
                    )}
                    {/* <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem> */}
                </ListGroup>

            </div>
        </>)
    }

    handleScreen = () => {

        this.setState({
            screen: "newPet"
        })

    }

    renderActions() {

        return (<>
            <div >

                <ButtonGroup vertical >
                    {/* <Button size="sm" color="secondary" onClick={() => { this.setState({ screen: "pets" }) }}>Play Pet</Button>
                    <span style={{ height: "10px" }}></span>
                    <Button size="sm" color="secondary" onClick={() => { this.setState({ screen: "newPet" }) }}>New Pet</Button>
                    <span style={{ height: "10px" }}></span>
                    <Button size="sm" color="secondary" onClick={() => { this.setState({ screen: "deletePet" }) }}>Delete Pet</Button> */}
                    <Button size="sm" color="secondary" >Play Pet</Button>
                    <span style={{ height: "10px" }}></span>
                    <Button size="sm" color="secondary" >New Pet</Button>
                    <span style={{ height: "10px" }}></span>
                    <Button size="sm" color="secondary" >Delete Pet</Button>
                </ButtonGroup>

            </div>
        </>)
    }

}

export default Home
