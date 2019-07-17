import * as React from "react"
import { ButtonGroup, Button } from "reactstrap";
require('./Pet.scss')
const ballon = require('../resources/ballon.jpg');
const normal = require('../resources/default.gif');
const dirty = require('../resources/dirty.gif');
const eating = require('../resources/eat.gif');
const guilty = require('../resources/guilty.gif');
const happy = require('../resources/happy.gif');
const bored = require('../resources/mad1.gif');
const mad = require('../resources/mad2.gif');
const sad = require('../resources/sad.gif');
const sleeping = require('../resources/sleep.gif');
const dead = require('../resources/dead.gif');
const washing = require('../resources/washing.gif');
const con = require('electron').remote.getGlobal('console')


export type status = "normal" | "dirty" | "eating" | "guilty" | "happy" | "bored" | "mad" | "sleeping" | "dead" | "sad" | "washing" | "hungry" | "sick"


type Props = {}
type State = {
    status: status,
    statusQuote: string,
    name: string,
    happines: number,
    starvation: number,
    health: number,
    bored: number,
    dirty: number
    age: number


}
const rate = 4;
const happyRate = .00005 * rate;
const hungerRate = .000045 * rate;
const healthRate = .00002 * rate;
const ageRate = .5;

class Pet extends React.PureComponent<Props, State> {


    state: State = {
        status: "normal",
        statusQuote: "",
        name: "Cthulhu",
        happines: 100,
        starvation: 0,
        health: 100,
        bored: 0,
        dirty: 0,
        age: 0
    }

    componentDidMount() {
        setInterval(() => {
            this.core(1000)
            this.updateStatus();
            // con.log(this.state)
        }, 1000)
    }

    core(deltaTime: number) {
        const { dirty, health, status, age, bored, happines, name, starvation, statusQuote } = this.state

        this.setState({
            age: age + ageRate
        })
        // State Machine For VPet
        if (status === 'normal') {
            this.setState({
                happines: happines - (happyRate * deltaTime),
                starvation: starvation - (hungerRate * deltaTime),
                health: health - (healthRate * deltaTime),
                bored: bored >= 0 ? bored + 1 : 0,
                dirty: dirty >= 0 ? dirty + 1 : 0
            })
        }
        if (status === 'sad') {
            this.setState({
                happines: happines - (happyRate * deltaTime * 1.5),
                starvation: starvation - (hungerRate * deltaTime),
                health: health - (healthRate * deltaTime * 1.5),
                bored: bored >= 0 ? bored + 1 : 0,
                dirty: dirty >= 0 ? dirty + 1 : 0

            })

            // updateStatus();
        }
        if (status === 'sick') {
            this.setState({
                happines: happines - (happyRate * deltaTime),
                starvation: starvation - (hungerRate * deltaTime * 1.2),
                health: health - (healthRate * deltaTime * 1.5),
                bored: bored >= 0 ? bored + 1 : 0,
                dirty: dirty >= 0 ? dirty + 1 : 0

            })
            // updateStatus();
        }
        if (status === 'hungry') {
            this.setState({
                happines: happines - (happyRate * deltaTime * 1.5),
                starvation: starvation - (hungerRate * deltaTime * 1.5),
                health: health - (healthRate * deltaTime * 1.5),
                bored: bored >= 0 ? bored + 1 : 0,
                dirty: dirty >= 0 ? dirty + 1 : 0

            })
            // updateStatus();
        }
        if (status === 'bored') {
            this.setState({
                happines: happines - (happyRate * deltaTime * 1.8),
                starvation: starvation - (hungerRate * deltaTime * 1.5),
                health: health - (healthRate * deltaTime * 2),
                bored: bored >= 0 ? bored + 1 : 0,
                dirty: dirty >= 0 ? dirty + 1 : 0

            })
            // updateStatus();
        }
        if (status === 'sleeping') {
            this.setState({
                happines: happines - (happyRate * deltaTime),
                starvation: starvation - (hungerRate * deltaTime),
                health: health - (healthRate * deltaTime),
                bored: bored - 1,
                dirty: dirty >= 0 ? dirty + 1 : 0

            })
            // updateStatus();
        }

        // updateScreen();
        // localSave();

    }


