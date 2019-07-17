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
                {/* <div className="d-flex flex-column">
                    {this.renderHeader()}
                </div> */}
                {this.renderActions()}

                {/* <Pet /> */}

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

    renderHeader() {
        return (<>
            <div style={{ display: "flex", color: "white", background: "#255325" }} >

                <div >
                    <div>
                        <Label size="sm" style={{ padding: "5px" }} for="exampleSelectMulti">Health</Label>
                    </div>
                    <div >
                        <Label size="sm" style={{}} for="exampleSelectMulti">5</Label>
                    </div>

                    {/* <Progress style={{ width: "100%", height: "3px", padding: "5px" }} value={2 * 5} /> */}
                </div>
                <div ><div>
                    <Label size="sm" style={{ padding: "5px" }} for="exampleSelectMulti">Happy</Label>
                </div>
                    <div>
                        <Label size="sm" style={{}} for="exampleSelectMulti">10</Label>
                    </div>
                    {/* <Progress style={{ width: "100%", height: "3px", padding: "5px" }} value={40} /> */}
                </div>
                <div >
                    <div>
                        <Label size="sm" style={{ padding: "5px" }} for="exampleSelectMulti">Hunger</Label>
                    </div>
                    <div>
                        <Label size="sm" style={{}} for="exampleSelectMulti">5</Label>
                    </div>
                    {/* <Progress style={{ width: "100%", height: "3px", padding: "5px" }} value={80} /> */}
                </div>
                <div ><div>
                    <Label size="sm" style={{ padding: "5px" }} for="exampleSelectMulti">Status</Label>
                </div>
                    <div>
                        <Label size="sm" style={{}} for="exampleSelectMulti">25</Label>
                    </div>
                    {/* <Progress style={{ width: "100%", height: "3px", padding: "5px" }} value={2 * 5} /> */}
                </div>

            </div>
        </>)
    }
    // renderButtons() {
    //     return (<>
    //         <div>


    //             <div className="d-flex flex-column">
    //                 <ButtonGroup >
    //                     <Button className="button" size="sm" color="secondary">Feed</Button>
    //                     <Button size="sm" color="secondary">Clean</Button>
    //                     <Button size="sm" color="secondary">Play</Button>
    //                 </ButtonGroup>
    //                 <ButtonGroup>
    //                     <Button size="sm" color="secondary">Heal</Button>
    //                     <Button size="sm" color="secondary">Lights</Button>
    //                     <Button size="sm" color="secondary">Reset</Button>
    //                 </ButtonGroup>

    //             </div>
    //         </div>
    //     </>)
    // }
}

export default Home
