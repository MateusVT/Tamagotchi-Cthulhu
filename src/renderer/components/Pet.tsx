import * as React from "react"
import { ButtonGroup, Button, Label, Alert, Progress } from "reactstrap";
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
    error: string | null,
    energy: number,
    statusQuote: string,
    name: string,
    happiness: number,
    starvation: number,
    health: number,
    bored: number,
    dirty: number
    age: number


}
// const rate = 4;
// const happyRate = .00005 * rate;
// const starvationRate = .000045 * rate;
// const healthRate = .00002 * rate;
// const ageRate = .5;
const rate = 4;
const happyRate = .0005;
const starvationRate = .00045;
const healthRate = .0002;
const ageRate = .5;

class Pet extends React.PureComponent<Props, State> {


    state: State = {
        status: "normal",
        error: null,
        statusQuote: "Hi Master! ~",
        name: "Cthulhu",
        energy: 100,
        health: 100,
        happiness: 100,
        starvation: 0,
        bored: 0,
        dirty: 0,
        age: 0
    }

    componentDidMount() {
        setInterval(() => {
            const { status, energy } = this.state
            // if(status != "dead"){
            this.setState({ energy: energy + 2 <= 99 ? energy + 2 : 100 })
            this.core(1000)

            this.updateStatus();
            // }
            // con.log(this.state)
        }, 1000)
    }

    core(deltaTime: number) {
        const { dirty, health, status, age, bored, happiness, name, starvation, statusQuote } = this.state

        this.setState({
            age: age + ageRate
        })
        // State Machine For VPet
        if (status === 'normal') {
            this.setState({
                happiness: happiness - (happyRate * deltaTime) >= 0 ? happiness - (happyRate * deltaTime) : 0,//Ficar parado te deixa infeliz (happiness --)
                starvation: starvation + (starvationRate * deltaTime) <= 99 ? starvation + (starvationRate * deltaTime) : 100,//Ficar parado dá fome (starvation ++)
                health: health - (healthRate * deltaTime) >= 0 ? health - (healthRate * deltaTime) : 0,//Sedentarismo  faz mal para saúde (health --)
                bored: bored <= 99 ? bored + 1 : 100,//Sedentarismo endetia (bored ++)
                dirty: dirty <= 99 ? dirty + 0.2 : 100//Coisas paradas também sujam (dirty ++)
            })
        }
        if (status === 'sad') {
            this.setState({
                happiness: (happiness - (happyRate * deltaTime * 1.5)) >= 0 ? happiness - (happyRate * deltaTime * 1.5) : 0,//Se você está triste a tendência é ficar mais triste se não fizer algo sobre (happninnes --)
                starvation: (starvation + (starvationRate * deltaTime * 1.5)) <= 99 ? starvation + (starvationRate * deltaTime) : 100,//Tristeza dá fome (starvation ++)
                health: (health - (healthRate * deltaTime * 1.5)) >= 0 ? health - (healthRate * deltaTime * 1.5) : 0,//Tristeza faz mal (health--)
                bored: bored <= 99 ? bored + 1 : 100,//Não há nada divertido sendo estando triste, é entediante (bored++)
                // dirty: dirty <= 99 ? dirty + 1 : 100//Estar triste não tem relação limpeza

            })
        }
        if (status === 'sick') {
            this.setState({
                happiness: happiness - (happyRate * deltaTime) >= 0 ? happiness - (happyRate * deltaTime * 1.2) : 0,//Ninguém fica feliz doente (happinnes --)
                starvation: starvation + (starvationRate * deltaTime * 1.2) >= 0 ? starvation + (starvationRate * deltaTime * 1.2) : 0,//O corpo precisa de mais comida para se recuperar ou fome pode ser o motivo da sua doença (starvation ++)
                health: health - (healthRate * deltaTime * 1.5) >= 0 ? health - (healthRate * deltaTime * 1.5) : 0,//Sem remédios sua saúde tende a piorar ainda mais rápido (health --)
                bored: bored <= 99 ? bored + 1 : 100,//Ficar doente em casa pode ser entediante (bored++)
                // dirty: dirty <= 99 ? dirty + 1 : 100

            })
        }
        if (status === 'hungry') {
            this.setState({
                happiness: happiness - (happyRate * deltaTime * 1.5) >= 0 ? happiness - (happyRate * deltaTime * 1.5) : 0,//Fome deixa qualquer um triste (happinness -- )
                starvation: starvation + (starvationRate * deltaTime * 1.5) <= 99 ? starvation + (starvationRate * deltaTime * 1.5) : 100,//Fome aumenta exponencialmente (starvation ++)
                health: health - (healthRate * deltaTime * 1.5) >= 0 ? health - (healthRate * deltaTime * 1.5) : 0,//Comer pouco pode te deixar doente (health --)
                bored: bored <= 99 ? bored + 1 : 100,//Fome não é divertido (bored++)
                // dirty: dirty <= 99 ? dirty + 1 : 100

            })
        }
        if (status === 'bored') {
            this.setState({
                happiness: happiness - (happyRate * deltaTime * 1.8) >= 0 ? happiness - (happyRate * deltaTime * 1.8) : 0,//Tédio é triste (happiness --)
                starvation: starvation + (starvationRate * deltaTime * 1.5) <= 99 ? starvation + (starvationRate * deltaTime * 1.5) : 100,//Ociosidade dá fome (starvation++)
                health: health - (healthRate * deltaTime * 1.5) >= 0 ? health - (healthRate * deltaTime * 1.5) : 0,//Estar entediado não é saúdavel (health --)
                bored: bored <= 99 ? bored + 2 : 100,//Se você não faz algo quanto ao tédio ele tende a piorar mais rapidamente (bored ++)
                // dirty: dirty <= 99 ? dirty + 1 : 100

            })
        }
        if (status === 'sleeping') {
            this.setState({
                happiness: happiness + (happyRate * deltaTime) <= 100 ? happiness + (happyRate * deltaTime) : 0,//Dormir deixa mais feliz
                health: health + (healthRate * deltaTime) <= 100 ? health + (healthRate * deltaTime) : 0,//Dormir faz bem para saúde health ++
                // starvation: starvation + (starvationRate * deltaTime) >= 0 ? starvation + (starvationRate * deltaTime) : 0,//Dormir para a fome + acorda com mais fome
                // bored: bored <= 99 ? bored - 1 : 100,//Dormindo não se fica entediado
                // dirty: dirty <= 99 ? dirty - 1 : 100 //Dormindo não se suja

            })
        }
        if (status === 'dirty') {
            this.setState({
                happiness: happiness - (happyRate * deltaTime * 1.2) >= 0 ? happiness - (happyRate * deltaTime * 1.2) : 0,//Ninguém gosta de ficar sujo(happiness --)
                health: health - (healthRate * deltaTime * 1.2) >= 0 ? health - (healthRate * deltaTime * 1.2) : 0,//Ficar sujo pode acarretar em doenças (health --)
                starvation: starvation + (starvationRate * deltaTime) <= 99 ? starvation + (starvationRate * deltaTime) : 100,//Dormir para a fome + acorda com mais fome
                dirty: dirty <= 99 ? dirty + 1 : 100//Se você não se limpar vai ficar cada vez mais sujo
                // bored: bored <= 99 ? bored + 2 : 100,//Se você não faz algo quanto ao tédio ele tende a piorar mais rapidamente (bored ++)

            })
        }

    }