    updateStatus() {
        const { status, health, starvation, happines, dirty } = this.state
        con.log("updateStatus", this.state)
        if (status != 'dead' && status != 'sleeping') {

            if (happines <= 0 || health <= 0 || starvation <= 0) {
                //document.getElementById('background').muted = true;
                //document.getElementById('death').autoplay = true;
                this.setState({
                    status: "dead"
                })
                // document.getElementById('img').src = 'img/dead.png';
            }
            else if (status === 'normal') {
                if ((dirty >= 500)) {
                    this.setState({
                        status: "dirty"
                    })
                }
                else if ((bored >= 1000)) {
                    this.setState({
                        status: "bored"
                    })
                }
                else if ((happines < 40)) {

                    this.setState({
                        status: "sad"
                    })
                }
                else if ((health < 40)) {
                    this.setState({
                        status: "sick"
                    })
                }
                else if ((starvation < 40)) {
                    this.setState({
                        status: "hungry"
                    })
                }
            }
            else if (status === 'dirty' && dirty < 500) {
                if ((happines >= 40 && health >= 40 && starvation >= 40)) {
                    this.setState({
                        status: "normal"
                    })
                }
                else if ((bored >= 1000)) {
                    this.setState({
                        status: "bored"
                    })
                }
                else if ((happines < 40)) {
                    this.setState({
                        status: "sad"
                    })
                }
                else if ((health < 40)) {
                    this.setState({
                        status: "sick"
                    })
                }
                else if ((starvation < 40)) {
                    this.setState({
                        status: "hungry"
                    })
                }
            }
            else if (status === 'bored' && bored < 1000) {
                if ((dirty >= 500)) {
                    this.setState({
                        status: "dirty"
                    })
                }
                else if ((happines >= 40 && health >= 40 && starvation >= 40)) {
                    this.setState({
                        status: "normal"
                    })
                }
                else if ((happines < 40)) {
                    this.setState({
                        status: "sad"
                    })
                }
                else if ((health < 40)) {
                    this.setState({
                        status: "sick"
                    })
                }
                else if ((starvation < 40)) {
                    this.setState({
                        status: "hungry"
                    })
                }
            }
            else if (status === 'sad') {
                if ((dirty >= 500)) {
                    this.setState({
                        status: "dirty"
                    })
                }
                else if ((happines >= 40 && health >= 40 && starvation >= 40)) {
                    this.setState({
                        status: "normal"
                    })
                }
                else if ((bored >= 1000)) {
                    this.setState({
                        status: "bored"
                    })
                }
                else if ((health < 40)) {
                    this.setState({
                        status: "sick"
                    })
                }
                else if ((starvation < 40)) {
                    this.setState({
                        status: "hungry"
                    })
                }
            }
            else if (status === 'sick') {
                if ((dirty >= 500)) {
                    this.setState({
                        status: "dirty"
                    })
                }
                else if ((happines >= 40 && health >= 40 && starvation >= 40)) {
                    this.setState({
                        status: "normal"
                    })
                }
                else if ((happines < 40)) {
                    this.setState({
                        status: "sad"
                    })
                }
                else if ((bored >= 1000)) {
                    this.setState({
                        status: "bored"
                    })
                }
                else if ((starvation < 40)) {
                    this.setState({
                        status: "hungry"
                    })
                }
            }
            else if (status === 'hungry') {
                if ((dirty >= 500)) {
                    this.setState({
                        status: "dirty"
                    })
                }
                else if ((happines >= 40 && health >= 40 && starvation >= 40)) {
                    this.setState({
                        status: "normal"
                    })
                }
                else if ((happines < 40)) {
                    this.setState({
                        status: "sad"
                    })
                }
                else if ((bored >= 1000)) {
                    this.setState({
                        status: "bored"
                    })
                }
                else if ((health < 40)) {
                    this.setState({
                        status: "sick"
                    })
                }
            }
        }
    }

    Reset = () => {

        this.setState({
            age: 0,
            happines: 100,
            starvation: 100,
            health: 100,
            status: "normal"
            // this.estagio = 'baby'
        })
    }


    Feed = () => {
        const { starvation, happines, status } = this.state
        if (status !== 'dead' && status !== 'sleeping') {

            this.setState({
                starvation: starvation + 20,
                happines: happines + 5
            })

            // this.updateStatus();
        }
    }
    Clean = () => {
        const { health, happines, status } = this.state
        if (status != 'dead' && status != 'sleeping') {
            this.setState({
                health: health + 20,
                happines: happines - 5,
                dirty: 0
            })
            // this.updateStatus();
        }

    }

    Play = () => {

        const { starvation, happines, status } = this.state
        if (status != 'dead' && status != 'sleeping') {
            this.setState({
                happines: happines + 10,
                starvation: starvation - 20,
                bored: bored >= 0 ? bored + 1 : 0,
                // dirty: dirty + 5
            })
        }


    }

    Heal = () => {
        const { health, status } = this.state
        if (status != 'dead' && status != 'sleeping') {
            this.setState((prevState, props) => ({
                health: prevState.health + 10
            }));
        }
    }

    Sleep = () => {
        const { status } = this.state
        if (status != 'sleeping' && status != 'dead') {
            this.setState({
                status: "sleeping",
            })
        }
    }

    render() {
        const { status } = this.state
        return <>
            {this.updateStatus}
            {status === "normal" && <img src={normal} style={{ width: "205px" }} />}
            {status === "dirty" && <img src={dirty} style={{ width: "205px" }} />}
            {status === "eating" && <img src={eating} style={{ width: "205px" }} />}
            {status === "guilty" && <img src={guilty} style={{ width: "205px" }} />}
            {status === "happy" && <img src={happy} style={{ width: "205px" }} />}
            {status === "bored" && <img src={bored} style={{ width: "205px" }} />}
            {status === "mad" && <img src={mad} style={{ width: "205px" }} />}
            {status === "sad" && <img src={sad} style={{ width: "205px" }} />}
            {status === "sleeping" && <img src={sleeping} style={{ width: "205px", filter: "brightness(50%)" }} />}
            {status === "dead" && <img src={dead} style={{ width: "205px" }} />}
            <div className="terminal"><span>I'm hungry</span><nav></nav></div>
            <div className="d-flex flex-column">
                {this.renderButtons()}
            </div>
            {/* {con.log(this.state)} */}
        </>
    }

    handleSleeping = () => {
        const { status } = this.state
        if (status == "sleeping") {
            this.setState({ status: "normal" })
        } else {
            this.setState({ status: "sleeping" })
        }
    }

    renderButtons() {
        const { status } = this.state
        return (<>
            <div>
                <div className="d-flex flex-column">
                    <ButtonGroup >
                        <Button className="button" size="sm" color="secondary" onClick={this.Feed}>Feed</Button>
                        <Button size="sm" color="secondary" onClick={this.Clean}>Clean</Button>
                        <Button size="sm" color="secondary" onClick={this.Play}>Play</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button size="sm" color="secondary" onClick={this.Heal}>Heal</Button>
                        {status != "sleeping" && (<Button size="sm" color="secondary" onClick={this.handleSleeping} >Sleep</Button>)}
                        {status == "sleeping" && (<Button size="sm" color="secondary" onClick={this.handleSleeping} >Awake</Button>)}
                        {/* {status == "sleeping" && <Button size="sm" color="secondary" onClick={() => { this.setState({ status: "normal" }) }}>Awake</Button>} */}
                        {/* <Button size="sm" color="secondary" onClick={() => { this.setState({ status: (status == "sleeping" ? "sleeping" : "normal") }) }}>{status == "sleeping" ? "Awake" : "Sleep"}</Button> */}
                        <Button size="sm" color="secondary" onClick={this.Reset}>Reset</Button>
                    </ButtonGroup>

                </div>
            </div>
        </>)
    }
}

export default Pet