    findTheWorstState() {
        const { happiness, bored, health, starvation } = this.state
        Math.max(happiness, bored, health, starvation)

    }


    updateStatus() {
        const { status, health, starvation, happiness, dirty } = this.state
        con.log("updateStatus", this.state)
        if (status != 'dead' && status != 'sleeping') {

            if (happiness <= 0 || health <= 0 || starvation >= 100) {
                this.setState({
                    status: "dead"
                })
            }
            else if (status === 'normal') {
                if ((dirty > 60)) {
                    this.setState({
                        status: "dirty"
                    })
                }
                else if ((bored > 60)) {
                    this.setState({
                        status: "bored"
                    })
                }
                else if ((happiness < 40)) {

                    this.setState({
                        status: "sad"
                    })
                }
                else if ((health < 40)) {
                    this.setState({
                        status: "sick"
                    })
                }
                else if ((starvation > 50)) {
                    this.setState({
                        status: "hungry"
                    })
                }
            }
            else if (status === 'dirty' && dirty < 500) {
                if ((happiness >= 40 && health >= 40 && starvation >= 40)) {
                    this.setState({
                        status: "normal"
                    })
                }
                else if ((bored >= 60)) {
                    this.setState({
                        status: "bored"
                    })
                }
                else if ((happiness < 40)) {
                    this.setState({
                        status: "sad"
                    })
                }
                else if ((health < 40)) {
                    this.setState({
                        status: "sick"
                    })
                }
                else if ((starvation > 50)) {
                    this.setState({
                        status: "hungry"
                    })
                }
            }
            else if (status === 'bored' && bored < 1000) {
                if ((dirty >= 50)) {
                    this.setState({
                        status: "dirty"
                    })
                }
                else if ((happiness >= 40 && health >= 40 && starvation >= 40)) {
                    this.setState({
                        status: "normal"
                    })
                }
                else if ((happiness < 40)) {
                    this.setState({
                        status: "sad"
                    })
                }
                else if ((health < 40)) {
                    this.setState({
                        status: "sick"
                    })
                }
                else if ((starvation > 50)) {
                    this.setState({
                        status: "hungry"
                    })
                }
            }
            else if (status === 'sad') {
                if ((dirty >= 50)) {
                    this.setState({
                        status: "dirty"
                    })
                }
                else if ((happiness >= 40 && health >= 40 && starvation >= 40)) {
                    this.setState({
                        status: "normal"
                    })
                }
                else if ((bored >= 60)) {
                    this.setState({
                        status: "bored"
                    })
                }
                else if ((health < 40)) {
                    this.setState({
                        status: "sick"
                    })
                }
                else if ((starvation > 50)) {
                    this.setState({
                        status: "hungry"
                    })
                }
            }
            else if (status === 'sick') {
                if ((dirty >= 50)) {
                    this.setState({
                        status: "dirty"
                    })
                }
                else if ((happiness >= 40 && health >= 40 && starvation >= 40)) {
                    this.setState({
                        status: "normal"
                    })
                }
                else if ((happiness < 40)) {
                    this.setState({
                        status: "sad"
                    })
                }
                else if ((bored >= 40)) {
                    this.setState({
                        status: "bored"
                    })
                }
                else if ((starvation > 50)) {
                    this.setState({
                        status: "hungry"
                    })
                }
            }
            else if (status === 'hungry') {
                if ((dirty >= 50)) {
                    this.setState({
                        status: "dirty"
                    })
                }
                else if ((happiness >= 40 && health >= 40 && starvation >= 40)) {
                    this.setState({
                        status: "normal"
                    })
                }
                else if ((happiness < 40)) {
                    this.setState({
                        status: "sad"
                    })
                }
                else if ((bored >= 40)) {
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
            happiness: 100,
            energy: 100,
            health: 100,
            starvation: 0,
            bored: 0,
            dirty: 0,
            status: "normal"
            // this.estagio = 'baby'
        })
    }

    handleClearError = () => {
        this.setState({
            error: null
        })
    }

    renderError() {
        const { error } = this.state

        return (
            <Alert
                // anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                autoHideDuration={5000}
                message={error}
                onClose={this.handleClearError}
                open={error != null}
            />
        )
    }


    Feed = () => {
        const { starvation, happiness, status, energy } = this.state
        if (status !== 'dead' && status !== 'sleeping' && energy >= 20) {

            this.setState({
                energy: energy - 20,
                starvation: starvation + (20 * Math.random()),
                happiness: happiness + (5 * Math.random())
            })
        } else if (energy < 20) {

            this.setState({
                error: "Not Enough Energy!"
            })

        }
    }
    Clean = () => {
        const { health, happiness, status, energy } = this.state
        if (status != 'dead' && status != 'sleeping' && energy >= 40) {
            this.setState({
                energy: energy - 20,
                health: health + (20 * Math.random()),
                happiness: happiness - (5 * Math.random()),
                dirty: 0
            })
        } else if (energy < 40) {

            this.setState({
                error: "Not Enough Energy!"
            })

        }

    }

    Play = () => {

        const { starvation, happiness, status, energy } = this.state
        if (status != 'dead' && status != 'sleeping' && energy >= 60) {
            this.setState({
                energy: energy - 60,
                happiness: happiness + (10 * Math.random()),//Brincar é divertido!
                starvation: starvation + (20 * Math.random()),//Gastar energia brincando dá fome!
                bored: bored - 20 >= 0 ? bored - 20 : 0,//Brincar te tira do tédio
                dirty: dirty + 15 <= 99 ? dirty + 20 : 100,//Você provavelmente vai se sujar brincando.
            })
        } else if (energy < 60) {

            this.setState({
                error: "Not Enough Energy!"
            })

        }


    }

    Heal = () => {
        const { health, status, energy } = this.state
        if (status != 'dead' && status != 'sleeping' && energy >= 40) {
            this.setState({
                energy: energy - 40,
                health: health + (10 * Math.random()),
            });
            // this.setState((prevState, props) => ({
            //     health: health + (10 * Math.random()),
            // }));
        } else if (energy < 40) {

            this.setState({
                error: "Not Enough Energy!"
            })

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

    render() {//Som??
        const { status, statusQuote, age, error } = this.state
        return <>
            <div className="d-flex flex-column">
                {this.renderHeader()}
            </div>
            {this.updateStatus}
            {this.renderError}
            {status === "normal" && <img src={normal} className="imgProp" style={{ width: "245px", height: "210px" }} />}
            {status === "dirty" && <img src={dirty} style={{ width: "245px", height: "210px" }} />}
            {status === "eating" && <img src={eating} style={{ width: "245px", height: "210px" }} />}
            {status === "guilty" && <img src={guilty} style={{ width: "245px", height: "210px" }} />}
            {status === "happy" && <img src={happy} style={{ width: "245px", height: "210px" }} />}
            {status === "bored" && <img src={bored} style={{ width: "245px", height: "210px" }} />}
            {status === "mad" && <img src={mad} style={{ width: "245px", height: "210px" }} />}
            {/* hungry */}
            {status === "hungry" && <img src={mad} style={{ width: "245px", height: "210px" }} />}
            {status === "sad" && <img src={sad} style={{ width: "245px", height: "210px" }} />}
            {status === "sleeping" && <img src={sleeping} style={{ width: "245px", filter: "brightness(50%)", height: "210px" }} />}
            {status === "dead" && <img src={dead} className="dead" style={{ width: "245px", height: "210px" }} />}
            <div className="terminal"><span>{"Level : " + Math.floor(age / 100)}</span><nav></nav></div>
            <div className="terminal"><span>{statusQuote}</span><nav></nav></div>
            <div className="d-flex flex-column">
                {this.renderButtons()}
            </div>
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


    renderHeader() {
        const { status, health, happiness, starvation, bored, dirty, energy } = this.state
        return (<>
            <div style={{ display: "flex", color: "white", background: "#255325" }} >

                <div >
                    <div>
                        <Label size="sm" style={{ padding: "5px" }} for="exampleSelectMulti">Health</Label>
                    </div>
                    <div >
                        <Label size="sm" style={{}} for="exampleSelectMulti">{Math.floor(health)}</Label>
                    </div>

                    {/* <Progress style={{ width: "100%", height: "3px", padding: "5px" }} value={2 * 5} /> */}
                </div>
                <div ><div>
                    <Label size="sm" style={{ padding: "5px" }} for="exampleSelectMulti">Happy</Label>
                </div>
                    <div>
                        <Label size="sm" style={{}} for="exampleSelectMulti">{Math.floor(happiness)}</Label>
                    </div>
                    {/* <Progress style={{ width: "100%", height: "3px", padding: "5px" }} value={40} /> */}
                </div>
                <div >
                    <div>
                        <Label size="sm" style={{ padding: "5px" }} for="exampleSelectMulti">Hunger</Label>
                    </div>
                    <div>
                        <Label size="sm" style={{}} for="exampleSelectMulti">{Math.floor(starvation)}</Label>
                    </div>
                    {/* <Progress style={{ width: "100%", height: "3px", padding: "5px" }} value={80} /> */}
                </div>
                <div >
                    <div>
                        <Label size="sm" style={{ padding: "5px" }} for="exampleSelectMulti">Bored</Label>
                    </div>
                    <div>
                        <Label size="sm" style={{}} for="exampleSelectMulti">{Math.floor(bored)}</Label>
                    </div>
                    {/* <Progress style={{ width: "100%", height: "3px", padding: "5px" }} value={2 * 5} /> */}
                </div>
                <div >
                    <div>
                        <Label size="sm" style={{ padding: "5px" }} for="exampleSelectMulti">Dirty</Label>
                    </div>
                    <div>
                        <Label size="sm" style={{}} for="exampleSelectMulti">{Math.floor(dirty)}</Label>
                    </div>
                    {/* <Progress style={{ width: "100%", height: "3px", padding: "5px" }} value={2 * 5} /> */}
                </div>
            </div>
            <Progress color="success" style={{ height: "20px", padding: "5px" }} value={energy} />
        </>)
    }
}

export default Pet
